
var botonEncriptar = document.getElementById('encriptar');
var botonDesencriptar = document.getElementById('desencriptar');
var botonCopiar = document.getElementById('copiar');

var textoIn = document.getElementById('textoEntrada');
var textoOut = document.getElementById('textoSalida');

//genera un numero entre 2 y 9
function aleatorio(x) {
    var r = Math.round(x * Math.random()) + 2;
    return(r);
} 

//agrega ceros a la izquierda
function zeroPad(num) {
    return num.toString().padStart(3, "0");
}

//codificador
function codificar() {

    var entrada = textoIn.value;

    var n = aleatorio(10);

    var salida = String.fromCharCode(n+32);

    var data = entrada.split("");

    var numcod = 0;
    
    for (var i = 0; i < data.length; i++) {

        letra = data[i];

        numcod = letra.charCodeAt(0) + n;

        if (numcod>255) {

            numcod = numcod + 32 - 255; 
            
        }

        letra = String.fromCharCode(numcod);

        salida+= letra;		

    }

    textoIn.value = "";
	textoOut.value = salida;

}

//decodificador
function decodificar() {

    var entrada = textoIn.value;

    var salida = [];

    var data = entrada.split("");

    var key = (data[0]).charCodeAt(0) -32;
    //console.log(key);

    var ndeco = 0;

    var letra = "a";

    var i = 1;

    while (i < data.length) {
        
        ndeco = (data[i]).charCodeAt(0) - key;

        //console.log(ndeco);

        if (ndeco<32) {
            ndeco = ndeco + 255 - 32;
        }

        letra = String.fromCharCode(ndeco);
        
        salida+= letra;	
        
        i++;

    };
            
    textoIn.value = "";
	textoOut.value = salida;

}

function copiar(){

    textoOut.select();
    document.execCommand('copy');    

}

botonEncriptar.addEventListener( "click",codificar,true);
botonDesencriptar.addEventListener( "click",decodificar,true);
botonCopiar.addEventListener( "click",copiar,true);