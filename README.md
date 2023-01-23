<h1>What is this project?</h1>
A weather app made with React and React-Router-Dom deployed through GitHub Pages in <a href="https://jpabdou.github.io/weather-app/">here</a>. Location data courtesy of Geocodify API Web Service (https://geocodify.com/) and weather data courtesy of Weather.gov API Web Service (https://www.weather.gov/documentation/services-web-api).

---

<h2>How do I use this app?</h2>

<ul>
<li>You start at the homepage with a form for searching a United States city that you want the 14-day weather forecast for. Type the U.S. city you want to search for.
<img src="/site-example-images/city input search.jpg" alt="form with a search for New York"/>

<li>When you have typed in your city search, click on the "Search for a U.S. city" button to display the top city search results. Then, click on the city in search results to view the 14-day weather forecast for that city.
<img src="/site-example-images/city input search results.jpg" alt="search results for New York on the homepage"/>

<li>Or instead of search for a particular city, you can use the dropdown input for several major U.S. cities and click the "Get weather forecast for a major U.S. City" button to immediately view the forecast for that city:
<img src="/site-example-images/city dropdown search.jpg" alt="form with a dropdown selection for New York"/>

<li>By clicking on the search result through the input form search or clicking the dropdown search option, you will be routed to the weather forecast page. If you want to serach for another city, click on the "Home" link in the header and if you want to return to the city weather forecast results, click on the "Weather For Current City" link in the header.
<img src="/site-example-images/weather data for city.jpg" alt="site with 14-day weather forecast of New York City"/>
</ul>

---

<h2>Things to keep in mind</h2>
<ul>
<li>If you click the "Weather For Current City" link in the header and fail to navigate out of the Home page, you still need to click on or confirm a city choice. An easy way to determine if you have a city selected is by checking if the header title state "Weather for Any U.S. City" (no city selected) or the name of the city selected.

<li>When you are typing in your city search, spelling is key. The search will not necessarily provide suitable search suggestions for incorrect spelling.
<img src="/site-example-images/city with wrong spelling.jpg" alt="search results for New York spelled wrong on the homepage"/>

<li>As the Weather.gov API provides the weather data only for coordinates within the United States and the Geocodify API provides the location data only for cities, please restrict your search to only cities within the U.S. 
</ul>
