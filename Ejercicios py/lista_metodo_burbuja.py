#mi_lista= ['Juan','Maria','Jose','Angelica']
mi_lista= ['9','27','5','0','24','90']


n=len(mi_lista)

for i in range(n-1):
    for j in range(i+1,n):
         if mi_lista [i] > mi_lista[j]:
            t=mi_lista[i]
            mi_lista[i]=mi_lista[j]
            mi_lista[j]=t
print(mi_lista)