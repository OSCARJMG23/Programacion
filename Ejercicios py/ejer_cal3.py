'''
Leer nombre del estudiante y tres notas para calcular el promedio de las tres notas
y mostrar el resultado junto al nombre, ademas indicar si ganó o perdio la materia.
Se gana a partir de 3.0. El programa debe realizar esta misma tarea para 50 estudiantes
'''

for i in range(50):
    nes = input("Ingrese el nombre del estudiante: ")
    n1 = float(input("Ingrese la nota 1 del estudiante: "))
    n2 = float(input("Ingrese la nota 2 del estudiante: "))
    n3 = float(input("Ingrese la nota 3 del estudiante: "))
    promedio = (n1+n1+n3)/3
    if promedio >= 3.0:
        print(nes, "con promedio de: ",promedio,"gano la materia")
    else:
        print(nes, "con promedio de: ",promedio,"perdio la materia")