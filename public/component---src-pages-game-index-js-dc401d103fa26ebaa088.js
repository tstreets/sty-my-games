"use strict";(self.webpackChunksty_my_games=self.webpackChunksty_my_games||[]).push([[379],{6486:function(e,n,t){t.r(n);var l=t(5861),a=t(7757),m=t.n(a),r=t(7294),u=t(1242),c=t(818),s=t(9515);n.default=function(e){var n=e.location,t=n.hash,a=n.state.allGames,i=void 0===a?[]:a,o=t.split("/"),E=o.length?i.find((function(e){return e.id===o[1]})):null,p=r.useState(E||null),g=p[0],f=p[1],Z=r.useState(!1),h=Z[0],y=Z[1];function d(){return(d=(0,l.Z)(m().mark((function e(){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h&&!g){e.next=2;break}return e.abrupt("return");case 2:return y(!0),e.prev=3,e.next=6,(0,s.cF)(o[1]);case 6:n=e.sent,f(n),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:y(!1);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}return r.useState((function(){!function(){d.apply(this,arguments)}()})),r.createElement(r.Fragment,null,r.createElement(u.Z,null,g&&g.id?r.createElement(r.Fragment,null,r.createElement(u.Z.Row,{columns:"1"},r.createElement(u.Z.Column,null,r.createElement(c.Z,{as:"h2"},g.name)),r.createElement(u.Z.Column,null,r.createElement("p",null,g.description)),r.createElement(u.Z.Column,null,r.createElement("div",{className:"gameinfo-image",style:{backgroundImage:"url("+g.backupImage+")"},role:"img","aria-label":g.name}))),r.createElement(u.Z.Row,{columns:"2"},r.createElement(u.Z.Column,null,r.createElement("p",null,r.createElement("span",null,"Time:")," ",g.minPlaytime," -"," ",g.maxPlaytime," mins")),r.createElement(u.Z.Column,null,r.createElement("p",null,r.createElement("span",null,"Players:")," ",g.minPlayers," -"," ",g.maxPlayers))),r.createElement(u.Z.Row,{columns:"1"},r.createElement(u.Z.Column,null,r.createElement("ul",{className:"gameinfo-taglist"},g.mechanics.map((function(e,n){return r.createElement("li",{key:"game-tag-"+n,className:"gameinfo-tag"},e)})))))):g?r.createElement(r.Fragment,null,r.createElement(u.Z.Column,null,r.createElement("p",null,"Searching For Game..."))):r.createElement(r.Fragment,null,r.createElement(u.Z.Column,null,r.createElement("p",null,"No Game Found")))))}}}]);
//# sourceMappingURL=component---src-pages-game-index-js-dc401d103fa26ebaa088.js.map