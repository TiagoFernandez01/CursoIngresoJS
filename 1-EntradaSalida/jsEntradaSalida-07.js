/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
		//Declaracion de variables
	let numero1;
	let numero2;
	let suma;
	//levanto los datos de las cajas de texto
	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);



	//realizo la operacion de suma
	suma = numero1 + numero2;

	//muestro el resultado

	alert(`la suma es ${suma}`);
}

function restar()
{
	//Declaracion de variables
	let numero1;
	let numero2;
	let resta;
	//levanto los datos de las cajas de texto
	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);



	//realizo la operacion de resta
	resta = numero1 - numero2;

	//muestro el resultado

	alert(`la resta es ${resta}`);
	
}

function multiplicar()
{ 
	//Declaracion de variables
	let numero1;
	let numero2;
	let multiplicacion;
	//levanto los datos de las cajas de texto
	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);



	//realizo la operacion de multiplicar
	multiplicacion = numero1 * numero2;

	//muestro el resultado

	alert(`la multiplicacion es ${multiplicacion}`);
	
}

function dividir()
{
	//Declaracion de variables
	let numero1;
	let numero2;
	let divicion;
	//levanto los datos de las cajas de texto
	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);



	//realizo la operacion de divicion
	divicion = numero1 / numero2;

	//muestro el resultado

	alert(`la divicion es ${divicion}`);
	
}

