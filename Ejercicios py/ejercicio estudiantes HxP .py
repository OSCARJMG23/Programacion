print("\n\n\n")
numEstudiantes = int(input("Ingrese la cantidad de estudiantes: "))
estudiantes = []

for i in range(numEstudiantes):
    nombre = input("Ingrese el nombre del estudiante: ")
    n1 = float(input("Ingrese la nota 1: "))
    n2 = float(input("Ingrese la nota 2: "))
    n3 = float(input("Ingrese la nota 3: "))
    prom = (n1+n2+n3)/3
    estudiantes.append([nombre, n1, n2, n3, prom])

print("\tNombre\t\tN1\t\tN2\t\tN3\t\tNF")
impresion= ""
for estudiante in estudiantes:
    for i in range(5):
        impresion += str(estudiante[i]) + "\t\t"
    impresion += "\n"
print(impresion)
print("\n\n\n")