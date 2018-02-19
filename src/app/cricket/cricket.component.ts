import { CricketService } from './../services/cricket.service';
import { Player } from './../player-component/player.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {
  players: Player[];

  constructor(private cricketService: CricketService) { }

  ngOnInit() {
    this.players = this.cricketService.getPlayers();
  }

  addScore(score: number, multiplier: number) {
    this.cricketService.addScore(score, multiplier);
  }
}
