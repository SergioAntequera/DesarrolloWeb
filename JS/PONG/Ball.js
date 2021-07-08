class Ball{
    constructor(posInicialX,posInicialY){
        this.velocidad = 2;
        this.posActualX = posInicialX;
        this.posActualY = posInicialY;
        this.estadoAnteriorBarra = '';
        this.estadoAnteriorChoque = 'down';
        this.estadoActual = "cR";
        
    }
    moveBall(){

        this.posActualX -=this.velocidad;
    }
    moveBallRight(){
        this.posActualX +=this.velocidad;
    }
    setSpeed(speed){
        this.velocidad = speed;
       
    }

 
    moveRightDown(){
        
        this.posActualX +=this.velocidad;
        this.posActualY -=this.velocidad;
    }
        
    moveRightUp(){
        this.posActualX +=this.velocidad;
        this.posActualY +=this.velocidad;
    }

    moveLeftDown(){
        this.posActualX -=this.velocidad;
        this.posActualY -=this.velocidad;
    }

    moveLeftUp(){
        this.posActualX -=this.velocidad;
        this.posActualY +=this.velocidad;
    }
   
}

