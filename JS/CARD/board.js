const board = document.querySelector(".board").addEventListener('click',pickCard);
const resetRotate = document.getElementsByClassName("flip-box-inner");
const card1 = document.getElementsByClassName("flip-box-back");
const card2 = document.getElementsByClassName("flip-box-front");
const segundo = document.querySelector(".segundo");
const minuto = document.querySelector(".minuto");
const hora = document.querySelector(".hora");
const jugar = document.querySelector(".inicio");
const turno = document.querySelector(".text-turno");
const pageFinJuego = document.querySelector(".text-inicio");
const cardCouple = document.querySelector(".flip-box-back");
const nombre = document.querySelector(".nombre");
const content = document.querySelector(".content-history");

var arrayPick = [];
var arrayPickedCards = [];
var a ;
var seg = 0;
var min  = 0;
var h = 0;
var interval;
var turnoContador = 0;
var finJuego = 8;
var child = false;
var user;

function iniciarSettings(){
    arrayPick = [];
    arrayPickedCards = [];

    seg = 0;
    min  = 0;
    h = 0;
    segundo.textContent = "00";
    minuto.textContent = "00";
    hora.textContent = "00";


    turnoContador = 0;
    turno.innerHTML = turnoContador;
    finJuego = 0;
    console.log(resetRotate)


    for(let i = 0; i<resetRotate.length; i++){
       
        resetRotate[i].classList.remove("rotate");
        if(child == true){
            console.log("entre")
            card1[i].removeChild(card1[i].firstElementChild);
            card1[i].style.backgroundColor ="#00000033";
            console.log(card1[i])
        }
        
    }
    a =  generarNumerosAleatorios(15);
    generarTablero(a,card1,card2);
    child = false;
}

function init(){
    iniciarSettings();
    jugar.style.display = "none";
    
    chrono();
}



function generarNumerosAleatorios(num){
    var newArray = [];
    while(newArray.length <= num){
        let numRandom =  Math.floor(Math.random() * (num+1)+1 );
        if(!newArray.includes(numRandom)){
            newArray.push(numRandom);
        }
    }
   return newArray;
}

function generarTablero(numerosAleatorios,card1,card2){
    var img;
   
    for(let i = 0; i < card1.length; i++){


        img = document.createElement("img");
        if(numerosAleatorios[i] <= numerosAleatorios.length/2){
          
            img.setAttribute("src","images/"+ numerosAleatorios[i] + ".png");
           
        }else{
          
            img.setAttribute("src","images/"+ (numerosAleatorios[i]-(card1.length/2)) + ".png");
            
        }

        card1[i].appendChild(img);
        card2[i].firstElementChild.setAttribute("id",numerosAleatorios[i]);
        
    }
}



function pickCard(e){

    let pick;
    

    if(arrayPickedCards.length <2){

         pick = e.target.parentNode;
        
        pick.parentNode.classList.add("rotate");
  

        if(e.target.getAttribute("id") != null && e.target.getAttribute("id") != undefined ){
           

            if(e.target.getAttribute("id") != arrayPickedCards[0]){
                arrayPick.push(pick);
        
                arrayPickedCards.push(e.target.getAttribute("id"));
            }
  
       }
    }   
       
    if(arrayPickedCards.length == 2 ){
        
        checkCards();

    }
       
      
   
}

function checkCards(){
    
    if(parseInt(arrayPickedCards[0]) == parseInt(arrayPickedCards[1])+8 || parseInt(arrayPickedCards[0])+8 == parseInt(arrayPickedCards[1]) ){
       
        finJuego +=1;
        arrayPick[1].nextElementSibling.style.backgroundColor = "#F2F2F2";
        arrayPick[0].nextElementSibling.style.backgroundColor = "#F2F2F2";
        clear();
        if(finJuego == 8){
            jugar.style.display = "block";
            pageFinJuego.innerHTML = "End. Again?";
            stopChono();
            child = true;
        }
        turnoContador +=1;
        turno.innerHTML = turnoContador;
    }else{
        setTimeout(function(){rotate();},1000);
        
        
    }
}
function rotate(){
    if(arrayPick[0] && arrayPick[1] != undefined){
        arrayPick[0].parentNode.classList.remove("rotate");
        arrayPick[1].parentNode.classList.remove("rotate");
        clear();
        turnoContador +=1;
        turno.innerHTML = turnoContador;
    }
   
}
function clear(){
    arrayPickedCards = [];
    arrayPick = [];    
}

function chrono(){
   
    interval = setInterval(function(){
        seg +=1;
        if(seg<10){
            segundo.textContent = "0"+seg;
        }else{
            segundo.textContent = seg;
        }
        if(seg == 59){
            seg =0;
            min +=1;
            if(min<10){
                minuto.textContent = "0"+min;
            }else{
                minuto.textContent = min;
            }
        }
        if(min == 59){
            min =0;
            h +=1;
            if(min<10){
                hora.textContent = "0"+h;
            }else{
                hora.textContent = h;
            }
        }
    },1000);
   
}
function stopChono(){
    clearInterval(interval);
    registrarUsuario();
}
function registrarUsuario(){
    user = prompt("Ingrese su nombre (max 14 letras): ");

    let usuario = document.createElement("div");
    usuario.setAttribute("class","user");
    let nombre = document.createElement("span");
    
    nombre.setAttribute("class","nombre");
    console.log(usuario)
    let hora = document.createElement("span");
    hora.setAttribute("class","hora");
    let s1 = document.createElement("span");
    let minuto = document.createElement("span");
    minuto.setAttribute("class","minuto");
    let s2 = document.createElement("span");
    let segundo = document.createElement("span");
    segundo.setAttribute("class","segundo");

    nombre.innerHTML = user;
    
    if(h<10){
        hora.innerHTML ="0"+ h;

    }else{
        hora.innerHTML = h;
    }
    if(min <10){
        minuto.innerHTML ="0"+ min;
    }else{
        minuto.innerHTML = min;
    }
    if(seg <10){
        segundo.innerHTML = "0"+seg;
    }else{
        segundo.innerHTML = seg;
    }
    s1.innerHTML = ":";
    s2.innerHTML = ":";

    usuario.appendChild(nombre);
    usuario.appendChild(hora);
    usuario.appendChild(s1);
    usuario.appendChild(minuto);
    usuario.appendChild(s2);
    usuario.appendChild(segundo);

    content.appendChild(usuario);


}
