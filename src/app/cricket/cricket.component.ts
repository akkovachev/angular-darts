import { CricketService } from './../services/cricket.service';
import { Player } from './../player-component/player.model';
import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  players: Player[];

  constructor(private cricketService: CricketService, private playersService: PlayersService) { }

  ngOnInit() {
    this.players = this.playersService.getPlayers();
  }

  addScore(score: number, multiplier: number) {
    this.cricketService.addScore(score, multiplier);
  }
}
