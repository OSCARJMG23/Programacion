print("\n\n\n")
import os

dic_estudiantes={
    1:{
    "nombre": "Andres David",
    "apellido": "Alvares Jimenes",
    "correo": "andresdj@gmail.com"
    },
    2:{
    "nombre": "Daniela Andrea",
    "apellido": "Perez Ortiz",
    "correo": "danielaap@gmail.com"
    },
    3:{
    "nombre": "Pedro Alberto",
    "apellido": "Paez Diaz",
    "correo": "pedroalbert@gmail.com"
    },
    4:{
    "nombre": "Karen Jimena",
    "apellido": "Melendez Correa",
    "correo": "karenjm@gmail.com"
    },
    5:{
    "nombre": "Albert Jesus",
    "apellido": "Einstein Gutieres",
    "correo": "alberteins@gmail.com"
    },
}
dic_materia ={
    1:{
    "nombre": "Matematicas"
    },
    2:{
    "nombre": "Fisica"
    },
    3:{
    "nombre": "Lenguaje"
    },
    4:{
    "nombre": "Quimica"
    }
}
dic_nota ={
    1:{
    'idEstudiante' : 'nombre1',
    'idMateria' : 'matematicas',
    'nota1' : 4.5,
    'nota2' : 4.9,
    'nota3' : 4.0,
    'notaFinal' : 3.8
     }
}

#Menu Principal
def ver_menu():
    os.system("clear")
    print("**************** COLE ****************\n")
    print('''Seleccione alguna de las siguientes opciones:
            1.Notas              2.Estudiantes
            3.Materias           0.Salir''')

#Materias
def ver_menu_materias(materias):
    os.system("clear")
    print("**************** MATERIAS ****************\n")
    print("CODIGO\t\t\tNOMBRE\n")
    for materia in materias:
        print(materia,"\t\t\t", materias[materia]["nombre"])
    print('''Seleccione alguna de las siguientes opciones:
    1.Crear        2.Editar
    3.Eliminar     0.Salir''')

#Estudiantes
def ver_menu_estudiantes(estudiantes):
    os.system("clear")
    print("**************** ESTUDIANTES ****************")
    print("CODIGO\t NOMBRE\t\t\t APELLIDO\t\t\tCORREO")
    for i in estudiantes:
        print(i,"\t",estudiantes[i]["nombre"],"\t\t",estudiantes[i]["apellido"],"\t\t",estudiantes[i]["correo"])
    print('''seleccione alguna de las siguientes opciones:
    1.Añadir estudiante           2.Editar un estudiante
    3.Eliminar estudiante         0.Salir''' )

#Notas
def ver_menu_notas(notas):
    os.system("clear")
    print("**************** NOTAS ****************")
    print("CODIGO\t NOMBRE \t MATERIA \tNOTA1 \tNOTA2\tNOTA3\t NF")
    for nota in notas:
        print(nota, "\t",notas[nota]["idEstudiante"],'\t',notas[nota]["idMateria"],'\t',notas[nota]["nota1"],'\t',notas[nota]["nota2"],'\t',notas[nota]["nota3"],'\t',notas[nota]["notaFinal"])
    print('''seleccione alguna de las siguientes opciones:
    1.Añadir nota           2.Editar nota
    3.Eliminar nota         0.Salir''' )

    


ver_menu()
opcionmenu = input()
while opcionmenu !="0":
    if opcionmenu == "1":
        print("**************** NOTAS ****************")
        ver_menu_notas(dic_nota)
        opcionmenu = input()
        while opcionmenu != "0":
            if opcionmenu == "1":
                print("**************** AÑADIR NOTAS ****************")
                id = list(dic_nota.keys())[len(dic_nota)-1]+1
                for materia in dic_materia:
                    print(materia,'\t\t\t', dic_materia[materia]['nombre'] )
                idMateria = input('Ingrese el id de la materia: ')
                for estudiante in dic_estudiantes:
                    print(estudiante,'\t\t\t',dic_estudiantes[estudiante]['nombre'],'\t\t\t',dic_estudiantes[estudiante]['apellido'])
                idEstudiante = int(input("Ingrese el id del estudiante: "))
                nota = float(input("Ingrese la nueva nota: "))
                dic_nota[id] ={
                'idEstudiante' : dic_estudiantes[idEstudiante]['nombre'],
                'idMateria' : dic_materia[idMateria]['nombre'],
                'nota1' : 4.5,
                'nota2' : 4.9,
                'nota3' : 4.0,
                'notaFinal' : 3.8
                }
    elif opcionmenu == "2":
        print("**************** ESTUDIANTES ****************")
        ver_menu_estudiantes(dic_estudiantes)
        opcionmenu = (input())
        while opcionmenu != "0":
            if opcionmenu == "1":
                print("**************** AÑADIR ESTUDIANTE ****************")
                id = list(dic_estudiantes.keys())[len(dic_estudiantes)-1]+1
                nombre =input("Ingrese el nombre del nuevo estudiante: ")
                apellido = input("Ingrese el apellido del nuevo estudiante: ")
                correo = input("Ingrese el correo del nuevo estudiante: ")
                dic_estudiantes[id] = {"nombre":nombre,"apellido":apellido,"correo":correo}
            elif opcionmenu=="2":
                print("**************** EDITAR ESTUDIANTE ****************")
                id = int(input("Ingrese el estudiante que quiere editar: "))
                nombre =input("Ingrese el nombre del nuevo estudiante: ")
                dic_estudiantes[id]["nombre"] = nombre
                apellido = input("Ingrese el apellido del nuevo estudiante: ")
                dic_estudiantes[id]["apellido"] = apellido
                correo = input("Ingrese el correo del nuevo estudiante: ")
                dic_estudiantes[id]["correo"] = correo
            elif opcionmenu=="3":
                print("**************** ELIMINAR ESTUDIANTE ****************")
                id = int(input("Ingrese el estudiante que quiere eliminar: "))
                del (dic_estudiantes[id])
            else:
                print("Por favor, selecciona una opcion validad\n")
            ver_menu_estudiantes(dic_estudiantes)
            opcionmenu = input()
            
    elif opcionmenu == "3":
        print("**************** MATERIAS ****************")
        ver_menu_materias(dic_materia)
        opc = input()
        while opc != "0":
            if opc == "1":
                print("**************** CREAR ****************\n")
                id = list(dic_materia.keys())[len(dic_materia)-1]+1
                nombre =input("Por favor Ingrese el nombre de la nueva materia:")
                dic_materia[id] = {"nombre":nombre}
            elif opc == "2":
                print("**************** EDITAR ****************")
                print("Por favor ingrese el codigo de la materia a editar:")
                id = int(input())
                print("Por favor ingrese el nuevo nombre de la materia:")
                dic_materia[id]["nombre"] = input()
            elif opc == "3":
                print("**************** ELIMINAR  ****************")
                print("Por favor ingrese el codigo de la materia a eliminar:")
                id = int(input())
                del (dic_materia[id])
            else:
                print("Por favor, selecciona una opcion validad\n")
            ver_menu_materias(dic_materia)
            opc = input()
    else:
        print("Por favor, seleccione una opcion valida\n")
    ver_menu()
    opcionmenu = input()
print("\n\n\n")