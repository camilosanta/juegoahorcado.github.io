var error1 = true;
var error2 = true;
var error3 = true;
var error4 = true;
var error5 = true;
var error6 = true;
var error7 = true;
var error8 = true;
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
                    console.log(palabraEscogida.charAt(0))
    
    
                    pts = pts + 1;
                    pincel.fillStyle ="darkblue";
                    pincel.font ="30px Arial";
                    pincel.fillText(palabraEscogida.charAt(0),196,300)
                   
                    lt1 = 1;
                    error1 = true;
                }else{
                    error1 = true;
                    alert("letra ya asignada")
                }
               
            }else{
                error1 = false;
            }
            if(e.key == palabraEscogida.charAt(1)){
               
                if(lt2 == 0){
    
                    console.log(palabraEscogida.charAt(1))
    
    
                    pts = pts + 1;
                    pincel.fillStyle ="darkblue";
                    pincel.font ="30px Arial";
                    pincel.fillText(palabraEscogida.charAt(1),230,300)
                   
                    lt2 = 1;
                    error2 = true;
                }else{
                    error2 = true;
                    alert("letra ya asignada")
                }
            }
            else{
                error2 = false;
            }
            if(e.key == palabraEscogida.charAt(2)){
                
                if( lt3 == 0){
    
                    console.log(palabraEscogida.charAt(2))
    
    
    
                    pincel.fillStyle ="darkblue";
                    pincel.font ="30px Arial";
                    pincel.fillText(palabraEscogida.charAt(2),260,300)
                
                    error3 = true;
                    lt3 =1;
                    pts = pts + 1; 
    
                }else{
                    error3 = true;
                    alert("letra ya asignada")
                }
            }
            else{
                error3 = false;
            }
    
            if(error1 == false && error2 == false && error3 == false){
                
    
                console.log(intentos)
                dibujar()
            }
            if(pts == 3){
                alert("gano")
    
                pincel.fillStyle = "cyan";
                pincel.font ="30px Arial";
                pincel.fillText("Ganastes  :)",300,150)
                pincel.strokeText("Ganastes  :)",300,150)
                error1,error2,error3 = true;
                gano= 0;
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
        
        
                        pts = pts + 1;
                        pincel.fillStyle ="darkblue";
                        pincel.font ="30px Arial";
                        pincel.fillText(palabraEscogida.charAt(0),196,300)
                       
                        lt1 = 1;
                        error1 = true;
                    }else{
                        error1 = true;
                        alert("letra ya asignada")
                    }
                   
                }else{
                    error1 = false;
                }
                if(e.key == palabraEscogida.charAt(1)){
                   
                    if(lt2 == 0){
        
                        console.log(palabraEscogida.charAt(1))
        
        
                        pts = pts + 1;
                        pincel.fillStyle ="darkblue";
                        pincel.font ="30px Arial";
                        pincel.fillText(palabraEscogida.charAt(1),230,300)
                       
                        lt2 = 1;
                        error2 = true;
                    }else{
                        error2 = true;
                        alert("letra ya asignada")
                    }
                }
                else{
                    error2 = false;
                }
                if(e.key == palabraEscogida.charAt(2)){
                    
                    if( lt3 == 0){
        
                        console.log(palabraEscogida.charAt(2))
        
        
        
                        pincel.fillStyle ="darkblue";
                        pincel.font ="30px Arial";
                        pincel.fillText(palabraEscogida.charAt(2),260,300)
                    
                        error3 = true;
                        lt3 =1;
                        pts = pts + 1; 
        
                    }else{
                        error3 = true;
                        alert("letra ya asignada")
                    }
                }
                else{
                    error3 = false;
                }
                
                if(e.key == palabraEscogida.charAt(3)){
                    
                    if( lt4 == 0){
        
                        console.log(palabraEscogida.charAt(3))
        
        
        
                        pincel.fillStyle ="darkblue";
                        pincel.font ="30px Arial";
                        pincel.fillText(palabraEscogida.charAt(3),290,300)
                    
                        error4 = true;
                        lt4 =1;
                        pts = pts + 1; 
        
                    }else{
                        error4 = true;
                        alert("letra ya asignada")
                    }
                }
                else{
                    error4 = false;
                }
                if(error1 == false && error2 == false && error3 == false && error4 == false ){
                    
        
                    console.log(intentos)
                    dibujar()
                }
                if(pts == 4){
                    alert("gano")
        
                    pincel.fillStyle = "cyan";
                    pincel.font ="30px Arial";
                    pincel.fillText("Ganastes  :)",300,150)
                    pincel.strokeText("Ganastes  :)",300,150)
                    error1,error2,error3 = true;
                    gano= 0;
                }
          })
         }else{
            alert("ganastes")
        }
    
        }

