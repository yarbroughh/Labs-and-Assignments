//Function to pull in the weather based on user input
async function getWeatherData() {
    //get information from the user via IDs from HTML
    const locationInput = document.getElementById("location");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
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
        createPackingList(result); // Pass the data to createPackingList()
    } catch (error) {
        console.error(error);
    }
}
//Add an event listener to the button to trigger the function to get the weather
document.getElementById("getWeather").addEventListener("click", getWeatherData);

//Once we have the weather, create function to display the forecast, naming the parameter "data"
function displayForecastData(data) {
    const forecastDisplay = document.getElementById("displayForecast");

//Create a row for the cards (one for each day of date range) which should wrap to a new row
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    //Loop for each of the days in date range
    data.days.forEach(day => {

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
        
        //API passes file name of weather condition icon but not "png" so adjust for that
        img.src = `Weather_icons/${day.icon}.png`;
        img.alt = "Weather Icon representing the forecast";

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

    });
        // Append each daily card to forecast display
        forecastDisplay.appendChild(rowDiv);
    }

//This will allow users to add, delete, update a list of previous destinations with thoughts on
// the related weather for that month

//Create function to fetch data
async function fetchPastVacations() {
    //Get the data from the backend and handle errors
    try {
    const response = await fetch("http://localhost:3001/pastVacations");
    if (!response.ok) {
        throw new Error (`HTTP error! status: ${response.status}`);
    }
    const fetchedVacations = await response.json();
    //Display the list of vacations on the page
    displayPastVacations(fetchedVacations);
    } catch (error) {
        console.error("Error fetching past vacations:", error);
    }
}

//Call to display the vacations
fetchPastVacations();

//Create the div to hold vacations
const pastVacationsDiv = document.getElementById("past-vacations");

