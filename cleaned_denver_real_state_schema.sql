create table clean_denver_real_estate(
Region_Id VARCHAR (100) PRIMARY KEY,
Neighborhood VARCHAR(100),
state VARCHAR(50),
City VARCHAR(50),
Average_Home_Price_2024 NUMERIC(10,2)
-- FOREIGN KEY (Neighborhood)REFERENCES clean_listings(Neighborhood)

);

select * from clean_denver_real_estate;

