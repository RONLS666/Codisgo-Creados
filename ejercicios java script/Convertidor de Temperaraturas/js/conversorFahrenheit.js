var grados = parseInt(prompt("ingrese la cantidad de grados "));
var opcion = prompt("Elija opcion f = Fahrenheit, k = kelvin, c = Celsius");;



switch(opcion){
case 'f':

var fah = ((9/5) * grados + 32);

alert("la cantidad en grados Fahrenheit es:" + fah);

document.write("Cantidad de grados Celsius ingresados: " + grados);
document.write(" la cantidad en grados Fahrenheit es: " + fah);
break;

case 'k':

kel = grados + 273;
alert("la cantidad de grados kelvin es:  " + kel);

document.write("Cantidad de grados Celsius ingresados: " + grados);
document.write(" la cantidad en grados Fahrenheit es: " + kel);
break;

case 'c':
var opcion2 = prompt("Elija opcion a = Fahrenheit a Celsius, b = kelvin a Celsius");

switch(opcion2){
	case 'a':
	var cels = (grados - 32 / (9/5));

	alert("la cantidad en grados Celsius es:" + cels);
	document.write("Cantidad de grados Fahrenheit ingresados: " + grados);
	document.write(" la cantidad en grados Celsius es: " + cels);
	break;

	case 'b':

	kel = grados - 273;
	alert("la cantidad de grados kelvin es:  " + kel);

	document.write("Cantidad de grados Celsius ingresados: " + grados);
	document.write(" la cantidad en grados Fahrenheit es: " + kel);
	break;
}

}

