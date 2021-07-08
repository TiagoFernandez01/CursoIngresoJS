/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let Largodelterreno 
    let anchodelterreno 
    let radiodelterreno
    Largodelterreno = parseInt(document.getElementById("txtIdLargo").value);
    anchodelterreno = parseInt(document.getElementById("txtIdAncho").value);
    radiodelterreno = parseInt(document.getElementById("txtIdRadio").value);

    suma = Largodelterreno + anchodelterreno;
    alert(`Se deben usar ${suma} metros de alambre`);


}
function Circulo () 
{
    let Largodelterreno 
    let anchodelterreno 
    let radiodelterreno
    Largodelterreno = parseInt(document.getElementById("txtIdLargo").value);
    anchodelterreno = parseInt(document.getElementById("txtIdAncho").value);
    radiodelterreno = parseInt(document.getElementById("txtIdRadio").value);

    radio = radiodelterreno * 2;
    alert(`Se deben usar ${radio} metros de alambre`);

	
}
function Materiales () 
{
    let Largodelterreno 
    let anchodelterreno 
    let radiodelterreno
    Largodelterreno = parseInt(document.getElementById("txtIdLargo").value);
    anchodelterreno = parseInt(document.getElementById("txtIdAncho").value);
    radiodelterreno = parseInt(document.getElementById("txtIdRadio").value);
    


	
}