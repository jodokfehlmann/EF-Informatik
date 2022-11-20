# Was sind Listen?

Listen sind wie tabellen mit spalten inwelchen man werte speichern kann, das ist sehr wichtig wenn man zahlen oder aber auch wörter speichern will. Daraus kann man auch zwei dimensionale listen machen:

## 1D liste
 ```
noten = [4.5, 5, 3.5, 5.5]
 ```

## 2D Listen

 ```
[
    [1, 2, 3], # Zeile
    [4, 5, 6], # Zeile
    [7, 8, 9], # Zeile
]

# oder besser dargestellt
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 ```

## Wichtige befehle für listen:

``` 
last = noten.pop() #letztes element entfernen
noten.append(5) # eine fünf anhängen an die liste
noten.sort() # sortieren klein > gross
