import json
with open('lista.json','r') as archivo:
    lista=json.load(archivo)
archivo.close()
print('Lista: ',lista)
for i in range(len(lista)):
    print(lista[i])