(this["webpackJsonpreact-app-boiler-plate"]=this["webpackJsonpreact-app-boiler-plate"]||[]).push([[0],{600:function(e,t,n){},601:function(e,t,n){},677:function(e,t,n){var a={"./caver-abi/src/index.js":185,"./caver-account/src/index.js":90,"./caver-contract/src/index.js":115,"./caver-core-helpers/src/index.js":42,"./caver-core-method/src/index.js":83,"./caver-core-requestmanager/caver-providers-http/src/index.js":390,"./caver-core-requestmanager/caver-providers-ipc/src/index.js":394,"./caver-core-requestmanager/caver-providers-ws/src/index.js":389,"./caver-core-requestmanager/src/index.js":386,"./caver-core-subscriptions/src/index.js":166,"./caver-core/src/index.js":64,"./caver-ipfs/src/index.js":412,"./caver-kct/src/index.js":425,"./caver-klay/caver-klay-accounts/src/index.js":428,"./caver-klay/caver-klay-personal/src/index.js":431,"./caver-klay/src/index.js":432,"./caver-middleware/src/index.js":261,"./caver-net/src/index.js":279,"./caver-rpc/src/index.js":433,"./caver-rtm/src/index.js":169,"./caver-transaction/src/index.js":434,"./caver-utils/iban/src/index.js":381,"./caver-utils/promievent/src/index.js":380,"./caver-utils/src/index.js":14,"./caver-validator/src/index.js":280,"./caver-wallet/src/index.js":272};function s(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id=677},678:function(e,t){},689:function(e,t){},691:function(e,t){},701:function(e,t){},703:function(e,t){},729:function(e,t){},731:function(e,t){},732:function(e,t){},737:function(e,t){},739:function(e,t){},745:function(e,t){},747:function(e,t){},766:function(e,t){},778:function(e,t){},781:function(e,t){},785:function(e,t){},980:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(49),r=n.n(c),i=(n(600),n(601),n(76)),o=n(46),l=n(984),j=n(985),d=n(989),u=n(991),b=n(98),x=n(992),m=n(993),h=function(e,t){return localStorage.setItem(e,t)},O=n(9);function f(){var e=Object(o.g)();return Object(O.jsx)("div",{className:"Login",children:Object(O.jsx)(l.a,{align:"middle",className:"login-form",children:Object(O.jsx)(j.a,{span:6,offset:8,children:Object(O.jsxs)(d.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){h("user",JSON.stringify(t)),setTimeout((function(){e.push("/main/AccountList")}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(O.jsx)(d.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(O.jsx)(u.a,{prefix:Object(O.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(O.jsx)(d.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(O.jsx)(u.a,{prefix:Object(O.jsx)(m.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(O.jsxs)(d.a.Item,{children:[Object(O.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),"Or ",Object(O.jsx)(i.b,{to:"/auth/register",children:" \ud68c\uc6d0\uac00\uc785(\uccab\uc0ac\uc6a9 \uc2dc \ud68c\uc6d0\uac00\uc785\ud6c4 \uc0ac\uc6a9)"})]})]})})})})}function p(){var e=Object(o.g)();return Object(O.jsx)("div",{className:"Register",children:Object(O.jsx)(l.a,{align:"middle",className:"register-form",children:Object(O.jsx)(j.a,{span:6,offset:8,children:Object(O.jsxs)(d.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){h("user",JSON.stringify(t)),setTimeout((function(){e.push("/main/dashboard")}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(O.jsx)(d.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(O.jsx)(u.a,{prefix:Object(O.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(O.jsx)(d.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(O.jsx)(u.a,{prefix:Object(O.jsx)(m.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(O.jsxs)(d.a.Item,{children:[Object(O.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\ud68c\uc6d0\uac00\uc785"}),"Or ",Object(O.jsx)(i.b,{to:"/auth/login",children:"Already have an account!"})]})]})})})})}function g(){return Object(O.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/auth/login",component:f}),Object(O.jsx)(o.b,{path:"/auth/register",component:p}),Object(O.jsx)(o.a,{to:"/main"})]})})}var v=n(86),y=n(986),k=n(127),w=n(584),A=n(987),I=n(222),T=n(592),S=n(994),N=n(995),E=n(996),L=n(997),P=n(94),F=n(16),K=n.n(F),q=n(120),C=n(146),U=n.n(C),V=n(988),H=[{title:"address",dataIndex:"address",key:"address",render:function(e){return Object(O.jsx)("a",{children:e})},ellipsis:!0,width:100},{title:"chainId",dataIndex:"chainId",key:"chainId",width:50},{title:"createdAt",dataIndex:"createdAt",key:"createdAt",width:80},{title:"keyId",dataIndex:"keyId",key:"keyId",ellipsis:!0,width:100},{title:"krn",dataIndex:"krn",key:"krn",ellipsis:!0,width:100},{title:"publicKey",dataIndex:"publicKey",key:"publicKey",ellipsis:!0,width:100}];function J(){var e="KASK1PTR2T8XJ621CV1U3ZSA",t="mQnMiB393ESHkw-elEpaTafRL3EbdCEw5ATXkULy",n="1001",s=new U.a,c=Object(a.useState)([]),r=Object(v.a)(c,2),i=r[0],o=r[1];function l(){return(l=Object(q.a)(K.a.mark((function a(){var c,r,i;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.initKASAPI(n,e,t),c={size:10},a.next=4,s.kas.wallet.getAccountList(c);case 4:r=a.sent,console.log("\uacc4\uc815\ubaa9\ub85d : "),console.log(r),console.log(r.items.length),i=new Array,r.items.forEach((function(e,t){i.push({key:t,address:e.address,chainId:e.chainId,createdAt:e.createdAt,keyId:e.keyId,krn:e.krn,publicKey:e.publicKey})})),o(i);case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{children:["\uacc4\uc815\ubaa9\ub85d\uc870\ud68c",Object(O.jsx)(V.a,{columns:H,dataSource:i})]})}var R=[{title:"address",dataIndex:"address",key:"address",render:function(e){return Object(O.jsx)("a",{children:e})},ellipsis:!0,width:200},{title:"balance",dataIndex:"balance",key:"balance",render:function(e){return Object(O.jsx)("a",{children:e})},width:50}];function X(){var e="KASK1PTR2T8XJ621CV1U3ZSA",t="mQnMiB393ESHkw-elEpaTafRL3EbdCEw5ATXkULy",n="1001",s=new U.a,c=new Array,r=Object(a.useState)([]),i=Object(v.a)(r,2),o=i[0],l=i[1];function j(){return j=Object(q.a)(K.a.mark((function a(){var r,i,o;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.initKASAPI(n,e,t),r={size:10},a.next=4,s.kas.wallet.getAccountList(r);case 4:i=a.sent,o=new Array,i.items.forEach((function(e,t){o.push({key:t,address:e.address})})),o.forEach(function(){var e=Object(q.a)(K.a.mark((function e(t,n){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.rpc.klay.getAccount(t.address);case 2:a=e.sent,c.push({key:n,address:t.address,balance:null!==a&&null!=a.account.balance?a.account.balance:"0"}),o.length==c.length&&l(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 8:case"end":return a.stop()}}),a)}))),j.apply(this,arguments)}return Object(a.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{children:["\uacc4\uc815\uc815\ubcf4\uc870\ud68c",Object(O.jsx)(V.a,{columns:R,dataSource:o})]})}var B=n(990);function M(){var e=new U.a,t=(Object(o.g)(),Object(a.useState)([])),n=Object(v.a)(t,2),s=(n[0],n[1],Object(a.useState)({from:"",to:"",value:"",gas:"",gasPrice:"",nonce:"",transactionHash:""})),c=Object(v.a)(s,2),r=c[0],i=c[1],x=function(){var t=Object(q.a)(K.a.mark((function t(n){var a,s;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),e.initKASAPI("1001","KASK1PTR2T8XJ621CV1U3ZSA","mQnMiB393ESHkw-elEpaTafRL3EbdCEw5ATXkULy"),a={from:n.fromAddress,to:n.toAddress,value:n.klayValue,submit:!0},console.log("tx : ",a),t.next=6,e.kas.wallet.requestValueTransfer(a);case 6:s=t.sent,console.log("result : ",s),i({from:s.from,to:s.to,value:s.value,gas:s.gas,gasPrice:s.gasPrice,nonce:s.nonce,transactionHash:s.transactionHash});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"Transfer",children:["KLAY \uc804\uc1a1  ",Object(O.jsx)("br",{}),Object(O.jsx)(B.a.Text,{children:" \uacc4\uc815\uc815\ubcf4\uc870\ud68c \uba54\ub274\uc5d0\uc11c KLAY \uac00 \uc788\ub294 \uc8fc\uc18c\ub97c \uc0ac\uc6a9\ud558\uc138\uc694!! "}),Object(O.jsxs)(l.a,{align:"middle",className:"transfer-form",children:[Object(O.jsx)(j.a,{span:9,offset:1,children:Object(O.jsxs)(d.a,{name:"klay_transfer",className:"login-form",initialValues:{remember:!0},onFinish:x,onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(O.jsx)(B.a.Text,{children:" From "}),Object(O.jsx)(d.a.Item,{name:"fromAddress",rules:[{required:!0,message:"\uc804\uc1a1\uc790\uc758 \uc8fc\uc18c\ub97c \ub123\uc5b4\uc8fc\uc138\uc694"}],children:Object(O.jsx)(u.a,{placeholder:"\uc804\uc1a1\uc790 \uc8fc\uc18c"})}),Object(O.jsx)(B.a.Text,{children:" To "}),Object(O.jsx)(d.a.Item,{name:"toAddress",rules:[{required:!0,message:"\uc804\uc1a1\ubc1b\uc744\uc790\uc758 \uc8fc\uc18c\ub97c \ub123\uc5b4\uc8fc\uc138\uc694"}],children:Object(O.jsx)(u.a,{placeholder:"\uc804\uc1a1\ubc1b\uc744 \uc8fc\uc18c"})}),Object(O.jsx)(B.a.Text,{children:" \uc804\uc1a1\uae08\uc561 "}),Object(O.jsx)(d.a.Item,{name:"klayValue",rules:[{required:!0,message:"\uc804\uc1a1\ud560 \uae08\uc561\uc744 \ub123\uc5b4\uc8fc\uc138\uc694!"}],children:Object(O.jsx)(u.a,{placeholder:"KLAY \uae08\uc561"})}),Object(O.jsx)(d.a.Item,{children:Object(O.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\uc804\uc1a1"})})]})}),Object(O.jsxs)(j.a,{span:9,offset:1,children:[Object(O.jsx)(B.a.Text,{mark:!0,children:"  \ucd9c\ub825\ubd80\ubd84 "})," ",Object(O.jsx)("br",{}),Object(O.jsxs)(B.a.Text,{children:[" From : ",r.from," "]}),Object(O.jsx)("br",{}),Object(O.jsxs)(B.a.Text,{children:[" To : ",r.to," "]}),Object(O.jsx)("br",{}),Object(O.jsxs)(B.a.Text,{children:[" Value : ",r.value," "]}),Object(O.jsx)("br",{}),Object(O.jsxs)(B.a.Text,{children:[" gas : ",r.gas," "]}),Object(O.jsx)("br",{}),Object(O.jsxs)(B.a.Text,{children:[" gasPrice : ",r.gasPrice," "]}),Object(O.jsx)("br",{}),Object(O.jsxs)(B.a.Text,{children:[" Nonce : ",r.nonce," "]}),Object(O.jsx)("br",{}),Object(O.jsxs)(B.a.Text,{children:[" transactionHash : ",r.transactionHash," "]})]})]})]})}var _=n.p+"static/media/klaytn.414c3fea.svg",Y=y.a.Header,z=y.a.Sider,D=y.a.Content,Q=y.a.Footer;function Z(){var e,t=Object(a.useState)(JSON.parse((e="user",localStorage.getItem(e)))),n=Object(v.a)(t,1)[0],c=Object(a.useState)(!1),r=Object(v.a)(c,2),d=r[0],u=r[1],b=Object(o.g)();Object(a.useEffect)((function(){n||b.replace("/auth/login")}),[n,b]);var m=function(){u(!d)};return Object(O.jsx)("div",{className:"main-container",children:n?Object(O.jsxs)(y.a,{children:[Object(O.jsx)(Y,{children:Object(O.jsxs)(l.a,{align:"middle",justify:"space-between",gutter:[16,10],children:[Object(O.jsx)(j.a,{span:2,offset:1,xl:{span:2,offset:2},children:Object(O.jsx)("img",{src:_,alt:"klaytn Logo",width:50,style:{border:"2px solid white"}})}),Object(O.jsx)(j.a,{span:2,offset:10,xl:{span:2,offset:12},children:Object(O.jsx)(l.a,{type:"flex",align:"middle",justify:"center",children:Object(O.jsx)(A.a,{component:x.a,style:{border:"2px solid white"},height:100})})})]})}),Object(O.jsxs)(y.a,{className:"site-layout",children:[Object(O.jsxs)(z,{trigger:null,collapsible:!0,collapsed:d,children:[Object(O.jsxs)("div",{className:"side-menu",children:["Wallet Service ",Object(O.jsx)(A.a,{component:I.a})," "]}),Object(O.jsxs)(k.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(O.jsx)(k.a.Item,{icon:Object(O.jsx)(T.a,{}),children:Object(O.jsx)(i.b,{to:"/main/AccountList",children:"\uacc4\uc815\ubaa9\ub85d\uc870\ud68c"})},"1"),Object(O.jsx)(k.a.Item,{icon:Object(O.jsx)(S.a,{}),children:Object(O.jsx)(i.b,{to:"/main/AccountInfo",children:"\uacc4\uc815\uc815\ubcf4\uc870\ud68c"})},"2"),Object(O.jsx)(k.a.Item,{icon:Object(O.jsx)(N.a,{}),children:Object(O.jsx)(i.b,{to:"/main/ValueTransfer",children:"KLAY \uc804\uc1a1"})},"3")]})]}),Object(O.jsx)(Y,{className:"site-layout-background",style:{padding:0},children:s.a.createElement(d?E.a:L.a,{className:"trigger",onClick:m})}),Object(O.jsx)(D,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/main/AccountList",component:J}),Object(O.jsx)(o.b,{path:"/main/AccountInfo",component:X}),Object(O.jsx)(o.b,{path:"/main/ValueTransfer",component:M}),Object(O.jsx)(o.a,{to:"/main"})]})})]}),Object(O.jsx)(Q,{})]}):Object(O.jsx)(w.a,{indicator:Object(O.jsx)(P.a,{style:{fontSize:24},spin:!0})})})}var W=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/auth",component:g}),Object(O.jsx)(o.b,{path:"/main",component:Z}),Object(O.jsx)(o.a,{to:"/main"})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,998)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root")),G()}},[[980,1,2]]]);
//# sourceMappingURL=main.35143c8f.chunk.js.map