parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"N6wA":[function(require,module,exports) {

},{"./../fonts/Roboto/Roboto-Light.ttf":[["Roboto-Light.f5f866fd.ttf","NqtR"],"NqtR"],"./../fonts/Roboto/Roboto-Regular.ttf":[["Roboto-Regular.e94e4f38.ttf","LUSQ"],"LUSQ"],"./../fonts/Roboto/Roboto-Medium.ttf":[["Roboto-Medium.2629d878.ttf","r5xY"],"r5xY"],"./../fonts/Roboto/Roboto-Bold.ttf":[["Roboto-Bold.391caa3d.ttf","AVVe"],"AVVe"]}],"yCDU":[function(require,module,exports) {

},{"./css/fonts.css":"N6wA","/Users/ijenya/Desktop/director-for-my-git/director-mail/src/images/icon-check.svg":[["icon-check.a94eaee6.svg","ePFJ"],"ePFJ"],"./images/icon-clip.svg":[["icon-clip.4617eb42.svg","XU6W"],"XU6W"],"/Users/ijenya/Desktop/director-for-my-git/director-mail/src/images/director/bg.png":[["bg.2e7ac04a.png","UeZS"],"UeZS"]}],"A7JW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(e,s={}){if(e){var t=this;this.symbol=s.symbol||"_",this.mask=s.mask||"+7 (___) ___-__-__",this.allowedChars=s.allowedChars||"[0-9]",this.empty=s.empty||"false",this.legalLength=s.legalLength,this.element=e,e.value=this.value=this.mask,this.regex=`${this.allowedChars}|${this.symbol}`,this.maskSymbols=this.mask.match(new RegExp(this.regex,"gi")),this.allowedCharsLength=0,this.maskSymbols.forEach(e=>{e==this.symbol&&this.allowedCharsLength++}),this.phonePrefix=!1,this.checkKeyCodeSupport(),e.addEventListener("focus",function(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{var e=t.element.value.indexOf(t.symbol);t.caretPosition=-1!=e?e:t.element.value.length,t.setCaretPosition(t.element,t.caretPosition,t.caretPosition)})})}),e.addEventListener("blur",function(){t.element.value||(t.element.value=t.mask)}),e.addEventListener("paste",e=>{"mask"==this.method&&this.pasteWithMask(e),"simpleMask"==this.method&&this.pasteWithSimpleMask(e)}),this.__bindedRoute=this.route.bind(this),e.addEventListener("load",this.__bindedRoute),e.addEventListener("keydown",this.__bindedRoute)}}route(e){0===e.keyCode||229===e.keyCode?this.__simpleMask(e):this.__mask(e)}__simpleMask(e){new Promise((e,s)=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.value&&this.value.length>=this.element.value.length&&(s(),this.value=this.element.value),e(this.element.value)})})}).then(e=>{return e.match(new RegExp(this.allowedChars,"ig"))}).then(e=>{var s=this.mask.split(""),t=this.mask.match(new RegExp(this.allowedChars,"ig")),a=0;8==e[1]&&e.length<3&&!this.phonePrefix?(e.pop(),this.phonePrefix=!0):this.phonePrefix=!1;for(var i=0;i<s.length;i++)t&&t[a]&&e&&t[a]==e[a]?a++:s[i]==this.symbol&&e&&e[a]?(s[i]=e[a],this.carerPosition=i+1,a++):s[i]==this.symbol&&e&&!e[a]&&(s=s.slice(0,i),this.carerPosition=i+1);return s}).then(e=>{this.value=e.join("")}).then(()=>{this.displayResult()}).catch(e=>{})}__mask(e){"Meta"==e.key||"Meta"==e.keyIdentifier||91==e.keyCode||1==e.metaKey||1==e.ctrlKey||e.preventDefault();var s=this.whatIsKey(e);if(!this.keysArray&&(this.keysArray=[]),-1!==["0","1","2","3","4","5","6","7","8","9","Backspace","Delete"].indexOf(s)){if("Backspace"==s||"Delete"==s){if(!this.keysArray.length)return;this.keysArray.pop()}else{var t=this.mask.match(new RegExp(this.symbol,"ig"));if(t.length>this.keysArray.length)this.keysArray.push(s);else{if(8!=this.keysArray[0]||t.length!=this.keysArray.length)return;this.keysArray.push(s)}}if(0==this.keysArray.length)this.value=this.mask,this.carerPosition=this.mask.indexOf(this.symbol);else{var a=this.mask.split(""),i=0;8==this.keysArray[0]&&(i++,this.carerPosition=4);for(var h=0;h<a.length;h++)a[h]==this.symbol&&this.keysArray[i]&&(a[h]=this.keysArray[i],this.carerPosition=h+1,i++);this.value=a.join("")}this.displayResult()}}setCaretPosition(e,s,t){if(e.setSelectionRange)e.focus(),e.setSelectionRange(s,t);else if(e.createTextRange){var a=e.createTextRange();a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",s),a.select()}}whatIsKey(e){var s=null;if(e.key)s=e.key;else if(event.keyCode)switch(""+event.keyCode){case"48":s="0";break;case"49":s="1";break;case"50":s="2";break;case"51":s="3";break;case"52":s="4";break;case"53":s="5";break;case"54":s="6";break;case"55":s="7";break;case"56":s="8";break;case"57":s="9";break;case"8":s="Backspace";break;case"46":s="Delete"}else if(event.keyIdentifier)switch(""+event.keyIdentifier){case"U+0030":s="0";break;case"U+0031":s="1";break;case"U+0032":s="2";break;case"U+0033":s="3";break;case"U+0034":s="4";break;case"U+0035":s="5";break;case"U+0036":s="6";break;case"U+0037":s="7";break;case"U+0038":s="8";break;case"U+0039":s="9";break;case"U+0008":s="Backspace"}return s}pasteWithMask(e){var s=e.clipboardData&&e.clipboardData.getData("Text");Promise.resolve().then(()=>s?(e.preventDefault(),s.match(new RegExp(this.allowedChars,"gi"))):new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(this.element.value.match(new RegExp(this.allowedChars,"gi")))})})})).then(e=>{if(!e)throw new Error("Пусто во вставке");if(e.length>=this.maskSymbols.length)this.checkDoubleMaskSymbols(e);else for(var s=0;s<e.length;s++)this.keysArray.length<this.allowedCharsLength&&this.keysArray.push(e[s])}).then(()=>{for(var e=this.mask.split(""),s=0,t=0;t<e.length;t++)e[t]==this.symbol&&this.keysArray[s]&&(e[t]=this.keysArray[s],this.carerPosition=t+1,s++);this.value=e.join(""),this.displayResult()}).catch(e=>{console.log("Пустота",e)})}pasteWithSimpleMask(){this.__simpleMask()}displayResult(){var e=this.value&&this.value.match(new RegExp(this.allowedChars,"gi"));this.maskSymbols.length===e&&this.value!=this.lastValue&&(this.lastValue=this.value),this.element.value=this.value,this.setCaretPosition(this.element,this.carerPosition,this.carerPosition),this.element.dispatchEvent(new Event("input"))}checkKeyCodeSupport(){this.method="mask";var e=s=>{"[0-9]"==this.allowedChars&&0!==s.keyCode||229!==s.keyCode?this.method="mask":this.method="simpleMask",removeEventListener("keydown",e)};addEventListener("keydown",e)}checkDoubleMaskSymbols(e){this.keysArray=[];for(var s=0;s<this.maskSymbols.length;s++)e[s]!=this.maskSymbols[s]&&this.keysArray.length<this.allowedCharsLength&&this.keysArray.push(e[s]);for(;s<e.length&&this.keysArray.length<this.allowedCharsLength;s++)this.keysArray.push(e[s])}test(){return!new RegExp(this.symbol).test(this.value)}clear(){this.keysArray=[],this.element.value=""}}exports.default=e;
},{}],"JXHT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./mask.js"));function t(e){return e&&e.__esModule?e:{default:e}}class s{constructor(e){this.form=e,this.setMask(e),this.formListeners(e)}formListeners(e){let t=this.setMask(e).name,s=this.setMask(e).phone,r=this.setMask(e).email,a=this.setMask(e).comment||null;e.addEventListener("change",t=>{this.checkAgree(e)}),e.addEventListener("submit",l=>{l.preventDefault(),console.log(this.checkFormInputs(e,t,s,r,a));try{this.checkFormInputs(e,t,s,r,a)&&(this.submitForm(e),this.sendYandexMetricaReachGoal(e))}catch{console.error("Ошибка при отправке формы")}})}sendYandexMetricaReachGoal(e){if(!e.querySelector('[name="ymName"]'))return;let t=String(e.querySelector('[name="ymName"]').value);yaCounter54273208.reachGoal(t)}submitForm(e){let t=e.querySelector("form"),s=t.getAttribute("action");if(e.querySelector('[name="location"]')){let t=e.querySelector('[name="location"]');t.value=window.location.href,t.setAttribute("value",window.location.href)}fetch(s,{method:"POST",body:new FormData(t)}).then(t=>{200==t.status?(console.log("Форма отправилась"),this.sayThanks(e)):console.log("Форма не отправилась")}).catch(e=>{console.error(e)})}sayThanks(e){e.classList.add("--thanks")}openCheckEl(e,t){let s=e.querySelector(".checkNumber__number");e.classList.add("--check"),s.textContent=t}closeCheckEl(e,t){e.classList.remove("--check"),t&&t.focus()}checkFormInputs(e,t,s,r,a){let l,c,n,o,u,i=!1;return t.test()?(l=!0,t.label.classList.remove("--hasError")):(l=!1,event.preventDefault(),t.label.classList.add("--hasError")),s.test()&&this.checkPhoneNumbers(s.el)?(c=!0,s.label.classList.remove("--hasError")):(c=!1,event.preventDefault(),s.label.classList.add("--hasError")),null!=r.el?r.test()?(n=!0,r.label.classList.remove("--hasError")):(n=!1,event.preventDefault(),r.label.classList.add("--hasError")):n=!0,null!=a?a.test()?(o=!0,a.label.classList.remove("--hasError")):(o=!1,event.preventDefault(),a.label.classList.add("--hasError")):o=!0,this.checkAgree(e)?u=!0:(u=!1,event.preventDefault()),i=!!(l&&c&&n&&o&&u)}checkPhoneNumbers(e){var t=!1,s=e.value.split(""),r=[];for(let a=0;a<s.length;a++){let e=+s[a];switch(e){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:r.push(e)}}return r.length>12&&(t=!0),t}checkAgree(e){if(!e)return;let t=e.querySelector('[type="checkbox"]'),s=e.querySelector('[type="submit"]');return t.checked?(s.removeAttribute("disabled"),!0):(s.setAttribute("disabled","disabled"),!1)}setMask(t){if(t){var s=t.querySelector(".input--phone"),r=t.querySelector("input.--phone"),a=new e.default(r),l={el:r,label:s,test:function(){return a.test()},focus:function(){this.el.focus()},clear(){a.clear()}},c=t.querySelector(".input--name"),n={el:t.querySelector("input.--name"),label:c,test:function(){if(this.el.value.length>1){return new RegExp("^([a-zа-яё ]+|d+)$","gi").test(this.el.value)}return!1},focus:function(){this.el.focus()}},o=t.querySelector(".input--email"),u={el:t.querySelector("input.--email"),label:o,test:function(){return new RegExp(".@.+?\\.\\D{2}","gi").test(this.el.value)},focus:function(){this.el.focus()}};if(t.querySelector(".input.--textarea")){var i=t.querySelector(".input.--textarea");i.querySelector(".input__element")}return{phone:l,name:n,email:u}}}}exports.default=s;
},{"./mask.js":"A7JW"}],"oVPx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./validation.js"));function t(e){return e&&e.__esModule?e:{default:e}}class s{constructor(){this.forms=[...document.querySelectorAll(".form")],this.inputs=[...document.querySelectorAll(".input")],this.inputFile=[...document.querySelectorAll(".js-inputFile")],this.forms.forEach(e=>{this.initValidation(e)}),this.listeners()}listeners(){this.inputFile.forEach(e=>{e.addEventListener("change",t=>{this.showFilesCount(e)})}),this.inputs.forEach(e=>{[...e.querySelectorAll(".input__element")].forEach(t=>{t.addEventListener("change",t=>{this.checkValue(e)}),t.addEventListener("input",t=>{this.checkValue(e)}),t.addEventListener("focus",t=>{this.setFocus(e)}),t.addEventListener("blur",t=>{this.removeFocus(e)})})})}initValidation(t){new e.default(t)}setFocus(e){e.classList.add("--focused")}removeFocus(e){e.classList.remove("--focused")}showFilesCount(e){let t=e.querySelector('input[type="file"]'),s=e.querySelector(".js-inputFileCount"),i=t.files,l=i.length,r="Загруженные файлы:<br> ",n=0;if(l>0){for(let e=0;e<l;e++){r+=e+1+". "+i[e].name+",<br> ",s.innerHTML=r}for(let e=0;e<l;e++)n+=i[e].size;(n=(n=n/1024/1024).toFixed(2))>5?(s.classList.add("--error"),r="Размер файлов не должен превышать 5Мб",s.innerHTML=r,t.value=""):s.classList.remove("--error")}else s.textContent=""}checkValue(e){let t=e.getElementsByClassName("input__element")[0];""!==t.value&&void 0!==t.value&&"+7 (___) ___-__-__"!==t.value?e.classList.add("--hasValue"):e.classList.remove("--hasValue")}}exports.default=s;
},{"./validation.js":"JXHT"}],"QLxl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(){this.selectMenus=[...document.querySelectorAll(".form__select")],this.activeClass="--active",this.selectClass="--selected",this.hasValue="--hasValue",this.listeners()}listeners(){for(let e of this.selectMenus){e.addEventListener("mousedown",()=>{e.classList.contains(this.activeClass)?this.hideSelectMenu(e):(this.removeSelectMenus(),this.openSelectMenu(e))}),document.addEventListener("mousedown",s=>{let t=s.target;t!=e&&!e.contains(t)&&this.hideSelectMenu(e)});let s=e.querySelectorAll(".form__select-item");for(let t of s)t.addEventListener("mousedown",()=>{let s=t.textContent;this.choiceReasonCall(e,s)})}}removeSelectMenus(){for(let e of this.selectMenus)e.classList.remove(this.activeClass)}openSelectMenu(e){e.classList.add(this.activeClass)}hideSelectMenu(e){e.classList.remove(this.activeClass)}choiceReasonCall(e,s){e.classList.add(this.selectClass),e.querySelector(".input__element").value=s,e.querySelector(".form__select-head").classList.add(this.hasValue)}}exports.default=e;
},{}],"S3PC":[function(require,module,exports) {
"use strict";require("./src/main.scss");var e=s(require("./src/js/form.js")),r=s(require("./src/js/select.js"));function s(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",s=>{new e.default,new r.default});
},{"./src/main.scss":"yCDU","./src/js/form.js":"oVPx","./src/js/select.js":"QLxl"}]},{},["S3PC"], null)
//# sourceMappingURL=director-mail.aaba7769.js.map