#1.      Haz una aplicación que calcule el área de un círculo(pi*R2). El radio se pedirá por teclado
#2.      Escribir un programa que solicite al usuario ingresar cuatro números para luego mostrarle el promedio de estos.
#3.      Escribir un programa que le solicite al usuario su edad y la guarde en una variable. Que luego solicite la cantidad de artículos comprados en una tienda y la guarde en otra variable, y el valor total de su compra. Finalmente, mostrar en pantalla un valor que indique si el usuario es mayor de 18 años de edad y además compró más de 1 artículo. Por otra parte, si el usuario es mayor a 60 años, tendrá un descuento en tienda del 15%, a lo cual se debe mostrar el valor de la compra con el descuento.
#4.   Escribir un programa que solicite al usuario una letra y, si es una vocal, muestre un mensaje indicando si esta es vocal o consonante . Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato
print("\n\n")
menu=int(input("Escriba el numero de 1 para hayar el area de su circulo"))
if menu == 1:
    valor1 = int(input("Ingrese el radio de su circulo (r)en cm: "))
    print("\nEl area de su circulo es: ", 3.1416 * valor1**2,"cm²")
else:
    print("Error")
print("\n\n")


