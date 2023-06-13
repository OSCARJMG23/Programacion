from datetime import date

pacientes = [ ]
opcion = True

def meun_prin():
    print('''********* MENU *********''')

    opcion1= int(input("Digite la opcion que desea realizar:\n"+
                       "1.Crear nuevo paciente\n"+
                       "2.Editar datos de un paciente\n"+
                       "3.Borrar datos de un paciente\n"+
                       "4.Listar todos los pacientes\n"+
                       "0.Salir\n-"))
    return opcion1
    
def datos_paciente():
    id = (len(pacientes)+1)
    nombre = str(input("Ingrese el nombre del paciente: "))
    fecha_nac = str(input("Ingrese la fecha de nacimiento del paciente DD/MM/AA: "))
    peso = input("Ingrese su peso en Kg: ")
    sexo = input("Ingrese el sexo del paciente HOMBRE/MUJER: ")

    pacien_dat ={
        'CODIGO: ':id,
        'NOMBRE: ':nombre,
        'FECHA NAC: ':fecha_nac,
        'PESO: ':peso,
        'SEXO: ':sexo
    }
    return pacien_dat

def editar_pacient(editar_id):
    editar_pacient = datos_paciente()
    editar_pacient['CODIGO'] = editar_id
    pacientes[editar_id-1] = editar_pacient

def borrar_paciente(id_borrar):
    pacientes.pop(id_borrar)
    lista_pacientes()
    print("Paciente eliminado con exito\n")


def lista_pacientes():
    print("Codigo:   Nombre:                Fecha nacimiento:   Peso:   Sexo:")
    for paciente in pacientes:
        print(paciente.get('CODIGO'),paciente.get('NOMBRE'),paciente.get('FECHA NAC'),paciente.get('PESO'),paciente.get('SEXO')) 
              
while opcion:
    opc_men = meun_prin()
    if opc_men ==1:
        paciente_n = datos_paciente()
        pacientes.append(paciente_n)
    elif opc_men == 2:
        lista_pacientes()
        editar_id= int(input("Ingrese el codigo del paciente que quiere editar:\n"))
        editar_pacient(editar_id)
        print(pacientes)
    elif opc_men == 3:
        lista_pacientes()
        id_borrar = int("Ingrese el numero del paciente que quiere eliminar:\n")
        borrar_paciente(id_borrar)
    elif opc_men == 4:
        lista_pacientes()
    elif opc_men == 0:
        opcion=False

