print("\n\n")
#Precios de los vuelos
pc = 450000
ce = 250000
ct = 150000

#Reserva de vuelo
print("\nSeleccione su clase de vuelo:\n1.Para primera clase que tiene un valor = 450000\n2.Para clase ejecutiva que tiene un valor = 250000\n3.Para clase turista que tiene un valor = 150000")
c = int(input("Clase: "))

#print = int(input("Selecciona las semanas de anticipacion que tiene tu vuelo"))

if c == 1:
    c = pc
    print("Su vuelo es de primera clase y tiene un valor de: ", pc)
elif c == 2:
    c = ce
    print("Su vuelo es de clase ejecutiva y tiene un valor de ", ce)
elif c == 3:
    c = ct
    print("Su vuelo es de clase turista y tiene un valor de: ", ct)
else:
    print("Elige una opcion correcta")

print("\nAhora seleccione el tiempo de anticipacion de su vuelo para ver el costo total:\n1.Si es dentro de 4 o 6 semanas antes de su vuelo\n2.Si es dentro de 4 o 2 semanas antes de su vuelo\n3.Si es denro de 2 semanas o 2 dias antes de su vuelo\n4.Si es dentro de 2 o 0 dias antes de su vuelo ") 

t = int(input("\nTiempo de anticipacion: "))
if t == 1:
    print("Tu vuelo tiene un valor total de: ", c+(c*0.10))
elif t == 2:
    print("Tu vuelo tiene un valor total de: ", c+(c*0.25))
elif t == 3:
    print("Tu vuelo tiene un valor total de : ", c+(c*0.45))
elif t == 4:
    print("Tu vuelo tiene valor total de : ", c+(c*0.60) )
else:
    print("Elige una opcion correccta")
print("\n\n")