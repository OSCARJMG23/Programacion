import json
opcion = True

dic_empresa ={
    'empleados':[
        {'id: ':1,
        'Nombre: ':'Pedro',
        'Edad: ':'20',
        'NumDoc: ':'123456789'}
    ]
}

def menu():
    opcion = int(input('''
    Seleccione la opcion que quiere realizar:
    1.Agregar
    2.Editar
    3.Eliminar
    4.Listar
    '''))
    return opcion

def agregar():
    can_agg = int(input('Cuantos quiere agregar: '))
    for i in range(can_agg):
        id = i+1
        nombre = input('Ingrese el nombre del empleado: ')
        edad = int(input('Ingrese la edad del empleado: '))
        num_doc = input('Ingrese el numero de documento del cliente: ')
    
    empleado_n ={
        'id: ':id,
        'Nombre: ':nombre,
        'Edad: ':edad,
        'NumDoc: ':num_doc
    }
    dic_empresa['empleados'].append(empleado_n)

while opcion:
    select = menu()
    if select == 1:
        agregar()