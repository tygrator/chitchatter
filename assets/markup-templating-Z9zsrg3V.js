var s,_;function S(){if(_)return s;_=1,s=c,c.displayName="markupTemplating",c.aliases=[];function c(m){(function(f){function k(a,t){return"___"+a.toUpperCase()+t+"___"}Object.defineProperties(f.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,p){if(a.language===t){var u=a.tokenStack=[];a.code=a.code.replace(o,function(n){if(typeof p=="function"&&!p(n))return n;for(var i=u.length,r;a.code.indexOf(r=k(t,i))!==-1;)++i;return u[i]=n,r}),a.grammar=f.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language!==t||!a.tokenStack)return;a.grammar=f.languages[t];var o=0,p=Object.keys(a.tokenStack);function u(n){for(var i=0;i<n.length&&!(o>=p.length);i++){var r=n[i];if(typeof r=="string"||r.content&&typeof r.content=="string"){var y=p[o],d=a.tokenStack[y],l=typeof r=="string"?r:r.content,h=k(t,y),g=l.indexOf(h);if(g>-1){++o;var v=l.substring(0,g),b=new f.Token(t,f.tokenize(d,a.grammar),"language-"+t,d),T=l.substring(g+h.length),e=[];v&&e.push.apply(e,u([v])),e.push(b),T&&e.push.apply(e,u([T])),typeof r=="string"?n.splice.apply(n,[i,1].concat(e)):r.content=e}}else r.content&&u(r.content)}return n}u(a.tokens)}}})})(m)}return s}export{S as r};
//# sourceMappingURL=markup-templating-Z9zsrg3V.js.map
