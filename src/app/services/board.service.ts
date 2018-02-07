import { Player } from './../player-component/player.model';

export class BoardService {
   public players: Player[] = [
       new Player('Atanas', 'Cricet', [])
   ];

   addPlayer(player: Player) {
       this.players.push(player);
   }

   getBoards() {
       return this.players;
   }
}