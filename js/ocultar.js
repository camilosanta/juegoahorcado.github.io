var PantallaPrincipal = document.querySelector('.container-principal')
var PantallaJuego = document.querySelector('.juego')
var PantallaAgregarPalabra = document.querySelector('.agregar-palabras')
var PantallaAgregarPalabraSitio = document.querySelector('.sitio-agregar-palabras')
var pantallaInformacion = document.querySelector('.informacione3')
var iniciarprincipal = document.querySelector('.boton1').onclick = menuJhuego;
var iniciarMenujuego = document.querySelector('.boton2').onclick = iniciarjuego;
var desistir = document.querySelector('.desistir').onclick = rendirce;
var agregarBotonPalabra = document.querySelector('.boton3').onclick = seccionagregarPalabra2;
var botoninformacion = document.querySelector('.informacion-boton').onclick =informacion3;

var logoprincipal = document.querySelector('.log')


PantallaJuego.classList.add('ocultar')
PantallaAgregarPalabra.classList.add('ocultar')
PantallaAgregarPalabraSitio.classList.add('ocultar')
pantallaInformacion.classList.add('ocultar')



function menuJhuego(){

    PantallaAgregarPalabra.classList.remove('ocultar')
    PantallaPrincipal.classList.add('ocultar')
    logoprincipal.classList.add('ocultar')

}


function iniciarjuego(){
    PantallaJuego.classList.remove('ocultar')
    PantallaAgregarPalabra.classList.add('ocultar')

}
function rendirce(){
    PantallaAgregarPalabra.classList.remove('ocultar')
    PantallaJuego.classList.add('ocultar')
    recargar();
}

function seccionagregarPalabra2(){
    PantallaAgregarPalabraSitio.classList.remove('ocultar')
    PantallaAgregarPalabra.classList.add('ocultar')
    removeEventListener("keypress",verificador);
  
}

function informacion3(){
    pantallaInformacion.classList.remove('ocultar')
    PantallaPrincipal.classList.add('ocultar')
    logoprincipal.classList.add('ocultar')
}
