(this["webpackJsonpshow-userlist"]=this["webpackJsonpshow-userlist"]||[]).push([[0],{102:function(e,t,a){},114:function(e,t){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i);a(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(86),c=a(87),s=a(25),u=a(47),m=a(12),d=a(175),p=a(162),g=a(158),h=a(172),f=a(119),E=a(156),v=a(77),b=a.n(v),y=a(55),N=a(153),w=a(48),k=a.n(w),C=a(73),I=a.n(C),j=a(24),O=a.n(j),x=I()(k.a);var A=x.use((function(e){return e.set("Accept","application/json").set("Access-Control-Allow-Origin","*").set("Authorization","Bearer "+atob(O.a.get("token"))),e})),T=x=function(e){var t=e.Request,a=t.prototype.then,n=t.prototype.end;return t.prototype.end=function(e){return n.call(this,(function(t,a){[401,403].includes(a&&a.statusCode)&&(window.location.href="/login",O.a.remove("token")),e(t,a)}))},t.prototype.then=function(e){return a.call(this,(function(t){[401,403].includes(t&&t.statusCode)&&(window.location.href="/login",O.a.remove("token")),e(t)}))},e}(A);var S=Object(N.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),F=Object(m.g)((function(e){var t=S(),a=r.a.useState(""),n=Object(s.a)(a,2),i=n[0],l=n[1],o=r.a.useState(""),c=Object(s.a)(o,2),u=c[0],m=c[1];return r.a.createElement(E.a,{container:!0,component:"main",className:t.root},r.a.createElement(g.a,null),r.a.createElement(E.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),r.a.createElement(E.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0},r.a.createElement("div",{className:t.paper},r.a.createElement(d.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:function(t){var a;t.preventDefault(),(a={accountId:i,pswd:u},new Promise((function(e,t){k.a.post("https://apertum-interview.herokuapp.com/api/user/login").set("Content-Type","application/json").set("Accept","application/json").set("Access-Control-Allow-Origin","*").send(a).end((function(a,n){if(n&&200===n.statusCode){var r=n.body.token;r?O.a.set("token",btoa(r)):t(n),e(n),e({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7fSwiZXhwIjoxNTkzNTk0OTQyLCJpYXQiOjE1OTM1OTQwNDJ9.Ad1kFqWJ0nVBJ2EqAelyuq_7T-wMq028XX-MzivsvX8",message:"You got the token!"})}else t(a)}))}))).then((function(t){e.history.replace("/users")})).catch((function(e){return console.error(e)}))}},r.a.createElement(h.a,{value:i,onChange:function(e){return l(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(h.a,{value:u,onChange:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In")))))})),J=a(161),U=a(78),W=a(79),q=a(163),D=a(165),P=a(164),z=Object(N.a)((function(e){return{root:{padding:"2px 0"}}}));function L(e){var t=z(),a=new R(e.user);return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{variant:"outlined"},r.a.createElement(q.a,{alignItems:"center"},r.a.createElement(P.a,null,r.a.createElement(d.a,{alt:a.getFullName(),src:"/static/images/avatar/1.jpg"})),r.a.createElement(D.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"subtitle1",color:"textPrimary"},a.getFullName()),r.a.createElement(y.a,{variant:"body2",color:"textPrimary"},"Account ID : ",a.getAccountId()),r.a.createElement(y.a,{variant:"body2",color:"textPrimary"},"Age : ",a.getAge()))))))}var R=function(){function e(t){Object(U.a)(this,e),this.accountId=t.accountId,this.age=t.age,this.firstName=t.firstName,this.lastName=t.lastName}return Object(W.a)(e,[{key:"getFullName",value:function(){return"".concat(this.firstName," ").concat(this.lastName)}},{key:"getAge",value:function(){return this.age}},{key:"getAccountId",value:function(){return this.accountId}}]),e}(),X=a(169),B=a(166),M=a(177),V=a(173),Y=a(167),G=a(168),Q=a(174),_=a(80),H=a.n(_),Z=a(82),$=a.n(Z),K=a(83),ee=a.n(K),te=Object(N.a)((function(e){return{root:{paddingTop:"10px"},loader:{textAlign:"center",padding:"10px 0"},inline:{display:"inline"},searchFilterContainer:{display:"flex"},search:{position:"relative",width:"100%"},searchIcon:{width:5*e.spacing(1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{paddingTop:1.5*e.spacing(1),paddingRight:e.spacing(1),paddingBottom:1.5*e.spacing(1),paddingLeft:5*e.spacing(1),transition:e.transitions.create("width"),width:"100%"},filterContainer:{marginTop:e.spacing(1),padding:2*e.spacing(1)},filterHeader:{display:"flex",alignItems:"center","& h6":{flex:1}},noData:{padding:2*e.spacing(1),textAlign:"center"}}}));function ae(e){return"".concat(e,"Yrs")}function ne(e){return"".concat(e)}function re(){var e=te(),t=function(){},a=r.a.useState(null),i=Object(s.a)(a,2),l=i[0],o=i[1],c=r.a.useState(""),u=Object(s.a)(c,2),m=u[0],d=u[1],p=r.a.useState(!1),g=Object(s.a)(p,2),h=g[0],E=g[1],v=r.a.useState([0,100]),b=Object(s.a)(v,2),N=b[0],w=b[1],k=r.a.useState(100),C=Object(s.a)(k,2),I=C[0],j=C[1];Object(n.useEffect)((function(){new Promise((function(e,t){T.get("https://apertum-interview.herokuapp.com/api/users").end((function(t,a){e(a.body),e([{accountId:"admin",age:8,firstName:"Ted",lastName:"Wei"},{accountId:"albert",age:18,firstName:"Albert",lastName:"Chang"},{accountId:"anna",age:21,firstName:"Anna",lastName:"Cheng"},{accountId:"chris",age:28,firstName:"Chris",lastName:"Wei"},{accountId:"doris",age:22,firstName:"Doris",lastName:"Chang"},{accountId:"emily",age:44,firstName:"Emily",lastName:"Cheng"}])}))})).then((function(e){o(e)})).catch((function(e){return console.error(e)}))}),[]);var O;return r.a.createElement(B.a,{maxWidth:"md",className:e.root},r.a.createElement("div",{className:e.searchFilterContainer},r.a.createElement(f.a,{className:e.search,variant:"outlined"},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(H.a,null)),r.a.createElement(M.a,{placeholder:"Search",classes:{root:e.inputRoot,input:e.inputInput},onChange:function(e){clearTimeout(t);var a=e.target.value;t=setTimeout((function(){d(a)}),175)}})),r.a.createElement(V.a,{title:"Filter"},r.a.createElement(Y.a,{"aria-label":"filter",color:"primary",onClick:function(){E((function(e){return!e}))}},r.a.createElement($.a,{fontSize:"inherit"})))),r.a.createElement(G.a,{in:h},r.a.createElement(f.a,{className:e.filterContainer,variant:"outlined"},r.a.createElement("div",{className:e.filterHeader},r.a.createElement(y.a,{variant:"h6",display:"block"},"Filters :"),r.a.createElement(V.a,{title:"Clear Filter"},r.a.createElement(Y.a,{"aria-label":"clear-filter",className:e.margin,onClick:function(){w([0,100]),j(100)}},r.a.createElement(ee.a,{fontSize:"small"})))),r.a.createElement(y.a,{id:"range-slider"},"User age range"),r.a.createElement(Q.a,{value:N,onChange:function(e,t){w(t)},valueLabelDisplay:"auto","aria-labelledby":"user-age-range-slider",getAriaValueText:ae}),r.a.createElement(y.a,{id:"range-slider"},"User name length range"),r.a.createElement(Q.a,{onChange:function(e,t){j(t)},getAriaValueText:ne,value:I,valueLabelDisplay:"auto","aria-labelledby":"user-name-length-range-slider"}))),r.a.createElement(J.a,null,l?l.length&&(O=m,l.filter((function(e){var t="".concat(e.firstName," ").concat(e.lastName)||"",a=e.age,n=t.length<=I,r=a>=N[0]&&a<N[1];return t.toLowerCase().includes(O.toLowerCase())&&n&&r})).map((function(e,t){return r.a.createElement(L,{key:t,user:e})}))):r.a.createElement("div",{className:e.loader},r.a.createElement(X.a,null))))}var ie=a(176),le=a(170),oe=a(171),ce=Object(N.a)((function(e){return Object(ie.a)({root:{flexGrow:1},main:{marginTop:"48px"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),se=Object(m.g)((function(e){var t=ce();return r.a.createElement("div",{className:t.root},r.a.createElement(le.a,{position:"fixed"},r.a.createElement(oe.a,{variant:"dense"},r.a.createElement(y.a,{variant:"h6",className:t.title},"Users"),r.a.createElement(y.a,{variant:"h6",className:t.title,onClick:function(){return e.history.replace("/users0")}},"Users0"),r.a.createElement(y.a,{variant:"h6",className:t.title,onClick:function(){return e.history.replace("/users1")}},"Users1"),r.a.createElement(y.a,{variant:"h6",className:t.title,onClick:function(){return e.history.replace("/users2")}},"Users2"),r.a.createElement(y.a,{variant:"h6",className:t.title,onClick:function(){return e.history.replace("/users3")}},"Users3"),r.a.createElement(y.a,{variant:"h6",className:t.title,onClick:function(){return e.history.replace("/users4")}},"Users4"),r.a.createElement(p.a,{color:"inherit",onClick:function(){O.a.remove("token"),e.history.replace("/login")}},"Log out"))),r.a.createElement("main",{className:t.main},e.children))}));function ue(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)((function(){setTimeout((function(){new Promise((function(e){console.log("routes added"),i(!0),e(!0)}))}),5e3)}));return console.log(!!O.a.get("token")),r.a.createElement(u.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",component:F}),r.a.createElement(se,null,r.a.createElement(m.a,{form:"/",to:"/users"}),r.a.createElement(me,{path:"/users"},r.a.createElement(re,null)),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{path:"/users0"},r.a.createElement(re,null)),r.a.createElement(me,{path:"/users1"},r.a.createElement(re,null)),r.a.createElement(me,{path:"/users2"},r.a.createElement(re,null)),r.a.createElement(me,{path:"/users3"},r.a.createElement(re,null)),r.a.createElement(me,{path:"/users4"},r.a.createElement(re,null))))))}function me(e){var t=e.children,a=Object(c.a)(e,["children"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){var a=e.location;return O.a.get("token")?t:r.a.createElement(m.a,{to:{pathname:"/login",state:{from:a}}})}}))}var de=a(34),pe=a(84),ge=a(85);var he=[pe.a],fe=Object(de.e)(Object(de.c)({loggedInUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.a.Map(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"receive_user_details":return e;default:return e}}}),Object(de.d)(de.a.apply(void 0,he),window.devToolsExtension?window.devToolsExtension():function(e){return e}));var Ee=function(){return r.a.createElement(o.a,{store:fe},r.a.createElement(ue,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(118)}},[[97,1,2]]]);
//# sourceMappingURL=main.44528866.chunk.js.map