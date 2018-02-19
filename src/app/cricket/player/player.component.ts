import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Player } from '../../player-component/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['../cricket.component.css', './player.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent implements OnInit {
  @Input() player : Player

  constructor() { }

  ngOnInit() {
    console.log(this.player)
  }

}
