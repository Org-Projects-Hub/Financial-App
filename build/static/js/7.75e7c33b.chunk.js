(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{301:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(6),c=n(0),i=n.n(c),o=n(7);n(301);function l(){var e=Object(r.a)(["\n  padding: 0%;\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n  text-align: left;\n  margin-top: 5px;\n\n  font-family: 'Roboto Condensed', sans-serif;\n  font-weight: 600;\n  font-size: 18px;\n  justify-content: left;\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)(["\n  margin: 3px;\n"]);return u=function(){return e},e}function m(){var e=Object(r.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 6px;\n  text-align: center;\n"]);return m=function(){return e},e}o.a.div(m()),o.a.div(u());var d=o.a.div(s()),f=(o.a.div(l()),function(e){var t=e.name,n=e.icon,a=e.desc,r=e.costBreakdown,c=e.price,o=e.increaseExpenses,l=(e.currentBalance,e.setSimStage),s=(e.setText,e.lowestprice);console.log("LOWEST PRICE: "+s);return i.a.createElement("div",{className:"boothItemOption"},i.a.createElement("div",{className:"section"},i.a.createElement("img",{src:n,className:"boothItemIcon"}),i.a.createElement(d,null,t)),i.a.createElement("div",{className:"section"},a.map(function(e,t){return i.a.createElement("span",null,"".concat(e," | "))})),i.a.createElement("div",{className:"section",style:{height:"auto"}},i.a.createElement(d,null,"Cost Breakdown"),r.map(function(e,t){return"string"==typeof e?i.a.createElement("div",{key:t},"All Inclusive"):i.a.createElement("div",{key:t},e.item," : $",e.price)})),i.a.createElement("div",{className:"section"},i.a.createElement(d,null,"Total Price"),i.a.createElement("div",null,"$",c)),i.a.createElement("div",{className:"verticalFill"}),i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"customButton",onClick:function(){return window.scrollTo(0,0),o(c),void l("Booth-Selection")}},"PURCHASE")))}),p=n(33),g=n(37),v=n(18);function b(){var e=Object(r.a)(["\n  padding-left: 2.5%;\n  color: #fffefd;\n  font-weight: 500;\n  grid-row: 2/2;\n  grid-column: 1/3;\n  justify-self: left;\n"]);return b=function(){return e},e}function E(){var e=Object(r.a)(["\n  margin: 3% 0 1% 0;\n  color: white;\n  display: flex;\n  grid-row: 1/1;\n  grid-column: 1/3;\n  width: 100%;\n  justify-self: left;\n"]);return E=function(){return e},e}function w(){var e=Object(r.a)(["\n  display: grid;\n  place-items: center;\n  grid-template-columns: repeat(3, 1fr);\n  grid-grap: 1em;\n  max-width: 80vw;\n  margin: auto;\n  margin-top: 5%;\n  grid-auto-rows: auto;\n  @media (max-width: 770px) {\n    grid-template-columns: 1fr;\n  }\n"]);return w=function(){return e},e}var O=[v.u,v.w,v.z,v.t,v.v,v.y,v.x],j=o.a.div(w()),h=o.a.div(E()),y=o.a.div(b()),B=[v.p,v.q,v.r,v.s];t.default=function(e){var t=e.setSimStage,n=e.currentBooth,r=e.booths,o=e.increaseExpenses,l=e.currentBalance,s=e.remainingBalance,u=Object(c.useState)(!0),m=Object(a.a)(u,2),d=m[0],v=m[1],b=Object(c.useState)([]),E=Object(a.a)(b,2),w=E[0],x=E[1],N=Object(c.useState)(null),S=Object(a.a)(N,2),C=S[0],k=S[1],I=Object(c.useState)([]),T=Object(a.a)(I,2),A=(T[0],T[1],Object(c.useState)(999999999999)),_=Object(a.a)(A,2),R=_[0],F=_[1],U=Object(c.useState)(""),z=Object(a.a)(U,2),D=z[0],H=z[1],K=Object(p.b)(),P=new Array;return Object(c.useEffect)(function(){var e,a=r[n-1];H(a.category);for(var c=0;c<a.options.length;c++){var i=a.options[c],o={name:i.name,desc:i.desc,costbreakdown:i.costbreakdown,price:i.price};R>i.price&&F(i.price),P[c]=o}return x(P),v(!1),K({type:g.a.SHOW_BACK_FUNCTION}),K((e=function(){t("Booth-Selection")},{type:g.a.ADD_BACK_FUNCTION,payload:e})),function(){K({type:g.a.HIDE_BACK_FUNCTION})}},[]),d?null:i.a.createElement(j,null,i.a.createElement(h,null,i.a.createElement("img",{src:O[n],className:"curentBoothIcon"}),i.a.createElement("div",{className:"currentBoothIdentifier"},"The Current Booth is ","".concat(D,"."))),i.a.createElement(y,null,"Remaining Balance: ",s),i.a.createElement("div",{style:{gridRow:"3/3",gridColumn:"1/4",height:"fit-content",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}},w.map(function(e,n){return i.a.createElement(f,{name:e.name,icon:B[n],desc:e.desc,costBreakdown:e.costbreakdown,price:e.price,increaseExpenses:o,currentBalance:l,setSimStage:t,setText:k,lowestprice:R,key:n})})),C)}}}]);
//# sourceMappingURL=7.75e7c33b.chunk.js.map