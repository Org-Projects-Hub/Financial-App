(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{171:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var a=n(14),o=n(26),c=n(6),r=n(0),i=n.n(r),l=n(7),u=(n(171),n(39)),s=n(31);function f(){var e=Object(c.a)(["\n  grid-row: 1 / span 1;\n  grid-column: 1 / span 1;\n  padding: 4% 0;\n  color: white;\n\n  font-size: 1.05em;\n  font-weight: 500;\n"]);return f=function(){return e},e}function b(){var e=Object(c.a)(["\n  grid-row: 1 / span 1;\n  grid-column: 2 / span 1;\n  text-align: center;\n"]);return b=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: grid;\n  min-height: 100vh;\n  grid-template-columns: 25% 50% 25%;\n  place-items: center;\n  justify-items: center;\n"]);return d=function(){return e},e}var h=l.a.div(d()),m=l.a.div(b()),g=l.a.div(f()),S={annual_salary:31137.600000000002,education:"HighSchool Diploma",federalTax:389.22,hourlyRate:16.2175,medicare:36.327200000000005,monthlySalary:2594.8,position:"Carpenter",socialSecurity:155.68800000000002,stateTax:85.62840000000001,afterTaxMontlySalary:1190.235648,training:0,credit:0,insurance:0};t.default=function(e){var t=Object(r.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],f=Object(r.useState)(S),b=Object(o.a)(f,2),d=b[0],j=b[1],y=Object(r.useState)(null),O=Object(o.a)(y,2),p=O[0],v=O[1],E=Object(r.useState)(0),B=Object(o.a)(E,2),w=B[0],x=B[1],J=Object(r.useState)(0),T=Object(o.a)(J,2),F=T[0],_=T[1],k=Object(r.useState)([]),C=Object(o.a)(k,2),M=C[0],D=C[1],I=Object(r.useState)({rent:0,transport:0,food:0}),R=Object(o.a)(I,2),A=R[0],V=R[1];Object(r.useEffect)(function(){s.a.getAssignedJob().then(function(e){var t=e.jobSelected;t?z(t):l("Job-Selection")}).catch(function(e){l("Job-Selection"),console.log(e)})},[]),Object(r.useEffect)(function(){_(d.afterTaxMontlySalary)},[d]),Object(r.useEffect)(function(){"Booth-Selection"!=c||p||s.a.getBoothsInfo().then(function(e){e.success&&v(e.booths)}).catch(function(e){window.alert("Something went wrong. \nPlease refresh the page!")})},[c]),Object(r.useEffect)(function(){"Booth-Selection"==c&&6==M.length&&(e.setEvaluationVals(Object(a.a)({},A,{balance:F,income:d.monthlySalary})),e.setStage("evaluation"))},[c]);var z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s.a.getJobDetail(e.replaceAll("/","_")).then(function(n){var a=n.annual_salary/12,o=n.training,c=n.credit;j({position:e,monthlySalary:parseFloat(a.toFixed(2)),annual_salary:n.annual_salary,hourlyRate:a/160,federalTax:.15*a,socialSecurity:.06*a,medicare:.014*a,stateTax:.033*a,insurance:.035*a,education:"Bachelor",training:o,credit:c,afterTaxMontlySalary:a-a*(.257+.035)-o-c}),l("Job-Selected"),t&&s.a.assignJob(e)}).catch(function(e){return console.log(e)})};return i.a.createElement(i.a.Fragment,null,"Booth-Selected"===c?i.a.createElement("div",null,i.a.createElement(u.a,{setSimStage:l,currentBooth:w,booths:p,currentBalance:F,increaseExpenses:function(e){2==w?V(Object(a.a)({},A,{rent:e})):4==w?V(Object(a.a)({},A,{food:e})):5==w&&V(Object(a.a)({},A,{transport:e})),_(F-e)},remainingBalance:F.toFixed(2)})):i.a.createElement(h,null,i.a.createElement(m,null,"Job-Selection"===c&&i.a.createElement(u.k,{getJobDetail:z}),"Job-Selected"===c&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.f,{career:d}),i.a.createElement("button",{className:"customButton",style:{marginTop:"2%"},onClick:function(){return l("Booth-Selection")}},"Continue")),"Booth-Selection"===c&&i.a.createElement("div",null,i.a.createElement(g,null,"Remaining Income:"," ",d.afterTaxMontlySalary?F.toFixed(2):""),i.a.createElement(u.b,{setSimStage:l,setCurrentBooth:x,boothsInfo:p,visitedBooths:M,setVisitedBooths:D,currentBalance:F})))))}}}]);
//# sourceMappingURL=8.ba2c2229.chunk.js.map