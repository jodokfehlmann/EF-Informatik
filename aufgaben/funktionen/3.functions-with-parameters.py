import time # für Funktion sleep()

def count_down(zeit_s):
    '''
    Funktion count_down mit Parameter.
    Der count down läuft so lange, wie lange im Parameter "zeit_s" angegeben wird.
    '''
    for i in range(zeit_s, 0, -1):
        print(i)
        time.sleep(1)
    print("BOOOMMMMM")

# Hauptprogramm liest Zahl von einer Benutzer:in ein und ruft Funktion count_down auf.
eingabe = input("Gib eine Zahl ein: ")
zahl = int(eingabe)
count_down(zahl)
