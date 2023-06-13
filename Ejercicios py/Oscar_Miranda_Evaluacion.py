import json
from os import system

print("\n\n\n")

with open("./PetShopping.json", "r") as archivo:
    biblioteca = json.load(archivo)
    
#Menu principal
def menu_principal ():
            print('''
    **************** PetShopping ****************
    -----Ingrese la opcion que quiere realizar: -----
    1.Mostrar mascotas
    2.Añadir nueva mascota
    3.Mostrar datos de la mascota
    4.Editar datos de la mascota
    5.Eliminar mascota
    ''')
    
#Listar mascotas con Tipo, Raza, Precio y Servicios
def mostar_mascotas (biblioteca):
    contador = 0
    for i in biblioteca["petstore"]["pet"]:
        print(contador, "\t\t", i["tipo"],"\t\t", i["raza"],"\t\t", i["precio"],"\t\t", i["servicios"])
        contador += 1
        
#Crear Nueva mascota
        
def crear_nueva_mascota (biblioteca):
    lista = []
    tipo = input("Ingrese el tipo de mascota: ")
    raza = input("Ingrese la raza de la mascota: ")
    precio = input("Ingrese el precio de la mascota: ")
    numero_servicios = int(input("Con cuantos servicios cuenta la mascota: "))
    if numero_servicios == 1:
        servicios = input("Ingrese los servicios con los que cuenta la mascota: ")
        biblioteca["petstore"]["pet"].append({"tipo" : tipo, "raza" : raza,"precio" : precio,"servicios" : servicios})
    elif numero_servicios > 1:
        servicios = input("Ingrese los servicios con los que cuenta la mascota: ")
        lista.append(servicios)
        biblioteca["petstore"]["pet"].append({"tipo" : tipo, "raza" : raza,"precio" : precio,"servicios" : lista})
    with open("./PetShopping.json", "w") as archivo:
        json.dump(biblioteca, archivo)
    print("Agregada con exito")    

#Mostrar por tipo


def mostrarTIPO_mascota (biblioteca):
    mostar_mascotas(biblioteca)
    with open("./PetShopping.json", "r") as archivo:
        tipo=json.load(archivo)
        agenda=tipo["petstore"]["pet"]

        p=input("Ingrese el tipo de mascota que desea buscar: ")
        for i in agenda:
            if i in agenda:
                if i["tipo"]==p:
                    print([i])

#Funcion para editar

def actualizar_mascota (biblioteca):
    mostar_mascotas(biblioteca)
    id = int(input("Ingrese el id de la mascota a actualizar: "))
    lista_servicios = []
    tipo = input("Ingrese el tipo de mascota: ")
    raza = input("Ingrese la raza de la mascota: ")
    precio = input("Ingrese el precio de la mascota: ")
    numero_servicios = int(input("Con cuantos servicios cuenta la mascota: "))
    if numero_servicios == 1:
        servicios = input("Ingrese los servicios a cambiar: ")
        biblioteca["petstore"]["pet"][id]["tipo"] = tipo
        biblioteca["petstore"]["pet"][id]["raza"] = raza
        biblioteca["petstore"]["pet"][id]["precio"] = precio
        biblioteca["petstore"]["pet"][id]["servicios"] = servicios
    elif numero_servicios > 1:
        servicios = input("Ingrese los servicios a cambiar: ")
        lista_servicios.append(servicios)
        biblioteca["petstore"]["pet"][id]["tipo"] = tipo
        biblioteca["petstore"]["pet"][id]["raza"] = raza
        biblioteca["petstore"]["pet"][id]["precio"] = precio
        biblioteca["petstore"]["pet"][id]["servicios"] = lista_servicios
        
    
#Funcion para eliminar
    
def eliminar_mascota (biblioteca):
    mostar_mascotas(biblioteca)
    id = int(input("Ingrese el id de la mascota a eliminar: "))
    biblioteca["petstore"]["pet"].pop(id)
    print("Mascota eliminada con exito")
    
bandera = True 

while bandera==True:
    menu_principal()
    opcion = int(input())
    if opcion == 1:
        mostar_mascotas(biblioteca)
    elif opcion == 2:
        crear_nueva_mascota(biblioteca)
    elif opcion == 3:
        mostrarTIPO_mascota(biblioteca)
    elif opcion == 4:
        actualizar_mascota(biblioteca)
    elif opcion == 5:
        eliminar_mascota(biblioteca)


bandera = False