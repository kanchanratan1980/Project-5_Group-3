// // Check if the data is loaded correctly
// console.log(listingsData);  

// // Create the 'street' tile layer as a second background of the map
// let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// });

// // Create the layer groups, base maps, and overlays for our data set.
// // Add a control to the map that will allow the user to change which layers are visible.

// let allListings = L.layerGroup();
// let entireHome = L.layerGroup();
// let privateRoom = L.layerGroup();

// // Create the marker clusters for each neighborhood
// let neighborhoodClusters = {};


// // Create the map object with center and zoom options.
// let myMap = L.map("map", {
//     center: [39.75, -104.99],
//     zoom: 13,
//     layers: [street, allListings]  // add the 'street' base tile layer to the map, and the listing layer group
// });
  
// // Create a baseMaps object
// let baseMaps = {
//     "Street Map": street,
// };
  
// // Create overlays for earthquakes and tectonic plates
// let overlayMaps = {
//     "All Listings": allListings,
//     "Entire home/apt": entireHome,
//     "Private room": privateRoom
// };

// // Add a control to the map
// L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
// }).addTo(myMap);


// function styleInfo(listing) {
//     return {
//         opacity: 1,
//         fillOpacity: .8,
//         fillColor: getColor(listing.listing_type),
//         color: "black",
//         radius: 12,
//         weight: 0.5
//     };
// }

// function getColor (listing_type) {
//     if (listing_type === 'Entire home/apt') {
//         return "green";
//     }
//     else if (listing_type === 'Private room') {
//         return "blue";
//     }
//     else {
//         return "red";
//     }
// }

// listingsData.forEach(function(listing) {
//     let lat = listing.Latitude;
//     let lng = listing.Longitude;
//     let marker = L.circleMarker([lat,lng], styleInfo(listing))
//         .bindPopup(`<h3>Neighborhood: ${listing.Neighborhood}</h3>
//             <hr><p>Listing Type: ${listing.listing_type}</p>
//             <p>Price: $${listing.Price}</p>`);
//     marker.addTo(allListings);
// });


// Create the base map tile layer
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  // Create layer groups for each listing type
  let allListings = L.layerGroup();
  let entireHome = L.layerGroup();
  let privateRoom = L.layerGroup();
  
  // Create marker cluster group
  let markerCluster = L.markerClusterGroup();
  
  // Initialize the map
  let myMap = L.map("map", {
    center: [39.75, -104.99],
    zoom: 13,
    layers: [street, markerCluster]
  });
  
  // Add base and overlay layers
  let baseMaps = { "Street Map": street };
  let overlayMaps = {
    "All Listings": allListings,
    "Entire home/apt": entireHome,
    "Private room": privateRoom,
    "Marker Clusters": markerCluster
};
  
  L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(myMap);
  
  // Marker style configuration
  function styleInfo(listing) {
    return {
      radius: 8,
      fillColor: getColor(listing.listing_type),
      color: "#000",
      weight: 0.5,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
  
  function getColor(type) {
    if (type === "Entire home/apt") return "green";
    if (type === "Private room") return "blue";
    return "red";
  }
  
  // Add each listing to the appropriate layer and marker cluster
  listingsData.forEach(listing => {
    let marker = L.circleMarker([listing.Latitude, listing.Longitude], styleInfo(listing))
      .bindPopup(`
        <h3>Neighborhood: ${listing.Neighborhood}</h3>
        <p>Listing Type: ${listing.listing_type}</p>
        <p>Price: $${listing.Price}</p>
      `);
  
    // Add marker to main cluster and specific layer
    marker.addTo(allListings);
    markerCluster.addLayer(marker);
  
    if (listing.listing_type === "Entire home/apt") {
      marker.addTo(entireHome);
    } else if (listing.listing_type === "Private room") {
      marker.addTo(privateRoom);
    }
  });
