(function(t){function e(e){for(var r,a,s=e[0],i=e[1],c=e[2],p=0,l=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(l.length)l.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},u=[];function s(t){return i.p+"js/"+({chat:"chat",home:"home",settings:"settings"}[t]||t)+"."+{chat:"1a3180c1","chunk-1a87eada":"4a83e32a","chunk-2d0aaf16":"168839af","chunk-2d0b8e12":"f198df15","chunk-42f78a0f":"e56ee625","chunk-46595753":"caf2c611","chunk-5a22e788":"35b993db",home:"a5d2f7fb",settings:"445fc2eb"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={chat:1,"chunk-1a87eada":1,"chunk-42f78a0f":1,"chunk-46595753":1,"chunk-5a22e788":1,home:1,settings:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({chat:"chat",home:"home",settings:"settings"}[t]||t)+"."+{chat:"d62a70ba","chunk-1a87eada":"260126e2","chunk-2d0aaf16":"31d6cfe0","chunk-2d0b8e12":"31d6cfe0","chunk-42f78a0f":"d5ccad3a","chunk-46595753":"1d4b43cc","chunk-5a22e788":"255dd65b",home:"59eb1587",settings:"9c7b69e2"}[t]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===r||p===o))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],p=c.getAttribute("data-href");if(p===r||p===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],d.parentNode.removeChild(d),n(u)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=u);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=s(t);var l=new Error;c=function(e){p.onerror=p.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=p;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1886:function(t,e,n){"use strict";var r=n("2ac8"),a=n.n(r);a.a},"20e4":function(t,e,n){"use strict";var r=n("ea20"),a=n.n(r);a.a},"2ac8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"row"},t._l(t.routes,(function(e,r){return n("router-link",{key:r,attrs:{to:e.path}},[t._v(" "+t._s(e.name)+" ")])})),1),t.loggedIn?n("b-button",{on:{click:t.logOut}},[t._v("Log out")]):t._e()],1),n("router-view"),n("b-modal",{attrs:{id:"modal",size:"xl",scrollable:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(t._s(t.modalTitle.split("-").join(" ")))]},proxy:!0},{key:"modal-footer",fn:function(){return[n("div")]},proxy:!0}])},[n(t.modal,{tag:"component",attrs:{modalProps:t.modalProps}})],1),n("div",{staticClass:"alerts"},t._l(t.alerts,(function(e,r){return n("div",{key:r,class:["alerts__item","alerts__item--"+e.type]},[t._v(" "+t._s(e.text)+" ")])})),0)],1)},o=[],u=(n("b0c0"),n("96cf"),n("1da1")),s=n("5530"),i=(n("99af"),n("45fc"),n("d3b7"),n("8c4f")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"col mx-auto",attrs:{name:"sign in"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("b-form-group",[n("label",{attrs:{for:"email"}},[t._v("Email:")]),n("b-input",{directives:[{name:"autofocus",rawName:"v-autofocus"}],ref:"email",staticClass:"input-field",attrs:{type:"email",name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("b-form-group",[n("label",{attrs:{for:"password"}},[t._v("Password:")]),n("b-input",{ref:"password",attrs:{type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("b-button",{ref:"submit",attrs:{type:"submit",variant:"primary"}},[t._v(" Sign In ")])],1)},p=[],l={data:function(){return{email:"",password:""}},methods:{submitForm:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("user/logIn",{email:t.email,password:t.password});case 3:t.$router.push({name:"Home"}),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$alert.display(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},d=l,f=(n("b49d"),n("2877")),m=Object(f["a"])(d,c,p,!1,null,"4683394f",null),h=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"col mx-auto",attrs:{name:"sign in"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("b-form-group",[n("label",{attrs:{for:"email"}},[t._v("Email:")]),n("b-input",{directives:[{name:"autofocus",rawName:"v-autofocus"}],ref:"email",staticClass:"input-field",attrs:{type:"email",name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("b-form-group",[n("label",{attrs:{for:"password"}},[t._v("Password:")]),n("b-input",{ref:"password",attrs:{type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("b-form-group",[n("label",{attrs:{for:"repassword"}},[t._v("Repeat password:")]),n("b-input",{attrs:{type:"password",name:"repassword"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1),n("b-button",{ref:"submit",attrs:{type:"submit",variant:"primary"}},[t._v(" Sign up ")])],1)},v=[],b={data:function(){return{email:"",password:"",repassword:""}},methods:{submitForm:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.user.create({email:t.email,password:t.password,repassword:t.repassword});case 3:t.$router.push({path:"/login"}),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$alert.display(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},w=b,y=(n("96a8"),Object(f["a"])(w,g,v,!1,null,"35e5d173",null)),_=y.exports,x=n("2f62"),k=(n("7db0"),n("c740"),n("a434"),n("2909")),E=(n("4160"),n("b64b"),n("159b"),function(t,e){var n=Object.keys(e);n.forEach((function(n){t.hasOwnProperty(n)&&(t[n]=e[n])}))}),O=n("bc3a"),T=n.n(O),R=function(t){return function(e){return t({method:"post",url:"/api/login",data:e})}},S=function(t){return function(){return t({method:"get",url:"/api/logout"})}},A=function(t){return function(){return t({method:"get",url:"/api/me"})}},C=function(t){return function(e){return t({method:"post",url:"/api/layouts/single",data:e})}},P=function(t){return function(e){return t({method:"post",url:"/api/layouts/edit",data:e})}},j=function(t){return function(e){return t({method:"delete",url:"/api/layouts/".concat(e)})}},I=function(t){return function(e){return t({method:"post",url:"/api/register",data:e})}},L=function(t){return{logIn:R(t),createLayout:C(t),editLayout:P(t),deleteLayout:j(t),getData:A(t),logOut:S(t),create:I(t)}},$=function(t){return function(e,n){return t({method:"get",url:"/api/group/".concat(e,"?size=5&page=").concat(n)})}},D=function(t){return function(e){return t({method:"post",url:"/api/group/new",data:e})}},G=function(t){return function(){return t({method:"get",url:"/api"})}},N=function(t){return function(e){return t({method:"get",url:"/api/group?search=".concat(e)})}},M=function(t){return function(e){return t({method:"get",url:"/api/group/invite?id=".concat(e.inviteCode)})}},U=function(t){return function(e){return t({method:"post",url:"/api/group",data:e})}},F=function(t){return function(e){var n=e.form,r=e.inviteCode;return t({method:"post",url:"/api/group/invite/participant?id=".concat(r),data:n})}},V=function(t){return function(e){return t({method:"get",url:"/api/group/".concat(e,"/participants")})}},B=function(t){return function(e){return t({method:"get",url:"/api/group/".concat(e,"/forms")})}},Y=function(t){return function(e,n){return t({method:"post",url:"/api/group/".concat(e,"/forms"),data:n})}},q=function(t){return function(e,n){return t({method:"post",url:"/api/group/".concat(e,"/forms/decline"),data:n})}},J=function(t){return function(e){return t({method:"delete",url:"/api/group/".concat(e,"/leave")})}},H=function(t){return{getPosts:$(t),create:D(t),getGroups:G(t),findGroups:N(t),join:M(t),addPost:U(t),submitJoinForm:F(t),getParticipants:V(t),getJoinRequests:B(t),acceptRequest:Y(t),declineRequest:q(t),leave:J(t)}},W=function(t){return function(){return t({method:"get",url:"/api/message/conversations"})}},z=function(t){return function(e){return t({method:"get",url:"/api/message/".concat(e)})}},K=function(t){return function(e){return t({method:"post",url:"/api/message/add",data:e})}},Q=function(t){return function(t){return Promise.resolve()}},X=function(t){return{getExistingConversations:W(t),getConversationMessages:z(t),addParticipant:K(t),removeParticipant:Q(t)}},Z=function(t){return{user:L(t),group:H(t),chat:X(t)}},tt=Z(T.a),et=n("cc7d"),nt=n.n(et),rt=n("8030"),at=function(t){var e=new nt.a("http://localhost:8080/websocketApp"),n=rt["a"].over(e);return n.connect({},(function(){return ot(n,t)})),n},ot=function(t,e){t.subscribe("/topic/".concat(e),ut)},ut=function(t){var e=JSON.parse(t.body),n=e.type;switch(n){case"NEW":jt.commit("chats/CREATE_CONVERSATION",e);break;case"CHAT":jt.commit("chats/ADD_MESSAGE",e);break;case"GROUP":jt.dispatch("user/refreshGroup",e.id);break;case"CONVERSATION":jt.commit("chats/ADD_NEW_PARTICIPANT",e);break;default:break}},st={connect:at},it={loggedIn:!1,token:null,id:null,groups:null},ct={SET_STATE:function(t,e){E(t,e)},SET_STATUS:function(t,e){t.loggedIn=e},ADD_POSTS:function(t,e){var n,r=e.id,a=e.data;(n=t.groups.find((function(t){return t.group.id===r})).posts).push.apply(n,Object(k["a"])(a))},REFRESH_GROUP:function(t,e){var n=e.id,r=e.data;t.groups.find((function(t){return t.group.id===n})).posts=r},REMOVE_GROUP:function(t,e){var n=t.groups.findIndex((function(t){return t.group.id===e}));n>=0&&t.groups.splice(n,1)}},pt=function(t){return{logIn:function(e,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o,u,s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,o=e.dispatch,r.prev=1,r.next=4,t.user.logIn(n);case 4:return u=r.sent,s=u.data,i=s.layouts,a("SET_STATUS",!0),a("SET_STATE",s),a("settings/SET_STATE",{layouts:i},{root:!0}),r.next=12,o("socketConnection",s.id);case 12:return r.abrupt("return",Promise.resolve());case 15:return r.prev=15,r.t0=r["catch"](1),r.abrupt("return",Promise.reject(r.t0));case 18:case"end":return r.stop()}}),r,null,[[1,15]])})))()},fetchUser:function(e){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,n.next=4,t.user.getData();case 4:return o=n.sent,u=o.data,s=u.layouts,r("SET_STATUS",!0),r("SET_STATE",u),r("settings/SET_STATE",{layouts:s},{root:!0}),n.next=12,a("fetchGroups");case 12:return n.next=14,a("socketConnection",u.id);case 14:return n.abrupt("return",Promise.resolve());case 17:return n.prev=17,n.t0=n["catch"](1),n.abrupt("return",Promise.reject(n.t0));case 20:case"end":return n.stop()}}),n,null,[[1,17]])})))()},fetchGroups:function(e){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,t.group.getGroups();case 4:a=n.sent,o=a.data,r("SET_STATE",{groups:o}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},fetchPosts:function(e,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o,u,s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,o=n.id,u=n.page,r.prev=2,r.next=5,t.group.getPosts(o,u);case 5:s=r.sent,i=s.data,u<i.totalPages&&a("ADD_POSTS",{data:i.content,id:o}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](2),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},refreshGroup:function(e,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,t.group.getPosts(n,1);case 4:o=r.sent,u=o.data,a("REFRESH_GROUP",{data:u.content,id:n}),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},socketConnection:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.commit;try{a=st.connect(e),r("chats/SET_STATE",{stompClient:a},{root:!0})}catch(o){console.log(o)}case 2:case"end":return n.stop()}}),n)})))()},leaveGroup:function(e,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,o=e.dispatch,r.prev=1,r.next=4,t.group.leave(n);case 4:return r.next=6,o("settings/removeGroupFromLayouts",n,{root:!0});case 6:a("REMOVE_GROUP",n),r.next=11;break;case 9:r.prev=9,r.t0=r["catch"](1);case 11:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}},lt={getGroup:function(t){return function(e){return t.groups.find((function(t){return t.group.id===e}))}},loggedIn:function(t){return t.loggedIn}},dt={state:it,mutations:ct,actions:pt(tt),getters:lt,namespaced:!0},ft=(n("d81d"),n("3ca3"),n("ddb0"),{activeLayout:null,layouts:[]}),mt={SET_STATE:function(t,e){E(t,e)},ADD_LAYOUT:function(t,e){t.layouts.push(e)},SET_ACTIVE_LAYOUT:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.activeLayout=e},DELETE_LAYOUT:function(t,e){var n=t.layouts.findIndex((function(t){return t.name===e}));n>=0&&t.layouts.splice(n,1)},REMOVE_GROUP_FROM_LAYOUT:function(t,e){var n=e.id,r=e.index,a=t.layouts[r].groups.findIndex((function(t){return t.i===n}));a>=0&&t.layouts[r].groups.splice(a,1)}},ht=function(t){return{createLayout:function(e,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,t.user.createLayout(n);case 4:a("ADD_LAYOUT",n),a("SET_ACTIVE_LAYOUT"),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},deleteLayout:function(e,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,t.user.deleteLayout(n);case 4:a("DELETE_LAYOUT",n),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[1,7]])})))()},editLayout:function(e,n){return Object(u["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.user.editLayout(n);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),console.log(r.t0);case 9:case"end":return r.stop()}}),r,null,[[1,6]])})))()},removeGroupFromLayouts:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,o=t.dispatch,n.prev=1,u=r.layouts.map((function(t,n){return t.groups.findIndex((function(t){return t.i===e})),a("REMOVE_GROUP_FROM_LAYOUT",{id:e,index:n}),o("editLayout",t)})),n.next=5,Promise.all(u);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()}}},gt={getActiveLayout:function(t){return t.layouts.length&&null!==t.activeLayout?t.layouts[t.activeLayout]:{name:"",groups:[]}}},vt={state:ft,mutations:mt,actions:ht(tt),getters:gt,namespaced:!0},bt=n("d4ec"),wt=function t(e){var n=e.participantId,r=e.content;Object(bt["a"])(this,t),this.participantId=n,this.content=r},yt=(n("a15b"),n("13d5"),n("fb6a"),n("bee2")),_t=function(){function t(e){var n=e.id,r=e.participantId,a=e.participants,o=e.messages,u=void 0===o?[]:o,s=e.groupId,i=e.name;Object(bt["a"])(this,t),this.id=n,this.user=r,this.userList=this._mapUsersToObject(a),this.content=u,this.groupId=s,this.name=i||this._mapName(a)}return Object(yt["a"])(t,[{key:"_mapUsersToObject",value:function(t){return t.reduce((function(t,e){return t[e.id]=e.nickname,t}),{})}},{key:"_mapName",value:function(t){var e=t.map((function(t){return t.nickname})).join(", ");return e.length>20?e.slice(0,20)+"...":e}}]),t}(),xt={conversations:[],openConversations:{},stompClient:null,existingConversations:[]},kt={SET_STATE:function(t,e){E(t,e)},CREATE_CONVERSATION:function(t,e){t.openConversations[e.id]||(t.conversations.push(new _t(e)),t.openConversations[e.id]=!0)},CLOSE_CONVERSATION:function(t,e){var n=t.conversations.findIndex((function(t){return t.id===e}));t.conversations.splice(n,1),delete t.openConversations[e]},ADD_MESSAGE:function(t,e){var n=t.conversations.findIndex((function(t){return t.id===e.id}));t.conversations[n].content.push(new wt(e))},ADD_NEW_PARTICIPANT:function(t,e){var n=t.conversations.findIndex((function(t){return t.id===e.id}));if(n>=0){t.conversations[n].userList[e.participantId]=e.nickname;var r=JSON.parse(JSON.stringify(t.conversations[n].userList));t.conversations[n].userList=r}}},Et=function(t){return{getExistingConversations:function(e){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,t.chat.getExistingConversations();case 4:a=n.sent,o=a.data,r("SET_STATE",{existingConversations:o}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},Ot={isOpen:function(t){return function(e){return t.openConversations[e]||!1}}},Tt={state:xt,mutations:kt,actions:Et(tt),getters:Ot,namespaced:!0},Rt={alerts:[]},St={SET_STATE:function(t,e){E(t,e)},ADD_ALERT:function(t,e){t.alerts.push(e)},REMOVE_ALERT:function(t,e){t.alerts.splice(e,1)}},At={display:function(t,e){var n=t.commit;return new Promise((function(t){n("ADD_ALERT",e),setTimeout((function(){n("REMOVE_ALERT",e),t()}),1500)}))}},Ct={},Pt={state:Rt,mutations:St,actions:At,getters:Ct,namespaced:!0};r["default"].use(x["a"]);var jt=new x["a"].Store({state:{},mutations:{},actions:{},modules:{user:dt,settings:vt,chats:Tt,alert:Pt}});r["default"].use(i["a"]);var It=[{path:"/login",name:"Log in",component:h},{path:"/sign-up",name:"Sign up",component:_}],Lt=[{path:"/chat",name:"Chat",component:function(){return n.e("chat").then(n.bind(null,"c98b"))},meta:{auth:!0}},{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))},meta:{auth:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{auth:!0}}],$t=new i["a"]({mode:"hash",base:"/",routes:[].concat(Lt,It)});$t.beforeEach(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("/login"!==e.path&&"/sign-up"!==e.path||!jt.getters["user/loggedIn"]){t.next=2;break}return t.abrupt("return",r(!1));case 2:if(!e.matched.some((function(t){return t.meta.auth&&!jt.getters["user/loggedIn"]}))){t.next=6;break}return t.next=5,Dt(jt,r);case 5:return t.abrupt("return",t.sent);case 6:return t.abrupt("return",r());case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}());var Dt=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.dispatch("user/fetchUser");case 3:n(),t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](0),t.abrupt("return",n({path:"/login"}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,n){return t.apply(this,arguments)}}(),Gt=$t,Nt={data:function(){return{modal:null,modalProps:{},modalTitle:""}},computed:Object(s["a"])(Object(s["a"])({},Object(x["b"])({alerts:function(t){return t.alert.alerts}})),{},{routes:function(){return this.loggedIn?Lt:[]},loggedIn:function(){return this.$store.getters["user/loggedIn"]}}),mounted:function(){this.$eventBus.$on("open-modal",this.openModalWindow),this.$eventBus.$on("close-modal",this.closeModal)},beforeDestroy:function(){this.$eventBus.$off("open-modal",this.openModalWindow),this.$eventBus.$off("close-modal",this.closeModal)},methods:{openModalWindow:function(t){var e=this,n=t.component,r=t.props;n().then((function(t){return e.modalTitle=t.default.name})),this.modalProps=r,this.modal=n,this.$bvModal.show("modal")},closeModal:function(){this.$bvModal.hide("modal"),this.modal=null},logOut:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.user.logOut();case 3:return e.next=5,t.$alert.display({type:"success",text:"logged out successfuly"});case 5:location.reload(),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},Mt=Nt,Ut=(n("5c0b"),Object(f["a"])(Mt,a,o,!1,null,null,null)),Ft=Ut.exports,Vt=n("7be8"),Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group",style:{background:t.group.color}},[n("div",{staticClass:"group__toolbar py-2 px-2"},[n("div",{staticClass:"group__info"},[n("b-avatar",{staticClass:"mr-2"}),n("h5",{staticClass:"my-auto"},[t._v(t._s(t.user.nickname))]),n("b-avatar",{staticClass:"mx-2",attrs:{icon:"image"}}),n("h5",{staticClass:"my-auto"},[t._v(t._s(t.group.name))])],1),n("b-button-group",[t.isAdmin?n("b-button",{staticClass:"settings",attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.openSettings(t.group)}}},[t._v(" settings ")]):t._e(),n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.refresh(e)}}},[t._v("refresh")])],1)],1),n("form",{staticClass:"mt-2 mx-3",on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[n("b-input-group",[n("b-input",{attrs:{type:"text"},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}}),n("div",{staticClass:"input-group-append"},[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Add post")])],1)],1)],1),n("section",{staticClass:"group__content mt-2"},[n("div",{staticClass:"posts"},t._l(t.posts,(function(t){return n("app-post",{key:t.id,attrs:{post:t}})})),1),n("b-button",{staticClass:"my-4 mx-auto",attrs:{variant:"primary"},on:{click:t.loadPosts}},[t._v("Load more")])],1)])},Yt=[],qt=(n("a9e3"),{props:{id:{type:[String,Number],required:!0}},data:function(){return{page:2,post:null}},computed:{group:function(){return this.$store.getters["user/getGroup"](this.id).group},user:function(){return this.$store.getters["user/getGroup"](this.id)},posts:function(){return this.$store.getters["user/getGroup"](this.id).posts},participantId:function(){return this.$store.getters["user/getGroup"](this.id).participantId},isAdmin:function(){return this.$store.getters["user/getGroup"](this.id).group.creatorId===this.participantId}},created:function(){this.post=this.createNewPost()},methods:{createNewPost:function(){return{groupId:this.id,participantId:this.participantId,content:""}},addPost:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.group.addPost(t.post);case 3:t.post=t.createNewPost(),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$alert.display(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},openSettings:function(t){this.openModal("groupSettings",t)},loadPosts:function(){try{this.$store.dispatch("user/fetchPosts",{id:this.id,page:this.page}),this.page++}catch(t){this.$alert.display(t)}},refresh:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("user/refreshGroup",t.id);case 1:case"end":return e.stop()}}),e)})))()}}}),Jt=qt,Ht=(n("1886"),Object(f["a"])(Jt,Bt,Yt,!1,null,"07291957",null)),Wt=Ht.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("div",{staticClass:"post__author my-2 ml-2"},[n("b-avatar"),n("h5",{staticClass:"text-left ml-2"},[t._v(t._s(t.post.author.nickname))])],1),n("div",{staticClass:"post__content mx-2"},[n("p",{staticClass:"text-left"},[t._v(t._s(t.post.content))])])])},Kt=[],Qt={props:{post:{type:Object,required:!0}},methods:{react:function(){}}},Xt=Qt,Zt=(n("20e4"),Object(f["a"])(Xt,zt,Kt,!1,null,"1566da02",null)),te=Zt.exports;r["default"].component("grid-layout",Vt["GridLayout"]),r["default"].component("grid-item",Vt["GridItem"]),r["default"].component("app-group",Wt),r["default"].component("app-post",te);var ee={addGroup:function(){return n.e("chunk-2d0aaf16").then(n.bind(null,"12ba"))},createGroup:function(){return n.e("chunk-2d0b8e12").then(n.bind(null,"3120"))},createLayout:function(){return n.e("chunk-46595753").then(n.bind(null,"e05c"))},findGroup:function(){return n.e("chunk-5a22e788").then(n.bind(null,"adbf"))},groupSettings:function(){return n.e("chunk-42f78a0f").then(n.bind(null,"065f"))},conversationSettings:function(){return n.e("chunk-1a87eada").then(n.bind(null,"8b68"))}};function ne(t){return{methods:{openModal:function(e,n){this.$eventBus.$emit("open-modal",{component:t[e],props:n})}}}}var re=ne(ee);r["default"].mixin(re);var ae={inserted:function(t){t.focus()}};r["default"].directive("autofocus",ae);var oe=n("5f5b"),ue=n("b1e0"),se=n("123d"),ie=n.n(se),ce=function(t,e){return function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(403!==n.status){t.next=5;break}e.dispatch("alert/display",{type:"error",text:"you are not authenticated. log in"}),location.reload(),t.next=6;break;case 5:return t.abrupt("return",e.dispatch("alert/display",n));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},pe={display:ce(tt,jt)};n("f9e3"),n("2dd8");r["default"].use(oe["a"]),r["default"].use(ue["a"]),r["default"].use(ie.a),r["default"].config.productionTip=!1,r["default"].prototype.$eventBus=new r["default"],r["default"].prototype.$http=tt,r["default"].prototype.$alert=pe,new r["default"]({router:Gt,store:jt,render:function(t){return t(Ft)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"7fc3":function(t,e,n){},"96a8":function(t,e,n){"use strict";var r=n("7fc3"),a=n.n(r);a.a},"9c0c":function(t,e,n){},b49d:function(t,e,n){"use strict";var r=n("cfad"),a=n.n(r);a.a},cfad:function(t,e,n){},ea20:function(t,e,n){}});
//# sourceMappingURL=app.5ae857f9.js.map