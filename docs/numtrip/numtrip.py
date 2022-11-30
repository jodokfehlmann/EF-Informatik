zahlen_matrix = [
    [2, 4, 16, 8, 8],
    [4, 26, 8, 2, 1],
    [4, 4, 16, 4, 2],
    [2, 8, 1, 4, 1],
    [2, 4, 4, 4, 4]
]

#print(zahlen_matrix)
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
        if (zahl<0):
            print(" ",end = '')
        else:
            print(zahl, end = '')
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
            print("Zwei getrennte Zahlen eingeben")
        else:
            x,y=tasteneingabe.split()
            eingabeok=eingabe_ueberpruefen(x,y)
    return int(x),int(y)

def auswerten(x,y):
    obere_zeile()
    rand()
    zahlen_matrix[x-1][y-1]=-1
    for i in range(5):
        leer_zeile()
        dazwischen_zahl(zahlen_matrix[i],i+1)
        leer_zeile()
        rand()
while True:
    x,y=eingabe()
    auswerten(x,y)