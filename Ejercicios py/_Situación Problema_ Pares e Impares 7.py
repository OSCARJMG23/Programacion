'''Situación Problema: Pares e Impares 7

Se desea realizar un programa en el cual se ingresen números enteros, los cuales
se deben almacenar en una lista. Se debe ingresar números hasta que el número
ingresado sea 99999. Una vez creada la lista, se desea conocer cuales y cuántos
son pares e impares.
'''
        
#Programa Nombre_programa
#Autor: Nombre_autor
#Fecha: 08/03/2023

lista=[]
numero=int(input("Ingrese numero entero: "))
#la variable suma sera la que guardara la cantidad 
#de numeros pares
suma=0
        
while numero!=99999:
    lista.append(numero)
    if numero%2==0:
        suma=suma+1
    numero=int(input("Ingrese numero entero: "))

impares=len(lista)-suma
print("El numero de numeros pares es: ",suma)
print("El numero de numeros impares es: ",impares)
        
    