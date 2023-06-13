#Una pelota rebota varias veces y en cada oportunidad pierde el 10% de la altura del rebote anterior.
#Si se deja caer desde una altura A de 10 metros,
#¿Cuantas veces rebotara antes de alcanzar apenas 0,5 metros de altura?

alt = 10
reb = 0

while alt > 0.5:
    alt *= 0.9 
    reb += 1
print(reb)