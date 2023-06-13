n = int(input("Ingrese un numero: "))
r = int(input("Ingrese un numero: "))
fn=1
fr=1
nr=n-r
fnr = 1
for i in range(1,n+1):  
    fn = fn*i

for i in range(1,nr+1):
    fnr=fnr*i

for i in range(1,r+1):
    fr=fr*i

c = fn/(fnr*fr)
print("\nC es igual a: ", int(c))