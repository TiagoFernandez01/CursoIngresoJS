function mostrar() {
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tienen 30 dias");
			break;
		default:
			alert("tiene 31 dias");


	}





}//FIN DE LA FUNCIÓN