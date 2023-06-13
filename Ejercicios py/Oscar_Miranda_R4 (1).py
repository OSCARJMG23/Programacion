opc_men = True

pacien_dat ={
        1:{'CODIGO: ':'',
        'NOMBRE: ':'',
        'FECHA NAC: ':'',
        'PESO: ':'',
        'SEXO: ':''
        }
    }

def meun_prin():
    print('''********* MENU *********''')

    opcion1= int(input("Digite la opcion que desea realizar:\n"+
                       "1.Crear nuevo paciente\n"+
                       "2.Editar datos de un paciente\n"+
                       "3.Borrar datos de un paciente\n"+
                       "4.Listar todos los pacientes\n"+
                       "0.Salir\n-"))
    return opcion1

def datos_paciente(pacientes):
    can_paci=int(input("Cuantos pacientes quiere agregar: "))
    for i in range(can_paci):
        id = list(pacientes.keys())[len(pacientes)-1]+1
        nombre = str(input("Ingrese el nombre del paciente: "))
        fecha_nac = str(input("Ingrese la fecha de nacimiento del paciente DD/MM/AA: "))
        peso = input("Ingrese su peso en Kg: ")
        sexo = input("Ingrese el sexo del paciente HOMBRE/MUJER: ")
        if pacientes[1]['NOMBRE: '] =='':
            pacientes[1]={'NOMBRE: ':nombre,'FECHA NAC: ':fecha_nac,'PESO: ':peso,'SEXO: ':sexo}
        else:
            pacientes[id]={'NOMBRE: ':nombre,'FECHA NAC: ':fecha_nac,'PESO: ':peso,'SEXO: ':sexo}   

def editar_pacient(pacientes):
    lista_pacientes(pacientes)
    codigo = int(input("Seleccione el codigo del paciente a editar: \n"))
    print(codigo,pacientes[codigo]['NOMBRE: '],pacientes[codigo]['FECHA NAC: '],pacientes[codigo]['PESO: '],pacientes[codigo]['SEXO: '])
    print('''Seleccione el dato que quiere editar:
            1.Nombre
            2.Fecha de nacimiento
            3.Peso
            4.Sexo''')
    opcion = input()
    if opcion == 1:
        nombre = input("Ingrese el nombre nuevo: \n")
        pacientes[codigo]['NOMBRE: ']=nombre
    elif opcion == 2:
        fecha_naci = input("Ingrese la nueva fecha de nacimiento: \n")
        pacientes[codigo]['FECHA NAC: ']=fecha_naci
    elif opcion == 3:
        peso_ = input("Ingrese el nuevo peso: \n")
        pacientes[codigo]['PESO: ']=peso_
    elif opcion == 4:
        sexo_ = input("Ingrese el nuevo sexo: \n")
        pacientes[codigo]['SEXO: ']=sexo_
    else:
        print("Seleccione una opcion valida")

def borrar_paciente(pacientes):
    lista_pacientes(pacientes)
    codigo = int(input("Seleccione el codigo del paciente a eliminar: \n"))
    del(pacientes[codigo])
    print("Paciente eliminado con exito\n")


def lista_pacientes(pacientes):
    print("Codigo:  Nombre:                Fecha nacimiento:       Peso:    Sexo:")
    for paciente in pacientes:
        print(paciente,"\t",pacientes[paciente]['NOMBRE: '],"\t\t",pacientes[paciente]['FECHA NAC: '],"\t\t",pacientes[paciente]['PESO: '],"\t",pacientes[paciente]['SEXO: '])


while opc_men:
    menup= meun_prin()
    if menup==1:
        datos_paciente(pacien_dat)
    elif menup ==2:
        editar_pacient(pacien_dat)
    elif menup==3:
        borrar_paciente(pacien_dat)
    elif menup==4:
        lista_pacientes(pacien_dat)