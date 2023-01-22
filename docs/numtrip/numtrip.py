import random

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
            print("Es müssen zahlen zwischen 1 und 5 sein.")
            return False
    except:
        print("Natürliche Zahlen du Depp!!!")
        return False 


def eingabe():
    eingabeok = False
    while not eingabeok:
        tasteneingabe=input("Welches Feld soll geleert werden:")
        if (not " " in tasteneingabe):
            x, y = tasteneingabe[0], tasteneingabe[1]
            eingabeok=eingabe_ueberpruefen(x,y)
        else:
            x,y=tasteneingabe.split()
            eingabeok=eingabe_ueberpruefen(x,y)
    return int(x),int(y)


def feld_löschen(x,y):
    global wert
    if zahlen_matrix[x-1][y]== wert:
        zahlen_matrix[x-1][y]=-1
        feld_löschen(x-1,y)
    if x < 4 and zahlen_matrix[x+1][y]== wert:
        zahlen_matrix[x+1][y]=-1
        feld_löschen(x+1,y)
    if y <4 and zahlen_matrix[x][y+1]== wert:
        zahlen_matrix[x][y+1]=-1
        feld_löschen(x,y)
    if zahlen_matrix[x][y-1]== wert:
        zahlen_matrix[x][y-1]=-1
        feld_löschen(x,y-1)

def spielbar():
    for a in range(5):
        for b in range(5):
            if zahlen_matrix[a][b] == -1:
                return True

            check_left = a > 0 and zahlen_matrix[a][b] == zahlen_matrix[a-1][b]
            check_right = a < 4 and zahlen_matrix[a][b] == zahlen_matrix[a+1][b]
            check_up = b > 0 and zahlen_matrix[a][b] == zahlen_matrix[a][b-1]
            check_down = b < 4 and zahlen_matrix[a][b] == zahlen_matrix[a][b+1]

            if check_left or check_right or check_up or check_down:
                return True
    return False


    
def feld_auffüllen():
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



def feldzeichnen():
    obere_zeile()
    rand()
    for i in range(5):
        leer_zeile()
        dazwischen_zahl(zahlen_matrix[i],i+1)
        leer_zeile()
        rand()

def ist_loesachbar(zahlen_matrix, x, y):
    # check_up
    if x > 0 and zahlen_matrix[x-1][y] == zahlen_matrix[x][y]:
        return True
    # check_down
    if x < 4 and zahlen_matrix[x+1][y] == zahlen_matrix[x][y]:
        return True
    # check_left
    if y < -1 and zahlen_matrix[x][y+1] == zahlen_matrix[x][y]:
        return True
    # ckeck_right
    if y > 0 and zahlen_matrix[x][y-1] == zahlen_matrix[x][y]:
        return True
    else:
        return False


zahlen_matrix = []
for i in range(5):
    neuezeile=[]
    for j in range(5):
        neuezeile.append(2**(int(random.random()*6)))
    zahlen_matrix.append(neuezeile)

        
while True:
    x, y=eingabe()
    global wert
    x -= 1
    y -= 1
    wert = zahlen_matrix[x][y]
    if wert*2 >= 2048:
        print("Du hast Gewonnen!!!")
    else: 
        zahlen_matrix[x][y]= wert*2

    if ist_loesachbar(zahlen_matrix, x, y):
        feld_löschen(x,y)
        	
    else:
        print("Du kannst dieses feld nicht löschen")
        eingabe()
    
    # print(zahlen_matrix)
    feld_auffüllen()
    feldzeichnen()
    if not spielbar():
        print("Du hast verlorem")