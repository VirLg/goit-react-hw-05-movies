"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[772],{258:function(t,e,n){function r(t,e,n,r,a,c,u){try{var o=t[c](u),s=o.value}catch(i){return void n(i)}o.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var u=t.apply(e,n);function o(t){r(u,a,c,o,s,"next",t)}function s(t){r(u,a,c,o,s,"throw",t)}o(void 0)}))}}n.d(e,{Z:function(){return f},L:function(){return l}});var c=n(687),u=n.n(c),o="api.themoviedb.org/3",s="d0d7894e72847cf4bdccbd92204adc61",i=function(){var t=a(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://".concat(o,"/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=a(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://".concat(o,"/search/movie?query=").concat(e,"&api_key=").concat(s,"&include_adult=false&page=1"));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=i},772:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(439),a=n(87),c=n(258),u=n(791),o=n(689),s=n(184),i=function(t){var e=t.arr,n=(0,o.TH)();return(0,s.jsx)("ul",{children:e&&e.map((function(t){var e=t.original_title,r=void 0===e?"null":e,c=t.id;t.title;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"".concat(c),state:{from:n},children:r})},c)}))})},l=function(){var t,e=(0,u.useState)(null),n=(0,r.Z)(e,2),o=n[0],l=n[1],f=(0,u.useState)(""),p=(0,r.Z)(f,2),h=p[0],v=p[1],d=(0,a.lr)(),m=(0,r.Z)(d,2),x=m[0],g=m[1],b=null!==(t=x.get("movieInput"))&&void 0!==t?t:"";(0,u.useEffect)((function(){(0,c.L)(b).then((function(t){return t.json()})).then((function(t){return v(t.results)})).catch((function(t){return l(t.message)}))}),[b,x]);return(0,s.jsxs)(s.Fragment,{children:[o&&(0,s.jsx)("h1",{children:o}),(0,s.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault()},children:[(0,s.jsx)("button",{type:"submit",className:"button",children:(0,s.jsx)("span",{className:"button-label",children:"Search"})}),(0,s.jsx)("input",{className:"input",type:"text",placeholder:"Search images and photos",onChange:function(t){if(""===t.target.value)return g({});g({movieInput:t.target.value})},value:b})]}),(0,s.jsx)(i,{arr:h})]})}}}]);
//# sourceMappingURL=772.b2ca2482.chunk.js.map