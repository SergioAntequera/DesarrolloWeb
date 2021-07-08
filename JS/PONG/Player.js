class Player{

    constructor(posInicial,largoInicial,velocidad){
        this.posActual = posInicial;
        this.largoActual = largoInicial;
        this.velocidad = velocidad;
      
        
    }

    movePlayer(key){
         switch(key.toLowerCase()){
            case 'w':   
                if((this.posActual- this.velocidad)>=63){
                    this.posActual =this.posActual- this.velocidad;
                }  
                if(this.posActual-63 < this.velocidad){
                    this.posActual = this.posActual-(this.posActual-63);
                } 
                
                break;
            case 's':
                if((this.posActual+ this.velocidad)<=tablero.clientHeight-63){
                    this.posActual =this.posActual+ this.velocidad;
                } 
                if(tablero.clientHeight-63-this.posActual <= this.velocidad){
                    
                    this.posActual = this.posActual+(tablero.clientHeight-63-this.posActual);
                } 
                break;
        }
    }
    
}