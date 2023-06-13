print("\n\n\n")
cont = 0
otro = "s"
pcto = ""
total = 0
print("****************Lista de COMPRAS Y VENTAS****************")
opcion = input("¿Desea crear una lista de compras o calcular el total de ventas?\n1.Compras\n2.Ventas\n")
while otro == "s" or otro == "S":
    
            pcto += "\n" + input("Ingrrese el producto: ")
            valor = input("Ingrese el valor: $")
            pcto += "\t\t\t" + valor
            total += int(valor)
            cont += 1

            otro = input("\n¿Desea agregrar otro producto? s/n\n")
if opcion == "1":                  
    print("\n****************Total Compras****************")
    print("\nProductos Comprados: " + str(cont))
else:
    print("\n****************Total Ventas****************")
    print("\nProductos Vendidos: " + str(cont))
print("\nPRODUCTO\t\tVALOR")
print(pcto)
print("\nTOTAL: $" + str(total))

print("\n\n\n")