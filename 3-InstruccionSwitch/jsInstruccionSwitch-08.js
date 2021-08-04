function mostrar() {
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");

			break;
		case "Ushuaia":
			alert("Frio");
			break;
		case "Bariloche":
			alert("Frio");
			break;

	}

}//FIN DE LA FUNCIÓN