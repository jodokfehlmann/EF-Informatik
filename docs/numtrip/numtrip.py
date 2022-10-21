zahlen_matrix = []
zahlen_matrix.append([64,4,16,32,8])
zahlen_matrix.append([8,16,64,8,32])
zahlen_matrix.append([8,16,64,8,32])
zahlen_matrix.append([2,4,16,32,8])
zahlen_matrix.append([8,16,64,8,32])

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