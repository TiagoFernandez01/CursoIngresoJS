function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 18) {
		alert("Usted es mayor de edad");

	}
	else{
		alert("es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN