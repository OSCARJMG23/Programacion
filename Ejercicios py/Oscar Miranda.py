#Funcion circulos
def circulo(r):
    return round(3.14 * (r**2),2)
def triangulo(h,b):
    return round(((h*b)/2),2)
def cuadrado(l):
    return round(l * l)

#Funcion numeros primos
def np(n):
    for i in range(2,int(n/2)):
        if (n%i) == 0:
            return print("no es primo")
    return print("es primo")

#Funcion factorial 
def factorial(n):
    nfactorial = 1
    for i in range(1,n + 1):
        nfactorial = nfactorial * i
        print(nfactorial)
    return print("El factorial del numero ingresado es: ",nfactorial)

#Funcion Conversion
def dolar(n):
    return print("Son",n * 0.00021, "USD")
def jpy(n):
    return print("Son",n * 0.028, "JPY")
def gbp(n):
    return print("Son",n * 0.00017, "GBP")

#Funcion Cuadratica
def cuadratica(a,b,c):
    raiz = b**2 - (4*a*c)
    if raiz >= 0:
        x1 = round((-b + (raiz)**0.5)/(2*a),2)
        x2 = round((-b - (raiz)**0.5)/(2*a),2)
    else:
            return print("Las raices de la ecuacion dan negativas")
    return print("Las raices de la funcion son: ", "x1 = ", x1, "x2= ", x2 )


otro = "s"

while otro.lower() == "s":

    menup = int(input("Que quiere hacer:\n1.Calcular area de las figuras\n2.Saber si el numero es primo\n3.Calcular el factorial de un numero\n4.Usar el convertidor de pesos\n5.Ecuacion cuadratica\n"))
    if menup == 1:
        figura = float(input("Ingrese la figura que quiere calcular:\n1.Circulo\n2.Triangulo\n3.Cuadrado\n"))
        if figura == 1:
            radio = float(input("Ingrese el radio de su circulo: "))
            print("El area se su circulo es: ", (circulo(radio)))
        elif figura == 2:
            altura = float(input("Ingrese la altura de su triangulo: "))
            base = float(input("Ingrese la base de su triangulo: "))
            print("El area de su triangulo es: ", (triangulo(altura,base)))
        elif figura == 3:
            lado = float(input("Ingrese el lado de su cuadrado: "))
            print("El area de su cuadrado es: ", (cuadrado(lado)))
            otro = input("Desea relizar mas calculos si (s) no (n)")
    elif menup == 2:
        numerop = int(input("Ingrese el numero que quiere saber si es primo: "))
        (np(numerop))
        otro = input("Desea relizar mas calculos si (s) no (n)")
    elif menup == 3:
        numerof = int(input("Ingrese un numero para calcular el factorial: "))
        factorial(numerof)
        otro = input("Desea relizar mas calculos si (s) no (n)")
    elif menup == 4:
        moneda = int(input("Que tipo de moneda quiere calcular:\n1.Para pesos a USD\n2.Para pesos a JPY\n3.Para pesos a libra esterlina(GBP)\n"))
        if moneda == 1:
            pesos = float(input("Ingrese la catidad de pesos que quiere convertir a USD: "))
            dolar(pesos)
        elif moneda == 2:
            pesos = float(input("Ingrese la cantidad de pesos que quiere convertir a JPY: "))
            jpy(pesos)
        elif moneda == 3:
            pesos = float(input("Ingrese la cantidad de pesos que quiere convertir a libra esterlina(GBP): "))
            gbp(pesos)
        otro = input("Desea relizar mas calculos si (s) no (n)")
    elif menup == 5:
        a = int(input("Ingrese tres valores empezando por aqui: "))
        b = int(input("Ingrese el segundo valor aqui: "))
        c = int(input("Ingrese el tercer valor aqui: "))
        cuadratica(a,b,c)
        otro = input("Desea relizar mas calculos si (s) no (n)")
    

