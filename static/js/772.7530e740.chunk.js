"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[772],{852:function(t,n,e){function r(t,n,e,r,a,u,c){try{var o=t[u](c),i=o.value}catch(s){return void e(s)}o.done?n(i):Promise.resolve(i).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,u){var c=t.apply(n,e);function o(t){r(c,a,u,o,i,"next",t)}function i(t){r(c,a,u,o,i,"throw",t)}o(void 0)}))}}e.d(n,{Z:function(){return f},L:function(){return l}});var u=e(687),c=e.n(u),o="api.themoviedb.org/3",i="d0d7894e72847cf4bdccbd92204adc61",s=function(){var t=a(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://".concat(o,"/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=a(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://".concat(o,"/search/movie?query=").concat(n,"&api_key=").concat(i,"&include_adult=false&page=1"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=s},772:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(439),a=e(87),u=e(852),c=e(791),o=e(689),i=e(184),s=function(t){var n=t.arr,e=(0,o.TH)();return(0,i.jsx)("ul",{children:n&&n.map((function(t){var n=t.original_title,r=void 0===n?"null":n,u=t.id;t.title;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"".concat(u),state:{from:e},children:r})},u)}))})},l=function(){var t,n=(0,c.useState)(null),e=(0,r.Z)(n,2),o=e[0],l=e[1],f=(0,c.useState)(""),h=(0,r.Z)(f,2),p=h[0],d=h[1],v=(0,a.lr)(),m=(0,r.Z)(v,2),x=m[0],b=m[1],g=null!==(t=x.get("movieInput"))&&void 0!==t?t:"";return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("h1",{children:o}),(0,i.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),(0,u.L)(g).then((function(t){return t.json()})).then((function(t){return d(t.results)})).catch((function(t){return l(t.message)}))},children:[(0,i.jsx)("button",{type:"submit",className:"button",children:(0,i.jsx)("span",{className:"button-label",children:"Search"})}),(0,i.jsx)("input",{className:"input",type:"text",placeholder:"Search images and photos",onChange:function(t){if(""===t.target.value)return b({});b({movieInput:t.target.value})},value:g})]}),(0,i.jsx)(s,{arr:p})]})}}}]);
//# sourceMappingURL=772.7530e740.chunk.js.map