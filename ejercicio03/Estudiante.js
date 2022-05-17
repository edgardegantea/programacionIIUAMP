class Estudiante {
  constructor (matricula, nombre, apellidos, grupo, asignatura) {
    this._matricula = matricula;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._grupo = grupo;
    this._asignatura = asignatura;
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(value) {
    this._matricula = value;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get apellidos() {
    return this._apellidos;
  }

  set apellidos(value) {
    this._apellidos = value;
  }

  get grupo() {
    return this._grupo;
  }

  set grupo(value) {
    this._grupo = value;
  }

  get asignatura() {
    return this._asignatura;
  }

  set asignatura(value) {
    this._asignatura = asignatura;
  }

  get nombreCompleto() {
    return `${this.nombre} ${this.apellidos}`;
  }
}
