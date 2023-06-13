'''Diccionarios -Ejercicio

La institución educativa “SamEduca” cuenta con N docentes, conociendo de cada uno de ellos su número de cédula, nombre,
categoría y números de horas laboradas en el mes. Se pide realizar un programa que calcule el valor de los honorarios de
cada docente y el valor total a pagar por concepto de honorarios. Para este proceso, nos suministran el diccionario donde se
define el valor de la hora para cada categoría, así:
diccionario_categoria={1:25000,2:30000,3:40000,4:45000,5:60000}
Se debe imprimir el nombre del docente, el valor de sus honorarios y el valor total de honorarios, el de los N docentes.
'''
diccionario_categoria={1:25000,2:30000,3:40000,4:45000,5:60000}
n_doc=int(input('Ingrese la cantidad de Docentes: '))
total_honorarios=0
for i in range(n_doc):
    cedula = int(input("Ingrese el numero de cedula: "))
    nombre = input("Ingrese el nombre del Docente: ")
    categoria = int(input("Ingrese la categoria: "))
    horas = int(input("Ingrese la cantidad de horas laboradas del mes: "))
    honorarios = horas*diccionario_categoria.get(categoria)
    total_honorarios+=honorarios
    print("Nombre Docente: ",nombre)
    print("Honorarios: ",honorarios)
print("Total Honorarios: ",total_honorarios)
