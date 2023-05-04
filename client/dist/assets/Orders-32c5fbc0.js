import{c as N,d as o,j as t,r as y}from"./index-94eab420.js";import{C as D,a as C}from"./api-5c20e404.js";import{c as L}from"./Sidebar-a2170b0b.js";import{G as q}from"./Logo-0c179a24.js";import{a as B}from"./index.esm-fe24148d.js";import{C as v}from"./chunk-FQ7BGFQK-51c77e93.js";import{L as G,a as z,b as $}from"./chunk-Z47J5YMH-b076794e.js";import{T as d}from"./chunk-P74GIWPW-2e89ab56.js";import{B as s}from"./chunk-6CSUKJP7-90322ddf.js";import{B as j}from"./chunk-NAA7TEES-e6707657.js";import{u as k,a as I,G as P,U as A,b as T,c as V}from"./UnavailableMessage-991268a8.js";var S=N("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});S.displayName="CircularProgressLabel";function W(r){return q({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M20.788 3.832c-.101-.105-.197-.213-.301-.317-.103-.103-.211-.202-.32-.302A11.903 11.903 0 0 0 12 0a11.926 11.926 0 0 0-8.486 3.514C-1.062 8.09-1.16 15.47 3.213 20.168c.099.108.197.214.3.32.104.103.21.2.317.3A11.92 11.92 0 0 0 12 24c3.206 0 6.22-1.247 8.487-3.512 4.576-4.576 4.673-11.956.301-16.656zm-16.655.301A11.057 11.057 0 0 1 12 .874c2.825 0 5.49 1.048 7.55 2.958l-1.001 1.002A9.646 9.646 0 0 0 12 2.292a9.644 9.644 0 0 0-6.865 2.844A9.644 9.644 0 0 0 2.292 12c0 2.448.9 4.753 2.542 6.549L3.831 19.55C-.201 15.191-.101 8.367 4.133 4.133zm13.798 1.318v.002l-1.015 1.014A7.346 7.346 0 0 0 12 4.589 7.357 7.357 0 0 0 6.761 6.76 7.362 7.362 0 0 0 4.589 12a7.34 7.34 0 0 0 1.877 4.913l-1.014 1.016A8.77 8.77 0 0 1 3.167 12a8.77 8.77 0 0 1 2.588-6.245A8.771 8.771 0 0 1 12 3.167c2.213 0 4.301.809 5.931 2.284zM18.537 12c0 1.745-.681 3.387-1.916 4.622S13.746 18.538 12 18.538a6.491 6.491 0 0 1-4.296-1.621l-.001-.004c-.11-.094-.22-.188-.324-.291a6.027 6.027 0 0 1-.293-.326A6.47 6.47 0 0 1 5.466 12c0-1.746.679-3.387 1.914-4.621A6.488 6.488 0 0 1 12 5.465c1.599 0 3.105.576 4.295 1.62.111.096.224.19.326.295.104.104.2.214.295.324A6.482 6.482 0 0 1 18.537 12zM7.084 17.534h.001A7.349 7.349 0 0 0 12 19.413a7.35 7.35 0 0 0 5.239-2.174A7.354 7.354 0 0 0 19.412 12a7.364 7.364 0 0 0-1.876-4.916l1.013-1.012A8.777 8.777 0 0 1 20.834 12a8.765 8.765 0 0 1-2.589 6.246A8.764 8.764 0 0 1 12 20.834a8.782 8.782 0 0 1-5.93-2.285l1.014-1.015zm12.783 2.333A11.046 11.046 0 0 1 12 23.125a11.042 11.042 0 0 1-7.551-2.957l1.004-1.001a9.64 9.64 0 0 0 6.549 2.542 9.639 9.639 0 0 0 6.865-2.846A9.642 9.642 0 0 0 21.71 12a9.64 9.64 0 0 0-2.543-6.548l1.001-1.002c4.031 4.359 3.935 11.182-.301 15.417z"}}]})(r)}function O({id:r,type:i,name:c,orderId:h,totalPrice:u,paymentMethod:b,orderPoint:p,destination:e,totalQuantity:a,timestamp:f,completeOrder:l}){const _=[{contentName:"Items",contentValue:`x${a}`},{contentName:"Payment Method",contentValue:b},{contentName:"Order Point",contentValue:p},{contentName:"Total Price",contentValue:`$${u}`}];return o(D,{w:{sm:"16.75rem",md:"19.5rem",lg:"22.5rem"},variant:"elevated",padding:".75rem",children:[o(s,{w:"100%",h:"4.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",children:[o(s,{display:"flex",alignItems:"center",columnGap:"1rem",children:[i==="queue"?t(v,{size:"3.5rem",thickness:"15px",color:"blue.100",isIndeterminate:!0,children:t(S,{fontFamily:"'Poppins', sans-serif",fontSize:".8rem",id:r,children:((n,m)=>{n&&m&&setInterval(()=>{const g=Math.floor((Date.now()-n)/1e3),w=Math.floor(g/60),F=g%60,M=`${w.toString().padStart(2,"0")}:${F.toString().padStart(2,"0")}`,x=document.getElementById(m);x&&(x.innerText=M)},1e3)})(f,r)})}):t(v,{size:"3.5rem",thickness:"10px",color:"#dff4ce",value:100,children:t(S,{fontFamily:"'Poppins', sans-serif",fontSize:".8rem",id:r,children:(n=>{const m=Math.floor(n/60),g=n%60;return`${m.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}`})(f)})}),o(s,{children:[t(d,{fontSize:".95rem",color:"#323130",fontFamily:"'Poppins', sans-serif",fontWeight:"semibold",children:c}),o(d,{fontSize:".8rem",fontFamily:"'Poppins', sans-serif",color:"#595959",children:["#",h]})]})]}),t(d,{fontSize:".8rem",fontFamily:"'Poppins', sans-serif",color:"red.600",children:e})]}),o(s,{children:[t(G,{spacing:4,children:_.map((n,m)=>o(s,{display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"'Poppins', sans-serif",children:[o(z,{fontSize:".9rem",children:[t($,{as:i==="queue"?W:B,color:i==="queue"?"blue.100":"#dff4ce"}),n.contentName]}),t(z,{fontWeight:"bold",fontSize:".85rem",children:n.contentValue})]},m))}),i==="queue"?t(j,{onClick:l,fontWeight:"light",fontFamily:"'Roboto', sans-serif",color:"white",bgColor:"#323130",borderRadius:"4px",mt:"1rem",children:"Done"}):null]})]})}function oe(){const[r,i]=y.useState(JSON.parse(localStorage.getItem("dashboard"))),[c,h]=y.useState([]),u=k(),b=async e=>{const a=r.filter(l=>l.order_id===e)[0],f=Math.round((Date.now()-a.timestamp)/1e3);return delete a.timestamp,a.time=f,await C.post("/sales",{orderDetails:a}),r.length===1?localStorage.removeItem("dashboard"):localStorage.setItem("dashboard",JSON.stringify(r.filter(l=>l.order_id!==e))),i(JSON.parse(localStorage.getItem("dashboard"))),p(),u({title:"Order Completed!",status:"success",duration:1e3,isClosable:!0})},p=async()=>{const e=await C.get("/completed-orders");h(e.data.orders)};return y.useEffect(()=>{p()},[]),t(s,{display:"flex",w:"100vw",h:"100vh",children:o(s,{w:{base:"100vw",lg:"60vw",xl:"65vw"},ml:{lg:"17.5vw",xl:"15vw"},padding:{base:"0 1rem",sm:"0 1.5rem",md:"0 1.75rem",lg:"1.5rem 2rem"},minH:"100vh",children:[t(L,{}),o(s,{mt:{base:"1.5rem",lg:"2.5rem"},padding:{base:"0 1rem",sm:"0 1.5rem",md:"0 1.75rem",xl:"0 2rem"},display:"grid",rowGap:".5rem",w:"100%",children:[t(d,{fontFamily:"'Poppins', sans-serif",fontSize:{base:"1rem",lg:"1.25rem"},fontWeight:"semibold",children:"In Progress"}),r?t(I,{w:"100%",display:"grid",templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",xl:"repeat(3, 1fr)"},gap:6,paddingBottom:"1.5rem",children:r.map((e,a)=>t(P,{children:t(O,{type:"queue",name:e.customer_name,orderId:e.order_id,paymentMethod:e.payment_method,orderPoint:e.order_point,destination:e.destination,totalPrice:e.total_price,totalQuantity:e.total_quantity,timestamp:e.timestamp,completeOrder:()=>b(e.order_id),id:e.order_id})},a))}):t(A,{logo:t(T,{size:36}),message:"Orders queue is empty"})]}),o(s,{mt:{base:"4rem",lg:"2.5rem"},padding:{base:"0 1rem",sm:"0 1.5rem",md:"0 1.75rem",xl:"0 2rem"},display:"grid",rowGap:".5rem",w:"100%",children:[t(d,{fontFamily:"'Poppins', sans-serif",fontSize:{base:"1rem",lg:"1.25rem"},fontWeight:"semibold",children:"Completed Orders"}),c.length>0?t(I,{w:"100%",display:"grid",templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",xl:"repeat(3, 1fr)"},gap:6,paddingBottom:"1.5rem",children:c.map((e,a)=>t(P,{children:t(O,{type:"completed",name:e.customer_name,orderId:e.order_id,paymentMethod:e.payment_method,orderPoint:e.order_point,destination:e.destination,totalPrice:e.total_price,totalQuantity:e.total_quantity,timestamp:e.time})},a))}):t(A,{logo:t(V,{size:36}),message:"No completed orders today"})]})]})})}export{oe as default};
