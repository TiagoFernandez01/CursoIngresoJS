/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaracion de variables
	let dividendo;
	let divisor;
	let resto;
	//levanto los datos de las cajas de texto
	dividendo = document.getElementById("txtIdNumeroDividendo").value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);



	//realizo la operacion de suma
	resto = dividendo / divisor;

	//muestro el resultado

	alert(`el resto es ${resto}`);
}