if (id == 5){


            var gano = 1;
            if(gano == 1){
        
                var lt1 = 0; 
                var lt2 = 0;
                var lt3 = 0;  
                var lt4 = 0; 
                var lt5 = 0;  

            
                addEventListener("keypress", function(e){
            
                   
                            
                    if(e.key == palabraEscogida.charAt(0)){
                                
                                
                        if(lt1 == 0){
                            console.log(palabraEscogida.charAt(0))
            
            
                            pts = pts + 1;
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(0),196,300)
                           
                            lt1 = 1;
                            error1 = true;
                        }else{
                            error1 = true;
                            alert("letra ya asignada")
                        }
                       
                    }else{
                        error1 = false;
                    }
                    if(e.key == palabraEscogida.charAt(1)){
                       
                        if(lt2 == 0){
            
                            console.log(palabraEscogida.charAt(1))
            
            
                            pts = pts + 1;
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(1),230,300)
                           
                            lt2 = 1;
                            error2 = true;
                        }else{
                            error2 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error2 = false;
                    }
                    if(e.key == palabraEscogida.charAt(2)){
                        
                        if( lt3 == 0){
            
                            console.log(palabraEscogida.charAt(2))
            
            
            
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(2),260,300)
                        
                            error3 = true;
                            lt3 =1;
                            pts = pts + 1; 
            
                        }else{
                            error3 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error3 = false;
                    }
                    
                    if(e.key == palabraEscogida.charAt(3)){
                        
                        if( lt4 == 0){
            
                            console.log(palabraEscogida.charAt(3))
            
            
            
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(3),260,300)
                        
                            error4 = true;
                            lt4 =1;
                            pts = pts + 1; 
            
                        }else{
                            error4 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error4 = false;
                    }

                    if(e.key == palabraEscogida.charAt(4)){
                            
                        if( lt5 == 0){
            
                            console.log(palabraEscogida.charAt(4))
            
            
            
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(4),320,300)
                        
                            error5 = true;
                            lt5 =1;
                            pts = pts + 1; 
            
                        }else{
                            error5 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error5 = false;
                    }
                    if(error1 == false && error2 == false && error3 == false && error4 == false && error5 == false){
                        
            
                        console.log(intentos)
                        dibujar()
                    }
                    if(pts == 5){
                        alert("gano")
            
                        pincel.fillStyle = "cyan";
                        pincel.font ="30px Arial";
                        pincel.fillText("Ganastes  :)",300,150)
                        pincel.strokeText("Ganastes  :)",300,150)
                        error1,error2,error3 = true;
                        gano= 0;
                    }
              })
             }else{
                alert("ganastes")
            }
        
            }

