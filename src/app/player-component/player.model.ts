export class Player {
    public playerName: String;
    public playerGame: String;
    public playerScores: Number[];

    constructor(name: string, game: string, scores: Number[]){
        this.playerName = name;
        this.playerGame = game;
        this.playerScores = scores;
    }

}