import zufallsworte as zufall

gesucht = zufall.zufallswoerter(1)[0]





gefunden = [] # gefundene buxhstabenliste
falsch_geraten = [] # 

def show():
    print('Falsche Buchstaben:', falsch_geraten)
    for buchstabe in gesucht:
        if buchstabe in gefunden:
            print(buchstabe, end=' ')
        else:
            print('_', end=' ')
print('')


def eingabe():
    buchstabe = input('Buchstabe? ') # benutzer gibt buchstaben ein
    if buchstabe.isalpha():
        return buchstabe.lower()
    else:
        print('Das ist kein Buchstabe!')

def auswerten(valid_inp):
    if valid_inp in gesucht:
        gefunden.append(valid_inp)
    else:
        falsch_geraten.append(valid_inp)

def gewonnen():
    for buchstabe in gesucht:
        if buchstabe not in gefunden:
            return False
    return True

def game_over():
    if len(falsch_geraten) > 9:
        print('verloren!!!!!')
    
    return False

def play():
    while not game_over():
        buchstabe = eingabe()
        auswerten(buchstabe)
        print(buchstabe)
        show()
        game_over()
        
play()
