# Numtrip-Blog

## Ziel des Spiels:

In diesem spiel geht es darum eine möglichts hohe zahl in einem feld zu erreichen mit der einschränkung, dass man nur ein feld verdoppeln kann wenn es ein nachbar feld mit dem gleichen wert gibt. Das macht das spiel ziemlich schwierig in gewissen situationen. Es ist vergleichbar mit dem 2048 spiel welches fast jeder kennt. 

# Umsetzung des Spiels
Die voraussetzungen halten sich bei diesem spiel in massen. Das einzige was man braucht ist python installiert auf seinem Computer. Hier der link zum herunterladen: https://www.python.org/downloads/
Da das spiel nur im Terminal läuft ist dies die eizig einstallation die es braucht um es spielen zu können.


## Spielfeld Gezeichnet

Als hausaufgabe habe ich mein spielfeld "gezeichnet" das schaut so aus:
```py
      1      2      3      4      5
  +------+------+------+------+------+
  ¦      ¦      ¦      ¦      ¦      ¦
1 ¦   2  ¦  32  ¦  16  ¦   8  ¦   8  ¦
  ¦      ¦      ¦      ¦      ¦      ¦
  +------+------+------+------+------+
  ¦      ¦      ¦      ¦      ¦      ¦
2 ¦   4  ¦  26  ¦   8  ¦   2  ¦   1  ¦
  ¦      ¦      ¦      ¦      ¦      ¦
  +------+------+------+------+------+
  ¦      ¦      ¦      ¦      ¦      ¦
3 ¦   4  ¦   4  ¦  16  ¦   4  ¦   2  ¦
  ¦      ¦      ¦      ¦      ¦      ¦
  +------+------+------+------+------+
  ¦      ¦      ¦      ¦      ¦      ¦
4 ¦   2  ¦   8  ¦   1  ¦   4  ¦   1  ¦
  ¦      ¦      ¦      ¦      ¦      ¦
  +------+------+------+------+------+
  ¦      ¦      ¦      ¦      ¦      ¦
5 ¦   2  ¦   4  ¦   4  ¦   4  ¦   4  ¦
  ¦      ¦      ¦      ¦      ¦      ¦
  +------+------+------+------+------+
```
Ich habe das einfach mit einzelnen funktion gemacht welche dann zum beispiel den oberen rand bzw eine zwischenzeile zeichnen. Ich bin sehr zufrieden mit meinem design.

## Erstes Interaktives Element Hinzugefügt:

### Eingabe Funktion:
Als Hausaufgabe habe ich das erte interaktive element zu unserem spiel Numtrip hinzugefügt. Mit 
diesem Element kann man ein feld auswählen indem man eine x,y kordinate eingibt.

```py
def eingabe():
    x,y=input("Welches Feld soll geleert werden: ").split()
    return int(x),int(y)
```
 das habe ich mit dieser funktion gemacht. Sie fragt den benutzer um zwei zahlen. Die zwei zahlen werde durch trennung mittels eines kommas eingegeben. Wenn man ein `.split()` am ende eines inputs macht kann man gerade zwei zahlen auf zwei aufteilen ohne dass man den benutzer zwei mal fragen muss.
 das return am schluss macht aus den string noch integers.

### Werte Leeren in der Matrix:

Meine idee war dass ich eine minus eins in die matrix schreibe an der stelle wo der benutzer das feld leeren soll, dann später mache ich einfach beim print befehl dass es falls es eine negativezahl ist einen leerschlag macht um die zahl zu löschen. Das sieht dann etwa so aus. Ich glaube das sollte für alle klar sein was der code macht.
```py
zahlen_matrix[x-1][y-1]=-1
```
```py
if (zahl<0):
            print(" ",end = '')
```

### Rundum Werte leeren des Spielfeldes:

