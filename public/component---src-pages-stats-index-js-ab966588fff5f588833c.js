(self.webpackChunksty_my_games=self.webpackChunksty_my_games||[]).push([[102],{1223:function(e,t,n){var a=n(5112),r=n(30),c=n(3070),l=a("unscopables"),i=Array.prototype;null==i[l]&&c.f(i,l,{configurable:!0,value:r(null)}),e.exports=function(e){i[l][e]=!0}},7475:function(e,t,n){var a=n(7854),r=n(3157),c=n(4411),l=n(111),i=n(5112)("species"),o=a.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,(c(t)&&(t===o||r(t.prototype))||l(t)&&null===(t=t[i]))&&(t=void 0)),void 0===t?o:t}},5417:function(e,t,n){var a=n(7475);e.exports=function(e,t){return new(a(e))(0===t?0:t)}},6790:function(e,t,n){"use strict";var a=n(7854),r=n(3157),c=n(6244),l=n(9974),i=a.TypeError,o=function(e,t,n,a,s,u,d,m){for(var f,p,v=s,h=0,Z=!!d&&l(d,m);h<a;){if(h in n){if(f=Z?Z(n[h],h,t):n[h],u>0&&r(f))p=c(f),v=o(e,t,f,p,v,u-1)-1;else{if(v>=9007199254740991)throw i("Exceed the acceptable array length");e[v]=f}v++}h++}return v};e.exports=o},9974:function(e,t,n){var a=n(1702),r=n(9662),c=a(a.bind);e.exports=function(e,t){return r(e),void 0===t?e:c?c(e,t):function(){return e.apply(t,arguments)}}},490:function(e,t,n){var a=n(5005);e.exports=a("document","documentElement")},3157:function(e,t,n){var a=n(4326);e.exports=Array.isArray||function(e){return"Array"==a(e)}},30:function(e,t,n){var a,r=n(9670),c=n(6048),l=n(748),i=n(3501),o=n(490),s=n(317),u=n(6200),d=u("IE_PROTO"),m=function(){},f=function(e){return"<script>"+e+"</"+"script>"},p=function(e){e.write(f("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{a=new ActiveXObject("htmlfile")}catch(r){}var e,t;v="undefined"!=typeof document?document.domain&&a?p(a):((t=s("iframe")).style.display="none",o.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F):p(a);for(var n=l.length;n--;)delete v.prototype[l[n]];return v()};i[d]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m.prototype=r(e),n=new m,m.prototype=null,n[d]=e):n=v(),void 0===t?n:c(n,t)}},6048:function(e,t,n){var a=n(9781),r=n(3070),c=n(9670),l=n(5656),i=n(1956);e.exports=a?Object.defineProperties:function(e,t){c(e);for(var n,a=l(t),o=i(t),s=o.length,u=0;s>u;)r.f(e,n=o[u++],a[n]);return e}},1956:function(e,t,n){var a=n(6324),r=n(748);e.exports=Object.keys||function(e){return a(e,r)}},6535:function(e,t,n){"use strict";var a=n(2109),r=n(6790),c=n(9662),l=n(7908),i=n(6244),o=n(5417);a({target:"Array",proto:!0},{flatMap:function(e){var t,n=l(this),a=i(n);return c(e),(t=o(n,0)).length=r(t,n,n,a,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},9244:function(e,t,n){n(1223)("flatMap")},7494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var a=n(2982),r=n(5861),c=n(7757),l=n.n(c),i=(n(6535),n(9244),n(7294)),o=n(3840),s=n(7462),u=n(5505),d=n(9347),m=n(2219),f=n(1924),p=n(3483);function v(e){var t=e.children,n=e.className,a=e.compact,r=e.content,c=e.horizontal,l=e.piled,o=e.raised,h=e.size,Z=e.stacked,G=(0,u.Z)("ui",h,(0,d.lG)(a,"compact"),(0,d.lG)(c,"horizontal"),(0,d.lG)(l,"piled"),(0,d.lG)(o,"raised"),(0,d.lG)(Z,"stacked"),"segments",n),y=(0,m.Z)(v,e),b=(0,f.Z)(v,e);return i.createElement(b,(0,s.Z)({},y,{className:G}),p.kK(t)?r:t)}v.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"];var h=v;function Z(e){var t=e.children,n=e.className,a=e.content,r=(0,u.Z)("inline",n),c=(0,m.Z)(Z,e),l=(0,f.Z)(Z,e);return i.createElement(l,(0,s.Z)({},c,{className:r}),p.kK(t)?a:t)}Z.handledProps=["as","children","className","content"];var G=Z;function y(e){var t=e.attached,n=e.basic,a=e.children,r=e.circular,c=e.className,l=e.clearing,o=e.color,v=e.compact,h=e.content,Z=e.disabled,G=e.floated,b=e.inverted,E=e.loading,N=e.placeholder,x=e.padded,g=e.piled,k=e.raised,z=e.secondary,w=e.size,A=e.stacked,K=e.tertiary,P=e.textAlign,j=e.vertical,O=(0,u.Z)("ui",o,w,(0,d.lG)(n,"basic"),(0,d.lG)(r,"circular"),(0,d.lG)(l,"clearing"),(0,d.lG)(v,"compact"),(0,d.lG)(Z,"disabled"),(0,d.lG)(b,"inverted"),(0,d.lG)(E,"loading"),(0,d.lG)(N,"placeholder"),(0,d.lG)(g,"piled"),(0,d.lG)(k,"raised"),(0,d.lG)(z,"secondary"),(0,d.lG)(A,"stacked"),(0,d.lG)(K,"tertiary"),(0,d.lG)(j,"vertical"),(0,d.sU)(t,"attached"),(0,d.sU)(x,"padded"),(0,d.X4)(P),(0,d.cD)(G,"floated"),"segment",c),_=(0,m.Z)(y,e),F=(0,f.Z)(y,e);return i.createElement(F,(0,s.Z)({},_,{className:O}),p.kK(a)?h:a)}y.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],y.Group=h,y.Inline=G;var b=y,E=n(6616),N=n(5653);function x(e){var t=e.children,n=e.className,a=e.color,r=e.content,c=e.horizontal,l=e.inverted,o=e.items,v=e.size,h=e.widths,Z=(0,u.Z)("ui",a,v,(0,d.lG)(c,"horizontal"),(0,d.lG)(l,"inverted"),(0,d.H0)(h),"statistics",n),G=(0,m.Z)(x,e),y=(0,f.Z)(x,e);return p.kK(t)?p.kK(r)?i.createElement(y,(0,s.Z)({},G,{className:Z}),(0,N.Z)(o,(function(e){return P.create(e)}))):i.createElement(y,(0,s.Z)({},G,{className:Z}),r):i.createElement(y,(0,s.Z)({},G,{className:Z}),t)}x.handledProps=["as","children","className","color","content","horizontal","inverted","items","size","widths"];var g=x;function k(e){var t=e.children,n=e.className,a=e.content,r=(0,u.Z)("label",n),c=(0,m.Z)(k,e),l=(0,f.Z)(k,e);return i.createElement(l,(0,s.Z)({},c,{className:r}),p.kK(t)?a:t)}k.handledProps=["as","children","className","content"],k.create=(0,E.u5)(k,(function(e){return{content:e}}));var z=k;function w(e){var t=e.children,n=e.className,a=e.content,r=e.text,c=(0,u.Z)((0,d.lG)(r,"text"),"value",n),l=(0,m.Z)(w,e),o=(0,f.Z)(w,e);return i.createElement(o,(0,s.Z)({},l,{className:c}),p.kK(t)?a:t)}w.handledProps=["as","children","className","content","text"],w.create=(0,E.u5)(w,(function(e){return{content:e}}));var A=w;function K(e){var t=e.children,n=e.className,a=e.color,r=e.content,c=e.floated,l=e.horizontal,o=e.inverted,v=e.label,h=e.size,Z=e.text,G=e.value,y=(0,u.Z)("ui",a,h,(0,d.cD)(c,"floated"),(0,d.lG)(l,"horizontal"),(0,d.lG)(o,"inverted"),"statistic",n),b=(0,m.Z)(K,e),E=(0,f.Z)(K,e);return p.kK(t)?p.kK(r)?i.createElement(E,(0,s.Z)({},b,{className:y}),A.create(G,{defaultProps:{text:Z},autoGenerateKey:!1}),z.create(v,{autoGenerateKey:!1})):i.createElement(E,(0,s.Z)({},b,{className:y}),r):i.createElement(E,(0,s.Z)({},b,{className:y}),t)}K.handledProps=["as","children","className","color","content","floated","horizontal","inverted","label","size","text","value"],K.Group=g,K.Label=z,K.Value=A,K.create=(0,E.u5)(K,(function(e){return{content:e}}));var P=K;function j(e){var t=e.active,n=e.children,a=e.className,r=e.content,c=e.disabled,l=e.indeterminate,o=e.inline,v=e.inverted,h=e.size,Z=(0,u.Z)("ui",h,(0,d.lG)(t,"active"),(0,d.lG)(c,"disabled"),(0,d.lG)(l,"indeterminate"),(0,d.lG)(v,"inverted"),(0,d.lG)(n||r,"text"),(0,d.sU)(o,"inline"),"loader",a),G=(0,m.Z)(j,e),y=(0,f.Z)(j,e);return i.createElement(y,(0,s.Z)({},G,{className:Z}),p.kK(n)?r:n)}j.handledProps=["active","as","children","className","content","disabled","indeterminate","inline","inverted","size"];var O=j,_=n(9515),F={setAllGames:n(2301).np};var M=(0,o.$j)((function(e){return{allGames:e.games.allGames}}),F)((function(e){var t=e.setAllGames,n=e.allGames,c=i.useState(!1),o=c[0],s=c[1];function u(){return(u=(0,r.Z)(l().mark((function e(){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o&&!n){e.next=2;break}return e.abrupt("return");case 2:return s(!0),e.prev=3,e.next=6,(0,_.U)();case 6:a=e.sent,t(a),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:s(!1);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}i.useEffect((function(){!function(){u.apply(this,arguments)}()}));var d={total:0,mechanics:[]},m=n?n.reduce((function(e,t){return{total:e.total+1,mechanics:[].concat((0,a.Z)(e.mechanics),(0,a.Z)(t.mechanics))}}),d):d,f=m.mechanics.reduce((function(e,t){if(e.find((function(e){return e.name===t})))return e;var n=m.mechanics.filter((function(e){return e===t})).length;return[].concat((0,a.Z)(e),[{name:t,count:n}])}),[]).sort((function(e,t){return e.count<t.count?1:-1}));return i.createElement(i.Fragment,null,i.createElement("h2",null,"Stats"),i.createElement(b,{textAlign:"center"},o?i.createElement(P,null,i.createElement(P.Value,null,i.createElement(O,{active:!0,size:"massive"}))):null,i.createElement(P,null,i.createElement(P.Label,null,"Total Games"),i.createElement(P.Value,null,Number(m.total)?m.total:"-")),f.flatMap((function(e,t){return t>2?[]:i.createElement(i.Fragment,{key:"pop-mech-"+t+"-"+Date.now()},i.createElement(P,null,i.createElement(P.Label,null,"Popular Mechanic ",t+1),i.createElement(P.Value,{text:!0},e.name)))}))))}))}}]);
//# sourceMappingURL=component---src-pages-stats-index-js-ab966588fff5f588833c.js.map