print("\n\n\n")
op = True

nombre = []
nota1 = []
nota2 = []
nota3 = []
promedio = []

while op:
    menu = input("\nQue quiere hacer\n1.Para agregar el nombre del estudiante y sus notas\n2.Para salir del programa e imprir la lista\n")
    if menu == "1":
        nombre1 = input("Ingrese el nombre del estudiante: ")
        nombre.append(nombre1)
        nota1_1 = float(input("Ingrese la nota 1: "))
        nota1.append(nota1_1)
        nota2_2 = float(input("Ingrese la nota 2: "))
        nota2.append(nota2_2)
        nota3_3 = float(input("Ingrese la nota 3: "))
        nota3.append(nota3_3)
        promedio.append((nota1_1+nota2_2+nota3_3)/3)
        matriz = [nombre,nota1,nota2,nota3,promedio]
    else:
        print("\nEstudiante" + "\t\t" + "N1" + "\t\t" + "N2" + "\t\t" + "N3" + "\t\t" + "NF")
        for i in range(len(nota1)):
            for j in range(5):
                print(matriz[j][i], end = 2*"\t")
            print("\n")
            op = False

