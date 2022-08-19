
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

	var validador = true;
	var letraMala = 'x';

		
	for (var i = 0; i < data.length; i++) {

		letra = data[i];

		//validar mayusculas y caracteres especiales
		if ((letra != " " && ((letra == letra.toUpperCase()) || (letra == "á") || (letra == "é") || (letra == "í") || (letra == "ó") || (letra == "ú") || (letra == "ä") || (letra == "ë") || (letra == "ï") || (letra == "ö") || (letra == "ü") || (letra == "â") || (letra == "ê") || (letra == "î") || (letra == "ô") || (letra == "û") || (letra == "à") || (letra == "è") || (letra == "ì") || (letra == "ò") || (letra == "ù")))) {
			validador = false;
			letraMala = letra;
		}

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
		}

		salida+= letra;		

	}
			
	textoIn.value = "";
	if (validador){
		textoOut.value = salida;
	}
	else{
		textoOut.value = "Caracteres no permitidos (" + letraMala + ").";
	}
		
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