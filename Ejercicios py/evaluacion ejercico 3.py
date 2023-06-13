#Escribir un programa que le solicite al usuario su edad y la guarde en una variable. Que luego solicite la cantidad de artículos comprados en una tienda y la guarde en otra variable,
#y el valor total de su compra. Finalmente, mostrar en pantalla un valor que indique si el usuario es mayor de 18 años de edad y además compró más de 1 artículo. 
#Por otra parte, si el usuario es mayor a 60 años, tendrá un descuento en tienda del 15%, a lo cual se debe mostrar el valor de la compra con el descuento.
print("\n\n")
edad = int(input("Ingrese su edad: "))

ca = int(input("Ingrese aqui la cantidad de articulos que compro en la tienda: "))

totalc = int(input("Ingrese el valor total de su compra: "))
desc = totalc * 0.15
if edad>18: 
    print("Su edad es mayor a 18 ")
else:
    print("")
if ca>1:
    print("Usted compro mas de un articulo")
else:
    print()
if edad>60:
    print("Por ser mayor de 60 años tu descuento es: ",desc, "El valor de su compra con el descuento es: ",totalc - desc  )
else:
    print("")
print("\n\n")