import{r as M,f as b,j as p,B as E,c as B,R as z,d as S}from"./index-94eab420.js";import{B as j}from"./chunk-6CSUKJP7-90322ddf.js";import{T as A}from"./chunk-P74GIWPW-2e89ab56.js";function N(t,c){if(t!=null){if(typeof t=="function"){t(c);return}try{t.current=c}catch{throw new Error(`Cannot assign value '${c}' to ref '${t}'`)}}}function P(...t){return c=>{t.forEach(a=>{N(a,c)})}}function q(...t){return M.useMemo(()=>P(...t),t)}var w=b(function(c,a){const{htmlWidth:r,htmlHeight:e,alt:s,...i}=c;return p("img",{width:r,height:e,ref:a,alt:s,...i})});w.displayName="NativeImage";function F(t){const{loading:c,src:a,srcSet:r,onLoad:e,onError:s,crossOrigin:i,sizes:h,ignoreFallback:n}=t,[u,d]=M.useState("pending");M.useEffect(()=>{d(a?"loading":"pending")},[a]);const v=M.useRef(),C=M.useCallback(()=>{if(!a)return;g();const o=new Image;o.src=a,i&&(o.crossOrigin=i),r&&(o.srcset=r),h&&(o.sizes=h),c&&(o.loading=c),o.onload=f=>{g(),d("loaded"),e==null||e(f)},o.onerror=f=>{g(),d("failed"),s==null||s(f)},v.current=o},[a,i,r,h,e,s,c]),g=()=>{v.current&&(v.current.onload=null,v.current.onerror=null,v.current=null)};return E(()=>{if(!n)return u==="loading"&&C(),()=>{g()}},[u,C,n]),n?"loaded":u}var G=(t,c)=>t!=="loaded"&&c==="beforeLoadOrError"||t==="failed"&&c==="onError";function R(t,c=[]){const a=Object.assign({},t);for(const r of c)r in a&&delete a[r];return a}var y=b(function(c,a){const{fallbackSrc:r,fallback:e,src:s,srcSet:i,align:h,fit:n,loading:u,ignoreFallback:d,crossOrigin:v,fallbackStrategy:C="beforeLoadOrError",referrerPolicy:g,...o}=c,f=r!==void 0||e!==void 0,V=u!=null||d||!f,L=F({...c,ignoreFallback:V}),I=G(L,C),x={ref:a,objectFit:n,objectPosition:h,...V?o:R(o,["onError","onLoad"])};return I?e||p(B.img,{as:w,className:"chakra-image__placeholder",src:r,...x}):p(B.img,{as:w,src:s,srcSet:i,crossOrigin:v,loading:u,referrerPolicy:g,className:"chakra-image",...x})});y.displayName="Image";var k={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},H=z.createContext&&z.createContext(k),m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(t){for(var c,a=1,r=arguments.length;a<r;a++){c=arguments[a];for(var e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e])}return t},m.apply(this,arguments)},_=globalThis&&globalThis.__rest||function(t,c){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&c.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,r=Object.getOwnPropertySymbols(t);e<r.length;e++)c.indexOf(r[e])<0&&Object.prototype.propertyIsEnumerable.call(t,r[e])&&(a[r[e]]=t[r[e]]);return a};function O(t){return t&&t.map(function(c,a){return z.createElement(c.tag,m({key:a},c.attr),O(c.child))})}function l(t){return function(c){return z.createElement(T,m({attr:m({},t.attr)},c),O(t.child))}}function T(t){var c=function(a){var r=t.attr,e=t.size,s=t.title,i=_(t,["attr","size","title"]),h=e||a.size||"1em",n;return a.className&&(n=a.className),t.className&&(n=(n?n+" ":"")+t.className),z.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,i,{className:n,style:m(m({color:t.color||a.color},a.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),s&&z.createElement("title",null,s),t.children)};return H!==void 0?z.createElement(H.Consumer,null,function(a){return c(a)}):c(k)}function J(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"}},{tag:"path",attr:{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"}}]})(t)}function K(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"}},{tag:"path",attr:{d:"M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"}},{tag:"path",attr:{d:"M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"}},{tag:"path",attr:{d:"M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"}}]})(t)}function Q(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"}}]})(t)}function U(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}}]})(t)}function X(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(t)}function Y(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(t)}function Z(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(t)}function t1(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}},{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(t)}function c1(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(t)}function a1(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}}]})(t)}function r1(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M224.375 19.5c-.627.005-1.25.035-1.875.063-22.916 1.004-39.905 16.736-45.063 35.093-4.796 17.07-.468 35.99 21.688 49.907-24.784 5.082-44.582 24.197-50.625 48.624L28.22 266.125l344.75-48.688c-4.686-11.665-7.433-24.554-7.72-37.875-12.373 3.495-25.437 1.82-35.688-4.843-12.483-8.115-19.316-24.395-15.156-42.97-11-3.865-20.314-11.138-28.937-20.156-2.67 1.933-5.597 3.722-8.876 5.47-4.904 2.61-10.448 4.996-16.406 7.03-5.415-5.783-11.86-10.583-19.032-14.125 2.016-.402 4.02-.877 6-1.407 7.72-2.07 14.993-4.985 20.656-8 5.664-3.016 9.72-6.49 10.657-7.75l7.03-9.438 7.625 9c11.86 14.042 21.687 21.77 34.406 23.53l12.22 1.69-4.938 11.31c-7.348 16.822-2.72 25.15 4.938 30.126 7.657 4.978 20.167 5.28 29.938-2.03l17.718-13.28-2.844 21.968c-4.23 32.48 11.383 64.938 31.844 77.875 10.23 6.468 21.06 8.458 32.78 4.53 11.724-3.927 24.924-14.41 37.533-35.405 21.685-36.113-15.126-77.975-47.376-66.625l-12.75 4.5.312-13.532c.912-37.316-34.334-67.822-74.344-59.03l-8.437 1.844-2.53-8.25c-3.99-13.03-12.2-21.695-21.19-25.25-8.988-3.556-18.85-2.703-29.155 5.625l-7.97 6.436-5.686-8.53C264.252 29.87 243.812 19.34 224.374 19.5zM212.28 121.906c1.566 0 3.102.072 4.626.22-8.18 3.796-13.844 12.073-13.844 21.686 0 13.204 10.703 23.907 23.907 23.907 13.203 0 23.905-10.704 23.905-23.907 0-.646-.044-1.274-.094-1.907 5.35 7.632 8.5 16.92 8.5 27 0 6.146-1.19 12.007-3.31 17.375-26.588 19.077-53.165 20.028-79.75 12.845-6.835-8.157-10.94-18.68-10.94-30.22 0-26.063 20.937-47 47-47zm169.845 113.156L19.97 286.156v16.594l374.436-52.844c-4.555-4.38-8.67-9.372-12.28-14.844zm97.156 16.375c-6.23 5.497-12.678 9.638-19.28 12.5l-.75 169.125 11.625-1.187 8.406-.844V251.44zm-60.56 13.907L19.97 321.656v52.75l30.843-17.156 4.593-2.563 4.563 2.625c16.475 9.383 28.455 10.95 40.155 7.813 11.7-3.138 23.93-11.893 37.875-25.875l3.875-3.875 5.28 1.5c24.013 6.806 38.055 9.512 49.064 7.625 11.008-1.887 21.244-8.403 38.218-23.78l6.28-5.69 6.25 5.69c7.754 7.03 11.293 7.7 12.47 7.655 1.176-.045 3.25-1.242 7.937-4.344 4.688-3.1 11.853-7.25 21.53-7.655 8.286-.346 18.054 2.04 29.97 7.688 8.374-7.562 15.014-12.59 23.75-13.594 8.592-.99 15.815 2.258 24.906 7.092 6.724-5.367 13.502-8.383 20.033-9.156 8.26-.978 15.21 1.12 21 2.75 5.79 1.63 10.514 2.88 15.312 2.563 4.656-.31 9.9-1.895 17.25-7.5l.156-37.658c-7.78.51-15.41-.668-22.56-3.218zm-27.533 61.53c-.486.013-.968.04-1.437.095-3.75.443-7.92 2.043-14.313 8.467l-4.906 4.938-6.155-3.313c-11.897-6.416-17.156-8.315-19.625-8.03-2.47.283-7.388 3.3-17.906 13.03l-4.906 4.532-5.875-3.156c-13.036-7.02-21.216-8.59-26.375-8.375-5.16.215-8 1.883-12 4.53-4.002 2.648-9.25 7.153-17.532 7.47-6.335.24-12.545-2.27-19.312-7.25-14.828 12.75-27.21 20.65-41.47 23.093-14.998 2.57-30.607-.71-52.186-6.687-13.58 13.024-26.973 22.878-42.22 26.967-15.368 4.123-31.947 1.747-49.5-7.156l-35.5 19.75v17.69c31.86-14.53 63.46-14.035 95.844-5.5 10.952-15 24.617-25.098 41.813-27.783 17.11-2.67 36.716 1.77 60.53 11.688 4.384-9.426 9.76-15.932 16.532-19.656 8.8-4.84 18.007-4.127 25.844-3.033 15.676 2.19 27.35 6.595 43.19-6.437l4.25-3.5 5.124 2.03c23.357 9.21 50.61 11.247 73.625-7.5l5.81-4.717 5.876 4.625c15.268 11.986 29.62 11.267 42.5 1.906l.125-27.5c-5.555 2.605-10.908 3.948-15.936 4.28-8.64.573-15.835-1.597-21.594-3.218-5.04-1.418-8.91-2.363-12.313-2.28zm1.72 45.626c-26.39 18.067-56.995 16.428-81.844 7.813-20.187 13.676-40.456 9.14-53.094 7.375-6.793-.95-11.016-.873-14.25.906-3.237 1.78-7.39 6.21-11.532 18.47l-3.313 9.81-9.438-4.28c-26.59-12.11-45.507-16.066-58.937-13.97-13.43 2.098-22.934 9.533-32.813 25.032l-3.78 5.938-6.75-2c-35.05-10.37-64.65-11.103-97.188 6.75v43.375l10.28-1.033 410.313-41.718.25-58.44c-15.042 6.07-32.325 5.435-47.907-4.03z"}}]})(t)}function e1(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M136 25.01c-16.5 0-31.3 3.4-41.29 8.4-9.9 5-13.7 10.6-13.7 14.6 0 3.9 3.8 9.61 13.7 14.5 9.99 5 24.79 8.5 41.29 8.5s31.3-3.5 41.2-8.5c10-4.89 13.8-10.6 13.8-14.5 0-4-3.8-9.6-13.8-14.6-9.9-5-24.7-8.4-41.2-8.4zm160 32c-16.5 0-31.3 3.4-41.2 8.4-10 5-13.8 10.6-13.8 14.6 0 3.9 3.8 9.61 13.8 14.5 9.9 5 24.7 8.49 41.2 8.49 4.6 0 9-.3 13.2-.8 4.3-5.49 10.4-10.36 17.5-13.6 8.2-3.7 17.7-6.7 24.3-8.59 0-4-3.8-9.6-13.8-14.6-9.9-5-24.7-8.4-41.2-8.4zM81.01 75.4c-.4 14.66 15.48 20.64 25.49 23.6 17.9 5.2 41.1 5.2 59 0 12.8-3.66 25.4-10.72 25.5-23.6-16.1 10.63-39.6 13.49-55 13.6-19.5-1.63-39.98-3.65-54.99-13.6zM376 96.31c-16.5 0-31.3 3.4-41.2 8.49-10 4.9-13.8 10.6-13.8 14.5 0 4 3.8 9.6 13.8 14.6 9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6 0-3.9-3.8-9.6-13.8-14.5-9.9-5.09-24.7-8.49-41.2-8.49zM241 107.4v2.4c2.9 1 5.7 2.2 8.3 3.5 9 4.5 16.8 10.8 20.8 18.7 10.2 2.5 21.7 3.4 32.9 2.7v-13.9c-2.3.1-4.6.2-7 .2-18.9 0-36.1-3.7-49.3-10.3-2-1-3.9-2.1-5.7-3.3zm-159.99.1c-.34 14.6 15.52 20.6 25.49 23.6 6.8 1.9 14.4 3.2 22.2 3.6 2-5.2 5.6-9.8 10.2-13.7-12.8.3-25.7-1.3-37.4-4.6-7.79-2.3-14.69-5.2-20.49-8.9zM200 121c-16.5 0-31.3 3.5-41.2 8.4-10 5-13.8 10.6-13.8 14.6s3.8 9.6 13.8 14.6c9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zM81.01 139.5c-.34 14.6 15.52 20.6 25.49 23.6 6.3 1.8 13.3 3 20.5 3.5v-13.8c-8.8-.6-17.4-2.1-25.5-4.4-7.79-2.3-14.69-5.2-20.49-8.9zM321 146.8c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-1.8 1.1-3.7 2.2-5.7 3.2-13.2 6.6-30.4 10.3-49.3 10.3s-36.1-3.7-49.3-10.3c-2-1-3.9-2.1-5.7-3.2zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zm-128 20.4c-.5 6 2.2 10.9 5.5 13.8 4.2 3.6 11 7.3 20 9.9 17.9 5.1 41.1 5.1 59 0 9-2.6 15.8-6.3 20-9.9 4.9-4.1 5.5-8.1 5.5-13.8-1.8 1.2-3.7 2.3-5.7 3.3-13.2 6.6-30.4 10.3-49.3 10.3s-36.1-3.7-49.3-10.3c-2-1-3.9-2.1-5.7-3.3zm-63.99.1c-.34 14.6 15.52 20.6 25.49 23.6 6.3 1.8 13.3 3 20.5 3.5v-13.8c-8.8-.6-17.4-2.1-25.5-4.4-7.79-2.3-14.69-5.2-20.49-8.9zM321 178.8c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.3-47.3 6.3-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zM81.01 203.5c-.34 14.6 15.52 20.6 25.49 23.6 6.3 1.8 13.3 3 20.5 3.5v-13.8c-8.8-.6-17.4-2.1-25.5-4.4-7.79-2.3-14.69-5.2-20.49-8.9zm63.99 0c-.5 6 2.2 10.8 5.5 13.7 4.2 3.6 11 7.3 20 9.9 17.9 5.1 41.1 5.1 59 0 9-2.6 15.8-6.3 20-9.9 4.9-4.1 5.5-8 5.5-13.7-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm176 7.3c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.3-47.3 6.3-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zm-128 20.5v2.3c2.9 1 5.7 2.2 8.3 3.5 9 4.5 16.8 10.8 20.8 18.7 17.3 4.2 38.7 3.9 55.4-.9 9-2.6 15.8-6.3 20-9.9 4.9-4.1 5.5-8 5.5-13.7-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm176 7.3c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.3-47.3 6.3-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zm-169 2c-16.49 0-31.29 3.5-41.29 8.4-9.9 5-13.7 10.6-13.7 14.6s3.8 9.6 13.7 14.6c10 5 24.8 8.4 41.29 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zm151 18.5c-5.8 3.7-12.7 6.6-20.5 8.9-18 5.1-38.6 6-57.5 2.6v13.7c16.8 3.5 36.7 2.9 52.5-1.6 12.6-3.7 25.4-10.8 25.5-23.6zm66 7.3c-.3 14.2 14.7 20.3 24.6 23.3 5.6-4.5 10.7-7.9 16.7-10.4-7.2-.8-14.2-2.1-20.8-4-7.8-2.3-14.7-5.2-20.5-8.9zm110 0c-2.8 1.8-5.9 3.4-9.3 4.9 3.1.3 6.2.7 9.1 1.2.4-2 .2-4 .2-6.1zM273 279v13.6c10.9 2.1 20 2.6 30 2.2v-13.9c-10.1.5-20.3-.1-30-1.9zm135 18c-16.5 0-31.3 3.5-41.2 8.4-10 5-13.8 10.6-13.8 14.6s3.8 9.6 13.8 14.6c9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zm-358.99 2.4c-.29 14.8 15.31 20.7 25.5 23.7 17.9 5.1 41.09 5.1 58.99 0 12.7-3.7 25.4-10.8 25.5-23.7-1.8 1.2-3.7 2.3-5.7 3.3-13.2 6.6-30.4 10.3-49.3 10.3-19.61-1.6-39.88-3.6-54.99-13.6zm205.99.1c-5.8 3.7-12.7 6.6-20.5 8.9-18 5.1-38.6 6-57.5 2.6v13.7c16.8 3.5 36.7 2.9 52.5-1.6 12.6-3.7 25.4-10.8 25.5-23.6zm66 7.3c-.4 10.3 8 16.1 13.8 19.1 0 0 .1.1.2.1v-12.4c-5.2-1.9-9.9-4.2-14-6.8zM49.01 331.5c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zM177 343v13.6c4.9 1.1 10.2 1.8 15.7 2.2 2-5.3 5.6-9.9 10.2-13.8-8.7.2-17.5-.5-25.9-2zm87 2c-16.5 0-31.3 3.5-41.2 8.4-10 5-13.8 10.6-13.8 14.6s3.8 9.6 13.8 14.6c9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zm89 2.4c-.1 14.8 15.2 20.7 25.5 23.7 17.9 5.1 41.1 5.1 59 0 12.7-3.7 25.4-10.8 25.5-23.7-15.8 9.6-39.7 13.5-55 13.6-19.6-1.6-39.9-3.6-55-13.6zM49.01 363.5c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zm303.99 16c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.1 41.1 5.1 59 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-144 15.9c-.5 6 2.2 10.9 5.5 13.8 4.2 3.6 11 7.3 20 9.9 17.9 5.1 41.1 5.1 59 0 9-2.6 15.8-6.3 20-9.9 4.2-3.6 5.5-6.7 5.5-9.2v-4.6c-1.8 1.2-3.7 2.3-5.7 3.3-13.2 6.6-30.4 10.3-49.3 10.3s-36.1-3.7-49.3-10.3c-2-1-3.9-2.1-5.7-3.3zm-159.99.1c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zm303.99 16c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.1 41.1 5.1 59 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-303.99 16c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zm159.99 0c-.4 10.3 8 16.1 13.8 19.1 9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 9.9-6.2 13.8-8.6 13.8-19.1-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm144 16c-.4 10.3 8 16.1 13.8 19.1 9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 9.9-6.2 13.8-8.6 13.8-19.1-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-303.99 16c-.44 10.2 7.88 16.1 13.7 19.1 10 5 24.8 8.4 41.29 8.4 16.5 0 31.3-3.4 41.2-8.4 9.9-6.2 13.8-8.6 13.8-19.1-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9z"}}]})(t)}function l1(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 100c-8 0-16 4-32 12l10.848 32.543C179.665 147.226 112.76 160.04 98.68 183h314.625c-7.012-11.422-27.093-20.334-52.305-26.738V135h-18v17.266c-21.203-4.107-44.4-6.68-65.848-7.723L288 112c-16-8-24-12-32-12zM96 201v14H55v18h41v151c0 16 16 32 32 32h256c16 0 32-16 32-32V233h41v-18h-41v-14H96z"}}]})(t)}function n1(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M278.184 23.85c-7.308-.07-14.842 1.623-22.54 4.87-.622 8.336.112 17.717 2.513 26.449 3.557 12.938 10.511 24.183 20.761 30.386 9.331 5.647 21.937 7.9 40.162 2.512-3.313-7.037-6.408-13.858-9.328-20.219-6.409-13.962-12.187-25.902-17.685-33.611-5.498-7.71-9.568-10.346-13.883-10.387zm-40.717 15.153c-8.23 5.77-16.587 13.054-25.008 21.658-10.353 10.577-20.708 22.998-30.988 36.525 16.667 7.99 28.338 23.429 28.338 41.867 0 27.1-25.197 47.739-54.44 47.739-12.098 0-23.497-3.54-32.712-9.602-16.768 18.15-36.758 36.094-54.217 53.512-13.134 13.102-24.787 25.84-32.36 37.318-7.572 11.478-10.653 21.173-9.338 28.652 1.55 8.815 8.246 17.272 21.018 25.211 12.772 7.94 31.127 14.821 53.03 20.15 4.862 1.184 9.924 2.281 15.115 3.317a556.512 556.512 0 0 1 4.689-11.717c-12.85-3.626-23.03-9.762-29.27-18.644-4.816-6.856-6.363-15.362-4.677-23.826-43.658-38.757 37.63-90.032 56.652-49.82 9.162-3.47 18.94-6.288 29.113-8.583 24.4-5.502 51.298-7.937 78.17-8.312a566.841 566.841 0 0 1 26.77.273c35.431 1.182 69.269 5.454 95.445 10.748 13.088 2.648 24.24 5.537 32.916 8.54 4.338 1.5 8.053 3.018 11.23 4.693 3.179 1.674 5.908 3.215 8.356 6.615 21.523 29.898 4.995 67.307-23.06 75.918a228.827 228.827 0 0 1 3.4 9.521c18.19-4.32 37.743-9.87 53.717-17.548-7.212-8.34-11.586-19.363-11.586-31.303 0-15.037 6.94-28.617 17.748-37.217-5.637-6.602-12.25-13.356-19.64-20.24-14.225-13.25-30.732-26.752-46.743-40.766-22.075 26.075-61.685 27.981-79.691 13.694-22.675-19.321-22.258-55.489-1.528-80.436a67.633 67.633 0 0 1 14.264-12.89 380.021 380.021 0 0 1-5.086-9.618c-23.298 7.491-42.938 5.332-57.496-3.478-15.3-9.26-24.362-24.882-28.797-41.012a96.792 96.792 0 0 1-3.334-20.94zM170.541 112c-13.552 18.032-23.067 35.542-35.95 51.492 5.8 3.312 12.902 5.299 20.778 5.299 20.95 0 36.44-14.05 36.44-29.739 0-11.573-8.435-22.245-21.268-27.052zm170.791 17.59c-23.324 15.8-27.303 52.993-10.384 63.94 20.414 13.21 44.116 1.848 54.773-11.886-17.284-15.544-32.832-33.808-44.389-52.055zM94.392 274.71c8.271-10.582 19.145-18.998 31.813-25.7-9.8-22.51-49.318 12.963-31.812 25.7zm161.12-32.291c-8.38.042-17.535.34-25.025.763l3.232 25.254c7.108-.796 14.01-1.646 20.168-2.119zm16.5 22.65c5.992-.305 11.94-.5 17.793-.568l5.38-20.881c-7.841-.486-18.388-.799-21.88-.894zm-59.492-20.475c-7.897.803-15.634 1.843-23.121 3.141l9.22 26.344c5.561-1.121 11.354-2.15 17.278-3.1zm100.88.473l-5.066 19.656c7.178.273 14.089.779 20.635 1.53l11.662-17.989a598.712 598.712 0 0 0-27.23-3.197zm46.67 6.3l-11.767 18.151c5.595 1.428 10.53 2.875 15.324 4.953l19.69-18.209c-8.179-1.988-15.6-3.515-23.246-4.894zm-188.44.079a195.38 195.38 0 0 0-16.366 4.81l12.025 25.77a253.462 253.462 0 0 1 13.67-3.922zM403.3 262.3l-24.56 22.711c1.602 1.897 2.717 3.857 3.868 5.83l34.478-10.002c-1.94-10.183-5.378-15.24-13.787-18.539zm-264.722.768c-6.196 3.002-11.823 6.348-16.785 10.043l20.645 20.012c2.42-1.656 5.142-3.081 8.062-4.508zm337.692 5.96c-6.356 5.19-10.5 13.394-10.5 22.876 0 8.835 3.6 16.56 9.232 21.771 6.923-5.51 10.087-10.786 10.453-15.406.73-9.19-2.688-18.982-9.185-29.24zm-325.932 41.26c-30.59 68.297-41.478 96.049-28.799 155.995 3.377 15.964 100.92 23.155 152.487 21.68-1.331-11.917-2.927-31.423-2.045-51.286.708-15.96 2.876-32.22 8.812-45.73 5.937-13.51 17.363-24.953 33.442-25.662 16.577-.731 29.82 8.628 38.187 20.945 8.368 12.317 13.195 27.723 16.38 42.914 3.884 18.54 5.155 36.888 5.565 48.442 5.53-1.792 12.394-3.46 16.22-7.112 14.538-62.25 11.72-111.89-24.772-172.691-11.928-21.932-204.143-16.48-215.477 12.506zm-41.57-24.734c-4.67 7.298-6.647 13.299-2.715 19.086 3.169 4.51 10.563 9.343 21.705 12.197a1541.54 1541.54 0 0 1 3.983-9.013zm304.664 15.09l-21.95 6.367c1.271 2.506 2.474 5 3.64 7.489 7.459-1.639 14.22-6.793 18.31-13.856zM246.25 317.061c-6.284 29.944-9.3 55.793-7.916 83.795-30.594 3.96-65.724 3.13-90.535-2.533 3.118-27.371 8.504-58.314 18.649-78.861 29.318-5.2 52.538-8.855 79.802-2.4zm-37.008 13.844a360.228 360.228 0 0 0-3.439 17.506l15.984.289c.719-5.88 1.618-11.723 2.754-17.42-5.13-.515-10.369-.508-15.299-.375zm-18.716 1.48c-4.111.557-8.72-.246-12.028.583-1.742 4.044-2.443 10.062-3.691 14.882l12.799.23a368.846 368.846 0 0 1 2.92-15.695zm-19.416 33.4c-1.042 6.164-1.953 12.435-2.858 18.534 4.913.794 10.118 1.347 15.44 1.685.281-6.663.771-13.318 1.486-19.964zm32.142.583a291.763 291.763 0 0 0-1.556 19.976c6.24-.14 12.382-.53 18.138-1.162-.094-6.014.036-12.228.373-18.508zm111.776 16.902c-22.102 4.045-24.23 37.056-25.065 54.207-.865 19.481.862 38.912 2.145 50.002 22.329-1.37 44.217-2.54 64.351-6.006-.26-10.359-1.283-29.588-5.275-48.635-4.537-19.923-14.8-49.702-36.156-49.568zm24.377 45.631l2.103 17.877-17.902 2.105-2.104-17.875z"}}]})(t)}function o1(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 18.365L50.14 136 256 253.635 461.86 136 256 18.365zm-154 168L50.14 216 256 333.635 461.86 216 410 186.365l-154 88-154-88zm0 80L50.14 296 256 413.635 461.86 296 410 266.365l-154 88-154-88zm0 80L50.14 376 256 493.635 461.86 376 410 346.365l-154 88-154-88z"}}]})(t)}function s1(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M353.86 48.45c-10.626-.16-20.45 3.456-29.14 13.253l-.193.217-50.586 50.098.628.703c3.395 3.7 3.106 9.463-.642 12.804-3.748 3.342-9.505 2.97-12.793-.825l-5.985-6.712c-.784 1.096-1.627 2.16-2.544 3.178-5.116 5.68-11.746 9.448-18.688 11.023l5.438 20.302c2.54 8.98-8.582 15.417-15.102 8.738l-41.2 40.803c1.41-.082 2.83-.135 4.26-.135 40.63 0 73.616 33.616 73.616 74.672 0 .803-.036 1.598-.06 2.395l141.94-153.74c8.252-10.316 9.687-20.888 6.985-31.832C407.08 82.4 399.6 71.29 389.653 62.967c-3.085-2.583-6.396-4.885-9.835-6.854L258.56 182.725c-3.418 3.685-9.193 3.856-12.824.38-3.63-3.478-3.71-9.255-.175-12.83l115.932-121.05c-1.843-.34-3.68-.584-5.494-.694-.715-.042-1.428-.07-2.137-.08zM232.31 85.597c-4.224-.048-8.876 1.842-12.583 5.96-6.327 7.024-5.918 16.11-.913 20.62 5.006 4.508 14.088 3.968 20.415-3.057 6.325-7.024 5.917-16.112.91-20.62-1.877-1.69-4.328-2.672-6.992-2.867-.277-.02-.556-.032-.837-.035zm-27.95 63.94c-7.19-.12-13.63 2.222-19.577 8.925l-.19.217-99.734 98.77c10.89.53 20.967 4.222 29.386 10.167 1.406-11.834 5.547-22.84 11.785-32.332l.44-.67 6.39-8.21c1.915-2.138 3.963-4.148 6.11-6.05l70.907-70.224c-1.372-.268-2.734-.453-4.07-.534-.486-.03-.968-.05-1.448-.057zm193.3 14.415c-2.226.018-4.423.188-6.588.52L245.744 321.88c-2.968 3.93-6.313 7.544-9.976 10.806l-5.715 6.19c9.9 2.162 19.137 6.16 27.34 11.628-.004-.254-.02-.505-.02-.76 0-12.38 4.545-23.756 12.03-32.496l-.087-.086 1.358-1.344c1.008-1.09 2.06-2.135 3.16-3.13L381.01 206.545c8.52-9.363 20.055-13.314 30.816-12.662 10.908.66 21.093 5.423 29.33 12.316 8.238 6.892 14.684 16.035 17.278 26.538.788 3.194 1.158 6.54 1.078 9.922 4.62-9.422 4.9-19.095 2.242-28.918-3.484-12.87-12.614-25.674-24.47-34.967v.002c-11.194-8.77-24.658-14.314-37.27-14.79-.79-.028-1.573-.04-2.354-.034zm11.926 47.852c-5.712-.106-10.696 1.69-15.463 7.064l-.193.216-82.07 81.28c22.277 2.517 40.072 20.28 43.12 42.585l82.31-89.153c4.454-5.58 5.124-10.833 3.665-16.742-1.468-5.945-5.675-12.3-11.35-17.05-5.678-4.75-12.668-7.778-18.867-8.153-.387-.024-.77-.04-1.152-.047zm-222.274 8.097c-4.898 0-9.644.647-14.167 1.85 1.964-.262 3.962-.41 5.994-.41 24.715 0 45.067 19.99 45.067 44.566 0 24.576-20.355 44.567-45.068 44.567-24.718 0-45.07-19.992-45.07-44.567 0-2.83.282-5.593.797-8.277-2.044 5.915-3.166 12.284-3.166 18.94 0 31.482 24.873 56.668 55.613 56.668s55.61-25.185 55.61-56.668c0-31.482-24.87-56.668-55.61-56.668zm-8.173 19.44c-15.12 0-27.07 11.857-27.07 26.566 0 14.71 11.945 26.567 27.07 26.567 15.117 0 27.067-11.858 27.067-26.567 0-14.71-11.944-26.566-27.068-26.566zm-3.388 7.357c8.742 0 16.023 7.276 16.023 16.02s-7.285 16.02-16.023 16.02c-8.742 0-16.025-7.275-16.025-16.02 0-8.743 7.287-16.02 16.025-16.02zm-93.61 28.68c-21.25 0-38.427 17.364-38.427 39.2 0 21.835 17.177 39.2 38.426 39.2 21.25 0 38.426-17.364 38.426-39.2 0-3.01-.338-5.933-.957-8.74-1.208-2.858-2.23-5.813-3.08-8.838-6.297-12.877-19.314-21.623-34.39-21.623zm-.36 11.016c15.59 0 27.085 14.1 27.085 29.823 0 15.724-11.498 29.82-27.086 29.82-15.59 0-27.087-14.098-27.087-29.82 0-15.727 11.5-29.824 27.088-29.824zm372.58.325c-6.907-.118-13.068 2.118-18.79 8.567l-.193.22-96.345 95.415c27.285 1.628 49.25 23.576 51.547 50.926l96.64-104.672c5.384-6.735 6.24-13.283 4.48-20.42-.234-.944-.527-1.893-.868-2.844l-63.383 66.342c-3.41 3.703-9.196 3.888-12.837.41-3.64-3.48-3.72-9.267-.175-12.844l65.103-68.144c.345-.37.72-.71 1.122-1.018-.786-.76-1.604-1.497-2.447-2.203-6.715-5.62-14.988-9.227-22.463-9.68-.467-.028-.93-.046-1.39-.054zm-372.9 14.73c-7.59 0-13.74 7.046-13.74 15.738 0 8.69 6.15 15.736 13.74 15.736s13.743-7.045 13.743-15.736c0-8.69-6.152-15.737-13.742-15.737zm224.952 16.6c-17.17 0-31.04 14.004-31.04 31.694 0 17.69 13.87 31.695 31.04 31.695s31.04-14.006 31.04-31.696-13.87-31.693-31.04-31.693zm-2.285 11.155c11.398 0 19.28 10.28 19.28 21.092 0 10.814-7.884 21.09-19.28 21.09-11.4 0-19.282-10.277-19.282-21.09 0-10.814 7.883-21.092 19.28-21.092zm-163.378 5.13l-14.027 15.192c-2.17 2.835-4.59 5.46-7.235 7.838l-3.986 4.317c9.624 5.793 17.842 13.746 24.006 23.185 6.715-14.72 17.602-27.106 31.113-35.588-11.134-2.634-21.307-7.826-29.87-14.946zm72.31 20.704c-34.83 0-63.015 28.553-63.015 64.192 0 35.64 28.186 64.194 63.016 64.194s63.017-28.554 63.017-64.194c0-35.638-28.188-64.193-63.017-64.193zM68.68 370.114C42.442 374.65 22.5 397.775 22.5 425.96c0 14.03 4.95 26.802 13.146 36.66-5.09-7.662-8.066-16.868-8.064-26.725v-.004c-.005-26.31 21.188-47.994 47.29-47.994 26.105 0 47.298 21.684 47.292 47.996.005 20.913-13.386 38.89-31.986 45.393 22.622-5.065 40.05-24.075 43.076-47.908-.792-4.6-1.207-9.324-1.207-14.145 0-2.07.077-4.125.226-6.16-4.7-20.763-20.513-37.028-40.71-42.11-3.065.528-6.21.817-9.422.817-4.64 0-9.146-.586-13.462-1.665zm140.48.643c27.187 0 49.2 22.702 49.2 50.203 0 27.503-22.016 50.204-49.2 50.204-27.187 0-49.2-22.702-49.2-50.203 0-27.5 22.017-50.202 49.2-50.202zm0 17.998c-17.21 0-31.2 14.195-31.2 32.205 0 18.012 13.983 32.206 31.2 32.206 17.212 0 31.2-14.195 31.2-32.205 0-18.01-13.982-32.204-31.2-32.204zm81.856 8.148c1.256 4.498 2.16 9.143 2.642 13.912 3.67-4.432 8.01-8.273 12.852-11.38-.032.002-.062.003-.094.003-5.38 0-10.554-.9-15.4-2.536zm-216.14 8.992c-16.2 0-29.295 13.238-29.29 29.995v.005c-.005 16.756 13.09 29.994 29.29 29.994 16.197 0 29.295-13.24 29.29-29.995v-.004c.005-16.756-13.093-29.994-29.29-29.994zm133.706.256c8.967 0 14.96 7.945 14.96 15.953 0 8.01-5.993 15.952-14.96 15.952-8.966 0-14.96-7.943-14.96-15.952 0-8.008 5.994-15.953 14.96-15.953zm127.203 2.664c-20.47 0-37.013 16.723-37.013 37.766 0 21.042 16.544 37.766 37.013 37.766 20.47 0 37.012-16.723 37.012-37.766 0-21.042-16.543-37.766-37.012-37.766zM71.833 422.39c8.965 0 14.958 7.943 14.958 15.952 0 8.01-5.992 15.953-14.958 15.953-8.966 0-14.96-7.944-14.96-15.953 0-8.01 5.994-15.953 14.96-15.953zm267.923 1.423c14.727 0 26.683 12.307 26.683 27.037 0 14.73-11.958 27.037-26.684 27.037-14.728 0-26.682-12.308-26.682-27.037 0-14.73 11.955-27.038 26.682-27.038zm0 18c-4.802 0-8.682 3.845-8.682 9.037s3.877 9.037 8.682 9.037c4.8 0 8.683-3.846 8.683-9.037 0-5.193-3.88-9.038-8.684-9.038z"}}]})(t)}function i1(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19.07 4.93l-1.41 1.41A8.014 8.014 0 0120 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"}}]})(t)}function h1(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z"}}]})(t)}function m1(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4h16v3z"}},{tag:"path",attr:{d:"M9 12h6v2H9z"}}]})(t)}function v1(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"}},{tag:"path",attr:{d:"M21 11.5L15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"}}]})(t)}function z1(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4H7V4h10v2zm3 16H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2zm-1.47-11.81A2.008 2.008 0 0016.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20l-3.47-7.81zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5z"}}]})(t)}function u1(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 5.5l6 4.5v9H6v-9l6-4.5M12 3L4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"}}]})(t)}function g1(){return S(j,{w:"80%",h:"100%",display:"flex",padding:"0 1rem",alignItems:"center",justifyContent:"flex-start",columnGap:".35rem",children:[p(y,{src:"https://ik.imagekit.io/y4cguk6dk/plataserv.png?",cursor:"pointer",alt:"logo",w:{base:"2.25rem",lg:"1.9rem",xl:"2.25rem"},h:{base:"2.25rem",lg:"1.9rem",xl:"2.25rem"}}),p(A,{cursor:"pointer",fontSize:{base:"1.35rem",lg:"1.15rem",xl:"1.35rem"},color:"#323130",fontFamily:"'Poppins', sans-serif",children:"PlataServ"})]})}export{K as B,k as D,l as G,y as I,g1 as L,h1 as M,T as a,H as b,v1 as c,e1 as d,q as e,Z as f,U as g,a1 as h,Y as i,X as j,s1 as k,r1 as l,P as m,n1 as n,l1 as o,z1 as p,o1 as q,i1 as r,J as s,t1 as t,F as u,c1 as v,Q as w,m1 as x,u1 as y};