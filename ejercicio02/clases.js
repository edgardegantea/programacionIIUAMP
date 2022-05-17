// Clase creada en JavaScript
function Persona(nombre, apellidos) {
  // Atributos de la clase Persona()
  this.nombre = nombre;
  this.apellidos = apellidos;
}

// Crear un método para la clase Persona()
Persona.prototype.Saludar = function() {
  alert("Hola, soy " + this.nombre);
}

// Método para la imprimir nombre
Persona.prototype.ImprimirNombre = function () {
  var nombre = prompt("Ingresa tu nombre: ");
  var apellidos = prompt("Ingresa tus apellidos: ");
  // Objetos de la clase Persona
  persona1 = new Persona(nombre, apellidos);
  alert('Persona: ' + persona1.nombre + " " + persona1.apellidos);
};

persona1.ImprimirNombre();
persona1.Saludar();
