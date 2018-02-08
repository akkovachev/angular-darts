import { Cricket } from './../games/cricket.model';
import { Player } from './../player-component/player.model';
import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.css']
})
export class BoardComponentComponent implements OnInit {
  public players: Player[];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.players = this.boardService.getBoards();
  }

  addScore(index: number, score: number, multiply: number) {
    this.boardService.cricketRules(index, score, multiply);
  }

}
