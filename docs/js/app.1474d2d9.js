(function(){"use strict";var e={987:function(e,n,t){var r=t(963),o=t(907),a={state:{languages:{},currentLanguage:"ru",isLoaded:!1},actions:{async loadTranslate({commit:e}){const n=t(0);e("updateLanguage",n),e("updateStatusLoading")}},mutations:{updateLanguage(e,n){e.languages=n},updateStatusLoading(e){e.isLoaded=!0},updateCurrentLanguage(e,n){e.currentLanguage=n}},getters:{getLanguages:e=>e.languages,getLoadedStatus:e=>e.isLoaded,getCurrentLanguage:e=>e.currentLanguage,getTranslation(e){return(n,t)=>e.languages[e.currentLanguage][n]?e.languages[e.currentLanguage][n]:t}}};const i=(0,o.MT)({modules:{translate:a}});var u=i,s=t(201);const c=[{path:"/",name:"Frontpage",component:()=>t.e(150).then(t.bind(t,150))},{path:"/:lang",component:()=>t.e(150).then(t.bind(t,150))}],d=(0,s.p7)({history:(0,s.r5)(),routes:c});var l=d,f=t(252);function g(e,n){const t=(0,f.up)("router-view");return(0,f.wg)(),(0,f.j4)(t)}var p=t(744);const v={},m=(0,p.Z)(v,[["render",g]]);var h=m;(0,r.ri)(h).use(l).use(u).mount("#app")},0:function(e){e.exports=JSON.parse('{"ru":{"languageName":"ru","tooltip":"В твоем буфере обмена есть SVG код, нажми CTRL + V для конвертации","title":"Конвертируйте свой SVG в CSS","description":"С помощью данного сервиса вы можете закодировать свою иконку SVG для использования в CSS через data URL, закодированный SVG можно использовать в <code>background</code>, <code>border-image</code> или в <code>mask-image</code>","insertSvg":"Вставьте код SVG:","example":"Пример","preview":"Превью:","readyCss":"Готовый CSS для фона:","fullRecording":"Полная запись","shortRecording":"Короткая запись","copy":"Скопировать","addSize":"Добавить размеры","conversionSettings":"Настройки конвертации","addCss":"Всегда добавлять размеры в итоговый CSS","removeSemicolon":"Убирать ; для использования в Sass","useShortRecording":"Использовать короткую запись по умолчанию","save":"Сохранить"},"en":{"languageName":"en","tooltip":"There is SVG code in your clipboard, press CTRL + V to convert","title":"Convert your svg to css","description":"With this service, you can encode your SVG icon for use in CSS via data URL, encoded SVG can be used in <code>background</code>, <code>border-image</code> or in <code>mask-image</code>","insertSvg":"Insert the SVG code:","example":"Example","preview":"Preview:","readyCss":"Result:","fullRecording":"Full Recording","shortRecording":"Short Recording","copy":"Copy to clipboard","addSize":"Add size","conversionSettings":"Conversion settings","addCss":"Always add size to the final CSS","removeSemicolon":"Remove ; for use in Sass","useShortRecording":"Use default short entry","save":"Save"}}')}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(d--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+".ad92a2f3.js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".976cfb55.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="svg-encoder:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+a){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={150:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var d=s(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},r=self["webpackChunksvg_encoder"]=self["webpackChunksvg_encoder"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(987)}));r=t.O(r)})();
//# sourceMappingURL=app.1474d2d9.js.map