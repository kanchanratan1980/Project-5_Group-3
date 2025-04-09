create table clean_listings(
Id VARCHAR (100) PRIMARY KEY,
Neighborhood VARCHAR(100),
Latitude NUMERIC(9,6),
Longitude NUMERIC(9,6),
Listing_Type VARCHAR(50),
Price NUMERIC(10,2),
Available_Days_per_year INTEGER,

Host_Listings_Count INTEGER
);
select * from clean_listings;
