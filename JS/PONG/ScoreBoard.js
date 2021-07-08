class ScoreBoard{
    constructor(marcadorInicialPlayer, marcadorInicialIA,limite){
        this.marcadorActualPlayer= marcadorInicialPlayer;
        this.marcadorActualIA = marcadorInicialIA;
        this.limite = limite;

    }

    scorePlayer(){
        this.marcadorActualPlayer +=1;
    }
    scoreIA(){
        this.marcadorActualIA +=1;
    }
}