// Check if the data is loaded correctly
console.log(listingsData);  

// Create the 'street' tile layer as a second background of the map
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create the layer groups, base maps, and overlays for our data set.
// Add a control to the map that will allow the user to change which layers are visible.

let allListings = L.layerGroup();
let entireHome = L.layerGroup();
let privateRoom = L.layerGroup();

// Create the marker clusters for each neighborhood
let neighborhoodClusters = {};


// Create the map object with center and zoom options.
let myMap = L.map("map", {
    center: [39.75, -104.99],
    zoom: 13,
    layers: [street, allListings]  // add the 'street' base tile layer to the map, and the listing layer group
});
  
// Create a baseMaps object
let baseMaps = {
    "Street Map": street,
};
  
// Create overlays for earthquakes and tectonic plates
let overlayMaps = {
    "All Listings": allListings,
    "Entire home/apt": entireHome,
    "Private room": privateRoom
};

// Add a control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);


function styleInfo(listing) {
    return {
        opacity: 1,
        fillOpacity: .8,
        fillColor: getColor(listing.listing_type),
        color: "black",
        radius: 12,
        weight: 0.5
    };
}

function getColor (listing_type) {
    if (listing_type === 'Entire home/apt') {
        return "green";
    }
    else if (listing_type === 'Private room') {
        return "blue";
    }
    else {
        return "red";
    }
}

listingsData.forEach(function(listing) {
    let lat = listing.Latitude;
    let lng = listing.Longitude;
    let neighborhood = listing.Neighborhood;

    // Check if the cluster for the neighborhood already exists; if not, create it
    if (!neighborhoodClusters[neighborhood]) {
        neighborhoodClusters[neighborhood] = L.markerClusterGroup();  // Create a new cluster group for the neighborhood
    }

    let marker = L.circleMarker([lat,lng], styleInfo(listing))
        .bindPopup(`<h3>Neighborhood: ${listing.Neighborhood}</h3>
            <hr><p>Listing Type: ${listing.listing_type}</p>
            <p>Price: $${listing.Price}</p>`);

    neighborhoodClusters[neighborhood].addLayer(marker);
    allListings.addLayer(marker);
});

// Add the neighborhood clusters to the map
Object.values(neighborhoodClusters).forEach(function(cluster) {
    myMap.addLayer(cluster);
});
