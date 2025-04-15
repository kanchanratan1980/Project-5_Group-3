# Denver Airbnb Analysis
Creators: Luke Roberts, Kanchan Kumari, Angelina Murdock<br>
Date: April 2025

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Reasearch Questions to Answer](#research-questions-to-answer)
- [Deployment](#deployment)
- [Key Findings](#key-findings)
- [Recommendation](#recommendation)
- [Methodology](#methodology)
- [Opportunities for Further Analysis](#opportunities-for-further-analysis)
- [ERD](#erd)
- [Resources](#resources)

## Project Description
This project aims to analyze Airbnb listing data, specifically for Denver, Colorado, and gain insights on the listing demand, highest concentration areas, average annual income per property, and most profitable neighborhoods. This will be presented in multiple visualizations, such as an interactive map with markers for each listing and charts showing the income data. 

## Research Questions to Answer
1. What is the potential income of an Airbnb compared to the average home cost by neighborhood?
2. Which neighborhoods are the most profitable to host in?
3. Which neighborhoods have the most Airbnb listings?
4. How long will it take to make back your investment in each neighborhood?

## Features
- **Map Visualization:** Interactive map showing the concentration of Airbnb listings across Denver neighborhoods.
- **Data Visualizations:** Bar charts displaying potential revenue and average home prices by neighborhood to identify high-performing areas.
- **ERD**: Entity Relationship Diagram (ERD)
Visual overview of the data schema, illustrating how tables such as listings, neighborhoods, and pricing are related.


## Map Visualization 
Interactive map created using Leaflet allows users to explore Airbnb listing data in Denver on a large and small scale.
#### Zoomed-out view showing overall listing density.
![Map visualization](Map/Images/zoomed_out_map_visualization.png)

#### Example of a single marker with popup info.
![marker example](Map/Images/single_marker.png)

## Deployment
### GitHub Pages Link
- git hub pages link for the map

## Key Findings
![Average Potential Revenue by Neighborhood (100%, 70%, 50% Occupancy)](Graphs/avg_potential_revenue_neighborhood.png)
At a 70% occupancy rate, the potential gross earnings in these neighborhoods range between $35k - $60k per year. The neighborhoods with the highest revenue potential are Belcaro, University Park and Jefferson Park. 

![Top 10 Denver Neighborhoods by Average Home Price (2024)](Graphs/top_10_neighborhoods_price.png)
While some of the most expensive neighborhoods are also in the top for Airbnb Revenue, for some of these neighborhoods the ROI is poor, as the entry cost is too high. <hr>

!["Home Prices for Airbnb Revenue Chart Neighborhoods"](Graphs/home_prices.png)
* Home prices of top ten airbnb grossing neighborhoods range from just over $400k to just over $1.5m
* Home price is not directly correlated to the potential Airbnb revenue <hr>


![Airbnb Revenue (70% Occ.) vs. Home Price by Neighborhood](Graphs/revenue_v_home_price.png)
Jefferson Park and Regis offer strong Airbnb revenue with lower home costs, making them great for ROI. Belcaro brings in the most revenue, but its high home prices make returns less efficient by comparison.

![Payback Period by Neighborhood at 70% Occupancy](Graphs/payback_period.png)


## Recommendation
* We do not recommend targeting Belcaro, Hilltop or Cory - Merrill as the potential ROI is poor, or even losing money.
* Jefferson Park and Regis are the best neighborhoods to pursue for best cost to return ratio. 
* An investor would see the most rapid ROI in the College View - South Platte neighborhood, taking approximately 9.5 years to see the return. 
* The same investor would take over 40 years to see their investment fully recovered in the Hilltop neighborhood. 


## Methodology
### Data Processing and Visualization
**JavaScript Functions**: Used to render map layers, update visual elements based on user input, and integrate data with Leaflet for smooth map interactivity.

**Leaflet**: Used to create an interactive map that displays the distribution of Airbnb listings across Denver neighborhoods. 

**Dask**: Utilized for efficient, scalable data processing to for handle large Airbnb and Zillow datasets during cleaning and transformation.

**MatplotLib**: Used to generate bar charts and other static visualizations that illustrate trends in potential revenue and average home prices by neighborhood.

## ERD

## Opportunities for Further Analysis
* Add home sales overlay to the map visualization

## Resources
- **DU Bootcamp Module 15:** Utilized challenge files and class materials from the bootcamp.
- **Airbnb data:** https://insideairbnb.com/get-the-data/ 
- **Zillow data:** https://www.zillow.com/research/data/ 
- **Using csv files in javascript:** https://medium.com/@ryan_forrester_/read-csv-files-in-javascript-how-to-guide-8d0ac6df082a 
- **Dask:** https://docs.dask.org/en/stable/ 
- **ChatGPT:** Assisted with converting a .csv file to a .js file. Also used to troubleshoot code.

