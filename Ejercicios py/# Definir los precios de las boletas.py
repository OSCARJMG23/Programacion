# Definir los precios de las boletas
PRECIOS = {
    'General': 50,
    'Vip': 75,
    'Platinium': 100
}

# Definir el contador de ventas de cada tipo de boleta
ventas_general = 0
ventas_vip = 0
ventas_platinium = 0

# Preguntar al usuario cuántas boletas se vendieron y de qué tipo
while True:
    tipo = input('¿Qué tipo de boleta se vendió? (General, Vip o Platinium): ')
    if tipo not in PRECIOS:
        print('Tipo de boleta inválido. Intente de nuevo.')
        continue
    try:
        cantidad = int(input(f'¿Cuántas boletas de {tipo} se vendieron?: '))
    except ValueError:
        print('Cantidad inválida. Intente de nuevo.')
        continue
    if cantidad < 1:
        print('La cantidad debe ser mayor o igual a 1. Intente de nuevo.')
        continue
    if tipo == 'General':
        ventas_general += cantidad
    elif tipo == 'Vip':
        ventas_vip += cantidad
    else:
        ventas_platinium += cantidad
    respuesta = input('¿Desea ingresar más ventas? (s/n): ')
    if respuesta.lower() != 's':
        break

# Calcular el total recaudado por cada tipo de boleta
total_general = ventas_general * PRECIOS['General']
total_vip = ventas_vip * PRECIOS['Vip']
total_platinium = ventas_platinium * PRECIOS['Platinium']

# Imprimir los resultados
print(f'Se vendieron {ventas_general} boletas generales, por un total de {total_general} dólares.')