//Create the function to display vacations
function displayPastVacations(vacationList) {
    //Clear so no duplicates
    pastVacationsDiv.innerHTML = ""
    
    const labelRow = document.createElement("div");
    labelRow.classList.add("row", "mb-3", "border", "p-3");

    labelRow.innerHTML = `
        <div class="col-12 col-md-3 destination"><strong>Destination</strong></div>
        <div class="col-12 col-md-2 month"><strong>Month Traveled</strong></div>
        <div class="col-12 col-md-1 rating"><strong>Rating</strong></div>
        <div class="col-12 col-md-5 thoughts"><strong>Thoughts</strong></div>
        <div class="col-12 col-md-1"></div>
        `;
    
        pastVacationsDiv.appendChild(labelRow);

    //loop for each vacation database object to create a row to list them

    vacationList.forEach(vacation => {
        const row = document.createElement("div");
        row.classList.add("row", "mb-3", "border", "p-3");

        //Tested textContent, then innerHTML, then table, then settled on bootstrap grid 
        //add a class and 'contenteditable="true"' for each item to allow users to edit
        //Add a style to the Save button so it won't be displayed until an item is edited       
                row.innerHTML = `
                    <div class="col-12 col-md-3 destination">${vacation.destination}</div>
                    <div class="col-12 col-md-2 month">${vacation.monthTraveled}</div>
                    <div class="col-12 col-md-1 rating">${vacation.rating}</div>
                    <div class="col-12 col-md-5 thoughts">${vacation.thoughts}</div>
                    <div class="col-12 col-md-1">
                        <button class="btn btn-sm edit-btn" data-id="${vacation.id}">Edit</button>    
                        <button class="btn btn-sm save-btn" data-id="${vacation.id}" style="display: none;">Save</button>
                        <button class="btn btn-sm delete-btn" data-id="${vacation.id}">Delete</button>
                        </div>
                `;
                pastVacationsDiv.appendChild(row);

            //Create variables for and add event listeners for the buttons to edit and delete entries
            const editBtn = row.querySelector(".edit-btn");
            const saveBtn = row.querySelector(".save-btn"); //had to add this in addition to edit
            const deleteBtn = row.querySelector(".delete-btn");
            
            //Add event listener to Edit Button
            editBtn.addEventListener("click", async () => {
                // dataset.id is something new I learned
                const vacationId = editBtn.dataset.id;
                //Confirming the correct item is being targeted
                console.log("Vacation ID to edit:", vacationId);
                //Target the row the clicked button is on (learned 'closest')
                const row = editBtn.closest(".row");

                // Make the divs editable (originally did in innerHTML but that made them editable
                //before clicking the Edit button)
                row.querySelector(".destination").contentEditable = true;
                row.querySelector(".month").contentEditable = true;
                row.querySelector(".rating").contentEditable = true;
                row.querySelector(".thoughts").contentEditable = true;

                //Hide Edit Button, Show Save button when user starts editing
                row.querySelector(".edit-btn").style.display = "none";
                row.querySelector(".save-btn").style.display = "inline-block";
            });
            saveBtn.addEventListener("click", async () => {
                // dataset.id is something new I learned
                const vacationId = saveBtn.dataset.id;
                //Confirming the correct item is being targeted
                console.log("Vacation ID to save:", vacationId);
                //Target the row the clicked button is on (learned 'closest')
                const row = saveBtn.closest(".row");
                //Get the new values from the user and replace them in the database
                const destination = row.querySelector(".destination").textContent.trim();
                const monthTraveled = row.querySelector(".month").textContent.trim();
                const rating = row.querySelector(".rating").textContent.trim();
                const thoughts = row.querySelector(".thoughts").textContent.trim();

                //Create an object to hold all of the user's new information
                const vacationDataObject = {
                    destination: destination,
                    monthTraveled: monthTraveled,
                    rating: rating,
                    thoughts: thoughts,
                };

                try {
                    const response = await fetch(`http://localhost:3001/pastVacations/${vacationId}`, {
                    method: "PUT",
                    headers: { 
                    "content-type": "application/json", 
                    },
                    body: JSON.stringify(vacationDataObject),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                //Now update it within the list
                vacationList = vacationList.map(vacation => {
                    if (vacation.id === parseInt(vacationId)) {
                        return {
                            id: vacation.id,
                            ...vacationDataObject,
                        };
                    }
                    return vacation;
                });
                // Refresh display
                displayPastVacations(vacationList);
                
                // Make elements non-editable again
                row.querySelector(".destination").contentEditable = false;
                row.querySelector(".month").contentEditable = false;
                row.querySelector(".rating").contentEditable = false;
                row.querySelector(".thoughts").contentEditable = false;

                //Hide Save Button, show Edit Button
                row.querySelector(".save-btn").style.display = "none";
                row.querySelector(".edit-btn").style.display = "inline-block";
            
            } catch (error) {
                console.error("Error saving vacation:", error);
            }
        });

            deleteBtn.addEventListener("click", async () => {
                // dataset.id is something new I learned
                const vacationId = deleteBtn.dataset.id;
                console.log("Vacation ID to delete:", vacationId);
                try {
                    const response = await fetch(`http://localhost:3001/pastVacations/${vacationId}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                vacationList = vacationList.filter(vacation => vacation.id !== vacationId);
                // Refresh display
                displayPastVacations(vacationList);
                } catch (error) {
                    console.error("Error deleting vacation:", error);
                }
            });
        });   
}
//Add a way for a user to add an entry
//First create a div to hold it
const addVacationDiv = document.getElementById("add-vacation");
addVacationDiv.classList.add("mb-3");

//Add a button and use Bootstrap for styling
const addBtn = document.createElement("button");
addBtn.textContent = "Add Vacation";
addBtn.classList.add("btn", "mb-3");
addVacationDiv.appendChild(addBtn);

//Add event listener to reveal the fields to be added
addBtn.addEventListener("click", async () => {
//Create input fields for new vacation
    const destinationInput = document.createElement("input");
    destinationInput.placeholder = "Destination";
    destinationInput.classList.add("form-control");
    addVacationDiv.appendChild(destinationInput);
    
    const monthInput = document.createElement("input");
    monthInput.placeholder = "Month Traveled";
    monthInput.classList.add("form-control");
    addVacationDiv.appendChild(monthInput);

    const ratingInput = document.createElement("input");
    ratingInput.placeholder = "Rating";
    ratingInput.classList.add("form-control");
    addVacationDiv.appendChild(ratingInput);

    const thoughtsInput = document.createElement("input");
    thoughtsInput.placeholder = "Thoughts";
    thoughtsInput.classList.add("form-control");
    addVacationDiv.appendChild(thoughtsInput);

    const saveNewVacationBtn = document.createElement("button");
    saveNewVacationBtn.textContent = "Save New Vacation";
    saveNewVacationBtn.classList.add("btn", "mt-3");
    addVacationDiv.appendChild(saveNewVacationBtn);

    saveNewVacationBtn.addEventListener("click", async () => {
        const newVacation = {
            destination: destinationInput.value,
            monthTraveled: monthInput.value,
            rating: ratingInput.value,
            thoughts: thoughtsInput.value,
        };
        try {
            const response = await fetch("http://localhost:3001/pastVacations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacation),
            });

            if (response.ok) {
                // Refresh display
                fetchPastVacations(); // Re-fetch the data to include the new vacation
            } else {
                console.error("Failed to add vacation");
            }
        } catch (error) {
            console.error("Error adding vacation:", error);
        }
    });
});
