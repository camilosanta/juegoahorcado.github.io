var errores = document.querySelector('#errores')
var pts = 0;
var repetida = false;
var contadorCanvas = 200;
var letrasUsadas = [];
var considencias = false;

function verificador(){

    console.log(palabraEscogida)
    repetida = false;
    var spans2 = document.querySelectorAll('.letras')
    console.log(spans2)
    for(var i = 0; i < letrasUsadas.length ;i++){
        if(mayuscula == letrasUsadas[i]){
            repetida = true;
            break;
        }
    }
    if(repetida == false ){
        letrasUsadas.push(mayuscula);
            considencias = false;

        for(var i = 0 ; i < palabraEscogida.length; i++){
            if(mayuscula == palabraEscogida.charAt(i)){
             pts ++;
             considencias = true; 

                dibujar()
             spans2[i].classList.remove('hidden');

             if(pts == palabraEscogida.length){
                ganastes();
                removeEventListener("keypress",verificador)
            }   
            
            }
               
        }
        if(considencias ==  false){
            intentos ++;
            dibujar()
            errores.innerHTML +=" " + mayuscula;

        }   

        
    }
}
        
addEventListener("keypress",verificador);

   /* 1 hacer el array 
                2 analizar que la tecla que ingreso el usuario no este dentro del array
                3 verificar si la letra esta duplicada
                3.1 si esta duplicada no ejecuta nada
                3.2 ejecutar la condicion de plabra escogida
                3.2.1 hacer una iteracion for o wile i posicion 0 avanza 3 letras   */