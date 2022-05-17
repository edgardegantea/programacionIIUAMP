// Clase creada en JavaScript
function Persona(nombre, apellidos) {
  // Atributos de la clase Persona()
  this.nombre = nombre;
  this.apellidos = apellidos;
  // alert("Objeto " + nombre + " " + apellidos);
}

// Crear un método para la clase Persona()
Persona.prototype.Saludar = function() {
  alert("Hola, soy " + this.nombre);
}

var nombre = prompt("Ingresa tu nombre: ");
var apellidos = prompt("Ingresa tus apellidos: ");

// Objetos de la clase Persona
persona1 = new Persona(nombre, apellidos);

// Invocar los atributos de la clase Persona() por medio del objeto
// Objeto: persona1
alert("Objeto 1: " + persona1.nombre + " " + persona1.apellidos);
persona1.Saludar();
