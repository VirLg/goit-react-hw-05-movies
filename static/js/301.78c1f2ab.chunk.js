"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[301],{301:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),u=n(87),a=n(861),c=n(687),i=n.n(c),o=function(){var t=(0,a.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=d0d7894e72847cf4bdccbd92204adc61&include_adult=false&page=1"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=o,l=n(791),f=n(689),h=n(184),d=function(t){var e=t.arr,n=(0,f.TH)();return(0,h.jsx)("ul",{children:e&&e.map((function(t){var e=t.original_title,r=void 0===e?"null":e,a=t.id;t.title;return(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"".concat(a),state:{from:n},children:r})},a)}))})},p=function(){var t,e=(0,l.useState)(null),n=(0,r.Z)(e,2),a=n[0],c=n[1],i=(0,l.useState)(""),o=(0,r.Z)(i,2),f=o[0],p=o[1],m=(0,u.lr)(),v=(0,r.Z)(m,2),x=v[0],b=v[1],j=null!==(t=x.get("movieInput"))&&void 0!==t?t:"";return(0,h.jsxs)(h.Fragment,{children:[a&&(0,h.jsx)("h1",{children:a}),(0,h.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),s(j).then((function(t){return t.json()})).then((function(t){return p(t.results)})).catch((function(t){return c(t.message)}))},children:[(0,h.jsx)("button",{type:"submit",className:"button",children:(0,h.jsx)("span",{className:"button-label",children:"Search"})}),(0,h.jsx)("input",{className:"input",type:"text",placeholder:"Search images and photos",onChange:function(t){if(""===t.target.value)return b({});b({movieInput:t.target.value})},value:j})]}),(0,h.jsx)(d,{arr:f})]})}},861:function(t,e,n){function r(t,e,n,r,u,a,c){try{var i=t[a](c),o=i.value}catch(s){return void n(s)}i.done?e(o):Promise.resolve(o).then(r,u)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(u,a){var c=t.apply(e,n);function i(t){r(c,u,a,i,o,"next",t)}function o(t){r(c,u,a,i,o,"throw",t)}i(void 0)}))}}n.d(e,{Z:function(){return u}})}}]);
//# sourceMappingURL=301.78c1f2ab.chunk.js.map