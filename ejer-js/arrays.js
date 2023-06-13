//declaramos el array y le asignamos los valores
var clasificacion = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio "];
 
//imprimimos cada uno de los valores del array (comienza por cero!)
document.write("Clasificación actual" + "<br>");           //"<br>" nos hace salto de linea
document.write("1. " + clasificacion[0] + "<br>");   
document.write("2. " + clasificacion[1] + "<br>");
document.write("3. " + clasificacion[2] + "<br>");
document.write("4. " + clasificacion[3] + "<br>");
document.write("5. " + clasificacion[4] + "<br>");
document.write("6. " + clasificacion[5] + "<br>");
 
//introducimos los cambios de clasificación
clasificacion[2] = "Celia";
clasificacion[3] = "Raúl";
clasificacion.pop();
clasificacion.splice(1, 0, "Roberto", "Amaya");
clasificacion.unshift("Marta");
 
//volvemos a imprimir la clasificación
document.write("<br>"); //separamos con una linea en blanco la 2ª clasificación de la 1ª
document.write("Clasificación actualizada" + "<br>");
document.write("1. " + clasificacion[0] + "<br>"); 
document.write("2. " + clasificacion[1] + "<br>");
document.write("3. " + clasificacion[2] + "<br>");
document.write("4. " + clasificacion[3] + "<br>");
document.write("5. " + clasificacion[4] + "<br>");
document.write("6. " + clasificacion[5] + "<br>");
document.write("7. " + clasificacion[6] + "<br>");
document.write("8. " + clasificacion[7] + "<br>");