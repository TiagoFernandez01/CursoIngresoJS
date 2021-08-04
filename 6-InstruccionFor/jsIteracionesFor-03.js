function mostrar()
{

	let numero;


	numero=parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero)||numero<1){
		numero=parseInt(prompt("No es un numero. Ingrese un numero: "));
	}

	for(let repeticion=0;repeticion<numero;repeticion++){
		console.log("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN