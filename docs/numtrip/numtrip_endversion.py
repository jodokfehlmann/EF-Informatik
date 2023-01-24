import random
import time
import sys
n = 5

zahlen_matrix = [
    [128, 128,  16,  8,  8],
    [  4,  32,   8,  2,  1],
    [  4,  4, 1024,  4,  2],
    [  2,  8,   16,  4, 16],
    [  2,512,    4,  4,  4]
]

def obere_zeile():
    print(f"      1      2      3      4      5    ")

def rand():
    print(f"  +------+------+------+------+------+")

def leer_zeile():
    print(f"  ¦      ¦      ¦      ¦      ¦      ¦")


def dazwischen_zahl(zahlenliste,nr):
    print(f"{nr} ¦", end = '')
    for zahl in zahlenliste:

        if (zahl<10):
            print(" ", end = '')
        print("  ", end = '')
        if (zahl == -1):
            print(" ",end = '')
        else:
            print(zahl, end = '')
        if (zahl>1000):
            print("¦", end = '')
        else:
            if (zahl>100):
                print(" ¦", end = '')
            else:
             print("  ¦", end = '')
    print("")

def eingabe_ueberpruefen(x,y):
    try:
        x=int(x)
        y=int(y)
        if (x>0 and x<=5 and y>0 and y<=5):
            return True
        else:
            print("Es muessen zahlen zwischen 1 und 5 sein.")
            return False
    except:
        print("Natuerliche Zahlen du Depp!!!")
        return False 

def eingabe():
    eingabeok = False
    while not eingabeok:
        tasteneingabe = input("Welches Feld soll geleert werden:")
        if (not " " in tasteneingabe):
            x, y = tasteneingabe[0], tasteneingabe[1]
            eingabeok = eingabe_ueberpruefen(x, y)
        else:
            x, y = tasteneingabe.split()
            eingabeok = eingabe_ueberpruefen(x, y)
    return int(x), int(y)



def feld_loeschen(x,y):

    if zahlen_matrix[x-1][y]== wert:
        zahlen_matrix[x-1][y]=-1
        feld_loeschen(x-1,y)
    if x < 4 and zahlen_matrix[x+1][y]== wert:
        zahlen_matrix[x+1][y]=-1
        feld_loeschen(x+1,y)
    if y <4 and zahlen_matrix[x][y+1]== wert:
        zahlen_matrix[x][y+1]=-1
        feld_loeschen(x,y)
    if zahlen_matrix[x][y-1]== wert:
        zahlen_matrix[x][y-1]=-1
        feld_loeschen(x,y-1)


    
def feld_auffuellen():
    for j in range(5):
        for i in range (4,0,-1):
            if zahlen_matrix[i][j] == -1:
                ip=i
                weitersuchen=True
                while (ip > 0 and weitersuchen):
                    ip=ip-1
                    if zahlen_matrix[ip][j] > 0:
                        weitersuchen = False
                if weitersuchen:
                    zahlen_matrix[i][j]= 2**(int(random.random()*4))
                else:
                    tmp = zahlen_matrix[i][j]
                    zahlen_matrix[i][j] = zahlen_matrix[ip][j]
                    zahlen_matrix[ip][j] = tmp

        if zahlen_matrix[0][j] == -1:
            zahlen_matrix[0][j] = 2**(int(random.random()*4))


def spielbar():
    for a in range(n):
        for b in range(n):
            if a > 0:
                if zahlen_matrix[a][b] == zahlen_matrix[a - 1][b]:
                    return True
            if a < n-1:
                if zahlen_matrix[a][b] == zahlen_matrix[a + 1][b]:
                    return True
            if b > 0:
                if zahlen_matrix[a][b] == zahlen_matrix[a][b - 1]:
                    return True
            if b < n-1:
                if zahlen_matrix[a][b] == zahlen_matrix[a][b + 1]:
                    return True
    return False



def feldzeichnen():
    obere_zeile()
    rand()
    for i in range(5):
        leer_zeile()
        dazwischen_zahl(zahlen_matrix[i],i+1)
        leer_zeile()
        rand()


def erlaubter_zug(x, y):
    # check_up
    if x > 0:
        if zahlen_matrix[x - 1][y] == zahlen_matrix[x][y]:
            return True
    # check_down
    if x < n-1:
        if zahlen_matrix[x + 1][y] == zahlen_matrix[x][y]:
            return True
    # check_left
    if y < n-1:
        if zahlen_matrix[x][y + 1] == zahlen_matrix[x][y]:
            return True
    # ckeck_right
    if y > 0:
        if zahlen_matrix[x][y - 1] == zahlen_matrix[x][y]:
            return True
    return False


zahlen_matrix = []
for i in range(5):
    neuezeile=[]
    for j in range(5):
        neuezeile.append(2**(int(random.random()*10)))
    zahlen_matrix.append(neuezeile)

startzeit = time.time()

while True:
    feldzeichnen()
    if not spielbar():
        print("Du hast verloren")
        sys.exit()
    x, y=eingabe()
    x -= 1
    y -= 1

    while not erlaubter_zug(x,y):
        print("Dieser Zug ist ungueltig")
        x, y=eingabe()
        x -= 1
        y -= 1

    aktuellezeit = time.time()
    if aktuellezeit-startzeit > 120.:
        print("Zeit abgelaufen")
        sys.exit()
    global wert
    wert = zahlen_matrix[x][y]
    if wert * 2 >= 1024:
        print("Du hast Gewonnen!!!")
        sys.exit()
    else:
        zahlen_matrix[x][y] = wert * 2

    feld_loeschen(x,y)
#    print("Matrixelement = " + str(zahlen_matrix[1][4]))
    feld_auffuellen()
