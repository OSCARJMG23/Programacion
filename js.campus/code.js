//1.
//a. Declarar variables llamadas 'continente', 'país',
//'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
//valores de cantidad de habitantes, de acuerdo con su contexto
//real en su propio país.
//b. Registre sus valores en la consola.'

const nameContinente = 'Asiatico ';
let continente = 2000000;
const namePais = 'China';
let pais = 250000;
const nameDepartamento = 'Pekin';
let departamento = 2600000;
const nameCiudad = 'Torichi';
let ciudad = 1580000;
const nameBarrio = 'Nakamoto';
let barrio = 250000;
const nameDireccion = 'Av 2 Trv 85';
let direccion = 150;

console.log(continente,' ',pais,' ',departamento,' ',ciudad,' ',barrio,' ',direccion,' ')
document.write(continente,' ',pais,' ',departamento,' ',ciudad,' ',barrio,' ',direccion,' ');

/* 2.
a. Declare una variable llamada 'esTercerMundista' y
establezca su valor de acuerdo con su país. La variable debe
contener un valor booleano. También declarar una variable
'idioma', pero no le asigne ningún valor todavía.
b. Registrar los valores de 'esTercerMundista',
'continente', 'país' e 'idioma' */

let esTercerMundista = false;
let idioma = undefined;

console.log(esTercerMundista,' ',nameContinente,' ',namePais,' ',idioma,' ')
/* console.write(esTercerMundista,' ',nameContinente,' ',namePais,' ',idioma,' ') */

/* 
3.
a. Establezca el valor de 'idioma' en el idioma que se
habla donde vive.
b. Piense en qué variables deberían ser variables
constantes (¿qué valores nunca cambian y cuáles podrían
cambiar?). Luego, cambia estas variables a const.
c. observe lo que sucede. */

idioma = 'Mandarin';
console.log(idioma)

/* 
4.
a. Si su país se dividiera por la mitad, y cada mitad contendría la
mitad de la población, Entonces, ¿cuántas personas vivirían en cada
mitad?
b. Aumente la población de su país en 1M y registre el resultado
en la consola
c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más
gente que ¿Finlandia?
d. La población promedio de un país es de 33 millones de
personas. ¿Tu país tiene menos gente que el país promedio?
e. Basado en las variables que creó, cree una nueva variable
'descripción' que contiene una cadena con este formato: 'Colombia
está en América, y Bucaramanga que está en el departamento de
Santander tiene un barrio llamado el prado y sus 3000 personas
hablan inglés. */

pais = pais/2
console.log(pais)

pais += 1000000;
console.log(pais)

let finlandia = 6000000;
console.log(pais > finlandia)

let promedioPaises = 33000000;
console.log(pais < promedioPaises)

let descripcion = `${namePais} esta en ${pais}, y ${nameCiudad} esta en el departamento de ${nameDepartamento}, tiene un barrio llamado ${nameBarrio} y sus 2 millones de persona hablan ${idioma}`
console.log(descripcion)


// 5. Repita el ejercicio usando Template strings
    //resuelto en la linea anterior

    /* Métodos en cadenas
Cree 10 variables de tipo cadena donde almacene valores string en
Ingles y aplique cada una de los siguientes métodos de cadena
1. length
2. includes()
3. back ticks o templatre strings
4. trimStart()
5. trimEnd()
6. replace
7. slice
8. split
9. ToUpperCase
10. ToLowerCase */

let v1 = 'word'
let v2 = 'world'
let v3 = 'wordpress'
let v4 = 'book'
let v5 = 'library'
let v6 = 'rule'
let v7 = 'scisors'
let v8 = 'pencil'
let v9 = 'notebook'
let v10 = 'folder'

console.log(v1.length)
console.log(v2.includes('o'))
console.log(`${v3} es una palabra diferente ha ${v2}`)
console.log(v4.trimStart())
console.log(v5.trimEnd())
console.log(v6.replace)
console.log(v7.slice)
console.log(v8.split)
console.log(v9.toUpperCase)
console.log(v10.toLowerCase)

