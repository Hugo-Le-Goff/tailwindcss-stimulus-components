var I=Object.defineProperty;var L=(t,e,s)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>(L(t,typeof e!="symbol"?e+"":e,s),s),A=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var b=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)};var V=(t,e,s)=>(A(t,e,"access private method"),s);import{Controller as D}from"@hotwired/stimulus";async function i(t,e,s={}){e?v(t,s):x(t,s)}async function v(t,e={}){let s=t.dataset.transitionEnter||e.enter||"enter",r=t.dataset.transitionEnterFrom||e.enterFrom||"enter-from",n=t.dataset.transitionEnterTo||e.enterTo||"enter-to",p=t.dataset.toggleClass||e.toggleClass||"hidden";t.classList.add(...s.split(" ")),t.classList.add(...r.split(" ")),t.classList.remove(...n.split(" ")),t.classList.remove(...p.split(" ")),await C(),t.classList.remove(...r.split(" ")),t.classList.add(...n.split(" "));try{await w(t)}finally{t.classList.remove(...s.split(" "))}}async function x(t,e={}){let s=t.dataset.transitionLeave||e.leave||"leave",r=t.dataset.transitionLeaveFrom||e.leaveFrom||"leave-from",n=t.dataset.transitionLeaveTo||e.leaveTo||"leave-to",p=t.dataset.toggleClass||e.toogle||"hidden";t.classList.add(...s.split(" ")),t.classList.add(...r.split(" ")),t.classList.remove(...n.split(" ")),await C(),t.classList.remove(...r.split(" ")),t.classList.add(...n.split(" "));try{await w(t)}finally{t.classList.remove(...s.split(" ")),t.classList.add(...p.split(" "))}}function C(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})})}function w(t){return Promise.all(t.getAnimations().map(e=>e.finished))}var f=class extends D{connect(){setTimeout(()=>{v(this.element)},this.showDelayValue),this.hasDismissAfterValue&&setTimeout(()=>{this.close()},this.dismissAfterValue)}close(){x(this.element).then(()=>{this.element.remove()})}};a(f,"values",{dismissAfter:Number,showDelay:{type:Number,default:0},removeDelay:{type:Number,default:1100}});import{Controller as E}from"@hotwired/stimulus";var u=class extends E{connect(){this.timeout=null}save(){clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.statusTarget.textContent=this.submittingTextValue,this.formTarget.requestSubmit()},this.submitDurationValue)}success(){this.setStatus(this.successTextValue)}error(){this.setStatus(this.errorTextValue)}setStatus(t){this.statusTarget.textContent=t,this.timeout=setTimeout(()=>{this.statusTarget.textContent=""},this.statusDurationValue)}};a(u,"targets",["form","status"]),a(u,"values",{submitDuration:{type:Number,default:1e3},statusDuration:{type:Number,default:2e3},submittingText:{type:String,default:"Saving..."},successText:{type:String,default:"Saved!"},errorText:{type:String,default:"Unable to save."}});import{Controller as S}from"@hotwired/stimulus";var h=class extends S{update(){this.preview=this.colorTarget.value}set preview(t){this.previewTarget.style[this.styleValue]=t;let e=this._getContrastYIQ(t);this.styleValue==="color"?this.previewTarget.style.backgroundColor=e:this.previewTarget.style.color=e}_getContrastYIQ(t){t=t.replace("#","");let e=128,s=parseInt(t.substr(0,2),16),r=parseInt(t.substr(2,2),16),n=parseInt(t.substr(4,2),16);return(s*299+r*587+n*114)/1e3>=e?"#000":"#fff"}};a(h,"targets",["preview","color"]),a(h,"values",{style:{type:String,default:"backgroundColor"}});import{Controller as F}from"@hotwired/stimulus";var g,y,o=class extends F{constructor(){super(...arguments);b(this,g)}connect(){document.addEventListener("turbo:before-cache",this.beforeCache.bind(this)),V(this,g,y).call(this)}disconnect(){document.removeEventListener("turbo:before-cache",this.beforeCache.bind(this)),this.hasButtonTarget&&(this.buttonTarget.removeEventListener("keydown",this._onMenuButtonKeydown),this.buttonTarget.removeAttribute("aria-haspopup"))}openValueChanged(){i(this.menuTarget,this.openValue,this.transitionOptions),this.openValue===!0&&this.hasMenuItemTarget&&this.menuItemTargets[0].focus()}show(){this.openValue=!0}close(){this.openValue=!1}hide(e){this.closeOnClickOutsideValue&&e.target.nodeType&&this.element.contains(e.target)===!1&&this.openValue&&(this.openValue=!1),this.closeOnEscapeValue&&e.key==="Escape"&&this.openValue&&(this.openValue=!1)}toggle(){this.openValue=!this.openValue}nextItem(e){e.preventDefault(),this.menuItemTargets[this.nextIndex].focus()}previousItem(e){e.preventDefault(),this.menuItemTargets[this.previousIndex].focus()}get currentItemIndex(){return this.menuItemTargets.indexOf(document.activeElement)}get nextIndex(){return Math.min(this.currentItemIndex+1,this.menuItemTargets.length-1)}get previousIndex(){return Math.max(this.currentItemIndex-1,0)}get transitionOptions(){return{enter:this.hasEnterClass?this.enterClass:"transition ease-out duration-100",enterFrom:this.hasEnterFromClass?this.enterFromClass:"transform opacity-0 scale-95",enterTo:this.hasEnterToClass?this.enterToClass:"transform opacity-100 scale-100",leave:this.hasLeaveClass?this.leaveClass:"transition ease-in duration-75",leaveFrom:this.hasLeaveFromClass?this.leaveFromClass:"transform opacity-100 scale-100",leaveTo:this.hasLeaveToClass?this.leaveToClass:"transform opacity-0 scale-95",toggleClass:this.hasToggleClass?this.toggleClass:"hidden"}}beforeCache(){this.openValue=!1,this.menuTarget.classList.add("hidden")}};g=new WeakSet,y=function(){let e=this.element.dataset.action?this.element.dataset.action.split(" "):[];e.push("click->dropdown#toggle"),e.push("click@window->dropdown#hide"),e.push("keydown.up->dropdown#previousItem"),e.push("keydown.down->dropdown#nextItem"),e.push("keydown.esc->dropdown#hide"),this.element.dataset.action=[...new Set(e)].join(" ")},a(o,"targets",["menu","button","menuItem"]),a(o,"values",{open:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0}}),a(o,"classes",["enter","enterFrom","enterTo","leave","leaveFrom","leaveTo","toggle"]);import{Controller as k}from"@hotwired/stimulus";var c=class extends k{connect(){this.openValue&&this.showModal()}showModal(){this.dialogTarget.showModal()}show(){this.dialogTarget.show()}close(){this.dialogTarget.close()}};a(c,"targets",["dialog"]),a(c,"values",{open:Boolean});import{Controller as B}from"@hotwired/stimulus";var d=class extends B{openValueChanged(){i(this.contentTarget,this.openValue),this.shouldAutoDismiss&&this.scheduleDismissal()}show(t){this.shouldAutoDismiss&&this.scheduleDismissal(),this.openValue=!0}hide(){this.openValue=!1}toggle(){this.openValue=!this.openValue}get shouldAutoDismiss(){return this.openValue&&this.hasDismissAfterValue}scheduleDismissal(){this.hasDismissAfterValue&&(this.cancelDismissal(),this.timeoutId=setTimeout(()=>{this.hide(),this.timeoutId=void 0},this.dismissAfterValue))}cancelDismissal(){typeof this.timeoutId=="number"&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}};a(d,"targets",["content"]),a(d,"values",{dismissAfter:Number,open:{type:Boolean,default:!1}});var T=class extends o{openValueChanged(){i(this.overlayTarget,this.openValue),i(this.menuTarget,this.openValue),this.hasCloseTarget&&i(this.closeTarget,this.openValue)}};a(T,"targets",["overlay","close"]);import{Controller as M}from"@hotwired/stimulus";var l=class extends M{initialize(){this.anchor&&(this.indexValue=this.tabTargets.findIndex(t=>t.id===this.anchor))}connect(){this.showTab()}change(t){t.currentTarget.tagName==="SELECT"?this.indexValue=t.currentTarget.selectedIndex:t.currentTarget.dataset.index?this.indexValue=t.currentTarget.dataset.index:t.currentTarget.dataset.id?this.indexValue=this.tabTargets.findIndex(e=>e.id==t.currentTarget.dataset.id):this.indexValue=this.tabTargets.indexOf(t.currentTarget),window.dispatchEvent(new CustomEvent("tsc:tab-change"))}nextTab(){this.indexValue=Math.min(this.indexValue+1,this.tabsCount-1)}previousTab(){this.indexValue=Math.max(this.indexValue-1,0)}firstTab(){this.indexValue=0}lastTab(){this.indexValue=this.tabsCount-1}indexValueChanged(){if(this.showTab(),this.updateAnchorValue){let t=this.tabTargets[this.indexValue].id;if(this.scrollToAnchorValue)location.hash=t;else{let s=window.location.href.split("#")[0]+"#"+t;history.replaceState({},document.title,s)}}}showTab(){this.panelTargets.forEach((t,e)=>{let s=this.tabTargets[e];e===this.indexValue?(t.classList.remove("hidden"),s.ariaSelected="true",this.hasInactiveTabClass&&s?.classList?.remove(...this.inactiveTabClasses),this.hasActiveTabClass&&s?.classList?.add(...this.activeTabClasses)):(t.classList.add("hidden"),s.ariaSelected=null,this.hasActiveTabClass&&s?.classList?.remove(...this.activeTabClasses),this.hasInactiveTabClass&&s?.classList?.add(...this.inactiveTabClasses))}),this.hasSelectTarget&&(this.selectTarget.selectedIndex=this.indexValue),this.scrollActiveTabIntoView()}scrollActiveTabIntoView(){let t=this.element.querySelector("[aria-selected]");t&&t.scrollIntoView({inline:"center"})}get tabsCount(){return this.tabTargets.length}get anchor(){return document.URL.split("#").length>1?document.URL.split("#")[1]:null}};a(l,"classes",["activeTab","inactiveTab"]),a(l,"targets",["tab","panel","select"]),a(l,"values",{index:0,updateAnchor:Boolean,scrollToAnchor:Boolean});import{Controller as q}from"@hotwired/stimulus";var m=class extends q{toggle(t){this.openValue=!this.openValue,this.animate()}toggleInput(t){this.openValue=t.target.checked,this.animate()}hide(){this.openValue=!1,this.animate()}show(){this.openValue=!0,this.animate()}animate(){this.toggleableTargets.forEach(t=>{i(t,this.openValue)})}};a(m,"targets",["toggleable"]),a(m,"values",{open:{type:Boolean,default:!1}});export{f as Alert,u as Autosave,h as ColorPreview,o as Dropdown,c as Modal,d as Popover,T as Slideover,l as Tabs,m as Toggle};
