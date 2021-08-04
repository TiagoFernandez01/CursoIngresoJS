/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	//1- declaracion de varaibles --> numero/maximo/minimo/ seguir/ 
	let numero;
	let numeroMa;
	let numeroMi;
	let seguir;
	let flag = 0;
	//2- genero un bucle del tipo mientras el usuario quiera (do-while)

	do {
		//2.1- pido un numero
		numero = parseInt(prompt("Ingrese un numero"));
		//2.2- valido el dato (que sea un numero)
		while (isNaN(numero)) {
			numero = parseInt(prompt("Invalido, ingrese un numero"));

		}
		if (flag == 0) {
			numeroMa = numero;
			numeroMi = numero;
			flag = 1;

		} else {
			if (numero > numeoMa) {
				numeroMa = numero;

			} else if (numero < numeroMi) {
				numeroMi = numero;
			}

		}


		seguir = prompt("Quiere seguir ingresando un numero?").toLowerCase();

	} while (seguir == 's');
	document.getElementById("txtIdMaximo").value= numeroMa;
	document.getElementById("txtIdMinimo").value= numeroMi;




}//FIN DE LA FUNCIÓN


//2.3- me fijo si es la primera vez
//2.3.1- si es la primera vez--> asigno el numero a maximo y a minimo
//2.3.2- si no es la primera vez 
//2.3.3- me fijo si el numero es un nuevo maximo o un nuevo minimo y 
//de ser asi actualizo la variable maximo o minimo segun corresponda
//3- mostrar los resultados