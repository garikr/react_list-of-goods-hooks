(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,o=n(6),r=n.n(o),s=n(4),i=n(7),u=n(1),a=(n(12),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(u.useState)(!1),e=Object(s.a)(t,2),n=e[0],o=e[1],r=Object(u.useState)(!1),b=Object(s.a)(r,2),j=b[0],O=b[1],h=Object(u.useState)(c.NONE),d=Object(s.a)(h,2),p=d[0],f=d[1],N=function(t,e,n){var o=Object(i.a)(t);switch(e){case c.ALPABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return n?o.reverse():o}(l,p,j);return Object(a.jsx)("div",{className:"App",children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",onClick:function(){return f(c.ALPABET)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",onClick:function(){return f(c.LENGTH)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",onClick:function(){O((function(t){return!t}))},children:"Reverse"}),Object(a.jsx)("button",{type:"button",onClick:function(){return O(!1),void f(c.NONE)},children:"Reset"}),Object(a.jsx)("ul",{className:"Goods",children:N.map((function(t){return Object(a.jsx)("li",{className:"Goods__item",children:t},t)}))})]}):Object(a.jsx)("button",{type:"button",onClick:function(){o(!0)},children:"Start"})})};r.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a947d9aa.chunk.js.map