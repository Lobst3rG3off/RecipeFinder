(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__3TkIi",image:"recipe_image__7qd-q"}},,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(12),a(2)),l=a.n(o),s=a(6),u=a(1),m=(a(14),a(3)),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients,i=e.url;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("img",{className:p.a.image,src:n,alt:t}),c.a.createElement("p",null,"The number of Calories is ",a),c.a.createElement("ul",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("a",{href:i,className:"search-button"}," Check Out The Full Recipe! "))},h=(a(15),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),m=o[0],p=o[1],h=Object(n.useState)("Bread"),d=Object(u.a)(h,2),b=d[0],E=d[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2);v[0],v[1];Object(n.useEffect)((function(){k()}),[b]);var k=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("27d2b96c","&app_key=").concat("fc78a95dae4a41c9c6d6d14f5787f383"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"instructions"},c.a.createElement("h1",null," Chef Geoff's Recipe Finder!"),c.a.createElement("h2",null," Looking for How to Cook Something? "),c.a.createElement("p",null," Search for a recipe or something that tickles your fancy! ")),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(m),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d00baed7.chunk.js.map