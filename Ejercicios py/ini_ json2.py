import json
diccionario = {'1':'lapiz','2':'borrar','3':'cuaderno','4':'lapicero'}
with open('diccionario.json','w') as archivo:
    json.dump(diccionario,archivo)
archivo.close()

