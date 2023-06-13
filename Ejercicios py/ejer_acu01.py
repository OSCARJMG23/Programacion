#Crea una aplicación que contenga todas las siguientes funcionalidades a las cuales se debe 
#acceder por medio de un menú:
'''
1.   Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
Pediremos qué figura queremos calcular, su área y según lo introducido pedirá los valores
necesarios para calcular el área. Crea una función por cada figura para calcular cada área,
este devolverá un número real. Muestra el resultado por pantalla
    Circulo: (radio^2)*PI
    Triangulo: (base * altura) / 2
    Cuadrado: lado * lado
    '''
print("\n\n\n")
def circulo(r):
    return round(3.14 * (r**2),2)
def triangulo(h,b):
    return round(((h*b)/2),2)
def cuadrado(l):
    return round(l * l)

otro ="s"
figura = float(input("Ingrese la figura que quiere calcular:\n1.Circulo\n2.Triangulo\n3.Cuadrado\n"))
while otro.lower() == "s":

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
    otro = input("Dese calcular el area de otra figura si (s) - no (n)")
else:
    print("Un saludo maquina")


''' 
2.  Crea una aplicación que nos pida un número por teclado y con una función se lo pasamos
por parámetro para que nos indique si es o no un número primo, debe devolver true si
es primo sino false.
Un número primo es aquel solo puede dividirse entre 1 y si mismo.
Por ejemplo: 25 no es primo, ya que x1 = round((-b + (raiz)**0.5)/(2*a),2)25 es divisible entre 5, sin embargo, 17 si es primo.'''
print("\n\n\n")
def np(n):
    for i in range(2,int(n/2)):
        if (n%i) == 0:
            return False
    return True

'''    
3.  Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo
realizara mediante una función al que le pasamos el número como parámetro. Para calcular el
multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos un 5,
realizara esta operación 5*4*3*2*1=120.
'''
def factorial(n):
    nfactorial = 1
    for i in range(1,n + 1):
        nfactorial = nfactorial * i
        print(nfactorial)
    return print("El factorial del numero ingresado es: ",nfactorial)

'''
4.  Crea una aplicación que nos convierta una cantidad de pesos introducida por teclado a otra
moneda, estas pueden ser a dolares, yenes o libras. La función tendrá como parámetros, la
cantidad de pesos y la moneda a pasar que será un texto
'''
def dolar(pesos):
    return print("Son",pesos * 0.00021, "USD")
def jpy(pesos):
    return print("Son",pesos * 0.028, "JPY")
def gbp(pesos):
    return print("Son",pesos * 0.00017, "GBP")
'''
5. Crea una aplicación que replique la ecuasión cuadrática, solicitando los valores para
a, b y c, y exponiendo los 2 resultados que esta genera. Tener en cuenta que se debe validar 
si los valores dados por el usuario generan un resultado imaginario, de ser así debe informarse
'''
def cuadratica(a,b,c):
    raiz = b**2 - (4*a*c)
    if raiz >= 0:
        x1 = round((-b + (raiz)**0.5)/(2*a),2)
        x2 = round((-b - (raiz)**0.5)/(2*a),2)
    else:
        return print("Las raices de la ecuacion dan negativas")
    return print("Las raices de la funcion son: ", "x1 = ", x1, "x2= ", x2 )

