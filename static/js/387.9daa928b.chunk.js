"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{852:function(t,n,e){function r(t,n,e,r,c,a,u){try{var o=t[a](u),i=o.value}catch(s){return void e(s)}o.done?n(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=t.apply(n,e);function o(t){r(u,c,a,o,i,"next",t)}function i(t){r(u,c,a,o,i,"throw",t)}o(void 0)}))}}e.d(n,{Z:function(){return p},L:function(){return f}});var a=e(687),u=e.n(a),o="api.themoviedb.org/3",i="d0d7894e72847cf4bdccbd92204adc61",s=function(){var t=c(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://".concat(o,"/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=c(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://".concat(o,"/search/movie?query=").concat(n,"&api_key=").concat(i,"&include_adult=false&page=1"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=s},387:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r,c=e(439),a=e(791),u=e(689),o=e(852),i=e(168),s=e(686).default.img(r||(r=(0,i.Z)(["\n  weight: 10em;\n  height: 10em;\n"]))),f=e(184),p=function(){var t=(0,a.useState)(""),n=(0,c.Z)(t,2),e=n[0],r=n[1],i=(0,a.useState)([]),p=(0,c.Z)(i,2),h=p[0],l=p[1],d=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,o.Z)("movie/".concat(d,"/credits")).then((function(t){return l(t.cast)})).catch((function(t){return r(t.message)}))}),[d]),console.log(e),(0,a.useMemo)((function(){return h.map((function(t){var n=t.profile_path,e=t.name,r=t.id;return{profile_path:"https://image.tmdb.org/t/p/w500".concat(n,"??''"),name:e,id:r}}))}),[h]).map((function(t){var n=t.profile_path,e=t.name,r=t.id;return(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(s,{src:n,alt:e})}),(0,f.jsx)("li",{children:e})]},r)}))}}}]);
//# sourceMappingURL=387.9daa928b.chunk.js.map