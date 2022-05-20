var error1,error2,error3,error4,error5,error6,error7,error8 = true;
var pts = 0;
var intentos = 0; 

 if (id == 3){


    var gano = 1;
    if(gano == 1){

        var lt1 = 0; 
        var lt2 = 0;
        var lt3 = 0;  
        addEventListener("keypress", function(e){
    
           
            if(e.key == palabraEscogida.charAt(0)){
                
                if(lt1 == 0){
                    dibujarletra(0,196);
                    lt1 = 1;
                    error1 = true;
                }else{
                    letraasignada();
                }
               
            }else{
                error1 = false;
            }
            if(e.key == palabraEscogida.charAt(1)){
               
                if(lt2 == 0){
                    dibujarletra(1,230);
                    lt2 = 1;
                    error2 = true;
                }else{
                    letraasignada();
                }
            }
            else{
                error2 = false;
            }
            if(e.key == palabraEscogida.charAt(2)){
                
                if( lt3 == 0){
                    dibujarletra(2,260);
                    error3 = true;
                    lt3 =1;
                    
                }else{
                    letraasignada();
                }
            }
            else{
                error3 = false;
            }
    
            if(error1 == false && error2 == false && error3 == false){
                console.log(intentos +" " +e.key)
                dibujar(e.key)
            }
            if(pts == 3){
                ganastes();
            }
      })
     }else{
        alert("ganastes")
    }

    }
   
if (id == 4){


        var gano = 1;
        if(gano == 1){
    
            var lt1 = 0; 
            var lt2 = 0;
            var lt3 = 0;  
            var lt4 = 0; 

        
            addEventListener("keypress", function(e){
        
               
                if(e.key == palabraEscogida.charAt(0)){
                                
                                
                    if(lt1 == 0){
                        console.log(palabraEscogida.charAt(0))
                        dibujarletra(0,200)
                        lt1 = 1;
                        error1 = true;
                    }else{
                        letraasignada();
                    }
                   
                }else{
                    error1 = false;
                }
                if(e.key == palabraEscogida.charAt(1)){
                   
                    if(lt2 == 0){
                        dibujarletra(1,230)
                        lt2 = 1;
                        error2 = true;
                    }else{
                        letraasignada();
                    }
                }
                else{
                    error2 = false;
                }
                if(e.key == palabraEscogida.charAt(2)){
                    
                    if( lt3 == 0){
                        dibujarletra(2,260)
                        error3 = true;
                        lt3 =1;
                    }else{
                        letraasignada();
                    }
                }
                else{
                    error3 = false;
                }
                
                if(e.key == palabraEscogida.charAt(3)){
                    
                    if( lt4 == 0){
                        dibujarletra(3,290)
                        error4 = true;
                        lt4 =1;
                    }else{
                        letraasignada();
                    }
                }
                else{
                    error4 = false;
                }
                if(error1 == false && error2 == false && error3 == false && error4 == false ){
                    
                    console.log(intentos +" " +e.key)
                    dibujar(e.key)
                }
                if(pts == 4){
                    alert("gano")
        
                    ganastes();
                }
          })
         }else{
            alert("ganastes")
        }
    
        }