var guardarPalabra = document.querySelector("#guardar");
var campotexto = document.querySelector('.input')



guardarPalabra.addEventListener("click",function(e){
    e.preventDefault()
    var input = campotexto.value 
    palabras.push(input)
    console.log(palabras)


    PantallaAgregarPalabraSitio.classList.add('ocultar')
    PantallaJuego.classList.remove('ocultar')
    
})