if (id == 6){


    var gano = 1;
            if(gano == 1){
        
                var lt1 = 0; 
                var lt2 = 0;
                var lt3 = 0;  
                var lt4 = 0; 
                var lt5 = 0; 
                var lt6 = 0;   

            
                addEventListener("keypress", function(e){
            
                   
                            
                    if(e.key == palabraEscogida.charAt(0)){
                                
                                
                        if(lt1 == 0){
                            console.log(palabraEscogida.charAt(0))
            
            
                            pts = pts + 1;
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(0),196,300)
                           
                            lt1 = 1;
                            error1 = true;
                        }else{
                            error1 = true;
                            alert("letra ya asignada")
                        }
                       
                    }else{
                        error1 = false;
                    }
                    if(e.key == palabraEscogida.charAt(1)){
                       
                        if(lt2 == 0){
            
                            console.log(palabraEscogida.charAt(1))
            
            
                            pts = pts + 1;
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(1),230,300)
                           
                            lt2 = 1;
                            error2 = true;
                        }else{
                            error2 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error2 = false;
                    }
                    if(e.key == palabraEscogida.charAt(2)){
                        
                        if( lt3 == 0){
            
                            console.log(palabraEscogida.charAt(2))
            
            
            
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(2),260,300)
                        
                            error3 = true;
                            lt3 =1;
                            pts = pts + 1; 
            
                        }else{
                            error3 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error3 = false;
                    }
                    
                    if(e.key == palabraEscogida.charAt(3)){
                        
                        if( lt4 == 0){
            
                            console.log(palabraEscogida.charAt(3))
            
            
            
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(3),290,300)
                        
                            error4 = true;
                            lt4 =1;
                            pts = pts + 1; 
            
                        }else{
                            error4 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error4 = false;
                    }

                    if(e.key == palabraEscogida.charAt(4)){
                            
                        if( lt5 == 0){
            
                            console.log(palabraEscogida.charAt(4))
            
            
            
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(4),320,300)
                        
                            error5 = true;
                            lt5 =1;
                            pts = pts + 1; 
            
                        }else{
                            error5 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error5 = false;
                    }

                    if(e.key == palabraEscogida.charAt(5)){
                            
                        if( lt6 == 0){
            
                            console.log(palabraEscogida.charAt(5))
            
            
            
                            pincel.fillStyle ="darkblue";
                            pincel.font ="30px Arial";
                            pincel.fillText(palabraEscogida.charAt(5),350,300)
                        
                            error6 = true;
                            lt6 =1;
                            pts = pts + 1; 
            
                        }else{
                            error6 = true;
                            alert("letra ya asignada")
                        }
                    }
                    else{
                        error6 = false;
                    }
                    if(error1 == false && error2 == false && error3 == false && error4 == false && error5 == false && error6 == false){
                        
            
                        console.log(intentos)
                        dibujar()
                    }
                    if(pts == 6){
                        alert("gano")
            
                        pincel.fillStyle = "cyan";
                        pincel.font ="30px Arial";
                        pincel.fillText("Ganastes  :)",300,150)
                        pincel.strokeText("Ganastes  :)",300,150)
                        error1,error2,error3 = true;
                        gano= 0;
                    }
              })
             }else{
                alert("ganastes")
            }
        
            }


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
                    
                    
                                    pts = pts + 1;
                                    pincel.fillStyle ="darkblue";
                                    pincel.font ="30px Arial";
                                    pincel.fillText(palabraEscogida.charAt(0),196,300)
                                   
                                    lt1 = 1;
                                    error1 = true;
                                }else{
                                    error1 = true;
                                    alert("letra ya asignada")
                                }
                               
                            }else{
                                error1 = false;
                            }
                            if(e.key == palabraEscogida.charAt(1)){
                               
                                if(lt2 == 0){
                    
                                    console.log(palabraEscogida.charAt(1))
                    
                    
                                    pts = pts + 1;
                                    pincel.fillStyle ="darkblue";
                                    pincel.font ="30px Arial";
                                    pincel.fillText(palabraEscogida.charAt(1),230,300)
                                   
                                    lt2 = 1;
                                    error2 = true;
                                }else{
                                    error2 = true;
                                    alert("letra ya asignada")
                                }
                            }
                            else{
                                error2 = false;
                            }
                            if(e.key == palabraEscogida.charAt(2)){
                                
                                if( lt3 == 0){
                    
                                    console.log(palabraEscogida.charAt(2))
                    
                    
                    
                                    pincel.fillStyle ="darkblue";
                                    pincel.font ="30px Arial";
                                    pincel.fillText(palabraEscogida.charAt(2),260,300)
                                
                                    error3 = true;
                                    lt3 =1;
                                    pts = pts + 1; 
                    
                                }else{
                                    error3 = true;
                                    alert("letra ya asignada")
                                }
                            }
                            else{
                                error3 = false;
                            }
                            
                            if(e.key == palabraEscogida.charAt(3)){
                                
                                if( lt4 == 0){
                    
                                    console.log(palabraEscogida.charAt(3))
                    
                    
                    
                                    pincel.fillStyle ="darkblue";
                                    pincel.font ="30px Arial";
                                    pincel.fillText(palabraEscogida.charAt(3),290,300)
                                
                                    error4 = true;
                                    lt4 =1;
                                    pts = pts + 1; 
                    
                                }else{
                                    error4 = true;
                                    alert("letra ya asignada")
                                }
                            }
                            else{
                                error4 = false;
                            }
        
                            if(e.key == palabraEscogida.charAt(4)){
                                
                                if( lt5 == 0){
                    
                                    console.log(palabraEscogida.charAt(4))
                    
                    
                    
                                    pincel.fillStyle ="darkblue";
                                    pincel.font ="30px Arial";
                                    pincel.fillText(palabraEscogida.charAt(4),320,300)
                                
                                    error5 = true;
                                    lt5 =1;
                                    pts = pts + 1; 
                    
                                }else{
                                    error5 = true;
                                    alert("letra ya asignada")
                                }
                            }
                            else{
                                error5 = false;
                            }
    
                            if(e.key == palabraEscogida.charAt(5)){
                                
                                if( lt6 == 0){
                    
                                    console.log(palabraEscogida.charAt(5))
                    
                    
                    
                                    pincel.fillStyle ="darkblue";
                                    pincel.font ="30px Arial";
                                    pincel.fillText(palabraEscogida.charAt(5),350,300)
                                
                                    error6 = true;
                                    lt6 =1;
                                    pts = pts + 1; 
                    
                                }else{
                                    error6 = true;
                                    alert("letra ya asignada")
                                }
                            }
                            else{
                                error6= false;
                            }
                            if(e.key == palabraEscogida.charAt(6)){
                                
                                if( lt7 == 0){
                    
                                    console.log(palabraEscogida.charAt(6))
                    
                    
                    
                                    pincel.fillStyle ="darkblue";
                                    pincel.font ="30px Arial";
                                    pincel.fillText(palabraEscogida.charAt(6),380,300)
                                
                                    error7 = true;
                                    lt7 =1;
                                    pts = pts + 1; 
                    
                                }else{
                                    error7 = true;
                                    alert("letra ya asignada")
                                }
                            }
                            else{
                                error7= false;
                            }

                            if(error1 == false && error2 == false && error3 == false && error4 == false && error5 == false && error6 == false && error7 == false){
                                
                    
                                console.log(intentos)
                                dibujar()
                            }
                            if(pts == 7){
                                alert("gano")
                    
                                pincel.fillStyle = "cyan";
                                pincel.font ="30px Arial";
                                pincel.fillText("Ganastes  :)",300,150)
                                pincel.strokeText("Ganastes  :)",300,150)
                                error1,error2,error3 = true;
                                gano= 0;
                            }
                      })
                     }else{
                        alert("ganastes")
                    }
                
                    }

