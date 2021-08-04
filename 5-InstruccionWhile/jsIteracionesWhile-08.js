/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numero;
	let respuesta;
	let acumuladorp = 0;
	let acumuladorn = 1;
	let flag = 1;

	do {
		numero = parseInt(prompt("Ingrse un numero"));
		if (numero >= 0) {
			acumuladorp = acumuladorp + numero;

		} else {
			acumuladorn *= numero;
			flag = 0

		}
		respuesta = prompt("quiere ingresar otro nuemro? s/n")

	} while (respuesta == 's');
	if (flag) {
		acumuladorn = 0;

	}
	document.getElementById("txtIdSuma").value = acumuladorp
	document.getElementById("txtIdProducto").value = acumuladorn

}//FIN DE LA FUNCIÓN


//1- decalarar las variable
//2- generar un bucle del tipo mientras el usuario quiera (do-while)
//Dentro del bucle
//2.1- Pedir el nuemero 
//2.2- Analizar el signo del numero ( generar un scope para los positivos y otros para los negativos)
//2.3- sumo los positivos / multiplico los negativos
//3-mostramos los resultadosa
