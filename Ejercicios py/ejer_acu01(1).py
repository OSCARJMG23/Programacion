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
Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.'''
print("\n\n\n")
def np(n)
        for i range(2,int(n/2)):
            if (n%i) == 0:
                return False
        return True
       
       
     