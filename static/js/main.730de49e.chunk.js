(this["webpackJsonpet-project"]=this["webpackJsonpet-project"]||[]).push([[0],{104:function(e,t,a){e.exports={App:"App_App__2B_X7"}},107:function(e,t,a){e.exports={loader:"Spinner_loader__3a_xf",load1:"Spinner_load1__8FEVz"}},117:function(e,t,a){e.exports={Form:"Form_Form__3VjpL"}},128:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=a.n(r),o=(a(128),a(104)),i=a.n(o),j=a(11),l=a(47),d=a.n(l),b=a(40),u=a(6);var x=function(){return Object(u.jsxs)("div",{className:d.a.Header,children:[Object(u.jsx)("div",{className:d.a.NavigationItems,children:Object(u.jsx)("div",{children:Object(u.jsx)(b.b,{to:"/",className:d.a.NavigationItem,activeStyle:{boxShadow:"0 0 10px 0px var(--clr-red)"},exact:!0,children:"ToDo"})})}),Object(u.jsx)("div",{className:d.a.NavigationItems,children:Object(u.jsx)(b.b,{to:"users",className:d.a.NavigationItem,activeStyle:{boxShadow:"0 0 10px 0px var(--clr-red)"},exact:!0,children:"Users"})})]})},O=a(30),m=a(233),f=a(234),p=(a(137),a(106)),h=a.n(p),v=a(54),_=a.n(v);var g=function(e){return e.loading?Object(u.jsx)("div",{}):Object(u.jsxs)("div",{className:_.a.PageControls,children:[e.page>=2?Object(u.jsx)("div",{className:_.a.Arrow,onClick:e.prev,children:Object(u.jsx)("i",{className:"fas fa-arrow-left"})}):null,Object(u.jsx)("div",{className:_.a.Page,children:e.page}),e.hasMore?Object(u.jsx)("div",{className:_.a.Arrow,onClick:e.next,children:Object(u.jsx)("i",{className:"fas fa-arrow-right"})}):null]})},N=a(107),S=a.n(N);function D(){return Object(u.jsx)("div",{className:S.a.loader,children:"Loading..."})}var T=c.a.memo(D),w=a(83),I=a.n(w);var C=function(){var e=Object(n.useState)(1),t=Object(O.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(O.a)(r,2),o=s[0],i=s[1],j=Object(n.useState)(!0),l=Object(O.a)(j,2),d=l[0],b=l[1],x=Object(n.useState)(!1),p=Object(O.a)(x,2),v=p[0],_=p[1],N=Object(n.useState)(!0),S=Object(O.a)(N,2),D=S[0],w=S[1];Object(n.useEffect)((function(){b(!0),_(!1),h.a.get("https://reqres.in/api/users",{params:{page:a}}).then((function(e){if(200!==e.status)throw new Error("Something Went Wrong");console.log(e.data.data),i(e.data.data),b(!1),w(e.data.total_pages>a)})).catch((function(e){console.log(e),b(!1),_(!0)}))}),[a]);var C=Object(u.jsx)("div",{className:I.a.Spinner,children:Object(u.jsx)(T,{})});return d||(C=Object(u.jsx)(m.b,{style:{width:"100%"},itemLayout:"vertical",dataSource:o,size:"large",renderItem:function(e){return Object(u.jsx)(m.b.Item,{style:{backgroundColor:"#eef3f8",margin:"0.5rem",borderRadius:"0.8rem"},children:Object(u.jsx)(m.b.Item.Meta,{avatar:Object(u.jsx)(f.a,{src:e.avatar}),title:Object(u.jsx)("a",{href:"https://ant.design",children:"".concat(e.first_name," ").concat(e.last_name)}),description:e.email})})}})),v&&(C=Object(u.jsx)("div",{children:"Somthing went Wrong"})),Object(u.jsxs)("div",{className:I.a.Users,children:[C,Object(u.jsx)(g,{page:a,loading:d,hasMore:D,next:function(){D&&c((function(e){return e+1}))},prev:function(){a>1&&c((function(e){return e-1}))}})]})},y=a(121),k=a(117),A=a.n(k);var P=function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],r=a[1];return Object(u.jsx)("div",{className:A.a.Form,children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.add(c),r("")},children:[Object(u.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),r(e.target.value)},value:c,placeholder:"Task",required:!0}),Object(u.jsx)("button",{type:"submit",children:Object(u.jsx)("i",{className:"fas fa-plus"})})]})})},F=a(55),E=a.n(F);var H=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoData"));null===e||0===e.length?c([{text:"Demo Task- Only appear when no task- Remove this and Add new Task",id:"1"}]):c(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoData",JSON.stringify(a))}),[a]);var r=a.map((function(e,t){return Object(u.jsxs)("div",{className:E.a.TodoList,children:[Object(u.jsxs)("div",{children:[" ",e.text]}),Object(u.jsx)("div",{className:E.a.Delete,onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));c(t)}(e.id)},children:Object(u.jsx)("i",{className:"far fa-trash-alt"})})]},t)}));return Object(u.jsxs)("div",{className:E.a.ToDo,children:[Object(u.jsx)("div",{className:E.a.Title,children:"ToDo"}),Object(u.jsx)(P,{add:function(e){c((function(t){return[].concat(Object(y.a)(t),[{text:e,id:Math.random().toString()}])}))}}),r]})};var L=function(){return Object(u.jsxs)("div",{className:i.a.App,children:[Object(u.jsx)(x,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",exact:!0,children:Object(u.jsx)(H,{})}),Object(u.jsx)(j.a,{path:"/users",exact:!0,children:Object(u.jsx)(C,{})}),Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)("div",{children:" 404"})})]})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b.a,{basename:"/et-project",children:Object(u.jsx)(L,{})})}),document.getElementById("root"))},47:function(e,t,a){e.exports={Header:"Header_Header__zdb94",NavigationItems:"Header_NavigationItems__1mr6D",NavigationItem:"Header_NavigationItem__1wlY6"}},54:function(e,t,a){e.exports={PageControls:"PageControls_PageControls__2anVG",Arrow:"PageControls_Arrow__2I2Hf",Page:"PageControls_Page__I8--J"}},55:function(e,t,a){e.exports={ToDo:"ToDo_ToDo__CESVX",Title:"ToDo_Title__3ZqpF",TodoList:"ToDo_TodoList__2pq2y",Delete:"ToDo_Delete__1lQF9"}},83:function(e,t,a){e.exports={Users:"Users_Users__1Fdct",Spinner:"Users_Spinner__3SsaK"}}},[[230,1,2]]]);
//# sourceMappingURL=main.730de49e.chunk.js.map