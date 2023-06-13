dic_gb ={
    1:{'TRAINER: ':'',
       'Nombre: ': '' , 
       'Mes de ingreso: ':'',
       'Grupo: ':'',
       'Edad: ':''
       }
    }

dic_gi ={
    1:{'TRAINER: ':'',
       'Nombre: ': '' , 
       'Mes de ingreso: ':'',
       'Grupo: ':'',
       'Edad: ':''
       }
    }

dic_ga ={
    1:{'TRAINER: ':'',
       'Nombre: ': '' , 
       'Mes de ingreso: ':'',
       'Grupo: ':'',
       'Edad: ':''
       }
    }

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
#FUNCIONES AGREGAR GRUPOS
def d_grupo_basico(grupo_basico):
        id = list(grupo_basico.keys())[len(grupo_basico)-1]+1
        can_estu= int(input("Cuantos estudiantes quiere agregar al grupo: "))
        for i in range(can_estu):
            print("Estudiante numero ",i+1)
            nombre = input('Nombre del camper: ')
            m_ingreso= input('Mes de ingreso del camper: ')
            gp=input('A que grupo pertenece: ')   
            edad=int(input('Edad: '))
            if grupo_basico[1]['NOMBRE'] == '':
                grupo_basico[1] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad}
            else:
                grupo_basico[id] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad}
                
def d_grupo_basico(grupo_intermedio):
        id = list(grupo_intermedio.keys())[len(grupo_intermedio)-1]+1
        can_estu= int(input("Cuantos estudiantes quiere agregar al grupo: "))
        for i in range(can_estu):
            print("Estudiante numero ",i+1)
            nombre = input('Nombre del camper: ')
            m_ingreso= input('Mes de ingreso del camper: ')
            gp=input('A que grupo pertenece: ')   
            edad=int(input('Edad: '))
            if grupo_intermedio[1]['NOMBRE'] == '':
                grupo_intermedio[1] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad}
            else:
                grupo_intermedio[id] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad}
    
def d_grupo_basico(grupo_avanzado):
        id = list(grupo_avanzado.keys())[len(grupo_avanzado)-1]+1
        can_estu= int(input("Cuantos estudiantes quiere agregar al grupo: "))
        for i in range(can_estu):
            print("Estudiante numero ",i+1)
            nombre = input('Nombre del camper: ')
            m_ingreso= input('Mes de ingreso del camper: ')
            gp=input('A que grupo pertenece: ')   
            edad=int(input('Edad: '))
            if grupo_avanzado[1]['NOMBRE'] == '':
                grupo_avanzado[1] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad}
            else:
                grupo_avanzado[id] = {'Nombre: ':nombre,'Mes de ingreso: ':m_ingreso,'Grupo: ':gp,'Edad: ':edad}
                
#FUNCION AGREGAR TRAINER

 