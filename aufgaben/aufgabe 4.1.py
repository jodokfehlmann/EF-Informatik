import time

sttime=time.time()
nmax=100
prime_zahl=[]
prime_zahl.append(2)

for i in range(3,nmax+1):
    isprime=True
    for j in range(len(prime_zahl)):
        if i % prime_zahl[j]==0:
            isprime=False
    if isprime:
        prime_zahl.append(i)

eltime = time.time()-sttime
print(prime_zahl)
print("Rechen-Zeit: " + str(round(eltime,4)) + "sec")