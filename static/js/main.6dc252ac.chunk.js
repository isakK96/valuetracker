(this.webpackJsonpvaluetracker=this.webpackJsonpvaluetracker||[]).push([[0],{131:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(31),r=n.n(a),o=n(15),i=n(13),l=n(35),u=n.n(l),j=n(47),h=n(83),d=n.n(h).a.create({baseURL:"https://www.alphavantage.co/query"}),b=function(e){return d.get("",{params:{function:"SYMBOL_SEARCH",keywords:e,apikey:"LXG3KFSHHFEET085"}}).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}))},f=n(87),p=n(84),O=n.n(p),x=n(85),m=n.n(x),g=n(182),v=n(2);function k(e){var t=e.query,n=e.handleStarClick,s=e.starredList,a=Object(c.useState)([]),r=Object(i.a)(a,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){t&&function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=t,d.get("",{params:{function:"TIME_SERIES_DAILY",symbol:c,apikey:"LXG3KFSHHFEET085"}}).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}));case 2:n=e.sent,l(h(n.data["Time Series (Daily)"]));case 4:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),t?Object(v.jsxs)("div",{className:"chart-container",children:[Object(v.jsxs)("div",{className:"title-container",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)(g.a,{sx:{maxHeight:"3rem"},onClick:n,children:s.includes(t)?Object(v.jsx)(O.a,{sx:{color:"gold"}}):Object(v.jsx)(m.a,{})})]}),Object(v.jsx)(f.a,{options:{data:[{type:"candlestick",dataPoints:o.map((function(e){return{x:new Date(e.date),y:[e.open,e.high,e.low,e.close]}}))}]}})]}):null;function h(e){try{return Object.entries(e).map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];return{date:n,open:Number(c["1. open"]),high:Number(c["2. high"]),low:Number(c["3. low"]),close:Number(c["4. close"])}}))}catch(t){console.log(t)}}}var y=n(177),S=n(178),C=n(175),N=n(180),w=n(183),E=n(184),H=n(86);function I(e){var t=e.searchInput,n=e.setSearchInput,s=e.handleSuggestionClick,a=Object(c.useState)([]),r=Object(i.a)(a,2),o=r[0],l=r[1];function h(){return(h=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.value.length>1)){e.next=8;break}return e.next=3,b(t.target.value);case 3:n=e.sent,console.log(n);try{d(n.data.bestMatches)}catch(c){console.log(c)}e.next=9;break;case 8:l([]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){var t=Object.values(e).slice(0,5).map((function(e){return Object(v.jsx)(y.a,{button:!0,onClick:function(){s(e),l([])},children:Object(v.jsx)(S.a,{sx:{color:"primary.main"},primary:e["1. symbol"],secondary:e["2. name"]})},e["1. symbol"])}));l(t)}return Object(v.jsx)("div",{className:"form-container",children:Object(v.jsxs)("div",{className:"search-form",children:[Object(v.jsxs)("div",{className:"search-wrapper",children:[Object(v.jsx)(H.DebounceInput,{element:C.a,TextField:!0,minLength:2,debounceTimeout:300,id:"outlined-basic",variant:"outlined",type:"text",name:"searchInput",className:"",autoComplete:"off",sx:{backgroundColor:"white"},value:t,onChange:function(e){n(e.target.value),function(e){h.apply(this,arguments)}(e)}}),Object(v.jsx)(N.a,{component:w.a,sx:{position:"absolute",marginTop:"3.5rem"},className:"suggestion-list",children:o})]}),Object(v.jsx)(E.a,{variant:"contained",className:"",children:"Search"})]})})}function L(e){return Object(v.jsxs)(N.a,{className:"sidebar-container",children:[Object(v.jsxs)("div",{className:"starred",children:[Object(v.jsx)("h2",{children:"Starred"}),Object(v.jsx)("ul",{children:e.starredList.map((function(t,n){return Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",onClick:e.handleHistoryClick,children:t})},n)}))})]}),Object(v.jsxs)("div",{className:"recent",children:[Object(v.jsx)("h2",{children:"Recent"}),Object(v.jsx)("ul",{children:e.searchHistory.map((function(t,n){return Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",onClick:e.handleHistoryClick,children:t})},n)}))})]})]})}function T(){return Object(v.jsxs)("div",{className:"footer",children:["Made by ",Object(v.jsx)("a",{href:"https://www.isakkoski.com/",children:"Isak Koski"})," |"," ",Object(v.jsx)("a",{href:"https://github.com/isakK96/valuetracker",children:"GitHub"})]})}var F=n(181);var q=function(){var e=Object(c.useState)("AMZN"),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),l=r[0],u=r[1],j=Object(c.useState)([]),h=Object(i.a)(j,2),d=h[0],b=h[1],f=Object(c.useState)([]),p=Object(i.a)(f,2),O=p[0],x=p[1];function m(){n&&!O.includes(n)?x([n].concat(Object(o.a)(O))):n&&O.includes(n)&&x(O.filter((function(e){return e!==n})))}return Object(c.useEffect)((function(){!function(){if(n)if(d.includes(n)){var e=d.filter((function(e){return e!==n}));e.unshift(n),b(e)}else b([n].concat(Object(o.a)(d)))}(),console.log(d)}),[n]),Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(F.a,{sx:{backgroundColor:"#00478d"},position:"static",children:Object(v.jsxs)("div",{className:"top",children:[Object(v.jsx)("h1",{className:"title",children:"ValueTracker"}),Object(v.jsx)(I,{handleSearch:function(e){e.preventDefault(),s(l.toUpperCase())},searchInput:l,setSearchInput:u,handleSuggestionClick:function(e){u(""),s(e["1. symbol"])}})]})}),Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)(k,{query:n,handleStarClick:m,starredList:O}),Object(v.jsx)(L,{searchHistory:d,starredList:O,handleStarClick:m,handleHistoryClick:function(e){s(e.target.text)}})]}),Object(v.jsx)(N.a,{children:Object(v.jsx)(T,{})})]})},D=(n(131),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))}),M=n(174);r.a.render(Object(v.jsxs)(s.a.StrictMode,{children:[Object(v.jsx)(M.a,{}),Object(v.jsx)(q,{})]}),document.getElementById("root")),D()}},[[133,1,2]]]);
//# sourceMappingURL=main.6dc252ac.chunk.js.map