var numero = prompt("Ingresa un número: ");

var raizCuadrada = Math.sqrt(numero);

alert("La raiz cuadrada del número " 
	+ numero + " es: " 
	+ raizCuadrada);

var deNuevo = prompt("Deseas calcular la raíz de otro número: ");

while (deNuevo === "s" || deNuevo === "S") {
	var numero = prompt("Ingresa un número: ");

	var raizCuadrada = Math.sqrt(numero);

	alert("La raiz cuadrada del número " 
		+ numero + " es: " 
		+ raizCuadrada);
}



