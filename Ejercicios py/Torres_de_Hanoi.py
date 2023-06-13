def hanoi(p1,p3,p2,n):
    if n  >1:
        hanoi(p1,p2,p3,n-1)
        hanoi(p1,p3,p2,1)
        hanoi(p2,p3,p1,n-1)
    else:
        print("Mover de",p1,"a",p3)

n=int(input("Ingrese un numero: "))
hanoi("A","C","B",n)