(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),o=n(20),s=n.n(o),r=(n(31),n(25)),l=n(2),u=n(21),d=n(22),p=new(function(){function e(t){Object(u.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(d.a)(e,[{key:"_responseHandler",value:function(e){return e.ok?e.json():Promise.reject("Error happen: ".concat(e.status))}},{key:"getInitialData",value:function(){return Promise.all([this.getInitialProfile(),this.getInitialCards()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(this._responseHandler)}},{key:"getInitialProfile",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._responseHandler)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._responseHandler)}},{key:"delCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._responseHandler)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._responseHandler)}},{key:"delLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._responseHandler)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.delLike(e)}},{key:"setProfile",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._responseHandler)}},{key:"setProfileAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._responseHandler)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16/",headers:{authorization:"cbe4503b-5ebe-4451-a159-203687412eb7","Content-Type":"application/json"}}),h=i.a.createContext(),j=n(3),m=n.p+"static/media/white-logo.c2821b38.svg",_=n(5);var b=function(e){var t=Object(j.h)(),n=Object(c.useState)(!0),i=Object(l.a)(n,2),o=i[0],s=i[1],r=Object(c.useState)(void 0),u=Object(l.a)(r,2),d=u[0],p=u[1];function h(){s(!o)}return Object(c.useEffect)((function(){function e(){p(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.jsxs)("header",{className:"header ".concat(e.loggedIn&&d<540?"header__loggedin-mob":""),children:[Object(a.jsxs)("div",{className:"header__wrap header__wrap_logo",children:[Object(a.jsx)("img",{src:m,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),e.loggedIn&&(o?Object(a.jsx)("button",{onClick:h,className:"header__menu header__menu_bar",children:"\u2630"}):Object(a.jsx)("button",{onClick:h,className:"header__menu header__menu_close",children:"\u2573"}))]}),Object(a.jsxs)("div",{className:"header__wrap ".concat(e.loggedIn&&d<540?"header__wrap_loggedin-mob":""," header__wrap_email \n      ").concat(e.loggedIn&&d<540&&(o?"header__wrap_hide":"")),children:[e.loggedIn&&Object(a.jsx)("p",{className:"header__email",children:e.userEmail}),!e.loggedIn&&"/sign-up"===t.pathname&&Object(a.jsx)(_.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"}),!e.loggedIn&&"/sign-in"===t.pathname&&Object(a.jsx)(_.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),e.loggedIn&&Object(a.jsx)(_.b,{to:"/sign-in",onClick:e.logOut,className:"header__link",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})};var f=function(e){var t=i.a.useContext(h),n=e.card.owner._id===t._id,c=e.card.likes.some((function(e){return e._id===t._id})),o="location__trash ".concat(n?"location__trash_visible":"location__trash_invisible"),s="location__rate ".concat(c?"location__rate_marked":"");return Object(a.jsxs)("div",{className:"location",children:[Object(a.jsx)("img",{onClick:function(){e.onImgClick(e.card)},src:String(e.card.link),alt:"\u0424\u043e\u0442\u043e ".concat(e.card.name),className:"location__image"}),Object(a.jsx)("button",{type:"button",onClick:function(){e.onCardDelete(e.card)},className:o}),Object(a.jsxs)("div",{className:"location__info",children:[Object(a.jsx)("h2",{className:"location__name",children:e.card.name}),Object(a.jsxs)("div",{className:"location__wrap",children:[Object(a.jsx)("button",{type:"button",onClick:function(){e.onCardLike(e.card)},className:s}),Object(a.jsx)("span",{className:"location__likes",children:e.card.likes.length})]})]})]})};var O=function(e){var t=i.a.useContext(h);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",id:"profile",children:[Object(a.jsxs)("div",{className:"profile__overlay",children:[Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"}),Object(a.jsx)("button",{className:"profile__edit-avatar",onClick:e.onEditAvatar,children:"\ud83d\udd89"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__text",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("p",{className:"profile__role",children:t.about})]}),Object(a.jsx)("button",{className:"profile__edit-info",onClick:e.onEditProfile,children:"\ud83d\udd89"})]}),Object(a.jsx)("button",{className:"profile__add",onClick:e.onAddPlace,children:"\uff0b"})]}),Object(a.jsx)("section",{className:"locations",children:e.isCardsLoading?Object(a.jsx)("p",{className:"locations__loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):e.cards.map((function(t){return Object(a.jsx)(f,{card:t,onImgClick:e.onImgClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var g=function(){var e=new Date;return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:["\xa92020 - ",e.getFullYear()," Mesto Russia"]})})};var x=function(e){return Object(a.jsx)("div",{onClick:e.onClick,className:"popup ".concat(e.isOpen&&e.card&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container popup__container_image",children:[Object(a.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__close popup__close_image",children:"\u2573"}),Object(a.jsx)("img",{src:String(e.card.link),alt:"\u0424\u043e\u0442\u043e ".concat(e.card.name),className:"popup__image"}),Object(a.jsx)("p",{className:"popup__caption",children:e.card.name})]})})};var v=function(e){return Object(a.jsx)("div",{onClick:e.onClick,className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("form",{name:e.name,noValidate:!0,className:"popup__container popup__form popup__container_type_".concat(e.name),onSubmit:e.onSubmit,isDisabled:!1,children:[Object(a.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__close popup__close_profile-".concat(e.name),children:"\u2573"}),Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__btn popup__btn_type_".concat(e.name," ").concat(e.isDisabled&&"popup__btn_disabled"),children:e.btnText})]})})},C=n(11),k=n(10);function N(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),o=Object(l.a)(i,2),s=o[0],r=o[1],u=Object(c.useState)({}),d=Object(l.a)(u,2),p=d[0],h=d[1],j=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(e),r(t),h(n)}),[a,r,h]);return{values:n,handleChange:function(e){var t=e.target,c=t.value,i=t.name;a(Object(k.a)(Object(k.a)({},n),{},Object(C.a)({},i,c))),r(Object(k.a)(Object(k.a)({},s),{},Object(C.a)({},i,t.validationMessage))),h(t.closest("form").checkValidity())},errors:s,isValid:p,resetForm:j}}var y=function(e){var t=N(),n=t.values,i=t.handleChange,o=t.errors,s=t.isValid,r=t.resetForm,l=Object(c.useContext)(h);return Object(c.useEffect)((function(){l&&r(l)}),[l,r]),Object(a.jsx)(v,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",btnText:e.isUserSaving?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(n)},isDisabled:!s,onClick:e.onClick,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",id:"name-input",name:"name",value:n.name||"",placeholder:"\u0418\u043c\u044f",onChange:i,className:"popup__text popup__text_type_name",required:!0,minLength:"2",maxLength:"40"}),Object(a.jsx)("span",{id:"name-input-error",className:"popup__text-error",children:o.name||""}),Object(a.jsx)("input",{type:"text",id:"role-input",name:"about",onChange:i,placeholder:"\u0414\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",className:"popup__text popup__text_type_role",value:n.about||"",required:!0,minLength:"2",maxLength:"200"}),Object(a.jsx)("span",{id:"role-input-error",className:"popup__text-error",children:o.about||""})]})})};var S=function(e){var t=N(),n=t.values,i=t.handleChange,o=t.errors,s=t.isValid,r=t.resetForm;return Object(c.useEffect)((function(){r()}),[e.isOpen,r]),Object(a.jsx)(v,{name:"renew",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(n)},isDisabled:!s,onClick:e.onClick,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"url",id:"avatar-ref-input",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,className:"popup__text popup__text_type_ref",value:n.avatar||"",onChange:i}),Object(a.jsx)("span",{id:"avatar-ref-input-error",className:"popup__text-error",children:o.avatar||""})]})})};var w=function(e){var t=N(),n=t.values,i=t.handleChange,o=t.errors,s=t.isValid,r=t.resetForm;return Object(c.useEffect)((function(){r()}),[e.isOpen,r]),Object(a.jsx)(v,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnText:e.isPlaceAdding?"\u0421\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace(n)},isDisabled:!s,onClick:e.onClick,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",id:"location-name-input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",className:"popup__text popup__text_type_location-name",value:n.name||"",onChange:i}),Object(a.jsx)("span",{id:"location-name-input-error",className:"popup__text-error",children:o.name||""}),Object(a.jsx)("input",{type:"url",id:"location-ref-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,className:"popup__text popup__text_type_ref",value:n.link||"",onChange:i}),Object(a.jsx)("span",{id:"location-ref-input-error",className:"popup__text-error",children:o.link||""})]})})};var L=function(e){return Object(a.jsx)(v,{name:"cardDel",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",btnText:e.isCardDeleting?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:e.handleSubmit,onClick:e.onClick})};var E=function(e){return Object(a.jsx)("div",{onClick:e.onClick,className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container popup__container_tooltip",children:[Object(a.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__close popup__close_image",children:"\u2573"}),Object(a.jsx)("span",{className:"popup__info popup__info_".concat(e.type)}),Object(a.jsx)("h2",{className:"popup__title popup__title_center",children:e.message})]})})};var T=function(e){return Object(a.jsxs)("form",{onSubmit:e.onSubmit,className:"form-auth ".concat(e.name,"-auth__login"),children:[Object(a.jsx)("h2",{className:"form-auth__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"form-auth__btn form-auth__btn_type_".concat(e.name," ").concat(e.isDisabled&&"form-auth__btn_disabled"),children:e.btnText}),Object(a.jsxs)("p",{className:"form-auth__text",children:[e.text," ",Object(a.jsx)(_.b,{className:"form-auth__link",to:"/sign-in",children:e.linkText})]})]})},I="https://auth.nomoreparties.co";var P=function(e){var t=Object(j.g)(),n=N(),c=n.values,o=n.handleChange,s=n.errors,r=n.isValid,l=n.resetForm;return i.a.useEffect((function(){l()}),[l]),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(T,{className:"login",title:"\u0412\u0445\u043e\u0434",btnText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(n){var a;n.preventDefault(),c.email&&c.password&&(a=c,fetch("".concat(I,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.email,password:a.password})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))).then((function(n){n&&(e.handleLogin(),t.push("/"))})).catch((function(e){return console.log(e)}))},isDisabled:r,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"email",id:"email",pattern:"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",name:"email",value:c.email||"",placeholder:"Email",onChange:o,className:"form-auth__input form-auth__input_type_email",required:!0,minLength:"2",maxLength:"70"}),Object(a.jsx)("span",{id:"email-input-error",className:"form-auth__input-error",children:s.email||""}),Object(a.jsx)("input",{type:"password",id:"pass",name:"password",onChange:o,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"form-auth__input form-auth__input_type_password",value:c.password||"",required:!0,minLength:"5",maxLength:"20"}),Object(a.jsx)("span",{id:"password-input-error",className:"form-auth__input-error",children:s.password||""})]})})})};var D=function(e){var t=Object(j.g)(),n=N(),c=n.values,i=n.handleChange,o=n.errors,s=n.isValid,r=n.resetForm;return Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(T,{className:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",btnText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(n){var a;n.preventDefault(),(a=c,fetch("".concat(I,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.email,password:a.password})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){return console.log(e)}))).then((function(n){n?(e.onTooltipOpen(),e.message("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),e.type("positive"),t.push("/sign-in")):(e.message("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),e.type("negative"),e.onTooltipOpen())})),r()},isDisabled:s,text:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",linkText:"\u0412\u043e\u0439\u0442\u0438",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"email",id:"email",pattern:"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",name:"email",value:c.email||"",placeholder:"Email",onChange:i,className:"form-auth__input form-auth__input_type_email",required:!0,minLength:"2",maxLength:"70"}),Object(a.jsx)("span",{id:"email-input-error",className:"form-auth__input-error",children:o.email||""}),Object(a.jsx)("input",{type:"password",id:"pass",name:"password",onChange:i,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"form-auth__input form-auth__input_type_password",value:c.password||"",required:!0,minLength:"5",maxLength:"20"}),Object(a.jsx)("span",{id:"password-input-error",className:"form-auth__input-error",children:o.password||""})]})})})},A=n(24),F=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return Object(a.jsx)(j.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(k.a)({},n)):Object(a.jsx)(j.a,{to:"/sign-in"})}})};var H=function(){var e=Object(j.g)(),t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)(!1),u=Object(l.a)(s,2),d=u[0],m=u[1],_=Object(c.useState)(!1),f=Object(l.a)(_,2),v=f[0],C=f[1],k=Object(c.useState)(!1),N=Object(l.a)(k,2),T=N[0],A=N[1],H=Object(c.useState)(!1),z=Object(l.a)(H,2),q=z[0],U=z[1],V=Object(c.useState)(!1),J=Object(l.a)(V,2),Z=J[0],B=J[1],G=Object(c.useState)(!1),M=Object(l.a)(G,2),$=M[0],R=M[1],W=Object(c.useState)(!1),Y=Object(l.a)(W,2),K=Y[0],Q=Y[1],X=Object(c.useState)(!1),ee=Object(l.a)(X,2),te=ee[0],ne=ee[1],ae=Object(c.useState)(!1),ce=Object(l.a)(ae,2),ie=ce[0],oe=ce[1],se=Object(c.useState)(!1),re=Object(l.a)(se,2),le=re[0],ue=re[1],de=Object(c.useState)({}),pe=Object(l.a)(de,2),he=pe[0],je=pe[1],me=Object(c.useState)({}),_e=Object(l.a)(me,2),be=_e[0],fe=_e[1],Oe=Object(c.useState)([]),ge=Object(l.a)(Oe,2),xe=ge[0],ve=ge[1],Ce=Object(c.useState)({}),ke=Object(l.a)(Ce,2),Ne=ke[0],ye=ke[1],Se=Object(c.useState)(""),we=Object(l.a)(Se,2),Le=we[0],Ee=we[1],Te=Object(c.useState)(""),Ie=Object(l.a)(Te,2),Pe=Ie[0],De=Ie[1],Ae=Object(c.useState)(""),Fe=Object(l.a)(Ae,2),He=Fe[0],ze=Fe[1];function qe(e){e.target===e.currentTarget&&Ve()}function Ue(){oe(!ie)}function Ve(){o(!1),m(!1),C(!1),A(!1),U(!1),oe(!1),je({})}Object(c.useEffect)((function(){B(!0),p.getInitialCards().then((function(e){ve(e)})).catch((function(e){alert(e)})).finally((function(){B(!1)}))}),[]),Object(c.useEffect)((function(){p.getInitialProfile().then((function(e){fe(e)})).catch((function(e){alert(e)}))}),[]),Object(c.useEffect)((function(){function e(e){"Escape"===e.key&&Ve()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var Je=Object(c.useCallback)((function(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");t&&(n=t,fetch("".concat(I,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(t){t&&(ze(t.data.email),ue(!0),e.push("/"))}))}var n}),[e,ue,ze]);return Object(c.useEffect)((function(){localStorage.getItem("jwt")&&Je()}),[le]),Object(a.jsxs)(h.Provider,{value:be,children:[Object(a.jsx)(b,{loggedIn:le,logOut:function(){ue(!1),console.log(le),localStorage.removeItem("jwt"),e.push("/sign-in")},userEmail:He}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/sign-up",children:Object(a.jsx)(D,{onTooltipOpen:Ue,message:Ee,type:De})}),Object(a.jsx)(j.b,{path:"/sign-in",children:Object(a.jsx)(P,{onTooltipOpen:Ue,message:Ee,type:De,handleLogin:function(){ue(!0)}})}),Object(a.jsx)(F,{path:"/",component:O,loggedIn:le,onEditProfile:function(){o(!i)},onAddPlace:function(){m(!d)},onEditAvatar:function(){C(!v)},onImgClick:function(e){A(!T),je(e)},isCardsLoading:Z,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===be._id}));p.changeLikeCardStatus(e._id,!t).then((function(t){var n=xe.map((function(n){return n._id===e._id?t:n}));ve(n)})).catch((function(e){alert(e)}))},onCardDelete:function(e){ye(e),U(!q)},cards:xe})]}),Object(a.jsx)(g,{}),i&&Object(a.jsx)(y,{isOpen:i,onClose:Ve,onUpdateUser:function(e){R(!0),p.setProfile(e).then((function(e){fe(e),Ve()})).catch((function(e){alert(e)})).finally((function(){R(!1)}))},onClick:qe,isUserSaving:$}),v&&Object(a.jsx)(S,{isOpen:v,onClose:Ve,onUpdateAvatar:function(e){p.setProfileAvatar(e).then((function(e){fe(e),Ve()})).catch((function(e){alert(e)}))},onClick:qe}),d&&Object(a.jsx)(w,{isOpen:d,onClose:Ve,onAddPlace:function(e){ne(!0),p.addCard(e).then((function(e){ve([e].concat(Object(r.a)(xe))),Ve()})).catch((function(e){alert(e)})).finally((function(){ne(!1)}))},onClick:qe,isPlaceAdding:te}),q&&Object(a.jsx)(L,{isOpen:q,onClose:Ve,handleSubmit:function(e){e.preventDefault(),Q(!0),p.delCard(Ne._id).then((function(){var e=xe.filter((function(e){return e!==Ne}));ve(e),U(!1)})).catch((function(e){alert(e)})).finally((function(){Q(!1)}))},onClick:qe,isCardDeleting:K}),T&&Object(a.jsx)(x,{card:he,isOpen:T,onClose:Ve,onClick:qe}),ie&&Object(a.jsx)(E,{type:Pe,isOpen:ie,onClose:Ve,onClick:qe,message:Le})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(_.a,{children:Object(a.jsx)(H,{})})}),document.getElementById("root")),z()}},[[37,1,2]]]);
//# sourceMappingURL=main.3c18cb07.chunk.js.map