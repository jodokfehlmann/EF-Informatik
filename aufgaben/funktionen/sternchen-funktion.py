
def erstezeile(zahl):
    for i in range(zahl):
        print('*', end='')
    print()

def mittlerezeile(zahl):
    print('*', end= '')
    for i in range(zahl-2):
        print(' ', end='')
    print('*')

def ganz(zahl, reihe):
    erstezeile(zahl)
    for i in range(reihe-2):
        mittlerezeile(zahl)
    erstezeile(zahl)

ganz(3, -4)