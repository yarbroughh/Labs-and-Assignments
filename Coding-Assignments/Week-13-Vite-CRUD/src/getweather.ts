//Change this to an API_KEY variable below so I'm not sharing the actual key on github
// import { API_KEY } from "./API_KEY";
import { displayForecastData } from "./forecast";

//Function to pull in the weather based on user input

//First create a variable to import my api key without allowing someone within github to see it
const API_KEY = import.meta.env.VITE_API_KEY;

//Added as HTMLInputElement; to the input variables to allow access to the .value properties
export async function getWeatherData() {
    //get information from the user via IDs from HTML
    const locationInput = document.getElementById("location") as HTMLInputElement;
    const startDateInput = document.getElementById("startDate") as HTMLInputElement;
    const endDateInput = document.getElementById("endDate") as HTMLInputElement;
    //set up variables to connect API info to my app
    const location = locationInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
  
  //Connect to the weather API and use error handling provided from documentation of weatherstack
  //(the API I was originally trying, but switched to visualcrossing—the code still worked)
  
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?key=${API_KEY}`);
        const result = await response.json();
        console.log(result);
         //Call the forecast data to display on page the value of the API's data is passed
         //to both the forecast and the packing list functions
        displayForecastData(result);

        //Clear input fields after displaying result
        locationInput.value = "";
        startDateInput.value = "";
        endDateInput.value = "";
    } catch (error) {
        console.error(error);
    }
  }
  
 