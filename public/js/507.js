/*! For license information please see 507.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[507],{1507:(t,e,r)=>{r.r(e),r.d(e,{default:()=>O});var n=r(821),o={class:"home-section"},a={class:"center"},i={class:"top-nav-inivte"},s=(0,n._)("a",{href:"javascript:void(0)"},"Edit Profile",-1),u=[(0,n._)("i",{class:"fa-solid fa-arrow-right-from-bracket",style:{color:"#fff"}},null,-1)],c={class:"bankAccount-form"},l={id:"form"},f={class:"member-detail-dashboard-profile"},p={class:"inputBox"},d=(0,n._)("label",{for:"nickname"},"Nick Name",-1),h={class:"inputBox"},y=(0,n._)("label",{for:"name"},"Name",-1),m={class:"inputBox"},v=(0,n._)("label",{for:"password"},"Password",-1),w=[(0,n._)("i",{class:"fa-solid fa-eye-slash",style:{color:"#22487c"}},null,-1)],g=(0,n._)("small",{id:"passwordMessage"},null,-1),b={class:"inputBox"},_=(0,n._)("label",{for:"confirmpassword"},"Confirm Password",-1),x=[(0,n._)("i",{class:"fa-solid fa-eye-slash",style:{color:"#22487c"}},null,-1)],k={class:"bankAccount-submit-btns"};function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),s=new G(n||[]);return o(i,"_invoke",{value:O(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",y="completed",m={};function v(){}function w(){}function g(){}var b={};c(b,i,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(I([])));x&&x!==r&&n.call(x,i)&&(b=x);var k=g.prototype=v.prototype=Object.create(b);function P(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,s){var u=f(t[o],t,a);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==L(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(l).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,s)}))}s(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=p;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var u=C(s,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var c=f(e,r,n);if("normal"===c.type){if(o=n.done?y:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=y,n.method="throw",n.arg=c.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(L(e)+" is not iterable")}return w.prototype=g,o(k,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:w,configurable:!0}),w.displayName=c(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},P(j.prototype),c(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(k),c(k,u,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function P(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}const j={data:function(){return{user:{nickname:null,name:null,password:null,confirmpassword:null,username:null}}},mounted:function(){var t=this;this.GetUser().then((function(){t.user.nickname=t.Users.nickname,t.user.name=t.Users.name,t.user.username=t.Users.username}))},methods:{togglePasswordVisibility:function(t){var e=document.getElementById(t),r=e.nextElementSibling.querySelector("i");"password"===e.type?(e.type="text",r.classList.remove("fa-eye-slash"),r.classList.add("fa-eye")):(e.type="password",r.classList.remove("fa-eye"),r.classList.add("fa-eye-slash"))},validatePassword:function(){return null===this.user.password||null!==this.user.password&&this.user.password.length>=6},validateConfirmPassword:function(){return null===this.user.password||null!==this.user.confirmpassword&&this.user.confirmpassword===this.user.password&&null!==this.user.password&&this.user.password.length>=6},focusInput:function(t){this.$refs[t].focus()},updateDetails:function(){var t,e=this;return(t=E().mark((function t(){var r,n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.validatePassword()){t.next=4;break}return e.focusInput("password"),e.ealert("Password length should be minmium 6."),t.abrupt("return");case 4:if(e.validateConfirmPassword()){t.next=8;break}return e.focusInput("confirmpassword"),e.ealert("Passwords do not match"),t.abrupt("return");case 8:return t.next=10,e.callApi("post","api/user/v1/updateDetails",e.user);case 10:if(200===(r=t.sent).status)e.salert(r.data.msg),e.$router.push({name:"Profile"});else if(401===r.status)e.logout();else if(400==r.status)e.ialert(r.data.msg);else if(422==r.status)for(n in r.data.errors)e.ealert(r.data.errors[n][0]);else e.swralert();case 12:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){P(a,n,o,i,s,"next",t)}function s(t){P(a,n,o,i,s,"throw",t)}i(void 0)}))})()}}};const O=(0,r(3744).Z)(j,[["render",function(t,e,r,L,E,P){return(0,n.wg)(),(0,n.iD)("section",o,[(0,n._)("div",a,[(0,n._)("div",i,[s,(0,n._)("a",{onClick:e[0]||(e[0]=function(e){return t.$router.push({name:"Profile"})})},u)]),(0,n._)("div",c,[(0,n._)("div",l,[(0,n._)("div",f,[(0,n._)("div",p,[d,(0,n.wy)((0,n._)("input",{type:"text",id:"nickname",name:"nickname","onUpdate:modelValue":e[1]||(e[1]=function(t){return E.user.nickname=t}),placeholder:"Ex. ABC...",autocomplete:"off"},null,512),[[n.nr,E.user.nickname]])]),(0,n._)("div",h,[y,(0,n.wy)((0,n._)("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":e[2]||(e[2]=function(t){return E.user.name=t}),placeholder:"Ex. ABC...",autocomplete:"off"},null,512),[[n.nr,E.user.name]])]),(0,n._)("div",m,[v,(0,n.wy)((0,n._)("input",{type:"password",id:"password",onInput:e[3]||(e[3]=function(){return P.validatePassword&&P.validatePassword.apply(P,arguments)}),ref:"password","onUpdate:modelValue":e[4]||(e[4]=function(t){return E.user.password=t}),placeholder:"Ex. ********",autocomplete:"off"},null,544),[[n.nr,E.user.password]]),(0,n._)("button",{type:"button",onClick:e[5]||(e[5]=function(t){return P.togglePasswordVisibility("password")}),class:"eye-btn"},w),g]),(0,n._)("div",b,[_,(0,n.wy)((0,n._)("input",{type:"password",id:"confirmpassword",onInput:e[6]||(e[6]=function(){return P.validateConfirmPassword&&P.validateConfirmPassword.apply(P,arguments)}),ref:"confirmpassword","onUpdate:modelValue":e[7]||(e[7]=function(t){return E.user.confirmpassword=t}),placeholder:"Ex. ********",autocomplete:"off"},null,544),[[n.nr,E.user.confirmpassword]]),(0,n._)("button",{type:"button",class:"eye-btn",onClick:e[8]||(e[8]=function(t){return P.togglePasswordVisibility("confirmpassword")})},x)])])]),(0,n._)("div",k,[(0,n._)("button",{class:"addBank-btn",type:"button",id:"adddetails",onClick:e[9]||(e[9]=function(t){return P.updateDetails()})}," Update Details")])])])])}]])}}]);