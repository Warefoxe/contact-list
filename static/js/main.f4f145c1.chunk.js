(this["webpackJsonpcontacts-list"]=this["webpackJsonpcontacts-list"]||[]).push([[0],{32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(16),s=n.n(o),i=(n(32),n(2)),l=n(27),r=n(5),j=n(3),d=n(19),A=n(10),u=n(12),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE0SURBVHgB7dnRTcMwFIXhH1igI5xHxoBNeOSRkdiEUdoR2ACMiCUqkZC6tmNyzyddVaqS+J40bRMbzMzMzMzMVrij3CHVc6r7VO9TtdR7vDNKdUz1MdVxeq/neAc6evoxeOvQ4jxsrhcK3FLmMNPYG3VDa+GYXS/pr8C/nfWan7Q6jDFMQ2KwsDRsTAwaNhP1GhSDh83E9Y3WOEZXorzha/bdlLi88ZJ9hiLWB7hk26GJv4Os2eZfEcuBdhU2E/PBdhc2E+tC7yJsJpZDdwtb+rRkC0SgS1oE+tESgf6WRKAbDxHo1lIEengQgR4PRaAJABFoikcEmsQTgaZpxfYT8ZuvLbU4+2I+9OZrS6dUj9NrLaeFY266ttT6e6Va491QTqke+A7/Svszrs7jmZmZmZlZZJ9jp4KIRB7+ZAAAAABJRU5ErkJggg==";var m=n(24),O=n.n(m),h=n(1),x=function(e){var t=e.onClick,n=e.className,c=e.outline,a=e.children;return Object(h.jsx)("button",{onClick:t,className:O()("button",n,{"":c}),children:a})},g=function(e){var t=e.onClose,n=e.showModal,c=e.setShowModal,o=Object(r.b)(),s=a.a.useState({name:"",phone:""}),l=Object(A.a)(s,2),j=l[0],d=l[1],m=function(e){var t=e.target,n=t.name,c=t.value;return d((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},n,c))}))};return Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)("div",{className:"modal",children:Object(h.jsxs)("div",{className:"modal__block",children:[Object(h.jsx)("img",{src:b,alt:"edit",className:"modal-item__close",onClick:function(){return c((function(e){return!e}))}}),Object(h.jsx)("div",{className:"modal__title",children:"New contact"}),Object(h.jsx)("input",{className:"modal__input",type:"text",placeholder:"Contact Name",name:"name",value:j.name,onChange:function(e){return m(e)}}),Object(h.jsx)("input",{className:"modal__input",type:"text",placeholder:"Contact Phone",name:"phone",value:j.phone,onChange:function(e){return m(e)}}),Object(h.jsx)(x,{className:"modal__button",onClick:function(){var e;o((e=Object(i.a)({},j),function(t){return t({type:"CREATE_CONTACT",contact:e})})),t()},children:"Save"}),Object(h.jsx)(x,{className:"modal__button modal__button-close",onClick:t,children:"Close"})]})}):null})};var _=n.p+"static/media/Bitmap.9f11df3c.png",N=function(e){var t=e.name,n=e.phone,c=e.toggleEditMode,o=e.editMode,s=e.setEditMode,l=e.index,j=Object(r.b)(),d=a.a.useState({name:t,phone:n}),m=Object(A.a)(d,2),O=m[0],g=m[1],_=function(e){var t=e.target,n=t.name,c=t.value;return g((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},n,c))}))};return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)("div",{className:"modal",children:Object(h.jsxs)("div",{className:"modal__block",children:[Object(h.jsx)("img",{src:b,alt:"edit",className:"modal-item__close",onClick:function(){return s((function(e){return!e}))}}),Object(h.jsx)("div",{className:"modal__title",children:"Edit contact"}),Object(h.jsx)("input",{className:"modal__input",type:"text",name:"name",value:O.name,onChange:function(e){return _(e)}}),Object(h.jsx)("input",{className:"modal__input",type:"text",name:"phone",value:O.phone,onChange:function(e){return _(e)}}),Object(h.jsx)(x,{className:"modal__button",onClick:function(){j(function(e,t){return function(n){return n({type:"UPDATE_CONTACT",contact:e,index:t})}}(Object(i.a)({},O),l)),c()},children:"Save"}),Object(h.jsx)(x,{className:"modal__button modal__button-close",onClick:c,children:"Close"})]})}):null})},p=function(e){var t=e.contact,n=e.index,c=a.a.useState(!1),o=Object(A.a)(c,2),s=o[0],l=o[1],r=function(){return l((function(e){return!e}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"contact-item",children:[Object(h.jsxs)("div",{className:"contact-item__header",children:[Object(h.jsx)("img",{src:_,alt:"bitmap",className:"contact-item__img"}),Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABlSURBVHgB7ZCxCcAwEAMFaTJONvIoyWjJRBkheYMLI2xc/Kv7A7V3ICBZsMFPsd223fYgmCr/up0I5qJAWKS0jSIvnPS3cKTKDzjgzzkSLueIRC65JeUpnyOVQy2HWo4mlMmTIT+p3WwKi3zl6AAAAABJRU5ErkJggg==",alt:"edit",className:"contact-item__edit",onClick:r})]}),Object(h.jsxs)("div",{className:"contact-item__content",children:[Object(h.jsx)("div",{className:"contact-item__title",children:t.name}),Object(h.jsx)(x,{className:"contact-item__button",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADWSURBVHgB7ZRvEcIwDMVfUYCEOQAJk4AEHICDIQEJoAAc7FAwHAwH4CAkXA9K125rL/u2311uWy/L65/XADMpEFFLXWRsiUwW3neoUMGxhpLAK5KnJnCP5JVQErhF8lZQErhG8s7Qgh1Tey46QBMuuNUs7m8RjDEnfjwwJTzz0q7gyZFt0SGRo3OTC2gj7YGj6RPhsZ3NuXDs7crHtxUpSr/+9CfC7xWFaZGCFWmcAlVP8Q/IwTmTQZAL/7uhcEvXEXCE5DLWkwk4QnI+4h5x0ddxmEnhDRdEbJmsNKyEAAAAAElFTkSuQmCC",alt:"phone"})})]})]}),Object(h.jsx)(N,Object(i.a)(Object(i.a)({},t),{},{index:n,toggleEditMode:r,editMode:s,setEditMode:l}))]})},v=function(e){var t=e.openModal,n=e.loginName,c=Object(r.b)(),a=Object(r.c)((function(e){return e.users.list}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"header__content",children:[Object(h.jsxs)("div",{className:"header__name",children:["Hello, ",n]}),Object(h.jsx)("div",{className:"header__logout",onClick:function(){c((function(e){return e({type:"LOGOUT_SUCCESS"})}))},children:"Logout"})]})})}),Object(h.jsx)("div",{className:"about",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"about__content",children:[Object(h.jsx)(d.b,{to:"/new",children:Object(h.jsx)(x,{className:"about__button",onClick:t,children:"New Contact"})}),Object(h.jsx)(x,{className:"about__button",children:"Download CSV"})]})})}),Object(h.jsx)("div",{className:"contact",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"contact__content",children:a.sort((function(e,t){return e.name<t.name?-1:1})).map((function(e,t){return Object(h.jsx)(p,{contact:e,index:t},t)}))})})})]})})},C=function(){var e=a.a.useState(!1),t=Object(A.a)(e,2),n=t[0],c=t[1],o=Object(r.c)((function(e){return e.login})),s=function(){c((function(e){return!e}))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(v,Object(i.a)(Object(i.a)({},o),{},{openModal:s})),Object(h.jsx)(g,{onClose:s,showModal:n,setShowModal:c})]})})},f=function(){var e=Object(r.b)(),t=Object(j.g)(),n=a.a.useState(""),c=Object(A.a)(n,2),o=c[0],s=c[1];return Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"login__block",children:[Object(h.jsx)("div",{className:"login__title",children:"SignIn"}),Object(h.jsx)("input",{className:"login__input",type:"text",placeholder:"What's your name?",name:"name",value:o,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)(x,{onClick:function(){e(function(e){return function(t){return t({type:"JOINED",name:e})}}(o)),t.push("/")},className:"login__button",children:"Submit"})]})})};function E(e){var t=e.component,n=Object(l.a)(e,["component"]),c=Object(r.c)((function(e){return e.login.joined}));return Object(h.jsx)(j.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return c?Object(h.jsx)(t,Object(i.a)({},e)):Object(h.jsx)(j.a,{to:"/login"})}}))}var S=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/new",component:f}),Object(h.jsx)(j.b,{exact:!0,path:"/login",component:f}),Object(h.jsx)(E,{exact:!0,path:"/",component:C})]})})})},w=n(13),k=n(25),R=n(26),T={list:[{name:"Vitya",phone:"84847387438"},{name:"Katya",phone:"84847387438"},{name:"Vitya",phone:"84847387438"},{name:"Katya",phone:"84847387438"},{name:"Vitya",phone:"84847387438"}]};var U={joined:!!localStorage.getItem("token"),loginName:JSON.parse(localStorage.getItem("token"))};var M=Object(w.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CONTACT":return Object(i.a)(Object(i.a)({},e),{},{list:[].concat(Object(R.a)(e.list),[Object(i.a)({},t.contact)])});case"UPDATE_CONTACT":return Object(i.a)(Object(i.a)({},e),{},{list:e.list.map((function(e,n){return n===t.index?Object(i.a)({},t.contact):e}))});default:return Object(i.a)({},e)}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"JOINED":return localStorage.setItem("token",JSON.stringify(t.name)),Object(i.a)(Object(i.a)({},e),{},{joined:!0,loginName:t.name});case"LOGOUT_SUCCESS":return localStorage.removeItem("token"),Object(i.a)(Object(i.a)({},e),{},{loginName:null,joined:!1});default:return Object(i.a)({},e)}}}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.c,B=Object(w.d)(M,I(Object(w.a)(k.a)));s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(r.a,{store:B,children:Object(h.jsx)(S,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f4f145c1.chunk.js.map