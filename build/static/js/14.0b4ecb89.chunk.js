(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{303:function(e,t,a){"use strict";a.r(t);var n=a(26),l=a(0),c=a.n(l),r=a(11),s=a(22),m=a(31);t.default=function(){var e=Object(l.useState)(null),t=Object(n.a)(e,2),a=t[0],o=t[1],i=Object(r.h)().classId;Object(l.useEffect)(function(){m.a.getClassDetails(i).then(function(e){e.success&&o(e.classInfo)}).catch(function(e){return window.alert("404 Error")})},[]);return a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"generic-card",style:{width:"50vw",margin:"auto",minHeight:"80vh",maxHeight:"90vh",overflow:"auto"}},c.a.createElement("div",{className:"ta-center general-heading"},a.name.toUpperCase()),c.a.createElement("hr",null),c.a.createElement("div",{style:{fontSize:"1.12em",textAlign:"center",marginTop:"1%"}},c.a.createElement("p",{className:"creation-date meta-txt"},"Created on: ",new Date(a.date).toLocaleString()),c.a.createElement("p",{className:"student-no"},"No of students: ",a.participants.length),c.a.createElement("p",null,c.a.createElement("span",null,"Auth Code: "),c.a.createElement("span",{className:"ta-center txt-grey"},a.authCode))),c.a.createElement(s.b,{to:"/classes/stats/".concat(a.authCode)},c.a.createElement("div",{className:"yellow-button",style:{margin:"auto",fontSize:"1.2em",marginTop:"1%"}},"View Class Stats")),c.a.createElement("div",{className:"generic-card",style:{marginTop:"1.7%"}},c.a.createElement("div",{className:"general-heading ta-center",style:{fontSize:"1.5em"}},"Students"),c.a.createElement("table",{style:{width:"80%",margin:"auto"}},c.a.createElement("tr",{className:"uppercase"},c.a.createElement("th",{className:"ta-center bold-font",style:{fontSize:"1.35em"}},"Name"),c.a.createElement("th",{className:"ta-center bold-font",style:{fontSize:"1.35em"}},"Stage")),a.participants.map(function(e,t){var a="simulation"==e.simulationStage?"#fcb23d":"pretest"==e.simulationStage?"rgb(4 85 148)":"Not started"==e.simulationStage?"rgb(240 78 49)":"rgb(125 182 220)";return c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"ta-center"},e.name),c.a.createElement("td",{className:"ta-center uppercase"},c.a.createElement("span",{style:{backgroundColor:"".concat(a),padding:"1% 2%",color:"white"}},e.simulationStage)))}))))):null}}}]);
//# sourceMappingURL=14.0b4ecb89.chunk.js.map