"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[412],{197:function(n,e,r){r.d(e,{M1:function(){return f},Pg:function(){return p},Pt:function(){return v},ik:function(){return o},tx:function(){return d}});var t=r(5861),a=r(7757),u=r.n(a),c=r(4569),s=r.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="90cfe661c2323ab539dac15dcff3c499",o=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("trending/movie/day",{params:{api_key:i}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"&language=en-US"),{params:{api_key:i}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("search/movie",{params:{api_key:i,query:e,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},412:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,a,u=r(5861),c=r(885),s=r(7757),i=r.n(s),o=r(6871),p=r(2791),f=r(197),d=r(8014),v=r(168),l=r(6444),h=l.ZP.div(t||(t=(0,v.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 16px;\n"]))),x=l.ZP.p(a||(a=(0,v.Z)(["\n    color: gray;\n"]))),g=r(184),m=function(n){var e=n.review,r=e.author,t=e.updated_at,a=e.created_at,u=e.content,c=(null!==t&&void 0!==t?t:a).slice(0,10);return(0,g.jsxs)("li",{children:[(0,g.jsxs)(h,{children:[(0,g.jsxs)("h4",{children:[(0,g.jsx)(d.yEe,{})," ",r]}),(0,g.jsx)(x,{children:c})]}),(0,g.jsx)("p",{children:u})]})};function w(){var n=(0,o.UO)().id,e=(0,p.useState)(null),r=(0,c.Z)(e,2),t=r[0],a=r[1];return(0,p.useEffect)((function(){(0,u.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.tx)(n);case 2:r=e.sent,a(r.results);case 4:case"end":return e.stop()}}),e)})))()}),[n]),(0,g.jsx)(g.Fragment,{children:t?(0,g.jsx)("ul",{children:t.map((function(n){return(0,g.jsx)(m,{review:n},n.id)}))}):(0,g.jsx)("h3",{children:"We don't have any reviews yet."})})}}}]);
//# sourceMappingURL=412.57caecd9.chunk.js.map