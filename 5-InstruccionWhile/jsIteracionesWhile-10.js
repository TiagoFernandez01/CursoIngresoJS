/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numero;
	let acumuladorNeg = 0;
	let acumuladorPos = 0;
	let contadorPos = 0;
	let contadorNeg = 0;
	let contadorCero = 0;
	let contadorPares = 0;
	let promPos;
	let promNeg;
	let diferencia;
	let respuesta;

	do {
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Invalido,Ingrese un numero"));


		}
		if (numero > 0) {
			acumuladorPos = acumuladorPos + numero
			contadorPos++;


		} else if (numero < 0) {
			acumuladorNeg = acumuladorNeg + numero
			contadorNeg++;
		} else {
			contadorCero++;
		}
		//me fijo si el numero es par
		if (numero % 2 == 0) {
			contadorPares++;

		}


		respuesta = prompt("quiere ingresar otro numero? s/n");

	} while (respuesta == 's');

	promPos = acumuladorPos / contadorPos;
	promNeg = acumuladorNeg / contadorNeg;
	diferencia = contadorPos - contadorNeg;

	alert(` la suma de positivos es ${acumuladorPos}
	la suma de los negativos es ${acumuladorNeg}
	la cantidad de positivos es ${contadorPos}
	la cantidad de negativos es ${contadorNeg}
	la cantidad de ceros es ${contadorCero}
	la cantidad de numeros pares es ${contadorPares}
	el promedio de positivos es ${promPos},
	 el promedio de negativos es ${promNeg} 
	 y la diferencia entre negativos y positivos es ${diferencia}`);





}

//estrategia de resolucion:
//1-declarar variables: numero/ acumulador de negativos/ acumulador de positivos/ contador de positivos/contador de negativos/
//contador de ceros/ contador de pares/ promedio de positivos/ promedio de negativos/ diferencia/ respuesta
//2- genero un bucle del tipo mientra el usuario quiera (do-while)
//2.1- pido el numero
//2.2- valido que sea un numero
//2.3- identifico el signo del numero (si es positivo negativo o 0)
//2.3.1- si es positivo lo acumulo y lo cuento
//2.3.2- si es negativo lo acumulo y lo cuento
//2.3.3- si es 0 lo cuento
//2.3.4- me fijo si el numero es par 
//es par lo cuento
//-------------------------------------------------------------------------
//cosas por afuera del bucle
//4- calculo el promedio de los positivos 
//4.1- calculo el pormedio de los negativos
//4.2- calculo la diferencia entre cantidad de positivos y cantidad de negativos
//5- muestro los resultados