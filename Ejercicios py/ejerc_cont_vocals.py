lista_vocals=[]
n = int(input("Cuantas letras va a ingresar: "))
cantidad_a= 0
cantidad_e= 0
cantidad_i= 0
cantidad_o= 0
cantidad_u= 0

for i in range(n):
    letras = input("Ingrese la letra: ")
    lista_vocals.append(letras)
print("Lista letras: ",lista_vocals)

for x in lista_vocals:
    if x == "a" or x == "A":
        cantidad_a +=1
    elif x == "e" or x == "E":
        cantidad_e +=1
    elif x == "i" or x == "I":
        cantidad_i +=1
    elif x == "o" or x == "O":
        cantidad_o +=1
    elif x == "u" or x == "U":
        cantidad_u +=1

print("Cantidad de a: ",cantidad_a)
print("Cantidad de e: ",cantidad_e)
print("Cantidad de i: ",cantidad_i)
print("Cantidad de o: ",cantidad_o)
print("Cantidad de u: ",cantidad_u)
