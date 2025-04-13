//The large majority of my errors were due to needing to add "as HTMLElement"
//The next step was to consider my logic for file breakdown which is:
//main.ts
//getweather.ts for connecting to the weather API
//forecasts.ts for displaying the weather for each vacation day
//getvacation.ts for connecting to my vacation database
//displayvacations.ts for the CRUD portion which allows users to view, add, edit, and delete entries
//types.ts custom type definitions / define reusable data types

//Import my CSS files and my image files
import "bootstrap/dist/css/bootstrap.min.css";
import "./Week12.css";
import raftImageUrl from "./man_on_raft.jpg";

//I've moved my code to separate files, so I import here to connect the files
import { getWeatherData } from "./getweather"
import { fetchPastVacations } from "./getvacations";

//Connect event listeners
  //create a variable to display the hero image here (it doesn't pull from HTML by filename
  //in TS)
  const heroImage = document.getElementById("hero-image") as HTMLImageElement;
  if (heroImage) {
    heroImage.src = raftImageUrl;
  }

  //Add an event listener to the button to trigger the function to get the weather
  //translate to TS and remove error by creating a variable to confirm the element exists
  const getWeatherButton = document.getElementById("getWeather") as HTMLButtonElement;
  
  getWeatherButton.addEventListener("click", getWeatherData);

  fetchPastVacations;