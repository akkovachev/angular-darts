import { Cricket } from './../games/cricket.model';

export class Player {
    public playerName: String;
    public playerGame: String;
    public gameSchema: Cricket;
    public playerTotalScore: number = 0;

    constructor(name: string, game: Cricket){
        this.playerName = name;
        this.gameSchema = game;
    }

    getTotalScore() {
        return this.playerTotalScore;
    }
}