Dies ist der erste algorythmus den ich oprogrammiert habe. Er Speichert zuerst den wert des feldes in der variable `wert` dann schaut er welches feld rundum den selben wert hat und springt zu diesem feld und geht diese ganze prozedur noch einmal durch um allenfalls mögliche nachbarfelder auch aufzudecken. Dieser abschnitt schaut so aus.
```py
def feld_loeschen(x,y):

    if zahlen_matrix[x-1][y]== wert:
        zahlen_matrix[x-1][y]=-1
        feld_loeschen(x-1,y)
    if x < 4 and zahlen_matrix[x+1][y]== wert:
        zahlen_matrix[x+1][y]=-1
        feld_loeschen(x+1,y)
    if y <4 and zahlen_matrix[x][y+1]== wert:
        zahlen_matrix[x][y+1]=-1
        feld_loeschen(x,y)
    if zahlen_matrix[x][y-1]== wert:
        zahlen_matrix[x][y-1]=-1
        feld_loeschen(x,y-1)
```
Hier wird einfach die Funktion `feld_loeschen`aufgerufen mit der neuen Position des Spielfelds. 

## Zahlen rundum wieder auffüllen

Nun müssen wir von der gelöschten position aus alle anderen kästchen welche das auserwählte berühren auch noch leeren. Diese müssen dann später wieder aufgefüllt werden. Mein vorgehen ist dass ich von unten links anfange die ganze matrix durchzugehen und zu überprüfen ob der wert der position gleich -1 ist was bei mir einer leeren zelle entschpricht. Dies Schaut dann so aus. 
``` py
def feld_auffuellen():
    for j in range(5):
        for i in range (4,0,-1):
            if zahlen_matrix[i][j] == -1:
                ip=i
                weitersuchen=True
                while (ip > 0 and weitersuchen):
                    ip=ip-1
                    if zahlen_matrix[ip][j] > 0:
                        weitersuchen = False
                if weitersuchen:
                    zahlen_matrix[i][j]= 2**(int(random.random()*4))
                else:
                    tmp = zahlen_matrix[i][j]
                    zahlen_matrix[i][j] = zahlen_matrix[ip][j]
                    zahlen_matrix[ip][j] = tmp

        if zahlen_matrix[0][j] == -1:
            zahlen_matrix[0][j] = 2**(int(random.random()*4))
```
Dazu wird auch noch gerade die obere spalte immer, falls sie leer ist mit zufallszahlen generiert. 

## Ist es überhaupt spielbar?

Wir müssen unbedingt bevor der spieler erneut spielen kann überprüfen ob es überhaupt spielbar ist, dass heiss man muss schauen ob es mindestens ein Feld gibt welches rechts, links, oben oder unten den selben wert als das Feld hat. Diesen code teil ist mit der funktion `spielbar()` gemacht, ich werde diesen hier nicht einfügen da dies sehr einfach ist. 

## Ist der ausgewählte zug erlaubt?

Was dazu kommt ist auch noch zu überprüfen ob der spieler ein erlaubtes feld angewählt hat. Er darf nur ein feld wählen welches auch mindestens auf einer seite ein feld des selben werts existiert. Dies wird mit der funktion `erlaubter_zug()` überprüft. Deise sieht so aus:
```py
def erlaubter_zug(x, y):
    # check_up
    if x > 0:
        if zahlen_matrix[x - 1][y] == zahlen_matrix[x][y]:
            return True
    # check_down
    ...
```
etc... sie checkt dann noch alle enderen seiten.


## Gewonnen!!!

Bei mir hat der Spieler gewonnen wenn er es geschafft hat innerhalb von 2 minuten mindestens ein feld auf `1024` zu bringen. Dieses ziel ist erreichbar aber man muss genügen dgut im spiel sein uim, es zu erreichen.


# Herausforderungen und Tipps:
## Herausforderungen
Manchmal hat es etwas zeit gebraucht bis alles ging aber grosse herausforderungen gab es keine. Manchmal habe ich den lehrer um einen Tipp gefragt und es ging dann immer. 

## Tipps an andere EF_Schüler:

Mein haupt tipp wäre immer der lektion etwas im voraus zu seine damit man am schluss nicht in den stress kommt und halt zuhause auch arbeiten. Den grösstem teil habe ich zuhause geschrieben da ich in den Lektionen unfähig effizient zu arbeiten haha. Das liegt aber warschweinlich hauptsächlich an mir.

