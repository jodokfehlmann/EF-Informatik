"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={},l="Numtrip-Blog",s={permalink:"/EF-Informatik/numtrip",editUrl:"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/numtrip.md",source:"@site/blog/numtrip.md",title:"Numtrip-Blog",description:"Spielfeld Gezeichnet",date:"2022-12-23T16:32:31.000Z",formattedDate:"23. Dezember 2022",tags:[],readingTime:1.8,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Was sind Listen?",permalink:"/EF-Informatik/listen"}},o={authorsImageUrls:[]},u=[{value:"Spielfeld Gezeichnet",id:"spielfeld-gezeichnet",level:2},{value:"Erstes Interaktives Element Hinzugef\xfcgt:",id:"erstes-interaktives-element-hinzugef\xfcgt",level:2},{value:"Eingabe Funktion",id:"eingabe-funktion",level:3},{value:"Werte Leeren in der Matrix:",id:"werte-leeren-in-der-matrix",level:3}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"spielfeld-gezeichnet"},"Spielfeld Gezeichnet"),(0,a.kt)("p",null,'Als hausaufgabe habe ich mein spielfeld "gezeichnet" das schaut so aus:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"      1      2      3      4      5\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n1 \xa6   2  \xa6  32  \xa6  16  \xa6   8  \xa6   8  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n2 \xa6   4  \xa6  26  \xa6   8  \xa6   2  \xa6   1  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n3 \xa6   4  \xa6   4  \xa6  16  \xa6   4  \xa6   2  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n4 \xa6   2  \xa6   8  \xa6   1  \xa6   4  \xa6   1  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n5 \xa6   2  \xa6   4  \xa6   4  \xa6   4  \xa6   4  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n")),(0,a.kt)("p",null,"Ich habe das einfach mit einzelnen funktion gemacht welche dann zum beispiel den oberen rand bzw eine zwischenzeile zeichnen. Ich bin sehr zufrieden mit meinem design."),(0,a.kt)("h2",{id:"erstes-interaktives-element-hinzugef\xfcgt"},"Erstes Interaktives Element Hinzugef\xfcgt:"),(0,a.kt)("h3",{id:"eingabe-funktion"},"Eingabe Funktion"),(0,a.kt)("p",null,"Als Hausaufgabe habe ich das erte interaktive element zu unserem spiel Numtrip hinzugef\xfcgt. Mit\ndiesem Element kann man ein feld ausw\xe4hlen indem man eine x,y kordinate eingibt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'def eingabe():\n    x,y=input("Welches Feld soll geleert werden: ").split()\n    return int(x),int(y)\n')),(0,a.kt)("p",null," das habe ich mit dieser funktion gemacht. Sie fragt den benutzer um zwei zahlen. Die zwei zahlen werde durch trennung mittels eines kommas eingegeben. Wenn man ein ",(0,a.kt)("inlineCode",{parentName:"p"},".split()")," am ende eines inputs macht kann man gerade zwei zahlen auf zwei aufteilen ohne dass man den benutzer zwei mal fragen muss.\ndas return am schluss macht aus den string noch integers."),(0,a.kt)("h3",{id:"werte-leeren-in-der-matrix"},"Werte Leeren in der Matrix:"),(0,a.kt)("p",null,"Meine idee war dass ich eine minus eins in die matrix schreibe an der stelle wo der benutzer das feld leeren soll, dann sp\xe4ter mache ich einfach beim print befehl dass es falls es eine negativezahl ist einen leerschlag macht um die zahl zu l\xf6schen. Das sieht dann etwa so aus. Ich glaube das sollte f\xfcr alle klar sein was der code macht."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"zahlen_matrix[x-1][y-1]=-1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"if (zahl<0):\n            print(\" \",end = '')\n")))}m.isMDXComponent=!0}}]);