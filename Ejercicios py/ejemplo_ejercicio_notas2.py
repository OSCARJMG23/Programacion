        
#Programa Nombre_programa
#Autor: Nombre_autor
#Fecha: 09/03/2023
codigo=int(input("Codigo: "))
codigos=[]
nombres=[]
notas1=[]
notas2=[]
notas3=[]
notas=[]
mensajes=[]

def nota_definitiva(nota1,nota2,nota3):
    notadefinitiva=nota1*0.3+nota2*0.3+nota3*0.4
    return notadefinitiva

def aprobar(notadef):
    if notadef>=3:
        mensaje="Aprobo"
    else:
        mensaje="Reprobo"
    return mensaje

while codigo!=999:
    nombre=input("Nombre: ")
    nota1=float(input("Nota 1:"))
    nota2=float(input("Nota 2:"))
    nota3=float(input("Nota 3:"))
    nota=nota_definitiva(nota1,nota2,nota3)
    mensaje=aprobar(nota)
    #Se guarda en listas la informacion
    codigos.append(codigo)
    nombres.append(nombre)
    notas1.append(nota1)
    notas2.append(nota2)
    notas3.append(nota3)
    notas.append(nota)
    mensajes.append(mensaje)

    print(f"El estudiante {nombre} obtuvo un nota de {nota:,.2f} por lo que {mensaje}")
    codigo=int(input("Codigo: "))

#Imprime toda la informacion recolectada y sus resultados para cada estudiante:
print("------------")
for i in range(len(codigos)):
    print(f"Codigo: {codigos[i]}, Nombre: {nombres[i]}, Nota1: {notas1[i]}, Nota2: {notas2[i]}, Nota3: {notas3[i]}, Nota definitiva {notas[i]:,.2f}, Resultado: {mensajes[i]}")

    