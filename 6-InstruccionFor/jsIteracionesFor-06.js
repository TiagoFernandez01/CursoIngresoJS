function mostrar() {
	let numero;
	let contPares=0;
	numero = parseInt(prompt("Ingrese un numero"));
	while (isNaN(numero) || numero < 1) {
		numero = parseInt(prompt("Ingrese un numero valido"));

	}


	for (let i = 1; i <= numero; i++) {
		if (i % 2) {
			continue;
		}
		console.log(i);
		contPares++;
		



	}
	console.log("la cantidad d numeros pares usados es  " + contPares);
}