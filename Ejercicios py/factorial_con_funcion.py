def fac(n):
    f=1
    for i in range(1,n+1):
        f=f*i
    return(f)

n = int(input("Ingrese un numero: "))
r = int(input("Ingrese un numero: "))

c = fac(n)/(fac(n-r)*fac(r))
print(c)