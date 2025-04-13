import { WeatherApiResponse } from "./types";

//create a variable since I have to import a whole folder for icons to be dynamically pulled
//initially I had as: "url" but Vite gave me a notice that's been deprecated and instructed
//me to use "query" instead
const icons: any = import.meta.glob("./Weather_icons/*.png", { query: "?url", import: "default" });

  //Once we have the weather, create function to display the forecast, naming the parameter "data"
  //Translate to TS and resolve error by adding the type I created to the data parameter
  //Also had to make this an async function because i had to use "await" to dynamically pull
  //the weather icons
  export async function displayForecastData(data: WeatherApiResponse) {
    const forecastDisplay = document.getElementById("displayForecast") as HTMLElement;

  //Clear previous forecasts
  forecastDisplay.innerHTML = "";

  //Create a row for the cards (one for each day of date range) which should wrap to a new row
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
  
    //Loop for each of the days in date range
    //TS - this was originally a forEach loop and I had to change to for of loop because forEach
    //doesn't wait for await to resolve
    for (const day of data.days) {
  
        // Create card div using Bootstrap
        const cardDiv = document.createElement("div");
  
        // Add Bootstrap card classes and margin
        cardDiv.classList.add("card", "col-md-4", "col-lg-2");
  
        // Create card body div
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
  
        // Create image element (replace with actual icon logic)
        const img = document.createElement("img");
        
        //add classes to put at top and apply css to icon
        img.classList.add("card-img-top", "weather-icon");
  
        //TS Create path to pull the icons from and update the img.src from my original code 
        const iconPath = `./Weather_icons/${day.icon}.png`;
  
        //TS Create variable to dynamically import the icon. Had to add await because asynchronous
        const iconUrl = await icons[iconPath]();
                    
        //API passes file name of weather condition icon but not "png" so adjust for that
        //TS Change the img.src to pull from the dynamic URL
        img.src = iconUrl;
  
        //Add day.conditions here for accessibility - instead of having a static alt tag, it
        //will also show the corresponding conditions for that icon (updated original code from
        //generic "the forecast" to the dynamic "conditions" field)
        img.alt = `Weather Icon representing ${day.conditions}`;
  
        // Create card text element to list the forecast items
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML = `
            <strong>Date:</strong> ${day.datetime}<br>
            <strong>Temperature:</strong> ${day.temp}°F<br>
            <strong>Conditions:</strong> ${day.conditions}
        `;
  
        // Append elements to card body
        cardBody.appendChild(img);
        cardBody.appendChild(cardText);
  
        // Append image and card body to card div
        // cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
  
        //append card to the row
        rowDiv.appendChild(cardDiv);
  
    }
        // Append each daily card to forecast display
        forecastDisplay.appendChild(rowDiv);
    }
  