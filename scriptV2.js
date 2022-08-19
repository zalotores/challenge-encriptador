
var botonEncriptar = document.getElementById('encriptar');
var botonDesencriptar = document.getElementById('desencriptar');
var botonCopiar = document.getElementById('copiar');

var textoIn = document.getElementById('textoEntrada');
var textoOut = document.getElementById('textoSalida');

//codificador
function codificar() {

    var entrada = textoIn.value;

    var salida = [];

	var data = entrada.split("");
		
	for (var i = 0; i < data.length; i++) {

		letra = data[i];

		switch(letra) {

			case "a":
				letra = "ai";
				break;
			case "e":
				letra = "enter";
				break;
			case "i":
				letra = "imes";
				break;
			case "o":
				letra = "ober";
				break;
			case "u":
				letra = "ufat";
				break;
            case "A":
				letra = "Ai";
				break;
			case "E":
				letra = "Enter";
				break;
			case "I":
				letra = "Imes";
				break;
			case "O":
				letra = "Ober";
				break;
			case "U":
				letra = "Ufat";
				break;
		}

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


	var i = 0;

	while (i < data.length) {
		//console.log(i);

		letra = data[i];
		//console.log(letra);

		switch(letra) {

			case "a":
				i+= 2;
				break;
			case "e":
				i+= 5;
				break;
			case "i":
				i+=4;
				break;
			case "o":
				i+= 4;
				break;
			case "u":
				i+= 4;
				break;
            case "A":
			    i+= 2;
				break;
			case "E":
				i+= 5;
				break;
			case "I":
				i+=4;
				break;
			case "O":
				i+= 4;
				break;
			case "U":
				i+= 4;
				break;
			default:
				i++;
				break;
		}

		salida+= letra;		

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