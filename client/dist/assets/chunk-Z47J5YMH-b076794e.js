import{r as c,h as S,f as n,g,o as h,j as r,c as d,I as v}from"./index-94eab420.js";function I(i){return c.Children.toArray(i).filter(t=>c.isValidElement(t))}var[C,y]=S({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),o=n(function(t,s){const e=g("List",t),{children:a,styleType:m="none",stylePosition:u,spacing:l,...L}=h(t),p=I(a),f=l?{["& > *:not(style) ~ *:not(style)"]:{mt:l}}:{};return r(C,{value:e,children:r(d.ul,{ref:s,listStyleType:m,listStylePosition:u,role:"list",__css:{...e.container,...f},...L,children:p})})});o.displayName="List";var _=n((i,t)=>{const{as:s,...e}=i;return r(o,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...e})});_.displayName="OrderedList";var x=n(function(t,s){const{as:e,...a}=t;return r(o,{ref:s,as:"ul",styleType:"initial",marginStart:"1em",...a})});x.displayName="UnorderedList";var N=n(function(t,s){const e=y();return r(d.li,{ref:s,...t,__css:e.item})});N.displayName="ListItem";var T=n(function(t,s){const e=y();return r(v,{ref:s,role:"presentation",...t,__css:e.icon})});T.displayName="ListIcon";export{o as L,N as a,T as b};
