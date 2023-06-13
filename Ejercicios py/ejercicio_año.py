print("\n\n\n")
fecha = input("Ingrese una fecha dd/mm/aaaa: \n")
dia = int(fecha[0:2])
mes = int(fecha[3:5])
agno = int(fecha[6:10])
feb = 0
dias = 0
if agno % 4 == 0 and (agno % 400 == 0 or agno % 100 !=0):
    feb = 29
else:
    feb = 28

diasMes = [31,feb,31,30,31,30,31,31,30,31,30,31]
for i in range(mes-1):
    dias += diasMes[i]
dias += dia
print(fecha, "es el dia",dias,"del año",agno)