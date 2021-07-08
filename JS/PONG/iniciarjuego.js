function iniciarJuego(){
    
    setSettings()

    var interval = setInterval(() => {
        
        
        
        logicaIA();
        actualizarPosIA()

        mostrarMarcador()

        switch(ballToLeft.estadoActual){
            
            case 'cR':
                ballToLeft.moveBall();
                break;
            case 'cL':
                ballToLeft.moveBallRight();
                break;
            case 'cBLU':
                
                ballToLeft.moveRightUp();
                break;
            case 'cBLD':
                
                ballToLeft.moveRightDown();
               
                break;
            case 'cBRU':
                ballToLeft.moveLeftUp();
                break;
            case 'cBRD':
                
                ballToLeft.moveLeftDown();
                break;
            case 'cUL':
                ballToLeft.moveRightUp();
                break;
            case 'cUR':
                ballToLeft.moveLeftUp();
                break;
            case 'cDL':
                ballToLeft.moveRightDown();
                break;
            case 'cDR':
                ballToLeft.moveLeftDown();
                break;
    

        }

        if(isCollisionUp()){
            
            ballToLeft.estadoAnteriorChoque = 'up';
            if(ballToLeft.estadoAnteriorBarra == 'barLeft'){
                ballToLeft.estadoActual = 'cUL';
            }else if(ballToLeft.estadoAnteriorBarra == 'barRight'){
            
                ballToLeft.estadoActual = 'cUR';
            }
        }else if(isCollisionDown()){
            ballToLeft.estadoAnteriorChoque = 'down';
            if(ballToLeft.estadoAnteriorBarra == 'barLeft'){
                ballToLeft.estadoActual = 'cDL';
            }else if(ballToLeft.estadoAnteriorBarra == 'barRight'){
                ballToLeft.estadoActual = 'cDR';
            }
        }else if(isCollisionRight()){
            marcador.scorePlayer();
            actualizarPosPlayers()
            mostrarMarcador();
            scoreIA();
           

        }else if(isCollisionLeft()){
            marcador.scoreIA();
            actualizarPosPlayers()
            mostrarMarcador();
            scoreP();
           
        }else if(isCollisionBarRight()){
        
            ballToLeft.estadoAnteriorBarra = 'barRight';
            if(ballToLeft.estadoAnteriorChoque == 'up'){
                ballToLeft.estadoActual = 'cBRU';
            }else if(ballToLeft.estadoAnteriorChoque == 'down'){
                ballToLeft.estadoActual = 'cBRD';
            }
            
        }else if(isCollisionBarLeft()){
           
            ballToLeft.estadoAnteriorBarra = 'barLeft';
            if(ballToLeft.estadoAnteriorChoque == 'up'){
                ballToLeft.estadoActual = 'cBLU';
            }else if(ballToLeft.estadoAnteriorChoque == 'down'){
                ballToLeft.estadoActual = 'cBLD';
            
            }
            
        }
    actualizarPosBall();
    
    if(isLimit()){
        if(marcador.marcadorActualPlayer == marcador.limite){
            alert("Jugador Gana!");
        }else{
            alert("IA Gana!");
        }
       clearInterval(interval);
       
    }


    }, 5);

    var x =addEventListener("keydown",k);
    
  function k(e){
        player1.movePlayer(e.key)
        playerUno.style.top = `${player1.posActual}px`;
    }


     
    


}

