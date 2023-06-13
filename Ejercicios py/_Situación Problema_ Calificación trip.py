'''Situación Problema: Calificación tripulante
Dada la siguiente información sobre las calificaciones de estudiantes de una institución educativa:
• Código
• Nombre
• Nota 1 (Peso de 30%)
• Nota 2 (Peso de 30%)
• Nota 3 (Peso de 40%)
El proceso se termina cuando el código que se ingrese sea 999.(Bandera)
Se pide calcular:

La nota definitiva de cada estudiante e indicar con un mensaje si aprobó o reprobó, utilizando funciones
Para aprobar, la nota deber ser mayor o igual a 3.0 y la información en su totalidad se debe almacenar
en listas'''

codigo = int(input("Ingrese el codigo: "))
codigos = []
nombres = []
notas1 = []
notas2 = []
notas3 = []
notas = []
mensajes = []

def nota_definitiva(nota1,nota2,nota3):
    notadefinitiva = (nota1*0.3+nota2*0.2+nota3*0.4)
    return notadefinitiva

def aprobar(notadef):
    if notadef >= 3:
        mensaje = "APROBO"
    else:
        mensaje = "NO APROBO"
    return mensaje

while codigo != 999:
    nombre=input("Nombre: ")
    nota1 = float(input("NOta 1: "))
    nota2 = float(input("NOta 2: "))
    nota3 = float(input("NOta 3: "))
    nota = nota_definitiva(nota1,nota2,nota3)
    mensaje = aprobar(nota)
    
    codigos.append(codigo)
    notas1.append(nota1)
    notas2.append(nota2)
    notas3.append(nota3)
    notas.append(nota)
    mensajes.append(mensaje)
    
print(f"El estudiante {nombre} obtuvo una nota de {nota:,.2f} por lo que {mensaje}")
codigo = int(input("codigo: "))

print("--------")
for i in range(len(codigos)):
    print(f"Codigo: {codigos[i]}, Nombre: {nombres[i]}, Nota1: {notas1[i]}, Nota2: {notas2[i]}, Nota3: {notas3[i]}, Nota definitiva{nota[i]:,.2f},Resultado: {mensajes[i]}")