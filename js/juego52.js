var guardarPalabra = document.querySelector("#guardar");
var campotexto = document.querySelector('#agregar-plabre-input')
var pasa = true;
guardarPalabra.addEventListener("click",function(e){
    e.preventDefault()

    
   if(pasa == true){

    var form = campotexto.value
    var textoguardar = form
    palabras.push(textoguardar)


    console.log(palabras)

    PantallaAgregarPalabraSitio.classList.add('ocultar')
    PantallaJuego.classList.remove('ocultar')
    campotexto.value=""
    recargar()
   }
   if(pasa == false){
       alert("error")
   }
  
    
})
