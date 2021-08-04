function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert("Este NO mes tiene mas de 29 dias ");
			break;
			default:
				alert("Este mes tiene 30 dias o mas");
	}
		
	
	
	


}//FIN DE LA FUNCIÓN