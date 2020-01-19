(this["webpackJsonppopulation-chart"]=this["webpackJsonppopulation-chart"]||[]).push([[0],{190:function(e,t,a){e.exports=a(384)},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(30),o=a.n(c),u=(a(195),a(395)),s=(a(196),a(197),function(e){var t=e.checked?"PrefCheckBox-root PrefCheckBox-root-checked ".concat(e.className):"PrefCheckBox-root ".concat(e.className);return n.a.createElement("div",{className:t,onClick:e.onClick},n.a.createElement("input",{className:"PrefCheckBox-checkbox",type:"checkbox",checked:e.checked,readOnly:!0}),n.a.createElement("span",null,e.prefName))}),i=a(17),p=function(e){return n.a.createElement(i.e,{width:"95%",aspect:1.6},n.a.createElement(i.d,{data:e.data,margin:{top:5,right:30,left:20,bottom:20}},n.a.createElement(i.a,{strokeDasharray:"3 3"}),n.a.createElement(i.g,{dataKey:"year"}),n.a.createElement(i.h,{yAxisId:"left"}),n.a.createElement(i.f,null),n.a.createElement(i.b,{wrapperStyle:{fontSize:"calc(6px + 2vmin)"}}),e.data[0]&&Object.keys(e.data[0]).map((function(e){return"year"!==e&&n.a.createElement(i.c,{key:e,yAxisId:"left",type:"monotone",dataKey:e,stroke:"#"+[0,1,2,3,4,5].map((function(e){return Math.floor(16*Math.random()).toString(16)})).join("")})}))))},f=a(24),l=a(8),d=a(11),h=a.n(d),m=a(60),k=a(155),E=a(61),v=a(156),b=a(159),C=function(e){function t(e,a){var r;return Object(m.a)(this,t),(r=Object(k.a)(this,Object(E.a)(t).call(this,"".concat(e," : ").concat(a)))).statusCode=e,r.description=a,r}return Object(v.a)(t,e),t}(Object(b.a)(Error)),w=new function e(t){var a=this;Object(m.a)(this,e),this.apiKey=t,this.endpoint="https://opendata.resas-portal.go.jp",this.get=function(e,t){var r,n,c;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t?"".concat(a.endpoint,"/").concat(e,"?").concat(t):"".concat(a.endpoint,"/").concat(e),o.next=3,h.a.awrap(fetch(r,{headers:{"X-API-KEY":a.apiKey}}));case 3:if(!((n=o.sent).status>=500&&n.status<600)){o.next=6;break}throw new C(n.status,"RESAS Server Error");case 6:return o.next=8,h.a.awrap(n.json());case 8:if(c=o.sent,429!==n.status&&"429"!==c&&"429"!==c.statusCode){o.next=11;break}throw new C(429,"Too Many Requests");case 11:if("400"!==c){o.next=13;break}throw new C(400,"Bad Request");case 13:if("403"!==c.statusCode){o.next=15;break}throw new C(403,"Forbidden");case 15:if("404"!==c&&"404"!==c.statusCode){o.next=17;break}throw new C(404,"Not Found");case 17:return o.abrupt("return",c);case 18:case"end":return o.stop()}}))},this.prefectures=function(){var e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(a.get("api/v1/prefectures"));case 2:return e=t.sent,t.abrupt("return",e.result);case 4:case"end":return t.stop()}}))},this.populationCompositionPerYear=function(e){var t,r,n,c,o=arguments;return h.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"-",r=o.length>2?o[2]:void 0,(n=new URLSearchParams).append("prefCode",String(e)),n.append("cityCode",t),r&&n.append("addArea",r.map((function(e){return e.cityCode?"".concat(e.prefCode,"_").concat(e.cityCode):"".concat(e.prefCode,"_")})).join(",")),u.next=8,h.a.awrap(a.get("api/v1/population/composition/perYear",n));case 8:return c=u.sent,u.abrupt("return",c.result);case 10:case"end":return u.stop()}}))}}("25BO76EGI4g8ugQJGIAqzWk93rVrWVxZuxW02TJp"),y=function(){var e=function(){var e=n.a.useState([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=n.a.useState([]),o=Object(l.a)(c,2),u=o[0],s=o[1],i=n.a.useState([]),p=Object(l.a)(i,2),d=p[0],h=p[1],m=n.a.useState(),k=Object(l.a)(m,2),E=k[0],v=k[1];n.a.useEffect((function(){w.prefectures().then((function(e){return r(e.map((function(e){return{prefecture:e,checked:!1}})))})).catch((function(e){e instanceof C?v(e):console.error(e)}))}),[]),n.a.useEffect((function(){var e=u.reduce((function(e,t){return t.population.data[0].data.forEach((function(a){var r=e.find((function(e){return e.year===a.year}));r?r[t.prefecture.prefName]=a.value:e.push(Object(f.a)({year:a.year},t.prefecture.prefName,a.value))})),e}),[]);h(e)}),[u]);return{checkedPrefs:a,apiError:E,chartData:d,checkboxClickHandler:function(e){return function(){r((function(t){var a=t.find((function(t){return t.prefecture.prefCode===e}));return a&&(a.checked?s((function(e){return e.filter((function(e){return e.prefecture.prefCode!==a.prefecture.prefCode}))})):w.populationCompositionPerYear(a.prefecture.prefCode).then((function(e){s((function(t){return t.concat({prefecture:a.prefecture,population:e})}))})).catch((function(e){e instanceof C?v(e):console.error(e)}))),t.map((function(t){return t.prefecture.prefCode===e?{prefecture:t.prefecture,checked:!t.checked}:t}))}))}}}}(),t=e.checkedPrefs,a=e.checkboxClickHandler,r=e.chartData,c=e.apiError;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-container"},n.a.createElement("header",null,n.a.createElement("h1",null,"Population Chart")),n.a.createElement(u.a,{container:!0,spacing:1},t.map((function(e){return n.a.createElement(u.a,{item:!0,key:e.prefecture.prefCode,xs:4,sm:3,md:2},n.a.createElement(s,{className:"PrefCheckBox",checked:e.checked,prefName:e.prefecture.prefName,onClick:a(e.prefecture.prefCode)}))}))),c&&n.a.createElement("p",{className:"ErrorMessage"},c.message),n.a.createElement("div",{className:"App-blank"}),n.a.createElement(p,{data:r})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[190,1,2]]]);
//# sourceMappingURL=main.f3e6104e.chunk.js.map