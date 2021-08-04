function mostrar()
{
	let numero;
	let contador = 0;
	let acumulador= 0;
	let promedio;

	while (contador < 5) {
		numero= parseInt(prompt("Ingrese los numeros"));
		acumulador = acumulador + numero;
		contador++;

		
	}
	promedio = acumulador / 5;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	

	
	/*let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let prom;
	let suma;
	

	numero1=parseInt(prompt ("ingrese un numero"));
	numero2=parseInt(prompt ("ingrese un numero"));
	numero3=parseInt(prompt ("ingrese un numero"));
	numero4=parseInt(prompt ("ingrese un numero"));
	numero5=parseInt(prompt ("ingrese un numero"));
	
	
	suma= numero1 + numero2 + numero3 + numero4 + numero5;
	prom= suma / 5;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = prom;*/


	
}//FIN DE LA FUNCIÓN