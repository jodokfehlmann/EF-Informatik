'''
Demo: Eindimensionale Listen
'''

# 1) Liste mit Notenwerten erzeugen und Variablen zuweisen
noten = [3.5, 6, 5, 4.5]

# 2) - Ganze Liste anzeigen;
#    - Element mit Index 2 aus der Liste anzeigen
#    - Länge der Liste anzeigen
#    - das letzte Element der Liste anzeigen (egal wie lange die liste gerade ist...)
print(noten)
print(noten[2])
print(len(noten))
print(noten[len(noten) - 1])

# 3) Schleife über alle Elemente der Liste
for note in noten:
    print(note)

# 4) Schleife über alle Elemente der Liste mit Index
# (beginnt bei 0 und endet mit 1 weniger als Länge der Liste)
for index in range(0, len(noten)):
    print(index, ':', noten[index])

# 5) Element mit Index 3 neuen Wert zuweisen
noten[3] = 5.5
print(noten)

# 6) Fehler: Zuweisen zu einem Element mit ungültigem Index (die Liste ist nicht so lang)
# noten[7] = 6

# 7) Ein weiteres Element am Schluss der Liste anhängen
noten.append(5)
print(noten)

# 8) Ein Element vor dem Element mit Index 3 einfügen
noten.insert(3, 4)
print(noten)

# 9) Die Liste aufsteigend sortieren
noten.sort()
print(noten)

# 10) Ein Element an einer bestimmten Stelle aus der Liste entfernen (und zurückgeben)
first = noten.pop(0)
print(first)
print(noten)

# 11) Erstes Element mit dem Wert 6 aus der Liste entfernen
noten.remove(6)
print(noten)

# 12) Funktion aus dem Statistikmodul verwenden, um den Mittelwert der Elemente in der Liste zu berechnen
import statistics
mittelwert = statistics.mean(noten)
print(mittelwert)

# 13) Leere Liste erstellen
noten = []
print(noten)

# 14) Liste mit Strings
noten = ['gut', 'erfüllt', 'mangelhaft', 'erfüllt']
print(noten)
