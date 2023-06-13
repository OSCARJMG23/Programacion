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
lista = "./lista_clientes.txt"
def ver_menu():
    opcion1=int(input('''
    Digite la opcion que desea realizar:
    1.Consultar el telefono de un cliente
    2.Añadir el telefono de un nuevo cliente
    3.Eliminar el telefono de un cliente
    0.Salir\n
    '''))
    return opcion1 

while opcion:
    selec = ver_menu()
    if selec ==1:
        telefono_busc = input("Ingrese el nombre del cliente que quiere consultar: \n")
        with open("lista_clientes.txt","r") as lista:
            for line in lista:
                cliente = line.split(sep=',')
                if cliente[0].lower()==telefono_busc.lower():
                    print(cliente[1])
                else:
                    print("El nombre que ingreso no existe en nuestra base de datos")

    elif selec ==2:    
        nombrec= input("Ingrese el nombre del cliente: ")
        telefonoc = input("Ingrese el telefono del cliente: ")
        with open("lista_clientes.txt","a") as lista:
            lista.write(nombrec+", "+(telefonoc))

