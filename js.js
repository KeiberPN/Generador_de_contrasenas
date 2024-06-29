const Longitud_contraseña = document.getElementById('log');
const Mayusculas = document.getElementById('may');
const Minusculas = document.getElementById('min');
const Especiales = document.getElementById('esp');
const Numeros = document.getElementById('num');
const Contraseña = document.getElementById('contraseña');
const Boton_aceptar = document.getElementById('btn');




Boton_aceptar.addEventListener("click", () => {Password();});



function Password(){
	let letra_min = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
	let letra_may = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	let caracteres_especiales = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^",  "_", "{", "|", "}", "~"];
	let numeros = ["0","1","2","3","4","5","6","7","8","9"];

	if (Longitud_contraseña.value <= 0) {
		alert("Seleccione una longitud de contraseña diferente");
		return;
	}

	if (!Numeros.checked && !Especiales.checked && !Minusculas.checked && !Mayusculas.checked) {

		alert("Seleccione un elemento para la contraseña");

	} else{

		let caracter = [];

		if (Mayusculas.checked) {caracter[caracter.length] = 1}
		if (Minusculas.checked) {caracter[caracter.length] = 2}
		if (Especiales.checked) {caracter[caracter.length] = 3}
		if (Numeros.checked) {caracter[caracter.length] = 4}

		let contraseña = "";

		for (var i = 0; i < Longitud_contraseña.value; i++) {
			

			switch (caracter[Random(caracter.length)]){

				case 1:
					contraseña += letra_may[Random(letra_may.length)];
					break;
				case 2:
					contraseña += letra_min[Random(letra_min.length)];
					break;
				case 3:
					contraseña += caracteres_especiales[Random(caracteres_especiales.length)];
					break;
				case 4:
					contraseña += numeros[Random(numeros.length)];
					break;

			}

			
		}

		Contraseña.innerText = 'Su contraseña es: ' + contraseña

	}
	


}




function Random(max) {
  return Math.floor(Math.random() * max);
}

