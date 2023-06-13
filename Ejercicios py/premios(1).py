#Diccionario grupos
dic_gb ={1:{'TRAINER: ':'','Nombre: ': '' , 'Mes de ingreso: ':'','Grupo: ':'','Edad: ':''},
         2:{'TRAINER: ':'','Nombre: ': '' , 'Mes de ingreso: ':'','Grupo: ':'','Edad: ':''}}
dic_gi ={{'TRAINER: ':'','Nombre: ': '' , 'Mes de ingreso: ':'','Grupo: ':'','Edad: ':''}}
dic_ga ={{'TRAINER: ':'','Nombre: ': '' , 'Mes de ingreso: ':'','Grupo: ':'','Edad: ':''}}


otro = "s"

#Menu principal
def ver_menu():
    print('''
------- MANTENIMIENTO Y PREMIOS CAMPERS CAMPUS -------
--------------------------------------------------
0.TERMINAR PROCESO
--------------------------------------------------
1.CREAR GRUPO BASICO CON CAMPERS Y SUS DATOS PERSONALES
2.REGISTRAR EXPERT TRAINER DEL GRUPO BASICO
3.LISTAR CAMPERS
4.REPORTAR CAMPERS DE MAYOR Y MENOR EDAD
''')

#Lista campers
def lista_campers(campers):
    print("************ Lista campers ************")
    print("***************************************")
    print("TRAINER"+"\t\t"+"NOMBRE"+"\t\t"+ "MES DE INGRESO"+"\t\t" + "Grupo" +"\t\t" + "EDAD")
    for i in campers:
        print(i,"\t\t",campers[i]['TRAINER'],"\t\t",campers[i]['Nombre'],"\t\t",campers[i]['Mes de ingreso'],"\t\t",campers[i]['Grupo'],"\t\t",campers[i]['Edad'])



ver_menu()
menu = int(input())
while menu !=0:
    if menu == 1:
        menu1 = int(input("Que grupo quiere crear:\n1.GRUPO BASICO\n2.GRUPO INTERMEDIO\n3.GRUPO AVANZADO\n"))
        if menu1 == 1:
            id = list(dic_gb.keys())[len(dic_gb)-1]+1
            can_estu= int(input("Cuantos estudiantes quiere agregar al grupo: "))
            for i in range(can_estu):
                print("Estudiante numero ",i+1)
                nombre = input('Nombre del camper: ')
                m_ingreso= input('Mes de ingreso del camper: ')
                gp=input('A que grupo pertenece: ')   
                edad=int(input('Edad: '))
                dic_gb[id] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad,}
            ver_menu()   
            menu = int(input())               
        elif menu1 == 2:
            id = list(dic_gi.keys())[len(dic_gi)-1]+1
            can_estu= int(input("Cuantos estudiantes quiere agregar al grupo: "))
            for i in range(can_estu):
                print("Estudiante numero ",i+1)
                nombre = input('Nombre del camper: ')
                m_ingreso= input('Mes de ingreso del camper: ')
                gp=input('A que grupo pertenece: ')   
                edad=int(input('Edad: '))
                dic_gi[id] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad,}
            ver_menu()   
            menu = int(input())       
        elif menu1 == 3:
            id = list(dic_ga.keys())[len(dic_ga)-1]+1
            can_estu= int(input("Cuantos estudiantes quiere agregar al grupo: "))
            for i in range(can_estu):
                print("Estudiante numero ",i+1)
                nombre = input('Nombre del camper: ')
                m_ingreso= input('Mes de ingreso del camper: ')
                gp=input('A que grupo pertenece: ')   
                edad=int(input('Edad: '))
                dic_ga[id] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad,}
            ver_menu()   
            menu = int(input())       
    elif menu == 2:
        asig_t = int(input("A que grupo quire asignar el Trainer: \n1.GRUPO BASICO\n2.GRUPO INTERMEDIO\n3.GRUPO AVANZADO\n"))
        if asig_t == 1:
            nom_t = input("Ingrese el nombre del Trainer: ")
            dic_gb['TRAINER: ']=nom_t
            ver_menu()
            menu = int(input())
        elif asig_t == 2:
            nom_t = input("Ingrese el nombre del Trainer: ")
            dic_gi['TRAINER: ']=nom_t
            ver_menu()
            menu = int(input())
        elif asig_t == 3:
            nom_t = input("Ingrese el nombre del Trainer: ")
            dic_ga['TRAINER: ']=nom_t
            ver_menu()
            menu = int(input())
    elif menu ==3:
        lis_g= int(input("De que grupo quiere conocer el listado: \n1.GRUPO BASICO\n2.GRUPO INTERMEDIO\n3.GRUPO AVANZADO\n"))
        if lis_g==1:
            lista_campers()


