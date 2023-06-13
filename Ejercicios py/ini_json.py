import json
#ESTRUCTURA DE DATOS (LISTA)
lista =[10,20,30,40,60]

#FASE APERTURA Y CREACION
with open('lista.json','w') as archivo:
    json.dump(lista,archivo)

#CIERRE
archivo.close()