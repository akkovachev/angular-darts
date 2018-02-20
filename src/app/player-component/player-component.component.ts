import { CricketService } from './../services/cricket.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Player } from './player.model';
import { Cricket } from '../games/cricket.model';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent implements OnInit {
  public values: String[] = ['Cricket', '301'];
  selectedGame = 'Cricket';

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    
  }

  submitForm(form: NgForm) {
    this.playersService.addPlayer(new Player(form.value.playerName, new Cricket()));
  }
}
