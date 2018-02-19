import { Player } from './../player-component/player.model';
import { Injectable } from '@angular/core';

export class CricketService {
  public players: Player[] = [];
  public playerTurnCounter : number = 0;

  constructor() { }

  addPlayer(player: Player) {
    if (this.players.length == 0) {
      player.isPlayerActive = true;
    }

    this.players.push(player);
  }

  getPlayers() {
    return this.players;
  }

  addScore(score: number, multiplier: number) {
    if(multiplier) {

    } else {

    }

    this.playerTurnCounter++;

    if(this.playerTurnCounter == 3) {
      this.setNextActive();
      this.playerTurnCounter = 0;
    }
  }

  getActivePlayer() {
    let player: Player;

    this.players.forEach(p => {
      if (p.isPlayerActive) {
        player = p;
      }
    })

    return player;
  }

  setNextActive() {
    let currentActiveIndex = 0;
    let totalPlayers = this.players.length;

    for (let index = 0; index < this.players.length; index++) {
      const element = this.players[index];
      if(element.isPlayerActive) {
        currentActiveIndex = index;
      }
    }

    //Make the Active user inactive
    this.players[currentActiveIndex].isPlayerActive = false;
    //Make the next user in our Array Active
    this.players[(currentActiveIndex + 1 == totalPlayers) ? 0 : currentActiveIndex + 1].isPlayerActive = true;
  }
}
