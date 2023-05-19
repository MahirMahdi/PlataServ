import{r as N,j as l,A as C,m as w,a as F,c as E,f as T}from"./index-94eab420.js";import{w as h,T as y,d as M,e as k,f as O}from"./Sidebar-a2170b0b.js";var A={exit:({reverse:n,initialScale:t,transition:a,transitionEnd:e,delay:i})=>{var o;return{opacity:0,...n?{scale:t,transitionEnd:e==null?void 0:e.exit}:{transitionEnd:{scale:t,...e==null?void 0:e.exit}},transition:(o=a==null?void 0:a.exit)!=null?o:h.exit(y.exit,i)}},enter:({transitionEnd:n,transition:t,delay:a})=>{var e;return{opacity:1,scale:1,transition:(e=t==null?void 0:t.enter)!=null?e:h.enter(y.enter,a),transitionEnd:n==null?void 0:n.enter}}},I={initial:"exit",animate:"enter",exit:"exit",variants:A},X=N.forwardRef(function(t,a){const{unmountOnExit:e,in:i,reverse:o=!0,initialScale:r=.95,className:s,transition:v,transitionEnd:m,delay:f,...x}=t,d=e?i&&e:!0,p=i||e?"enter":"exit",u={initialScale:r,reverse:o,transition:v,transitionEnd:m,delay:f};return l(C,{custom:u,children:d&&l(w.div,{ref:a,className:F("chakra-offset-slide",s),...I,animate:p,custom:u,...x})})});X.displayName="ScaleFade";var b={initial:({offsetX:n,offsetY:t,transition:a,transitionEnd:e,delay:i})=>{var o;return{opacity:0,x:n,y:t,transition:(o=a==null?void 0:a.exit)!=null?o:h.exit(y.exit,i),transitionEnd:e==null?void 0:e.exit}},enter:({transition:n,transitionEnd:t,delay:a})=>{var e;return{opacity:1,x:0,y:0,transition:(e=n==null?void 0:n.enter)!=null?e:h.enter(y.enter,a),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:n,offsetX:t,transition:a,transitionEnd:e,reverse:i,delay:o})=>{var r;const s={x:t,y:n};return{opacity:0,transition:(r=a==null?void 0:a.exit)!=null?r:h.exit(y.exit,o),...i?{...s,transitionEnd:e==null?void 0:e.exit}:{transitionEnd:{...s,...e==null?void 0:e.exit}}}}},_={initial:"initial",animate:"enter",exit:"exit",variants:b},j=N.forwardRef(function(t,a){const{unmountOnExit:e,in:i,reverse:o=!0,className:r,offsetX:s=0,offsetY:v=8,transition:m,transitionEnd:f,delay:x,...d}=t,p=e?i&&e:!0,u=i||e?"enter":"exit",g={offsetX:s,offsetY:v,reverse:o,transition:m,transitionEnd:f,delay:x};return l(C,{custom:g,children:p&&l(w.div,{ref:a,className:F("chakra-offset-slide",r),custom:g,..._,animate:u,...d})})});j.displayName="SlideFade";var B={slideInBottom:{..._,custom:{offsetY:16,reverse:!0}},slideInRight:{..._,custom:{offsetX:16,reverse:!0}},scale:{...I,custom:{initialScale:.95,reverse:!0}},none:{}},U=E(w.section),Y=n=>B[n||"none"],R=N.forwardRef((n,t)=>{const{preset:a,motionProps:e=Y(a),...i}=n;return l(U,{ref:t,...e,...i})});R.displayName="ModalTransition";var $=T((n,t)=>{const{className:a,children:e,containerProps:i,motionProps:o,...r}=n,{getDialogProps:s,getDialogContainerProps:v}=M(),m=s(r,t),f=v(i),x=F("chakra-modal__content",a),d=k(),p={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...d.dialog},u={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...d.dialogContainer},{motionPreset:g}=M();return l(O,{children:l(E.div,{...f,className:"chakra-modal__content-container",tabIndex:-1,__css:u,children:l(R,{preset:g,motionProps:o,className:x,...m,__css:p,children:e})})})});$.displayName="ModalContent";var c=256,D=[],P=256,S;for(;c--;)D[c]=(c+256).toString(16).substring(1);function Z(n){var t=0,a=n||11;if(!S||c+a>P*2)for(S="",c=0;t<P;t++)S+=D[Math.random()*256|0];return S.substring(c,c+++a)}export{$ as M,Z as u};