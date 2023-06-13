'''
1. Elabore un Programa Python que lea la ruta y nombre de un archivo y muestre por pantalla la línea M del archivo.
La línea a mostrar también debe ser un dato ingresado por el usuario del programa.
Si el archivo no existe debe mostrar un mensaje por pantalla informando de ello.

'''

archivo = './eltigre.txt'
texto = open(archivo,'r')
linea = texto.readlines()
cantidad_lin=len(linea)
texto.close()

m=int(input("Ingrese la linea que quiere conocer. "))
if m < cantidad_lin:
    print(linea[m-1])
else:
    print("La linea no existe")
