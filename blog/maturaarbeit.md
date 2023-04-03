# Bau eines Gletschervermessendes UAV

# GPS Trubleshooting
Bei meiner Maturaarbeit möchte ich anhand eines Lidars einen Gletscher vermessen und aus den Messwerten eine dreidimensionale Karte des vermessenen Gebiets erstellen. Für diese Aufgabe ist es sehr wichtig, dass die Referenzwerte der Höhe des UAVs (unmanned aerial vehicle) so genau wie möglich sind, da die Höhe des Flugobjekts je nach Flugverhalten und verschiedenen Wetterbedingungen schwanken kann, was ein kritischer Punkt ist.

Deshalb muss ich ständig die genaue Höhe über dem Meer wissen, auf welchem mein Flugobjekt sich befindet. Ich werde das mithilfe eines GPS machen, jedoch ist das Problem, dass GPS-Höhenmessungen oft nur auf etwa einen Meter genau sind, was für meine Zwecke nicht ausreichend ist.

Diese Ungenauigkeit von GPS-Messungen liegt größtenteils am Wetter, das heißt, wenn die Wetterlage neblig oder gar regnerisch ist, brauchen die GPS-Daten länger, um zu meinem Empfänger zu gelangen. Aus diesem Grund werde ich während der nächsten Monate bis Anfang Juli jeden Tag Druck, Feuchtigkeit, Temperatur und alle möglichen Werte des GPSs messen, um herauszufinden, was die Abweichung ist und wie ich diese berücksichtigen kann.

Dazu habe ich einen Neo 6m v2 GPS und einen BME280-Sensor an meinen Raspberry Pi 2 angeschlossen und ein kleines Programm geschrieben, welches alle Werte in einer Datei abspeichert. Diese Datei werde ich später zur Auswertung der Daten verwenden.

Hier ist mein Programm zu sehen, es speichert einfach die Rohdaten aller Sensoren. Das Trennen der Werte werde ich mich später konzentrieren, da ich so schnell wie möglich anfangen möchte, so viele Messwerte wie möglich zu speichern. Das Programm läuft auf meinem Raspberry Pi 2.

 ```py
import smbus2
import bme280
import sys
import time
import serial

port = 1
address = 0x76
bus = smbus2.SMBus(port)
calibration_params = bme280.load_calibration_params(bus, address)
serial_port = serial.Serial('/dev/serial0', 9600, timeout=1)
filename = "gps_bme280.log"
f = open(filename,"a")

while True:
    try:
        gps_data = serial_port.readline().decode("iso-8859-1")
        data = bme280.sample(bus, address, calibration_params)
        f.write(str(data.pressure))
        f.write(str(data.humidity))
        f.write(str(data.temperature))
        f.write(gps_data)
    except KeyboardInterrupt:
        f.close()
        sys.exit(0)
 ```

Die Librarys müssen wie folgt auf dem Raspberry pi 2 isntalliert werden:

```py
sudo pip3 install "name der library"
 ```

und die des BME280 wie folgt:
```py
sudo apt-get install i2c-tools python-pip
 ```

da der BME280 sich auf einem i2C befindet kann man mit diesem befehl schauen auf welchem bus er sich befindet:
```py
i2cdetect -y 1
 ```
das kommt dan heraus:

```py
       0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
  00:          -- -- -- -- -- -- -- -- -- -- -- -- --
  10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  70: -- -- -- -- -- -- 76 --
 ```
Sobald ich genügend Messdaten gesammelt habe, werde ich sie in ein geeignetes Format konvertieren und analysieren, um die Abweichungen der GPS-Höhenmessungen zu bestimmen und die benötigten Korrekturen vorzunehmen.

eine zeile rohaten sieht wie folget aus:

```py
940.235597492876346.15098651792255418.611494287196546$GPGGA,192515.00,4711.27633,N,00706.26218,E,1,06,1.18,689.8,M,47.2,M,,*59
 ```
"Mit den |||| habe ich die Daten übersichtlicher gemacht. Die Punkte stehen jeweils bis zum nächsten Wert.

* Druck in hpa
* Feuchtigkeit in %
* Temperatur in grad C
* Uhrzeit UTC Stunde
* Uhrzeit UTC Minute
* Uhrzeit UTC Sekunde
* Longitude
* Latitude
* Höhe über meer m.ü.M

```py
940.2355974928763||||46.150986517922554||||18.611494287196546||||$GPGGA,||||19||||25||||15||||.00,||||4711.27633,N||||,00706.26218,E||||,1,06,1.18,||||689.8,M||||,47.2,M,,*59
 ```
Was ich jetzt noch machen muss, ist die Daten auf einer HDD zu speichern anstatt auf der eingebauten SD-Karte, da dies viel Platz benötigt und es praktischer ist, um die Daten auf einem anderen Computer auszuwerten. Dazu muss ich dem Pi noch ein Gehäuse machen, damit ich ihn nach draußen stellen kann, um möglichst dieselben Verhältnisse wie beim Flug zu haben. Das heißt, ich brauche eine klare Sicht zum Himmel, um möglichst viele Satelliten empfangen zu können.

Um sicherzustellen, dass der Raspberry Pi nicht aufhört zu messen, habe ich eine Powerbank zwischen der Stromversorgung des Pi eingesteckt. Bei uns gibt es viele Stromausfälle und es wäre sehr unpraktisch, wenn die Messungen unterbrochen werden würden.