/* En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar() {
	let nombre,
		edad,
		sexo,
		estado,
		temperatura,
		nombreMaxTemp,
		maxTemp,
		contJovatosViudos=0,
		contHombresFelices=0,
		contJovatosFiebres=0,
		contHSolteros=0,
		acumEdadHSolteros=0,
		falg=1,
		seguir,
		promedio=0;

		do {
			nombre=prompt("Ingrese nombre").toLowerCase();
			sexo= prompt("Ingrese sexo m/f").toLowerCase();
			while (sexo != "f" && sexo != "m") {
			  sexo = prompt("Error.Ingrese un sexo valido. f/m").toLowerCase();

			}
			estado = prompt("Ingrese el estado	 (soltero/casado/viudo)").toLowerCase();
			while (estado != "soltero" && estado != "viudo" && estado != "casado") {
			  estado = prompt("Error.Ingrese un estado valido. soltero/casado/viudo)").toLowerCase();
			}
			temperatura = parseFloat(prompt("ingrese temperatura(30-45):"));
		while (isNaN(temperatura) || temperatura >= 35 || temperatura <= 45) {
			temperatura = parseFloat(prompt("temeperatura invalida. Reintente(35-45):"));


		}
		edad = parseInt(prompt("Ingrese la edad"));
    while (isNaN(edad) || edad < 1) {
      edad = parseInt(prompt("Error. Ingrese edad valida"));
	}

	  if (flag || temperatura > maxTemp) {
		maxTemp = temperatura;
		nombreMaxTemp = nombre;
		flag = 0;
	  }
	  if (estado=="viudo" && edad>=18) {
		  contJovatosViudos++;
		  
	  }
	  if (sexo=='m' && (estado=="soltero" || esado== "viudo")) {
		  contHombresFelices++;
	  }
	  if(edad > 60 && temperatura> 38){

		contJovatosFiebres++;
	  }
	  if (sexo=='m' && estado=="soltero") {
		  acumEdadHSolteros= acumEdadHSolteros + edad;
		  contHSolteros++;
		  
	  }
  

		
		
			
			
			
			
			seguir= prompt("Quiere cargar otro pasajero? s/n");

		} while (Seguir== 's');


        document.write("A) la persona con mas temperatura se lla " + nombreMaxTemp +" y tiene " + maxTemp + " grados <br> ");
		document.write("B)mayores de edad viudos: " + contJovatosViudos + "<br> " );
		document.write("C) Hombres felices: " + contHombresFelices + "<br> ");
document.write("D) Viejos con fiebre: " + contJovatosFiebres + "<br>" );
if (contHSolteros==0) {
	document.write("D) no hay pasajeros hombres y solteros <brZ");
	
	
}
else{
	promedio= acumEdadHSolteros / contHSolteros;
	document.write("D) Promedio de hombres: " + promedio + "<br> ");
}







	}
