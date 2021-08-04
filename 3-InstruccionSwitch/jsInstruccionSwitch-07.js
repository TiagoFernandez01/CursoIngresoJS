function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	if (destino== "Bariloche") {
		alert("Oeste");
		
	}else if (destino== "Ushuaia") {
		alert("Sur");
		
	}else if (destino== "Cataratas") {
		alert("Norte");
	}else{
		alert ("Este");
	}
	
	
	
	/*switch (destino) {
    case "Cataratas":
	alert ("Se encuentra al norte");

	break;
	case "Ushuaia":
		alert("Se encuentra al sur");
		break;
		case "Bariloche":
		alert("se encuentra al oeste");
		break;
		case "Mar del plata":
			alert("Se encuentra al este");
			break;


	}*/

}//FIN DE LA FUNCIÓN