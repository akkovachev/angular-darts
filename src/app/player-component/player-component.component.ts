import { CricketService } from './../services/cricket.service';
import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Player } from './player.model';
import { Cricket } from '../games/cricket.model';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent implements OnInit {
  public values: String[] = ['Cricket', '301'];
  selectedGame = 'Cricket';

  constructor(private boardService: BoardService, private cricketService: CricketService) { }

  ngOnInit() {
    
  }

  submitForm(form: NgForm) {
    this.cricketService.addPlayer(new Player(form.value.playerName, new Cricket()));
  }
}
