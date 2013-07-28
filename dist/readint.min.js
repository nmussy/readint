!function(){function e(i,t,n){var r,o,s=e.resolve(i)
if(null==s)throw n=n||i,t=t||"root",r=Error('Failed to require "'+n+'" from "'+t+'"'),r.path=n,r.parent=t,r.require=!0,r
return o=e.modules[s],o.exports||(o.exports={},o.client=o.component=!0,o.call(this,o.exports,e.relative(s),o)),o.exports}e.modules={},e.aliases={},e.resolve=function(i){var t,n
for("/"===i.charAt(0)&&(i=i.slice(1)),t=[i,i+".js",i+".json",i+"/index.js",i+"/index.json"],n=0;n<t.length;n++){if(i=t[n],e.modules.hasOwnProperty(i))return i
if(e.aliases.hasOwnProperty(i))return e.aliases[i]}},e.normalize=function(e,i){var t,n=[]
if("."!=i.charAt(0))return i
for(e=e.split("/"),i=i.split("/"),t=0;t<i.length;++t)".."==i[t]?e.pop():"."!=i[t]&&""!=i[t]&&n.push(i[t])
return e.concat(n).join("/")},e.register=function(i,t){e.modules[i]=t},e.alias=function(i,t){if(!e.modules.hasOwnProperty(i))throw Error('Failed to alias "'+i+'", it does not exist')
e.aliases[t]=i},e.relative=function(i){function t(e,i){for(var t=e.length;t--;)if(e[t]===i)return t
return-1}function n(t){var r=n.resolve(t)
return e(r,i,t)}var r=e.normalize(i,"..")
return n.resolve=function(n){var o,s,l=n.charAt(0)
return"/"==l?n.slice(1):"."==l?e.normalize(r,n):(o=i.split("/"),s=t(o,"deps")+1,s||(s=0),n=o.slice(0,s+1).join("/")+"/deps/"+n)},n.exists=function(i){return e.modules.hasOwnProperty(n.resolve(i))},n},e.register("readint/bin/readint.js",function(e,i,t){t.exports=i("../lib/readint.js")}),e.register("readint/lib/readint.js",function(e,i,t){function n(e,t){var n
return isNaN(parseInt(e))?(void 0===t&&(t="en"),t=i("../locales/"+t),n=o(e,t),n.length>0?r(n):-1):parseInt(e)}function r(e){var i,t,n,o,s,l
if(0==e.length)return-1
if(1==e.length)return e[0].value
for(i=-1,t=-1,n=0;n<e.length;++n)e[n].value>i&&(i=e[n].value,t=n)
return o=e[t].value,s=r(e.slice(0,t)),l=r(e.slice(t+1,e.length)),(-1==s?1:s)*o+(-1==l?0:l)}function o(e,i){var t,n,r=e.split(i.splitter),o=s(i.values),l=[]
if(void 0===i.filters)for(t=0;void 0!==r[t];++t)if(0!=r[t].length)for(n=0;;++n){if(void 0===o[n]){r.splice(t--,1)
break}if(r[t].toLowerCase()==o[n].string){l.push(o[n])
break}}else r.splice(t--,1)
else for(t=0;void 0!==r[t];++t)if(0!=r[t].length){for(r[t]=r[t].toLowerCase(),n=0;n<i.filters.length;++n)r[t]=r[t].replace(i.filters[n][0],i.filters[n][1])
for(n=0;;++n){if(void 0===o[n]){r.splice(t--,1)
break}if(r[t]==o[n].string){l.push(o[n])
break}}}else r.splice(t--,1)
return l}function s(e){var i,t,n=[]
for(i=0;i<e.length;++i)for(t in e[i])n.push({string:t,value:e[i][t],level:i})
return n}t.exports=n}),e.register("readint/locales/en.js",function(e,i,t){t.exports={splitter:/\s|\sand/,filters:[[/s$/,""],[/ies$/,"y"]],values:[{zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19},{ten:10,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90},{hundred:100},{thousand:1e3},{million:1e6},{billion:1e9},{trillion:1e12}]}}),e.register("readint/locales/es.js",function(e,i,t){t.exports={splitter:/\s|\sy/,filters:[[/s$/,""],[/[á]/,"a"],[/[é]/,"e"],[/[ú]/,"u"],[/[ó]/,"o"],[/[ñ]/,"n"],[/[í]/,"i"]],values:[{zero:0,uno:1,dos:2,tres:3,cuatro:4,cinco:5,seis:6,siete:7,ocho:8,nueve:9,once:11,doze:12,trece:13,catorce:14,quince:15,diecisies:16,diecisiete:17,dieciocho:18,diecinueve:19,veintiuno:21,veintidos:22,veintitres:23,veinticuatro:24,veinticinco:25,veintiseis:26,veintisiete:27,veintiocho:28,veintinueve:29},{diez:10,veinte:20,treinta:30,cuarenta:40,cicuenta:50,sensta:60,setenta:70,ochenta:80,noventa:90},{cien:100,ciento:100,dosciento:200,trescientos:300,cuatrocientos:400,quinientos:500,seiscientos:600,setecientos:700,ochocientos:800,novecientos:900},{mil:1e3},{millon:1e6,millone:1e6},{billon:1e9,billone:1e9},{trillon:1e12,trillone:1e12}]}}),e.register("readint/locales/fr.js",function(e,i,t){t.exports={splitter:/\s|et|-(?=[^vingt|dix])/,filters:[[/s$/,""],[/[àâ]/,"a"],[/[êéèë]/,"e"],[/[ùûûü]/,"u"],[/[ô]/,"o"],[/[ç]/,"c"],[/[îï]/,"i"]],values:[{zero:0,un:1,deux:2,troi:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16},{dix:10,vingt:20,trente:30,quarente:40,cinquante:50,soixante:60,"soixante-dix":70,"quatre-vingt":80,"quatre-vingt-dix":90},{cent:100},{mille:1e3},{million:1e6},{milliard:1e9},{billion:1e12}]}}),e.alias("readint/bin/readint.js","readint/index.js"),"object"==typeof exports?module.exports=e("readint"):"function"==typeof define&&define.amd?define(function(){return e("readint")}):this.readint=e("readint")}()
