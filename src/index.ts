//Importing Team class and Player interface
import { Team } from "./Team";
import { Player } from "./player";

//creating a new team
const myTeam = new Team("Triumph");

const playerOne: Player = { name: "Alice", jersey: 4, active: false };
const playerTwo: Player = { name: "Rocky", jersey: 14, active: true };
const playerThree: Player = { name: "Nazima", jersey: 24, active: false };
const playerFour: Player = { name: "Zain", jersey: 2, active: true };
const playerFive: Player = { name: "Charlie", jersey: 14, active: false };

//adding players to the team
myTeam.addplayer(playerOne);
myTeam.addplayer(playerTwo);
myTeam.addplayer(playerThree);
myTeam.addplayer(playerFour);
myTeam.addplayer(playerFive);

//log the players count
console.log("Player Count: ", myTeam.getPlayerCount());

//log active players
myTeam.logActivePlayers();

//setting a player's status active
myTeam.setActive(4, true);

myTeam.logActivePlayers();

//Removing a player from the team
myTeam.removePlayer(1);

//logging the count
console.log("Player Count after removal: ", myTeam.getPlayerCount());

//get an array of active players
const activePlayers = myTeam.getActivePlayers();
console.log("Active players: ", activePlayers);
