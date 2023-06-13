print("\n\n")
conts = 0
contr = 0
contm = 0
contd = 0
otro = "s"

while otro == "s" or otro == "S":
    num1 = int(input("ingrese un numero: "))
    num2 = int(input("ingrese otro numero: "))
    ope = str(input("seleccione una operación:\n S o s, si quieres sumar \n R o r, si quieres restar \n M o m, si quieres multiplicar \n D o d, si quieres dividir\n"))
    if ope == "S" or ope == "s":
        conts += 1
        print("la suma de los valores ", num1, "y", num2,"es:",num1+num2)
    elif ope == "R" or ope == "r":
        contr  += 1
        print("la resta de los valores ", num1, " y ", num2, "es:",num1-num2)
    elif ope == "M" or ope == "m":
        contm +=1
        print("la multiplicacion de los valores ", num1, " y ", num2, "es:", num1*num2)
    elif ope == "D" or ope == "d":
        contd += 1
        print("la division de los valores ", num1, " y ", num2, "es:", num1/num2)
    else:
        print("error")
    otro = input("¿Deseas continuar? si desea continuar digite (s) si quiere saber el total de operaciones (n)")


print("Contador de operaciones")
print("Contador de suma: ",conts)
print("Contador de resta: ",contr)
print("Contador de munltiplicacion: ",contm)
print("Contador de division: ",contd)
print("\n\n")