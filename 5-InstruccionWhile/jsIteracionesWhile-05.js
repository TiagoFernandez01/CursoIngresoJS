/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexo;
	sexo = prompt("ingrese f ó m .").toLocaleLowerCase();
	while (sexo != "f" && sexo != "m") {
		sexo = prompt("Invalido, vuelva a intentar").toLocaleLowerCase();


	}
	
	document.getElementById("txtIdSexo").value = sexo;



	
}//FIN DE LA FUNCIÓN