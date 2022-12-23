import time # für Funktion sleep()

def count_down():
    '''
    Funktion count_down.
    Enthält die Anweisungen für einen count_down. Die Benutzer:in kann angeben, wie lange
    der count_down läuft.
    '''
    eingabe = input("Gib eine Zahl ein: ") # Variable eingabe erhält den Text zugewiesen, welchen die Benutzer:in auf der Konsole eingibt
    zahl = int(eingabe)                    # Funktion int(...) wandelt den Wert von Eingabe in eine ganze Zahl um
    for i in range(zahl, 0, -1):
        print(i)
        time.sleep(1)
    print("BOOOMMMMM")

# Hauptprogramm ruft Funktion count_down auf.
count_down()
