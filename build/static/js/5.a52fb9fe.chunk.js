(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,n,e){},189:function(t,n,e){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return o})},309:function(t,n,e){"use strict";e.r(n),e.d(n,"BoothIcons",function(){return l});var o=e(189),r=e(6),a=e(0),c=e.n(a),i=e(7),u=e(52),s=e(18);e(171);function d(){var t=Object(r.a)(["\n  background-color: #fcb23d;\n  color: #1f3d7d;\n  border: 2px solid #1f3d7d;\n  border-radius: 4px;\n  font-weight: bold;\n  font-family: Roboto;\n  font-size: 1.25em;\n  width: 17vw;\n  height: auto;\n  padding: 5%;\n"]);return d=function(){return t},t}var l={1:s.j,2:s.n,3:s.j,4:s.l,5:s.E,6:s.D};i.a.div(d());n.default=function(t){var n=t.setSimStage,e=t.setCurrentBooth,r=t.setVisitedBooths,a=t.visitedBooths,i=t.boothsInfo;t.currentBalance;return i?c.a.createElement(u.b,{cols:"1"},i.map(function(t,i){return c.a.createElement("div",{key:t.id},c.a.createElement("button",{className:"customButton boothOption ".concat(a.includes(i+1)?"disabledBooth":""),onClick:function(t){var c;a.includes(i+1)||(r([].concat(Object(o.a)(a),[i+1])),c=i+1,n("Booth-Selected"),e(c))}},c.a.createElement("img",{src:l[i+1],className:"boothIcon"}),c.a.createElement("p",{className:t.id},t.category)))})):null}}}]);
//# sourceMappingURL=5.a52fb9fe.chunk.js.map