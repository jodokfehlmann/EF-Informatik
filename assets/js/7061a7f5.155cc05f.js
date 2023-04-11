"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[935],{3543:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/22-12-02-arbeiten-an-numtrip","metadata":{"permalink":"/EF-Informatik/22-12-02-arbeiten-an-numtrip","editUrl":"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/22-12-02-arbeiten-an-numtrip.md","source":"@site/blog/22-12-02-arbeiten-an-numtrip.md","title":"Auftrag Informatik EF","description":"1.","date":"2023-04-11T03:59:03.000Z","formattedDate":"11. April 2023","tags":[],"readingTime":1.33,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Wie Authentifiziert man einen Benutzer:","permalink":"/EF-Informatik/Beutzer_autentizifiren"}},"content":"## 1.\\nIch habe als allererstes mit Luis meinen code besprochen, beide funktionnieren sehr gut und erf\xfcllen die aufgabe jedoch ein bisschen anders. Ich finde meinen code \xfcbersichtlicher. Ich hatte am mittwoch meine hasaufgaben gemacht. Herr Hofer hatte mir geholfen bei einem kleinen problem.\\n## 2.\\nIch habe ein problem behoben an meinem code was bis anhin nicht klappte; n\xe4hmlich es ging nicht wenn ich zahlen eingab welche gr\xf6sser als 100 sind. Also einfach die darstellung war nicht sch\xf6n... jetzt ist es gut. Das einzige was noch zu verbessern w\xe4re sind die zahlen die gr\xf6sser als 1000 sind, bei denen schaut es noch nicht optimal aus.\\n\\n```py\\n      1      2      3      4      5    \\n  +------+------+------+------+------+\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n1 \xa6  32  \xa6   4  \xa6  16  \xa6   8  \xa6   8  \xa6\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n  +------+------+------+------+------+\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n2 \xa6   4  \xa6  32  \xa6   8  \xa6   2  \xa6   1  \xa6\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n  +------+------+------+------+------+\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n3 \xa6   4  \xa6   4  \xa6  1024\xa6   4  \xa6   2  \xa6\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n  +------+------+------+------+------+\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n4 \xa6   2  \xa6   8  \xa6  16  \xa6   4  \xa6  16  \xa6\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n  +------+------+------+------+------+\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n5 \xa6   2  \xa6  512 \xa6   4  \xa6   4  \xa6   4  \xa6\\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\\n  +------+------+------+------+------+\\n```\\n\\n## 3.\\nIch weiss nicht was ich noch machen k\xf6nnte... ich habe mir \xfcberlegt noch farben f\xfcr die unerschiedlichen zahlen zu machen sonst w\xfcsste ich nicht was machen."},{"id":"/Beutzer_autentizifiren","metadata":{"permalink":"/EF-Informatik/Beutzer_autentizifiren","editUrl":"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/Beutzer_autentizifiren.md","source":"@site/blog/Beutzer_autentizifiren.md","title":"Wie Authentifiziert man einen Benutzer:","description":"Letzte Woche haben wir in Node-RED einen bereits existierenden Flow eingef\xfcgt, der zwei HTML-Seiten enth\xe4lt: eine welcome.html und eine login.html. Der Aufbau ist ziemlich simpel doch wir konnten alles auf der OFI seite herunterladen un din unseren flow importieren dadurch mussten wir nur noch unsere gew\xfcnschten \xc4ndern.","date":"2023-04-11T03:59:03.000Z","formattedDate":"11. April 2023","tags":[],"readingTime":1.21,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Auftrag Informatik EF","permalink":"/EF-Informatik/22-12-02-arbeiten-an-numtrip"},"nextItem":{"title":"Subway Scientists CanSat Projekt","permalink":"/EF-Informatik/cansat_2023"}},"content":"Letzte Woche haben wir in Node-RED einen bereits existierenden Flow eingef\xfcgt, der zwei HTML-Seiten enth\xe4lt: eine __welcome.html__ und eine __login.html__. Der Aufbau ist ziemlich simpel doch wir konnten alles auf der OFI seite herunterladen un din unseren flow importieren dadurch mussten wir nur noch unsere gew\xfcnschten \xc4ndern.\\n\\n![](./login_website.jpg)\\n\\nDie Login-Funktion sucht einfach in der Datenbank nach Benutzernamen und Passwort und \xfcberpr\xfcft, ob sie \xfcbereinstimmen. Dazu wird dies in den Cookies gespeichert, daher sieht das Set-Cookie so aus:\\n ```py\\nconst { name, password } = msg.payload;\\nconst user = flow.get(name.toLowerCase());\\n\\nif (user) {\\n    if (password == user.pw) {\\n        user.secret = Math.round(9999 * Math.random());\\n        msg.cookies =\\n        {\\n            secret: user.secret,\\n            name: name\\n        }\\n        flow.set(name.toLowerCase(), user);\\n    }\\n}\\n\\n\\nreturn msg;\\n ```\\n\\nDie Login Funktion l\xf6scht einfach den cookie und leitet uns and die entscprechende seite weiter also die Wilkommensseite.\\n\\nDas Programmieren in JavaScript ist fast identisch mit Python, deshalb war es f\xfcr mich auf den ersten Blick ziemlich verst\xe4ndlich.\\n\\nDazu haben wir ganz oben eine Funktion erstellt, die als Datenbank f\xfcr Benutzernamen und Passw\xf6rter dient. Sie sieht so aus:\\n ```py\\nflow.set(\\n    \\"johnny\\",\\n    {\\n        pw: \\"qwert\\"\\n    }\\n)\\nflow.set(\\n    \\"maria\\",\\n    {\\n        pw: \\"asdf\\"\\n    }\\n\\n)\\nreturn msg;\\n ```\\nHier wurden den Benutzern Johnny und Maria jeweils ein Passwort festgelegt. Diese werden dann beim Login \xfcberpr\xfcft. Das Problem ist jedoch, dass man ein Passwort niemals einfach so abspeichern darf. Man muss immer nur den Hashwert abspeichern, da sonst bei einem Datenleck alle Benutzernamen und Passw\xf6rter ver\xf6ffentlicht werden k\xf6nnten."},{"id":"/cansat_2023","metadata":{"permalink":"/EF-Informatik/cansat_2023","editUrl":"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/cansat_2023.md","source":"@site/blog/cansat_2023.md","title":"Subway Scientists CanSat Projekt","description":"Wer sind wir?","date":"2023-04-11T03:59:03.000Z","formattedDate":"11. April 2023","tags":[],"readingTime":8.305,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Wie Authentifiziert man einen Benutzer:","permalink":"/EF-Informatik/Beutzer_autentizifiren"},"nextItem":{"title":"Informatik EF-Blog","permalink":"/EF-Informatik/hangman"}},"content":"## Wer sind wir?\\nWir sind eine Gruppe von 6 Sch\xfclern aus dem Gymnasium Biel Bienne et Jura Bernois. Wir sind in der Klasse 24K, einer Phyisk und Anwendungen der Mathematik Klasse. Im letzen Herbst haben wir uns entschieden, am Cansat Wettbewerb teilzunehmen und wir sind alle sehr motiviert f\xfcr dieses Projekt.\\n![](./gruppenfot_vor_start.jpg)\\nVon links nach rechts:\\n\\n---\\n\\n* Luis Carlos Garza Cisneros\\n* Miguel von B\xfcren\\n* Mathieu Sprenger\\n* Jodok Fehlmann\\n* Gabriel Mariethoz\\n* Benjamin Bakaus\\n\\n---\\n\\n## Was ist CanSat kurzgefasst?\\n\\nCanSat ist ein Wettbewerb, bei dem Teams aus Sch\xfclern oder Studenten die Aufgabe haben, einen miniaturisierten Satelliten in Form einer Blechdose zu entwerfen, zu bauen und zu starten. Das Ziel ist es, die F\xe4higkeiten der Teilnehmer im Bereich der Ingenieurwissenschaften und der Raumfahrttechnologie zu f\xf6rdern und zu entwickeln.\\n\\nDie Blechdose, die als Plattform f\xfcr den Satelliten dient, hat eine Gr\xf6\xdfe von 66x111mm und das maximale bzw. minimale Startgewicht ist auf 300 bzw. 350 Gramm festgelegt. Innerhalb dieser Grenzen m\xfcssen die Teilnehmer eine Vielzahl von Systemen und Sensoren unterbringen, die notwendig sind, um verschiedene Aufgaben zu erf\xfcllen, wie z.B. Messung von Umweltparametern, Bildaufnahmen aus der Luft oder der Einsatz von Robotern.\\n\\nDie Teilnehmer haben die Freiheit, das Design und die Funktionalit\xe4t des CanSat zu bestimmen, solange es die technischen und physischen Grenzen der Plattform einh\xe4lt. Die Teams m\xfcssen auch in der Lage sein, ihren Satelliten zu programmieren und zu steuern, um seine Mission zu erf\xfcllen. Nach dem Start wird der CanSat in der Regel mit einem Fallschirm abgeworfen, um eine weiche Landung zu gew\xe4hrleisten.\\n\\n__Der CanSat-Wettbewerb__ bietet den Teilnehmern eine einzigartige Gelegenheit, wertvolle praktische Erfahrungen in der Raumfahrttechnologie und der Zusammenarbeit im Team zu sammeln. Es ist auch eine hervorragende M\xf6glichkeit, ihre F\xe4higkeiten und ihr Wissen zu demonstrieren und ihre Karrierem\xf6glichkeiten in der Wissenschaft und Technologie zu verbessern. Der Wettbewerb wird von verschiedenen Organisationen auf der ganzen Welt organisiert und zieht Teilnehmer aus allen Altersgruppen und Hintergr\xfcnden an, die sich f\xfcr Technologie und Raumfahrt interessieren.\\n [__\ud83d\udc49 CanSat ESA__](https://cansat.esa.int/)\\n\\n\\n# Blog\\n## Was ist unser ziel? \\n\\nWir wollen unserem CanSat die F\xe4higkeit geben, die Daten, die es misst, in Echtzeit auf einen Server hochzuladen, damit man w\xe4hrend des gesamten Fluges verfolgen kann, wo unser Satellit gerade ist und auch die gemessenen Daten sehen kann. Dies sind:\\n\\n---\\n\\n* Temperatur\\n* Druck\\n* Feuchtigkeit\\n* GPS\\n* Beschleunigung\\n---\\n\\n\\n## Elektronik\\nGabriel ist zust\xe4ndig f\xfcr die Elektronik.\\nDas ist unser gesamtes Programm:\\n ```c++\\n#include <Tiny_BME280.h>\\n#include <Wire.h>\\n#include <Adafruit_Sensor.h>\\n#include <MPU6050_light.h>\\n#include <SPI.h>\\n#include <SD.h>\\n#include <FastLED.h>\\n\\nconstexpr int numLeds {2};\\nconstexpr int ledPin {5};\\nconstexpr int buzzerPin {6};\\nconstexpr int buttonPin {7};\\n\\n/* Assign a unique ID to this sensor at the same time */\\nTiny_BME280 bme;\\nFile data;\\nMPU6050 mpu(Wire);\\nCRGB leds[numLeds] {};\\n\\nfloat zeit{};\\nbool status {false};\\n\\nvoid setup() {\\n  // put your setup code here, to run once:\\n  Serial.begin(9600);\\n  while (!Serial);\\n  Wire.begin();\\n\\n  bme.begin(0x76);\\n  mpu.begin();\\n  mpu.calcOffsets(true, true);\\n  SD.begin(4);\\n\\n  data = SD.open(\\"data.csv\\", FILE_WRITE);\\n  delay(5000);\\n  if (data)\\n  {\\n    data.println(\\"Zeit;Temperatur;Feuchtigkeit;Druck;AX;AY;AZ;GX;GY;GZ\\");\\n    data.close();\\n  }\\n  else\\n    Serial.println(\\"Die Datei data.csv hat sich nicht \xf6ffnen wollen\\");\\n\\n  FastLED.addLeds<WS2812, ledPin, GRB>(leds, numLeds);\\n  pinMode(buzzerPin, OUTPUT);\\n  digitalWrite(buzzerPin, LOW);\\n  pinMode(buttonPin, INPUT_PULLUP);\\n\\n  Serial.println(\\"Alle Initialisationen sind gemacht\\");\\n}\\n\\nvoid blink()\\n{\\n  leds[0] = CRGB(255, 0, 0);\\n  leds[1] = CRGB(0, 0, 0);\\n  FastLED.show();\\n  digitalWrite(buzzerPin, HIGH);\\n  if (digitalRead(buttonPin) == 1)\\n    status = true;\\n  delay(500);\\n\\n  leds[0] = CRGB(0, 0, 0);\\n  leds[1] = CRGB(0, 0, 255);\\n  FastLED.show();\\n  digitalWrite(buzzerPin, LOW);\\n  if (digitalRead(buttonPin) == 1)\\n    status = true;\\n  delay(500);\\n}\\n\\nvoid loop() {\\n  // put your main code here, to run repeatedly:\\n  if (status) {\\n    data = SD.open(\\"data.csv\\", FILE_WRITE);\\n\\n    if (data)\\n    {\\n      data.print(zeit);\\n      data.print(\\";\\");\\n      data.print(bme.readTemperature());\\n      data.print(\\";\\");\\n      data.print(bme.readHumidity());\\n      data.print(\\";\\");\\n      data.print(bme.readPressure());\\n      data.print(\\";\\");\\n\\n      mpu.update();\\n      data.print(mpu.getAccX());\\n      data.print(\\";\\");\\n      data.print(mpu.getAccY());\\n      data.print(\\";\\");\\n      data.print(mpu.getAccZ());\\n      data.print(\\";\\");\\n      data.print(mpu.getGyroX());\\n      data.print(\\";\\");\\n      data.print(mpu.getGyroY());\\n      data.print(\\";\\");\\n      data.print(mpu.getGyroZ());\\n      data.print(\\";\\");\\n\\n      data.print(\\"\\\\n\\");\\n    }\\n\\n    else\\n      Serial.println(\\"Gefailed auf die SD-Karte zu schreiben\\");\\n\\n    data.close();\\n    zeit += 0.5;\\n\\n\\n    if (digitalRead(buttonPin) == 0)\\n      status = false;\\n    else if (zeit > 600)\\n      blink();\\n    else if (sqrt(mpu.getAccX() * mpu.getAccX() + mpu.getAccY() * mpu.getAccY() + mpu.getAccZ() * mpu.getAccZ()) > 0.95 && sqrt(mpu.getAccX() * mpu.getAccX() + mpu.getAccY() * mpu.getAccY() + mpu.getAccZ() * mpu.getAccZ()) < 1.05 && zeit > 400)\\n      blink();\\n\\n    delay(500);\\n  }\\n\\n  else\\n    blink();\\n}\\n ```\\n---\\n- SD-Card Module:\\n- VCC/+3.3: 3.3V\\n- GND: Digital GND\\n- CS: 4\\n- CLK: 13  SCK\\n- MOSI: 11 DI\\n- MISO: 12 DO\\n\\n--- \\n- BME280 Sensor:\\n- VCC: 5V\\n- GND: Analog GND\\n- SCL: A5\\n- SDA: A4\\n---\\n- LED and Buzzer:\\n- VCC: 5V\\n- GND: Digital GND\\n- LED: 5\\n- Buzzer: 6\\n---\\n- MPU:\\n- 3.3v\\n- SDA: d9\\n- Scl: d10\\n---\\n\\n![](./plan_fritzing.jpg)\\n\\n## Fallschirm\\nWir haben aus einem alten Fallschirm von unserem Physiklehrer unseren eigenen Fallschirm gen\xe4ht, Luis hat die Berechungen daf\xfcr durchgef\xfchrt, um sicherzustellen, dass der Fallschirm mit einer Geschwingigkeit von etwa 7m/s nach unten fliegt. \\n![](./callculatiosn_parachute.jpg)\\nIn GeoGebra haben wir eine Skizze erstellt, die automatisch die richtige Form des Fallschirms berechnet. Wir haben dies mithilfe unserer oben durchgef\xfchrten Berechnungen gemacht. Auf dem ersten Hebel k\xf6nnen wir die Anzahl der Felder \xe4ndern und auf dem anderen Hebel k\xf6nnen wir den Radius des Fallschirms gem\xe4\xdf den Berechnungen \xe4ndern. Und es zeigt uns die Fl\xe4che des Feldes, die f\xfcr den Fallschirm ben\xf6tigt wird.\\n\\n\\n[__\ud83d\udc49 Geogebra_Parachute__](https://www.geogebra.org/m/fgpmn9gp)\\n\\n\\nDer folgende Bericht gibt Details zu den Ergebnissen unseres selbstgemachten Fallschirms, der von Luis entworfen wurde. Unser Ziel war es, einen Fallschirm zu erstellen, der mit einer Geschwindigkeit von 5m/s sicher absteigen w\xfcrde, ohne das Loch oben auf dem Schirm zu ber\xfccksichtigen. Wir haben uns bei der Berechnung der richtigen Werte und beim N\xe4hen des Fallschirms von GeoGebra unterst\xfctzen lassen. Unser Fallschirm bestand aus acht Feldern, aber wir mussten feststellen, dass ein Feld nicht auf ein A4-Blatt passte.\\n\\nBei unserem ersten Testflug haben wir eine kleinere Version des Fallschirms eingesetzt und mussten feststellen, dass die Abstiegsgeschwindigkeit \xfcber 10 m/s betrug. Dies stellte ein kritisches Risiko f\xfcr unsere Kamera dar, die beim Aufprall auf Beton h\xe4tte zerbrechen k\xf6nnen. Um das Risiko zu minimieren, haben wir den Fallschirm neu entworfen, um einen sanfteren Abstieg zu erm\xf6glichen.\\n\\nUm den neuen Fallschirm zu testen, haben wir ihn auf einen RC-Flieger in ausreichender Gr\xf6\xdfe befestigt und aus etwa 30 Metern H\xf6he abgeworfen. Dabei haben wir eine Abstiegsgeschwindigkeit von 5,2 m/s gemessen, was unserem Ziel sehr nahe kommt. Ein Video des Tests k\xf6nnen Sie unter folgendem Link anschauen:\\n[__\ud83d\udc49 Parachute_test__](https://youtu.be/5CryblZcecw)\\n\\n## CAD zeichnnung:\\nFusion 360 ist eine leistungsstarke __3D-CAD-Software__, die von Autodesk entwickelt wurde. Sie bietet ein umfangreiches Set an Werkzeugen und Funktionen, die es erm\xf6glichen, komplexe 3D-Modelle zu erstellen und zu bearbeiten. Fusion 360 ist insbesondere f\xfcr den Einsatz in der Produktentwicklung und im Maschinenbau optimiert und eignet sich sowohl f\xfcr Anf\xe4nger als auch f\xfcr erfahrene Nutzer. \\n\\nF\xfcr das mechanische Design haben wir uns entschieden, es in Fusion 360 zu skizzieren. Ich (Jodok) habe bereits viel Erfahrung damit. Ich habe es jetzt seit 2 Jahren im Einsatz und habe schon viele Projekte damit realisiert. Wir waren uns nicht sicher, ob wir einen \xd6ffnungsmechanismus ben\xf6tigen, also haben wir einen neuen CanSat entworfen. Jetzt ist er viel robuster und verf\xfcgt \xfcber einen Batteriehalter f\xfcr unsere beiden 18650 Li-Ion-Zellen (blau), einen PCB-Halter (orange) in der Mitte. Wir haben ihn bereits auf unserem Creality Ender 3 v2-Drucker ausgedruckt. Es ist mit PLA gedruckt und hat eine F\xfcllung von 20%. Oben gibt es Platz f\xfcr das SIM 900-Modul und das GPS. Die anderen Komponenten werden direkt auf der PCB gel\xf6tet. Wir m\xfcssen noch ein Geschirr herstellen, an dem der Fallschirm befestigt wird. M\xf6glicherweise ist der Platz f\xfcr die Elektronik etwas knapp bemessen und wir m\xfcssen eine der Li-Ion-Zellen entfernen, was auch funktionieren w\xfcrde und uns immer noch gen\xfcgend Leistung bieten w\xfcrde. Unten ist ein Foto unseres Can-Prototyps, des Dosenmodells mit allen Elektronikkomponenten und hier[__\ud83d\udc49 3D_Design__](https://youtu.be/CeT4FryvV4w)\\nist ein Video, das den Can zeigt.\\n\\n# Finales Design\\nUnser finales Design ist auf dem beigef\xfcgten Foto zu sehen, das am Dienstag, dem 28.03.2023, dem Tag des Starts, aufgenommen wurde. Aufgrund der Abschaltung des 2G-Netzes mussten wir jedoch in der Nacht vom 27. auf den 28. noch viel Arbeit an der Elektronik leisten, da wir sie noch nicht vollst\xe4ndig zusammengebaut hatten. Wir mussten alles auseinandernehmen und neu aufbauen.\\n\\nAm CanSat haben wir zwei Schalter angebracht, um einerseits die Video\xfcbertragung zu aktivieren und andererseits die Aufnahmen der Sensoren auf die SD-Karte zu starten. Wir haben uns f\xfcr diese L\xf6sung entschieden, da der Video-Sender bei l\xe4ngerem Betrieb sehr hei\xdf wird. Dies hatte Auswirkungen auf unsere Messungen, wie sp\xe4ter im Blog erkl\xe4rt wird.\\n![](./schalter.jpg)\\n![](./final_can.jpg)\\n\\n# 28.03.2023 Start\\n## Diagramm Temperatur / Zeit\\nUnser Start verz\xf6gerte sich, da sich unser Fallschirm mit dem einer anderen Gruppe verhedderte und ein Abwurf unm\xf6glich war. Folglich blieb unser CanSat w\xe4hrend einer Viertelstunde eingeschaltet und erw\xe4rmte sich betr\xe4chtlich, was die Enddaten f\xfcr Temperatur und Feuchtigkeit verf\xe4lschte. Die Messwerte lagen mehrere Grad \xfcber dem Normalwert. Wir haben daher die Anfangstemperatur korrigiert und die anderen Werte linear angepasst. Diese Methode erwies sich als genau, da das CanSat w\xe4hrend des Fluges nicht noch hei\xdfer wurde. Aufgrund dessen k\xf6nnen wir uns nicht auf absolute Werte verlassen. Wir haben 25 Grad abgezogen, aber die Kurve zeigt dennoch ein klares Bild. Die Aufstiegs- und Abstiegsdauer sind gut erkennbar. Der Temperaturunterschied zwischen 0 und 200 Metern \xfcber dem Boden betr\xe4gt etwa 6 Grad Celsius. Die Grafik zeigt dies deutlich.\\n![](./temperature_time.jpg)\\n\\n## Diagramm H\xf6he / Zeit\\n\\nUnsere H\xf6he-Zeit-Diagramm zeigt eine hervorragende Darstellung des Auf- und Abstiegs, wobei der Aufstieg schneller verlief als der Abstieg, da unser Fallschirm sehr langsam in der Luft war. Wir haben eine Sinkgeschwindigkeit von 1,28 m/s und eine Gesamtsinkzeit von 143 Sekunden gemessen.\\n![](./hight_time.jpg)\\n\\n# Aufnahmen:\\nW\xe4hrend des Fluges wurde das Ereignis von Miguel von B\xfcren kommentiert und per Instagram Live aufgenommen. Das Video kann nun auf unserem Instagram-Kanal wiedergegeben werden und bietet spannende Einblicke in den Flugverlauf. Wir sind au\xdferdem sehr zufrieden mit der Qualit\xe4t unserer Onboard-Aufnahmen, die ebenfalls sehr gut geworden sind. Am Ende des Fluges konnten wir das CanSat sogar von Hand auffangen, sodass es den Boden nie ber\xfchrte. Das CanSat ist noch vollst\xe4ndig intakt und bereit f\xfcr weitere Fl\xfcge.\\n\\n[__\ud83d\udc49 Instagram-Account__](https://instagram.com/subway_scientists_scs?igshid=YmMyMTA2M2Y=)\\n\\n[__\ud83d\udc49 Onboard-Video__](https://www.youtube.com/embed/0pc0kLKa30c)\\n\\nWir m\xf6chten noch unserem neuen Sponsor danken:\\n\\n## Beyond Gravity"},{"id":"/hangman","metadata":{"permalink":"/EF-Informatik/hangman","editUrl":"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/hangman.md","source":"@site/blog/hangman.md","title":"Informatik EF-Blog","description":"Hangman Spiel","date":"2023-04-11T03:59:03.000Z","formattedDate":"11. April 2023","tags":[],"readingTime":0.44,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Subway Scientists CanSat Projekt","permalink":"/EF-Informatik/cansat_2023"},"nextItem":{"title":"Was sind Listen?","permalink":"/EF-Informatik/listen"}},"content":"## Hangman Spiel\\nHeute haben wir den autrag ein hangman-spiel zu programmieren, wir bekamen daf\xfcr zur hilfe code \\"Schnipsel\\" die wir zusammensetzen mussten. Einzelne funktionen mussten wir noch selber programmieren.\\n\\n### Die \\" Schnipsel \\"\\n```\\nfor buchstabe in gesucht:\\n    if buchstabe not in gefunden:\\n        return False\\nreturn True\\n```\\n```\\nif valid_inp in gesucht:\\n    gefunden.append(valid_inp)\\nelse:\\n    falsch_geraten.append(valid_inp)\\n```\\n```\\nprint(\'Falsche Buchstaben:\', falsch_geraten)\\nfor buchstabe in gesucht:\\n    if buchstabe in gefunden:\\n        print(buchstabe, end=\' \')\\n    else:\\n        print(\'_\', end=\' \')\\nprint(\'\')\\n```\\netc...\\ndaraus habe ich dann das hangman-spiel programmiert."},{"id":"/listen","metadata":{"permalink":"/EF-Informatik/listen","editUrl":"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/listen.md","source":"@site/blog/listen.md","title":"Was sind Listen?","description":"Listen sind wie tabellen mit spalten inwelchen man werte speichern kann, das ist sehr wichtig wenn man zahlen oder aber auch w\xf6rter speichern will. Daraus kann man auch zwei dimensionale listen machen:","date":"2023-04-11T03:59:03.000Z","formattedDate":"11. April 2023","tags":[],"readingTime":0.52,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Informatik EF-Blog","permalink":"/EF-Informatik/hangman"},"nextItem":{"title":"Bau eines Gletschervermessendes UAV","permalink":"/EF-Informatik/maturaarbeit"}},"content":"Listen sind wie tabellen mit spalten inwelchen man werte speichern kann, das ist sehr wichtig wenn man zahlen oder aber auch w\xf6rter speichern will. Daraus kann man auch zwei dimensionale listen machen:\\n\\n## 1D liste\\n ```py\\nnoten = [4.5, 5, 3.5, 5.5]\\n ```\\n\\n## 2D Listen\\n\\n ```py\\n[\\n    [1, 2, 3], # Zeile\\n    [4, 5, 6], # Zeile\\n    [7, 8, 9], # Zeile\\n]\\n\\n# oder besser dargestellt\\n[[1, 2, 3], [4, 5, 6], [7, 8, 9]]\\n ```\\n\\n## Wichtige befehle f\xfcr listen:\\n\\n```py\\nlast = noten.pop() #letztes element entfernen\\nnoten.append(5) # eine f\xfcnf anh\xe4ngen an die liste\\nnoten.sort() # sortieren klein > gross"},{"id":"/maturaarbeit","metadata":{"permalink":"/EF-Informatik/maturaarbeit","editUrl":"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/maturaarbeit.md","source":"@site/blog/maturaarbeit.md","title":"Bau eines Gletschervermessendes UAV","description":"Bei meiner Maturaarbeit m\xf6chte ich anhand eines Lidars einen Gletscher vermessen und aus den Messwerten eine dreidimensionale Karte des vermessenen Gebiets erstellen. F\xfcr diese Aufgabe ist es sehr wichtig, dass die Referenzwerte der H\xf6he des UAVs (unmanned aerial vehicle) so genau wie m\xf6glich sind, da die H\xf6he des Flugobjekts je nach Flugverhalten und verschiedenen Wetterbedingungen schwanken kann, was ein kritischer Punkt ist.","date":"2023-04-11T03:59:03.000Z","formattedDate":"11. April 2023","tags":[],"readingTime":3.62,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Was sind Listen?","permalink":"/EF-Informatik/listen"}},"content":"# GPS Trubleshooting\\nBei meiner Maturaarbeit m\xf6chte ich anhand eines Lidars einen Gletscher vermessen und aus den Messwerten eine dreidimensionale Karte des vermessenen Gebiets erstellen. F\xfcr diese Aufgabe ist es sehr wichtig, dass die Referenzwerte der H\xf6he des UAVs (unmanned aerial vehicle) so genau wie m\xf6glich sind, da die H\xf6he des Flugobjekts je nach Flugverhalten und verschiedenen Wetterbedingungen schwanken kann, was ein kritischer Punkt ist.\\n\\nDeshalb muss ich st\xe4ndig die genaue H\xf6he \xfcber dem Meer wissen, auf welchem mein Flugobjekt sich befindet. Ich werde das mithilfe eines GPS machen, jedoch ist das Problem, dass GPS-H\xf6henmessungen oft nur auf etwa einen Meter genau sind, was f\xfcr meine Zwecke nicht ausreichend ist.\\n\\nDiese Ungenauigkeit von GPS-Messungen liegt gr\xf6\xdftenteils am Wetter, das hei\xdft, wenn die Wetterlage neblig oder gar regnerisch ist, brauchen die GPS-Daten l\xe4nger, um zu meinem Empf\xe4nger zu gelangen. Aus diesem Grund werde ich w\xe4hrend der n\xe4chsten Monate bis Anfang Juli jeden Tag Druck, Feuchtigkeit, Temperatur und alle m\xf6glichen Werte des GPSs messen, um herauszufinden, was die Abweichung ist und wie ich diese ber\xfccksichtigen kann.\\n\\nDazu habe ich einen Neo 6m v2 GPS und einen BME280-Sensor an meinen Raspberry Pi 2 angeschlossen und ein kleines Programm geschrieben, welches alle Werte in einer Datei abspeichert. Diese Datei werde ich sp\xe4ter zur Auswertung der Daten verwenden.\\n\\nHier ist mein Programm zu sehen, es speichert einfach die Rohdaten aller Sensoren. Das Trennen der Werte werde ich mich sp\xe4ter konzentrieren, da ich so schnell wie m\xf6glich anfangen m\xf6chte, so viele Messwerte wie m\xf6glich zu speichern. Das Programm l\xe4uft auf meinem Raspberry Pi 2.\\n\\n ```py\\nimport smbus2\\nimport bme280\\nimport sys\\nimport time\\nimport serial\\n\\nport = 1\\naddress = 0x76\\nbus = smbus2.SMBus(port)\\ncalibration_params = bme280.load_calibration_params(bus, address)\\nserial_port = serial.Serial(\'/dev/serial0\', 9600, timeout=1)\\nfilename = \\"gps_bme280.log\\"\\nf = open(filename,\\"a\\")\\n\\nwhile True:\\n    try:\\n        gps_data = serial_port.readline().decode(\\"iso-8859-1\\")\\n        data = bme280.sample(bus, address, calibration_params)\\n        f.write(str(data.pressure))\\n        f.write(str(data.humidity))\\n        f.write(str(data.temperature))\\n        f.write(gps_data)\\n    except KeyboardInterrupt:\\n        f.close()\\n        sys.exit(0)\\n ```\\n\\nDie Librarys m\xfcssen wie folgt auf dem Raspberry pi 2 isntalliert werden:\\n\\n```py\\nsudo pip3 install \\"name der library\\"\\n ```\\n\\nund die des BME280 wie folgt:\\n```py\\nsudo apt-get install i2c-tools python-pip\\n ```\\n\\nda der BME280 sich auf einem i2C befindet kann man mit diesem befehl schauen auf welchem bus er sich befindet:\\n```py\\ni2cdetect -y 1\\n ```\\ndas kommt dan heraus:\\n\\n```py\\n       0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\\n  00:          -- -- -- -- -- -- -- -- -- -- -- -- --\\n  10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\\n  20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\\n  30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\\n  40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\\n  50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\\n  60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\\n  70: -- -- -- -- -- -- 76 --\\n ```\\nSobald ich gen\xfcgend Messdaten gesammelt habe, werde ich sie in ein geeignetes Format konvertieren und analysieren, um die Abweichungen der GPS-H\xf6henmessungen zu bestimmen und die ben\xf6tigten Korrekturen vorzunehmen.\\n\\neine zeile rohaten sieht wie folget aus:\\n\\n```py\\n940.235597492876346.15098651792255418.611494287196546$GPGGA,192515.00,4711.27633,N,00706.26218,E,1,06,1.18,689.8,M,47.2,M,,*59\\n ```\\n\\"Mit den |||| habe ich die Daten \xfcbersichtlicher gemacht. Die Punkte stehen jeweils bis zum n\xe4chsten Wert.\\n\\n* Druck in hpa\\n* Feuchtigkeit in %\\n* Temperatur in grad C\\n* Uhrzeit UTC Stunde\\n* Uhrzeit UTC Minute\\n* Uhrzeit UTC Sekunde\\n* Longitude\\n* Latitude\\n* H\xf6he \xfcber meer m.\xfc.M\\n\\n```py\\n940.2355974928763||||46.150986517922554||||18.611494287196546||||$GPGGA,||||19||||25||||15||||.00,||||4711.27633,N||||,00706.26218,E||||,1,06,1.18,||||689.8,M||||,47.2,M,,*59\\n ```\\nWas ich jetzt noch machen muss, ist die Daten auf einer HDD zu speichern anstatt auf der eingebauten SD-Karte, da dies viel Platz ben\xf6tigt und es praktischer ist, um die Daten auf einem anderen Computer auszuwerten. Dazu muss ich dem Pi noch ein Geh\xe4use machen, damit ich ihn nach drau\xdfen stellen kann, um m\xf6glichst dieselben Verh\xe4ltnisse wie beim Flug zu haben. Das hei\xdft, ich brauche eine klare Sicht zum Himmel, um m\xf6glichst viele Satelliten empfangen zu k\xf6nnen.\\n\\nUm sicherzustellen, dass der Raspberry Pi nicht aufh\xf6rt zu messen, habe ich eine Powerbank zwischen der Stromversorgung des Pi eingesteckt. Bei uns gibt es viele Stromausf\xe4lle und es w\xe4re sehr unpraktisch, wenn die Messungen unterbrochen werden w\xfcrden."}]}')}}]);