import { Vacation } from "./types";
import { fetchPastVacations } from "./getvacations";

 //Create the div to hold vacations
  //TS - add the type "as HTMLELement" to resolve several errors throughout all files
  const pastVacationsDiv = document.getElementById("past-vacations") as HTMLElement;
  
  //Create the function to display vacations
  //TS had to add "any" to give it a type and resolve the error but then I added a type 
  //for Vacation when I split files, so changed from any to vacation
  export function displayPastVacations(vacationList: Vacation[]) {
    //Clear so no duplicates
  //ts
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
  
        //Use a bootstrap grid and add a class and 'contenteditable="true"' for each item 
        // to allow users to edit
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
            //TS - for all the buttons, I needed to define the type as HTMLElement to resolve
            //errors related to the buttons ("could be null")
            const editBtn = row.querySelector(".edit-btn") as HTMLElement;
            const saveBtn = row.querySelector(".save-btn") as HTMLElement; //had to add this in addition to edit
            const deleteBtn = row.querySelector(".delete-btn") as HTMLElement;
            
            //Add event listener to Edit Button
            editBtn.addEventListener("click", async () => {
                const vacationId = editBtn.dataset.id;
                //Confirming the correct item is being targeted
                console.log("Vacation ID to edit:", vacationId);
                //Target the row the clicked button is on (learned 'closest')
                //TS add "as HTMLElement"
                const row = editBtn.closest(".row") as HTMLElement;
  
                // Make the divs editable (originally did in innerHTML but that made them editable
                //before clicking the Edit button)
                //TS had to add as HTMLElement. Broke into 2 lines each instead of 1 
                //and create variable for better readability. Also had to add " " to true
                const destinationElement = row.querySelector(".destination") as HTMLElement; 
                destinationElement.contentEditable = "true";
                const monthElement = row.querySelector(".month") as HTMLElement;
                monthElement.contentEditable = "true";
                const ratingElement = row.querySelector(".rating") as HTMLElement;
                ratingElement.contentEditable = "true";
                const thoughtsElement = row.querySelector(".thoughts") as HTMLElement;
                thoughtsElement.contentEditable = "true";
  
                //Hide Edit Button, Show Save button when user starts editing
                //Same TS fixes - create a variable and add "as HTMLElement"
                const editBtnElement = row.querySelector(".edit-btn") as HTMLElement;
                editBtnElement.style.display = "none";
                const saveBtnElement = row.querySelector(".save-btn") as HTMLElement;
                saveBtnElement.style.display = "inline-block";
            });
            saveBtn.addEventListener("click", async () => {
                 //TS - had to add a check to confirm it's a string by adding !
                const vacationId = saveBtn.dataset.id!;
                //Confirming the correct item is being targeted
                console.log("Vacation ID to save:", vacationId);
                //Target the row the clicked button is on (learned 'closest')
                const row = saveBtn.closest(".row") as HTMLElement;
                //Get the new values from the user and replace them in the database
                //TS - there were 2 ways to handle .trim to check for null: the classic(longer)
                //way and the modern (shorter) way. I did the first two the classic way and the
                //other tow the modern way so I could see them side-by-side, have a future 
                //reference and recognize that the classic is probably how the bootcamp would
                //teach me but the modern way is probably now typical on the job
                const destinationElement = row.querySelector(".destination") as HTMLElement;
                const destination = destinationElement.textContent ? destinationElement.textContent.trim() : "";
                const monthElement = row.querySelector(".month") as HTMLElement;
                const monthTraveled = monthElement.textContent ? monthElement.textContent.trim() : "";
                const ratingElement = row.querySelector(".rating") as HTMLElement;
                const rating = ratingElement.textContent?.trim() || "";
                const thoughtsElement = row.querySelector(".thoughts") as HTMLElement;
                const thoughts = thoughtsElement.textContent?.trim() || "";
  
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
  
                //Learned that I could simplify the refresh, replacing a lot of code with
                //just this one line
                fetchPastVacations();
                
                // // Make elements non-editable again
                // //TS had to handle these the same way I handled above when setting to true:
                // const destinationElement = row.querySelector(".destination") as HTMLElement; 
                // destinationElement.contentEditable = "false";
                // const monthElement = row.querySelector(".month") as HTMLElement;
                // monthElement.contentEditable = "false";
                // const ratingElement = row.querySelector(".rating") as HTMLElement;
                // ratingElement.contentEditable = "false";
                // const thoughtsElement = row.querySelector(".thoughts") as HTMLElement;
                // thoughtsElement.contentEditable = "false";
  
                // //Hide Save Button, show Edit Button
                // const saveBtnElement = row.querySelector(".save-btn") as HTMLElement;
                // saveBtnElement.style.display = "none";
                // const editBtnElement = row.querySelector(".edit-btn") as HTMLElement;
                // editBtnElement.style.display = "inline-block";
            
            } catch (error) {
                console.error("Error saving vacation:", error);
            }
        });
  
            deleteBtn.addEventListener("click", async () => {
                // dataset.id is something new I learned
                const vacationId = deleteBtn.dataset.id!;
                console.log("Vacation ID to delete:", vacationId);
                try {
                    const response = await fetch(`http://localhost:3001/pastVacations/${vacationId}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                //To refresh the display I ended up replacing these two lines and fetched
                //A "fresh" list of vacations
                // vacationList = vacationList.filter(vacation => vacation.id !== parseInt(vacationId));
                // // Refresh display
                // displayPastVacations(vacationList);
                fetchPastVacations()
                } catch (error) {
                    console.error("Error deleting vacation:", error);
                }
            });
        });   
  }
  //Add a way for a user to add an entry
  //First create a div to hold it
  const addVacationDiv = document.getElementById("add-vacation") as HTMLElement;
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
        //Clear the input fields
        destinationInput.value = "";
        monthInput.value = "";
        ratingInput.value = "";
        thoughtsInput.value = "";
    });
  });
  