import { Player } from './../player-component/player.model';

export class BoardService {
   public players: Player[];

   addPlayer(player: Player) {
       this.players.push(player);
   }
}