function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;

	
	nota = Math.floor(Math.random() * 10 + 1);
	if (nota > 8) {
		alert (`excelente ${nota}`);
		
	}else if (nota>3) {
		alert (`aprobado ${nota}`);
	} else {
		alert (`vamos la porxima se puede ${nota}`);

	}

}//FIN DE LA FUNCIÓN