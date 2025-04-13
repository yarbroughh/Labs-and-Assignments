import { displayPastVacations } from "./displayvacations";


//This will allow users to add, delete, update a list of previous destinations with thoughts on
// the related weather for that month

//Create function to fetch data
export async function fetchPastVacations() {
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
  
 