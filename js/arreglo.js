
    function aleatorio(inferior,superior){
        numPosibilidades = superior - inferior + 1
        aleat = Math.random() * numPosibilidades
        aleat = Math.floor(aleat)
        return parseInt(inferior) + aleat
        }
       

var palabras = ['JAVA', 'HTML', 'MEXICO', 'COLOMBIA', 'WEB', 'ECUADOR', 'PERU', 'BRAZIL', 'AMERICA','CELULAR','LLUVIA','DISCORD','ALURA','PANAMA','HONDURAS','TECLADO','MAUSE','MONITOR','TORRE','CLASES'];
var palabraEscogida = palabras[aleatorio(0,palabras.length-1)] //
var aciertos = [];
console.log(palabras)
