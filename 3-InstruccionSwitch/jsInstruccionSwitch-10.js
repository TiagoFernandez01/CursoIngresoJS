function mostrar() {

	let destino
	let estacion

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("se viaja");

			} else {
				alert("no se viaja");
			}
			break;
		case "Verano":
			if (destino == "Cataratas" || destino == "Mar del plata") {
				alert("Se viaja");

			}
			break;
		case "Otoño":
			{
				alert("Se viaja");

			}
			break;
		case "Primavera":
			if (destino != "Bariloche") {
				alert("Se viaja");
				break;

			}
	}


}//FIN DE LA FUNCIÓN