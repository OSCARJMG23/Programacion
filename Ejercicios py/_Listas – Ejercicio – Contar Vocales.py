'''Listas – Ejercicio – Contar Vocales

Se desea realizar un programa en el cual se ingrese un texto determinado, el cual
se debe almacenar en una lista cada una de las letras de este. Una vez creada la
lista, se desea conocer e imprimir la cantidad de “a”, la cantidad de “e”, la cantidad
de “i”, la cantidad de “o” y la cantidad de “u” que se encuentran en la lista
'''
#iniciar lista como vacias
lista_letras = []
n = int(input("Cantidad de letras: "))
cantidad_a = 0
cantidad_e = 0
cantidad_i = 0
cantidad_o = 0
cantidad_u = 0
#llenar la lista
for i in range(n):
    letra = input("Letras: ")
    lista_letras.append(letra)
print("Lista letras: ",lista_letras)
#procesar lista
for x in lista_letras:
    if x == "a" or x == "A":
        cantidad_a += 1
    elif x == "e"or x =="E":
        cantidad_e += 1
    elif x == "i" or x == "I":
        cantidad_i += 1
    elif x == "o" or x == "O":
        cantidad_o += 1
    elif x == "u" or "U":
        cantidad_u += 1

print("Cantidad de a: ",cantidad_a)
print("Cantidad de e: ",cantidad_e)
print("cantidad de i: ",cantidad_i)
print("cantidad de o: ",cantidad_o)
print("Cantidad de u : ",cantidad_u)