(this["webpackJsonpreact-app-boiler-plate"]=this["webpackJsonpreact-app-boiler-plate"]||[]).push([[0],{611:function(e,t,n){},612:function(e,t,n){},689:function(e,t,n){var a={"./caver-abi/src/index.js":192,"./caver-account/src/index.js":94,"./caver-contract/src/index.js":120,"./caver-core-helpers/src/index.js":45,"./caver-core-method/src/index.js":87,"./caver-core-requestmanager/caver-providers-http/src/index.js":398,"./caver-core-requestmanager/caver-providers-ipc/src/index.js":402,"./caver-core-requestmanager/caver-providers-ws/src/index.js":397,"./caver-core-requestmanager/src/index.js":394,"./caver-core-subscriptions/src/index.js":172,"./caver-core/src/index.js":68,"./caver-ipfs/src/index.js":420,"./caver-kct/src/index.js":433,"./caver-klay/caver-klay-accounts/src/index.js":436,"./caver-klay/caver-klay-personal/src/index.js":439,"./caver-klay/src/index.js":440,"./caver-middleware/src/index.js":269,"./caver-net/src/index.js":287,"./caver-rpc/src/index.js":441,"./caver-rtm/src/index.js":175,"./caver-transaction/src/index.js":442,"./caver-utils/iban/src/index.js":389,"./caver-utils/promievent/src/index.js":388,"./caver-utils/src/index.js":15,"./caver-validator/src/index.js":288,"./caver-wallet/src/index.js":280};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=689},690:function(e,t){},701:function(e,t){},703:function(e,t){},713:function(e,t){},715:function(e,t){},741:function(e,t){},743:function(e,t){},744:function(e,t){},749:function(e,t){},751:function(e,t){},757:function(e,t){},759:function(e,t){},778:function(e,t){},790:function(e,t){},793:function(e,t){},797:function(e,t){},992:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(48),s=n.n(r),i=(n(611),n(612),n(80)),o=n(50),l=n(998),d=n(999),j=n(1003),u=n(1005),b=n(101),x=n(1006),m=n(1007),h=function(e,t){return localStorage.setItem(e,t)},p=n(9);function O(){var e=Object(o.g)();return Object(p.jsx)("div",{className:"Login",children:Object(p.jsx)(l.a,{align:"middle",className:"login-form",children:Object(p.jsx)(d.a,{span:6,offset:8,children:Object(p.jsxs)(j.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){h("user",JSON.stringify(t)),setTimeout((function(){e.push("/main/AccountList")}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(p.jsx)(j.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(p.jsx)(u.a,{prefix:Object(p.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(p.jsx)(j.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(p.jsx)(u.a,{prefix:Object(p.jsx)(m.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(p.jsxs)(j.a.Item,{children:[Object(p.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),"Or ",Object(p.jsx)(i.b,{to:"/auth/register",children:" \ud68c\uc6d0\uac00\uc785(\uccab\uc0ac\uc6a9 \uc2dc \ud68c\uc6d0\uac00\uc785\ud6c4 \uc0ac\uc6a9)"})]})]})})})})}function f(){var e=Object(o.g)();return Object(p.jsx)("div",{className:"Register",children:Object(p.jsx)(l.a,{align:"middle",className:"register-form",children:Object(p.jsx)(d.a,{span:6,offset:8,children:Object(p.jsxs)(j.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){h("user",JSON.stringify(t)),setTimeout((function(){e.push("/main/dashboard")}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(p.jsx)(j.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(p.jsx)(u.a,{prefix:Object(p.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(p.jsx)(j.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(p.jsx)(u.a,{prefix:Object(p.jsx)(m.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(p.jsxs)(j.a.Item,{children:[Object(p.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\ud68c\uc6d0\uac00\uc785"}),"Or ",Object(p.jsx)(i.b,{to:"/auth/login",children:"Already have an account!"})]})]})})})})}function g(){return Object(p.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/auth/login",component:O}),Object(p.jsx)(o.b,{path:"/auth/register",component:f}),Object(p.jsx)(o.a,{to:"/main"})]})})}var v=n(90),y=n(1e3),k=n(133),w=n(592),T=n(1001),A=n(230),I=n(603),S=n(1008),E=n(1009),L=n(1010),N=n(1011),F=n(98),K=n(185),P=n(125),C=n.n(P),U=n(1002),H=n(16),R=n.n(H),V=n(114),q=n(126),J=function(){var e=Object(q.a)(R.a.mark((function e(){var t,n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"KASK1PTR2T8XJ621CV1U3ZSA","mQnMiB393ESHkw-elEpaTafRL3EbdCEw5ATXkULy","1001",(t=new C.a).initKASAPI("1001","KASK1PTR2T8XJ621CV1U3ZSA","mQnMiB393ESHkw-elEpaTafRL3EbdCEw5ATXkULy"),n={size:10},e.next=8,t.kas.wallet.getAccountList(n);case 8:return a=e.sent,console.log("async call dispatch : "),console.log(a.items),e.abrupt("return",a.items);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=R.a.mark(Y),_=R.a.mark(Z),B=[{key:-1,address:"",chainId:"",createdAt:"",keyId:"",krn:"",publicKey:""}],M="LIST/FETCH",D="LIST/FETCH_SUCCESS",Q="LIST/FETCH_ERROR";function Y(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(V.c)(100);case 2:return console.log("action : ",e),n.prev=3,n.next=6,Object(V.b)(J);case 6:return t=n.sent,n.next=9,Object(V.d)({type:D,payload:t});case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(3),n.next=15,Object(V.d)({type:Q,error:!0,payload:n.t0});case 15:case"end":return n.stop()}}),X,null,[[3,11]])}function Z(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.e)(M,Y);case 2:case"end":return e.stop()}}),_)}var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;if(console.log("in reducerAccountList"),console.log(e),console.log("action.type : ",t.type),console.log("action.payload : ",t.payload),t.type===D){var n=new Array;return t.payload.forEach((function(e,t){n.push({key:t,address:e.address,chainId:e.chainId,createdAt:e.createdAt,keyId:e.keyId,krn:e.krn,publicKey:e.publicKey})})),n}return e},W=[{title:"address",dataIndex:"address",key:"address",render:function(e){return Object(p.jsx)("a",{children:e})},ellipsis:!0,width:100},{title:"chainId",dataIndex:"chainId",key:"chainId",width:50},{title:"createdAt",dataIndex:"createdAt",key:"createdAt",width:80},{title:"keyId",dataIndex:"keyId",key:"keyId",ellipsis:!0,width:100},{title:"krn",dataIndex:"krn",key:"krn",ellipsis:!0,width:100},{title:"publicKey",dataIndex:"publicKey",key:"publicKey",ellipsis:!0,width:100}];function G(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=(t[0],t[1],Object(K.c)((function(e){return e.reducerAccountList}))),c=Object(K.b)();return console.log("dataTableRedux : ",n),Object(a.useEffect)((function(){c({type:M})}),[]),Object(p.jsxs)("div",{children:["\uacc4\uc815\ubaa9\ub85d\uc870\ud68c",Object(p.jsx)(U.a,{columns:W,dataSource:n})]})}var $=[{title:"address",dataIndex:"address",key:"address",render:function(e){return Object(p.jsx)("a",{children:e})},ellipsis:!0,width:200},{title:"balance",dataIndex:"balance",key:"balance",render:function(e){return Object(p.jsx)("a",{children:e})},width:50}];function ee(){var e="KASK1PTR2T8XJ621CV1U3ZSA",t="mQnMiB393ESHkw-elEpaTafRL3EbdCEw5ATXkULy",n="1001",c=new C.a,r=new Array,s=Object(a.useState)([]),i=Object(v.a)(s,2),o=i[0],l=i[1];function d(){return d=Object(q.a)(R.a.mark((function a(){var s,i,o;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.initKASAPI(n,e,t),s={size:10},a.next=4,c.kas.wallet.getAccountList(s);case 4:i=a.sent,o=new Array,i.items.forEach((function(e,t){o.push({key:t,address:e.address})})),o.forEach(function(){var e=Object(q.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.rpc.klay.getAccount(t.address);case 2:a=e.sent,r.push({key:n,address:t.address,balance:null!==a&&null!=a.account.balance?a.account.balance:"0"}),o.length==r.length&&l(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 8:case"end":return a.stop()}}),a)}))),d.apply(this,arguments)}return Object(a.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{children:["\uacc4\uc815\uc815\ubcf4\uc870\ud68c",Object(p.jsx)(U.a,{columns:$,dataSource:o})]})}var te=n(1004);function ne(){var e=new C.a,t=(Object(o.g)(),Object(a.useState)([])),n=Object(v.a)(t,2),c=(n[0],n[1],Object(a.useState)({from:"",to:"",value:"",gas:"",gasPrice:"",nonce:"",transactionHash:""})),r=Object(v.a)(c,2),s=r[0],i=r[1],x=function(){var t=Object(q.a)(R.a.mark((function t(n){var a,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),e.initKASAPI("1001","KASK1PTR2T8XJ621CV1U3ZSA","mQnMiB393ESHkw-elEpaTafRL3EbdCEw5ATXkULy"),a={from:n.fromAddress,to:n.toAddress,value:n.klayValue,submit:!0},console.log("tx : ",a),t.next=6,e.kas.wallet.requestValueTransfer(a);case 6:c=t.sent,console.log("result : ",c),i({from:c.from,to:c.to,value:c.value,gas:c.gas,gasPrice:c.gasPrice,nonce:c.nonce,transactionHash:c.transactionHash});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"Transfer",children:["KLAY \uc804\uc1a1  ",Object(p.jsx)("br",{}),Object(p.jsx)(te.a.Text,{children:" \uacc4\uc815\uc815\ubcf4\uc870\ud68c \uba54\ub274\uc5d0\uc11c KLAY \uac00 \uc788\ub294 \uc8fc\uc18c\ub97c \uc0ac\uc6a9\ud558\uc138\uc694!! "}),Object(p.jsxs)(l.a,{align:"middle",className:"transfer-form",children:[Object(p.jsx)(d.a,{span:9,offset:1,children:Object(p.jsxs)(j.a,{name:"klay_transfer",className:"login-form",initialValues:{remember:!0},onFinish:x,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(p.jsx)(te.a.Text,{children:" From "}),Object(p.jsx)(j.a.Item,{name:"fromAddress",rules:[{required:!0,message:"\uc804\uc1a1\uc790\uc758 \uc8fc\uc18c\ub97c \ub123\uc5b4\uc8fc\uc138\uc694"}],children:Object(p.jsx)(u.a,{placeholder:"\uc804\uc1a1\uc790 \uc8fc\uc18c"})}),Object(p.jsx)(te.a.Text,{children:" To "}),Object(p.jsx)(j.a.Item,{name:"toAddress",rules:[{required:!0,message:"\uc804\uc1a1\ubc1b\uc744\uc790\uc758 \uc8fc\uc18c\ub97c \ub123\uc5b4\uc8fc\uc138\uc694"}],children:Object(p.jsx)(u.a,{placeholder:"\uc804\uc1a1\ubc1b\uc744 \uc8fc\uc18c"})}),Object(p.jsx)(te.a.Text,{children:" \uc804\uc1a1\uae08\uc561 "}),Object(p.jsx)(j.a.Item,{name:"klayValue",rules:[{required:!0,message:"\uc804\uc1a1\ud560 \uae08\uc561\uc744 \ub123\uc5b4\uc8fc\uc138\uc694!"}],children:Object(p.jsx)(u.a,{placeholder:"KLAY \uae08\uc561"})}),Object(p.jsx)(j.a.Item,{children:Object(p.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\uc804\uc1a1"})})]})}),Object(p.jsxs)(d.a,{span:9,offset:1,children:[Object(p.jsx)(te.a.Text,{mark:!0,children:"  \ucd9c\ub825\ubd80\ubd84 "})," ",Object(p.jsx)("br",{}),Object(p.jsxs)(te.a.Text,{children:[" From : ",s.from," "]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te.a.Text,{children:[" To : ",s.to," "]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te.a.Text,{children:[" Value : ",s.value," "]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te.a.Text,{children:[" gas : ",s.gas," "]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te.a.Text,{children:[" gasPrice : ",s.gasPrice," "]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te.a.Text,{children:[" Nonce : ",s.nonce," "]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te.a.Text,{children:[" transactionHash : ",s.transactionHash," "]})]})]})]})}var ae=n.p+"static/media/klaytn.414c3fea.svg",ce=y.a.Header,re=y.a.Sider,se=y.a.Content,ie=y.a.Footer;function oe(){var e,t=Object(a.useState)(JSON.parse((e="user",localStorage.getItem(e)))),n=Object(v.a)(t,1)[0],r=Object(a.useState)(!1),s=Object(v.a)(r,2),j=s[0],u=s[1],b=Object(o.g)();Object(a.useEffect)((function(){n||b.replace("/auth/login")}),[n,b]);var m=function(){u(!j)};return Object(p.jsx)("div",{className:"main-container",children:n?Object(p.jsxs)(y.a,{children:[Object(p.jsx)(ce,{children:Object(p.jsxs)(l.a,{align:"middle",justify:"space-between",gutter:[16,10],children:[Object(p.jsx)(d.a,{span:2,offset:1,xl:{span:2,offset:2},children:Object(p.jsx)("img",{src:ae,alt:"klaytn Logo",width:50,style:{border:"2px solid white"}})}),Object(p.jsx)(d.a,{span:2,offset:10,xl:{span:2,offset:12},children:Object(p.jsx)(l.a,{type:"flex",align:"middle",justify:"center",children:Object(p.jsx)(T.a,{component:x.a,style:{border:"2px solid white"},height:100})})})]})}),Object(p.jsxs)(y.a,{className:"site-layout",children:[Object(p.jsxs)(re,{trigger:null,collapsible:!0,collapsed:j,children:[Object(p.jsxs)("div",{className:"side-menu",children:["Wallet Service ",Object(p.jsx)(T.a,{component:A.a})," "]}),Object(p.jsxs)(k.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(p.jsx)(k.a.Item,{icon:Object(p.jsx)(I.a,{}),children:Object(p.jsx)(i.b,{to:"/main/AccountList",children:"\uacc4\uc815\ubaa9\ub85d\uc870\ud68c"})},"1"),Object(p.jsx)(k.a.Item,{icon:Object(p.jsx)(S.a,{}),children:Object(p.jsx)(i.b,{to:"/main/AccountInfo",children:"\uacc4\uc815\uc815\ubcf4\uc870\ud68c"})},"2"),Object(p.jsx)(k.a.Item,{icon:Object(p.jsx)(E.a,{}),children:Object(p.jsx)(i.b,{to:"/main/ValueTransfer",children:"KLAY \uc804\uc1a1"})},"3")]})]}),Object(p.jsx)(ce,{className:"site-layout-background",style:{padding:0},children:c.a.createElement(j?L.a:N.a,{className:"trigger",onClick:m})}),Object(p.jsx)(se,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/main/AccountList",component:G}),Object(p.jsx)(o.b,{path:"/main/AccountInfo",component:ee}),Object(p.jsx)(o.b,{path:"/main/ValueTransfer",component:ne}),Object(p.jsx)(o.a,{to:"/main"})]})})]}),Object(p.jsx)(ie,{})]}):Object(p.jsx)(w.a,{indicator:Object(p.jsx)(F.a,{style:{fontSize:24},spin:!0})})})}var le=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/auth",component:g}),Object(p.jsx)(o.b,{path:"/main",component:oe}),Object(p.jsx)(o.a,{to:"/main"})]})})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1012)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},je=n(110),ue=n(595),be=R.a.mark(xe);function xe(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([Z()]);case 2:case"end":return e.stop()}}),be)}var me=Object(je.combineReducers)({reducerAccountList:z}),he=n(596),pe=n(599),Oe=Object(pe.a)(),fe=Object(ue.createLogger)(),ge=Object(je.createStore)(me,Object(he.composeWithDevTools)(Object(je.applyMiddleware)(fe,Oe)));Oe.run(xe),s.a.render(Object(p.jsx)(K.a,{store:ge,children:Object(p.jsx)(le,{})}),document.getElementById("root")),de()}},[[992,1,2]]]);
//# sourceMappingURL=main.e289a374.chunk.js.map