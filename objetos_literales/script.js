let perro = {
    nombre: 'scott',
    color: 'cafe',
    edad: 5,
    macho: true,
    ladrar: function(){
        return `${this.nombre} puede ladrar`
    }
}
console.log(perro.nombre)
console.log(perro.edad)
console.log(perro['nombre'])
console.log(perro['edad'])
perro.tamaño = 'xxl'
console.log(perro.ladrar())
console.log(perro)
perro.edad = 8
console.log(perro)
delete perro.color
console.log(perro)
console.log(perro.macho)