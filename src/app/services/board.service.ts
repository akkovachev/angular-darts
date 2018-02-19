import { Player } from './../player-component/player.model';

export class BoardService {
    public players: Player[] = []
    public sectorsOpened: Object = {
        "is20Closed": false,
        "is19Closed": false,
        "is18Closed": false,
        "is17Closed": false,
        "is16Closed": false,
        "is15Closed": false,
        "is25Closed": false,

    }

    public sectorMax = {
        20: 60,
        19: 57,
        18: 54,
        17: 51,
        16: 48,
        15: 45,
        25: 75 //bull,
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    cricketRules(index: number, score: number, multiply: number) {
        let thisHitScore: number = 0;

        if (multiply) {
            thisHitScore = (score * multiply)
        } else {
            thisHitScore = score;
        }

        this.playerScoreBoundries(this.players[index], thisHitScore, score);

        this.checkSectorClosed();

    }

    playerScoreBoundries(player: Player, thisHitScore: number, sector: number) {
        let maxScores = [60, 57, 54, 51, 48, 45, 50];

        let hitOverAllowed = player.gameSchema[sector] + thisHitScore;

        if (this.sectorMax[sector] < hitOverAllowed) {
            //Set the Maximum sector Indicators and add Scores
            player.gameSchema[sector] = this.sectorMax[sector];
            player.playerTotalScore += hitOverAllowed - this.sectorMax[sector];
        }
        else {
            player.gameSchema[sector] += thisHitScore
        }
    }

    checkSectorClosed() {
        let playersCounter = {
            20: 0,
            19: 0,
            18: 0,
            17: 0,
            16: 0,
            15: 0,
            75: 0
        }

        this.players.forEach(p => {
            if (p.gameSchema['20'] == this.sectorMax['20']) {
                playersCounter['20']++;
            } else if (p.gameSchema['19'] == this.sectorMax['19']) {
                playersCounter['19']++;
            } else if (p.gameSchema['18'] == this.sectorMax['18']) {
                playersCounter['18']++;
            } else if (p.gameSchema['17'] == this.sectorMax['17']) {
                playersCounter['17']++;
            } else if (p.gameSchema['16'] == this.sectorMax['16']) {
                playersCounter['16']++;
            } else if (p.gameSchema['15'] == this.sectorMax['15']) {
                playersCounter['15']++;
            } else if (p.gameSchema['25'] == this.sectorMax['25']) {
                playersCounter['25']++;
            }
        });

       for(let score in playersCounter) {
            if(playersCounter[score] === this.players.length) {
                this.sectorsOpened['is'+score+'Closed'] = true;
            }
       }

       console.log(this.sectorsOpened)
       // console.log(playersCounter);
    }

    getBoards() {
        return this.players;
    }
}