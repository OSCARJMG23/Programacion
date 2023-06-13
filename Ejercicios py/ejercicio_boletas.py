'''Para un concierto hay 3 tipos de boletas,
desarrollar un programa que calcule el total de ventas por cada boleta
(cuantas boletas se vendieron de cada tipo y cuanto se recaudo por boleta)
en cada venta se pueden vender mas de una boleta, pero solo de un mismo tipo
ubicacion  valor US$
General       50
Vip           75
platinium     100'''
#Precio boletas
print("\n\n\n")
bgeneral = 50
bvip = 75
bplatinium = 100
otro = "s"
#Definicion de contador
cantidadg = 0
cantidadv = 0
cantidadp = 0
#Contador de ventas
ventas_general = 0
ventas_vip = 0
ventas_platinium = 0

while otro == "s" or otro == "S":
    tipo = int(input("Que tipo de boleta quiere comprar: \n1.General\n2.Vip\n3.Platinium\n"))
    if tipo == 1:
        cantidadg += int(input("Ingrese cuantas boletas de esta ubicacion quiere: "))
        ventas_general += cantidadg
        print("Elvalor total de su compra es: ", cantidadg*bgeneral)
    elif tipo == 2:
        cantidadv += int(input("Ingrese cuantas boletas de esta ubicacion quiere: "))
        ventas_vip += cantidadv
        print("Elvalor total de su compra es: ", cantidadv*bvip)
    elif tipo == 3:
        cantidadp += int(input("Ingrese cuantas boletas de esta ubicacion quiere: "))
        ventas_platinium += cantidadp
        print("Elvalor total de su compra es: ", cantidadp*bplatinium)
    otro = input("Desea comprar mas boletas? si su respuesta es si (s), si es no (n): ")

# Calcular el total recaudado por cada tipo de boleta
total_general = ventas_general * bgeneral
total_vip = ventas_vip * bvip
total_platinium = ventas_platinium * bplatinium

#Total boletas vendidas y total recaudado

print("Total de ventas General es", cantidadg, "Con un total recaudado de",total_general)
print("Total de ventas vip es", cantidadv, "con un total recaudado de", total_vip)
print("Total de ventas platinium es", cantidadp, "con un total recaudado de", total_platinium)

