import{S as w,i as A,s as E,e as p,t as S,c as h,a as f,g as k,d as c,b,f as C,D as l,h as U,E as $,j as D,k as g,m as G,n as x,o as L,x as P,u as j,v as H}from"../chunks/vendor-c23136b9.js";function q(o){let e,n;return{c(){e=p("h1"),n=S(o[0]),this.h()},l(s){e=h(s,"H1",{class:!0});var t=f(e);n=k(t,o[0]),t.forEach(c),this.h()},h(){b(e,"class","mx-auto text-white text-6xl p-10 drop-shadow-md svelte-1wfid7b")},m(s,t){C(s,e,t),l(e,n)},p(s,[t]){t&1&&U(n,s[0])},i:$,o:$,d(s){s&&c(e)}}}function I(o,e,n){let{content:s}=e;return o.$$set=t=>{"content"in t&&n(0,s=t.content)},[s]}class N extends w{constructor(e){super();A(this,e,I,q,E,{content:0})}}function V(o){let e,n,s,t,m,_,i,v,u,d;return n=new N({props:{content:"History"}}),i=new N({props:{content:"Credits"}}),{c(){e=p("div"),D(n.$$.fragment),s=g(),t=p("p"),m=S(`LibreSprite originated as a fork of Aseprite, developed by David
        Capello. Aseprite used to be distributed under the GNU General Public
        License version 2, but was moved to a proprietary license on August
        26th, 2016.`),_=g(),D(i.$$.fragment),v=g(),u=p("p"),this.h()},l(a){e=h(a,"DIV",{class:!0});var r=f(e);G(n.$$.fragment,r),s=x(r),t=h(r,"P",{class:!0});var y=f(t);m=k(y,`LibreSprite originated as a fork of Aseprite, developed by David
        Capello. Aseprite used to be distributed under the GNU General Public
        License version 2, but was moved to a proprietary license on August
        26th, 2016.`),y.forEach(c),_=x(r),G(i.$$.fragment,r),v=x(r),u=h(r,"P",{}),f(u).forEach(c),r.forEach(c),this.h()},h(){b(t,"class","text-left text-2xl w-2/4 mx-auto "),b(e,"class","mx-auto text-center")},m(a,r){C(a,e,r),L(n,e,null),l(e,s),l(e,t),l(t,m),l(e,_),L(i,e,null),l(e,v),l(e,u),d=!0},p:$,i(a){d||(P(n.$$.fragment,a),P(i.$$.fragment,a),d=!0)},o(a){j(n.$$.fragment,a),j(i.$$.fragment,a),d=!1},d(a){a&&c(e),H(n),H(i)}}}class B extends w{constructor(e){super();A(this,e,null,V,E,{})}}export{B as default};