/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
-----------------------------------------------------------
Estrategia de resolucion:
1 Declaracion de variables
cosas que le pedimos al usuraio---> tipo /cant /precio/ seguir 
descuento / importeBruto / importeNeto/ acumBolsas/ mayorPrecio/ mayorTipo
acumuladorBC/acumuladorBA/acumuladorBCal tipoMasBolsas/ canMaxtBolsas

2-genero un bucle del tipo mientras el ususario quiera (do-while)

3- dentro del bucle (cosas que se repiten por cada porducto comprado)

3.1 pido y valido el tipo
3.2 pido y valido la cantidad ( numero positivo)
3.3 pido y valido el precio ( numero positivo)
3.4 acumular la cantidad de bolsas
3.5 acumular el importeBruto 

3.6 me fijo el tipo de porducto y acumulo la cantidad de bolsas segun corresponda
3.7 para el primer poducto guardo tipo y precio ( es mi unico producto por ende es el mas caro)
para los siguietnes porudctos voy a compara sus precios con el producto caro y si es mas caro actualizo precio y tipo
---------------------------------------------------------------------------
despues del bucle
me fijoq que descuento corresponde ( de acuerdo al cumulador de bolsas)
calculo el descuento
calculo el importe neto
D)me fijo cual es el mayor acumulador de bolsas para informar el tipo de porducto que se compraron mas bolsas

mostrar los resultados








*/












function mostrar() {

  let tipo,
    cantidad,
    precio,
    seguir,
    descuento,
    importeBruto = 0,
    importe,
    importeNeto,
    acumBolsas = 0,
    mayorPrecio,
    mayorTipo,
    flag = 1,
    acumuBC = 0,
    acumuBA = 0,
    acumuBCal = 0,
    tipoMasBolsas,
    cantMaxBolsas = 0;

  do {
    tipo = prompt("Ingrese el tipo de bolsa (arena/cal/cemento").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Error.Ingrese un dato valido. arena/cal/cemento").toLowerCase();

    }
    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while (isNaN(cantidad) || cantidad < 1) {
      cantidad = parseInt(prompt("Error. Ingrese un numero valido"));

    }
    precio = parseInt(prompt("Ingrese el precio"));
    while (isNaN(precio) || precio < 1) {
      precio = parseInt(prompt("Error. Ingrese un numero valido"));

    }

    acumBolsas = acumBolsas + cantidad;

    importe = precio * cantidad;
    importeBruto = importeBruto + importe;



    if (tipo == "arena") {
      acumuBA = acumuBA + cantidad



    } else if (tipo == "cemento") {
      acumuBC = acumuBC + cantidad

    }
    else {
      acumuBCal = acumuBCal + cantidad

    }
    if (flag || precio > mayorPrecio) {
      mayorPrecio = precio;
      mayorTipo = tipo;
      flag = 0;

    }

     
      
   
    








    seguir = prompt("Quiere seguir ingresando datos? (s/n)");
  } while (seguir == 's');

  if (acumBolsas >30 ) {
    descuento= importeBruto * .55;
    
  }else if (acumBolsas > 10) {
    descuento= importeBruto * .15;
    
  }
  else{

    descuento= 0
  }

  importeNeto= importeBruto - descuento;

  if (acumuBA > acumuBC && acumuBA > acumuBCal) {
    tipoMasBolsas="arena";
    cantMaxBolsas=acumuBA;
  }
  else if ( acumuBC >= acumuBA && acumuBC > acumuBCal) {
    tipoMasBolsas="cemento"
    cantMaxBolsas=acumuBC
  }
  else{
    tipoMasBolsas="cal"
    cantMaxBolsas=acumuBCal;
  }

  document.write("A) el importe total a pagar es " + importeBruto + "<br>");
  if (descuento > 0){
  document.write("b) el importe total a pagar con descuetno es " + importeNeto + "<br>");
  }
  document.write("C) Tipo con mas cantidad de bolsas " + tipoMasBolsas + " con " + cantMaxBolsas + "bolsas<br>");
document.write("D) Tipo mas caro " + mayorTipo + "precio: " + mayorPrecio + "<br>");





}
