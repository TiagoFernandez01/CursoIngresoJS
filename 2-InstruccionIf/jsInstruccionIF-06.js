function mostrar() {
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13) {
		alert("Es niño");
	} else {
		if (edad <= 17) {
			alert("es adolecente")
		}
		else {
			if (edad >= 18) {
				alert("es adulto")
				
			}
		}
	}



}//FIN DE LA FUNCIÓN