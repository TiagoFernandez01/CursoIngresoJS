/* 1 declaro variables (tipo, precio, cantidada,marca, fabricante, precioMaxJab, cantJabCaro,fabricanteJabCaro, contJ,contA,contB, acumJ,acumA,acumB, promedio, maxUnidad )
2*hacer bucle que se repita 5 veces (for) porque se cunatas veces se repite 
3* Valido tipo precio cantidad marca, fabricante
4*







 














*/
function mostrar() {
	let tipo,
		precio,
		cantidad,
		marca,
		fabricante,
		precioMaxJab,
		cantJabCaro=0,
		fabricanteJabCaro,
		flagB = 1,
		contJ = 0,
		contA = 0,
		contB = 0,
		acumJ = 0,
		acumA = 0,
		acumB = 0,
		promedio,
		maxUnidad;

	for (let i = 0; i < 5; i++) {
		tipo = prompt("Ingrese tipo (barbijo, alcohol, jabon").toLowerCase();
		while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {
			tipo = prompt("Error. Ingrese tipo (barbijo, alcohol, jabon").toLowerCase();

		}
		precio = parseInt(prompt("ingrese precio(100-300):"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseFloat(prompt("precio invalido. Reintente(100-300):"));
		}

		cantidad = parseInt(prompt("Ingrese cantidada (1-1000)"));
		while (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
			cantidad = parseInt(prompt("Error.Ingrese cantidada (1-1000)"));

		}

		marca = prompt("ingrese marca:");
		while (marca.length == 0) {
			marca = prompt("Error.Ingrese marca:");

		}
		fabricante = prompt("ingrese fabricante:");
		while (fabricante.length == 0) {
			fabricante = prompt("Erro.Ingrese fabricante:");


		}
	}

	if (tipo == "jabon") {
		acumJ = acumJ + cantidad;
		contJ++;
		if (flagB || precio > precioMaxJab) {
			precioMaxJab = precio;
			fabricanteJabCaro= fabricante;
			cantJabCaro = cantidad;
			flagB = 0;

		}

	}
	else if (tipo == "barbijo") {
		acumB = acumB + cantidad
		contB++;
	}
	else {
		acumA = acumA + cantidad;
		contA++;


	}

	if (acumJ > acumA && acumJ > acumB) {
		maxUnidad = "jabon";
		promedio = acumJ / contJ;

	} else if (acumA >= acumJ && acumA > acumB) {
		maxUnidad = "alcohol";
		promedio = acumA / contA;

	}
	else {
		maxUnidad = "barbijo";
		promedio = acumB / contB;
	}

	document.write(`el precio mas caro de llos jabones fue ${precioMaxJab} del fabicante ${fabricanteJabCaro} cant: ${cantJabCaro} <br> `);
	document.write("el tipo con mas unidades en total " + maxUnidad + " promedio " + promedio + "<br>");
	document.write("Se compraron " + acumB + "unidades de barbijo " + "<br>");












}







