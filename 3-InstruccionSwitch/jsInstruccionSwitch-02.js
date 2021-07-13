function mostrar() {
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Aun no hace frio");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		default:
			alert("Ya pasamos el frio ahora el calor");
			


	}




	/*if (mes == "Enero" || mes == "Febrero" || mes == "Marzo" || mes == "Abril" || mes == "Mayo" || mes == "Junio") {
		alert("Aun no hace frio");


	} else if (mes == "Julio" || mes == "Agosto") {
		alert("Abrigate hace frio");


	} else {
		alert("Ahora hace calor");
	}
	 switch(mes) {
		 case "Julio":
		 alert("abrigate que hace frio");
		 break;
		 case "Agosto":
		 alert("abrigate que hace frio");
		 break;
		 case "Enero":
		 alert("aun no llego el invierno");
		 break;
		 case "Febrero":
		 alert("aun no llego el invierno");
		 break;
		 case "Marzo":
		 alert("aun no llego el invierno");
		 break;
		 case "Abril":
		 alert("aun no llego el invierno");
		 break;
		 case "Mayo":
		 alert("aun no llego el invierno");
		 break;
		 case "Junio":
		 alert("aun no llego el invierno");
		 break;
		 case "Septiembre":
		 alert("Ahora calor");
		 break;
		 case "Octubre":
		 alert("Ahora calor");
		 break;
		 case "Noviembre":
		 alert("Ahora calor");
		 break;
		 case "Diciembre":
		 alert("Ahora calor");
		 break; */
}




//FIN DE LA FUNCIÓN