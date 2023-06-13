#Elabore un algoritmo que lea varios numeros enteros y calcule su sumatoria.
#el proceso termina cuando el numero leido sea CERO.Resolver en seudocodigo y
#con DF
s = 0
n = int(input("Ingrese un numero: "))
while n != 0:
    s+=n
    n = int(input("Ingrese un numero: "))    
print(s)