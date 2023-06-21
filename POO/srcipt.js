/* 
//Este seria el objeto como tal 
const Comida = {
    id: 1,
    nombre: 'Manzana',
    color: 'rojo',
};
//se accede a la propiedad
console.log(Comida.nombre) */

//se crea la clase para no tener que duplicar el codigo
//La primera letra de la clase siempre va en mayuscula

class Comida{
    constructor(id, nombre, color){
        this.id = id
        this.nombre = nombre
        this.color = color
    }
    //declarar el metodo, no se tiene que poner la palabra function
    nombrar(){
        return `${this.nombre} de color ${this.color}`
    }
}
//Para heredar se usa la "palabra" extends, ejemplo galleta es una subclase de comida
class Galleta extends Comida{
    constructor(id,nombre,color,sabor){
        //una galleta tiene las mismas propiedades de comida +1 añadida
        super(id, nombre, color);
        this.sabor = sabor;
    }
    //va a tener un metodo

    nombrarGalleta(){
        return `Galletas ${this.nombre} sabor ${this.sabor}`
    }
}
//instanciar un nuevo objeto de la clase comida
const manzana = new Comida(1,'manzana', 'rojo')
//con la misma clase se puede crear un nuevo elemento
const pera = new Comida(2,'pera','verde')

const oreo = new Galleta(3, 'oreo', 'negro', 'chocolate')
const chokies = new Galleta(3, 'chokies', 'cafe', 'vainilla')

console.log(oreo.nombrarGalleta())
console.log(chokies.nombrarGalleta())