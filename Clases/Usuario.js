/**
 * 
 * >> Consigna:

1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:

nombre: String

apellido: String

Libros: Object[]

mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

3) Hacer que Usuario cuente con los siguientes métodos:

getFullName(): String. Retorna el completo del usuario. Utilizar template strings

addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.

countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario. addBook (String, String): void. Recibe un string 'nombre' y un string 'autor' y : String } al array de libros.

debe agregar un objeto: { nombre: String, autor getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

 * 
 */

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }   

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }   

    addBook(name, author) {
        this.libros.push({ nombre: name, autor: author });
    }
}

const usuario = new Usuario('Pedro', 'Perez', [{ nombre: 'El principito', autor: 'Antoine de Saint-Exupéry' }], ['perro', 'gato']);

usuario.addBook('El señor de los anillos', 'J.R.R. Tolkien');

console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());