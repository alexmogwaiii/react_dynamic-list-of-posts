(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),o=a(1),u=a.n(o),i=a(2),l=a(3),m=(a(12),function(e){var t=e.posts,a=e.setPostId,n=e.selectedPostId;return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostsList__item"},r.a.createElement("div",null,r.a.createElement("b",null,"[User",e.userId,"]:"," "),e.title),n!==e.id?r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){a(e.id)}},"Open"):r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){a(0)}},"Close"))}))))}),p=(a(13),function(e){var t=e.postComment,a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],o=c[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),m=i[0],p=i[1],f=Object(n.useState)(""),d=Object(l.a)(f,2),b=d[0],v=d[1],E=Object(n.useState)(!1),h=Object(l.a)(E,2),_=h[0],N=h[1],w=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":o(n);break;case"email":p(n);break;case"body":v(n)}_&&N(!1)};return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),s.trim()&&m.trim()&&b.trim()?(t([s,m,b]),o(""),p(""),v("")):N(!0)}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:s,onChange:w,required:!0})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:m,onChange:w,required:!0})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:b,onChange:w,required:!0})),_&&r.a.createElement("div",{className:"NewCommentForm__has-spaces"},"The fields cannot contain only spaces"),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),f=function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate-api.herokuapp.com").concat(t),a);case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("\n          ".concat(n.status," - ").concat(n.statusText,"\n        "));case 6:return e.abrupt("return",n.json());case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/posts");case 2:if(a=e.sent,0!==t){e.next=5;break}return e.abrupt("return",a.data);case 5:return e.abrupt("return",a.data.filter((function(e){return e.userId===t})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/posts/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/comments");case 2:return a=e.sent,e.abrupt("return",a.data.filter((function(e){return e.postId===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/comments/".concat(t),{method:"DELETE"});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/comments",{method:"POST",body:JSON.stringify(t)});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=(a(14),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),N=(a(15),r.a.memo((function(e){var t=e.selectedPostId,a=Object(n.useState)(null),c=Object(l.a)(a,2),s=c[0],o=c[1],m=Object(n.useState)(null),f=Object(l.a)(m,2),d=f[0],N=f[1],w=Object(n.useState)(!0),O=Object(l.a)(w,2),j=O[0],y=O[1],x=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:a=e.sent,N(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(a);case 2:k(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(u.a.mark((function e(a){var n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)(a,3),r=n[0],c=n[1],s=n[2],e.next=3,h({postId:t,name:r,email:c,body:s});case 3:k(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(t),k(t)}),[t]),s&&d?r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.title)),r.a.createElement("section",{className:"PostDetails__comments"},j?r.a.createElement("button",{type:"button",className:"button",onClick:function(){y(!j)}},"Hide Comments"):r.a.createElement("button",{type:"button",className:"button",onClick:function(){y(!j)}},"Show"," ".concat(d.length," "),"Comments"),d&&j&&r.a.createElement("ul",{className:"PostDetails__list"},d.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){P(e.id)}},"X"),r.a.createElement("p",null,e.body),r.a.createElement("span",{className:"PostDetails__name"},e.name))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(p,{postComment:C})))):r.a.createElement(_,null)}))),w=(a(16),a(17),function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),o=Object(l.a)(s,2),p=o[0],f=o[1],b=Object(n.useState)([]),v=Object(l.a)(b,2),E=v[0],h=v[1];Object(n.useEffect)((function(){_(a)}),[a]);var _=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:a=e.sent,h(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:a,onChange:function(e){c(+e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(m,{posts:E,userId:a,setPostId:f,selectedPostId:p})),r.a.createElement("div",{className:"App__content"},p?r.a.createElement(N,{selectedPostId:p}):"No select detail")))});s.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.fc0a57ff.chunk.js.map