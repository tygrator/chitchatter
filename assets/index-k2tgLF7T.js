import{a as R,b as C,s as y,h as i,r as p,u as h,_ as T,c as d,j as m,d as x,e as g}from"./index-ETO-fTNl.js";import{T as $}from"./Tablelvl2Context-JZ_bedLP.js";function O(e){return R("MuiTableRow",e)}const _=C("MuiTableRow",["root","selected","hover","head","footer"]),v=_,j=["className","component","hover","selected"],M=e=>{const{classes:o,selected:a,hover:t,head:l,footer:s}=e;return g({root:["root",a&&"selected",t&&"hover",l&&"head",s&&"footer"]},O,o)},U=y("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.head&&o.head,a.footer&&o.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${v.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${v.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:i(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:i(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),u="tr",k=p.forwardRef(function(o,a){const t=h({props:o,name:"MuiTableRow"}),{className:l,component:s=u,hover:n=!1,selected:b=!1}=t,f=T(t,j),r=p.useContext($),c=d({},t,{component:s,hover:n,selected:b,head:r&&r.variant==="head",footer:r&&r.variant==="footer"}),w=M(c);return m.jsx(U,d({as:s,ref:a,className:x(w.root,l),role:s===u?null:"row",ownerState:c},f))}),P=k;export{P as default,O as getTableRowUtilityClass,v as tableRowClasses};
//# sourceMappingURL=index-k2tgLF7T.js.map
