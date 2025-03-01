/*This menu will allow users to view and update a list of animals available for adoption. The first options
will define the species and the next layer of options will define the individual animals */ 

//Create a class for Pet first. The pets will have 5 attributes and belong to a Species. Class is a keyword
//and Pet plus the attributes were defined by me. Constructor is the keyword to initialize the object.
class Pet {
    constructor(name, sex, age, appearance, demeanor) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.appearance = appearance; 
        this.demeanor = demeanor;
    }
    describe() {
        //Send to the console a full description of the individual pet that incldes the 5 attributes.
        return `${this.name} is a ${this.age}-year-old ${this.sex}, who is ${this.appearance} in appearance and ${this.demeanor} in attitude.`
    }
}

//Create a class for Species, pulling in a parameter for the species name and creating an array to hold the
//individual pets.
class Species {
    constructor(name) {
        this.name = name;
        this.pets = [];
    }
//Create a method (a function within the class) to add individual pets to the array for that Species 
    addPet(pet) {
        if (pet instanceof Pet) {
            this.pets.push(pet);
        } else {
        //This was included 
            throw new Error(`You can only add a new Pet. argument is not a pet: ${pet}`);
        }
    }
//List out how many pets are available within this Species (still within the Class).
    describe() {
        return `There are ${this.pets.length} ${this.name} available for adoption.`;
    }
}

//Create a class for the menu itself, including the choices that can be made by the user.

class AdoptionMenu {
    constructor() {
        this.speciesOptions = []; //This initializes the property as an empty array for Species to be added to
        this.selectedSpecies = null; //This will be used later to add pets to the species that is selected.
    }

    start() { //This begins the menu options and defines what to do based on user input. The options are
        //created using a switch

        let selection = this.showAdoptionMenuOptions();
        //option 0 will exit, so do this loop as long as the user didn't choose 0. I added null so that it 
        //would exit (default) if the "cancel" button is pushed
        while (selection !== null && selection != 0) { 
            switch(selection) {
                case "1" :
                    this.displaySpecies();
                    break;
                case "2" :
                    this.createNewSpecies();
                    break;
                case "3" :
                    this.deleteSpecies();
                    break;
                case "4" :
                    this.viewPetsInSpecies();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showAdoptionMenuOptions();
        }
        alert(`Exiting adoption interface.`); //This message should display if someone chooses 0 to exit.
    }

    //This defines how the menu choices for Species are displayed.
    showAdoptionMenuOptions() { //The following prompt will display a dialog box for user input
        return prompt(`
            0 - Exit
            1 - View Current Species Options
            2 - Add a Species
            3 - Delete a Species
            4 - View List of Pets Within a Species
            `);
    }

    //This defines how the choices for the submenu for Pets are displayed.User is prompted
    showPetMenuOptions(petInfo) {
        return prompt(`
            0 - Go Back to Species Menu
            1 - Add a New Pet
            2 - Delete a Pet
            ----------------------
            ${petInfo}
            `);
    }
    //Now, while still in the class, I need to create the functions(methods) for the choice the user makes.
    displaySpecies() {
        let speciesList = "";
            for (let i = 0; i < this.speciesOptions.length; i++) {
        //For practice, sometimes I use template literal instead of concatenate.
            speciesList += `${i}: ${this.speciesOptions[i].name}\n`;
            }
        alert(speciesList);
    }
    
    createNewSpecies() {
        let name = prompt("What species do you want to add to the options?"); //prompts for a value for the variable name
        this.speciesOptions.push(new Species(name)); //Adds the name of the new species to the array
    }

    deleteSpecies() {
        let index = prompt("What is the index of the species you want to remove from options?");
        if (index > -1 && index < this.speciesOptions.length) { //Checks if the value entered is valid; i.e., between 0 and the highest option
            this.speciesOptions.splice(index,1);
        }
    }

    //User is prompted for the index number of the species that they want to see a list of pets for. 
    viewPetsInSpecies() {
        let index = prompt("Enter the index of species for which you want to see a list of available pets.");
        if (index > -1 && index < this.speciesOptions.length) { //Checks if value entered is valid
            this.selectedSpecies = this.speciesOptions[index]; //The selected species is assigned to the instance
            let description = "Species: " + this.selectedSpecies.name + "\n"; //A variable is created to
            //  output a the description defined in the Species class (i.e., the number of pets in the species)
            description += " " + this.selectedSpecies.describe() + "\n";
            for (let i = 0; i < this.selectedSpecies.pets.length; i++) { //Loops through and outputs each
                //individual pet
                //For practice, I used concatenate instead of template literal here
                description += i + ": " + this.selectedSpecies.pets[i].describe() + "\n";
            }

            //Now, within the main menu option where we can view a list of pets within a species, we
            //need to give a secondary set of options to add and remove pets from the species list.
            let selectionSpecies = this.showPetMenuOptions(description);
            switch (selectionSpecies) {
                case "1" : 
                    this.addPet();
                    break;
                case "2" :
                    this.removePet();
                    break;
                //Our example menu code did not include default. I added one to ensure a valid selection
                //and to be able to default going back to the main menu.
                default:
                    selectionSpecies = 0;
            }
            selectionSpecies = this.showAdoptionMenuOptions();
        }
    }
//Prompt to ask for the attributes of a new pet and add that to the list of pets. This method was defined 
//in the Species class.
    addPet() {
        let name = prompt("Enter the pet's name.");
        let sex = prompt("Enter the pet's sex.");
        let age = prompt("Enter the pet's age.");
        let appearance = prompt("Enter the pet's appearance.");
        let demeanor = prompt("Enter the pet's demeanor.");
        this.selectedSpecies.addPet(new Pet(name, sex, age, appearance, demeanor)); //Create a new pet object and add to the species.
    }

    //Prompt to ask which pet should be removed and use splice to remove it from the list of pets. 
    removePet() {
        let index = prompt("Enter the index of the pet that got adopted and needs to be removed as an option.");
        if  (index > -1 && index < this.selectedSpecies.pets.length) {
            this.selectedSpecies.pets.splice(index,1);
            }
        }
    }

//Create a new instance of the AdoptionMenu class.
    let menu = new AdoptionMenu();
//Implement the start method that was defined in the Adoption Menu class to start the interative menu.
    menu.start();
