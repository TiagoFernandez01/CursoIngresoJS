function mostrar()
{
	let numero;
	let contDiv=0;
	numero = parseInt(prompt("Ingrese un numero"));
	while (isNaN(numero) || numero < 1) {
		numero = parseInt(prompt("Ingrese un numero valido"));

	}


	for (let i = 1; i <= numero; i++) {
		if (numero % i) {
			continue;
		}
		contDiv++;
		console.log(i);
		



	}
	console.log("la cantidad de divisores usados es  " + contDiv);

	


}//FIN DE LA FUNCIÓN