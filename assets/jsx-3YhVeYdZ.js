var p,d;function v(){if(d)return p;d=1,p=u,u.displayName="jsx",u.aliases=[];function u(x){(function(a){var i=a.util.clone(a.languages.javascript),j=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,h=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function c(e,t){return e=e.replace(/<S>/g,function(){return j}).replace(/<BRACES>/g,function(){return h}).replace(/<SPREAD>/g,function(){return l}),RegExp(e,t)}l=c(l).source,a.languages.jsx=a.languages.extend("markup",i),a.languages.jsx.tag.pattern=c(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),a.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,a.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,a.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,a.languages.jsx.tag.inside.comment=i.comment,a.languages.insertBefore("inside","attr-name",{spread:{pattern:c(/<SPREAD>/.source),inside:a.languages.jsx}},a.languages.jsx.tag),a.languages.insertBefore("inside","special-attr",{script:{pattern:c(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:a.languages.jsx}}},a.languages.jsx.tag);var g=function(e){return e?typeof e=="string"?e:typeof e.content=="string"?e.content:e.content.map(g).join(""):""},f=function(e){for(var t=[],s=0;s<e.length;s++){var n=e[s],o=!1;if(typeof n!="string"&&(n.type==="tag"&&n.content[0]&&n.content[0].type==="tag"?n.content[0].content[0].content==="</"?t.length>0&&t[t.length-1].tagName===g(n.content[0].content[1])&&t.pop():n.content[n.content.length-1].content==="/>"||t.push({tagName:g(n.content[0].content[1]),openedBraces:0}):t.length>0&&n.type==="punctuation"&&n.content==="{"?t[t.length-1].openedBraces++:t.length>0&&t[t.length-1].openedBraces>0&&n.type==="punctuation"&&n.content==="}"?t[t.length-1].openedBraces--:o=!0),(o||typeof n=="string")&&t.length>0&&t[t.length-1].openedBraces===0){var r=g(n);s<e.length-1&&(typeof e[s+1]=="string"||e[s+1].type==="plain-text")&&(r+=g(e[s+1]),e.splice(s+1,1)),s>0&&(typeof e[s-1]=="string"||e[s-1].type==="plain-text")&&(r=g(e[s-1])+r,e.splice(s-1,1),s--),e[s]=new a.Token("plain-text",r,null,r)}n.content&&typeof n.content!="string"&&f(n.content)}};a.hooks.add("after-tokenize",function(e){e.language!=="jsx"&&e.language!=="tsx"||f(e.tokens)})})(x)}return p}export{v as r};
//# sourceMappingURL=jsx-3YhVeYdZ.js.map