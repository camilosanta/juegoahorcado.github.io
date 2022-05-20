var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var iniciar = document.querySelector(".nuevojuego").onclick = recargar;
var desistir = document.querySelector(".desistir");




  

    function aleatorio(inferior,superior){
        numPosibilidades = superior - inferior + 1
        aleat = Math.random() * numPosibilidades
        aleat = Math.floor(aleat)
        return parseInt(inferior) + aleat
        }

        var palabras = ['JAVA', 'HTML', 'MEXICO', 'COLOMBIA', 'WEB', 'ECUADOR', 'PERU', 'BRAZIL', 'AMERICA','CELULAR','LLUVIA','DISCORD','ALURA','PANAMA','HONDURAS','TECLADO','MAUSE','MONITOR','TORRE','CLASES','NIÑO'];
        var palabraEscogida = palabras[aleatorio(0,palabras.length-1)] //
        var aciertos = [];
    

        
 //--------------------------------------------------------------------------
 //lineas

var NDP = palabraEscogida.length;
var contador2 = 0;
var id = 0;
 while(contador2 == 0){
                contador2 ++ ;

                if(contador2 == 1){

                    
                    dibujarlineas(200,300,200,300);
                    
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{
                       
                    
                        break
                    }
                    
                 
                }
                
                if(contador2 == 2){

                   
                    dibujarlineas(200,300,230,300);
                    
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{
                       id = 2;
                        break
                    }
                    
                }
                
                if(contador2 == 3){

                    
                    dibujarlineas(200,300,260,300);
                   
                     
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{

                       id = 3;
                        break
                    }
                  
                }
                
                if(contador2 == 4){
                    
                    dibujarlineas(200,300,290,300);
                    
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{
                       id = 4;
                        break
                    }
                  
                }

                
                if(contador2 == 5){

                    
                    dibujarlineas(200,300,320,300);
                   
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{
                       id = 5;
                        break
                    }
                
                }
                
                if(contador2 == 6){

                   
                    dibujarlineas(200,300,350,300);
                    
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{
                       id = 6;
                        break
                    }
                    
                }
                
                if(contador2 == 7){

                    dibujarlineas(200,300,380,300);
                
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{
                       id = 7;
                        break
                    }
                }
                
                if(contador2 == 8){

                    
                    dibujarlineas(200,300,410,300);
                   
                    if(contador2 < NDP){
                        contador2 ++ ;  
                    }else{
                       id = 8;
                        break
                    }
                   
                }
            
}

 //--------------------------------------------------------------------------
                  
function dibujar(letra){
    intentos ++

    if(intentos == 1){
        pincel.fillStyle ="darkblue";
        pincel.fillRect(50,50,4,200);
        dibujarletraincorrecta(letra,200);
        
    }if(intentos == 2){

        pincel.fillStyle ="darkblue";
        pincel.beginPath();
        pincel.moveTo(50,50);
        pincel.fillRect(50,50,170,4)
        dibujarletraincorrecta(letra,230);

    }if(intentos == 2){
        pincel.fillStyle ="darkblue";
        pincel.beginPath();
        pincel.moveTo(150,50);
        pincel.fillRect(198,50,4,50)
    
    }if(intentos == 1){
        pincel.fillStyle ="darkblue";
        pincel.beginPath();       
        pincel.moveTo(50,150);
        pincel.fillRect(50,250,100,4)
    }if(intentos == 3){

        pincel.fillStyle ="darkblue";
        pincel.beginPath();
        pincel.arc(200,90,20,0,2*3.14);
        pincel.fill();
        dibujarletraincorrecta(letra,260);
    }if(intentos == 3){

        pincel.fillStyle ="darkblue";
        pincel.beginPath();
        pincel.moveTo(150,50);
        pincel.fillRect(195,108,7,50);
    }

    //manos
    if(intentos== 4){
        pincel.fillStyle = "darkblue";
        pincel.beginPath();
        pincel.moveTo(200,115);
        pincel.lineTo(234,165);
        pincel.lineTo(230,165);
        pincel.lineTo(196,112);
        pincel.fill();
        dibujarletraincorrecta(letra,290);
    }if(intentos == 5){
        pincel.fillStyle = "darkblue";
        pincel.beginPath();
        pincel.moveTo(196,115);
        pincel.lineTo(166,165);
        pincel.lineTo(170,165);
        pincel.lineTo(200,115);
        pincel.fill();
      
        dibujarletraincorrecta(letra,320);
    } 
    
    //pies
    if(intentos == 6){
        pincel.fillStyle ="darkblue";
        pincel.beginPath();
        pincel.moveTo(200,150);
        pincel.lineTo(234,220)
        pincel.lineTo(230,220)
        pincel.lineTo(198,158)
        pincel.fill();
      

    }if(intentos == 6){

        pincel.fillStyle = "darkblue";
        pincel.beginPath();
        pincel.moveTo(196, 150);
        pincel.lineTo(166, 220);
        pincel.lineTo(170, 220);
        pincel.lineTo(202, 152);
        pincel.fill();

        dibujarletraincorrecta(letra,350);
        //texto de perdedor 
        pincel.fillStyle = "cyan";
        pincel.font ="30px Arial";
        pincel.fillText("Perdistes  :(",300,150)
        pincel.strokeText("Perdistes  :(",300,150)
      
         lt1 = 1; 
         lt2 = 1;
         lt3 = 1; 
         lt4 = 1; 
         lt5 = 1;
         lt6 = 1;
         lt7 = 1; 
         lt8 = 1; 

         alert("Perdistes tu palabre era "+ palabraEscogida + "  PTS : " + pts )
    }
 

    function dibujarletraincorrecta(caracter,x){

            pincel.fillStyle ="darkblue";
            pincel.font ="30px Arial";
            pincel.fillText(caracter,x,340);
    }
}
function recargar(){
    location.reload(); //recarga pagina
}
function ganastes(){
    alert("gano")
    
    pincel.fillStyle = "cyan";
    pincel.font ="30px Arial";
    pincel.fillText("Ganastes,Felicidades",300,150)
    pincel.strokeText("Ganastes,Felicidades",300,150)
    error1,error2,error3,error4,error5,error6,error7,error8 = true;
    gano= 0;

}
function letraasignada(){
    error1,error2,error3,error4,error5,error6,error7,error8 = true;
    alert("letra ya asignada")
}
function dibujarlineas(y,x,y2,x2){

    pincel.fillStyle = "cian";
    pincel.beginPath();       
    pincel.moveTo(y,x);
    pincel.fillRect(y2,x2,25,4)
}
function dibujarletra(caracter,x,y){
    console.log(palabraEscogida.charAt(caracter))
    pts = pts + 1;
    pincel.fillStyle ="darkblue";
    pincel.font ="30px Arial";
    pincel.fillText(palabraEscogida.charAt(caracter),x,300)
}

