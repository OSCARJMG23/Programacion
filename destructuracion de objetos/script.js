const superHeroe = {
    nombre: 'Capitan America',
    edad: 30,
    peso: 100,
    empresa: 'Marvel'
}

const {nombre,edad,peso,empresa} = superHeroe
// La destructuración no se realiza de manera secuencial ordenada, sino por nombre de key
console.log(`${nombre} tiene ${edad} años, pesa ${peso} Kg y es de ${empresa}`)

// No es necesario destructurar el objeto en su totalidad, puedes destructurar solo los valores que necesites

// Si deseamos personalizar el nombre de la key, tenemos que usar una sintaxis como la siguiente
// const {nombre,edad,peso,empresa:marca} = superHeroe

// La destructuración acepta valores por defecto usando la siguiente sintaxis
// const {nombre = 'Señor Misterioso',edad,peso,empresa:marca} = superHeroe

// En caso de que en el objeto existiese la propiedad empresa el valor por defecto no se toma en cuenta
// const {nombre,edad,peso,empresa:marca = 'Independiente'} = superHeroe


// El operador REST (...) puede ser usado de la siguiente manera
// const {nombre, ...parametros} = superHeroe
//console.log(nommbre, parametros)
// salida: capitan america Object{edad:30,peso:100,empresa:'marvel'}