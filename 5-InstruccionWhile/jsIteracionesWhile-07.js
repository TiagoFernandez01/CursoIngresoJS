/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num;
	let respuesta;
	let acumulador = 0;
	let contador = 0;
	let prom;

	do{
		num = parseInt(prompt("Ingrese un número"));
		acumulador = acumulador + num;
		contador++;

		respuesta = prompt("Quiere seguir ingresando números? (s/n)");

	}while(respuesta == "s");

	prom = acumulador/contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = prom;


}//FIN DE LA FUNCIÓN