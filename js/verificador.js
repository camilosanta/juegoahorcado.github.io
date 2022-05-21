var errores = document.querySelector('#errores')
var pts = 0;
var repetida = false;
var contadorCanvas = 200;
var letrasUsadas = [];
        
addEventListener("keypress", function(e){

            for(var i = 0; i < letrasUsadas.length ;i++){
                if(mayuscula == letrasUsadas[i]){
                    repetida = true;
                    break;
                }
            }
            if(repetida == false ){
                letrasUsadas.push(e.key);
                var considencias = false;

                for(var i = 0 ; i < palabraEscogida.length; i++){
                    if(mayuscula == palabraEscogida.charAt(i)){
                     pts ++;
                     considencias = true; 
                     //hacer que la letra se muestre 
                     if(pts == palabraEscogida.length){
                        ganastes();
                    }
                    
                    }
                       
                }
                if(considencias ==  false){
                    intentos ++;
                    dibujar()
                    errores.innerHTML +=" " + mayuscula;
        
                }   

                
            }
                
            });
            /* 1 hacer el array 
                2 analizar que la tecla que ingreso el usuario no este dentro del array
                3 verificar si la letra esta duplicada
                3.1 si esta duplicada no ejecuta nada
                3.2 ejecutar la condicion de plabra escogida
                3.2.1 hacer una iteracion for o wile i posicion 0 avanza 3 letras   */