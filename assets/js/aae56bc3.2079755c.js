"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[14],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),h=a,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},o="Auftrag Informatik EF",c={permalink:"/EF-Informatik/22-12-02-arbeiten-an-numtrip",editUrl:"https://github.com/jodokfehlmann/EF-Informatik/tree/main/blog/22-12-02-arbeiten-an-numtrip.md",source:"@site/blog/22-12-02-arbeiten-an-numtrip.md",title:"Auftrag Informatik EF",description:"1.",date:"2023-04-10T19:14:04.000Z",formattedDate:"10. April 2023",tags:[],readingTime:1.33,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Wie Authentifiziert man einen Benutzer:",permalink:"/EF-Informatik/Beutzer_autentizifiren"}},l={authorsImageUrls:[]},s=[{value:"1.",id:"1",level:2},{value:"2.",id:"2",level:2},{value:"3.",id:"3",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1"},"1."),(0,a.kt)("p",null,"Ich habe als allererstes mit Luis meinen code besprochen, beide funktionnieren sehr gut und erf\xfcllen die aufgabe jedoch ein bisschen anders. Ich finde meinen code \xfcbersichtlicher. Ich hatte am mittwoch meine hasaufgaben gemacht. Herr Hofer hatte mir geholfen bei einem kleinen problem."),(0,a.kt)("h2",{id:"2"},"2."),(0,a.kt)("p",null,"Ich habe ein problem behoben an meinem code was bis anhin nicht klappte; n\xe4hmlich es ging nicht wenn ich zahlen eingab welche gr\xf6sser als 100 sind. Also einfach die darstellung war nicht sch\xf6n... jetzt ist es gut. Das einzige was noch zu verbessern w\xe4re sind die zahlen die gr\xf6sser als 1000 sind, bei denen schaut es noch nicht optimal aus."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"      1      2      3      4      5    \n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n1 \xa6  32  \xa6   4  \xa6  16  \xa6   8  \xa6   8  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n2 \xa6   4  \xa6  32  \xa6   8  \xa6   2  \xa6   1  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n3 \xa6   4  \xa6   4  \xa6  1024\xa6   4  \xa6   2  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n4 \xa6   2  \xa6   8  \xa6  16  \xa6   4  \xa6  16  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n5 \xa6   2  \xa6  512 \xa6   4  \xa6   4  \xa6   4  \xa6\n  \xa6      \xa6      \xa6      \xa6      \xa6      \xa6\n  +------+------+------+------+------+\n")),(0,a.kt)("h2",{id:"3"},"3."),(0,a.kt)("p",null,"Ich weiss nicht was ich noch machen k\xf6nnte... ich habe mir \xfcberlegt noch farben f\xfcr die unerschiedlichen zahlen zu machen sonst w\xfcsste ich nicht was machen."))}p.isMDXComponent=!0}}]);