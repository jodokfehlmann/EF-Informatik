"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[986],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),d=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=d(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},o=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),o=d(t),m=r,c=o["".concat(u,".").concat(m)]||o[m]||p[m]||a;return t?i.createElement(c,l(l({ref:n},h),{},{components:t})):i.createElement(c,l({ref:n},h))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=o;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}o.displayName="MDXCreateElement"},4665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={},l="Numtrip-Blog",s={unversionedId:"numtrip/numtrip",id:"numtrip/numtrip",title:"Numtrip-Blog",description:"Ziel des Spiels:",source:"@site/docs/numtrip/numtrip.md",sourceDirName:"numtrip",slug:"/numtrip/",permalink:"/EF-Informatik/docs/numtrip/",draft:!1,editUrl:"https://github.com/jodokfehlmann/EF-Informatik/tree/main/docs/numtrip/numtrip.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Steckbrief: Jodok Fehlmann",permalink:"/EF-Informatik/docs/about-me"}},u={},d=[{value:"Ziel des Spiels:",id:"ziel-des-spiels",level:2},{value:"Spielfeld Gezeichnet",id:"spielfeld-gezeichnet",level:2},{value:"Erstes Interaktives Element Hinzugef\xfcgt:",id:"erstes-interaktives-element-hinzugef\xfcgt",level:2},{value:"Eingabe Funktion:",id:"eingabe-funktion",level:3},{value:"Werte Leeren in der Matrix:",id:"werte-leeren-in-der-matrix",level:3},{value:"Rundum Werte leeren des Spielfeldes:",id:"rundum-werte-leeren-des-spielfeldes",level:3},{value:"Zahlen rundum wieder auff\xfcllen",id:"zahlen-rundum-wieder-auff\xfcllen",level:2},{value:"Ist es \xfcberhaupt spielbar?",id:"ist-es-\xfcberhaupt-spielbar",level:2},{value:"Ist der ausgew\xe4hlte zug erlaubt?",id:"ist-der-ausgew\xe4hlte-zug-erlaubt",level:2},{value:"Gewonnen!!!",id:"gewonnen",level:2},{value:"Herausforderungen",id:"herausforderungen",level:2},{value:"Tipps an andere EF_Sch\xfcler:",id:"tipps-an-andere-ef_sch\xfcler",level:2},{value:"Top-Down entwurf",id:"top-down-entwurf",level:2}],h={toc:d};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"numtrip-blog"},"Numtrip-Blog"),(0,r.kt)("h2",{id:"ziel-des-spiels"},"Ziel des Spiels:"),(0,r.kt)("p",null,"In diesem Spiel geht es darum, eine m\xf6glichst hohe Zahl in einem Feld zu erreichen, mit der Einschr\xe4nkung, dass man nur ein Feld verdoppeln kann, wenn es ein Nachbarfeld mit dem gleichen Wert gibt. Das macht das Spiel ziemlich schwierig in gewissen Situationen. Es ist vergleichbar mit dem 2048 Spiel, welches fast jeder kennt."),(0,r.kt)("h1",{id:"umsetzung-des-spiels"},"Umsetzung des Spiels"),(0,r.kt)("p",null,"Die Voraussetzungen halten sich bei diesem Spiel in Grenzen. Das Einzige, was man braucht, ist Python, das auf seinem Computer installiert ist. Hier der Link zum Herunterladen: ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"https://www.python.org/downloads/"),"\nDa das Spiel nur im Terminal l\xe4uft, ist dies die einzige Installation, die es braucht, um es spielen zu k\xf6nnen."),(0,r.kt)("h2",{id:"spielfeld-gezeichnet"},"Spielfeld Gezeichnet"),(0,r.kt)("p",null,'Als Hausaufgabe habe ich mein Spielfeld "gezeichnet", das so aussieht:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"      1      2      3      4      5\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n1 \xa6   2  \xa6  32  \xa6  16  \xa6   8  \xa6   8  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n2 \xa6   4  \xa6  26  \xa6   8  \xa6   2  \xa6   1  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n3 \xa6   4  \xa6   4  \xa6  16  \xa6   4  \xa6   2  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n4 \xa6   2  \xa6   8  \xa6   1  \xa6   4  \xa6   1  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n5 \xa6   2  \xa6   4  \xa6   4  \xa6   4  \xa6   4  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n")),(0,r.kt)("p",null,"Ich habe das Design einfach mit einzelnen Funktionen erstellt, die zum Beispiel den oberen Rand oder eine Zwischenzeile zeichnen. Ich bin sehr zufrieden mit meinem Design."),(0,r.kt)("h2",{id:"erstes-interaktives-element-hinzugef\xfcgt"},"Erstes Interaktives Element Hinzugef\xfcgt:"),(0,r.kt)("h3",{id:"eingabe-funktion"},"Eingabe Funktion:"),(0,r.kt)("p",null,"Als Hausaufgabe habe ich das erste interaktive Element zu unserem Spiel Numtrip hinzugef\xfcgt. Mit diesem Element kann man ein Feld ausw\xe4hlen, indem man eine x,y-Koordinate eingibt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def eingabe():\n    x,y=input("Welches Feld soll geleert werden: ").split()\n    return int(x),int(y)\n')),(0,r.kt)("p",null," Ich habe die Funktion erstellt, die den Benutzer nach zwei Zahlen fragt. Die Benutzer gibt die Zahlen durch Trennung mittels eines Kommas ein. Mit der Methode ",(0,r.kt)("inlineCode",{parentName:"p"},".split()")," am Ende des Inputs kann ich die beiden Zahlen aufteilen, ohne den Benutzer zweimal zu fragen. Das Return am Schluss wandelt die eingegebenen Strings in integers um."),(0,r.kt)("h3",{id:"werte-leeren-in-der-matrix"},"Werte Leeren in der Matrix:"),(0,r.kt)("p",null,"Meine Idee war, dass ich eine -1 in die Matrix schreibe an der Stelle, wo der Benutzer das Feld leeren soll. Sp\xe4ter mache ich einfach beim Print-Befehl, dass falls es eine negative Zahl ist, es einen Leerschlag macht, um die Zahl zu l\xf6schen. Das sieht dann etwa so aus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"zahlen_matrix[x-1][y-1]=-1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"if (zahl<0):\n            print(\" \",end = '')\n")),(0,r.kt)("h3",{id:"rundum-werte-leeren-des-spielfeldes"},"Rundum Werte leeren des Spielfeldes:"),(0,r.kt)("p",null,"Dies ist der erste Algorithmus, den ich programmiert habe. Er speichert zuerst den Wert des Feldes in der Variablen wert. Danach schaut er, welches Feld rundum den selben Wert hat und springt zu diesem Feld und geht diese ganze Prozedur noch einmal durch, um alle m\xf6glichen Nachbarfelder auch aufzudecken. Dieser Abschnitt k\xf6nnte etwa so aussehen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def feld_loeschen(x,y):\n\n    if zahlen_matrix[x-1][y]== wert:\n        zahlen_matrix[x-1][y]=-1\n        feld_loeschen(x-1,y)\n    if x < 4 and zahlen_matrix[x+1][y]== wert:\n        zahlen_matrix[x+1][y]=-1\n        feld_loeschen(x+1,y)\n    if y <4 and zahlen_matrix[x][y+1]== wert:\n        zahlen_matrix[x][y+1]=-1\n        feld_loeschen(x,y)\n    if zahlen_matrix[x][y-1]== wert:\n        zahlen_matrix[x][y-1]=-1\n        feld_loeschen(x,y-1)\n")),(0,r.kt)("p",null,"Hier wird einfach die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"feld_loeschen"),"aufgerufen mit der neuen Position des Spielfelds. "),(0,r.kt)("h2",{id:"zahlen-rundum-wieder-auff\xfcllen"},"Zahlen rundum wieder auff\xfcllen"),(0,r.kt)("p",null,"Nun m\xfcssen wir von der gel\xf6schten Position aus alle anderen K\xe4stchen, die das ausgew\xe4hlte ber\xfchren, auch noch leeren. Diese m\xfcssen sp\xe4ter wieder aufgef\xfcllt werden. Mein Vorgehen ist, dass ich von unten links anfange, die ganze Matrix durchzugehen und zu \xfcberpr\xfcfen, ob der Wert der Position gleich -1 ist, was bei mir einer leeren Zelle entspricht. Dies k\xf6nnte etwa so aussehen: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def feld_auffuellen():\n    for j in range(5):\n        for i in range (4,0,-1):\n            if zahlen_matrix[i][j] == -1:\n                ip=i\n                weitersuchen=True\n                while (ip > 0 and weitersuchen):\n                    ip=ip-1\n                    if zahlen_matrix[ip][j] > 0:\n                        weitersuchen = False\n                if weitersuchen:\n                    zahlen_matrix[i][j]= 2**(int(random.random()*4))\n                else:\n                    tmp = zahlen_matrix[i][j]\n                    zahlen_matrix[i][j] = zahlen_matrix[ip][j]\n                    zahlen_matrix[ip][j] = tmp\n\n        if zahlen_matrix[0][j] == -1:\n            zahlen_matrix[0][j] = 2**(int(random.random()*4))\n")),(0,r.kt)("p",null,"Dazu wird auch noch gerade die obere Spalte immer, falls sie leer ist mit Zufallszahlen generiert. "),(0,r.kt)("h2",{id:"ist-es-\xfcberhaupt-spielbar"},"Ist es \xfcberhaupt spielbar?"),(0,r.kt)("p",null,"Wir m\xfcssen unbedingt, bevor der Spieler erneut spielen kann, \xfcberpr\xfcfen, ob es \xfcberhaupt spielbar ist. Das hei\xdft, man muss schauen, ob es mindestens ein Feld gibt, welches rechts, links, oben oder unten denselben Wert hat, wie das aktuelle Feld. Dieser Teil des Codes ist mit der Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"spielbar()")," gemacht. Der Code selbst w\xfcrde vermutlich \xe4hnlich wie die obigen Beispiele aussehen, indem es durch die Matrix geht und pr\xfcft, ob es Nachbarfelder mit demselben Wert gibt. "),(0,r.kt)("h2",{id:"ist-der-ausgew\xe4hlte-zug-erlaubt"},"Ist der ausgew\xe4hlte zug erlaubt?"),(0,r.kt)("p",null,"Ein weiterer wichtiger Schritt ist auch zu \xfcberpr\xfcfen, ob der Spieler ein erlaubtes Feld ausgew\xe4hlt hat. Er darf nur ein Feld w\xe4hlen, welches auch mindestens auf einer Seite ein Feld desselben Werts existiert. Dies wird mit der Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"erlaubter_zug()")," \xfcberpr\xfcft. Diese k\xf6nnte etwa so aussehen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def erlaubter_zug(x, y):\n    # check_up\n    if x > 0:\n        if zahlen_matrix[x - 1][y] == zahlen_matrix[x][y]:\n            return True\n    # check_down\n    ...\n")),(0,r.kt)("p",null,"etc... sie checkt dann noch alle anderen Seiten."),(0,r.kt)("h2",{id:"gewonnen"},"Gewonnen!!!"),(0,r.kt)("p",null,"Bei mir hat der Spieler gewonnen, wenn er es innerhalb von 2 Minuten geschafft hat, mindestens ein Feld auf ",(0,r.kt)("inlineCode",{parentName:"p"},"1024")," zu bringen. Dieses Ziel ist erreichbar, aber man muss gut im Spiel sein, um es zu erreichen.\nDies k\xf6nnte man z.B. mit einer Timer-Funktion tracken und am Ende des Spiels \xfcberpr\xfcfen, ob das Ziel erreicht wurde."),(0,r.kt)("h1",{id:"herausforderungen-und-tipps"},"Herausforderungen und Tipps:"),(0,r.kt)("h2",{id:"herausforderungen"},"Herausforderungen"),(0,r.kt)("p",null,"Manchmal hat es etwas Zeit gebraucht bis alles ging aber grosse Herausforderungen gab es keine. Manchmal habe ich den Lehrer um einen Tipp gefragt und es ging dann immer. "),(0,r.kt)("h2",{id:"tipps-an-andere-ef_sch\xfcler"},"Tipps an andere EF_Sch\xfcler:"),(0,r.kt)("p",null,"Mein haupt Tipp w\xe4re immer der Lektion etwas im voraus zu sein, damit man am Schluss nicht in den Stress kommt und halt Zuhause auch arbeiten. Den gr\xf6sstem Teil habe ich Zuhause geschrieben da ich in den Lektionen unf\xe4hig bin Effizient zu arbeiten haha. Das Liegt aber warschweinlich haupts\xe4chlich an mir."),(0,r.kt)("h2",{id:"top-down-entwurf"},"Top-Down entwurf"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6174).Z,width:"2422",height:"744"})))}p.isMDXComponent=!0},6174:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/topdown-7372753d074e5090a89cdde58fcd8ddf.png"}}]);