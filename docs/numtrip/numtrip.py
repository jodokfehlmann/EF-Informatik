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
        print(zahl, end = '')
        print("  ¦", end = '')
    print("")

obere_zeile()
rand()
for i in range(5):
    leer_zeile()
    dazwischen_zahl(zahlen_matrix[i],i+1)
    leer_zeile()
    rand()