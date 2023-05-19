import{h as w,r as o,a as _,j as r,c as d,S as A,f as G,n as M,o as z,d as k,i as x,F as D}from"./index-94eab420.js";import{e as F}from"./Logo-0c179a24.js";var[V,R]=w({strict:!1,name:"ButtonGroupContext"});function H(s){const[e,n]=o.useState(!s);return{ref:o.useCallback(a=>{a&&n(a.tagName==="BUTTON")},[]),type:e?"button":void 0}}function h(s){const{children:e,className:n,...t}=s,i=o.isValidElement(e)?o.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,a=_("chakra-button__icon",n);return r(d.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...t,className:a,children:i})}h.displayName="ButtonIcon";function g(s){const{label:e,placement:n,spacing:t="0.5rem",children:i=r(A,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l,...p}=s,m=_("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=o.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[u]:e?t:0,fontSize:"1em",lineHeight:"normal",...l}),[l,e,u,t]);return r(d.div,{className:m,...p,__css:c,children:i})}g.displayName="ButtonSpinner";var L=G((s,e)=>{const n=R(),t=M("Button",{...n,...s}),{isDisabled:i=n==null?void 0:n.isDisabled,isLoading:a,isActive:l,children:p,leftIcon:m,rightIcon:u,loadingText:c,iconSpacing:f="0.5rem",type:b,spinner:y,spinnerPlacement:S="start",className:I,as:B,...C}=z(s),T=o.useMemo(()=>{const j={...t==null?void 0:t._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...t,...!!n&&{_focus:j}}},[t,n]),{ref:E,type:P}=H(B),N={rightIcon:u,leftIcon:m,iconSpacing:f,children:p};return k(d.button,{ref:F(e,E),as:B,type:b??P,"data-active":x(l),"data-loading":x(a),__css:T,className:_("chakra-button",I),...C,disabled:i||a,children:[a&&S==="start"&&r(g,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:f,children:y}),a?c||r(d.span,{opacity:0,children:r(v,{...N})}):r(v,{...N}),a&&S==="end"&&r(g,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:f,children:y})]})});L.displayName="Button";function v(s){const{leftIcon:e,rightIcon:n,children:t,iconSpacing:i}=s;return k(D,{children:[e&&r(h,{marginEnd:i,children:e}),t,n&&r(h,{marginStart:i,children:n})]})}export{L as B};