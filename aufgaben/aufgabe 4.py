from operator import truediv
import time

sttime=time.time()

NMAX=1000000
prime_zahl=[]
prime_zahl.append(2)

for i in range(3,NMAX+1):
    isprime=True
    j=0
    while (j<len(prime_zahl) and isprime):
        if i % prime_zahl[j]==0:
            isprime=False
        j=j+1
    if isprime:
        prime_zahl.append(i)
        
eltime = time.time()-sttime
print(prime_zahl)
print("Rechen-Zeit: " + str(round(eltime,4)) + "sec")