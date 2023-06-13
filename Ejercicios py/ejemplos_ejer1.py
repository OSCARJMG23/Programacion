'''Situación Problema: Contar palabras YA

Dada una lista con nombres completos de personas, realizar un programa que
genere una segunda con la cantidad de palabras de cada uno de los nombres. La
lista de nombres debe llenarse a través de nombres que se ingresan por teclado,
hasta que el nombre ingresado sea “FIN”
Se debe imprimir la lista de nombres y la lista con la cantidad de palabras de cada
nombre. 
'''
#Programa Nombre_programa
#Autor: Nombre_autor
#Fecha: 09/03/2023
lista=[]
cantidad=[]
nombre=input("Ingresa nombre: ")

while nombre!="FIN":
    lista.append(nombre)
    #la parte nombre.split(" ") es para crear una lista con elementos 
    #los cuales estan en el string separados con espacio " " 
    #cantidad de palabras del nombre completo
    x=len(nombre.split(" "))
    #se agrega a otra lista la cantidad de palabras
    cantidad.append(x)
    nombre=input("Ingresa nombre completo: ")

print("La lista generada fue: ",lista)
print("Lista con cantidad de palbras es: ",cantidad)

#Imprime junto a cada nombre la cantidad de palabras que tiene el nombre
print("------------")
for i in range(len(lista)):
    print("Para el nombre ",lista[i], " la cantidad de palabras es: ",cantidad[i])
        
    