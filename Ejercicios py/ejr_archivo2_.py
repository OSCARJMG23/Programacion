'''
2. Escribir un programa para gestionar un listado telefónico con los nombres y los teléfonos de los clientes de una empresa.
El programa debe incorporar funciones para: 
1. crear el archivo si este no existe, 
2. para consultar el teléfono de un cliente, 
3. añadir el teléfono de un nuevo cliente y 
4. eliminar el teléfono de un cliente. El listado debe estar guardado en el archivo de texto Directorio.txt donde el nombre del cliente 
y su teléfono deben aparecer separados por comas y cada cliente en una línea distinta.
'''
opcion = True
def ver_menu():
    opcion1=int(input('''
    Digite la opcion que desea realizar:
    1.Consultar el telefono de un cliente
    2.Añadir el telefono de un nuevo cliente
    3.Eliminar el telefono de un cliente
    0.Salir\n
    '''))
    return opcion1 


def consultar_cliente():
    lista = './lista_clientes.txt'
    texto = open(lista,'r')
    consulta = str(texto.read())
    print(consulta)
    lista.close()

def añadir_cliente():
    lista = open('./lista_clientes.txt','a')
    nombre = input('Ingrese el nombre del cliente: ')
    telefono = input('Ingrese el telefono del cliente: ')
    datos = nombre + telefono
    lista.write('\n' + datos )
    lista.close()

def eliminar_cliente():
    lista = open('./lista_clientes.txt','w')
    cliente_elim = input("Ingrese el nombre del cliente que quiere eliminar: ")
    lista.remove(cliente_elim)
    lista.close()


while opcion:
    selec_menu = ver_menu()
    if selec_menu == 1:
        consultar_cliente()
    elif selec_menu == 2:
        añadir_cliente()
    elif selec_menu == 3:
        eliminar_cliente()
    else:
        False