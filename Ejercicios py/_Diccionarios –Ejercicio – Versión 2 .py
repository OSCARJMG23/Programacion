'''Diccionarios –Ejercicio – Versión 2 (Validación)'''
diccionario_categoria ={1:25000,2:30000,3:40000,4:45000,5:60000}
total_honorarios=0
n = int(input("Ingrese la cantidad de docentes: "))
for i in range(n):
    cedula = int(input("Cedula Docente: "))
    nombre = input("Nombre Docente: ")
    
    while True:
        try:
            categoria = int(input("Ingrese la categoria: "))
            if diccionario_categoria.get(categoria,"ERROR") == "ERROR":
                print("Categoria No existe")
                continue
            break
        except ValueError:
            print("La categoria debe ser un dato entero")
            
    horas = int(input("Horas laboradas en mes: "))
    honorarios = horas*diccionario_categoria.get(categoria)
    total_honorarios += honorarios
    print("Nombre docente: ",nombre)
    print("Honorarios: ","{:,.2f}".format(honorarios))
print("Total honorarios: ","{:,.2f}".format(total_honorarios))