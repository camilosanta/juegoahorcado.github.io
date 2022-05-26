var mayuscula;
  addEventListener("keypress", function(e){
    
//--------------------------------------------------------------------------------------------------------------- 
    //expreciones
    var exprecion =/[a-z]/; //exprecion minusculas
    var exprecion2 =/[ÁÉÍÓÚ[áéíóú]/; //exprecion de acentos
    var exprecion3 =/[\\\+\º\ª\|\"\@\$\~\%\€\&\¬\/\(\)\=\'\[\]\¨\´\{\}\Ç\ç\-\_\+\-\*\<\>\·]/; //caracteres especiales ecprecion
    var exprecion4 =/[0-9]/; //caracter numerico
    //verifica si la exprecion se encuentra en textoingresado
    var cumple = exprecion.test(e.key);
    var cumple2 = exprecion2.test(e.key);
    var cumple3 = exprecion3.test(e.key);
    var cumple4 = exprecion4.test(e.key);
//---------------------------------------------------------------------------------------------------------------
    //cuando una esprecion se testea de vuelve true si cumple si no false
    
    if(cumple == true || cumple2 == true || cumple3 == true || cumple4 == true){
        if(cumple2 == true){
            alert("Palabra con acento");
            pasa = false;
        }
        if(cumple3 == true){
            alert("caracter especial");
            pasa = false;
        }
        if(cumple == true){
             mayuscula = e.key.toUpperCase(); //pone en mayusculas
             console.log(mayuscula);
             pasa = false;
        }
        if(cumple4 == true){
            alert("caracter numerico");
            pasa = false;
        }
    }else{
        mayuscula = e.key.toUpperCase(); //pone en mayusculas
        console.log(mayuscula);
        pasa = true;
    }

  })