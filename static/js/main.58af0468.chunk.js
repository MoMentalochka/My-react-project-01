(this["webpackJsonpmy-react-01"]=this["webpackJsonpmy-react-01"]||[]).push([[0],{11:function(e,t,a){e.exports={nav:"Nav_nav__1zEbn",item:"Nav_item__ZiOEo",active:"Nav_active__3ierU"}},119:function(e,t,a){e.exports={avatar:"Avatar_avatar__3lGmW"}},120:function(e,t,a){e.exports={friends:"Friends_friends__3iyNf"}},121:function(e,t,a){e.exports={profile:"Profile_profile__cRCcr"}},122:function(e,t,a){e.exports=a.p+"static/media/preloader.1d15156b.svg"},123:function(e,t,a){e.exports={img:"Preloader_img__fytGA"}},124:function(e,t,a){e.exports={news:"News_news__rbSKX"}},125:function(e,t,a){e.exports={music:"Music_music__3XjOF"}},126:function(e,t,a){e.exports={settings:"Settings_settings__1oLhY"}},127:function(e,t,a){e.exports={massages_list:"Message_massages_list__j7NPe",massages_list_item:"Message_massages_list_item__2kEcI"}},128:function(e,t,a){e.exports={form:"Form_form__1PmA0"}},130:function(e,t,a){e.exports=a(256)},135:function(e,t,a){},16:function(e,t,a){e.exports={formT:"FormComponents_formT__108Ew",formI:"FormComponents_formI__xWAEy",button:"FormComponents_button__1Dkzz",textarea:"FormComponents_textarea__1eujI",withError:"FormComponents_withError__GMOoi",error:"FormComponents_error__2hxPx",login:"FormComponents_login__1aYpJ"}},256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(54),o=a.n(s),i=(a(135),a(11)),c=a.n(i),l=a(8),u=function(e){return r.a.createElement("div",{className:c.a.nav},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/profile/".concat(e.id),activeClassName:c.a.active},r.a.createElement("div",{className:c.a.item},"Profile"))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/dialogs",activeClassName:c.a.active},r.a.createElement("div",{className:c.a.item},"Dialogs"))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/users",activeClassName:c.a.active},r.a.createElement("div",{className:c.a.item},"Users"))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/news",activeClassName:c.a.active},r.a.createElement("div",{className:c.a.item},"News"))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/music",activeClassName:c.a.active},r.a.createElement("div",{className:c.a.item},"Music"))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/settings",activeClassName:c.a.active},r.a.createElement("div",{className:c.a.item},"Settings")))))},m=a(7),d=Object(m.b)((function(e){return{id:e.Auth.id}}),{})(u),f=a(19),g=a(20),p=a(22),_=a(21),h=a(23),v=a(258),b=a(257),E=a(84),w=a(16),O=a.n(w),k=function(e){var t=e.input,a=e.meta,n=Object(E.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.formT+" "+(s&&O.a.withError)},r.a.createElement("textarea",Object.assign({},t,n,{className:O.a.textarea})),r.a.createElement("button",{className:O.a.button+" "+(s&&O.a.withError),disabled:s}," \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c ")),s&&r.a.createElement("div",{className:O.a.error}," ",a.error," "))},j=function(e){var t=e.input,a=e.meta,n=Object(E.a)(e,["input","meta"]),s=a.touched&&a.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.formI},r.a.createElement("input",Object.assign({},t,n,{className:O.a.login+" "+(s&&O.a.withError)}))),s&&r.a.createElement("div",{className:O.a.error}," ",a.error," "))},P=function(e){if(void 0===e||""===(e+" ").trim())return"Empty field"},N=function(e){if(e&&e.length>100)return"Max length is 100"},y=function(e){if(e&&e.length>=16)return"Max length is 16"},S=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},x=Object(b.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(v.a,{name:"post",component:k,type:"textarea",placeholder:"Write something",validate:[P,N]}))})),F=function(e){return r.a.createElement("div",null,r.a.createElement(x,{onSubmit:function(t){e.addPost(t.post),console.log(t),t.post=""}}),e.PostElements)},T=a(31),D=a.n(T),C=function(e){return r.a.createElement("div",{className:D.a.post},r.a.createElement("div",{className:D.a.title},r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:D.a.name}," ",e.name+" ","  ")),r.a.createElement("div",{className:D.a.content},r.a.createElement("div",{className:D.a.message},e.message," "),r.a.createElement("div",{className:D.a.like}," ",r.a.createElement("img",{src:"https://c7.uihere.com/files/487/556/13/thumb-signal-computer-icons-social-media-clip-art-social-media.jpg",alt:""}),r.a.createElement("div",{className:"like_count"},e.like_counter))))},M=a(30),A=a(5),U=a(118).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"8aeede7b-fb00-4b24-b1d1-0f97a5c140ad"}}),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return U.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},I=function(e){return U.post("follow/".concat(e))},G=function(e){return U.delete("follow/".concat(e))},z=function(){return U.get("/auth/me")},R=function(e,t,a){return U.post("/auth/login",{email:e,password:t,rememberMe:a})},W=function(){return U.delete("/auth/login")},H=function(e){return U.get("profile/".concat(e))},Z=function(e){return U.get("profile/status/".concat(e))},Y=function(e){return U.put("profile/status",{status:e})},B=a(37),q=a.n(B),K={ProfileData:null,PostsData:[{id:"1",name:"Franki",message:"Franki",second__name:"Alladay",like_counter:"10",avatar:"https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false"},{id:"2",name:"Nikolay",message:"Franki",second__name:"Puchinin",like_counter:"11",avatar:"https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg"},{id:"3",name:"Maksim",message:"Franki",second__name:"Moiseenko",like_counter:"12",avatar:"https://pets-expert.ru/wp-content/uploads/2018/09/\u041c\u0430\u043d\u0447\u043a\u0438\u043d-\u0441-\u0431\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u043c\u0438-\u0433\u043b\u0430\u0437\u0430\u043c\u0438.jpg"},{id:"4",name:"Ignat",message:"Franki",second__name:"Lesovckiy",like_counter:"13",avatar:"https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200"},{id:"5",name:"Alexei",message:"Franki",second__name:"Michailov",like_counter:"14",avatar:"https://s1.1zoom.ru/big3/718/422583-blackangel.jpg"},{id:"6",name:"Oleg",message:"Franki",second__name:"Radzievskiy",like_counter:"15",avatar:"https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false"}],FriendsData:[{id:"1",name:"Franki",second__name:"Alladay",avatar:"https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false"},{id:"2",name:"Nikolay",second__name:"Puchinin",avatar:"https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg"},{id:"3",name:"Maksim",second__name:"Moiseenko",avatar:"https://pets-expert.ru/wp-content/uploads/2018/09/\u041c\u0430\u043d\u0447\u043a\u0438\u043d-\u0441-\u0431\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u043c\u0438-\u0433\u043b\u0430\u0437\u0430\u043c\u0438.jpg"},{id:"4",name:"Ignat",second__name:"Lesovckiy",avatar:"https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200"},{id:"5",name:"Alexei",second__name:"Michailov",avatar:"https://s1.1zoom.ru/big3/718/422583-blackangel.jpg"},{id:"6",name:"Oleg",second__name:"Radzievskiy",avatar:"https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false"}],isFetching:!0,status:""},V=function(e){return{type:"SET-USER-STATUS",status:e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5595,name:"MoMentalochka",second__name:null,like_counter:0,message:t.text,avatar:q.a};return Object(A.a)({},e,{PostsData:[].concat(Object(M.a)(e.PostsData),[Object(A.a)({},a)])});case"SET-USERS-PROFILE":return Object(A.a)({},e,{ProfileData:Object(A.a)({},t.profile)});case"SET-USER-STATUS":return Object(A.a)({},e,{status:t.status});case"TOGGLE-IS-FETCHING":return Object(A.a)({},e,{isFetching:t.isFetching});default:return Object(A.a)({},e)}},X=Object(m.b)((function(e){var t=e.profilePage.PostsData.map((function(e){return r.a.createElement(C,{key:e.id,message:e.message,id:e.id,like_counter:e.like_counter,name:e.name,second__name:e.second__name,avatar:e.avatar})})).reverse();return{newPostText:e.profilePage.newPostText,PostElements:t}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",text:e}}(t))}}}))(F),$=a(119),Q=a.n($),ee=function(e){return r.a.createElement("div",{className:Q.a.avatar},r.a.createElement("img",{src:null===e.avatar?q.a:e.avatar,alt:""}))},te=a(45),ae=a.n(te),ne=function(e){return r.a.createElement("div",{className:ae.a.friend},r.a.createElement("div",{className:ae.a.avatar},r.a.createElement("img",{className:ae.a.img,src:e.avatar,alt:"avatar"})," "),r.a.createElement("div",{className:ae.a.name},e.name))},re=a(120),se=a.n(re),oe=function(e){return r.a.createElement("div",{className:se.a.friends},e.FriendsElement)},ie=Object(m.b)((function(e){return{FriendsElement:e.profilePage.FriendsData.map((function(e){return r.a.createElement(ne,{key:e.id,message:e.message,id:e.id,name:e.name,second__name:e.second__name,avatar:e.avatar})}))}}))(oe),ce=a(38),le=a.n(ce),ue=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,status:a.props.status},a.activateEditMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.setState({editMode:!1}),a.props.updateUserStatus(a.state.status)},a.onChange=function(e){a.setState({status:e.currentTarget.value})},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,!this.state.editMode&&r.a.createElement("div",{className:le.a.status},r.a.createElement("p",{onClick:function(){e.activateEditMode()}},"  ",this.props.status?this.props.status:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"," ")),this.state.editMode&&r.a.createElement("div",{className:le.a.status},r.a.createElement("input",{ref:this.statustext,autoFocus:!0,onBlur:function(){e.deactivateEditMode()},onChange:this.onChange,value:this.state.status})))}}]),t}(r.a.Component),me=function(e){return r.a.createElement("div",{className:le.a.info},r.a.createElement("div",{className:le.a.text},r.a.createElement("h3",null,e.profilePage.ProfileData.fullName),r.a.createElement(ue,{status:e.profilePage.status,updateUserStatus:e.updateUserStatus})))},de=a(121),fe=a.n(de),ge=function(e){return r.a.createElement("div",{className:fe.a.profile},r.a.createElement(ee,{avatar:e.profilePage.ProfileData.photos.small}),r.a.createElement(ie,null),r.a.createElement(me,{profilePage:e.profilePage,updateUserStatus:e.updateUserStatus}),r.a.createElement(X,null))},pe=a(122),_e=a.n(pe),he=a(123),ve=a.n(he),be=function(){return r.a.createElement("img",{className:ve.a.img,src:_e.a,alt:""})},Ee=a(27),we=function(e){return{isAuth:e.Auth.auth}},Oe=function(e){var t=function(t){function a(){return Object(f.a)(this,a),Object(p.a)(this,Object(_.a)(a).apply(this,arguments))}return Object(h.a)(a,t),Object(g.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(Ee.a,{to:"/login"})}}]),a}(r.a.Component);return Object(m.b)(we)(t)},ke=a(6),je=function(e){function t(){return Object(f.a)(this,t),Object(p.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUsersProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return this.props.isAuth&!this.props.profilePage.ProfileData?r.a.createElement(be,null):r.a.createElement(ge,{profilePage:this.props.profilePage,updateUserStatus:this.props.updateUserStatus})}}]),t}(r.a.Component),Pe=Object(ke.d)(Object(m.b)((function(e){return{profilePage:e.profilePage}}),{getUsersProfile:function(e){return function(t){H(e).then((function(e){t({type:"SET-USERS-PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){Z(e).then((function(e){t(V(e.data))}))}},updateUserStatus:function(e){return function(t){Y(e).then((function(){t(V(e))}))}}}),Ee.f,Oe)(je),Ne=a(124),ye=a.n(Ne),Se=function(){return r.a.createElement("div",{className:ye.a.news},"News")},xe=a(125),Fe=a.n(xe),Te=Oe((function(){return r.a.createElement("div",{className:Fe.a.music},"Music")})),De=a(126),Ce=a.n(De),Me=Oe((function(){return r.a.createElement("div",{className:Ce.a.settings},"Settings")})),Ae=a(58),Ue=a.n(Ae),Le=function(e){var t="/dialogs/"+e.id;return r.a.createElement(l.b,{to:t,activeClassName:Ue.a.active},r.a.createElement("div",{className:Ue.a.dialog_list_item},r.a.createElement("div",null,r.a.createElement("img",{className:Ue.a.img,src:e.avatar,alt:"Avatar"})),e.name," ",r.a.createElement("br",null)," ",e.second__name))},Ie=a(127),Ge=a.n(Ie),ze=function(e){return r.a.createElement("div",{className:Ge.a.massages_list_item},e.message)},Re=a(59),We=a.n(Re),He={MessagesData:[{id:"1",message:"First message"},{id:"2",message:"Second massage"},{id:"3",message:"Third message"},{id:"4",message:"Fourth message"},{id:"5",message:"Fifth message"}],usersData:[{id:"1",name:"Franki",second__name:"Alladay",like_counter:"10",avatar:"https://avatars.mds.yandex.net/get-pdb/989459/fb1ea292-9a7b-4880-878d-dbed2c534716/s1200?webp=false"},{id:"2",name:"Nikolay",second__name:"Puchinin",like_counter:"11",avatar:"https://koshek.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=1600&h=800&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F12%2F309.jpg"},{id:"3",name:"Maksim",second__name:"Moiseenko",like_counter:"12",avatar:"https://pets-expert.ru/wp-content/uploads/2018/09/\u041c\u0430\u043d\u0447\u043a\u0438\u043d-\u0441-\u0431\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u043c\u0438-\u0433\u043b\u0430\u0437\u0430\u043c\u0438.jpg"},{id:"4",name:"Ignat",second__name:"Lesovckiy",like_counter:"13",avatar:"https://avatars.mds.yandex.net/get-pdb/812271/30f9a828-a9ff-4eed-9b08-f9a7dbbab37c/s1200"},{id:"5",name:"Alexei",second__name:"Michailov",like_counter:"14",avatar:"https://s1.1zoom.ru/big3/718/422583-blackangel.jpg"},{id:"6",name:"Oleg",second__name:"Radzievskiy",like_counter:"15",avatar:"https://avatars.mds.yandex.net/get-pdb/51720/15939212-1cf3-4007-8ada-e476aafdbcf2/s1200?webp=false"}],newMessageText:""},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(A.a)({},e,{MessagesData:[].concat(Object(M.a)(e.MessagesData),[{id:6,message:t.message}]),newMessageText:t.message});default:return Object(A.a)({},e)}},Ye=a(128),Be=a.n(Ye),qe=Object(b.a)({form:"message"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(v.a,{name:"message",component:k,type:"textarea",placeholder:"Write something",validate:[P,N]}))})),Ke=function(e){return r.a.createElement("div",{className:Be.a.form},r.a.createElement(qe,{onSubmit:function(t){e.AddMessage(t.message),console.log(t),t.message=""}}))},Ve=function(e){var t=function(t){e.dispatch(function(e){return{type:"ADD-MESSAGE",message:e}}(t))};return r.a.createElement(Ke,{onSubmit:t,newMessageText:e.newMessageText,AddMessage:t})},Je=function(e){return r.a.createElement("div",{className:We.a.dialogs},r.a.createElement("div",{className:We.a.dialog_list},e.DialogsItems),r.a.createElement("div",{className:We.a.massages_list},e.Messages),r.a.createElement(Ve,{newMessageText:e.newMessageText,dispatch:e.dispatch}))},Xe=Object(ke.d)(Object(m.b)((function(e){return{DialogsItems:e.dialogsPage.usersData.map((function(e){return r.a.createElement(Le,{key:e.id,name:e.name,second__name:e.second__name,id:e.id,avatar:e.avatar})})),Messages:e.dialogsPage.MessagesData.map((function(e){return r.a.createElement(ze,{key:e.id,message:e.message,id:e.id})})),newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{dispatch:e}})),Oe)(Je),$e={usersData:[],currentPage:1,totalCount:0,pageSize:5,isFetching:!0,following:[]},Qe=function(e){return{type:"FOLLOW",id:e}},et=function(e){return{type:"UNFOLLOW",id:e}},tt=function(e){return{type:"SET-USERS",data:e}},at=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},nt=function(e){return{type:"SET-TOTAL-COUNT",totalCount:e}},rt=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},st=function(e,t){return{type:"TOGGLE-IS-FOLLOWING",following:e,id:t}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(A.a)({},e,{usersData:e.usersData.map((function(e){return e.id===t.id?Object(A.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(A.a)({},e,{usersData:e.usersData.map((function(e){return e.id===t.id?Object(A.a)({},e,{followed:!1}):e}))});case"SET-USERS":return Object(A.a)({},e,{usersData:Object(M.a)(t.data)});case"SET-CURRENT-PAGE":return Object(A.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-COUNT":return Object(A.a)({},e,{totalCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(A.a)({},e,{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING":return Object(A.a)({},e,{following:t.following?[].concat(Object(M.a)(e.following),[t.id]):e.following.filter((function(e){return e!==t.id}))});default:return Object(A.a)({},e)}},it=a(60),ct=a.n(it),lt=a(39),ut=a.n(lt),mt=function(e){var t=!0!==e.followed?"Follow":"Unfollow",a=!0===e.followed?function(){e.unfollowThunk(e.id,e.name)}:function(){e.followThunk(e.id,e.name)},n=!0!==e.followed?ut.a.follow:ut.a.unfollow;return r.a.createElement("div",{className:ut.a.user},r.a.createElement(l.b,{to:"/profile/".concat(e.id)},r.a.createElement("div",{className:ut.a.avatar},r.a.createElement("img",{src:e.avatar,alt:""}))),r.a.createElement("div",{className:ut.a.name},e.name," ",r.a.createElement("br",null)," ",e.second__name),r.a.createElement("button",{disabled:e.following.some((function(t){return t===e.id})),onClick:a,className:n}," ",t))},dt=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);var s=e.usersData.map((function(t){return r.a.createElement(mt,{key:t.id,name:t.name,second__name:t.second__name,id:t.id,avatar:null!=t.photos.small?t.photos.small:q.a,following:e.following,followed:t.followed,follow:e.follow,unfollow:e.unfollow,followingInProgress:e.followingInProgress,unfollowThunk:e.unfollowThunk,followThunk:e.followThunk})}));return r.a.createElement("div",{className:ct.a.users},s,a.map((function(t){return r.a.createElement("span",{className:e.currentPage===t?ct.a.activePage:ct.a.Page,onClick:function(){return e.setCurrentPage(t)}}," ",t," ")})))},ft=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).setCurrentPage=function(e){a.props.getUsers(e,a.props.pageSize)},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetch?r.a.createElement(be,null):r.a.createElement(dt,Object.assign({},this.props,{setCurrentPage:this.setCurrentPage})))}}]),t}(r.a.Component),gt=Object(ke.d)(Object(m.b)((function(e){return{usersData:e.usersPage.usersData,currentPage:e.usersPage.currentPage,totalCount:e.usersPage.totalCount,pageSize:e.usersPage.pageSize,isFetch:e.usersPage.isFetching,following:e.usersPage.following,isAuth:e.Auth.auth}}),{setCurrentPage:at,follow:Qe,unfollow:et,followingInProgress:st,getUsers:function(e,t){return function(a){a(rt(!0)),L(e,t).then((function(t){a(tt(t.items)),a(nt(t.totalCount)),a(rt(!1)),a(at(e))}))}},unfollowThunk:function(e){return function(t){t(st(!0,e)),G(e).then((function(a){0===a.data.resultCode&&t(et(e)),t(st(!1,e))}))}},followThunk:function(e,t){return function(t){t(st(!0,e)),I(e).then((function(a){0===a.data.resultCode&&t(Qe(e)),t(st(!1,e))}))}}}),Oe)(ft),pt={id:null,email:null,login:null,auth:!1},_t=function(){return function(e){z().then((function(t){var a=Object(A.a)({},t.data);e(ht(a))}))}},ht=function(e){return{type:"Log-in",data:e}},vt=function(){return{type:"Log-out"}},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Log-in":return Object(A.a)({},e,{},t.data.data,{},e.auth=0===t.data.resultCode);case"Log-out":return Object(A.a)({},e.id=null,{},e.email=null,{},e.login=null,{},e.auth=!1);default:return Object(A.a)({},e)}},Et=a(32),wt=a.n(Et),Ot=function(e){return r.a.createElement("header",{className:wt.a.header},r.a.createElement("div",{className:wt.a.header__logo}," Logo "),r.a.createElement("div",{className:wt.a.header_login}," ",null===e.login?r.a.createElement(Ee.a,{to:"login"}):r.a.createElement("div",{className:wt.a.header_form},"  ",r.a.createElement("div",{className:wt.a.login},e.login)," ",e.login&&r.a.createElement("button",{className:wt.a.button,onClick:function(){e.LogoutThunk()}}," Logout")," ")," "))},kt=function(e){function t(){return Object(f.a)(this,t),Object(p.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.AuthThunk()}},{key:"render",value:function(){return r.a.createElement(Ot,Object.assign({},this.props.state.Auth,{LogoutThunk:this.props.LogoutThunk}))}}]),t}(r.a.Component),jt=Object(m.b)((function(e){return{state:Object(A.a)({},e)}}),{AuthThunk:_t,LogoutThunk:function(){return function(e){W().then((function(t){e(vt())}))}}})(Object(Ee.f)(kt)),Pt=a(61),Nt=a.n(Pt),yt=Object(b.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(v.a,{type:"login",name:"email",placeholder:"login",component:j,validate:[P,N,S]})),r.a.createElement("div",null,r.a.createElement(v.a,{type:"password",name:"password",placeholder:"Password",component:j,validate:[P,y]})),r.a.createElement("div",null,r.a.createElement(v.a,{type:"checkbox",name:"rememberMe",component:"input"}),r.a.createElement("span",null,"remember me")),r.a.createElement("button",{className:Nt.a.button},"Login"))})),St=Object(m.b)((function(e){return{state:e.Auth}}),{LoginThunk:function(e,t,a){return function(n){R(e,t,a).then((function(e){console.log(e.data.data),n(_t())}))}}})((function(e){return e.state.auth?r.a.createElement(Ee.a,{to:"/profile/".concat(e.state.id)}):r.a.createElement("div",{className:Nt.a.loginPage},r.a.createElement("div",{className:Nt.a.form},r.a.createElement("h1",null," \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f "),r.a.createElement(yt,{onSubmit:function(t){e.LoginThunk(t.email,t.password,t.rememberMe),t.login="",t.password="",t.rememberMe=!1}})))})),xt=function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(jt,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(Ee.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(Ee.b,{path:"/dialogs",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(Ee.b,{path:"/users",render:function(){return r.a.createElement(gt,null)}}),r.a.createElement(Ee.b,{path:"/news",component:Se}),r.a.createElement(Ee.b,{path:"/music",component:Te}),r.a.createElement(Ee.b,{path:"/settings",component:Me}),r.a.createElement(Ee.b,{path:"/login",render:function(){return r.a.createElement(St,null)}}))))},Ft=a(129),Tt=a(259),Dt=Object(ke.c)({profilePage:J,dialogsPage:Ze,usersPage:ot,Auth:bt,form:Tt.a}),Ct=Object(ke.e)(Dt,Object(ke.a)(Ft.a));window.store=Ct;var Mt=Ct,At=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ut(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(l.a,{basename:"/DemoSocial"},r.a.createElement(m.a,{store:Mt},r.a.createElement(xt,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DemoSocial",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/DemoSocial","/service-worker.js");At?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ut(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ut(t,e)}))}}()},31:function(e,t,a){e.exports={post:"Post_post__2ZUZ6",title:"Post_title__a3sue",like:"Post_like__2lSKn",name:"Post_name__yOVCW",content:"Post_content__34v1E",message:"Post_message__LWbA_"}},32:function(e,t,a){e.exports={header:"Header_header__3G4xP",header__logo:"Header_header__logo__3I_Fy",header_user_info:"Header_header_user_info__2jfl0",header_login:"Header_header_login__2By-n",header_form:"Header_header_form__2YPND",login:"Header_login__2PZ-B",button:"Header_button__3zTjO"}},37:function(e,t,a){e.exports=a.p+"static/media/User.a1107919.jpg"},38:function(e,t,a){e.exports={info:"Info_info__2bgsw",text:"Info_text__2-TMd",status:"Info_status__2yUFp"}},39:function(e,t,a){e.exports={user:"User_user__3YUoV",name:"User_name__2eT1d",avatar:"User_avatar__2f3vY",follow:"User_follow__33jnG",unfollow:"User_unfollow__31OxE"}},45:function(e,t,a){e.exports={friend:"Friend_friend__1vXYD",name:"Friend_name__27kj7",avatar:"Friend_avatar__1Fz9a",img:"Friend_img__FO0jK"}},58:function(e,t,a){e.exports={dialog_list:"DialogsItem_dialog_list__3jk2p",dialog_list_item:"DialogsItem_dialog_list_item__zD8_a",active:"DialogsItem_active__3I8qO",img:"DialogsItem_img__1SDbL"}},59:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1fd7u",massages_list:"Dialogs_massages_list__1qlZ-"}},60:function(e,t,a){e.exports={users:"Users_users__34v6w",activePage:"Users_activePage__3TVmh",Page:"Users_Page__1eL6m"}},61:function(e,t,a){e.exports={loginPage:"Login_loginPage__-u2lB",form:"Login_form__SVzTD",button:"Login_button__EFxg_"}}},[[130,1,2]]]);
//# sourceMappingURL=main.58af0468.chunk.js.map