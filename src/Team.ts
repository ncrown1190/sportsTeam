import { Player } from "./player";

export class Team {
  players: Player[] = [];
  teamName: string = "";

  //constructor
  constructor(teamName: string) {
    this.teamName = teamName;
  }

  addplayer(player: Player): void {
    this.players.push(player);
  }

  removePlayer(index: number): void {
    if (index >= 0 && index < this.players.length) {
      this.players.splice(index, 1);
    }
  }

  setActive(index: number, active: boolean): void {
    if (index >= 0 && index < this.players.length) {
      this.players[index].active = active;
    }
  }

  getPlayerCount(): number {
    return this.players.length;
  }

  logActivePlayers(): void {
    this.players
      .filter((player) => player.active)
      .forEach((player) => console.log(player));
  }

  getActivePlayers(): Player[] {
    return this.players.filter((player) => player.active);
  }
}
