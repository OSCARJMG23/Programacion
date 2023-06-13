#Determinar en los meses de abril, mayo y junio el promedio de lluvias del mes, teniendo en cuenta los centímetros de lluvia caídos por día(los valores de los cms de lluvia por día 
#pueden ser generados por medio de un número aleatorio entre 0 y 11) y determinar cua´l fue el mes más lluvioso
from random  import randint
print("\n\n\n")
abr = []
may = []
jun = []
promAbr = 0
promMay = 0
promJun = 0
for i in range(31):
    if i <30:
        abr.append(randint(0,11))
        promAbr += abr[i]
        may.append(randint(0,11))
        promMay += may[i]
        jun.append(randint(0,11))
        promJun += jun[i]
    else:
        may.append(randint(0,11))
        promMay += may[i]

promAbr = round(promAbr/30, 2)
promMay = round(promMay/31, 2)
promJun = round(promJun/30, 2)

print("Abr\tMay\tJun")
print(promAbr, "\t", promMay, "\t", promJun, "\t")
if  promAbr > promMay and promAbr > promJun:
    print("El mes con mas lluvias fue abril con ", promAbr)
elif promMay > promAbr and promMay > promJun:
    print("El mes con mas lluvia fue mayo con", promMay)
else:
    print("El mes con mas lluvias fue Jun con ", promJun)
print("\n\n\n")
