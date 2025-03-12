// Teams and Players on those teams
class Player {
    constructor(name, position) {
    this.name = name;
    this.position = position;
    }
    
    describe() {
    //console.log(`${this.name} plays ${this.position}`)
    return `${this.name} plays ${this.position}`;
    }
    }
    class Team {
    constructor(name) {
    this.name = name;
    this.players = [];
    }
    
    addPlayer(player) {
    if (player instanceof Player) {
    this.players.push(player);
    } else {
    throw new Error(`You can only add an instance of Player. 
    argument is not a player: ${player}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.players.length} players.`;
    }
    }
    class Menu { // what drives the application and our choices
    constructor() {
    this.teams = [];
    this.selectedTeam = null; // manage one team at a time
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createTeam();
    break;
    case '2' :
    this.viewTeam();
    break;
    case '3' :
    this.deleteTeam();
    break;
    case '4' :
    this.displayTeams();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new team
    2) view a team
    3) delete a team
    4) display all teams
    `);
    }
    
    showTeamMenuOptions(teamInfo) {
    return prompt(`
    0) back
    1) add a new player
    2) delete a player
    -----------------
    ${teamInfo}
    `);
    }
    
    displayTeams() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++) {
    teamString += i+ ') ' + this.teams[i].name + '\n';
    }
    alert(teamString);
    }
    
    createTeam() {
    let name = prompt('Enter name for new team: ');
    this.teams.push(new Team(name));
    }
    
    viewTeam() {
    let index = prompt("Enter the index of the team that you want to view:");
    if (index > -1 && index < this.teams.length) {
    this.selectedTeam = this.teams[index];
    let description = 'Team Name: ' + this.selectedTeam.name + '\n';
    description += ' ' + this.selectedTeam.describe() + '\n ';
    for (let i = 0; i < this.selectedTeam.players.length; i++) {
    // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
    // + this.selectedTeam.players[i].position + '\n';
    description += i + ') ' + this.selectedTeam.players[i].describe() + '\n';
    }
    let selection1 = this.showTeamMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createPlayer();
    break;
    case '2' :
    this.deletePlayer();
    }
    } // validate user input
    }
    
    deleteTeam() {
    let index = prompt('Enter the index of the team that you wish to delete: ');
    if (index > -1 && index < this.teams.length) {
    this.teams.splice(index,1);
    }
    }
    
    
    createPlayer() {
    let name = prompt('Enter name for new player: ');
    let position = prompt('Enter position for new player: ');
    //this.selectedTeam.players.push(new Player(name, position));
    this.selectedTeam.addPlayer(new Player(name,position));
    }
    
    deletePlayer() {
    let index = prompt('Enter the index of the player that you wish to delete: ');
    if (index > -1 && index < this.selectedTeam.players.length) { this.selectedTeam.players.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start(); 