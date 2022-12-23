# Numtrip-Blog


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

### Eingabe Funktion
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