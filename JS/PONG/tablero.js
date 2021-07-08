const playerUno = document.querySelector(".player1");
const playerIA = document.querySelector(".player2");
const tablero = document.querySelector(".tablero");
const ball = document.querySelector(".ball");
const marcadorPlayer = document.querySelector(".m-izquierda");
const marcadorIA = document.querySelector(".m-derecha");



const posXBall = obtenerPosInicialX();
const posYBall = obtenerPosInicialY();
const posPlayer = obtenerPosInicialPlayerIA();
const player1 = new Player(posPlayer+25,parseInt(playerUno.style.height),30);
const IA = new Player(posPlayer+25,parseInt(playerIA.style.height),3)
const ballToLeft = new Ball(posXBall,posYBall);
const marcador = new ScoreBoard(0,0,10);



//Aplicar cambios

function setSettings(){
    var colorPlayer = document.getElementById("color-player").value;
    var colorPelota = document.getElementById("color-bola").value;
    var colorIA = document.getElementById("color-ia").value;
    var limitScore = document.getElementById("limit-score").value;
    var speedBar = document.getElementById("speed-bar").value;
    
    const setting = new Settings(colorPelota,colorPlayer,colorIA,speedBar,limitScore);
    ball.style.backgroundColor = setting.colorPelota;
    playerUno.style.backgroundColor = setting.colorJugador;
    playerIA.style.backgroundColor = setting.colorIA;
  
    marcador.limite = limitScore;
    ballToLeft.setSpeed(parseFloat(speedBar));
   
  
  
}


//Obtener la posicione inicial del jugador y la IA

function obtenerPosInicialPlayerIA(){
    return (parseFloat(playerUno.style.top)*tablero.clientHeight)/100 - parseFloat(playerUno.style.height)/4;
}


//Obtener posiciones iniciales de la pelota

function obtenerPosInicialY(){
    return (parseFloat(ball.style.top)*tablero.clientHeight/100);
}

function obtenerPosInicialX(){
    return (parseFloat(ball.style.left)*tablero.clientWidth/100);
}

    



function mostrarMarcador(){
    
    marcadorPlayer.textContent = marcador.marcadorActualPlayer;
   
    marcadorIA.textContent = marcador.marcadorActualIA;
}
function scoreP(){
        ballToLeft.estadoActual = 'cR';
        iniciarPelota();
}
function scoreIA(){
        ballToLeft.estadoActual = 'cL';
        iniciarPelota();
}
function iniciarPelota(){
    ballToLeft.posActualY = posYBall

    ballToLeft.posActualX = posXBall;
}

function actualizarPosBall(){
    ball.style.left = `${ballToLeft.posActualX}px`;
    ball.style.top = `${ballToLeft.posActualY}px`;
        
}
function actualizarPosPlayers(){
    player1.posActual = posPlayer;
    IA.posActual = posPlayer;
}


//Colisiones de la bola

function isCollisionUp(){
    return ballToLeft.posActualY < tablero.style.marginBottom+15 ? true:false;    
}
function  isCollisionDown(){
    return ballToLeft.posActualY > tablero.clientHeight-15 ? true:false;
}
function isCollisionRight(){
    return ballToLeft.posActualX > tablero.clientWidth-15 ? true:false;
}
function isCollisionLeft(){
   
    return ballToLeft.posActualX < 20 ? true:false;
}
function isCollisionBarLeft(){
   
    return ballToLeft.posActualX < 55 && (player1.posActual-126/2 <= ballToLeft.posActualY+15 && player1.posActual+126/2 >= ballToLeft.posActualY-15) ? true:false;
    
}
function isCollisionBarRight(){
    
   return  ballToLeft.posActualX+55 > tablero.clientWidth  && (IA.posActual-126/2 <= ballToLeft.posActualY+10 && IA.posActual+126/2 >= ballToLeft.posActualY-15) ? true:false;
        
}


//IA

function logicaIA(){
    
    if(ballToLeft.posActualX > (tablero.clientWidth/2 ) && ballToLeft.posActualX <tablero.clientWidth){
      
        if(parseFloat(playerIA.style.top) < ballToLeft.posActualY){
            if((IA.posActual+ 2)<=tablero.clientHeight-63){
             
                IA.posActual += (Math.floor(Math.random()*10)-2);
            } 
            if(tablero.clientHeight-63-IA.posActual <= 2){
                
                IA.posActual =tablero.clientHeight-63;
            } 
         
           
        }else{
          
            if((IA.posActual-2)>=63){
                IA.posActual -=  (Math.round(Math.random()*10)-2);
            }  
            if(IA.posActual-63 < 2){
                IA.posActual = IA.posActual-(IA.posActual-63);
            } 
        }
    }
}
function actualizarPosIA(){
    playerIA.style.top = `${IA.posActual}px`;
    playerUno.style.top = `${player1.posActual}px`;
}
function isCollisionBottomIA(){
    console.log(IA.posActual)
    return IA.posActual<63 ? true:false;    
}

function isLimit(){
   
    return (marcador.marcadorActualPlayer || marcador.marcadorActualIA) == marcador.limite ? true:false;


}