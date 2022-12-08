const btnrockuser = document.getElementById("rockuser");
const btnpaperuser = document.getElementById("paperuser");
const btnscissorsuser = document.getElementById("scissorsuser");


const message = document.getElementById("message");
btnrockuser.addEventListener("click", functionrockuser);
btnpaperuser.addEventListener("click", functionpaperuser);
btnscissorsuser.addEventListener("click", functionscissorsuser);

function computer(minimum,maximum)
{
    var num = Math.floor(Math.random()* (maximum-minimum+1)+minimum);
    return num;
}
var rock = 0;
var paper = 1;
var scissors = 2;
var optionspc = computer(0,2);
let counterpc = 0;
let counteruser = 0;

document.querySelector('.comp-p').textContent = 'Computadora: ' + counterpc;
document.querySelector('.pers-p').textContent = 'Usted: ' + counteruser;

function functionrockuser(event){

        if(optionspc == rock){
            message.textContent = ("¡EMPATE! usted eligió Piedra y la computadora Piedra");
        }
        else if (optionspc == paper){
            message.textContent = ("¡PERDIÓ! usted eligió Piedra y la computadora Papel");
            counterpc = counterpc + 1
        }
        else if (optionspc == scissors){
            message.textContent = ("¡GANÓ! usted eligió Piedra y la computadora Tijera");
            counteruser = counteruser + 1

        }
                if(counterpc == 3){
                    message.textContent = ("Ha ganado la computadora.");
                    event.preventDefault();
                }
                if (counteruser == 3){
                    message.textContent = ("Ha ganado usted.");
                    event.preventDefault();
                }
        document.querySelector('.pers-p').textContent = 'Usted: ' + counteruser;
        document.querySelector('.comp-p').textContent = 'Computadora: ' + counterpc;
    }
    
/*
btnrockuser.disabled = true;
if (btnrockuser.addEventListener("click", functionpaperuser,functionscissorsuser)) 
    {
        btnrockuser.disabled = true; 
  } else {
   setTimeout(function() {
    btnrockuser.style.color=('#fff');
    btnrockuser.disabled = false;
}, 1000);
  }
}
/*btnrockuser.disabled=true;

setTimeout(function() {
    btnrockuser.style.color=('#fff');
    btnrockuser.disabled = false;
}, 500);
}
*/

function functionpaperuser(event){

        if(optionspc == rock){
            message.textContent = ("¡GANÓ! usted eligió Papel y la computadora Piedra");
            counteruser = counteruser+ 1
            

        }
        else if (optionspc == paper){
            message.textContent = ("¡EMPATE! usted eligió Papel y la computadora Papel");
        }
        else if (optionspc == scissors){
            message.textContent = ("¡PERDIÓ! usted eligió Papepl y la computadora Tijera");
            counterpc = counterpc + 1

        }
                if(counterpc == 3){
                    message.textContent = ("Ha ganado la computadora.");
                    event.preventDefault();
            
                }
                if (counteruser == 3){
                    message.textContent = ("Ha ganado usted.");
                    event.preventDefault();
                }
        document.querySelector('.pers-p').textContent = 'Usted: ' + counteruser;
        document.querySelector('.comp-p').textContent = 'Computadora: ' + counterpc;
   

}
/*
btnpaperuser.disabled = true;
if (btnpaperuser.addEventListener("click", functionrockuser,functionscissorsuser)) 
    {
        btnpaperuser.disabled = true; 
  } else {
   setTimeout(function() {
    btnpaperuser.style.color=('#fff');
    btnpaperuser.disabled = false;
}, 1000);
  }
}
/*
btnpaperuser.disabled=true;

setTimeout(function() {
    btnpaperuser.style.color=('#fff');
    btnpaperuser.disabled = false;
}, 500);
}
*/

function functionscissorsuser(event){
    
        if(optionspc == rock){
            message.textContent = ("¡PERDIÓ! usted eligió Tijera y la computadora Piedra");
            counterpc = counterpc + 1;
           
        }
        else if (optionspc == paper){
            message.textContent = ("¡GANÓ! usted eligió Tijera y la computadora Papel");
            counteruser = counteruser + 1;
  
        }
        else if (optionspc == scissors){
            message.textContent = ("¡EMPATE! usted eligió Papel y la computadora Papel");
        }
        if(counterpc == 3){
            message.textContent = ("Ha ganado la computadora.");
            event.preventDefault();
    
        }
        if (counteruser == 3){
            message.textContent = ("Ha ganado usted.");
            event.preventDefault();
        }
        
        document.querySelector('.pers-p').textContent = 'Usted: ' + counteruser;
        document.querySelector('.comp-p').textContent = 'Computadora: ' + counterpc;
  
}
