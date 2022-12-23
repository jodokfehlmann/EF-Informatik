# Informatik EF-Blog

## Hangman Spiel
Heute haben wir den autrag ein hangman-spiel zu programmieren, wir bekamen dafür zur hilfe code "Schnipsel" die wir zusammensetzen mussten. Einzelne funktionen mussten wir noch selber programmieren.

### Die " Schnipsel "
```
for buchstabe in gesucht:
    if buchstabe not in gefunden:
        return False
return True
```
```
if valid_inp in gesucht:
    gefunden.append(valid_inp)
else:
    falsch_geraten.append(valid_inp)
```
```
print('Falsche Buchstaben:', falsch_geraten)
for buchstabe in gesucht:
    if buchstabe in gefunden:
        print(buchstabe, end=' ')
    else:
        print('_', end=' ')
print('')
```
etc...
daraus habe ich dann das hangman-spiel programmiert.