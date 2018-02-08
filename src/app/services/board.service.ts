import { Player } from './../player-component/player.model';

export class BoardService {
   public players: Player[] = []
   public sectorsOpened: Object = {
       "is20Close": false,
       "is19Close": false,
       "is18Close": false,
       "is17Close": false,
       "is16Close": false,
       "is15Close": false,
       "isBullClose": false,

   }
   addPlayer(player: Player) {
       this.players.push(player);
   }

   cricketRules(index: number, score: number, multiply: number) {
    let thisHitScore: number = 0;

    if(multiply) {
        thisHitScore = (score * multiply)
    } else {
        thisHitScore = score;
    }

    this.playerScoreBoundries(this.players[index], thisHitScore, score);
    
    //this.checkSectorClosed();

   }

   playerScoreBoundries(player: Player, thisHitScore: number, sector: number) {
        let maxScores = [60,57, 54, 51, 48, 45, 50];
        let sectorMax = {
            20: 60,
            19: 57,
            18: 54,
            17: 51,
            16: 48,
            15: 45,
            25: 75 //bull,
        }
        
        let hitOverAllowed = player.gameSchema[sector] + thisHitScore;
    
        if(sectorMax[sector] < hitOverAllowed) {
            //Set the Maximum sector Indicators and add Scores
            player.gameSchema[sector] = sectorMax[sector];
            player.playerTotalScore += hitOverAllowed - sectorMax[sector]; 
        }
        else {
            player.gameSchema[sector] += thisHitScore
        }
   }

   checkSectorClosed() {
  
    this.players.forEach(p => {
        if(p.gameSchema['20'] == 60) {
            this.sectorsOpened['is20Close'] = true;
        } else if(p.gameSchema['19'] == 57) {
            this.sectorsOpened['is19Close'] = true;
        }

        console.log(this.sectorsOpened);
    });
   }

   getBoards() {
       return this.players;
   }
}