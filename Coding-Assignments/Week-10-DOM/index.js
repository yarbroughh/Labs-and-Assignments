//Create class to define info needed for volunteers

class Volunteer {
    constructor(name, email, task) {
        this.name = name;
        this.email = email; 
        this.task = task;
    }
}

//create a class for parks including methods to add and delete volunteers
class Park {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.volunteers = [];
    }

    addVolunteer(volunteer) {
        this.volunteers.push(volunteer);
    }

    deleteVolunteer(volunteer) {
        let index = this.volunteer.indexOf(volunteer);
        this.volunteers.splice(index, 1);
    }
}

//set an empty array for parks
let parks = [];
let parkId = 0;

//This defines what ill happen when someone clicks on the Add Park button
onClick ('new-park', () => {
    parks.push(new Park(parkId++, getValue('new-park-name')));
    drawDOM();
    document.getElementById('new-park-name').value = '';
});

//create a method that can be reused instead of having to repeat this code
function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}

//method to iterate through each park and create a table for each park and add volunteers to them
function drawDOM() {
    let parkDiv = document.getElementById('parks');
    clearElement(parkDiv);
    for (park of parks) {
        let table = createParkTable(park);
        let title = document.createElement('h2');
        title.innerHTML = park.name;
        title.appendChild(createDeleteParkButton(park));
        parkDiv.appendChild(title);
        parkDiv.appendChild(table);
        for (volunteer of park.volunteers) {
            createVolunteerRow(park, table, volunteer);
        }
    }
}
//Start with position 2 for the row because there will already be data above it (park name and row titles)
//but position 0 for cells since there is not a title in the first column. Adds 4 cells for the 3 inputs
//plus the add button
function createVolunteerRow(park, table, volunteer) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = volunteer.name;
    row.insertCell(1).innerHTML = volunteer.email;
    row.insertCell(2).innerHTML = volunteer.task;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteVolunteerButton(park, volunteer));
}

//Function to create a button to delete volunteers, using splice and 
//setting the index to be that specific row
function createDeleteVolunteerButton(park, volunteer) {
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = 'Delete Volunteer';
    btn.onclick = () => {
        let index = park.volunteers.indexOf(volunteer);
        park.volunteers.splice(index,1);
        drawDOM();
    };
    return btn;
}

//Function to create a button to delete a park, using splice and
//setting the index to be the current park 
function createDeleteParkButton(park) {
    let btn = document.createElement('button');
    btn.className = 'btn m-3';
    btn.innerHTML = 'Delete Park';
    btn.onclick = () => {
        let index = parks.indexOf(park);
        parks.splice(index, 1);
        drawDOM();
    };
    return btn;
}

//Function to create a separate table for each park that will hold rows
//for each new volunteer. Boostrap items such as table-striped are used.
function createParkTable (park) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-striped');
    let row = table.insertRow(0);
    let nameColumn = document.createElement('th');
    let emailColumn = document.createElement('th');
    let taskColumn = document.createElement('th');
    let buttonColumn = document.createElement('th');
    nameColumn.innerHTML = 'Volunteer Name';
    emailColumn.innerHTML = 'Email Address';
    taskColumn.innerHTML = 'Desired Task';
    buttonColumn.innerHTML = '';
    row.appendChild(nameColumn);
    row.appendChild(emailColumn);
    row.appendChild(taskColumn);
    row.appendChild(buttonColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('td');
    let emailTh = document.createElement('td');
    let taskTh = document.createElement('td');
    let createTh = document.createElement('td');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', `name-input-${park.id}`);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    let emailInput = document.createElement('input');
    emailInput.setAttribute('id', `email-input-${park.id}`);
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('class', 'form-control');
    let taskInput = document.createElement('input');
    taskInput.setAttribute('id', `task-input-${park.id}`);
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('class', 'form-control');
    let newVolunteerButton = createNewVolunteerButton(park);
    //Add input to the cells
    nameTh.appendChild(nameInput);
    emailTh.appendChild(emailInput);
    taskTh.appendChild(taskInput);
    createTh.appendChild(newVolunteerButton);
    //Add cells to the row
    formRow.appendChild(nameTh);
    formRow.appendChild(emailTh);
    formRow.appendChild(taskTh);
    formRow.appendChild(createTh);
    return table;
}

//Function for a button to create each volunteer, using push to add it to the park table
function createNewVolunteerButton(park) {
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = 'Add New Volunteer';
    btn.onclick = () => {
        park.volunteers. push(new Volunteer(getValue(`name-input-${park.id}`), getValue(`email-input-${park.id}`), getValue(`task-input-${park.id}`)));
        drawDOM();
    };
    return btn;
}

//function to clear out the fields after entry
function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}