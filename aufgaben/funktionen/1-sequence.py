import time # für Funktion sleep()

'''
Hauptprogramm.
Enthält die Anweisungen für einen countdown. Die Benutzer:in kann angeben, wie lange
der countdown läuft.
'''

eingabe = input("Gib eine Zahl ein: ")
zahl = int(eingabe)
for i in range(zahl, 0, -1):
    print(i)
    time.sleep(1)
print("BOOOMMMMM")
