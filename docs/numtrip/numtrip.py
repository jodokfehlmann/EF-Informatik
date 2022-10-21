zahlen_matrix = [
    [2, 4, 1, 8, 8],
    [4, 2, 8, 2, 1],
    [4, 4, 16, 4, 2],
    [2, 8, 1, 4, 1],
    [2, 4, 4, 4, 4]
]

print(zahlen_matrix)

def rand():
    print(f"+------+------+------+------+------+")

def leerzeile():
    print(f"¦      ¦      ¦      ¦      ¦      ¦")


def dazwischen_zahl(zahlenliste):
    print("¦", end = '')
    for zahl in zahlenliste:
        if (zahl<10):
            print(" ", end = '')
        print("  ", end = '')
        print(zahl, end = '')
        print("  ¦", end = '')
    print("")


rand()
for i in range(5):
    leerzeile()
    dazwischen_zahl(zahlen_matrix[i])
    leerzeile()
    rand()