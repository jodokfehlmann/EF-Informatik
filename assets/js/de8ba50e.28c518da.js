"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=i,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={},o="Wie Authenzifiziert man einene Benutzer:",s={permalink:"/EF-Informatik/Beutzer_autentizifiren",editUrl:"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/Beutzer_autentizifiren.md",source:"@site/blog/Beutzer_autentizifiren.md",title:"Wie Authenzifiziert man einene Benutzer:",description:"Letzte Woche haben wir in Node-RED einen bereits existierenden Flow eingef\xfcgt, der zwei HTML-Seiten enth\xe4lt Die Login-Funktion sucht einfach in der Datenbank nach Benutzernamen und Passwort und \xfcberpr\xfcft, ob sie \xfcbereinstimmen. Dazu wird dies in den Cookies gespeichert, daher sieht das Set-Cookie so aus:",date:"2023-03-23T21:11:03.000Z",formattedDate:"23. M\xe4rz 2023",tags:[],readingTime:.985,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Auftrag Informatik EF",permalink:"/EF-Informatik/22-12-02-arbeiten-an-numtrip"},nextItem:{title:"Subway Scientists CanSat",permalink:"/EF-Informatik/cansat_2023"}},l={authorsImageUrls:[]},u=[],c={toc:u};function p(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Letzte Woche haben wir in Node-RED einen bereits existierenden Flow eingef\xfcgt, der zwei HTML-Seiten enth\xe4lt: eine ",(0,i.kt)("strong",{parentName:"p"},"welcome.html")," und eine ",(0,i.kt)("strong",{parentName:"p"},"login.html"),". Der Aufbau ist ziemlich simpel: Die Login-Funktion sucht einfach in der Datenbank nach Benutzernamen und Passwort und \xfcberpr\xfcft, ob sie \xfcbereinstimmen. Dazu wird dies in den Cookies gespeichert, daher sieht das Set-Cookie so aus:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"if (user){\n   if (password== user.pw){\n       msg.cookies = {\n           auth: true,\n           name: name\n       }\n   }\n}\n")),(0,i.kt)("p",null,"Die Login Funktion l\xf6scht einfach den cookie und leitet uns and die entscprechende seite weiter also die Wilkommensseite."),(0,i.kt)("p",null,"Das Programmieren in JavaScript ist fast identisch mit Python, deshalb war es f\xfcr mich auf den ersten Blick ziemlich verst\xe4ndlich."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6425).Z,width:"919",height:"460"})),(0,i.kt)("p",null,"Dazu haben wir ganz oben eine Funktion erstellt, die als Datenbank f\xfcr Benutzernamen und Passw\xf6rter dient. Sie sieht so aus:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'flow.set(\n   "johnny",\n   {\n       pw: "qwert"\n   }\n)\nflow.set(\n   "maria",\n   {\n       pw: "asdf"\n   }\n\n)\nreturn msg;\n')),(0,i.kt)("p",null,"Hier wurden den Benutzern Johnny und Maria jeweils ein Passwort festgelegt. Diese werden dann beim Login \xfcberpr\xfcft. Das Problem ist jedoch, dass man ein Passwort niemals einfach so abspeichern darf. Man muss immer nur den Hashwert abspeichern, da sonst bei einem Datenleck alle Benutzernamen und Passw\xf6rter ver\xf6ffentlicht werden k\xf6nnten."))}p.isMDXComponent=!0},6425:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/login_website-50fcbeae75037fa3abc5f46d4a2ab71d.jpg"}}]);