/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let clave;
	clave = prompt("ingrese el número clave.");

	while (clave != "utn750") { //cuando el dato es invalido hace verdadera la condicion
		clave = prompt("clave invalida. Reingrese clave");
	}

	alert("Clave correcta");

}//FIN DE LA FUNCIÓN
