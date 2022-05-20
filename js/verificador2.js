if (id == 7){
    var gano = 1;
    if(gano == 1){

        var lt1 = 0; 
        var lt2 = 0;
        var lt3 = 0;  
        var lt4 = 0; 
        var lt5 = 0; 
        var lt6 = 0;
        var lt7 = 0;     

    
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
            if(e.key == palabraEscogida.charAt(4)){
                    
                if( lt5 == 0){
                    dibujarletra(4,320)
                    error5 = true;
                    lt5 =1;
                }else{
                    letraasignada();
                }
            }
            else{
                error5 = false;
            }
    if(e.key == palabraEscogida.charAt(5)){
            
        if( lt6 == 0){
            dibujarletra(5,350)
            error6 = true;
            lt6 =1;
        }else{
            letraasignada();
        }
    }
    else{
        error6 = false;
    }
            if(e.key == palabraEscogida.charAt(6)){
                
                if( lt7 == 0){
                    dibujarletra(6,380)
                    error7 = true;
                    lt7 =1;
                }else{
                    letraasignada();
                }
            }
            else{
                error7= false;
            }

            if(error1 == false && error2 == false && error3 == false && error4 == false && error5 == false && error6 == false && error7 == false){
                
    
                console.log(intentos +" " +e.key)
                dibujar(e.key)
            }
            if(pts == 7){
                ganastes();
            }
      })
     }else{
        alert("ganastes")
    }

    }