import json
'''Elabore un programa Python para gestionar el CRUD del archivo de datos Biblioteca.json con las siguientes funcionalidades:

Mostrar en pantalla todos los libros
Crear Nuevo libro con la posibilidad de múltiples autores por Libro
Mostrar los datos de un libro consultado por título
Actualizar los datos de un libro consultado por título
Eliminar un Libro de la biblioteca'''

opcion_men = True
libreria = "/home/arteN01-059/Documents/ejer_archivos/biblioteca_.json"
def menu():
    opcion = int(input('''
    Ingrese la opcion que quiere realizar:
    1.Mostrar todos los libros
    2.Agregar un nuevo libro
    3.Mostrar los datos de un libro
    4.Editar los datos de un libro
    5.Eliminar un libro
    0.Salir
    '''))
    return opcion

 
with open("biblioteca_.json","r") as archivo:
    libros = json.load(archivo)

def mostrar_libros():
    print('*********** LIBROS DISPONIBLES ***********')
    with open("./biblioteca_.json","r") as archivo:
        libros = json.load(archivo)
        for libro in libros["bookstore"]["book"]:
            print(libro["title"]["__text"])
    archivo.close()

def agregar_libro():
    can_lib = int(input('Cuantos libros quiere agregar: '))
    for i in range(can_lib):
        idioma = input('Ingrese el idioma del libro: ')
        titulo = input('Ingrese el titulo del libro: ')
        autor = input('Ingrese el numero del autor: ')
        año_c = input('Ingrese el año de creacion del libro: ')
        precio = input('Ingrese el precio del numero: ')
        categoria = input('Ingrese la categoria del libro: ')
        libros["bookstore"]["book"].append({
                    "title":{
                        "_lang": idioma,
                        "__text": titulo
                    },
                    "author": autor,
                    "year": año_c,
                    "price": precio,
                    "_category": categoria
                })
    with open('biblioteca_.json','w') as archvio:
        json.dump(libros, archvio)
        archvio.close()

while opcion_men:
    select = menu()
    if select == 1:
        mostrar_libros()
    elif select == 2:
        agregar_libro()


