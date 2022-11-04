zahlen_matrix = [
    [2, 4, 16, 8, 8],
    [4, 26, 8, 2, 1],
    [4, 4, 16, 4, 2],
    [2, 8, 1, 4, 1],
    [2, 4, 4, 4, 4]
]

#print(zahlen_matrix)
def oberezeile():
    print(f"      1     2      3      4      5    ")

def rand():
    print(f"  +------+------+------+------+------+")

def leerzeile():
    print(f"  ¦      ¦      ¦      ¦      ¦      ¦")


def dazwischen_zahl(zahlenliste):

    print("1 ¦", end = '')
    for zahl in zahlenliste:
        if (zahl<10):
            print(" ", end = '')
        print("  ", end = '')
        print(zahl, end = '')
        print("  ¦", end = '')
    print("")

oberezeile()
rand()
for i in range(5):
    leerzeile()
    dazwischen_zahl(zahlen_matrix[i])
    leerzeile()
    rand()