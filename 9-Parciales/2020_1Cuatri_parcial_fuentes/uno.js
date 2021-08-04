/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 
----------------------------------------------------------------------------------------------
estrategia de resolucion
1-declarar variables (tipo/cantidad/precio/marca/fabricante ) esto se lo pedimos al usuario
a) precioMinAl/ contAlBarato / FabAlbarato/ flagA
b) contB / contadorA / ContadorJ / maxUnidad / acumB/acumA/acumJ/promedio
c) (acumJ) ya lo tuve en cuenta en el punto b

2- generar un bucle que se repita 5 veces (for)porque se las veces que se debe repetir
2.1- cosas que se tienen que hacer 5 veces ( van dentro del bucle)
2.1.1- pido tipo y valido
2.1.2- pido precio y valido
2.1.3- pido cantidad y valido
2.1.4- pido marca y valido
2.1.5- pido fabricante y valido
----------------------------------------
a) me fijo si el producto es de tipo alchol y si es asi la primer vez que ingresa alcohol
guardo el precio en precio barato y las siguientes veces que ingrese un alcohol
lo comparo con el precio del alcohol barato y si es mas barato lo actualizo

b) me fijo de que tipo es el porudcto y actualizo acumulador y contador de ese tipo

c) si es de tipo jabon acumulo la cantidad (ya lo hice en le punto B)
------------------------------------------------------
3.1 cosas que hago una sola vez despues del for
3.1.1 para el punto B me tengo que fijar cual es el mayor acumulador 
y sacar el pormedio para ese tipo 
3.2 muestro los resultados
*/




function mostrar() {
	let tipo,
		cantidad,
		precio,
		marca,
		fabricante,
	/*A*/	precioMinAl,
		cantAlBarato,
		FabAlbarato,
		flagA = 1,
	/*B*/  contB = 0,
		contadorA = 0,
		ContadorJ = 0,
		acumB = 0,
		acumA = 0,
		acumJ = 0,
		maxUnidad,
		promedio;

	for (let i = 0; i < 5; i++) {

		tipo = prompt("Ingrese el tipo de porducto (barbijo/alcohol/jabon):").toLowerCase();
		while (tipo != "alcohol" && tipo != "barbijo" && tipo != "jabon") {
			tipo = prompt("tipo invalido.Reintente").toLowerCase();
		}
		precio = parseInt(prompt("ingrese precio(100-300):"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseFloat(prompt("precio invalido. Reintente(100-300):"));


		}
		cantidad = parseInt(prompt("ingrese la cantidad (1-1000):"));
		while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
			cantidad = parseFloat(prompt("Cantidad invalida. Reintente(1-1000):"));
		}

		marca = prompt("ingrese marca:");
		while (marca.length == 0) {
			marca = prompt("Error.Ingrese marca:");


		}
		fabricante = prompt("ingrese fabricante:");
		while (fabricante.length == 0) {
			fabricante = prompt("Erro.Ingrese fabricante:");


		}

		if (tipo == "barbijo") {
			acumB = acumB + cantidad;
			contB++;

		}
		else if (tipo == "alcohol") {
			acumA = acumA + cantidad
			contadorA++;
			if (flagA || precio < precioMinAl) {
				precioMinAl = precio;
				FabAlbarato = fabricante;
				cantAlBarato = cantidad;
				flagA = 0;


			}


		} else {
			acumJ = acumJ + cantidad;
			ContadorJ++;
		}



	}//fin del for

	if (acumJ > acumA && acumJ > acumB) {
		maxUnidad = "jabon";
		promedio = acumJ / ContadorJ;

	}
	else if (acumA >= acumJ && acumA > acumB) {
		maxUnidad = "alcohol";
		promedio = acumA / contadorA;
	}
	else {
		maxUnidad = "barbijos";
		promedio = acumB / contB;

		
	}


	document.write("A) precio alcohol barato " + precioMinAl + " fabricante: " + FabAlbarato + " cant: " + cantAlBarato + "<br>");
	document.write(" B)tipo con mas unidades " + maxUnidad + " promedio: " + promedio + "<br>");
	document.write("C) cantidad de jabones " + acumJ + "<br>")







}