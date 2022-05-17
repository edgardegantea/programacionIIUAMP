// Clase creada en JavaScript
function Persona(nombre, apellidos) {
  // Atributos de la clase Persona()
  this.nombre = nombre;
  this.apellidos = apellidos;
}

var nombre = prompt("Ingresa tu nombre: ");
var apellidos = prompt("Ingresa tus apellidos: ");
persona1 = new Persona(nombre, apellidos);

// Crear un método para la clase Persona()
Persona.prototype.Saludar = function() {
  alert("Hola, soy " + this.nombre);
}

Persona.prototype.ImprimirNombre = function () {
  alert('Persona: ' + persona1.nombre + " " + persona1.apellidos);
};

persona1.ImprimirNombre();
persona1.Saludar();
