(window.webpackJsonp=window.webpackJsonp||[]).push([[11,19],{205:function(e,t,a){"use strict";a.r(t);var n=a(53),r=a(14),l=a(26),c=a(0),s=a.n(c),i=a(22),o=a(18),u=a(31),m=function(e){var t=e.signUpUser,a=e.setSelectedOrganization,n=Object(c.useState)([]),r=Object(l.a)(n,2),i=r[0],o=r[1],m=Object(c.useState)(!0),f=Object(l.a)(m,2),g=f[0],d=f[1];Object(c.useEffect)(function(){u.a.getOrganizationNames().then(function(e){if(e.success){for(var t=[],a=0;a<e.organizations.length;a++)t.push(e.organizations[a].name);o([].concat(t))}else alert(e.message)}).catch(function(e){alert(e),o([])})},[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"auth-form "},s.a.createElement("div",{className:"desc-title blue-text-dark"},"Choose your school/organization"),s.a.createElement("select",{name:"",id:"",onChange:function(e){d(!1),a(e.target.value)},style:{display:"block",marginTop:"1em",marginBottom:"1em"}},s.a.createElement("option",{hidden:!0,disabled:!0,selected:!0},"-- select an option --"),i.map(function(e){return s.a.createElement("option",null,e)})),s.a.createElement("button",{className:"yellow-button",disabled:g,onClick:function(e){e.preventDefault(),t()}},"Submit")))};t.default=function(e){var t=e.SignupAPI,a=Object(c.useState)({fname:"",lname:"",email:""}),u=Object(l.a)(a,2),f=u[0],g=u[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),b=p[0],h=p[1],v=Object(c.useState)(""),E=Object(l.a)(v,2),O=E[0],j=E[1],y=Object(c.useState)({fname:!1,lname:!1,email:!1,password:!1,cPassword:!1}),N=Object(l.a)(y,2),w=N[0],S=N[1],C=Object(c.useState)(!1),T=Object(l.a)(C,2),x=T[0],z=T[1],A=Object(c.useState)(""),B=Object(l.a)(A,2),k=B[0],P=B[1],R=s.a.createRef(),U=s.a.createRef(),F=function(e){var t=e.currentTarget.name;g(Object(r.a)({},f,Object(n.a)({},t,e.currentTarget.value)))};var I=function(e){var t=e.currentTarget.value,a=0!==t.length&&!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(t);"change"===e.type&&a||D(R,a),J(!a,"email",f.email)},D=function(e,t){var a=t?"red":"#9e9e9e";e.current.style.borderBottomColor=a};Object(c.useEffect)(function(){j("")},[b]),Object(c.useEffect)(function(){L()},[O]);var L=function(){var e=O.length,t=e>b.length||b.substring(0,e)!==O.substring(0,e);D(U,t),J(!t&&b===O,"cPassword",O)},J=function(e,t,a){e&&a.length>0?S(Object(r.a)({},w,Object(n.a)({},t,!0))):S(Object(r.a)({},w,Object(n.a)({},t,!1)))};return s.a.createElement("div",{style:{height:"100vh",display:"flex"}},s.a.createElement("div",{className:"login-form-container"},s.a.createElement("img",{src:o.B,style:{height:"100%"}}),x?s.a.createElement(m,{signUpUser:function(){t({password:b,organization:k,email:f.email,lastName:f.lname,firstName:f.fname})},setSelectedOrganization:P}):s.a.createElement("form",{className:"auth-form signup-form ",onSubmit:function(e){e.preventDefault(),z(!0)}},s.a.createElement("input",{className:"login-input ",placeholder:"First Name",value:f.fname,style:{marginRight:"1em"},onChange:F,onBlur:function(){return J(!0,"fname",f.fname)},name:"fname"}),s.a.createElement("input",{className:"login-input",placeholder:"Last Name",value:f.lname,onChange:F,name:"lname",onBlur:function(){return J(!0,"lname",f.lname)}}),s.a.createElement("input",{className:"login-input",placeholder:"Email",ref:R,value:f.email,name:"email",style:{gridColumn:"1/span 2"},onChange:function(e){F(e),I(e)},onBlur:I}),s.a.createElement("input",{className:"login-input ",placeholder:"Password",type:"password",style:{marginRight:"1em"},name:"password",value:b,onChange:function(e){return h(e.target.value)},onBlur:function(){return J(!0,"password",b)}}),s.a.createElement("input",{className:"login-input ",placeholder:"Confirm Password",type:"password",style:{marginRight:"1em"},name:"confirm_password",ref:U,value:O,onChange:function(e){return j(e.target.value)}}),s.a.createElement("div",{style:{gridColumn:"1/span 2",display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"1em"}},s.a.createElement("button",{className:"yellow-button",disabled:!(!Object.values(w).includes(!1)&&!Object.values(w).includes(null)),type:"submit",style:{fontSize:"1.25em",padding:".25em 1em",alignSelf:"center"}},"NEXT"),s.a.createElement("div",{style:{textAlign:"right",paddingTop:"4%",color:"#005191"}},s.a.createElement(i.b,{to:"/"},"Back to Sign In"))))))}},312:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(6),l=a(0),c=a.n(l),s=a(205),i=a(52),o=a(7),u=a(22),m=a(18),f=a(31);function g(){var e=Object(r.a)(["\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.1);\n    filter: drop-shadow(1px 1px 4px #0093dd);\n    transition: 200ms ease-out;\n  }\n"]);return g=function(){return e},e}var d=Object(o.a)(i.a)(g()),p=function(e){var t=e.setAdmin;return c.a.createElement("div",{style:{height:"100vh"}},c.a.createElement(i.d,{rows:"3",style:{maxHeight:"98vh"},className:"general-font"},c.a.createElement("h3",{className:"center white-text bold-font uppercase"},"Choose your Account Type:"),c.a.createElement(i.b,{cols:"2"},c.a.createElement(d,{className:"justify-end",onClick:function(){t(!0)}},c.a.createElement("img",{className:"icon-md",src:m.f,alt:"user"}),c.a.createElement("h3",{className:"center"},"Teacher")),c.a.createElement(d,{className:"justify-start",onClick:function(){return t(!1)}},c.a.createElement("img",{style:{paddingBottom:"1em"},className:"icon-md",src:m.F,alt:"user"}),c.a.createElement("h3",{className:"center"},"Student"))),c.a.createElement("div",{className:"white-text",style:{marginTop:"2em",alignSelf:"baseline"}},"Already have an account?"," ",c.a.createElement(u.b,{to:"/",style:{textDecoration:"underline"}},"Log In"))))};t.default=function(e){var t=e.loginUser,a=Object(l.useState)(null),r=Object(n.a)(a,2),i=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,null==i?c.a.createElement(p,{setAdmin:o}):c.a.createElement(s.default,{SignupAPI:function(e){e.isStudent=!0!==i,f.a.signup(e).then(function(e){e.success?t(e):(o(null),alert(e.message))}).catch(function(e){o(null),alert(e)})}}))}}}]);
//# sourceMappingURL=11.68d9b3de.chunk.js.map