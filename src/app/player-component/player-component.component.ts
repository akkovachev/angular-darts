import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Player } from './player.model';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent implements OnInit {
  constructor(private boardService: BoardService) { }

  ngOnInit() {
    
  }

  submitForm(form: NgForm) {
    this.boardService.addPlayer(new Player(form.value.playerName, form.value.game, []));
  }
}
