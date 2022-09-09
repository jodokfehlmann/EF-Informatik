from operator import truediv


nmax=10000
prime_zahl=[]
prime_zahl.append(2)

for i in range(3,nmax+1):
    isprime=True
    j=0
    while (j<len(prime_zahl) and isprime):
        if i % prime_zahl[j]==0:
            isprime=False
        j=j+1
    if isprime:
        prime_zahl.append(i)
        
print(prime_zahl)