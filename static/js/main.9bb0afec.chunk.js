(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"styles_container__3meqM"}},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),s=n(11),i=n(3),l=n(19),u=n(2),b=n.n(u),j=n(0);function m(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),m=u[0],f=u[1],d=function(){r(""),f("")};return Object(j.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault();var n={id:Object(l.a)(),name:o,number:m};e(n),d()},autoComplete:"off",children:[Object(j.jsxs)("label",{className:b.a.label,children:["Name",Object(j.jsx)("input",{className:b.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){r(t.target.value)},value:o})]}),Object(j.jsxs)("label",{className:b.a.label,children:["Number",Object(j.jsx)("input",{className:b.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){f(t.target.value)},value:m})]}),Object(j.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})}var f=n(8),d=n.n(f),O=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:d.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:d.a.input,type:"text",value:e,onChange:n})]})},p=n(6),_=n.n(p),h=function(t){var e=t.filteredContacts,n=t.onDelete;return Object(j.jsx)("ul",{className:_.a.list,children:e.map((function(t){return Object(j.jsxs)("li",{className:_.a.item,children:[t.name,": ",t.number,Object(j.jsx)("button",{className:_.a.button,type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})},x=n(10),v=n.n(x);function N(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),l=r[0],u=r[1];Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var b=n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())}));return Object(j.jsxs)("div",{className:v.a.container,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:function(t){var e=n.find((function(e){return e.name===t.name}));e?alert("".concat(e.name," is already in contacts")):c((function(e){return[t].concat(Object(s.a)(e))}))}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{value:l,onChange:function(t){u(t.target.value)}}),Object(j.jsx)(h,{filteredContacts:b,onDelete:function(t){var e=n.filter((function(e){return e.id!==t}));c(e)}})]})}r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"contact-form_form__3oVU3",label:"contact-form_label__31OXq",input:"contact-form_input__u_tvL",button:"contact-form_button__2No4R"}},6:function(t,e,n){t.exports={list:"contact-list_list__2KHua",item:"contact-list_item__1eoGs",button:"contact-list_button__D_GkP"}},8:function(t,e,n){t.exports={label:"filter_label__Uaixy",input:"filter_input__ekyjo"}}},[[17,1,2]]]);
//# sourceMappingURL=main.9bb0afec.chunk.js.map