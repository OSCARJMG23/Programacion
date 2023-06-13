#Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.
print("Hola Mundo")
#Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.
mensaje = "Hola"
print(mensaje)
#Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca muestre por pantalla la cadena 
# ¡Hola <nombre>!, donde <nombre> es el nombre que el usuario haya introducido.
nombre = input("Ingrese su nombre: ")
print("Hola " + nombre)
#Escribir un programa que muestre por pantalla el resultado de la siguiente operación aritmética (3+2)/(2*5)x2
print(((3+2)/(2*5))**2)
#Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla la paga 
# que le corresponde.
horas = float(input("Ingrese el numero de horas que ha trabajado: "))
chora = float(input("Igrese cuanto cobra por hora: "))
pt = horas * chora
print("Su pago total es:",pt)
#Escribir un programa que lea un entero positivo, n, introducido por el usuario y después muestre en pantalla la suma de todos los enteros desde 1 hasta n. 
# La suma de los primeros enteros positivos puede ser calculada de la siguiente forma:
n = int(input("Ingrese un numero entero: "))
suma = n * (n+1) / 2
print("La suma de los primeros numeros enteros desde 1 hasta " + str(n) + " es " + str(suma))
#Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, 
# y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.
peso = input("Ingrese su peso en (kg): ")
altura = input("Ingrese su altura en (m): ")
imc = round(float(peso)/float(altura)**2,2)
print("Su indice de masa corporal es: " + str(imc))
#Escribir un programa que pida al usuario dos números enteros y muestre por pantalla la <n> entre <m> da un cociente <c> y un resto <r> donde <n> y <m> 
#son los números introducidos por el usuario, y <c> y <r> son el cociente y el resto de la división entera respectivamente.
n1 = input("Ingrese un numero: ")
n2 = input("Ingrese otro numero: ")
print(n1 + " entre " + n2 )