if (id == 8){


                        var gano = 1;
                        if(gano == 1){
                    
                            var lt1 = 0; 
                            var lt2 = 0;
                            var lt3 = 0;  
                            var lt4 = 0; 
                            var lt5 = 0; 
                            var lt6 = 0;
                            var lt7 = 0;
                            var lt8 = 0;        
            
                        
                            addEventListener("keypress", function(e){
                        
                               
                                         
                                if(e.key == palabraEscogida.charAt(0)){
                                
                                
                                    if(lt1 == 0){
                                        console.log(palabraEscogida.charAt(0))
                        
                        
                                        pts = pts + 1;
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(0),196,300)
                                       
                                        lt1 = 1;
                                        error1 = true;
                                    }else{
                                        error1 = true;
                                        alert("letra ya asignada")
                                    }
                                   
                                }else{
                                    error1 = false;
                                }
                                if(e.key == palabraEscogida.charAt(1)){
                                   
                                    if(lt2 == 0){
                        
                                        console.log(palabraEscogida.charAt(1))
                        
                        
                                        pts = pts + 1;
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(1),230,300)
                                       
                                        lt2 = 1;
                                        error2 = true;
                                    }else{
                                        error2 = true;
                                        alert("letra ya asignada")
                                    }
                                }
                                else{
                                    error2 = false;
                                }
                                if(e.key == palabraEscogida.charAt(2)){
                                    
                                    if( lt3 == 0){
                        
                                        console.log(palabraEscogida.charAt(2))
                        
                        
                        
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(2),260,300)
                                    
                                        error3 = true;
                                        lt3 =1;
                                        pts = pts + 1; 
                        
                                    }else{
                                        error3 = true;
                                        alert("letra ya asignada")
                                    }
                                }
                                else{
                                    error3 = false;
                                }
                                
                                if(e.key == palabraEscogida.charAt(3)){
                                    
                                    if( lt4 == 0){
                        
                                        console.log(palabraEscogida.charAt(3))
                        
                        
                        
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(3),290,300)
                                    
                                        error4 = true;
                                        lt4 =1;
                                        pts = pts + 1; 
                        
                                    }else{
                                        error4 = true;
                                        alert("letra ya asignada")
                                    }
                                }
                                else{
                                    error4 = false;
                                }
                                if(e.key == palabraEscogida.charAt(4)){
                                    
                                    if( lt5 == 0){
                        
                                        console.log(palabraEscogida.charAt(4))
                        
                        
                        
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(4),320,300)
                                    
                                        error5 = true;
                                        lt5 =1;
                                        pts = pts + 1; 
                        
                                    }else{
                                        error5 = true;
                                        alert("letra ya asignada")
                                    }
                                }
                                else{
                                    error5 = false;
                                }
        
                                if(e.key == palabraEscogida.charAt(5)){
                                    
                                    if( lt6 == 0){
                        
                                        console.log(palabraEscogida.charAt(5))
                        
                        
                        
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(5),350,300)
                                    
                                        error6 = true;
                                        lt6 =1;
                                        pts = pts + 1; 
                        
                                    }else{
                                        error6 = true;
                                        alert("letra ya asignada")
                                    }
                                }
                                else{
                                    error6= false;
                                }
                                if(e.key == palabraEscogida.charAt(6)){
                                    
                                    if( lt7 == 0){
                        
                                        console.log(palabraEscogida.charAt(6))
                        
                        
                        
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(6),380,300)
                                    
                                        error7 = true;
                                        lt7 =1;
                                        pts = pts + 1; 
                        
                                    }else{
                                        error7 = true;
                                        alert("letra ya asignada")
                                    }
                                }
                                else{
                                    error7= false;
                                }

                                if(e.key == palabraEscogida.charAt(7)){
                                    
                                    if( lt8 == 0){
                        
                                        console.log(palabraEscogida.charAt(7))
                        
                        
                        
                                        pincel.fillStyle ="darkblue";
                                        pincel.font ="30px Arial";
                                        pincel.fillText(palabraEscogida.charAt(7),410,300)
                                    
                                        error8 = true;
                                        lt8 =1;
                                        pts = pts + 1; 
                        
                                    }else{
                                        error8 = true;
                                        alert("letra ya asignada")
                                    }
                                }
                                else{
                                    error8= false;
                                }
                        
                                if(error1 == false && error2 == false && error3 == false && error4 == false && error5 == false && error6 == false && error7 == false && error8 == false){
                                    
                        
                                    console.log(intentos)
                                    dibujar()
                                }
                                if(pts == 8){
                                    alert("gano")
                        
                                    pincel.fillStyle = "cyan";
                                    pincel.font ="30px Arial";
                                    pincel.fillText("Ganastes  :)",300,150)
                                    pincel.strokeText("Ganastes  :)",300,150)
                                    error1,error2,error3 = true;
                                    gano= 0;
                                }
                          })
                         }else{
                            alert("ganastes")
                        }
                    
                        }                    
