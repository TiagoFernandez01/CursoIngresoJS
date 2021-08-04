function mostrar()
{
	let num,
		div = 0;

	num = parseInt(prompt("Ingrese un numero."));

	while (isNaN(num) || num <= 0) {
		num = parseInt(prompt("ERROR: Ingrese un numero válido."));
	}

	for (let i = 1; i <= num; i++) {
		if (num % i) {
			continue;
		}
		div++;
	}
	if (div == 2) {
		console.log("Es primo");
	} else {
		console.log("No es primo");
	

	}
}//FIN DE LA FUNCIÓN