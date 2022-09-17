"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[684],{197:function(n,e,t){t.d(e,{M1:function(){return d},Pg:function(){return p},Pt:function(){return x},ik:function(){return c},tx:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),u=t.n(o);u().defaults.baseURL="https://api.themoviedb.org/3/";var s="90cfe661c2323ab539dac15dcff3c499",c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/movie/day",{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"&language=en-US"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/credits"),{params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/reviews"),{params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("search/movie/",{params:{api_key:s,query:e,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1784:function(n,e,t){t.d(e,{O:function(){return Z}});var r,a,i,o,u,s,c=t(168),p=t(6444),d=p.ZP.ul(r||(r=(0,c.Z)(["\n    display: grid; \n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 16px;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),f=t(501),x=p.ZP.img(a||(a=(0,c.Z)(["\n    width: 100%;\n    height: 87%;\n    object-fit: cover;\n    border-radius: 8px 8px 0 0;\n"]))),l=p.ZP.li(i||(i=(0,c.Z)(["\n    position: relative;\n    border-radius: 8px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover {\n        transform: scale(1.01);\n        cursor: pointer;\n    } \n    > a {\n        text-decoration: none;\n      }   \n"]))),h=p.ZP.span(o||(o=(0,c.Z)(["\n    background-color: orangered;\n    border-radius: 50%;\n    color: #fff;\n    padding: 16px;\n    font-size: 20px;\n    font-weight: 700;\n    position: absolute;\n    top: 16px;\n    left: 16px;\n"]))),m=p.ZP.div(u||(u=(0,c.Z)(["\n    width: 100%;\n    height: 100px;\n    padding: 8px\n"]))),g=p.ZP.p(s||(s=(0,c.Z)(["\n    font-size: 24px;\n    font-weight: 700;\n    color: black;\n"]))),v=t(184),b=function(n){var e=n.movie,t=n.state,r=e.id,a=e.title,i=e.poster_path,o=e.vote_average,u=o?o.toFixed(1):"0.0",s=i?"https://image.tmdb.org/t/p/w500"+i:"https://dummyimage.com/216x361/000/fff&text=No+poster";return(0,v.jsx)(l,{children:(0,v.jsxs)(f.rU,{to:"/movies/".concat(r),state:t,children:[(0,v.jsx)(x,{src:s,alt:a}),(0,v.jsx)(h,{children:u}),(0,v.jsx)(m,{children:(0,v.jsx)(g,{children:a})})]})})},w=t(6871),y=t(2007),Z=function(n){var e=n.movies,t=(0,w.TH)();return(0,v.jsx)(d,{children:e.map((function(n){return(0,v.jsx)(b,{movie:n,state:{from:t}},n.id)}))})};b.propTypes={movies:t.n(y)().array}},5684:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,o,u=t(5861),s=t(885),c=t(7757),p=t.n(c),d=t(828),f=t(5562),x=t.n(f),l=t(168),h=t(6444),m=h.ZP.form(r||(r=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 400px;\n    background-color: #fff;\n    border-radius: 8px;\n    overflow: hidden;\n    border: 2px solid lightgrey;\n    padding-left: 8px;\n    margin: 32px 0;\n"]))),g=h.ZP.button(a||(a=(0,l.Z)(["\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    &:hover {\n        opacity: 1;\n    }\n"]))),v=h.ZP.span(i||(i=(0,l.Z)(["\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n"]))),b=h.ZP.input(o||(o=(0,l.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n"]))),w=t(184);function y(n){var e=n.onSearch;return(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.query.value;""!==t.trim()?(e(t),n.currentTarget.reset()):x().Notify.warning("Enter your query")},children:[(0,w.jsx)(b,{type:"text",name:"query",autocomplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,w.jsxs)(g,{type:"submit",children:[(0,w.jsx)(v,{children:"Search"}),(0,w.jsx)(d.Yfv,{})]})]})}var Z=t(501),k=t(2791),j=t(197),_=t(1784);function P(){var n,e=(0,k.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],i=(0,Z.lr)(),o=(0,s.Z)(i,2),c=o[0],d=o[1],f=null!==(n=c.get("query"))&&void 0!==n?n:"";(0,k.useEffect)((function(){f&&(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,j.Pt)(f);case 2:e=n.sent,a(e.results);case 4:case"end":return n.stop()}}),n)})))()}),[f]);return(0,w.jsxs)("main",{children:[(0,w.jsx)(y,{onSearch:function(n){d(""!==n?{query:n}:{})},movies:r}),r&&(0,w.jsx)(_.O,{movies:r})]})}}}]);
//# sourceMappingURL=684.cd08a237.chunk.js.map