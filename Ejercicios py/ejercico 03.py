print("\n\n")
menu=int(input("Escriba el numero de la figura a la cual quiere calcular el area: \n1.Circulo\n2.Cuadrado\n3.Triangulo\n4.Trapecio\n5.Paralelogramo\n"))
if menu == 1:
    valor1 = int(input("Ingrese el radio de su circulo (r)en cm: "))
    print("\nEl area de su circulo es: ", 3.1416 * valor1**2,"cm²")
elif menu == 2:
    valor1 = int(input("Ingrse el lado de su cuadrado en cm: "))
    print("\nEl area de su u¡cuadrado es: ", valor1 * valor1, "cm²")
elif menu == 3:
    valor1 = int(input("Ingrese la base de su triangulo en cm: "))
    valor2 = int(input("Ingrese la altura de de su triangulo en cm: "))
    print("\nEl area de su triangulo es: ", valor1 * valor2 /2, "cm²")
elif menu == 4:
    valor1 = int(input("Ingrese la base menor de su trapecio en cm: "))
    valor2 = int(input("Ingrese la base mayor de su trapecio en cm: "))
    valor3 = int(input("Ingrese la altura (h) de su trapecio en cm: "))
    print("\nEl area de su trapecio es: ", (valor1 + valor2) * valor3 /2, "cm²")
elif menu == 5:
    valor1 = int(input("Ingrese la base de su paralelogramo en cm: "))
    valor2 = int(input("Ingrese la altura de su paralelogramo en cm: "))
    print("\nEl area de su paralelogramo es ", valor1 * valor2, "cm²")
else:
    print("\nNo seleccionaste una opcion correcta")
print("\n\n")