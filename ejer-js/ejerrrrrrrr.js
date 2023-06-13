/* Finalizamos añadiendo probabilidades al ejercicio anterior de la quiniela

Realiza el script anterior pero con la probabilidad de que salga el 1 sea del 60%, la de la X del 30% y la del 2 del 10% */
var res;
var i;

for (i = 1; i <= 14; i++){
    num = Math.floor((Math.random()*100) +1);
    if(num <= 60){
        document.write('Resultado ' + i + ': 1 <br>')
    }
    if(num <= 90){
        document.write('Resultado ' + i + ': X <br>')
    }
    else{
        document.write('Resultado ' + i + ': 2 <br>')
    }
}