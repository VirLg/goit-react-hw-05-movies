"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{258:function(e,t,n){function r(e,t,n,r,c,a,u){try{var o=e[a](u),s=o.value}catch(i){return void n(i)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var u=e.apply(t,n);function o(e){r(u,c,a,o,s,"next",e)}function s(e){r(u,c,a,o,s,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return l},L:function(){return f}});var a=n(687),u=n.n(a),o="api.themoviedb.org/3",s="d0d7894e72847cf4bdccbd92204adc61",i=function(){var e=c(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://".concat(o,"/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=c(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://".concat(o,"/search/movie?query=").concat(t,"&api_key=").concat(s,"&include_adult=false&page=1"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=i},186:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(689),u=n(258),o=n(184);t.default=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,c.useState)([]),f=(0,r.Z)(i,2),l=f[0],p=f[1],h=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.Z)("movie/".concat(h,"/reviews")).then((function(e){var t=e.results;return p(t)})).catch((function(e){return s(e.message)}))}),[h]),console.log(n),(0,o.jsx)("ul",{children:l.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("h2",{children:t}),l.author,(0,o.jsx)("p",{children:n})]},r)}))})}}}]);
//# sourceMappingURL=186.43afe9c3.chunk.js.map