function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  
  let city = searchInputElement.value;
  let apiKey = "dd83fab04t350832b43f1o8b985e5044";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
 
  axios.get(apiUrl).then(displayWeather);
};

function displayWeather(response) {
let temperature=Math.round(response.data.temperature.current);
let city = response.data.city;
let currentWeather=document.querySelector("#current-city");
currentWeather.innerHTML=`${city}`;
let currentTemperature=document.querySelector("#current-temperature-value");
currentTemperature.innerHTML=`${temperature}`;

}


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);




