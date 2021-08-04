function mostrar() {
	let precio = 15000;
	let preciofinal
	let destino
	let estacion

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				preciofinal= precio + precio * .20;
				

				


			} else if (destino == "Mar del plata") {
				preciofinal= precio - precio * .20;
				
				

			} else {
				preciofinal= precio - precio * .10;
			


			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
				preciofinal= precio - precio * .20;
				//alert("Bariloche / Verano");


			} else if (destino == "Mar del plata") {
				preciofinal= precio + precio * .20;
				//alert("Mar del plata / Verano");

			} else {preciofinal= precio + precio * .10;
				


			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba") {
				preciofinal = precio;

				//alert("Cordova Otoño/Primavera");

			} else {
				preciofinal= precio + precio * .10;
				//alert("Cataratas/Bariloche/Mar del plata Otoño/Primavera")
			}





			break;




	}
	alert (`El precio a pagar es ${preciofinal}`);


}



//FIN DE LA FUNCIÓN