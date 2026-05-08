var ct=Object.defineProperty,$r=Object.defineProperties,Sr=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyDescriptors;var St=Object.getOwnPropertySymbols;var Er=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable;var Ct=(n,e,t)=>e in n?ct(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))Er.call(e,t)&&Ct(n,t,e[t]);if(St)for(var t of St(e))Ir.call(e,t)&&Ct(n,t,e[t]);return n},b=(n,e)=>$r(n,Cr(e));var Mr=(n,e)=>{for(var t in e)ct(n,t,{get:e[t],enumerable:!0})};var C=(n,e,t,r)=>{for(var s=r>1?void 0:r?Sr(e,t):e,i=n.length-1,a;i>=0;i--)(a=n[i])&&(s=(r?a(e,t,s):a(s))||s);return r&&s&&ct(e,t,s),s};var Ye=globalThis,Qe=Ye.ShadowRoot&&(Ye.ShadyCSS===void 0||Ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),Et=new WeakMap,Le=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Qe&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Et.set(t,e))}return e}toString(){return this.cssText}},It=n=>new Le(typeof n=="string"?n:n+"",void 0,dt),ut=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,s,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new Le(t,n,dt)},Mt=(n,e)=>{if(Qe)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),s=Ye.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,n.appendChild(r)}},pt=Qe?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return It(t)})(n):n;var{is:Or,defineProperty:Nr,getOwnPropertyDescriptor:Pr,getOwnPropertyNames:Rr,getOwnPropertySymbols:Vr,getPrototypeOf:jr}=Object,X=globalThis,Ot=X.trustedTypes,Lr=Ot?Ot.emptyScript:"",ht=X.reactiveElementPolyfillSupport,Ue=(n,e)=>n,Fe={toAttribute(n,e){switch(e){case Boolean:n=n?Lr:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch(r){t=null}}return t}},Xe=(n,e)=>!Or(n,e),Nt={attribute:!0,type:String,converter:Fe,reflect:!1,useDefault:!1,hasChanged:Xe},Pt,Rt;(Pt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Rt=X.litPropertyMetadata)!=null||(X.litPropertyMetadata=new WeakMap);var J=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Nr(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){var a;let{get:s,set:i}=(a=Pr(this.prototype,e))!=null?a:{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let l=s==null?void 0:s.call(this);i==null||i.call(this,o),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Nt}static _$Ei(){if(this.hasOwnProperty(Ue("elementProperties")))return;let e=jr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ue("properties"))){let t=this.properties,r=[...Rr(t),...Vr(t)];for(let s of r)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let s of r)t.unshift(pt(s))}else e!==void 0&&t.push(pt(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Mt(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var i;let r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){let a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Fe).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var i,a,o,l;let r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let c=r.getPropertyOptions(s),u=typeof c.converter=="function"?{fromAttribute:c.converter}:((i=c.converter)==null?void 0:i.fromAttribute)!==void 0?c.converter:Fe;this._$Em=s,this[s]=(l=(o=u.fromAttribute(t,c.type))!=null?o:(a=this._$Ej)==null?void 0:a.get(s))!=null?l:null,this._$Em=null}}requestUpdate(e,t,r){var s,i;if(e!==void 0){let a=this.constructor,o=this[e];if(r!=null||(r=a.getPropertyOptions(e)),!(((s=r.hasChanged)!=null?s:Xe)(o,t)||r.useDefault&&r.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:i},a){var o,l,c;r&&!((o=this._$Ej)!=null?o:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(l=a!=null?a:t)!=null?l:this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((r=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,o]of i){let{wrapped:l}=o,c=this[a];l!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,o,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},Vt;J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[Ue("elementProperties")]=new Map,J[Ue("finalized")]=new Map,ht==null||ht({ReactiveElement:J}),((Vt=X.reactiveElementVersions)!=null?Vt:X.reactiveElementVersions=[]).push("2.1.0");var De=globalThis,et=De.trustedTypes,jt=et?et.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ht="$lit$",ee=`lit$${Math.random().toFixed(9).slice(2)}$`,qt="?"+ee,Ur=`<${qt}>`,le=document,Be=()=>le.createComment(""),He=n=>n===null||typeof n!="object"&&typeof n!="function",_t=Array.isArray,Fr=n=>_t(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ft=`[ 	
\f\r]`,ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Ut=/>/g,ae=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,zt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,wt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),v=wt(1),un=wt(2),pn=wt(3),Z=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Dt=new WeakMap,oe=le.createTreeWalker(le,129);function Zt(n,e){if(!_t(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return jt!==void 0?jt.createHTML(e):e}var zr=(n,e)=>{let t=n.length-1,r=[],s,i=e===2?"<svg>":e===3?"<math>":"",a=ze;for(let o=0;o<t;o++){let l=n[o],c,u,m=-1,S=0;for(;S<l.length&&(a.lastIndex=S,u=a.exec(l),u!==null);)S=a.lastIndex,a===ze?u[1]==="!--"?a=Lt:u[1]!==void 0?a=Ut:u[2]!==void 0?(Jt.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=ae):u[3]!==void 0&&(a=ae):a===ae?u[0]===">"?(a=s!=null?s:ze,m=-1):u[1]===void 0?m=-2:(m=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?ae:u[3]==='"'?zt:Ft):a===zt||a===Ft?a=ae:a===Lt||a===Ut?a=ze:(a=ae,s=void 0);let w=a===ae&&n[o+1].startsWith("/>")?" ":"";i+=a===ze?l+Ur:m>=0?(r.push(c),l.slice(0,m)+Ht+l.slice(m)+ee+w):l+ee+(m===-2?o:w)}return[Zt(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},qe=class n{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,a=0,o=e.length-1,l=this.parts,[c,u]=zr(e,t);if(this.el=n.createElement(c,r),oe.currentNode=this.el.content,t===2||t===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=oe.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(let m of s.getAttributeNames())if(m.endsWith(Ht)){let S=u[a++],w=s.getAttribute(m).split(ee),M=/([.?@])?(.*)/.exec(S);l.push({type:1,index:i,name:M[2],strings:w,ctor:M[1]==="."?yt:M[1]==="?"?bt:M[1]==="@"?vt:Ce}),s.removeAttribute(m)}else m.startsWith(ee)&&(l.push({type:6,index:i}),s.removeAttribute(m));if(Jt.test(s.tagName)){let m=s.textContent.split(ee),S=m.length-1;if(S>0){s.textContent=et?et.emptyScript:"";for(let w=0;w<S;w++)s.append(m[w],Be()),oe.nextNode(),l.push({type:2,index:++i});s.append(m[S],Be())}}}else if(s.nodeType===8)if(s.data===qt)l.push({type:2,index:i});else{let m=-1;for(;(m=s.data.indexOf(ee,m+1))!==-1;)l.push({type:7,index:i}),m+=ee.length-1}i++}}static createElement(e,t){let r=le.createElement("template");return r.innerHTML=e,r}};function Se(n,e,t=n,r){var a,o,l;if(e===Z)return e;let s=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl,i=He(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),i===void 0?s=void 0:(s=new i(n),s._$AT(n,t,r)),r!==void 0?((l=t._$Co)!=null?l:t._$Co=[])[r]=s:t._$Cl=s),s!==void 0&&(e=Se(n,s._$AS(n,e.values),s,r)),e}var gt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;let{el:{content:t},parts:r}=this._$AD,s=((c=e==null?void 0:e.creationScope)!=null?c:le).importNode(t,!0);oe.currentNode=s;let i=oe.nextNode(),a=0,o=0,l=r[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Je(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new xt(i,this,e)),this._$AV.push(u),l=r[++o]}a!==(l==null?void 0:l.index)&&(i=oe.nextNode(),a++)}return oe.currentNode=le,s}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Je=class n{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,r,s){var i;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(i=s==null?void 0:s.isConnected)!=null?i:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Se(this,e,t),He(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&He(this._$AH)?this._$AA.nextSibling.data=e:this.T(le.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=qe.createElement(Zt(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(t);else{let a=new gt(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Dt.get(e.strings);return t===void 0&&Dt.set(e.strings,t=new qe(e)),t}k(e){_t(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,s=0;for(let i of e)s===t.length?t.push(r=new n(this.O(Be()),this.O(Be()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Ce=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=I}_$AI(e,t=this,r,s){let i=this.strings,a=!1;if(i===void 0)e=Se(this,e,t,0),a=!He(e)||e!==this._$AH&&e!==Z,a&&(this._$AH=e);else{let o=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Se(this,o[r+l],t,l),c===Z&&(c=this._$AH[l]),a||(a=!He(c)||c!==this._$AH[l]),c===I?e=I:e!==I&&(e+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}a&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},yt=class extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}},bt=class extends Ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}},vt=class extends Ce{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){var a;if((e=(a=Se(this,e,t,0))!=null?a:I)===Z)return;let r=this._$AH,s=e===I&&r!==I||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==I&&(r===I||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)==null?void 0:t.host)!=null?r:this.element,e):this._$AH.handleEvent(e)}},xt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}};var mt=De.litHtmlPolyfillSupport,Bt;mt==null||mt(qe,Je),((Bt=De.litHtmlVersions)!=null?Bt:De.litHtmlVersions=[]).push("3.3.0");var Wt=(n,e,t)=>{var i,a;let r=(i=t==null?void 0:t.renderBefore)!=null?i:e,s=r._$litPart$;if(s===void 0){let o=(a=t==null?void 0:t.renderBefore)!=null?a:null;r._$litPart$=s=new Je(e.insertBefore(Be(),o),o,void 0,t!=null?t:{})}return s._$AI(n),s};var ce=globalThis,te=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;let e=super.createRenderRoot();return(r=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Z}},Kt;te._$litElement$=!0,te.finalized=!0,(Kt=ce.litElementHydrateSupport)==null||Kt.call(ce,{LitElement:te});var Tt=ce.litElementPolyfillSupport;Tt==null||Tt({LitElement:te});var Gt;((Gt=ce.litElementVersions)!=null?Gt:ce.litElementVersions=[]).push("4.2.0");var Yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qt=n=>(...e)=>({_$litDirective$:n,values:e}),tt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Ze=class extends tt{constructor(e){if(super(e),this.it=I,e.type!==Yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===I||e==null)return this._t=void 0,this.it=e;if(e===Z)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ze.directiveName="unsafeHTML",Ze.resultType=1;var Xt=Qt(Ze);async function er({url:n,method:e="POST",headers:t={},requestBody:r,contentType:s="application/json",setLoading:i,setResponse:a}){i(!0);try{let o,l=d({Accept:"application/json"},t);["POST","PUT","PATCH","DELETE"].includes(e.toUpperCase())&&r!=null&&r!==""&&(s==="application/json"?(l["Content-Type"]="application/json",o=typeof r=="string"?r:JSON.stringify(r)):s==="application/x-www-form-urlencoded"?(l["Content-Type"]="application/x-www-form-urlencoded",typeof r=="string"?o=r:typeof r=="object"&&r!==null&&(o=Object.keys(r).map(m=>`${encodeURIComponent(m)}=${encodeURIComponent(r[m])}`).join("&"))):(l["Content-Type"]=s,o=typeof r=="string"?r:JSON.stringify(r)));let c=await fetch(n,{method:e,headers:l,body:o}),u=await c.text();a(u,c.status,c.ok)}catch(o){a("Error: "+((o==null?void 0:o.message)||o),0,!1)}finally{i(!1)}}var tr=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};var Dr={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:Xe},Br=(n=Dr,e,t)=>{let{kind:r,metadata:s}=t,i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(t.name,n),r==="accessor"){let{name:a}=t;return{set(o){let l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,n)},init(o){return o!==void 0&&this.C(a,void 0,n,o),o}}}if(r==="setter"){let{name:a}=t;return function(o){let l=this[a];e.call(this,o),this.requestUpdate(a,l,n)}}throw Error("Unsupported decorator location: "+r)};function E(n){return(e,t)=>typeof t=="object"?Br(n,e,t):((r,s,i)=>{let a=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(s,i):void 0})(n,e,t)}var h={};Mr(h,{BRAND:()=>ms,DIRTY:()=>de,EMPTY_PATH:()=>Zr,INVALID:()=>x,NEVER:()=>Xs,OK:()=>N,ParseStatus:()=>O,Schema:()=>k,ZodAny:()=>ne,ZodArray:()=>Y,ZodBigInt:()=>pe,ZodBoolean:()=>he,ZodBranded:()=>Ke,ZodCatch:()=>ke,ZodDate:()=>fe,ZodDefault:()=>Te,ZodDiscriminatedUnion:()=>it,ZodEffects:()=>F,ZodEnum:()=>_e,ZodError:()=>R,ZodFirstPartyTypeKind:()=>_,ZodFunction:()=>ot,ZodIntersection:()=>be,ZodIssueCode:()=>p,ZodLazy:()=>ve,ZodLiteral:()=>xe,ZodMap:()=>Pe,ZodNaN:()=>Ve,ZodNativeEnum:()=>we,ZodNever:()=>z,ZodNull:()=>ge,ZodNullable:()=>H,ZodNumber:()=>ue,ZodObject:()=>V,ZodOptional:()=>L,ZodParsedType:()=>g,ZodPipeline:()=>Ge,ZodPromise:()=>ie,ZodReadonly:()=>Ae,ZodRecord:()=>at,ZodSchema:()=>k,ZodSet:()=>Re,ZodString:()=>se,ZodSymbol:()=>Oe,ZodTransformer:()=>F,ZodTuple:()=>B,ZodType:()=>k,ZodUndefined:()=>me,ZodUnion:()=>ye,ZodUnknown:()=>G,ZodVoid:()=>Ne,addIssueToContext:()=>f,any:()=>ks,array:()=>Cs,bigint:()=>vs,boolean:()=>pr,coerce:()=>Qs,custom:()=>cr,date:()=>xs,datetimeRegex:()=>or,defaultErrorMap:()=>W,discriminatedUnion:()=>Os,effect:()=>Hs,enum:()=>zs,function:()=>Ls,getErrorMap:()=>Ee,getParsedType:()=>D,instanceof:()=>ys,intersection:()=>Ns,isAborted:()=>st,isAsync:()=>Ie,isDirty:()=>nt,isValid:()=>re,late:()=>gs,lazy:()=>Us,literal:()=>Fs,makeIssue:()=>We,map:()=>Vs,nan:()=>bs,nativeEnum:()=>Ds,never:()=>$s,null:()=>Ts,nullable:()=>Js,number:()=>ur,object:()=>Es,objectUtil:()=>kt,oboolean:()=>Ys,onumber:()=>Gs,optional:()=>qs,ostring:()=>Ks,pipeline:()=>Ws,preprocess:()=>Zs,promise:()=>Bs,quotelessJson:()=>Hr,record:()=>Rs,set:()=>js,setErrorMap:()=>Jr,strictObject:()=>Is,string:()=>dr,symbol:()=>_s,transformer:()=>Hs,tuple:()=>Ps,undefined:()=>ws,union:()=>Ms,unknown:()=>As,util:()=>A,void:()=>Ss});var A;(function(n){n.assertEqual=s=>{};function e(s){}n.assertIs=e;function t(s){throw new Error}n.assertNever=t,n.arrayToEnum=s=>{let i={};for(let a of s)i[a]=a;return i},n.getValidEnumValues=s=>{let i=n.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),a={};for(let o of i)a[o]=s[o];return n.objectValues(a)},n.objectValues=s=>n.objectKeys(s).map(function(i){return s[i]}),n.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{let i=[];for(let a in s)Object.prototype.hasOwnProperty.call(s,a)&&i.push(a);return i},n.find=(s,i)=>{for(let a of s)if(i(a))return a},n.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(i)}n.joinValues=r,n.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(A||(A={}));var kt;(function(n){n.mergeShapes=(e,t)=>d(d({},e),t)})(kt||(kt={}));var g=A.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),D=n=>{switch(typeof n){case"undefined":return g.undefined;case"string":return g.string;case"number":return Number.isNaN(n)?g.nan:g.number;case"boolean":return g.boolean;case"function":return g.function;case"bigint":return g.bigint;case"symbol":return g.symbol;case"object":return Array.isArray(n)?g.array:n===null?g.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?g.promise:typeof Map!="undefined"&&n instanceof Map?g.map:typeof Set!="undefined"&&n instanceof Set?g.set:typeof Date!="undefined"&&n instanceof Date?g.date:g.object;default:return g.unknown}};var p=A.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Hr=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:"),R=class n extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){let t=e||function(i){return i.message},r={_errors:[]},s=i=>{for(let a of i.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)r._errors.push(t(a));else{let o=r,l=0;for(;l<a.path.length;){let c=a.path[l];l===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(t(a))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return s(this),r}static assert(e){if(!(e instanceof n))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,A.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){let t={},r=[];for(let s of this.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}};R.create=n=>new R(n);var qr=(n,e)=>{let t;switch(n.code){case p.invalid_type:n.received===g.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case p.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,A.jsonStringifyReplacer)}`;break;case p.unrecognized_keys:t=`Unrecognized key(s) in object: ${A.joinValues(n.keys,", ")}`;break;case p.invalid_union:t="Invalid input";break;case p.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${A.joinValues(n.options)}`;break;case p.invalid_enum_value:t=`Invalid enum value. Expected ${A.joinValues(n.options)}, received '${n.received}'`;break;case p.invalid_arguments:t="Invalid function arguments";break;case p.invalid_return_type:t="Invalid function return type";break;case p.invalid_date:t="Invalid date";break;case p.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:A.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case p.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case p.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case p.custom:t="Invalid input";break;case p.invalid_intersection_types:t="Intersection results could not be merged";break;case p.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case p.not_finite:t="Number must be finite";break;default:t=e.defaultError,A.assertNever(n)}return{message:t}},W=qr;var rr=W;function Jr(n){rr=n}function Ee(){return rr}var We=n=>{let{data:e,path:t,errorMaps:r,issueData:s}=n,i=[...t,...s.path||[]],a=b(d({},s),{path:i});if(s.message!==void 0)return b(d({},s),{path:i,message:s.message});let o="",l=r.filter(c=>!!c).slice().reverse();for(let c of l)o=c(a,{data:e,defaultError:o}).message;return b(d({},s),{path:i,message:o})},Zr=[];function f(n,e){let t=Ee(),r=We({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===W?void 0:W].filter(s=>!!s)});n.common.issues.push(r)}var O=class n{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let s of t){if(s.status==="aborted")return x;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let s of t){let i=await s.key,a=await s.value;r.push({key:i,value:a})}return n.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let s of t){let{key:i,value:a}=s;if(i.status==="aborted"||a.status==="aborted")return x;i.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof a.value!="undefined"||s.alwaysSet)&&(r[i.value]=a.value)}return{status:e.value,value:r}}},x=Object.freeze({status:"aborted"}),de=n=>({status:"dirty",value:n}),N=n=>({status:"valid",value:n}),st=n=>n.status==="aborted",nt=n=>n.status==="dirty",re=n=>n.status==="valid",Ie=n=>typeof Promise!="undefined"&&n instanceof Promise;var y;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(y||(y={}));var U=class{constructor(e,t,r,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},sr=(n,e)=>{if(re(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new R(n.common.issues);return this._error=t,this._error}}};function T(n){if(!n)return{};let{errorMap:e,invalid_type_error:t,required_error:r,description:s}=n;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(a,o)=>{var c,u;let{message:l}=n;return a.code==="invalid_enum_value"?{message:l!=null?l:o.defaultError}:typeof o.data=="undefined"?{message:(c=l!=null?l:r)!=null?c:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(u=l!=null?l:t)!=null?u:o.defaultError}},description:s}}var k=class{get description(){return this._def.description}_getType(e){return D(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:D(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new O,ctx:{common:e.parent.common,data:e.data,parsedType:D(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(Ie(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var i;let r={common:{issues:[],async:(i=t==null?void 0:t.async)!=null?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)},s=this._parseSync({data:e,path:r.path,parent:r});return sr(r,s)}"~validate"(e){var r,s;let t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)};if(!this["~standard"].async)try{let i=this._parseSync({data:e,path:[],parent:t});return re(i)?{value:i.value}:{issues:t.common.issues}}catch(i){(s=(r=i==null?void 0:i.message)==null?void 0:r.toLowerCase())!=null&&s.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(i=>re(i)?{value:i.value}:{issues:t.common.issues})}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)},s=this._parse({data:e,path:r.path,parent:r}),i=await(Ie(s)?s:Promise.resolve(s));return sr(r,i)}refine(e,t){let r=s=>typeof t=="string"||typeof t=="undefined"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,i)=>{let a=e(s),o=()=>i.addIssue(d({code:p.custom},r(s)));return typeof Promise!="undefined"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((r,s)=>e(r)?!0:(s.addIssue(typeof t=="function"?t(r,s):t),!1))}_refinement(e){return new F({schema:this,typeName:_.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return L.create(this,this._def)}nullable(){return H.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Y.create(this)}promise(){return ie.create(this,this._def)}or(e){return ye.create([this,e],this._def)}and(e){return be.create(this,e,this._def)}transform(e){return new F(b(d({},T(this._def)),{schema:this,typeName:_.ZodEffects,effect:{type:"transform",transform:e}}))}default(e){let t=typeof e=="function"?e:()=>e;return new Te(b(d({},T(this._def)),{innerType:this,defaultValue:t,typeName:_.ZodDefault}))}brand(){return new Ke(d({typeName:_.ZodBranded,type:this},T(this._def)))}catch(e){let t=typeof e=="function"?e:()=>e;return new ke(b(d({},T(this._def)),{innerType:this,catchValue:t,typeName:_.ZodCatch}))}describe(e){let t=this.constructor;return new t(b(d({},this._def),{description:e}))}pipe(e){return Ge.create(this,e)}readonly(){return Ae.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Wr=/^c[^\s-]{8,}$/i,Kr=/^[0-9a-z]+$/,Gr=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Yr=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Qr=/^[a-z0-9_-]{21}$/i,Xr=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,es=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ts=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,rs="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",At,ss=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ns=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,is=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,as=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,os=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,ls=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ir="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",cs=new RegExp(`^${ir}$`);function ar(n){let e="[0-5]\\d";n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`);let t=n.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function ds(n){return new RegExp(`^${ar(n)}$`)}function or(n){let e=`${ir}T${ar(n)}`,t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function us(n,e){return!!((e==="v4"||!e)&&ss.test(n)||(e==="v6"||!e)&&is.test(n))}function ps(n,e){if(!Xr.test(n))return!1;try{let[t]=n.split("."),r=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||"typ"in s&&(s==null?void 0:s.typ)!=="JWT"||!s.alg||e&&s.alg!==e)}catch(t){return!1}}function hs(n,e){return!!((e==="v4"||!e)&&ns.test(n)||(e==="v6"||!e)&&as.test(n))}var se=class n extends k{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==g.string){let i=this._getOrReturnCtx(e);return f(i,{code:p.invalid_type,expected:g.string,received:i.parsedType}),x}let r=new O,s;for(let i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),f(s,{code:p.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),f(s,{code:p.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){let a=e.data.length>i.value,o=e.data.length<i.value;(a||o)&&(s=this._getOrReturnCtx(e,s),a?f(s,{code:p.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):o&&f(s,{code:p.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")ts.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"email",code:p.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")At||(At=new RegExp(rs,"u")),At.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"emoji",code:p.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Yr.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"uuid",code:p.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")Qr.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"nanoid",code:p.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Wr.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"cuid",code:p.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")Kr.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"cuid2",code:p.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")Gr.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"ulid",code:p.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch(a){s=this._getOrReturnCtx(e,s),f(s,{validation:"url",code:p.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"regex",code:p.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),f(s,{code:p.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),f(s,{code:p.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),f(s,{code:p.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?or(i).test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{code:p.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?cs.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{code:p.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?ds(i).test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{code:p.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?es.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"duration",code:p.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?us(e.data,i.version)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"ip",code:p.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?ps(e.data,i.alg)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"jwt",code:p.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?hs(e.data,i.version)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"cidr",code:p.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?os.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"base64",code:p.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?ls.test(e.data)||(s=this._getOrReturnCtx(e,s),f(s,{validation:"base64url",code:p.invalid_string,message:i.message}),r.dirty()):A.assertNever(i);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(s=>e.test(s),d({validation:t,code:p.invalid_string},y.errToObj(r)))}_addCheck(e){return new n(b(d({},this._def),{checks:[...this._def.checks,e]}))}email(e){return this._addCheck(d({kind:"email"},y.errToObj(e)))}url(e){return this._addCheck(d({kind:"url"},y.errToObj(e)))}emoji(e){return this._addCheck(d({kind:"emoji"},y.errToObj(e)))}uuid(e){return this._addCheck(d({kind:"uuid"},y.errToObj(e)))}nanoid(e){return this._addCheck(d({kind:"nanoid"},y.errToObj(e)))}cuid(e){return this._addCheck(d({kind:"cuid"},y.errToObj(e)))}cuid2(e){return this._addCheck(d({kind:"cuid2"},y.errToObj(e)))}ulid(e){return this._addCheck(d({kind:"ulid"},y.errToObj(e)))}base64(e){return this._addCheck(d({kind:"base64"},y.errToObj(e)))}base64url(e){return this._addCheck(d({kind:"base64url"},y.errToObj(e)))}jwt(e){return this._addCheck(d({kind:"jwt"},y.errToObj(e)))}ip(e){return this._addCheck(d({kind:"ip"},y.errToObj(e)))}cidr(e){return this._addCheck(d({kind:"cidr"},y.errToObj(e)))}datetime(e){var t,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck(d({kind:"datetime",precision:typeof(e==null?void 0:e.precision)=="undefined"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!=null?t:!1,local:(r=e==null?void 0:e.local)!=null?r:!1},y.errToObj(e==null?void 0:e.message)))}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck(d({kind:"time",precision:typeof(e==null?void 0:e.precision)=="undefined"?null:e==null?void 0:e.precision},y.errToObj(e==null?void 0:e.message)))}duration(e){return this._addCheck(d({kind:"duration"},y.errToObj(e)))}regex(e,t){return this._addCheck(d({kind:"regex",regex:e},y.errToObj(t)))}includes(e,t){return this._addCheck(d({kind:"includes",value:e,position:t==null?void 0:t.position},y.errToObj(t==null?void 0:t.message)))}startsWith(e,t){return this._addCheck(d({kind:"startsWith",value:e},y.errToObj(t)))}endsWith(e,t){return this._addCheck(d({kind:"endsWith",value:e},y.errToObj(t)))}min(e,t){return this._addCheck(d({kind:"min",value:e},y.errToObj(t)))}max(e,t){return this._addCheck(d({kind:"max",value:e},y.errToObj(t)))}length(e,t){return this._addCheck(d({kind:"length",value:e},y.errToObj(t)))}nonempty(e){return this.min(1,y.errToObj(e))}trim(){return new n(b(d({},this._def),{checks:[...this._def.checks,{kind:"trim"}]}))}toLowerCase(){return new n(b(d({},this._def),{checks:[...this._def.checks,{kind:"toLowerCase"}]}))}toUpperCase(){return new n(b(d({},this._def),{checks:[...this._def.checks,{kind:"toUpperCase"}]}))}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};se.create=n=>{var e;return new se(d({checks:[],typeName:_.ZodString,coerce:(e=n==null?void 0:n.coerce)!=null?e:!1},T(n)))};function fs(n,e){let t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=t>r?t:r,i=Number.parseInt(n.toFixed(s).replace(".","")),a=Number.parseInt(e.toFixed(s).replace(".",""));return i%a/10**s}var ue=class n extends k{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==g.number){let i=this._getOrReturnCtx(e);return f(i,{code:p.invalid_type,expected:g.number,received:i.parsedType}),x}let r,s=new O;for(let i of this._def.checks)i.kind==="int"?A.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),f(r,{code:p.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),f(r,{code:p.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),f(r,{code:p.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?fs(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),f(r,{code:p.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),f(r,{code:p.not_finite,message:i.message}),s.dirty()):A.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,y.toString(t))}gt(e,t){return this.setLimit("min",e,!1,y.toString(t))}lte(e,t){return this.setLimit("max",e,!0,y.toString(t))}lt(e,t){return this.setLimit("max",e,!1,y.toString(t))}setLimit(e,t,r,s){return new n(b(d({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:y.toString(s)}]}))}_addCheck(e){return new n(b(d({},this._def),{checks:[...this._def.checks,e]}))}int(e){return this._addCheck({kind:"int",message:y.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:y.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:y.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:y.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:y.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:y.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:y.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:y.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:y.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&A.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}};ue.create=n=>new ue(d({checks:[],typeName:_.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1},T(n)));var pe=class n extends k{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch(i){return this._getInvalidInput(e)}if(this._getType(e)!==g.bigint)return this._getInvalidInput(e);let r,s=new O;for(let i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),f(r,{code:p.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),f(r,{code:p.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),f(r,{code:p.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):A.assertNever(i);return{status:s.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return f(t,{code:p.invalid_type,expected:g.bigint,received:t.parsedType}),x}gte(e,t){return this.setLimit("min",e,!0,y.toString(t))}gt(e,t){return this.setLimit("min",e,!1,y.toString(t))}lte(e,t){return this.setLimit("max",e,!0,y.toString(t))}lt(e,t){return this.setLimit("max",e,!1,y.toString(t))}setLimit(e,t,r,s){return new n(b(d({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:y.toString(s)}]}))}_addCheck(e){return new n(b(d({},this._def),{checks:[...this._def.checks,e]}))}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:y.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:y.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:y.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:y.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:y.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};pe.create=n=>{var e;return new pe(d({checks:[],typeName:_.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!=null?e:!1},T(n)))};var he=class extends k{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==g.boolean){let r=this._getOrReturnCtx(e);return f(r,{code:p.invalid_type,expected:g.boolean,received:r.parsedType}),x}return N(e.data)}};he.create=n=>new he(d({typeName:_.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1},T(n)));var fe=class n extends k{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==g.date){let i=this._getOrReturnCtx(e);return f(i,{code:p.invalid_type,expected:g.date,received:i.parsedType}),x}if(Number.isNaN(e.data.getTime())){let i=this._getOrReturnCtx(e);return f(i,{code:p.invalid_date}),x}let r=new O,s;for(let i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),f(s,{code:p.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),f(s,{code:p.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):A.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new n(b(d({},this._def),{checks:[...this._def.checks,e]}))}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:y.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:y.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}};fe.create=n=>new fe(d({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:_.ZodDate},T(n)));var Oe=class extends k{_parse(e){if(this._getType(e)!==g.symbol){let r=this._getOrReturnCtx(e);return f(r,{code:p.invalid_type,expected:g.symbol,received:r.parsedType}),x}return N(e.data)}};Oe.create=n=>new Oe(d({typeName:_.ZodSymbol},T(n)));var me=class extends k{_parse(e){if(this._getType(e)!==g.undefined){let r=this._getOrReturnCtx(e);return f(r,{code:p.invalid_type,expected:g.undefined,received:r.parsedType}),x}return N(e.data)}};me.create=n=>new me(d({typeName:_.ZodUndefined},T(n)));var ge=class extends k{_parse(e){if(this._getType(e)!==g.null){let r=this._getOrReturnCtx(e);return f(r,{code:p.invalid_type,expected:g.null,received:r.parsedType}),x}return N(e.data)}};ge.create=n=>new ge(d({typeName:_.ZodNull},T(n)));var ne=class extends k{constructor(){super(...arguments),this._any=!0}_parse(e){return N(e.data)}};ne.create=n=>new ne(d({typeName:_.ZodAny},T(n)));var G=class extends k{constructor(){super(...arguments),this._unknown=!0}_parse(e){return N(e.data)}};G.create=n=>new G(d({typeName:_.ZodUnknown},T(n)));var z=class extends k{_parse(e){let t=this._getOrReturnCtx(e);return f(t,{code:p.invalid_type,expected:g.never,received:t.parsedType}),x}};z.create=n=>new z(d({typeName:_.ZodNever},T(n)));var Ne=class extends k{_parse(e){if(this._getType(e)!==g.undefined){let r=this._getOrReturnCtx(e);return f(r,{code:p.invalid_type,expected:g.void,received:r.parsedType}),x}return N(e.data)}};Ne.create=n=>new Ne(d({typeName:_.ZodVoid},T(n)));var Y=class n extends k{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),s=this._def;if(t.parsedType!==g.array)return f(t,{code:p.invalid_type,expected:g.array,received:t.parsedType}),x;if(s.exactLength!==null){let a=t.data.length>s.exactLength.value,o=t.data.length<s.exactLength.value;(a||o)&&(f(t,{code:a?p.too_big:p.too_small,minimum:o?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(f(t,{code:p.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(f(t,{code:p.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>s.type._parseAsync(new U(t,a,t.path,o)))).then(a=>O.mergeArray(r,a));let i=[...t.data].map((a,o)=>s.type._parseSync(new U(t,a,t.path,o)));return O.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new n(b(d({},this._def),{minLength:{value:e,message:y.toString(t)}}))}max(e,t){return new n(b(d({},this._def),{maxLength:{value:e,message:y.toString(t)}}))}length(e,t){return new n(b(d({},this._def),{exactLength:{value:e,message:y.toString(t)}}))}nonempty(e){return this.min(1,e)}};Y.create=(n,e)=>new Y(d({type:n,minLength:null,maxLength:null,exactLength:null,typeName:_.ZodArray},T(e)));function Me(n){if(n instanceof V){let e={};for(let t in n.shape){let r=n.shape[t];e[t]=L.create(Me(r))}return new V(b(d({},n._def),{shape:()=>e}))}else return n instanceof Y?new Y(b(d({},n._def),{type:Me(n.element)})):n instanceof L?L.create(Me(n.unwrap())):n instanceof H?H.create(Me(n.unwrap())):n instanceof B?B.create(n.items.map(e=>Me(e))):n}var V=class n extends k{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=A.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==g.object){let c=this._getOrReturnCtx(e);return f(c,{code:p.invalid_type,expected:g.object,received:c.parsedType}),x}let{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof z&&this._def.unknownKeys==="strip"))for(let c in s.data)a.includes(c)||o.push(c);let l=[];for(let c of a){let u=i[c],m=s.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new U(s,m,s.path,c)),alwaysSet:c in s.data})}if(this._def.catchall instanceof z){let c=this._def.unknownKeys;if(c==="passthrough")for(let u of o)l.push({key:{status:"valid",value:u},value:{status:"valid",value:s.data[u]}});else if(c==="strict")o.length>0&&(f(s,{code:p.unrecognized_keys,keys:o}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let u of o){let m=s.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new U(s,m,s.path,u)),alwaysSet:u in s.data})}}return s.common.async?Promise.resolve().then(async()=>{let c=[];for(let u of l){let m=await u.key,S=await u.value;c.push({key:m,value:S,alwaysSet:u.alwaysSet})}return c}).then(c=>O.mergeObjectSync(r,c)):O.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return y.errToObj,new n(d(b(d({},this._def),{unknownKeys:"strict"}),e!==void 0?{errorMap:(t,r)=>{var i,a,o,l;let s=(o=(a=(i=this._def).errorMap)==null?void 0:a.call(i,t,r).message)!=null?o:r.defaultError;return t.code==="unrecognized_keys"?{message:(l=y.errToObj(e).message)!=null?l:s}:{message:s}}}:{}))}strip(){return new n(b(d({},this._def),{unknownKeys:"strip"}))}passthrough(){return new n(b(d({},this._def),{unknownKeys:"passthrough"}))}extend(e){return new n(b(d({},this._def),{shape:()=>d(d({},this._def.shape()),e)}))}merge(e){return new n({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>d(d({},this._def.shape()),e._def.shape()),typeName:_.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new n(b(d({},this._def),{catchall:e}))}pick(e){let t={};for(let r of A.objectKeys(e))e[r]&&this.shape[r]&&(t[r]=this.shape[r]);return new n(b(d({},this._def),{shape:()=>t}))}omit(e){let t={};for(let r of A.objectKeys(this.shape))e[r]||(t[r]=this.shape[r]);return new n(b(d({},this._def),{shape:()=>t}))}deepPartial(){return Me(this)}partial(e){let t={};for(let r of A.objectKeys(this.shape)){let s=this.shape[r];e&&!e[r]?t[r]=s:t[r]=s.optional()}return new n(b(d({},this._def),{shape:()=>t}))}required(e){let t={};for(let r of A.objectKeys(this.shape))if(e&&!e[r])t[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof L;)i=i._def.innerType;t[r]=i}return new n(b(d({},this._def),{shape:()=>t}))}keyof(){return lr(A.objectKeys(this.shape))}};V.create=(n,e)=>new V(d({shape:()=>n,unknownKeys:"strip",catchall:z.create(),typeName:_.ZodObject},T(e)));V.strictCreate=(n,e)=>new V(d({shape:()=>n,unknownKeys:"strict",catchall:z.create(),typeName:_.ZodObject},T(e)));V.lazycreate=(n,e)=>new V(d({shape:n,unknownKeys:"strip",catchall:z.create(),typeName:_.ZodObject},T(e)));var ye=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;function s(i){for(let o of i)if(o.result.status==="valid")return o.result;for(let o of i)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;let a=i.map(o=>new R(o.ctx.common.issues));return f(t,{code:p.invalid_union,unionErrors:a}),x}if(t.common.async)return Promise.all(r.map(async i=>{let a=b(d({},t),{common:b(d({},t.common),{issues:[]}),parent:null});return{result:await i._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(s);{let i,a=[];for(let l of r){let c=b(d({},t),{common:b(d({},t.common),{issues:[]}),parent:null}),u=l._parseSync({data:t.data,path:t.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;let o=a.map(l=>new R(l));return f(t,{code:p.invalid_union,unionErrors:o}),x}}get options(){return this._def.options}};ye.create=(n,e)=>new ye(d({options:n,typeName:_.ZodUnion},T(e)));var K=n=>n instanceof ve?K(n.schema):n instanceof F?K(n.innerType()):n instanceof xe?[n.value]:n instanceof _e?n.options:n instanceof we?A.objectValues(n.enum):n instanceof Te?K(n._def.innerType):n instanceof me?[void 0]:n instanceof ge?[null]:n instanceof L?[void 0,...K(n.unwrap())]:n instanceof H?[null,...K(n.unwrap())]:n instanceof Ke||n instanceof Ae?K(n.unwrap()):n instanceof ke?K(n._def.innerType):[],it=class n extends k{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==g.object)return f(t,{code:p.invalid_type,expected:g.object,received:t.parsedType}),x;let r=this.discriminator,s=t.data[r],i=this.optionsMap.get(s);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(f(t,{code:p.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),x)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let s=new Map;for(let i of t){let a=K(i.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let o of a){if(s.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);s.set(o,i)}}return new n(d({typeName:_.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s},T(r)))}};function $t(n,e){let t=D(n),r=D(e);if(n===e)return{valid:!0,data:n};if(t===g.object&&r===g.object){let s=A.objectKeys(e),i=A.objectKeys(n).filter(o=>s.indexOf(o)!==-1),a=d(d({},n),e);for(let o of i){let l=$t(n[o],e[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(t===g.array&&r===g.array){if(n.length!==e.length)return{valid:!1};let s=[];for(let i=0;i<n.length;i++){let a=n[i],o=e[i],l=$t(a,o);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return t===g.date&&r===g.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}var be=class extends k{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),s=(i,a)=>{if(st(i)||st(a))return x;let o=$t(i.value,a.value);return o.valid?((nt(i)||nt(a))&&t.dirty(),{status:t.value,value:o.data}):(f(r,{code:p.invalid_intersection_types}),x)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,a])=>s(i,a)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};be.create=(n,e,t)=>new be(d({left:n,right:e,typeName:_.ZodIntersection},T(t)));var B=class n extends k{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==g.array)return f(r,{code:p.invalid_type,expected:g.array,received:r.parsedType}),x;if(r.data.length<this._def.items.length)return f(r,{code:p.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),x;!this._def.rest&&r.data.length>this._def.items.length&&(f(r,{code:p.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((a,o)=>{let l=this._def.items[o]||this._def.rest;return l?l._parse(new U(r,a,r.path,o)):null}).filter(a=>!!a);return r.common.async?Promise.all(i).then(a=>O.mergeArray(t,a)):O.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new n(b(d({},this._def),{rest:e}))}};B.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new B(d({items:n,typeName:_.ZodTuple,rest:null},T(e)))};var at=class n extends k{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==g.object)return f(r,{code:p.invalid_type,expected:g.object,received:r.parsedType}),x;let s=[],i=this._def.keyType,a=this._def.valueType;for(let o in r.data)s.push({key:i._parse(new U(r,o,r.path,o)),value:a._parse(new U(r,r.data[o],r.path,o)),alwaysSet:o in r.data});return r.common.async?O.mergeObjectAsync(t,s):O.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof k?new n(d({keyType:e,valueType:t,typeName:_.ZodRecord},T(r))):new n(d({keyType:se.create(),valueType:e,typeName:_.ZodRecord},T(t)))}},Pe=class extends k{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==g.map)return f(r,{code:p.invalid_type,expected:g.map,received:r.parsedType}),x;let s=this._def.keyType,i=this._def.valueType,a=[...r.data.entries()].map(([o,l],c)=>({key:s._parse(new U(r,o,r.path,[c,"key"])),value:i._parse(new U(r,l,r.path,[c,"value"]))}));if(r.common.async){let o=new Map;return Promise.resolve().then(async()=>{for(let l of a){let c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return x;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(c.value,u.value)}return{status:t.value,value:o}})}else{let o=new Map;for(let l of a){let c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return x;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(c.value,u.value)}return{status:t.value,value:o}}}};Pe.create=(n,e,t)=>new Pe(d({valueType:e,keyType:n,typeName:_.ZodMap},T(t)));var Re=class n extends k{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==g.set)return f(r,{code:p.invalid_type,expected:g.set,received:r.parsedType}),x;let s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(f(r,{code:p.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(f(r,{code:p.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());let i=this._def.valueType;function a(l){let c=new Set;for(let u of l){if(u.status==="aborted")return x;u.status==="dirty"&&t.dirty(),c.add(u.value)}return{status:t.value,value:c}}let o=[...r.data.values()].map((l,c)=>i._parse(new U(r,l,r.path,c)));return r.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(e,t){return new n(b(d({},this._def),{minSize:{value:e,message:y.toString(t)}}))}max(e,t){return new n(b(d({},this._def),{maxSize:{value:e,message:y.toString(t)}}))}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Re.create=(n,e)=>new Re(d({valueType:n,minSize:null,maxSize:null,typeName:_.ZodSet},T(e)));var ot=class n extends k{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==g.function)return f(t,{code:p.invalid_type,expected:g.function,received:t.parsedType}),x;function r(o,l){return We({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ee(),W].filter(c=>!!c),issueData:{code:p.invalid_arguments,argumentsError:l}})}function s(o,l){return We({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ee(),W].filter(c=>!!c),issueData:{code:p.invalid_return_type,returnTypeError:l}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof ie){let o=this;return N(async function(...l){let c=new R([]),u=await o._def.args.parseAsync(l,i).catch(w=>{throw c.addIssue(r(l,w)),c}),m=await Reflect.apply(a,this,u);return await o._def.returns._def.type.parseAsync(m,i).catch(w=>{throw c.addIssue(s(m,w)),c})})}else{let o=this;return N(function(...l){let c=o._def.args.safeParse(l,i);if(!c.success)throw new R([r(l,c.error)]);let u=Reflect.apply(a,this,c.data),m=o._def.returns.safeParse(u,i);if(!m.success)throw new R([s(u,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new n(b(d({},this._def),{args:B.create(e).rest(G.create())}))}returns(e){return new n(b(d({},this._def),{returns:e}))}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new n(d({args:e||B.create([]).rest(G.create()),returns:t||G.create(),typeName:_.ZodFunction},T(r)))}},ve=class extends k{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};ve.create=(n,e)=>new ve(d({getter:n,typeName:_.ZodLazy},T(e)));var xe=class extends k{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return f(t,{received:t.data,code:p.invalid_literal,expected:this._def.value}),x}return{status:"valid",value:e.data}}get value(){return this._def.value}};xe.create=(n,e)=>new xe(d({value:n,typeName:_.ZodLiteral},T(e)));function lr(n,e){return new _e(d({values:n,typeName:_.ZodEnum},T(e)))}var _e=class n extends k{_parse(e){if(typeof e.data!="string"){let t=this._getOrReturnCtx(e),r=this._def.values;return f(t,{expected:A.joinValues(r),received:t.parsedType,code:p.invalid_type}),x}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return f(t,{received:t.data,code:p.invalid_enum_value,options:r}),x}return N(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return n.create(e,d(d({},this._def),t))}exclude(e,t=this._def){return n.create(this.options.filter(r=>!e.includes(r)),d(d({},this._def),t))}};_e.create=lr;var we=class extends k{_parse(e){let t=A.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==g.string&&r.parsedType!==g.number){let s=A.objectValues(t);return f(r,{expected:A.joinValues(s),received:r.parsedType,code:p.invalid_type}),x}if(this._cache||(this._cache=new Set(A.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){let s=A.objectValues(t);return f(r,{received:r.data,code:p.invalid_enum_value,options:s}),x}return N(e.data)}get enum(){return this._def.values}};we.create=(n,e)=>new we(d({values:n,typeName:_.ZodNativeEnum},T(e)));var ie=class extends k{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==g.promise&&t.common.async===!1)return f(t,{code:p.invalid_type,expected:g.promise,received:t.parsedType}),x;let r=t.parsedType===g.promise?t.data:Promise.resolve(t.data);return N(r.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}};ie.create=(n,e)=>new ie(d({type:n,typeName:_.ZodPromise},T(e)));var F=class extends k{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:a=>{f(r,a),a.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){let a=s.transform(r.data,i);if(r.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return x;let l=await this._def.schema._parseAsync({data:o,path:r.path,parent:r});return l.status==="aborted"?x:l.status==="dirty"?de(l.value):t.value==="dirty"?de(l.value):l});{if(t.value==="aborted")return x;let o=this._def.schema._parseSync({data:a,path:r.path,parent:r});return o.status==="aborted"?x:o.status==="dirty"?de(o.value):t.value==="dirty"?de(o.value):o}}if(s.type==="refinement"){let a=o=>{let l=s.refinement(o,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(r.common.async===!1){let o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?x:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>o.status==="aborted"?x:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(s.type==="transform")if(r.common.async===!1){let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!re(a))return x;let o=s.transform(a.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>re(a)?Promise.resolve(s.transform(a.value,i)).then(o=>({status:t.value,value:o})):x);A.assertNever(s)}};F.create=(n,e,t)=>new F(d({schema:n,typeName:_.ZodEffects,effect:e},T(t)));F.createWithPreprocess=(n,e,t)=>new F(d({schema:e,effect:{type:"preprocess",transform:n},typeName:_.ZodEffects},T(t)));var L=class extends k{_parse(e){return this._getType(e)===g.undefined?N(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};L.create=(n,e)=>new L(d({innerType:n,typeName:_.ZodOptional},T(e)));var H=class extends k{_parse(e){return this._getType(e)===g.null?N(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};H.create=(n,e)=>new H(d({innerType:n,typeName:_.ZodNullable},T(e)));var Te=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===g.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};Te.create=(n,e)=>new Te(d({innerType:n,typeName:_.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default},T(e)));var ke=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),r=b(d({},t),{common:b(d({},t.common),{issues:[]})}),s=this._def.innerType._parse({data:r.data,path:r.path,parent:d({},r)});return Ie(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new R(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new R(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};ke.create=(n,e)=>new ke(d({innerType:n,typeName:_.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch},T(e)));var Ve=class extends k{_parse(e){if(this._getType(e)!==g.nan){let r=this._getOrReturnCtx(e);return f(r,{code:p.invalid_type,expected:g.nan,received:r.parsedType}),x}return{status:"valid",value:e.data}}};Ve.create=n=>new Ve(d({typeName:_.ZodNaN},T(n)));var ms=Symbol("zod_brand"),Ke=class extends k{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}},Ge=class n extends k{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?x:i.status==="dirty"?(t.dirty(),de(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{let s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?x:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,t){return new n({in:e,out:t,typeName:_.ZodPipeline})}},Ae=class extends k{_parse(e){let t=this._def.innerType._parse(e),r=s=>(re(s)&&(s.value=Object.freeze(s.value)),s);return Ie(t)?t.then(s=>r(s)):r(t)}unwrap(){return this._def.innerType}};Ae.create=(n,e)=>new Ae(d({innerType:n,typeName:_.ZodReadonly},T(e)));function nr(n,e){let t=typeof n=="function"?n(e):typeof n=="string"?{message:n}:n;return typeof t=="string"?{message:t}:t}function cr(n,e={},t){return n?ne.create().superRefine((r,s)=>{var a,o;let i=n(r);if(i instanceof Promise)return i.then(l=>{var c,u;if(!l){let m=nr(e,r),S=(u=(c=m.fatal)!=null?c:t)!=null?u:!0;s.addIssue(b(d({code:"custom"},m),{fatal:S}))}});if(!i){let l=nr(e,r),c=(o=(a=l.fatal)!=null?a:t)!=null?o:!0;s.addIssue(b(d({code:"custom"},l),{fatal:c}))}}):ne.create()}var gs={object:V.lazycreate},_;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(_||(_={}));var ys=(n,e={message:`Input not instance of ${n.name}`})=>cr(t=>t instanceof n,e),dr=se.create,ur=ue.create,bs=Ve.create,vs=pe.create,pr=he.create,xs=fe.create,_s=Oe.create,ws=me.create,Ts=ge.create,ks=ne.create,As=G.create,$s=z.create,Ss=Ne.create,Cs=Y.create,Es=V.create,Is=V.strictCreate,Ms=ye.create,Os=it.create,Ns=be.create,Ps=B.create,Rs=at.create,Vs=Pe.create,js=Re.create,Ls=ot.create,Us=ve.create,Fs=xe.create,zs=_e.create,Ds=we.create,Bs=ie.create,Hs=F.create,qs=L.create,Js=H.create,Zs=F.createWithPreprocess,Ws=Ge.create,Ks=()=>dr().optional(),Gs=()=>ur().optional(),Ys=()=>pr().optional(),Qs={string:n=>se.create(b(d({},n),{coerce:!0})),number:n=>ue.create(b(d({},n),{coerce:!0})),boolean:n=>he.create(b(d({},n),{coerce:!0})),bigint:n=>pe.create(b(d({},n),{coerce:!0})),date:n=>fe.create(b(d({},n),{coerce:!0}))};var Xs=x;var en=/^\w+([_]\w+)*$/,hr=/^\w+([\s-_]\w+)*$/,fr=h.record(h.lazy(function(){return h.union([h.string(),h.number(),h.boolean(),fr])})),je=h.object({title:h.string().regex(hr).max(40).optional(),required:h.boolean().optional(),description:h.string().optional(),defaultValue:h.union([h.string(),h.boolean(),h.number(),fr]).optional(),format:h.string().optional(),isValueField:h.boolean().optional()}),tn=h.number().int().positive().lte(12).gte(1),mr=h.intersection(je,h.object({type:h.literal("string"),minLength:h.number().optional(),maxLength:h.number().optional()})),gr=h.intersection(je,h.object({type:h.literal("string"),enum:h.array(h.string().nonempty()),showAsRadio:h.boolean().optional(),verticalLayout:h.boolean().optional()})),yr=h.intersection(je,h.object({type:h.literal("number"),minimum:h.number().optional(),maximum:h.number().optional()})),br=h.intersection(je,h.object({type:h.literal("integer"),minimum:h.number().optional(),maximum:h.number().optional()})),vr=h.intersection(je,h.object({type:h.literal("boolean")})),xr=h.intersection(je,h.object({type:h.literal("object"),properties:h.lazy(function(){return h.record(h.union([gr,mr,yr,br,vr,xr]))}).optional()})),rn=h.union([gr,mr,yr,br,vr,xr]),sn=h.object({staticProperties:h.array(h.string()).optional(),canvasRestrictions:h.object({hideInToolbar:h.boolean().optional(),minSize:tn.optional(),isFullRow:h.boolean().optional()}).optional()}),_r=h.object({version:h.string().nonempty(),fallbackDisableSubmit:h.boolean(),controlName:h.string().nonempty().regex(hr).max(40),pluginAuthor:h.string().optional(),pluginVersion:h.string().optional(),searchTerms:h.array(h.string()).optional(),description:h.string().optional(),groupName:h.union([h.string(),h.object({name:h.string(),order:h.number()})]).optional(),iconUrl:h.string().optional(),designer:sn.optional(),properties:h.record(h.string().regex(en),h.union([rn,h.boolean()])).optional(),standardProperties:h.object({fieldLabel:h.boolean().optional(),toolTip:h.boolean().optional(),description:h.boolean().optional(),placeholder:h.boolean().optional(),defaultValue:h.boolean().optional(),visibility:h.boolean().optional(),readOnly:h.boolean().optional(),required:h.boolean().optional()}).optional(),events:h.array(h.string()).optional()}).strict();var wr='[role="alert"], .ntx-form-error, .ntx-error-message',lt=class{constructor(){this.isBlurRevalidating=!1;this.focusedControlValues=new WeakMap;this._onGlobalFocusIn=e=>{var i,a,o;let r=(o=((a=(i=e.composedPath)==null?void 0:i.call(e))!=null?a:[])[0])!=null?o:e.target,s=this.getTrackableControl(r);s&&this.focusedControlValues.set(s,this.getComparableControlValue(s))};this._onGlobalFocusOut=e=>{var l,c,u;if(this.isBlurRevalidating)return;let r=(u=((c=(l=e.composedPath)==null?void 0:l.call(e))!=null?c:[])[0])!=null?u:e.target;if(!(r instanceof HTMLElement))return;let s=this.getFormContext();if(!s||!s.form.contains(r)||!this.hasValidationMarkers(s.form))return;let i=this.getTrackableControl(r);if(!i)return;let a=this.focusedControlValues.get(i),o=this.getComparableControlValue(i);this.focusedControlValues.delete(i),!(a===void 0||a===o)&&(this.isBlurRevalidating=!0,this.runSoftValidationAndUpdateUI(s).then(()=>{this.isBlurRevalidating=!1}).catch(()=>{this.isBlurRevalidating=!1}))}}attach(){document.addEventListener("focusin",this._onGlobalFocusIn),document.addEventListener("focusout",this._onGlobalFocusOut)}detach(){document.removeEventListener("focusin",this._onGlobalFocusIn),document.removeEventListener("focusout",this._onGlobalFocusOut)}async runHardValidation(){let e=this.getFormContext();if(!e)return console.warn("[ValidationModule] No form context found \u2014 blocking API call"),!1;this.clearNintexValidationUI(),this.suppressNativeSubmitArtifacts(e.form),await this.triggerNativeValidation(e),this.suppressNativeSubmitArtifacts(e.form);let t=this.collectValidationSummary(e);if(console.info("[ValidationModule] Hard validation summary",t),t.fieldValidation||t.ruleValidation){let r=e.form.querySelector('[aria-invalid="true"]');return r&&r.focus(),!1}return this.suppressNativeSubmitArtifacts(e.form),!0}clearNintexValidationUI(){document.querySelectorAll(".daf-injected-error").forEach(e=>e.remove()),document.querySelectorAll("[data-daf-validated]").forEach(e=>{e.removeAttribute("aria-invalid"),e.removeAttribute("data-daf-validated")}),document.querySelectorAll(".daf-has-error").forEach(e=>{e.classList.remove("nx-has-error","daf-has-error")})}hasValidationMarkers(e){return e.querySelector('[aria-invalid="true"]')?!0:Array.from(e.querySelectorAll(wr)).some(t=>this.isValidationAlertElement(t)&&this.isElementVisible(t)&&this.isValidationAlertText(t.textContent))}getFormContext(){var o,l;let e=document.querySelector("form");if(!(e instanceof HTMLFormElement))return null;let t=e.querySelector('button[data-e2e="btn-submit"], input[data-e2e="btn-submit"]'),r=Array.from(e.querySelectorAll('button[type="submit"], input[type="submit"]')).find(c=>this.isElementVisible(c)),s=Array.from(e.querySelectorAll("button:not([type])")).find(c=>{var u,m;return this.isElementVisible(c)&&/submit/i.test(((u=c.getAttribute("data-e2e"))!=null?u:"")+" "+((m=c.textContent)!=null?m:""))}),i=(l=(o=t!=null?t:r)!=null?o:s)!=null?l:null;if(!(i instanceof HTMLElement))return null;let a=Array.from(e.querySelectorAll("input, select, textarea")).filter(c=>this.isElementVisible(c)&&!c.disabled);return{form:e,submitControl:i,controls:a}}async triggerNativeValidation(e){var i;e.form.addEventListener("submit",a=>{a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation()},{capture:!0,once:!0});let t=e.submitControl,r=t instanceof HTMLButtonElement?t:null,s=(i=r==null?void 0:r.getAttribute("type"))!=null?i:null;try{r&&r.setAttribute("type","button"),t.click(),await this.wait(350)}finally{r&&(s===null?r.removeAttribute("type"):r.setAttribute("type",s))}}async runSoftValidationAndUpdateUI(e){await this.wait(120);let t=this.collectValidationSummary(e);console.info("[ValidationModule] Soft validation summary",t),!t.fieldValidation&&!t.ruleValidation&&(this.clearNintexValidationUI(),this.suppressNativeSubmitArtifacts(e.form))}clearNativeSubmitArtifacts(e){[...Array.from(document.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')),...Array.from(e.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]'))].forEach(s=>{s.textContent=""}),Array.from(e.querySelectorAll('[role="alert"], .ntx-form-error, .ntx-error-message')).filter(s=>{var a;return((a=s.textContent)!=null?a:"").trim().toLowerCase().includes("api call not successful")}).forEach(s=>{s.textContent=""})}suppressNativeSubmitArtifacts(e){this.clearNativeSubmitArtifacts(e),[0,75,200,400].forEach(t=>{window.setTimeout(()=>{this.clearNativeSubmitArtifacts(e)},t)})}isValidationAlertElement(e){return!e.matches('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')}isValidationAlertText(e){let t=(e!=null?e:"").trim().toLowerCase();return!(!t||t.includes("there is 1 error in the form you are trying to submit")||t.includes("there are ")&&t.includes(" error in the form you are trying to submit")||t.includes("api call not successful"))}collectValidationSummary(e){let t=Array.from(e.form.querySelectorAll('[aria-invalid="true"]')).filter(m=>this.isElementVisible(m)),r=e.controls.filter(m=>this.isElementVisible(m)&&m.matches(":invalid")),s=Array.from(e.form.querySelectorAll(wr)).filter(m=>this.isValidationAlertElement(m)&&this.isElementVisible(m)&&this.isValidationAlertText(m.textContent)),i=[...new Set(r.map(m=>this.getControlLabel(m)))],a=[...new Set(s.map(m=>{var S,w;return(w=(S=m.textContent)==null?void 0:S.trim())!=null?w:""}))].filter(Boolean),o=t.length>0||r.length>0,l=s.length>0&&o,c=o||l?"Validation surfaced":"No validation markers",u=`${c} - aria: ${t.length}, html5: ${r.length}, alerts: ${s.length}`;return{outcome:c,ariaCount:t.length,html5Count:r.length,alertCount:s.length,fieldValidation:o,ruleValidation:l,message:u,invalidControls:i,alerts:a}}isElementVisible(e){let t=e,r=window.getComputedStyle(t);return r.display!=="none"&&r.visibility!=="hidden"&&t.offsetParent!==null}getControlLabel(e){return e.getAttribute("aria-label")||e.name||e.id||e.getAttribute("placeholder")||e.tagName.toLowerCase()}getTrackableControl(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement?e:null}getComparableControlValue(e){var t;if(e instanceof HTMLInputElement){let r=e.type.toLowerCase();return r==="checkbox"||r==="radio"?e.checked?"checked":"unchecked":r==="file"?Array.from((t=e.files)!=null?t:[]).map(s=>s.name).join("|"):e.value}return e instanceof HTMLSelectElement&&e.multiple?Array.from(e.selectedOptions).map(r=>r.value).join("|"):e.value}wait(e){return new Promise(t=>{window.setTimeout(t,e)})}};var Tr="1.1.5",kr=!1;function nn(n){if(kr)return;kr=!0;let e=_r.safeParse(n);if(e.success){console.log("[Plugin Contract] Contract validation passed");return}console.error("[Plugin Contract] Contract validation failed"),e.error.issues.forEach((t,r)=>{console.error(`  [${r+1}] path=${t.path.join(".")} message=${t.message}`)})}var $=class extends te{constructor(){super();this.activeDebugTab="properties";this.activeFormatterTab="success";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.formatterUseArrayNotation=!0;this.formatterMessageTitle="";this.label="";this.description="";this.readOnly=!1;this._value={success:null,valid:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0};this.requestBody="";this.apiUrl="";this.requestHeaders="";this.bearerToken="";this.tokenUrl="";this.clientId="";this.clientSecret="";this.outputValueKey="";this.contentType="application/json";this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.countdownEnabled=!1;this.countdownTimer=5;this._btnEnabled=!0;this.btnText="Send API Request";this.btnAlignment="left";this._btnVisible=!0;this.submissionAction="no-submit";this.submitHidden=!1;this.showMoreDetails="Never";this.alertPosition="After";this.detailsExpanded=!1;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.cooldownTimerId=null;this.oauthTokenResponse=null;this.submitBlockerAttached=!1;this.delayedSubmissionStartTime=0;this.allowFormSubmit=!1;this.validationModule=new lt;this.isFinalizingSubmission=!1}get value(){return this._value}set value(t){let r=this._value;this._value=t,console.log("[Value Setter] Value changed, dispatching ntx-value-change event",t),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:t,bubbles:!0,composed:!0})),this.requestUpdate("value",r)}get btnEnabled(){return this._btnEnabled}set btnEnabled(t){let r=this._btnEnabled;this._btnEnabled=t,console.log(`[Property Setter] btnEnabled changed from ${r} to ${t}`),this.requestUpdate("btnEnabled",r)}get btnVisible(){return this._btnVisible}set btnVisible(t){let r=this._btnVisible;this._btnVisible=t,console.log(`[Property Setter] btnVisible changed from ${r} to ${t}`),this.requestUpdate("btnVisible",r)}connectedCallback(){super.connectedCallback(),this.toggleSubmitButtonVisibility(),this.attachSubmitBlocker(),this.validationModule.attach()}attachSubmitBlocker(){if(this.submitBlockerAttached)return;let t=document.querySelector("form");if(!t){console.warn("[Submit Blocker] No form found to attach blocker");return}t.addEventListener("submit",r=>{!this.allowFormSubmit&&this.submissionAction!=="only-submit"&&(console.log("[Submit Blocker] Blocking submit - plugin-controlled submission mode is active"),r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation())},!0),this.submitBlockerAttached=!0,console.log("[Submit Blocker] Persistent submit blocker attached")}static getMetaConfig(){let t={controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:Tr,description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional bearer token value for authorization header used if token URL is not provided",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional OAuth token endpoint URL",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional JSON key path to extract from response",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},valid:{type:"boolean",title:"Valid",description:"Validation flag used by form rules. True on successful API call and in only-submit mode."},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"Actual message from API response"},formattedResponse:{type:"string",title:"Formatted Response",description:"Formatted response message based on success warning and error message configuration"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:!1,valid:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true allows repeated API calls If false disables further calls after first success or warning",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},submissionAction:{type:"string",title:"Submission Action",description:"Action to take after a successful API call Set to only submit to skip API call and submit form directly",enum:["no-submit","quick-submit","delayed-submit","only-submit"],defaultValue:"no-submit"},submitHidden:{type:"boolean",title:"Hide Submit Button",description:"If true, hides the Nintex form submit button from users.",defaultValue:!1},showMoreDetails:{type:"string",title:"Show More Details",description:"Controls when to show expandable raw response details in alerts.",enum:["Never","Always","On Error/Warning"],defaultValue:"Never"},alertPosition:{type:"string",title:"Alert Position",description:"Controls where the alert message is displayed relative to the button.",enum:["After","Before","Pop-out"],defaultValue:"After"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}};return nn(t),t}render(){return this.debugMode?v`
        <div class="plugin-container">
          ${this.btnVisible?this.renderButtonWithAlert("Calling API..."):""}
          
          <div class="debug-tabs">
            <div class="debug-version">Plugin Version: ${Tr}</div>
            <div class="debug-tab-nav">
              <button 
                class="debug-tab-button ${this.activeDebugTab==="properties"?"active":""}"
                @click=${()=>this.setActiveTab("properties")}
              >
                Plugin Properties
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab==="request"?"active":""}"
                @click=${()=>this.setActiveTab("request")}
              >
                Request Details
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab==="tools"?"active":""}"
                @click=${()=>this.setActiveTab("tools")}
              >
                API Tools
              </button>
              <button 
                class="debug-tab-button ${this.activeDebugTab==="formatter"?"active":""}"
                @click=${()=>this.setActiveTab("formatter")}
              >
                Response Formatter
              </button>
            </div>

            <div class="debug-tab-content ${this.activeDebugTab==="properties"?"active":""}">
              ${this.renderPropertiesTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab==="request"?"active":""}">
              ${this.renderRequestDetailsTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab==="tools"?"active":""}">
              ${this.renderAPIToolsTab()}
            </div>

            <div class="debug-tab-content ${this.activeDebugTab==="formatter"?"active":""}">
              ${this.renderResponseFormatterTab()}
            </div>
          </div>
        </div>
      `:this.btnVisible?v`
      <div class="plugin-container">
        ${this.renderButtonWithAlert("Processing...")}
      </div>
    `:v`<div class="plugin-container" style="display: none;"></div>`}renderButtonWithAlert(t){let r=this.renderResponseAlert(this.alertPosition==="Before"),s=v`
      <button 
        class="btn btn-primary" 
        part="api-button"
        @click=${()=>this.triggerAPICall()} 
        ?disabled=${this.isButtonDisabled()}
      >
        ${this.isLoading?v`<span class="spinner"></span>${t}`:this.btnText}
      </button>
    `;return this.alertPosition==="Pop-out"?v`
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            ${s}
          </div>
        </div>
        ${this.shouldShowAlert()?this.renderModal(r):""}
      `:this.alertPosition==="Before"?v`
        <div class="form-group">
          ${r}
          <div class="btn-container align-${this.btnAlignment}">
            ${s}
          </div>
        </div>
      `:v`
      <div class="form-group">
        <div class="btn-container align-${this.btnAlignment}">
          ${s}
        </div>
        ${r}
      </div>
    `}shouldShowAlert(){let r=Date.now()-this.lastApiCallTime,s=this.countdownTimer*1e3;return this.countdownEnabled&&this.lastApiCallTime>0&&r<s&&this.showCooldownAlert?!0:!(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)}renderModal(t){return v`
      <div class="modal-overlay" @click=${r=>{r.target===r.currentTarget&&this.closeModal()}}>
        <div class="modal-content">
          <button class="modal-close" @click=${()=>this.closeModal()}>&times;</button>
          ${t}
        </div>
      </div>
    `}closeModal(){this.apiResponse="",this.responseType=null,this.showCooldownAlert=!1,this.requestUpdate()}renderResponseAlert(t=!1){var q;let s=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3,a=this.countdownEnabled&&this.lastApiCallTime>0&&s<i,o=this.submissionAction==="delayed-submit"&&this.cooldownTimerId!==null&&(this.responseType==="success"||this.responseType==="warning"),l=t?"alert-before":"";if(a&&this.showCooldownAlert){let Q=Math.ceil((i-s)/1e3);return v`
        <div class="alert alert-info ${l}" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${Q} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let c=`alert-${this.responseType}`,u=this.getAlertIcon(this.responseType),m=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),S=this.getCustomMessage(this.responseType),w=S.title,M=S.message,j=0;if(o){let Q=Date.now()-this.delayedSubmissionStartTime,Ar=this.countdownTimer*1e3-Q;j=Math.max(0,Math.ceil(Ar/1e3))}let P=M.includes(`
`);if(this.responseType==="success"){let Q=this.shouldShowMoreDetails("success")||o;return v`
        <div class="alert ${c} ${l}" part="response-alert">
          ${w?v`
            <div>
              <strong>${w}</strong>
            </div>
          `:""}
          ${P?v`
            <div class="alert-response" style="white-space: pre-line; margin-top: ${w?"8px":"0"};">
              ${M}
            </div>
          `:v`
            <div style="display: inline; margin-left: ${w?"4px":"0"};">
              ${M}
            </div>
          `}
          ${Q?v`
            <div class="alert-footer">
              <div class="alert-footer-left">
                ${this.shouldShowMoreDetails("success")?v`
                  <button 
                    class="alert-more-details-toggle"
                    @click=${()=>this.toggleDetailsExpanded()}
                  >
                    ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
                  </button>
                `:""}
              </div>
              ${o?v`
                <div class="alert-footer-right">
                  Submitting form in ${j} seconds...
                </div>
              `:""}
            </div>
            ${this.detailsExpanded&&this.shouldShowMoreDetails("success")?v`
              <div class="alert-more-details-wrapper">
                <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
                <div class="alert-more-details-content">${this.formatRawResponse()}</div>
              </div>
            `:""}
          `:""}
        </div>
      `}let $e=this.shouldShowMoreDetails(this.responseType)||o;return v`
      <div class="alert ${c} ${l}" part="response-alert">
        ${w?v`
          <div>
            <strong>${w}</strong>
          </div>
        `:""}
        ${P?v`
          <div class="alert-response" style="white-space: pre-line; margin-top: ${w?"8px":"0"};">
            ${M}
          </div>
        `:v`
          <div style="display: inline; margin-left: ${w?"4px":"0"};">
            ${M}
          </div>
        `}
        ${(q=this.value)!=null&&q.message?v`
          <div class="alert-response">
            ${Xt(this.formatMessageWithBoldLabels(this.value.message))}
          </div>
        `:""}
        ${$e?v`
          <div class="alert-footer">
            <div class="alert-footer-left">
              ${this.shouldShowMoreDetails(this.responseType)?v`
                <button 
                  class="alert-more-details-toggle"
                  @click=${()=>this.toggleDetailsExpanded()}
                >
                  ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
                </button>
              `:""}
            </div>
            ${o?v`
              <div class="alert-footer-right">
                Submitting form in ${j} seconds...
              </div>
            `:""}
          </div>
          ${this.detailsExpanded&&this.shouldShowMoreDetails(this.responseType)?v`
            <div class="alert-more-details-wrapper">
              <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
              <div class="alert-more-details-content">${this.formatRawResponse()}</div>
            </div>
          `:""}
        `:""}
      </div>
    `}formatMessageWithBoldLabels(t){return t?t.split(`
`).map(i=>{let a=i.match(/^([^:]+):\s*(.*)$/);if(a){let o=a[1].trim(),l=a[2];return`<strong>${o}:</strong> ${l}`}return i}).join("<br>"):""}getAlertIcon(t){switch(t){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}shouldShowMoreDetails(t){return this.showMoreDetails==="Never"?!1:this.showMoreDetails==="Always"?!0:this.showMoreDetails==="On Error/Warning"?t==="error"||t==="warning":!1}toggleDetailsExpanded(){this.detailsExpanded=!this.detailsExpanded,this.requestUpdate()}formatRawResponse(){if(!this.apiResponse)return"";try{let t=JSON.parse(this.apiResponse);return JSON.stringify(t,null,2)}catch(t){return this.apiResponse}}copyRawResponseToClipboard(){let t=this.formatRawResponse();this.copyToClipboard(t)}getCustomMessage(t){let r;switch(t){case"success":r=this.successMessage;break;case"warning":r=this.warningMessage;break;case"error":r=this.errorMessage;break;default:r="Unknown response type"}if(r.startsWith('"{')&&r.endsWith('}"'))try{let s=r.slice(1,-1).replace(/\\"/g,'"'),i=JSON.parse(s);return{title:i.title||null,message:this.formatResponseWithConfig(i)}}catch(s){return console.error("[Message Formatting] Failed to parse quoted config:",s),{title:null,message:r}}if(r.trim().startsWith('{"'))try{let s=JSON.parse(r);return{title:s.title||null,message:this.formatResponseWithConfig(s)}}catch(s){return console.error("[Message Formatting] Failed to parse unquoted config:",s),{title:null,message:r}}return{title:null,message:r}}formatResponseWithConfig(t){if(!t.fields||!Array.isArray(t.fields))return"Invalid configuration format";let r;try{r=JSON.parse(this.value.data)}catch(i){return console.error("[Message Formatting] Failed to parse response data:",i),"Unable to parse response data"}let s=[];return t.fields.forEach(i=>{let a=this.extractNestedValue(r,i.path);if(Array.isArray(a))if(a.length>0){let o=a[0];typeof o!="object"||o===null?(s.push(`${i.title}:`),a.forEach((c,u)=>{s.push(`  ${u+1}. ${String(c)}`)})):(s.push(`${i.title}:`),a.forEach((c,u)=>{let m=JSON.stringify(c);s.push(`  ${u+1}. ${m}`)}))}else s.push(`${i.title}: (empty)`);else{let o=a!=null?String(a):"N/A";s.push(`${i.title}: ${o}`)}}),s.join(`
`)}updated(t){t.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger(),t.has("submitHidden")&&this.toggleSubmitButtonVisibility(),t.has("btnVisible")&&(console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`),this.requestUpdate()),t.has("btnEnabled")&&(console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`),this.requestUpdate()),t.has("btnText")&&(console.log(`[UI Property Change] btnText changed to: ${this.btnText}`),this.requestUpdate()),t.has("btnAlignment")&&(console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`),this.requestUpdate()),t.has("debugMode")&&(console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`),this.requestUpdate())}toggleSubmitButtonVisibility(){let t="ntx-submit-button-hidden-style";if(this.submitHidden){if(!document.getElementById(t)){let r=document.createElement("style");r.id=t,r.textContent=`
          button[data-e2e="btn-submit"] {
            display: none !important;
          }
        `,document.head.appendChild(r),console.log("[Submit Button] Hidden via CSS")}}else{let r=document.getElementById(t);r&&(r.remove(),console.log("[Submit Button] Made visible by removing CSS"))}}async handleAPICallTrigger(){if(console.log("[API Call] handleAPICallTrigger started"),this.sendAPICall=!1,this.isFinalizingSubmission){console.log("[API Call] Ignored - final native submission is in progress");return}if(this.submissionAction==="only-submit"){console.log("[API Call] Submission action is only-submit \u2014 submitting form directly"),this.value=b(d({},this.value),{valid:!0}),this.submitNintexForm();return}console.log("[API Call] Running form validation via ValidationModule...");let t=await this.validationModule.runHardValidation();if(console.log("[API Call] Validation result:",t),!t){console.log("[API Call] Validation FAILED \u2014 blocking API call");return}if(console.log("[API Call] Validation PASSED \u2014 proceeding"),!this.allowMultipleAPICalls&&this.hasSuccessfulCall){console.log("[API Call] Multiple API calls not allowed and already had successful call \u2014 BLOCKING");return}if(this.countdownEnabled){let s=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&s<i){console.log("[API Call] In cooldown period \u2014 BLOCKING"),this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}console.log("[API Call] All checks passed \u2014 calling handleApiCall()"),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls)return this.isLoading;let t=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning");return this.isLoading||!this.btnEnabled||t}setActiveTab(t){this.activeDebugTab=t,this.requestUpdate()}renderPropertiesTab(){let t=this.constructor.getMetaConfig(),r=[];if(t.properties)for(let[s,i]of Object.entries(t.properties))s!=="value"&&r.push({name:s,default:i.defaultValue,config:i});return v`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${r.map(s=>v`
            <tr>
              <td><code class="property-name">${s.name}</code></td>
              <td class="value-default">${this.formatValue(s.default)}</td>
              <td class="value-current">${this.renderPropertyInput(s.name,s.config)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}renderPropertyInput(t,r){let s=this[t],i=r.type;if(i==="boolean")return v`
        <span style="font-weight: 500; color: ${s?"#28a745":"#dc3545"};">
          ${s?"\u2713 Yes":"\u2717 No"}
        </span>
      `;if(i==="string"){let a=(t==="bearerToken"||t==="clientSecret")&&s&&s.length>0?"***"+s.slice(-4):s,o=a&&a.length>100?a.substring(0,100)+"...":a;return v`
        <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
          ${o||"<empty>"}
        </span>
      `}return i==="number"||i==="integer"?v`
        <span style="font-weight: 500;">
          ${s}
        </span>
      `:v`<span>${this.formatValue(s)}</span>`}renderRequestDetailsTab(){return v`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>apiUrl</code></td>
            <td style="word-break: break-all;">${this.apiUrl||"<not set>"}</td>
          </tr>
          <tr>
            <td><code>method</code></td>
            <td>${this.method}</td>
          </tr>
          ${this.oauthTokenResponse?v`
            <tr>
              <td><code>OAuth Token</code></td>
              <td>
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${()=>this.copyToClipboard(JSON.stringify(this.oauthTokenResponse,null,2))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${JSON.stringify(this.oauthTokenResponse,null,2)}</pre>
                </div>
              </td>
            </tr>
          `:""}
          <tr>
            <td><code>requestHeaders</code></td>
            <td>
              ${this.requestHeaders?v`
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${()=>this.copyToClipboard(this.formatJsonForDisplay(this.requestHeaders))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.requestHeaders)}</pre>
                </div>
              `:"<not set>"}
            </td>
          </tr>
          <tr>
            <td><code>requestBody</code></td>
            <td>
              ${this.requestBody?v`
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${()=>this.copyToClipboard(this.formatJsonForDisplay(this.requestBody))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.requestBody)}</pre>
                </div>
              `:"<not set>"}
            </td>
          </tr>
          <tr>
            <td><code>State</code></td>
            <td>
              <strong>Loading:</strong> ${this.isLoading}<br>
              <strong>Has Successful Call:</strong> ${this.hasSuccessfulCall}<br>
              <strong>Button Disabled:</strong> ${this.isButtonDisabled()}
            </td>
          </tr>
          ${this.apiResponse?v`
            <tr>
              <td><code>Response</code></td>
              <td>
                <div class="debug-json-container">
                  <button 
                    class="debug-json-copy-btn"
                    @click=${()=>this.copyToClipboard(this.formatJsonForDisplay(this.apiResponse))}
                    title="Copy to clipboard"
                  >
                    📋 Copy
                  </button>
                  <pre class="debug-json">${this.formatJsonForDisplay(this.apiResponse)}</pre>
                </div>
              </td>
            </tr>
          `:""}
        </tbody>
      </table>
    `}renderAPIToolsTab(){let t=this.isValidJson(this.requestBody),r=this.getJsonStatus(this.requestBody);return v`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">JSON Request Body Editor</label>
          <div class="json-editor-container">
            <div class="json-editor-toolbar">
              <div class="json-editor-actions">
                <button 
                  class="json-editor-btn" 
                  @click=${this.formatJson}
                  ?disabled=${!t}
                  title="Format and beautify JSON"
                >
                  ✨ Format
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.minifyJson}
                  ?disabled=${!t}
                  title="Minify JSON to single line"
                >
                  🗜️ Minify
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.clearJson}
                  title="Clear JSON content"
                >
                  🗑️ Clear
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.insertSampleJson}
                  title="Insert sample JSON"
                >
                  📝 Sample
                </button>
              </div>
              <div class="json-editor-status ${t?"valid":"invalid"}">
                ${r}
              </div>
            </div>
            <textarea 
              class="form-control json-editor-textarea" 
              .value=${this.requestBody} 
              @input=${this.handleJsonInput}
              @blur=${this.handleJsonBlur}
              @paste=${this.handleJsonPaste}
              placeholder="Enter JSON request body here..."
              spellcheck="false"
            ></textarea>
          </div>
        </div>

        ${this.renderJsonOutput()}
        
        ${this.renderJsonPreview()}
      </div>
    `}renderResponseFormatterTab(){let t=this.formatterJsonInput.trim().length>0,r=t&&this.isValidJson(this.formatterJsonInput),s=null,i="";if(t)try{s=JSON.parse(this.formatterJsonInput)}catch(a){i=a.message}return v`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${a=>{let o=a.target;this.formatterJsonInput=o.value,this.requestUpdate()}}
            placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${i?v`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
        </div>

        ${r&&s?v`
          <!-- Message Type Tabs -->
          <div class="debug-tab-nav" style="margin-bottom: 0;">
            <button 
              class="debug-tab-button ${this.activeFormatterTab==="success"?"active":""}"
              @click=${()=>{this.activeFormatterTab="success",this.loadConfigIntoFields("success"),this.requestUpdate()}}
            >
              ✓ Success Message
            </button>
            <button 
              class="debug-tab-button ${this.activeFormatterTab==="warning"?"active":""}"
              @click=${()=>{this.activeFormatterTab="warning",this.loadConfigIntoFields("warning"),this.requestUpdate()}}
            >
              ⚠ Warning Message
            </button>
            <button 
              class="debug-tab-button ${this.activeFormatterTab==="error"?"active":""}"
              @click=${()=>{this.activeFormatterTab="error",this.loadConfigIntoFields("error"),this.requestUpdate()}}
            >
              ✕ Error Message
            </button>
          </div>

          <!-- Success Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab==="success"?"active":""}">
            ${this.renderMessageTypeConfig("success",this.successMessage,s)}
          </div>

          <!-- Warning Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab==="warning"?"active":""}">
            ${this.renderMessageTypeConfig("warning",this.warningMessage,s)}
          </div>

          <!-- Error Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab==="error"?"active":""}">
            ${this.renderMessageTypeConfig("error",this.errorMessage,s)}
          </div>
        `:""}
      </div>
    `}renderMessageTypeConfig(t,r,s){let a={success:{bg:"#d4edda",text:"#155724",border:"#c3e6cb",btnBg:"#28a745",btnText:"white"},warning:{bg:"#fff3cd",text:"#856404",border:"#ffeaa7",btnBg:"#ffc107",btnText:"#000"},error:{bg:"#f8d7da",text:"#721c24",border:"#f5c6cb",btnBg:"#dc3545",btnText:"white"}}[t];return v`
      <div style="border: 1px solid var(--ntx-form-theme-color-border); border-top: none; border-radius: 0 0 4px 4px; padding: 16px; background: var(--ntx-form-theme-color-background);">
        
        <!-- Current Configuration -->
        <div class="form-group">
          <label class="control-label">Current ${t.charAt(0).toUpperCase()+t.slice(1)} Message Configuration</label>
          <div style="position: relative;">
            <textarea 
              class="form-control" 
              readonly
              rows="4"
              .value=${r}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; background: ${a.bg}; color: ${a.text}; border-color: ${a.border};"
            ></textarea>
          </div>
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
            ${r.trim().startsWith('{"fields"')||r.trim().startsWith('"{')?"\u2713 Formatted response configuration detected":"\u25CB Plain text message"}
          </div>
        </div>

        <!-- Preview -->
        <div class="form-group">
          <label class="control-label">Preview of Current Configuration</label>
          <div style="border: 1px solid ${a.border}; border-radius: 4px; padding: 16px; background: ${a.bg}; color: ${a.text}; white-space: pre-line; min-height: 60px;">
            ${this.getPreviewForConfig(r,s)}
          </div>
        </div>

        <!-- Response Field Configurator -->
        <div class="form-group">
          <label class="control-label">Response Field Configurator</label>
          
          <!-- Message Title -->
          <div class="form-group" style="margin-bottom: 16px;">
            <label class="control-label" style="font-size: 13px; font-weight: 500;">Message Title</label>
            <input 
              type="text" 
              class="form-control"
              .value=${this.formatterMessageTitle}
              @input=${o=>{let l=o.target;this.formatterMessageTitle=l.value,this.requestUpdate()}}
              placeholder="Leave empty to hide title header"
              style="width: 100%;"
            />
            <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
              ${this.formatterMessageTitle?"\u2713 Custom title will be displayed":"\u25CB No title - header will be hidden"}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <!-- Available Fields -->
            <div>
              <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">
                Available Fields
                <label style="float: right; font-weight: normal; font-size: 12px; display: flex; align-items: center; gap: 6px;">
                  <input 
                    type="checkbox" 
                    .checked=${this.formatterUseArrayNotation||!1}
                    @change=${o=>{let l=o.target;this.formatterUseArrayNotation=l.checked,this.requestUpdate()}}
                    style="cursor: pointer;"
                  />
                  List all array items
                </label>
              </h4>
              <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background);">
                ${this.renderAvailableFields(s,"")}
              </div>
            </div>
            
            <!-- Selected Fields -->
            <div>
              <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">Selected Fields (drag to reorder)</h4>
              <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background-alt);">
                ${this.renderSelectedFieldsList()}
              </div>
            </div>
          </div>
        </div>

        ${this.formatterSelectedFields.size>0?v`
          <!-- New Configuration Preview -->
          <div class="form-group">
            <label class="control-label">New Configuration Preview</label>
            <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt); white-space: pre-line;">
              ${this.renderFormattedPreview(s)}
            </div>
          </div>

          <!-- Copy New Configuration -->
          <div class="form-group">
            <label class="control-label">Copy New Configuration</label>
            <div style="position: relative;">
              <textarea 
                class="form-control" 
                readonly
                rows="4"
                .value=${this.generateResponseConfigQuoted()}
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 100px; background: ${a.bg}; color: ${a.text}; border-color: ${a.border};"
              ></textarea>
              <button 
                class="btn" 
                style="position: absolute; top: 8px; right: 8px; padding: 6px 16px; font-size: 13px; background: ${a.btnBg}; color: ${a.btnText||"white"}; border: none; font-weight: 600;"
                @click=${()=>{let o=this.generateResponseConfigQuoted();this.copyToClipboard(o)}}
                title="Copy configuration to paste into ${t.charAt(0).toUpperCase()+t.slice(1)} Message property"
              >
                📋 Copy Config
              </button>
            </div>
            <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
              Copy this and paste into the <strong>${t.charAt(0).toUpperCase()+t.slice(1)} Message</strong> property in Plugin Properties
            </div>
          </div>
        `:""}
      </div>
    `}getPreviewForConfig(t,r){if(!t||t.trim().length===0)return v`<span style="font-style: italic; opacity: 0.6;">No configuration set</span>`;let s=this.value,i=b(d({},this.value),{data:JSON.stringify(r)});this.value=i;let a;if(t.trim().startsWith('{"fields"')||t.trim().startsWith('"{'))try{let o;if(t.startsWith('"{')&&t.endsWith('}"')){let l=t.slice(1,-1).replace(/\\"/g,'"');o=JSON.parse(l)}else o=JSON.parse(t);a=this.formatResponseWithConfig(o)}catch(o){a=t}else a=t;return this.value=s,a}loadConfigIntoFields(t){let r=t==="success"?this.successMessage:t==="warning"?this.warningMessage:this.errorMessage;if(this.formatterSelectedFields.clear(),this.formatterMessageTitle="",!r||r.trim().length===0){this.requestUpdate();return}try{let s;if(r.startsWith('"{')&&r.endsWith('}"')){let i=r.slice(1,-1).replace(/\\"/g,'"');s=JSON.parse(i)}else if(r.trim().startsWith('{"'))s=JSON.parse(r);else{this.requestUpdate();return}s.title&&(this.formatterMessageTitle=s.title),s.fields&&Array.isArray(s.fields)&&s.fields.forEach((i,a)=>{this.formatterSelectedFields.set(i.path,{title:i.title||i.path,checked:!0,order:a})})}catch(s){console.error("[Config Loading] Failed to parse config:",s)}this.requestUpdate()}renderAvailableFields(t,r){let s=[],i=(a,o)=>{a&&typeof a=="object"&&!Array.isArray(a)&&Object.keys(a).forEach(l=>{var m,S;let c=o?`${o}.${l}`:l,u=a[l];if(Array.isArray(u)&&u.length>0){if(this.formatterUseArrayNotation){let w=`${c}[*]`,M=((m=this.formatterSelectedFields.get(w))==null?void 0:m.checked)||!1,j=`Array with ${u.length} item${u.length>1?"s":""}`;s.push(v`
                <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${M?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                  <input 
                    type="checkbox" 
                    .checked=${M}
                    @change=${P=>{if(P.target.checked){let q=-1;this.formatterSelectedFields.forEach(Q=>{Q.order>q&&(q=Q.order)}),this.formatterSelectedFields.set(w,{title:l,checked:!0,order:q+1})}else this.formatterSelectedFields.delete(w);this.requestUpdate()}}
                    style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                  />
                  <div style="flex: 1; margin-left: 10px; min-width: 0;">
                    <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                      <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${w}</code>
                      <span style="margin-left: 6px; font-size: 11px; color: var(--ntx-form-theme-color-secondary);">📋 Array</span>
                    </div>
                    <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                      ${j}
                    </div>
                  </div>
                </div>
              `)}if(typeof u[0]=="object"&&!Array.isArray(u[0])){let w=this.formatterUseArrayNotation?`${c}[*]`:`${c}[0]`;i(u[0],w)}}else if(u!==null&&typeof u!="object"){let w=c,M=((S=this.formatterSelectedFields.get(w))==null?void 0:S.checked)||!1;s.push(v`
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${M?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${M}
                  @change=${j=>{if(j.target.checked){let $e=-1;this.formatterSelectedFields.forEach(q=>{q.order>$e&&($e=q.order)}),this.formatterSelectedFields.set(w,{title:w.split(".").pop()||w,checked:!0,order:$e+1})}else this.formatterSelectedFields.delete(w);this.requestUpdate()}}
                  style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                />
                <div style="flex: 1; margin-left: 10px; min-width: 0;">
                  <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${w}</code>
                  </div>
                  <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                    ${String(u).length>50?String(u).substring(0,50)+"...":String(u)}
                  </div>
                </div>
              </div>
            `)}else u&&typeof u=="object"&&!Array.isArray(u)&&i(u,c)})};return i(t,r),s.length>0?s:v`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`}renderSelectedFieldsList(){let t=Array.from(this.formatterSelectedFields.entries()).filter(([r,s])=>s.checked).sort((r,s)=>r[1].order-s[1].order);return t.length===0?v`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`:t.map(([r,s],i)=>v`
      <div 
        draggable="true"
        @dragstart=${a=>{a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("text/plain",i.toString())}}
        @dragover=${a=>{a.preventDefault(),a.dataTransfer.dropEffect="move"}}
        @drop=${a=>{a.preventDefault();let o=parseInt(a.dataTransfer.getData("text/plain")),l=i;if(o!==l){let c=Array.from(t),[u]=c.splice(o,1);c.splice(l,0,u),c.forEach(([m,S],w)=>{this.formatterSelectedFields.set(m,b(d({},S),{order:w}))}),this.requestUpdate()}}}
        style="
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          padding: 10px;
          background: var(--ntx-form-theme-color-background);
          border: 1px solid var(--ntx-form-theme-color-border);
          border-radius: 4px;
          cursor: move;
          transition: all 0.2s;
        "
        @mouseenter=${a=>{a.currentTarget.style.borderColor="var(--ntx-form-theme-color-primary)",a.currentTarget.style.boxShadow="0 2px 4px rgba(0,0,0,0.1)"}}
        @mouseleave=${a=>{a.currentTarget.style.borderColor="var(--ntx-form-theme-color-border)",a.currentTarget.style.boxShadow="none"}}
      >
        <div style="font-size: 16px; color: var(--ntx-form-theme-color-secondary); cursor: grab;" title="Drag to reorder">
          ⋮⋮
        </div>
        <div style="font-weight: 600; color: var(--ntx-form-theme-color-primary); min-width: 30px;">
          ${i+1}.
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-bottom: 4px; word-break: break-all;">
            <code style="font-size: 10px;">${r}</code>
          </div>
          <input 
            type="text" 
            class="form-control"
            placeholder="Display title"
            .value=${s.title}
            @input=${a=>{let o=a.target;this.formatterSelectedFields.set(r,b(d({},s),{title:o.value})),this.requestUpdate()}}
            style="font-size: 13px; padding: 6px 8px; height: auto;"
          />
        </div>
        <button
          @click=${()=>{this.formatterSelectedFields.delete(r),this.requestUpdate()}}
          style="
            background: var(--ntx-form-theme-color-error, #dc3545);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 6px 10px;
            cursor: pointer;
            font-size: 12px;
            transition: filter 0.2s;
          "
          @mouseenter=${a=>{a.currentTarget.style.filter="brightness(0.9)"}}
          @mouseleave=${a=>{a.currentTarget.style.filter="brightness(1)"}}
          title="Remove field"
        >
          ✕
        </button>
      </div>
    `)}renderFormattedPreview(t){let r=[];return this.formatterSelectedFields.forEach((s,i)=>{if(s.checked){let a=this.extractNestedValue(t,i),o=s.title||i;r.push(v`
          <div style="margin-bottom: 8px;">
            <strong>${o}:</strong> ${a!==void 0?String(a):"N/A"}
          </div>
        `)}}),r.length>0?r:v`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`}generateResponseConfig(){let t={};return this.formatterMessageTitle&&this.formatterMessageTitle.trim()&&(t.title=this.formatterMessageTitle.trim()),t.fields=[],Array.from(this.formatterSelectedFields.entries()).filter(([s,i])=>i.checked).sort((s,i)=>s[1].order-i[1].order).forEach(([s,i])=>{t.fields.push({path:s,title:i.title||s})}),JSON.stringify(t,null,2)}generateResponseConfigQuoted(){let t={};return this.formatterMessageTitle&&this.formatterMessageTitle.trim()&&(t.title=this.formatterMessageTitle.trim()),t.fields=[],Array.from(this.formatterSelectedFields.entries()).filter(([i,a])=>a.checked).sort((i,a)=>i[1].order-a[1].order).forEach(([i,a])=>{t.fields.push({path:i,title:a.title||i})}),`"${JSON.stringify(t).replace(/"/g,'\\"')}"`}formatValue(t){return typeof t=="boolean"?t.toString():typeof t=="string"?`"${t}"`:typeof t=="number"?t.toString():t===null?"null":t===void 0?"undefined":JSON.stringify(t)}formatJsonForDisplay(t){try{let r=JSON.parse(t);return JSON.stringify(r,null,2)}catch(r){return t}}isValidJson(t){if(!t.trim())return!0;try{return JSON.parse(t),!0}catch(r){return!1}}getJsonStatus(t){if(!t.trim())return"Empty";try{let r=JSON.parse(t),s=t.length,i=t.split(`
`).length,a=this.countJsonKeys(r);return`Valid JSON \u2022 ${s} chars \u2022 ${i} lines \u2022 ${a} keys`}catch(r){return`Invalid JSON \u2022 ${r.message}`}}countJsonKeys(t){return typeof t!="object"||t===null?0:Array.isArray(t)?t.reduce((r,s)=>r+this.countJsonKeys(s),0):Object.keys(t).length+Object.values(t).reduce((r,s)=>r+this.countJsonKeys(s),0)}formatJson(){if(this.isValidJson(this.requestBody))try{let t=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(t,null,2),this.requestUpdate()}catch(t){}}minifyJson(){if(this.isValidJson(this.requestBody))try{let t=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(t),this.requestUpdate()}catch(t){}}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){let t={startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:"req-"+Date.now()}}}};this.requestBody=JSON.stringify(t,null,2),this.requestUpdate()}handleJsonInput(t){let r=t.target;this.requestBody=r.value,this.requestUpdate()}handleJsonBlur(t){if(this.isValidJson(this.requestBody)&&this.requestBody.trim())try{let r=JSON.parse(this.requestBody),s=JSON.stringify(r,null,2);s!==this.requestBody&&(this.requestBody=s,this.requestUpdate())}catch(r){}}handleJsonPaste(t){setTimeout(()=>{this.isValidJson(this.requestBody)&&this.formatJson()},100)}renderJsonOutput(){if(!this.requestBody.trim())return"";let t="",r="",s="";try{let i=JSON.parse(this.requestBody);t=JSON.stringify(i),r='"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}catch(i){s=i.message}return v`
      <div class="form-group">
        <label class="control-label">Generated Output</label>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Minified JSON</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${t}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Escaped for Code</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${r}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
        </div>
        ${s?v`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${s}</div>`:""}
      </div>
    `}renderJsonPreview(){if(!this.requestBody.trim()||!this.isValidJson(this.requestBody))return"";try{let t=JSON.parse(this.requestBody);return v`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(t,0)}
          </div>
        </div>
      `}catch(t){return""}}renderJsonWithSyntaxHighlight(t,r=0){let s="  ".repeat(r);if(t===null)return'<span class="json-syntax-null">null</span>';if(typeof t=="string")return`<span class="json-syntax-string">"${t}"</span>`;if(typeof t=="number")return`<span class="json-syntax-number">${t}</span>`;if(typeof t=="boolean")return`<span class="json-syntax-boolean">${t}</span>`;if(Array.isArray(t))return t.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${t.map(a=>`${s}  ${this.renderJsonWithSyntaxHighlight(a,r+1)}`).join(`,
`)}
${s}<span class="json-syntax-punctuation">]</span>`;if(typeof t=="object"){let i=Object.keys(t);return i.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${i.map(o=>`${s}  <span class="json-syntax-key">"${o}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(t[o],r+1)}`).join(`,
`)}
${s}<span class="json-syntax-punctuation">}</span>`}return String(t)}static removeInstructionalPlaceholders(t){if(Array.isArray(t))return t.map(r=>this.removeInstructionalPlaceholders(r));if(t&&typeof t=="object"){let r={};for(let[s,i]of Object.entries(t)){if(typeof i=="string"&&/^<.*>$/.test(i.trim()))continue;let a=this.removeInstructionalPlaceholders(i);a!==void 0&&!(typeof a=="object"&&a!==null&&Object.keys(a).length===0)&&(r[s]=a)}return r}return t}async fetchOAuthToken(){let t=await fetch(this.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:this.clientId,client_secret:this.clientSecret})});if(!t.ok)throw new Error(`Token request failed with status ${t.status}`);let r=await t.json();if(!r.access_token)throw new Error("No access_token in response");return this.oauthTokenResponse={access_token:r.access_token,token_type:r.token_type||"Bearer",expires_in:r.expires_in,scope:r.scope,fetched_at:new Date().toISOString(),expires_at:r.expires_in?new Date(Date.now()+r.expires_in*1e3).toISOString():null},r.access_token}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let t=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{t=await this.fetchOAuthToken()}catch(a){let o=Date.now()-this.apiCallStartTime,l=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${a instanceof Error?a.message:String(a)}`,this.value={success:!1,valid:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:"",formattedResponse:this.errorMessage,timestamp:l,executionTime:o},this.isLoading=!1,this.requestUpdate();return}let r=this.apiUrl||"",s={};if(this.requestHeaders)try{s=JSON.parse(this.requestHeaders)}catch(a){s={},this.requestHeaders.split(/\r?\n/).forEach(o=>{let l=o.indexOf(":");if(l>-1){let c=o.slice(0,l).trim(),u=o.slice(l+1).trim();c&&(s[c]=u)}})}t&&t.trim()&&(s.Authorization=`Bearer ${t.trim()}`);let i;if(this.contentType==="application/x-www-form-urlencoded")i=this.requestBody||"";else if(this.contentType==="application/json")if(this.requestBody&&this.requestBody.trim())try{i=JSON.parse(this.requestBody)}catch(a){i=void 0}else i=void 0;else i=this.requestBody||"";await er({url:r,method:this.method||"POST",headers:s,requestBody:i,contentType:this.contentType,setLoading:a=>{this.isLoading=a,this.requestUpdate()},setResponse:(a,o,l)=>{let c=Date.now()-this.apiCallStartTime,u=new Date().toISOString();this.apiResponse=a,this.responseType=l===!1?"error":this.determineResponseType(a),this.formatterJsonInput=a,this.formatterSelectedFields.clear();let m,S,w="";try{let P=JSON.parse(a);P.access_token&&(m=P.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(S=this.extractNestedValue(P,this.outputValueKey)),w=this.extractNestedValue(P,"d.Message")||this.extractNestedValue(P,"Message")||this.extractNestedValue(P,"message")||this.extractNestedValue(P,"msg")||this.extractNestedValue(P,"data.message")||""}catch(P){}let M=this.getCustomMessage(this.responseType);this.value=d(d({success:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),valid:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:o!==void 0?o:this.responseType==="success"?200:500,responseType:this.responseType,data:a,message:w,formattedResponse:M.message,timestamp:u,executionTime:c},m&&{access_token:m}),S!==void 0&&{output:S}),(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),console.log("[Value Change] Value updated at:",new Date().toISOString()),this.requestUpdate(),(this.responseType==="success"||this.responseType==="warning")&&(console.log("[Value Change] Waiting 800ms for Nintex to process value change..."),setTimeout(()=>{console.log("[Value Change] Wait complete at:",new Date().toISOString(),"- proceeding with submission action"),this.handlePostSubmissionAction()},800))}})}determineResponseType(t){if(t.toLowerCase().includes("error:")||t.toLowerCase().includes("failed")||t.toLowerCase().includes("exception"))return"error";try{let r=JSON.parse(t);if(r.error||r.status==="error")return"error";if(r.warning||r.status==="warning")return"warning"}catch(r){}return"success"}extractNestedValue(t,r){if(t&&typeof t=="object"&&r in t)return t[r];let s=r.split("."),i=t,a=!1;for(let o=0;o<s.length;o++){let l=s[o],c=l.match(/^(.+)\[(\*|\d+)\]$/);if(c){let u=c[1],m=c[2];if(i&&typeof i=="object"&&u in i){let S=i[u];if(Array.isArray(S))if(m==="*"){let w=s.slice(o+1);if(w.length>0){let M=w.join(".");i=S.map(j=>this.extractNestedValue(j,M)).filter(j=>j!==void 0)}else i=S;a=!0;break}else i=S[parseInt(m)];else return}else return}else if(i&&typeof i=="object"&&l in i)i=i[l];else return}return i}async copyToClipboard(t){try{await navigator.clipboard.writeText(t)}catch(r){console.error("Failed to copy text:",r)}}handlePostSubmissionAction(){if(console.log("[Submission Action] Checking submission action:",this.submissionAction),this.submissionAction==="no-submit"){console.log("[Submission Action] No action configured");return}if(this.submissionAction==="quick-submit"){console.log("[Submission Action] Quick submit - triggering after 500ms"),setTimeout(()=>{this.submitNintexForm()},500);return}if(this.submissionAction==="delayed-submit"){console.log("[Submission Action] Delayed submit - starting countdown timer"),this.startDelayedSubmission();return}}submitNintexForm(){console.log("[Submission Action] Attempting to submit Nintex form");let t=document.querySelector("form");if(!t){console.error("[Submission Action] No form found");return}let r=t.querySelector('button[type="submit"]');r instanceof HTMLElement?(console.log("[Submission Action] Clicking submit button"),this.isFinalizingSubmission=!0,this.allowFormSubmit=!0,r.click(),setTimeout(()=>{this.allowFormSubmit=!1,this.isFinalizingSubmission=!1},1500)):(console.error("[Submission Action] No submit button found"),this.isFinalizingSubmission=!1)}startDelayedSubmission(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let t=this.countdownTimer*1e3,r=Date.now();this.delayedSubmissionStartTime=r;let s=()=>{let i=Date.now()-r;t-i<=0?(console.log("[Submission Action] Countdown complete - submitting form"),this.submitNintexForm(),this.cooldownTimerId=null,this.delayedSubmissionStartTime=0):(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(s,100))};console.log("[Submission Action] Starting delayed submission countdown for",this.countdownTimer,"seconds"),s()}startCooldownTimer(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let t=()=>{let s=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;s<i?(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(t,1e3)):(this.showCooldownAlert=!1,this.cooldownTimerId=null,this.requestUpdate())};this.cooldownTimerId=window.setTimeout(t,1e3)}disconnectedCallback(){super.disconnectedCallback(),this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null),this.validationModule.detach()}};$.styles=ut`
    .plugin-container {
      font-family: var(--ntx-form-theme-font-family);
      color: var(--ntx-form-theme-color-input-text);
    }

    .form-group {
      margin-bottom: 16px;
    }

    .control-label {
      display: block;
      margin-bottom: 8px;
      font-size: var(--ntx-form-theme-text-label-size);
      color: var(--ntx-form-theme-color-input-text);
      font-weight: 500;
    }

    .form-control {
      width: 100%;
      height: var(--ntx-form-theme-control-height, auto);
      padding: 8px 12px;
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      color: var(--ntx-form-theme-color-input-text);
      background-color: var(--ntx-form-theme-color-input-background);
      border: 1px solid var(--ntx-form-theme-color-border);
      border-radius: var(--ntx-form-theme-border-radius);
      box-sizing: border-box;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--ntx-form-theme-color-primary);
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    .btn {
      padding: 8px 16px;
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      border: none;
      border-radius: var(--ntx-form-theme-border-radius);
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;
    }

    .btn-primary {
      color: white;
      background-color: var(--ntx-form-theme-color-primary);
    }

    .btn-primary:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .text-danger {
      color: var(--ntx-form-theme-color-error);
      font-size: var(--ntx-form-theme-text-label-size);
      margin-top: 4px;
    }

    .alert {
      padding: 12px 16px;
      margin-top: 12px;
      border-radius: var(--ntx-form-theme-border-radius);
      font-size: var(--ntx-form-theme-text-label-size);
      font-family: var(--ntx-form-theme-font-family);
      user-select: text;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
    }

    .alert-before {
      margin-top: 0;
      margin-bottom: 12px;
    }

    .alert-success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .alert-warning {
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeaa7;
    }

    .alert-error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .alert-info {
      background-color: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }

    .alert-icon {
      margin-right: 8px;
      font-weight: bold;
    }

    .alert-response {
      margin-top: 8px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .alert-more-details {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .alert-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      gap: 12px;
    }

    .alert-footer-left {
      flex: 0 1 auto;
    }

    .alert-footer-right {
      flex: 0 0 auto;
      font-size: 12px;
      font-style: italic;
      color: inherit;
      opacity: 0.9;
    }

    .alert-more-details-toggle {
      color: inherit;
      text-decoration: underline;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      background: none;
      border: none;
      padding: 0;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .alert-more-details-toggle:hover {
      opacity: 0.8;
    }

    .alert-more-details-content {
      margin-top: 8px;
      padding: 8px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      max-height: 200px;
      overflow-y: auto;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .alert-more-details-wrapper {
      position: relative
    }

    .alert-more-details-copy {
      position: absolute;
      top: 8px;
      right: 20px;
      color: inherit;
      text-decoration: underline;
      cursor: pointer;
      font-size: 11px;
      font-weight: 500;
      background: white;
      padding: 2px 6px;
      border-radius: 3px;
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }

    .alert-more-details-copy:hover {
      opacity: 1;
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content {
      background: white;
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      width: 80%;
      min-width: 600px;
      max-width: 800px;
      max-height: 80vh;
      overflow-y: auto;
      animation: slideIn 0.3s ease;
      margin: 20px;
      position: relative;
      padding: 16px;
    }

    @media (max-width: 768px) {
      .modal-content {
        width: 80%;
        min-width: unset;
        max-width: unset;
      }
    }

    @keyframes slideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-close {
      position: absolute;
      top: 8px;
      right: 8px;
      background: white;
      border: none;
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background 0.2s ease;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .modal-close:hover {
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
    }

    .modal-content .alert {
      margin-top: 0;
    }

    /* Inline Alert Styles */
    .btn-alert-container {
      display: flex;
      gap: 12px;
    }

    .btn-alert-container.align-left {
      justify-content: flex-start;
      align-items: flex-start;
    }

    .btn-alert-container.align-center {
      justify-content: center;
      align-items: flex-start;
    }

    .btn-alert-container.align-right {
      justify-content: flex-end;
      align-items: flex-start;
    }

    .inline-alert {
      flex: 1;
      max-width: 400px;
    }

    .inline-alert.center {
      max-width: 300px;
    }

    .spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 8px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    pre.form-control {
      white-space: pre-wrap;
      word-wrap: break-word;
      min-height: 80px;
      font-family: 'Courier New', Courier, monospace;
    }

    textarea.form-control {
      resize: vertical;
    }

    .btn-container {
      display: flex;
    }

    .btn-container.align-left {
      justify-content: flex-start;
    }

    .btn-container.align-center {
      justify-content: center;
    }

    .btn-container.align-right {
      justify-content: flex-end;
    }

    /* Debug Tabs */
    .debug-tabs {
      margin-top: var(--ntx-form-theme-spacing-md, 16px);
    }

    .debug-version {
      margin-bottom: var(--ntx-form-theme-spacing-sm, 8px);
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
      opacity: 0.9;
    }

    .debug-tab-nav {
      display: flex;
      border-bottom: 1px solid var(--ntx-form-theme-tab-border, #dee2e6);
      margin-bottom: var(--ntx-form-theme-spacing-md, 16px);
    }

    .debug-tab-button {
      padding: var(--ntx-form-theme-spacing-sm, 8px) var(--ntx-form-theme-spacing-md, 16px);
      border: none;
      background: none;
      font-family: var(--ntx-form-theme-font-family);
      font-size: var(--ntx-form-theme-text-label-size, 14px);
      cursor: pointer;
      color: var(--ntx-form-theme-tab-inactive, #6c757d);
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
    }

    .debug-tab-button:hover {
      color: var(--ntx-form-theme-color-primary, #0078d4);
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
    }

    .debug-tab-button.active {
      color: var(--ntx-form-theme-tab-active, #0078d4);
      border-bottom-color: var(--ntx-form-theme-tab-active, #0078d4);
      font-weight: 500;
    }

    .debug-tab-content {
      display: none;
    }

    .debug-tab-content.active {
      display: block;
    }

    /* Debug Tables */
    .debug-table {
      width: 100%;
      border-collapse: collapse;
      font-family: var(--ntx-form-theme-font-family);
      font-size: var(--ntx-form-theme-text-input-size, 14px);
      background: var(--ntx-form-theme-color-background, #ffffff);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      overflow: hidden;
      box-shadow: var(--ntx-form-theme-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.05));
    }

    .debug-table th,
    .debug-table td {
      padding: var(--ntx-form-theme-spacing-sm, 8px) var(--ntx-form-theme-spacing-md, 16px);
      text-align: left;
      border-bottom: 1px solid var(--ntx-form-theme-table-border, #dee2e6);
    }

    .debug-table th {
      background-color: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    .debug-table tr:nth-child(even) {
      background-color: var(--ntx-form-theme-table-stripe, #f8f9fa);
    }

    .debug-table tr:hover {
      background-color: var(--ntx-form-theme-table-hover, #e9ecef);
    }

    .debug-table .property-name {
      font-weight: 500;
      color: var(--ntx-form-theme-color-primary, #0078d4);
    }

    .debug-table .value-default {
      font-style: italic;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
    }

    .debug-table .value-current {
      font-weight: 500;
    }

    .debug-table .value-json {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      padding: 4px 8px;
      border-radius: 3px;
      max-width: 300px;
      word-break: break-all;
    }

    .debug-json {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      padding: 8px;
      border-radius: 3px;
      white-space: pre-wrap;
      word-break: break-all;
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      margin: 0;
      user-select: text;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
    }

    .debug-json-container {
      position: relative;
    }

    .debug-json-copy-btn {
      position: absolute;
      top: 4px;
      right: 4px;
      padding: 4px 8px;
      font-size: 11px;
      background: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .debug-json-container:hover .debug-json-copy-btn {
      opacity: 1;
    }

    .debug-json-copy-btn:hover {
      filter: brightness(1.1);
    }

    .debug-json-copy-btn:active {
      transform: scale(0.95);
    }

    .debug-table td {
      vertical-align: top;
      max-width: 400px;
      word-wrap: break-word;
    }

    /* JSON Editor Enhancements */
    .json-editor-container {
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      overflow: hidden;
      background: var(--ntx-form-theme-color-input-background, #ffffff);
    }

    .json-editor-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      border-bottom: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      font-size: 12px;
    }

    .json-editor-actions {
      display: flex;
      gap: 8px;
    }

    .json-editor-btn {
      padding: 4px 8px;
      font-size: 11px;
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      background: white;
      border-radius: 3px;
      cursor: pointer;
      color: var(--ntx-form-theme-color-input-text, #333333);
      transition: all 0.2s ease;
    }

    .json-editor-btn:hover {
      background: var(--ntx-form-theme-color-primary, #0078d4);
      color: white;
      border-color: var(--ntx-form-theme-color-primary, #0078d4);
    }

    .json-editor-status {
      font-size: 11px;
      color: var(--ntx-form-theme-color-secondary, #6c757d);
    }

    .json-editor-status.valid {
      color: #28a745;
    }

    .json-editor-status.invalid {
      color: var(--ntx-form-theme-color-error, #dc3545);
    }

    .json-editor-textarea {
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.5;
      padding: 12px;
      border: none;
      resize: vertical;
      background: transparent;
      color: var(--ntx-form-theme-color-input-text, #333333);
      min-height: 200px;
      tab-size: 2;
    }

    .json-editor-textarea:focus {
      outline: none;
    }

    .json-viewer {
      background: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      border: 1px solid var(--ntx-form-theme-color-border, #dee2e6);
      border-radius: var(--ntx-form-theme-border-radius, 4px);
      padding: 12px;
      font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
      font-size: 12px;
      white-space: pre;
      overflow-x: auto;
      max-height: 300px;
      overflow-y: auto;
    }

    .json-syntax-string { color: #032f62; }
    .json-syntax-number { color: #005cc5; }
    .json-syntax-boolean { color: #d73a49; }
    .json-syntax-null { color: #6f42c1; }
    .json-syntax-key { color: #22863a; font-weight: 500; }
    .json-syntax-punctuation { color: #24292e; }
  `,C([E({type:String})],$.prototype,"label",2),C([E({type:String})],$.prototype,"description",2),C([E({type:Boolean})],$.prototype,"readOnly",2),C([E({type:Object})],$.prototype,"value",1),C([E({type:String})],$.prototype,"requestBody",2),C([E({type:String})],$.prototype,"apiUrl",2),C([E({type:String})],$.prototype,"requestHeaders",2),C([E({type:String})],$.prototype,"bearerToken",2),C([E({type:String})],$.prototype,"tokenUrl",2),C([E({type:String})],$.prototype,"clientId",2),C([E({type:String})],$.prototype,"clientSecret",2),C([E({type:String})],$.prototype,"outputValueKey",2),C([E({type:String})],$.prototype,"contentType",2),C([E({type:Boolean,reflect:!0})],$.prototype,"debugMode",2),C([E({type:String})],$.prototype,"method",2),C([E({type:String})],$.prototype,"successMessage",2),C([E({type:String})],$.prototype,"warningMessage",2),C([E({type:String})],$.prototype,"errorMessage",2),C([E({type:Boolean,reflect:!0,attribute:"send-api-call"})],$.prototype,"sendAPICall",2),C([E({type:Boolean,reflect:!0,attribute:"allow-multiple-api-calls"})],$.prototype,"allowMultipleAPICalls",2),C([E({type:Boolean,reflect:!0,attribute:"countdown-enabled"})],$.prototype,"countdownEnabled",2),C([E({type:Number})],$.prototype,"countdownTimer",2),C([E({type:Boolean,reflect:!0,attribute:"btn-enabled"})],$.prototype,"btnEnabled",1),C([E({type:String,reflect:!0,attribute:"btn-text"})],$.prototype,"btnText",2),C([E({type:String,reflect:!0,attribute:"btn-alignment"})],$.prototype,"btnAlignment",2),C([E({type:Boolean,reflect:!0,attribute:"btn-visible"})],$.prototype,"btnVisible",1),C([E({type:String,reflect:!0,attribute:"submission-action"})],$.prototype,"submissionAction",2),C([E({type:Boolean,reflect:!0,attribute:"submit-hidden"})],$.prototype,"submitHidden",2),C([E({type:String,reflect:!0,attribute:"show-more-details"})],$.prototype,"showMoreDetails",2),C([E({type:String,reflect:!0,attribute:"alert-position"})],$.prototype,"alertPosition",2),$=C([tr("daf-webrequest-plugin")],$);export{$ as DafWebRequestPlugin};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
