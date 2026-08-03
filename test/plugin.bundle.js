var gt=Object.defineProperty,is=Object.defineProperties,os=Object.getOwnPropertyDescriptor,as=Object.getOwnPropertyDescriptors;var Lt=Object.getOwnPropertySymbols;var ls=Object.prototype.hasOwnProperty,cs=Object.prototype.propertyIsEnumerable;var Ut=(s,e,t)=>e in s?gt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))ls.call(e,t)&&Ut(s,t,e[t]);if(Lt)for(var t of Lt(e))cs.call(e,t)&&Ut(s,t,e[t]);return s},b=(s,e)=>is(s,as(e));var ds=(s,e)=>{for(var t in e)gt(s,t,{get:e[t],enumerable:!0})};var $=(s,e,t,r)=>{for(var n=r>1?void 0:r?os(e,t):e,i=s.length-1,o;i>=0;i--)(o=s[i])&&(n=(r?o(e,t,n):o(n))||n);return r&&n&&gt(e,t,n),n};var et=globalThis,tt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),zt=new WeakMap,Ue=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tt&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=zt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&zt.set(t,e))}return e}toString(){return this.cssText}},Ht=s=>new Ue(typeof s=="string"?s:s+"",void 0,yt),vt=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((r,n,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[i+1],s[0]);return new Ue(t,s,yt)},Dt=(s,e)=>{if(tt)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),n=et.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,s.appendChild(r)}},bt=tt?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Ht(t)})(s):s;var{is:us,defineProperty:ps,getOwnPropertyDescriptor:hs,getOwnPropertyNames:ms,getOwnPropertySymbols:fs,getPrototypeOf:gs}=Object,ee=globalThis,Bt=ee.trustedTypes,ys=Bt?Bt.emptyScript:"",xt=ee.reactiveElementPolyfillSupport,ze=(s,e)=>s,He={toAttribute(s,e){switch(e){case Boolean:s=s?ys:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch(r){t=null}}return t}},rt=(s,e)=>!us(s,e),Jt={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:rt},qt,Zt;(qt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Zt=ee.litPropertyMetadata)!=null||(ee.litPropertyMetadata=new WeakMap);var q=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Jt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&ps(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){var o;let{get:n,set:i}=(o=hs(this.prototype,e))!=null?o:{get(){return this[t]},set(a){this[t]=a}};return{get:n,set(a){let l=n==null?void 0:n.call(this);i==null||i.call(this,a),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Jt}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;let e=gs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){let t=this.properties,r=[...ms(t),...fs(t)];for(let n of r)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift(bt(n))}else e!==void 0&&t.push(bt(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Dt(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var i;let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){let o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:He).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i,o,a,l;let r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let c=r.getPropertyOptions(n),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((i=c.converter)==null?void 0:i.fromAttribute)!==void 0?c.converter:He;this._$Em=n,this[n]=(l=(a=p.fromAttribute(t,c.type))!=null?a:(o=this._$Ej)==null?void 0:o.get(n))!=null?l:null,this._$Em=null}}requestUpdate(e,t,r){var n,i;if(e!==void 0){let o=this.constructor,a=this[e];if(r!=null||(r=o.getPropertyOptions(e)),!(((n=r.hasChanged)!=null?n:rt)(a,t)||r.useDefault&&r.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:i},o){var a,l,c;r&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(l=o!=null?o:t)!=null?l:this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((r=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:l}=a,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},Yt;q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[ze("elementProperties")]=new Map,q[ze("finalized")]=new Map,xt==null||xt({ReactiveElement:q}),((Yt=ee.reactiveElementVersions)!=null?Yt:ee.reactiveElementVersions=[]).push("2.1.0");var Be=globalThis,st=Be.trustedTypes,Gt=st?st.createPolicy("lit-html",{createHTML:s=>s}):void 0,rr="$lit$",te=`lit$${Math.random().toFixed(9).slice(2)}$`,sr="?"+te,vs=`<${sr}>`,de=document,Je=()=>de.createComment(""),qe=s=>s===null||typeof s!="object"&&typeof s!="function",$t=Array.isArray,bs=s=>$t(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",_t=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kt=/-->/g,Qt=/>/g,le=RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xt=/'/g,Wt=/"/g,nr=/^(?:script|style|textarea|title)$/i,Et=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),y=Et(1),Gn=Et(2),Kn=Et(3),Z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),er=new WeakMap,ce=de.createTreeWalker(de,129);function ir(s,e){if(!$t(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gt!==void 0?Gt.createHTML(e):e}var xs=(s,e)=>{let t=s.length-1,r=[],n,i=e===2?"<svg>":e===3?"<math>":"",o=De;for(let a=0;a<t;a++){let l=s[a],c,p,g=-1,k=0;for(;k<l.length&&(o.lastIndex=k,p=o.exec(l),p!==null);)k=o.lastIndex,o===De?p[1]==="!--"?o=Kt:p[1]!==void 0?o=Qt:p[2]!==void 0?(nr.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=le):p[3]!==void 0&&(o=le):o===le?p[0]===">"?(o=n!=null?n:De,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?le:p[3]==='"'?Wt:Xt):o===Wt||o===Xt?o=le:o===Kt||o===Qt?o=De:(o=le,n=void 0);let C=o===le&&s[a+1].startsWith("/>")?" ":"";i+=o===De?l+vs:g>=0?(r.push(c),l.slice(0,g)+rr+l.slice(g)+te+C):l+te+(g===-2?a:C)}return[ir(s,i+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Ze=class s{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0,a=e.length-1,l=this.parts,[c,p]=xs(e,t);if(this.el=s.createElement(c,r),ce.currentNode=this.el.content,t===2||t===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(n=ce.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let g of n.getAttributeNames())if(g.endsWith(rr)){let k=p[o++],C=n.getAttribute(g).split(te),I=/([.?@])?(.*)/.exec(k);l.push({type:1,index:i,name:I[2],strings:C,ctor:I[1]==="."?St:I[1]==="?"?At:I[1]==="@"?Ct:Me}),n.removeAttribute(g)}else g.startsWith(te)&&(l.push({type:6,index:i}),n.removeAttribute(g));if(nr.test(n.tagName)){let g=n.textContent.split(te),k=g.length-1;if(k>0){n.textContent=st?st.emptyScript:"";for(let C=0;C<k;C++)n.append(g[C],Je()),ce.nextNode(),l.push({type:2,index:++i});n.append(g[k],Je())}}}else if(n.nodeType===8)if(n.data===sr)l.push({type:2,index:i});else{let g=-1;for(;(g=n.data.indexOf(te,g+1))!==-1;)l.push({type:7,index:i}),g+=te.length-1}i++}}static createElement(e,t){let r=de.createElement("template");return r.innerHTML=e,r}};function Ee(s,e,t=s,r){var o,a,l;if(e===Z)return e;let n=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl,i=qe(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),i===void 0?n=void 0:(n=new i(s),n._$AT(s,t,r)),r!==void 0?((l=t._$Co)!=null?l:t._$Co=[])[r]=n:t._$Cl=n),n!==void 0&&(e=Ee(s,n._$AS(s,e.values),n,r)),e}var Tt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;let{el:{content:t},parts:r}=this._$AD,n=((c=e==null?void 0:e.creationScope)!=null?c:de).importNode(t,!0);ce.currentNode=n;let i=ce.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let p;l.type===2?p=new Ye(i,i.nextSibling,this,e):l.type===1?p=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(p=new kt(i,this,e)),this._$AV.push(p),l=r[++a]}o!==(l==null?void 0:l.index)&&(i=ce.nextNode(),o++)}return ce.currentNode=de,n}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ye=class s{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,r,n){var i;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(i=n==null?void 0:n.isConnected)!=null?i:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ee(this,e,t),qe(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(de.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ze.createElement(ir(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(t);else{let o=new Tt(n,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=er.get(e.strings);return t===void 0&&er.set(e.strings,t=new Ze(e)),t}k(e){$t(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new s(this.O(Je()),this.O(Je()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=M}_$AI(e,t=this,r,n){let i=this.strings,o=!1;if(i===void 0)e=Ee(this,e,t,0),o=!qe(e)||e!==this._$AH&&e!==Z,o&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Ee(this,a[r+l],t,l),c===Z&&(c=this._$AH[l]),o||(o=!qe(c)||c!==this._$AH[l]),c===M?e=M:e!==M&&(e+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!n&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},St=class extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},At=class extends Me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Ct=class extends Me{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var o;if((e=(o=Ee(this,e,t,0))!=null?o:M)===Z)return;let r=this._$AH,n=e===M&&r!==M||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==M&&(r===M||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)==null?void 0:t.host)!=null?r:this.element,e):this._$AH.handleEvent(e)}},kt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};var wt=Be.litHtmlPolyfillSupport,tr;wt==null||wt(Ze,Ye),((tr=Be.litHtmlVersions)!=null?tr:Be.litHtmlVersions=[]).push("3.3.0");var or=(s,e,t)=>{var i,o;let r=(i=t==null?void 0:t.renderBefore)!=null?i:e,n=r._$litPart$;if(n===void 0){let a=(o=t==null?void 0:t.renderBefore)!=null?o:null;r._$litPart$=n=new Ye(e.insertBefore(Je(),a),a,void 0,t!=null?t:{})}return n._$AI(s),n};var ue=globalThis,re=class extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;let e=super.createRenderRoot();return(r=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=or(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Z}},ar;re._$litElement$=!0,re.finalized=!0,(ar=ue.litElementHydrateSupport)==null||ar.call(ue,{LitElement:re});var Mt=ue.litElementPolyfillSupport;Mt==null||Mt({LitElement:re});var lr;((lr=ue.litElementVersions)!=null?lr:ue.litElementVersions=[]).push("4.2.0");var cr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dr=s=>(...e)=>({_$litDirective$:s,values:e}),nt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Ge=class extends nt{constructor(e){if(super(e),this.it=M,e.type!==cr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===M||e==null)return this._t=void 0,this.it=e;if(e===Z)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ge.directiveName="unsafeHTML",Ge.resultType=1;var ur=dr(Ge);async function pr({url:s,method:e="POST",headers:t={},requestBody:r,contentType:n="application/json",timeoutSeconds:i=30,setLoading:o,setResponse:a}){let l=Number.isFinite(i)&&i>0?i:null,c=new AbortController,p=!1,g=l===null?null:window.setTimeout(()=>{p=!0,c.abort()},l*1e3);o(!0);try{let k,C=d({Accept:"application/json"},t);["POST","PUT","PATCH","DELETE"].includes(e.toUpperCase())&&r!=null&&r!==""&&(n==="application/json"?(C["Content-Type"]="application/json",k=typeof r=="string"?r:JSON.stringify(r)):n==="application/x-www-form-urlencoded"?(C["Content-Type"]="application/x-www-form-urlencoded",typeof r=="string"?k=r:typeof r=="object"&&r!==null&&(k=Object.keys(r).map(ae=>`${encodeURIComponent(ae)}=${encodeURIComponent(r[ae])}`).join("&"))):(C["Content-Type"]=n,k=typeof r=="string"?r:JSON.stringify(r)));let I=await fetch(s,{method:e,headers:C,body:k,signal:c.signal}),W=await I.text();a(W,I.status,I.ok)}catch(k){let C=p&&l!==null?`Request timed out after ${l} seconds.`:"Error: "+((k==null?void 0:k.message)||k);a(C,0,!1)}finally{g!==null&&window.clearTimeout(g),o(!1)}}var hr=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};var _s={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:rt},ws=(s=_s,e,t)=>{let{kind:r,metadata:n}=t,i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(t.name,s),r==="accessor"){let{name:o}=t;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,s)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(r==="setter"){let{name:o}=t;return function(a){let l=this[o];e.call(this,a),this.requestUpdate(o,l,s)}}throw Error("Unsupported decorator location: "+r)};function E(s){return(e,t)=>typeof t=="object"?ws(s,e,t):((r,n,i)=>{let o=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(n,i):void 0})(s,e,t)}var h={};ds(h,{BRAND:()=>Ys,DIRTY:()=>pe,EMPTY_PATH:()=>Cs,INVALID:()=>x,NEVER:()=>On,OK:()=>O,ParseStatus:()=>R,Schema:()=>S,ZodAny:()=>ie,ZodArray:()=>Q,ZodBigInt:()=>me,ZodBoolean:()=>fe,ZodBranded:()=>Qe,ZodCatch:()=>Ce,ZodDate:()=>ge,ZodDefault:()=>Ae,ZodDiscriminatedUnion:()=>lt,ZodEffects:()=>L,ZodEnum:()=>Te,ZodError:()=>P,ZodFirstPartyTypeKind:()=>_,ZodFunction:()=>dt,ZodIntersection:()=>xe,ZodIssueCode:()=>u,ZodLazy:()=>_e,ZodLiteral:()=>we,ZodMap:()=>Fe,ZodNaN:()=>je,ZodNativeEnum:()=>Se,ZodNever:()=>z,ZodNull:()=>ve,ZodNullable:()=>J,ZodNumber:()=>he,ZodObject:()=>F,ZodOptional:()=>V,ZodParsedType:()=>f,ZodPipeline:()=>Xe,ZodPromise:()=>oe,ZodReadonly:()=>ke,ZodRecord:()=>ct,ZodSchema:()=>S,ZodSet:()=>Ve,ZodString:()=>ne,ZodSymbol:()=>Ne,ZodTransformer:()=>L,ZodTuple:()=>B,ZodType:()=>S,ZodUndefined:()=>ye,ZodUnion:()=>be,ZodUnknown:()=>K,ZodVoid:()=>Pe,addIssueToContext:()=>m,any:()=>sn,array:()=>ln,bigint:()=>Xs,boolean:()=>Sr,coerce:()=>Rn,custom:()=>_r,date:()=>Ws,datetimeRegex:()=>br,defaultErrorMap:()=>Y,discriminatedUnion:()=>pn,effect:()=>Sn,enum:()=>_n,function:()=>vn,getErrorMap:()=>Ie,getParsedType:()=>D,instanceof:()=>Ks,intersection:()=>hn,isAborted:()=>ot,isAsync:()=>Re,isDirty:()=>at,isValid:()=>se,late:()=>Gs,lazy:()=>bn,literal:()=>xn,makeIssue:()=>Ke,map:()=>gn,nan:()=>Qs,nativeEnum:()=>wn,never:()=>on,null:()=>rn,nullable:()=>Cn,number:()=>Tr,object:()=>cn,objectUtil:()=>It,oboolean:()=>In,onumber:()=>Mn,optional:()=>An,ostring:()=>En,pipeline:()=>$n,preprocess:()=>kn,promise:()=>Tn,quotelessJson:()=>Ts,record:()=>fn,set:()=>yn,setErrorMap:()=>As,strictObject:()=>dn,string:()=>wr,symbol:()=>en,transformer:()=>Sn,tuple:()=>mn,undefined:()=>tn,union:()=>un,unknown:()=>nn,util:()=>A,void:()=>an});var A;(function(s){s.assertEqual=n=>{};function e(n){}s.assertIs=e;function t(n){throw new Error}s.assertNever=t,s.arrayToEnum=n=>{let i={};for(let o of n)i[o]=o;return i},s.getValidEnumValues=n=>{let i=s.objectKeys(n).filter(a=>typeof n[n[a]]!="number"),o={};for(let a of i)o[a]=n[a];return s.objectValues(o)},s.objectValues=n=>s.objectKeys(n).map(function(i){return n[i]}),s.objectKeys=typeof Object.keys=="function"?n=>Object.keys(n):n=>{let i=[];for(let o in n)Object.prototype.hasOwnProperty.call(n,o)&&i.push(o);return i},s.find=(n,i)=>{for(let o of n)if(i(o))return o},s.isInteger=typeof Number.isInteger=="function"?n=>Number.isInteger(n):n=>typeof n=="number"&&Number.isFinite(n)&&Math.floor(n)===n;function r(n,i=" | "){return n.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}s.joinValues=r,s.jsonStringifyReplacer=(n,i)=>typeof i=="bigint"?i.toString():i})(A||(A={}));var It;(function(s){s.mergeShapes=(e,t)=>d(d({},e),t)})(It||(It={}));var f=A.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),D=s=>{switch(typeof s){case"undefined":return f.undefined;case"string":return f.string;case"number":return Number.isNaN(s)?f.nan:f.number;case"boolean":return f.boolean;case"function":return f.function;case"bigint":return f.bigint;case"symbol":return f.symbol;case"object":return Array.isArray(s)?f.array:s===null?f.null:s.then&&typeof s.then=="function"&&s.catch&&typeof s.catch=="function"?f.promise:typeof Map!="undefined"&&s instanceof Map?f.map:typeof Set!="undefined"&&s instanceof Set?f.set:typeof Date!="undefined"&&s instanceof Date?f.date:f.object;default:return f.unknown}};var u=A.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Ts=s=>JSON.stringify(s,null,2).replace(/"([^"]+)":/g,"$1:"),P=class s extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){let t=e||function(i){return i.message},r={_errors:[]},n=i=>{for(let o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(n);else if(o.code==="invalid_return_type")n(o.returnTypeError);else if(o.code==="invalid_arguments")n(o.argumentsError);else if(o.path.length===0)r._errors.push(t(o));else{let a=r,l=0;for(;l<o.path.length;){let c=o.path[l];l===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(t(o))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return n(this),r}static assert(e){if(!(e instanceof s))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,A.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){let t={},r=[];for(let n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):r.push(e(n));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}};P.create=s=>new P(s);var Ss=(s,e)=>{let t;switch(s.code){case u.invalid_type:s.received===f.undefined?t="Required":t=`Expected ${s.expected}, received ${s.received}`;break;case u.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(s.expected,A.jsonStringifyReplacer)}`;break;case u.unrecognized_keys:t=`Unrecognized key(s) in object: ${A.joinValues(s.keys,", ")}`;break;case u.invalid_union:t="Invalid input";break;case u.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${A.joinValues(s.options)}`;break;case u.invalid_enum_value:t=`Invalid enum value. Expected ${A.joinValues(s.options)}, received '${s.received}'`;break;case u.invalid_arguments:t="Invalid function arguments";break;case u.invalid_return_type:t="Invalid function return type";break;case u.invalid_date:t="Invalid date";break;case u.invalid_string:typeof s.validation=="object"?"includes"in s.validation?(t=`Invalid input: must include "${s.validation.includes}"`,typeof s.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${s.validation.position}`)):"startsWith"in s.validation?t=`Invalid input: must start with "${s.validation.startsWith}"`:"endsWith"in s.validation?t=`Invalid input: must end with "${s.validation.endsWith}"`:A.assertNever(s.validation):s.validation!=="regex"?t=`Invalid ${s.validation}`:t="Invalid";break;case u.too_small:s.type==="array"?t=`Array must contain ${s.exact?"exactly":s.inclusive?"at least":"more than"} ${s.minimum} element(s)`:s.type==="string"?t=`String must contain ${s.exact?"exactly":s.inclusive?"at least":"over"} ${s.minimum} character(s)`:s.type==="number"?t=`Number must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${s.minimum}`:s.type==="date"?t=`Date must be ${s.exact?"exactly equal to ":s.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(s.minimum))}`:t="Invalid input";break;case u.too_big:s.type==="array"?t=`Array must contain ${s.exact?"exactly":s.inclusive?"at most":"less than"} ${s.maximum} element(s)`:s.type==="string"?t=`String must contain ${s.exact?"exactly":s.inclusive?"at most":"under"} ${s.maximum} character(s)`:s.type==="number"?t=`Number must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}`:s.type==="bigint"?t=`BigInt must be ${s.exact?"exactly":s.inclusive?"less than or equal to":"less than"} ${s.maximum}`:s.type==="date"?t=`Date must be ${s.exact?"exactly":s.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(s.maximum))}`:t="Invalid input";break;case u.custom:t="Invalid input";break;case u.invalid_intersection_types:t="Intersection results could not be merged";break;case u.not_multiple_of:t=`Number must be a multiple of ${s.multipleOf}`;break;case u.not_finite:t="Number must be finite";break;default:t=e.defaultError,A.assertNever(s)}return{message:t}},Y=Ss;var mr=Y;function As(s){mr=s}function Ie(){return mr}var Ke=s=>{let{data:e,path:t,errorMaps:r,issueData:n}=s,i=[...t,...n.path||[]],o=b(d({},n),{path:i});if(n.message!==void 0)return b(d({},n),{path:i,message:n.message});let a="",l=r.filter(c=>!!c).slice().reverse();for(let c of l)a=c(o,{data:e,defaultError:a}).message;return b(d({},n),{path:i,message:a})},Cs=[];function m(s,e){let t=Ie(),r=Ke({issueData:e,data:s.data,path:s.path,errorMaps:[s.common.contextualErrorMap,s.schemaErrorMap,t,t===Y?void 0:Y].filter(n=>!!n)});s.common.issues.push(r)}var R=class s{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let n of t){if(n.status==="aborted")return x;n.status==="dirty"&&e.dirty(),r.push(n.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let n of t){let i=await n.key,o=await n.value;r.push({key:i,value:o})}return s.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let n of t){let{key:i,value:o}=n;if(i.status==="aborted"||o.status==="aborted")return x;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value!="undefined"||n.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}},x=Object.freeze({status:"aborted"}),pe=s=>({status:"dirty",value:s}),O=s=>({status:"valid",value:s}),ot=s=>s.status==="aborted",at=s=>s.status==="dirty",se=s=>s.status==="valid",Re=s=>typeof Promise!="undefined"&&s instanceof Promise;var v;(function(s){s.errToObj=e=>typeof e=="string"?{message:e}:e||{},s.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(v||(v={}));var j=class{constructor(e,t,r,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=n}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},fr=(s,e)=>{if(se(e))return{success:!0,data:e.value};if(!s.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new P(s.common.issues);return this._error=t,this._error}}};function w(s){if(!s)return{};let{errorMap:e,invalid_type_error:t,required_error:r,description:n}=s;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:n}:{errorMap:(o,a)=>{var c,p;let{message:l}=s;return o.code==="invalid_enum_value"?{message:l!=null?l:a.defaultError}:typeof a.data=="undefined"?{message:(c=l!=null?l:r)!=null?c:a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:(p=l!=null?l:t)!=null?p:a.defaultError}},description:n}}var S=class{get description(){return this._def.description}_getType(e){return D(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:D(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new R,ctx:{common:e.parent.common,data:e.data,parsedType:D(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(Re(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var i;let r={common:{issues:[],async:(i=t==null?void 0:t.async)!=null?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)},n=this._parseSync({data:e,path:r.path,parent:r});return fr(r,n)}"~validate"(e){var r,n;let t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)};if(!this["~standard"].async)try{let i=this._parseSync({data:e,path:[],parent:t});return se(i)?{value:i.value}:{issues:t.common.issues}}catch(i){(n=(r=i==null?void 0:i.message)==null?void 0:r.toLowerCase())!=null&&n.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(i=>se(i)?{value:i.value}:{issues:t.common.issues})}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:D(e)},n=this._parse({data:e,path:r.path,parent:r}),i=await(Re(n)?n:Promise.resolve(n));return fr(r,i)}refine(e,t){let r=n=>typeof t=="string"||typeof t=="undefined"?{message:t}:typeof t=="function"?t(n):t;return this._refinement((n,i)=>{let o=e(n),a=()=>i.addIssue(d({code:u.custom},r(n)));return typeof Promise!="undefined"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,t){return this._refinement((r,n)=>e(r)?!0:(n.addIssue(typeof t=="function"?t(r,n):t),!1))}_refinement(e){return new L({schema:this,typeName:_.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return V.create(this,this._def)}nullable(){return J.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Q.create(this)}promise(){return oe.create(this,this._def)}or(e){return be.create([this,e],this._def)}and(e){return xe.create(this,e,this._def)}transform(e){return new L(b(d({},w(this._def)),{schema:this,typeName:_.ZodEffects,effect:{type:"transform",transform:e}}))}default(e){let t=typeof e=="function"?e:()=>e;return new Ae(b(d({},w(this._def)),{innerType:this,defaultValue:t,typeName:_.ZodDefault}))}brand(){return new Qe(d({typeName:_.ZodBranded,type:this},w(this._def)))}catch(e){let t=typeof e=="function"?e:()=>e;return new Ce(b(d({},w(this._def)),{innerType:this,catchValue:t,typeName:_.ZodCatch}))}describe(e){let t=this.constructor;return new t(b(d({},this._def),{description:e}))}pipe(e){return Xe.create(this,e)}readonly(){return ke.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},ks=/^c[^\s-]{8,}$/i,$s=/^[0-9a-z]+$/,Es=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Ms=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Is=/^[a-z0-9_-]{21}$/i,Rs=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Os=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Ns=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Ps="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Rt,Fs=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Vs=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,js=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Ls=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Us=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,zs=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,yr="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Hs=new RegExp(`^${yr}$`);function vr(s){let e="[0-5]\\d";s.precision?e=`${e}\\.\\d{${s.precision}}`:s.precision==null&&(e=`${e}(\\.\\d+)?`);let t=s.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Ds(s){return new RegExp(`^${vr(s)}$`)}function br(s){let e=`${yr}T${vr(s)}`,t=[];return t.push(s.local?"Z?":"Z"),s.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Bs(s,e){return!!((e==="v4"||!e)&&Fs.test(s)||(e==="v6"||!e)&&js.test(s))}function Js(s,e){if(!Rs.test(s))return!1;try{let[t]=s.split("."),r=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),n=JSON.parse(atob(r));return!(typeof n!="object"||n===null||"typ"in n&&(n==null?void 0:n.typ)!=="JWT"||!n.alg||e&&n.alg!==e)}catch(t){return!1}}function qs(s,e){return!!((e==="v4"||!e)&&Vs.test(s)||(e==="v6"||!e)&&Ls.test(s))}var ne=class s extends S{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==f.string){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_type,expected:f.string,received:i.parsedType}),x}let r=new R,n;for(let i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){let o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(n=this._getOrReturnCtx(e,n),o?m(n,{code:u.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&m(n,{code:u.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")Ns.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"email",code:u.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Rt||(Rt=new RegExp(Ps,"u")),Rt.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"emoji",code:u.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Ms.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"uuid",code:u.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")Is.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"nanoid",code:u.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")ks.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"cuid",code:u.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")$s.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"cuid2",code:u.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")Es.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"ulid",code:u.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch(o){n=this._getOrReturnCtx(e,n),m(n,{validation:"url",code:u.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"regex",code:u.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?br(i).test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?Hs.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?Ds(i).test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?Os.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"duration",code:u.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?Bs(e.data,i.version)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"ip",code:u.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?Js(e.data,i.alg)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"jwt",code:u.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?qs(e.data,i.version)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"cidr",code:u.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?Us.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"base64",code:u.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?zs.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"base64url",code:u.invalid_string,message:i.message}),r.dirty()):A.assertNever(i);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(n=>e.test(n),d({validation:t,code:u.invalid_string},v.errToObj(r)))}_addCheck(e){return new s(b(d({},this._def),{checks:[...this._def.checks,e]}))}email(e){return this._addCheck(d({kind:"email"},v.errToObj(e)))}url(e){return this._addCheck(d({kind:"url"},v.errToObj(e)))}emoji(e){return this._addCheck(d({kind:"emoji"},v.errToObj(e)))}uuid(e){return this._addCheck(d({kind:"uuid"},v.errToObj(e)))}nanoid(e){return this._addCheck(d({kind:"nanoid"},v.errToObj(e)))}cuid(e){return this._addCheck(d({kind:"cuid"},v.errToObj(e)))}cuid2(e){return this._addCheck(d({kind:"cuid2"},v.errToObj(e)))}ulid(e){return this._addCheck(d({kind:"ulid"},v.errToObj(e)))}base64(e){return this._addCheck(d({kind:"base64"},v.errToObj(e)))}base64url(e){return this._addCheck(d({kind:"base64url"},v.errToObj(e)))}jwt(e){return this._addCheck(d({kind:"jwt"},v.errToObj(e)))}ip(e){return this._addCheck(d({kind:"ip"},v.errToObj(e)))}cidr(e){return this._addCheck(d({kind:"cidr"},v.errToObj(e)))}datetime(e){var t,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck(d({kind:"datetime",precision:typeof(e==null?void 0:e.precision)=="undefined"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!=null?t:!1,local:(r=e==null?void 0:e.local)!=null?r:!1},v.errToObj(e==null?void 0:e.message)))}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck(d({kind:"time",precision:typeof(e==null?void 0:e.precision)=="undefined"?null:e==null?void 0:e.precision},v.errToObj(e==null?void 0:e.message)))}duration(e){return this._addCheck(d({kind:"duration"},v.errToObj(e)))}regex(e,t){return this._addCheck(d({kind:"regex",regex:e},v.errToObj(t)))}includes(e,t){return this._addCheck(d({kind:"includes",value:e,position:t==null?void 0:t.position},v.errToObj(t==null?void 0:t.message)))}startsWith(e,t){return this._addCheck(d({kind:"startsWith",value:e},v.errToObj(t)))}endsWith(e,t){return this._addCheck(d({kind:"endsWith",value:e},v.errToObj(t)))}min(e,t){return this._addCheck(d({kind:"min",value:e},v.errToObj(t)))}max(e,t){return this._addCheck(d({kind:"max",value:e},v.errToObj(t)))}length(e,t){return this._addCheck(d({kind:"length",value:e},v.errToObj(t)))}nonempty(e){return this.min(1,v.errToObj(e))}trim(){return new s(b(d({},this._def),{checks:[...this._def.checks,{kind:"trim"}]}))}toLowerCase(){return new s(b(d({},this._def),{checks:[...this._def.checks,{kind:"toLowerCase"}]}))}toUpperCase(){return new s(b(d({},this._def),{checks:[...this._def.checks,{kind:"toUpperCase"}]}))}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};ne.create=s=>{var e;return new ne(d({checks:[],typeName:_.ZodString,coerce:(e=s==null?void 0:s.coerce)!=null?e:!1},w(s)))};function Zs(s,e){let t=(s.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,n=t>r?t:r,i=Number.parseInt(s.toFixed(n).replace(".","")),o=Number.parseInt(e.toFixed(n).replace(".",""));return i%o/10**n}var he=class s extends S{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==f.number){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_type,expected:f.number,received:i.parsedType}),x}let r,n=new R;for(let i of this._def.checks)i.kind==="int"?A.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),m(r,{code:u.invalid_type,expected:"integer",received:"float",message:i.message}),n.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),m(r,{code:u.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),m(r,{code:u.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty()):i.kind==="multipleOf"?Zs(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),m(r,{code:u.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),m(r,{code:u.not_finite,message:i.message}),n.dirty()):A.assertNever(i);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,v.toString(t))}gt(e,t){return this.setLimit("min",e,!1,v.toString(t))}lte(e,t){return this.setLimit("max",e,!0,v.toString(t))}lt(e,t){return this.setLimit("max",e,!1,v.toString(t))}setLimit(e,t,r,n){return new s(b(d({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:v.toString(n)}]}))}_addCheck(e){return new s(b(d({},this._def),{checks:[...this._def.checks,e]}))}int(e){return this._addCheck({kind:"int",message:v.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:v.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:v.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:v.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:v.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:v.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:v.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:v.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:v.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&A.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}};he.create=s=>new he(d({checks:[],typeName:_.ZodNumber,coerce:(s==null?void 0:s.coerce)||!1},w(s)));var me=class s extends S{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch(i){return this._getInvalidInput(e)}if(this._getType(e)!==f.bigint)return this._getInvalidInput(e);let r,n=new R;for(let i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),m(r,{code:u.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),m(r,{code:u.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),m(r,{code:u.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):A.assertNever(i);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return m(t,{code:u.invalid_type,expected:f.bigint,received:t.parsedType}),x}gte(e,t){return this.setLimit("min",e,!0,v.toString(t))}gt(e,t){return this.setLimit("min",e,!1,v.toString(t))}lte(e,t){return this.setLimit("max",e,!0,v.toString(t))}lt(e,t){return this.setLimit("max",e,!1,v.toString(t))}setLimit(e,t,r,n){return new s(b(d({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:v.toString(n)}]}))}_addCheck(e){return new s(b(d({},this._def),{checks:[...this._def.checks,e]}))}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:v.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:v.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:v.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:v.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:v.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};me.create=s=>{var e;return new me(d({checks:[],typeName:_.ZodBigInt,coerce:(e=s==null?void 0:s.coerce)!=null?e:!1},w(s)))};var fe=class extends S{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==f.boolean){let r=this._getOrReturnCtx(e);return m(r,{code:u.invalid_type,expected:f.boolean,received:r.parsedType}),x}return O(e.data)}};fe.create=s=>new fe(d({typeName:_.ZodBoolean,coerce:(s==null?void 0:s.coerce)||!1},w(s)));var ge=class s extends S{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==f.date){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_type,expected:f.date,received:i.parsedType}),x}if(Number.isNaN(e.data.getTime())){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_date}),x}let r=new R,n;for(let i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):A.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new s(b(d({},this._def),{checks:[...this._def.checks,e]}))}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:v.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:v.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}};ge.create=s=>new ge(d({checks:[],coerce:(s==null?void 0:s.coerce)||!1,typeName:_.ZodDate},w(s)));var Ne=class extends S{_parse(e){if(this._getType(e)!==f.symbol){let r=this._getOrReturnCtx(e);return m(r,{code:u.invalid_type,expected:f.symbol,received:r.parsedType}),x}return O(e.data)}};Ne.create=s=>new Ne(d({typeName:_.ZodSymbol},w(s)));var ye=class extends S{_parse(e){if(this._getType(e)!==f.undefined){let r=this._getOrReturnCtx(e);return m(r,{code:u.invalid_type,expected:f.undefined,received:r.parsedType}),x}return O(e.data)}};ye.create=s=>new ye(d({typeName:_.ZodUndefined},w(s)));var ve=class extends S{_parse(e){if(this._getType(e)!==f.null){let r=this._getOrReturnCtx(e);return m(r,{code:u.invalid_type,expected:f.null,received:r.parsedType}),x}return O(e.data)}};ve.create=s=>new ve(d({typeName:_.ZodNull},w(s)));var ie=class extends S{constructor(){super(...arguments),this._any=!0}_parse(e){return O(e.data)}};ie.create=s=>new ie(d({typeName:_.ZodAny},w(s)));var K=class extends S{constructor(){super(...arguments),this._unknown=!0}_parse(e){return O(e.data)}};K.create=s=>new K(d({typeName:_.ZodUnknown},w(s)));var z=class extends S{_parse(e){let t=this._getOrReturnCtx(e);return m(t,{code:u.invalid_type,expected:f.never,received:t.parsedType}),x}};z.create=s=>new z(d({typeName:_.ZodNever},w(s)));var Pe=class extends S{_parse(e){if(this._getType(e)!==f.undefined){let r=this._getOrReturnCtx(e);return m(r,{code:u.invalid_type,expected:f.void,received:r.parsedType}),x}return O(e.data)}};Pe.create=s=>new Pe(d({typeName:_.ZodVoid},w(s)));var Q=class s extends S{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),n=this._def;if(t.parsedType!==f.array)return m(t,{code:u.invalid_type,expected:f.array,received:t.parsedType}),x;if(n.exactLength!==null){let o=t.data.length>n.exactLength.value,a=t.data.length<n.exactLength.value;(o||a)&&(m(t,{code:o?u.too_big:u.too_small,minimum:a?n.exactLength.value:void 0,maximum:o?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),r.dirty())}if(n.minLength!==null&&t.data.length<n.minLength.value&&(m(t,{code:u.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),r.dirty()),n.maxLength!==null&&t.data.length>n.maxLength.value&&(m(t,{code:u.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((o,a)=>n.type._parseAsync(new j(t,o,t.path,a)))).then(o=>R.mergeArray(r,o));let i=[...t.data].map((o,a)=>n.type._parseSync(new j(t,o,t.path,a)));return R.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new s(b(d({},this._def),{minLength:{value:e,message:v.toString(t)}}))}max(e,t){return new s(b(d({},this._def),{maxLength:{value:e,message:v.toString(t)}}))}length(e,t){return new s(b(d({},this._def),{exactLength:{value:e,message:v.toString(t)}}))}nonempty(e){return this.min(1,e)}};Q.create=(s,e)=>new Q(d({type:s,minLength:null,maxLength:null,exactLength:null,typeName:_.ZodArray},w(e)));function Oe(s){if(s instanceof F){let e={};for(let t in s.shape){let r=s.shape[t];e[t]=V.create(Oe(r))}return new F(b(d({},s._def),{shape:()=>e}))}else return s instanceof Q?new Q(b(d({},s._def),{type:Oe(s.element)})):s instanceof V?V.create(Oe(s.unwrap())):s instanceof J?J.create(Oe(s.unwrap())):s instanceof B?B.create(s.items.map(e=>Oe(e))):s}var F=class s extends S{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=A.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==f.object){let c=this._getOrReturnCtx(e);return m(c,{code:u.invalid_type,expected:f.object,received:c.parsedType}),x}let{status:r,ctx:n}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof z&&this._def.unknownKeys==="strip"))for(let c in n.data)o.includes(c)||a.push(c);let l=[];for(let c of o){let p=i[c],g=n.data[c];l.push({key:{status:"valid",value:c},value:p._parse(new j(n,g,n.path,c)),alwaysSet:c in n.data})}if(this._def.catchall instanceof z){let c=this._def.unknownKeys;if(c==="passthrough")for(let p of a)l.push({key:{status:"valid",value:p},value:{status:"valid",value:n.data[p]}});else if(c==="strict")a.length>0&&(m(n,{code:u.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let p of a){let g=n.data[p];l.push({key:{status:"valid",value:p},value:c._parse(new j(n,g,n.path,p)),alwaysSet:p in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let c=[];for(let p of l){let g=await p.key,k=await p.value;c.push({key:g,value:k,alwaysSet:p.alwaysSet})}return c}).then(c=>R.mergeObjectSync(r,c)):R.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return v.errToObj,new s(d(b(d({},this._def),{unknownKeys:"strict"}),e!==void 0?{errorMap:(t,r)=>{var i,o,a,l;let n=(a=(o=(i=this._def).errorMap)==null?void 0:o.call(i,t,r).message)!=null?a:r.defaultError;return t.code==="unrecognized_keys"?{message:(l=v.errToObj(e).message)!=null?l:n}:{message:n}}}:{}))}strip(){return new s(b(d({},this._def),{unknownKeys:"strip"}))}passthrough(){return new s(b(d({},this._def),{unknownKeys:"passthrough"}))}extend(e){return new s(b(d({},this._def),{shape:()=>d(d({},this._def.shape()),e)}))}merge(e){return new s({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>d(d({},this._def.shape()),e._def.shape()),typeName:_.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new s(b(d({},this._def),{catchall:e}))}pick(e){let t={};for(let r of A.objectKeys(e))e[r]&&this.shape[r]&&(t[r]=this.shape[r]);return new s(b(d({},this._def),{shape:()=>t}))}omit(e){let t={};for(let r of A.objectKeys(this.shape))e[r]||(t[r]=this.shape[r]);return new s(b(d({},this._def),{shape:()=>t}))}deepPartial(){return Oe(this)}partial(e){let t={};for(let r of A.objectKeys(this.shape)){let n=this.shape[r];e&&!e[r]?t[r]=n:t[r]=n.optional()}return new s(b(d({},this._def),{shape:()=>t}))}required(e){let t={};for(let r of A.objectKeys(this.shape))if(e&&!e[r])t[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof V;)i=i._def.innerType;t[r]=i}return new s(b(d({},this._def),{shape:()=>t}))}keyof(){return xr(A.objectKeys(this.shape))}};F.create=(s,e)=>new F(d({shape:()=>s,unknownKeys:"strip",catchall:z.create(),typeName:_.ZodObject},w(e)));F.strictCreate=(s,e)=>new F(d({shape:()=>s,unknownKeys:"strict",catchall:z.create(),typeName:_.ZodObject},w(e)));F.lazycreate=(s,e)=>new F(d({shape:s,unknownKeys:"strip",catchall:z.create(),typeName:_.ZodObject},w(e)));var be=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;function n(i){for(let a of i)if(a.result.status==="valid")return a.result;for(let a of i)if(a.result.status==="dirty")return t.common.issues.push(...a.ctx.common.issues),a.result;let o=i.map(a=>new P(a.ctx.common.issues));return m(t,{code:u.invalid_union,unionErrors:o}),x}if(t.common.async)return Promise.all(r.map(async i=>{let o=b(d({},t),{common:b(d({},t.common),{issues:[]}),parent:null});return{result:await i._parseAsync({data:t.data,path:t.path,parent:o}),ctx:o}})).then(n);{let i,o=[];for(let l of r){let c=b(d({},t),{common:b(d({},t.common),{issues:[]}),parent:null}),p=l._parseSync({data:t.data,path:t.path,parent:c});if(p.status==="valid")return p;p.status==="dirty"&&!i&&(i={result:p,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;let a=o.map(l=>new P(l));return m(t,{code:u.invalid_union,unionErrors:a}),x}}get options(){return this._def.options}};be.create=(s,e)=>new be(d({options:s,typeName:_.ZodUnion},w(e)));var G=s=>s instanceof _e?G(s.schema):s instanceof L?G(s.innerType()):s instanceof we?[s.value]:s instanceof Te?s.options:s instanceof Se?A.objectValues(s.enum):s instanceof Ae?G(s._def.innerType):s instanceof ye?[void 0]:s instanceof ve?[null]:s instanceof V?[void 0,...G(s.unwrap())]:s instanceof J?[null,...G(s.unwrap())]:s instanceof Qe||s instanceof ke?G(s.unwrap()):s instanceof Ce?G(s._def.innerType):[],lt=class s extends S{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.object)return m(t,{code:u.invalid_type,expected:f.object,received:t.parsedType}),x;let r=this.discriminator,n=t.data[r],i=this.optionsMap.get(n);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(m(t,{code:u.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),x)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let n=new Map;for(let i of t){let o=G(i.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of o){if(n.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);n.set(a,i)}}return new s(d({typeName:_.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n},w(r)))}};function Ot(s,e){let t=D(s),r=D(e);if(s===e)return{valid:!0,data:s};if(t===f.object&&r===f.object){let n=A.objectKeys(e),i=A.objectKeys(s).filter(a=>n.indexOf(a)!==-1),o=d(d({},s),e);for(let a of i){let l=Ot(s[a],e[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(t===f.array&&r===f.array){if(s.length!==e.length)return{valid:!1};let n=[];for(let i=0;i<s.length;i++){let o=s[i],a=e[i],l=Ot(o,a);if(!l.valid)return{valid:!1};n.push(l.data)}return{valid:!0,data:n}}else return t===f.date&&r===f.date&&+s==+e?{valid:!0,data:s}:{valid:!1}}var xe=class extends S{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),n=(i,o)=>{if(ot(i)||ot(o))return x;let a=Ot(i.value,o.value);return a.valid?((at(i)||at(o))&&t.dirty(),{status:t.value,value:a.data}):(m(r,{code:u.invalid_intersection_types}),x)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>n(i,o)):n(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};xe.create=(s,e,t)=>new xe(d({left:s,right:e,typeName:_.ZodIntersection},w(t)));var B=class s extends S{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.array)return m(r,{code:u.invalid_type,expected:f.array,received:r.parsedType}),x;if(r.data.length<this._def.items.length)return m(r,{code:u.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),x;!this._def.rest&&r.data.length>this._def.items.length&&(m(r,{code:u.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((o,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new j(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>R.mergeArray(t,o)):R.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new s(b(d({},this._def),{rest:e}))}};B.create=(s,e)=>{if(!Array.isArray(s))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new B(d({items:s,typeName:_.ZodTuple,rest:null},w(e)))};var ct=class s extends S{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.object)return m(r,{code:u.invalid_type,expected:f.object,received:r.parsedType}),x;let n=[],i=this._def.keyType,o=this._def.valueType;for(let a in r.data)n.push({key:i._parse(new j(r,a,r.path,a)),value:o._parse(new j(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?R.mergeObjectAsync(t,n):R.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof S?new s(d({keyType:e,valueType:t,typeName:_.ZodRecord},w(r))):new s(d({keyType:ne.create(),valueType:e,typeName:_.ZodRecord},w(t)))}},Fe=class extends S{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.map)return m(r,{code:u.invalid_type,expected:f.map,received:r.parsedType}),x;let n=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([a,l],c)=>({key:n._parse(new j(r,a,r.path,[c,"key"])),value:i._parse(new j(r,l,r.path,[c,"value"]))}));if(r.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of o){let c=await l.key,p=await l.value;if(c.status==="aborted"||p.status==="aborted")return x;(c.status==="dirty"||p.status==="dirty")&&t.dirty(),a.set(c.value,p.value)}return{status:t.value,value:a}})}else{let a=new Map;for(let l of o){let c=l.key,p=l.value;if(c.status==="aborted"||p.status==="aborted")return x;(c.status==="dirty"||p.status==="dirty")&&t.dirty(),a.set(c.value,p.value)}return{status:t.value,value:a}}}};Fe.create=(s,e,t)=>new Fe(d({valueType:e,keyType:s,typeName:_.ZodMap},w(t)));var Ve=class s extends S{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.set)return m(r,{code:u.invalid_type,expected:f.set,received:r.parsedType}),x;let n=this._def;n.minSize!==null&&r.data.size<n.minSize.value&&(m(r,{code:u.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),n.maxSize!==null&&r.data.size>n.maxSize.value&&(m(r,{code:u.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());let i=this._def.valueType;function o(l){let c=new Set;for(let p of l){if(p.status==="aborted")return x;p.status==="dirty"&&t.dirty(),c.add(p.value)}return{status:t.value,value:c}}let a=[...r.data.values()].map((l,c)=>i._parse(new j(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(e,t){return new s(b(d({},this._def),{minSize:{value:e,message:v.toString(t)}}))}max(e,t){return new s(b(d({},this._def),{maxSize:{value:e,message:v.toString(t)}}))}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Ve.create=(s,e)=>new Ve(d({valueType:s,minSize:null,maxSize:null,typeName:_.ZodSet},w(e)));var dt=class s extends S{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.function)return m(t,{code:u.invalid_type,expected:f.function,received:t.parsedType}),x;function r(a,l){return Ke({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ie(),Y].filter(c=>!!c),issueData:{code:u.invalid_arguments,argumentsError:l}})}function n(a,l){return Ke({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ie(),Y].filter(c=>!!c),issueData:{code:u.invalid_return_type,returnTypeError:l}})}let i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof oe){let a=this;return O(async function(...l){let c=new P([]),p=await a._def.args.parseAsync(l,i).catch(C=>{throw c.addIssue(r(l,C)),c}),g=await Reflect.apply(o,this,p);return await a._def.returns._def.type.parseAsync(g,i).catch(C=>{throw c.addIssue(n(g,C)),c})})}else{let a=this;return O(function(...l){let c=a._def.args.safeParse(l,i);if(!c.success)throw new P([r(l,c.error)]);let p=Reflect.apply(o,this,c.data),g=a._def.returns.safeParse(p,i);if(!g.success)throw new P([n(p,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new s(b(d({},this._def),{args:B.create(e).rest(K.create())}))}returns(e){return new s(b(d({},this._def),{returns:e}))}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new s(d({args:e||B.create([]).rest(K.create()),returns:t||K.create(),typeName:_.ZodFunction},w(r)))}},_e=class extends S{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};_e.create=(s,e)=>new _e(d({getter:s,typeName:_.ZodLazy},w(e)));var we=class extends S{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return m(t,{received:t.data,code:u.invalid_literal,expected:this._def.value}),x}return{status:"valid",value:e.data}}get value(){return this._def.value}};we.create=(s,e)=>new we(d({value:s,typeName:_.ZodLiteral},w(e)));function xr(s,e){return new Te(d({values:s,typeName:_.ZodEnum},w(e)))}var Te=class s extends S{_parse(e){if(typeof e.data!="string"){let t=this._getOrReturnCtx(e),r=this._def.values;return m(t,{expected:A.joinValues(r),received:t.parsedType,code:u.invalid_type}),x}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return m(t,{received:t.data,code:u.invalid_enum_value,options:r}),x}return O(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return s.create(e,d(d({},this._def),t))}exclude(e,t=this._def){return s.create(this.options.filter(r=>!e.includes(r)),d(d({},this._def),t))}};Te.create=xr;var Se=class extends S{_parse(e){let t=A.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==f.string&&r.parsedType!==f.number){let n=A.objectValues(t);return m(r,{expected:A.joinValues(n),received:r.parsedType,code:u.invalid_type}),x}if(this._cache||(this._cache=new Set(A.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){let n=A.objectValues(t);return m(r,{received:r.data,code:u.invalid_enum_value,options:n}),x}return O(e.data)}get enum(){return this._def.values}};Se.create=(s,e)=>new Se(d({values:s,typeName:_.ZodNativeEnum},w(e)));var oe=class extends S{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.promise&&t.common.async===!1)return m(t,{code:u.invalid_type,expected:f.promise,received:t.parsedType}),x;let r=t.parsedType===f.promise?t.data:Promise.resolve(t.data);return O(r.then(n=>this._def.type.parseAsync(n,{path:t.path,errorMap:t.common.contextualErrorMap})))}};oe.create=(s,e)=>new oe(d({type:s,typeName:_.ZodPromise},w(e)));var L=class extends S{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),n=this._def.effect||null,i={addIssue:o=>{m(r,o),o.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),n.type==="preprocess"){let o=n.transform(r.data,i);if(r.common.async)return Promise.resolve(o).then(async a=>{if(t.value==="aborted")return x;let l=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return l.status==="aborted"?x:l.status==="dirty"?pe(l.value):t.value==="dirty"?pe(l.value):l});{if(t.value==="aborted")return x;let a=this._def.schema._parseSync({data:o,path:r.path,parent:r});return a.status==="aborted"?x:a.status==="dirty"?pe(a.value):t.value==="dirty"?pe(a.value):a}}if(n.type==="refinement"){let o=a=>{let l=n.refinement(a,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?x:(a.status==="dirty"&&t.dirty(),o(a.value),{status:t.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?x:(a.status==="dirty"&&t.dirty(),o(a.value).then(()=>({status:t.value,value:a.value}))))}if(n.type==="transform")if(r.common.async===!1){let o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!se(o))return x;let a=n.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>se(o)?Promise.resolve(n.transform(o.value,i)).then(a=>({status:t.value,value:a})):x);A.assertNever(n)}};L.create=(s,e,t)=>new L(d({schema:s,typeName:_.ZodEffects,effect:e},w(t)));L.createWithPreprocess=(s,e,t)=>new L(d({schema:e,effect:{type:"preprocess",transform:s},typeName:_.ZodEffects},w(t)));var V=class extends S{_parse(e){return this._getType(e)===f.undefined?O(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};V.create=(s,e)=>new V(d({innerType:s,typeName:_.ZodOptional},w(e)));var J=class extends S{_parse(e){return this._getType(e)===f.null?O(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};J.create=(s,e)=>new J(d({innerType:s,typeName:_.ZodNullable},w(e)));var Ae=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===f.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};Ae.create=(s,e)=>new Ae(d({innerType:s,typeName:_.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default},w(e)));var Ce=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),r=b(d({},t),{common:b(d({},t.common),{issues:[]})}),n=this._def.innerType._parse({data:r.data,path:r.path,parent:d({},r)});return Re(n)?n.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new P(r.common.issues)},input:r.data})})):{status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new P(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};Ce.create=(s,e)=>new Ce(d({innerType:s,typeName:_.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch},w(e)));var je=class extends S{_parse(e){if(this._getType(e)!==f.nan){let r=this._getOrReturnCtx(e);return m(r,{code:u.invalid_type,expected:f.nan,received:r.parsedType}),x}return{status:"valid",value:e.data}}};je.create=s=>new je(d({typeName:_.ZodNaN},w(s)));var Ys=Symbol("zod_brand"),Qe=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}},Xe=class s extends S{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?x:i.status==="dirty"?(t.dirty(),pe(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{let n=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return n.status==="aborted"?x:n.status==="dirty"?(t.dirty(),{status:"dirty",value:n.value}):this._def.out._parseSync({data:n.value,path:r.path,parent:r})}}static create(e,t){return new s({in:e,out:t,typeName:_.ZodPipeline})}},ke=class extends S{_parse(e){let t=this._def.innerType._parse(e),r=n=>(se(n)&&(n.value=Object.freeze(n.value)),n);return Re(t)?t.then(n=>r(n)):r(t)}unwrap(){return this._def.innerType}};ke.create=(s,e)=>new ke(d({innerType:s,typeName:_.ZodReadonly},w(e)));function gr(s,e){let t=typeof s=="function"?s(e):typeof s=="string"?{message:s}:s;return typeof t=="string"?{message:t}:t}function _r(s,e={},t){return s?ie.create().superRefine((r,n)=>{var o,a;let i=s(r);if(i instanceof Promise)return i.then(l=>{var c,p;if(!l){let g=gr(e,r),k=(p=(c=g.fatal)!=null?c:t)!=null?p:!0;n.addIssue(b(d({code:"custom"},g),{fatal:k}))}});if(!i){let l=gr(e,r),c=(a=(o=l.fatal)!=null?o:t)!=null?a:!0;n.addIssue(b(d({code:"custom"},l),{fatal:c}))}}):ie.create()}var Gs={object:F.lazycreate},_;(function(s){s.ZodString="ZodString",s.ZodNumber="ZodNumber",s.ZodNaN="ZodNaN",s.ZodBigInt="ZodBigInt",s.ZodBoolean="ZodBoolean",s.ZodDate="ZodDate",s.ZodSymbol="ZodSymbol",s.ZodUndefined="ZodUndefined",s.ZodNull="ZodNull",s.ZodAny="ZodAny",s.ZodUnknown="ZodUnknown",s.ZodNever="ZodNever",s.ZodVoid="ZodVoid",s.ZodArray="ZodArray",s.ZodObject="ZodObject",s.ZodUnion="ZodUnion",s.ZodDiscriminatedUnion="ZodDiscriminatedUnion",s.ZodIntersection="ZodIntersection",s.ZodTuple="ZodTuple",s.ZodRecord="ZodRecord",s.ZodMap="ZodMap",s.ZodSet="ZodSet",s.ZodFunction="ZodFunction",s.ZodLazy="ZodLazy",s.ZodLiteral="ZodLiteral",s.ZodEnum="ZodEnum",s.ZodEffects="ZodEffects",s.ZodNativeEnum="ZodNativeEnum",s.ZodOptional="ZodOptional",s.ZodNullable="ZodNullable",s.ZodDefault="ZodDefault",s.ZodCatch="ZodCatch",s.ZodPromise="ZodPromise",s.ZodBranded="ZodBranded",s.ZodPipeline="ZodPipeline",s.ZodReadonly="ZodReadonly"})(_||(_={}));var Ks=(s,e={message:`Input not instance of ${s.name}`})=>_r(t=>t instanceof s,e),wr=ne.create,Tr=he.create,Qs=je.create,Xs=me.create,Sr=fe.create,Ws=ge.create,en=Ne.create,tn=ye.create,rn=ve.create,sn=ie.create,nn=K.create,on=z.create,an=Pe.create,ln=Q.create,cn=F.create,dn=F.strictCreate,un=be.create,pn=lt.create,hn=xe.create,mn=B.create,fn=ct.create,gn=Fe.create,yn=Ve.create,vn=dt.create,bn=_e.create,xn=we.create,_n=Te.create,wn=Se.create,Tn=oe.create,Sn=L.create,An=V.create,Cn=J.create,kn=L.createWithPreprocess,$n=Xe.create,En=()=>wr().optional(),Mn=()=>Tr().optional(),In=()=>Sr().optional(),Rn={string:s=>ne.create(b(d({},s),{coerce:!0})),number:s=>he.create(b(d({},s),{coerce:!0})),boolean:s=>fe.create(b(d({},s),{coerce:!0})),bigint:s=>me.create(b(d({},s),{coerce:!0})),date:s=>ge.create(b(d({},s),{coerce:!0}))};var On=x;var Nn=/^\w+([_]\w+)*$/,Ar=/^\w+([\s-_]\w+)*$/,Cr=h.record(h.lazy(function(){return h.union([h.string(),h.number(),h.boolean(),Cr])})),Le=h.object({title:h.string().regex(Ar).max(40).optional(),required:h.boolean().optional(),description:h.string().optional(),defaultValue:h.union([h.string(),h.boolean(),h.number(),Cr]).optional(),format:h.string().optional(),isValueField:h.boolean().optional()}),Pn=h.number().int().positive().lte(12).gte(1),kr=h.intersection(Le,h.object({type:h.literal("string"),minLength:h.number().optional(),maxLength:h.number().optional()})),$r=h.intersection(Le,h.object({type:h.literal("string"),enum:h.array(h.string().nonempty()),showAsRadio:h.boolean().optional(),verticalLayout:h.boolean().optional()})),Er=h.intersection(Le,h.object({type:h.literal("number"),minimum:h.number().optional(),maximum:h.number().optional()})),Mr=h.intersection(Le,h.object({type:h.literal("integer"),minimum:h.number().optional(),maximum:h.number().optional()})),Ir=h.intersection(Le,h.object({type:h.literal("boolean")})),Rr=h.intersection(Le,h.object({type:h.literal("object"),properties:h.lazy(function(){return h.record(h.union([$r,kr,Er,Mr,Ir,Rr]))}).optional()})),Fn=h.union([$r,kr,Er,Mr,Ir,Rr]),Vn=h.object({staticProperties:h.array(h.string()).optional(),canvasRestrictions:h.object({hideInToolbar:h.boolean().optional(),minSize:Pn.optional(),isFullRow:h.boolean().optional()}).optional()}),Or=h.object({version:h.string().nonempty(),fallbackDisableSubmit:h.boolean(),controlName:h.string().nonempty().regex(Ar).max(40),pluginAuthor:h.string().optional(),pluginVersion:h.string().optional(),searchTerms:h.array(h.string()).optional(),description:h.string().optional(),groupName:h.union([h.string(),h.object({name:h.string(),order:h.number()})]).optional(),iconUrl:h.string().optional(),designer:Vn.optional(),properties:h.record(h.string().regex(Nn),h.union([Fn,h.boolean()])).optional(),standardProperties:h.object({fieldLabel:h.boolean().optional(),toolTip:h.boolean().optional(),description:h.boolean().optional(),placeholder:h.boolean().optional(),defaultValue:h.boolean().optional(),visibility:h.boolean().optional(),readOnly:h.boolean().optional(),required:h.boolean().optional()}).optional(),events:h.array(h.string()).optional()}).strict();var Nr='[role="alert"], .ntx-form-error, .ntx-error-message',ut=class{constructor(){this.isBlurRevalidating=!1;this.focusedControlValues=new WeakMap;this._onGlobalFocusIn=e=>{var i,o,a;let r=(a=((o=(i=e.composedPath)==null?void 0:i.call(e))!=null?o:[])[0])!=null?a:e.target,n=this.getTrackableControl(r);n&&this.focusedControlValues.set(n,this.getComparableControlValue(n))};this._onGlobalFocusOut=e=>{var l,c,p;if(this.isBlurRevalidating)return;let r=(p=((c=(l=e.composedPath)==null?void 0:l.call(e))!=null?c:[])[0])!=null?p:e.target;if(!(r instanceof HTMLElement))return;let n=this.getFormContext();if(!n||!n.form.contains(r)||!this.hasValidationMarkers(n.form))return;let i=this.getTrackableControl(r);if(!i)return;let o=this.focusedControlValues.get(i),a=this.getComparableControlValue(i);this.focusedControlValues.delete(i),!(o===void 0||o===a)&&(this.isBlurRevalidating=!0,this.runSoftValidationAndUpdateUI(n).then(()=>{this.isBlurRevalidating=!1}).catch(()=>{this.isBlurRevalidating=!1}))}}attach(){document.addEventListener("focusin",this._onGlobalFocusIn),document.addEventListener("focusout",this._onGlobalFocusOut)}detach(){document.removeEventListener("focusin",this._onGlobalFocusIn),document.removeEventListener("focusout",this._onGlobalFocusOut)}async runHardValidation(){let e=this.getFormContext();if(!e)return console.warn("[ValidationModule] No form context found \u2014 blocking API call"),!1;this.clearNintexValidationUI(),this.suppressNativeSubmitArtifacts(e.form),await this.triggerNativeValidation(e),this.suppressNativeSubmitArtifacts(e.form);let t=this.collectValidationSummary(e);if(console.info("[ValidationModule] Hard validation summary",t),t.fieldValidation||t.ruleValidation){let r=e.form.querySelector('[aria-invalid="true"]');return r&&r.focus(),!1}return this.suppressNativeSubmitArtifacts(e.form),!0}clearNintexValidationUI(){document.querySelectorAll(".daf-injected-error").forEach(e=>e.remove()),document.querySelectorAll("[data-daf-validated]").forEach(e=>{e.removeAttribute("aria-invalid"),e.removeAttribute("data-daf-validated")}),document.querySelectorAll(".daf-has-error").forEach(e=>{e.classList.remove("nx-has-error","daf-has-error")})}hasValidationMarkers(e){return e.querySelector('[aria-invalid="true"]')?!0:Array.from(e.querySelectorAll(Nr)).some(t=>this.isValidationAlertElement(t)&&this.isElementVisible(t)&&this.isValidationAlertText(t.textContent))}getFormContext(){var a,l;let e=document.querySelector("form");if(!(e instanceof HTMLFormElement))return null;let t=e.querySelector('button[data-e2e="btn-submit"], input[data-e2e="btn-submit"]'),r=Array.from(e.querySelectorAll('button[type="submit"], input[type="submit"]')).find(c=>this.isElementVisible(c)),n=Array.from(e.querySelectorAll("button:not([type])")).find(c=>{var p,g;return this.isElementVisible(c)&&/submit/i.test(((p=c.getAttribute("data-e2e"))!=null?p:"")+" "+((g=c.textContent)!=null?g:""))}),i=(l=(a=t!=null?t:r)!=null?a:n)!=null?l:null;if(!(i instanceof HTMLElement))return null;let o=Array.from(e.querySelectorAll("input, select, textarea")).filter(c=>this.isElementVisible(c)&&!c.disabled);return{form:e,submitControl:i,controls:o}}async triggerNativeValidation(e){var i;e.form.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation()},{capture:!0,once:!0});let t=e.submitControl,r=t instanceof HTMLButtonElement?t:null,n=(i=r==null?void 0:r.getAttribute("type"))!=null?i:null;try{r&&r.setAttribute("type","button"),t.click(),await this.wait(350)}finally{r&&(n===null?r.removeAttribute("type"):r.setAttribute("type",n))}}async runSoftValidationAndUpdateUI(e){await this.wait(120);let t=this.collectValidationSummary(e);console.info("[ValidationModule] Soft validation summary",t),!t.fieldValidation&&!t.ruleValidation&&(this.clearNintexValidationUI(),this.suppressNativeSubmitArtifacts(e.form))}clearNativeSubmitArtifacts(e){[...Array.from(document.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')),...Array.from(e.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]'))].forEach(n=>{n.textContent=""}),Array.from(e.querySelectorAll('[role="alert"], .ntx-form-error, .ntx-error-message')).filter(n=>{var o;return((o=n.textContent)!=null?o:"").trim().toLowerCase().includes("api call not successful")}).forEach(n=>{n.textContent=""})}suppressNativeSubmitArtifacts(e){this.clearNativeSubmitArtifacts(e),[0,75,200,400].forEach(t=>{window.setTimeout(()=>{this.clearNativeSubmitArtifacts(e)},t)})}isValidationAlertElement(e){return!e.matches('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')}isValidationAlertText(e){let t=(e!=null?e:"").trim().toLowerCase();return!(!t||t.includes("there is 1 error in the form you are trying to submit")||t.includes("there are ")&&t.includes(" error in the form you are trying to submit")||t.includes("api call not successful"))}collectValidationSummary(e){let t=Array.from(e.form.querySelectorAll('[aria-invalid="true"]')).filter(g=>this.isElementVisible(g)),r=e.controls.filter(g=>this.isElementVisible(g)&&g.matches(":invalid")),n=Array.from(e.form.querySelectorAll(Nr)).filter(g=>this.isValidationAlertElement(g)&&this.isElementVisible(g)&&this.isValidationAlertText(g.textContent)),i=[...new Set(r.map(g=>this.getControlLabel(g)))],o=[...new Set(n.map(g=>{var k,C;return(C=(k=g.textContent)==null?void 0:k.trim())!=null?C:""}))].filter(Boolean),a=t.length>0||r.length>0,l=n.length>0&&a,c=a||l?"Validation surfaced":"No validation markers",p=`${c} - aria: ${t.length}, html5: ${r.length}, alerts: ${n.length}`;return{outcome:c,ariaCount:t.length,html5Count:r.length,alertCount:n.length,fieldValidation:a,ruleValidation:l,message:p,invalidControls:i,alerts:o}}isElementVisible(e){let t=e,r=window.getComputedStyle(t);return r.display!=="none"&&r.visibility!=="hidden"&&t.offsetParent!==null}getControlLabel(e){return e.getAttribute("aria-label")||e.name||e.id||e.getAttribute("placeholder")||e.tagName.toLowerCase()}getTrackableControl(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement?e:null}getComparableControlValue(e){var t;if(e instanceof HTMLInputElement){let r=e.type.toLowerCase();return r==="checkbox"||r==="radio"?e.checked?"checked":"unchecked":r==="file"?Array.from((t=e.files)!=null?t:[]).map(n=>n.name).join("|"):e.value}return e instanceof HTMLSelectElement&&e.multiple?Array.from(e.selectedOptions).map(r=>r.value).join("|"):e.value}wait(e){return new Promise(t=>{window.setTimeout(t,e)})}};function Pr(s,e){if(s==="application/x-www-form-urlencoded")return{body:e||""};if(s==="application/json"){if(!e||!e.trim())return{body:void 0};try{return{body:JSON.parse(e)}}catch(t){return{body:void 0,error:t instanceof Error?t.message:String(t)}}}return{body:e||""}}function Fr(s){if(!s)return{};try{return JSON.parse(s)}catch(e){let t={};return s.split(/\r?\n/).forEach(r=>{let n=r.indexOf(":");if(n<=-1)return;let i=r.slice(0,n).trim(),o=r.slice(n+1).trim();i&&(t[i]=o)}),t}}function Vr(s){let e=s.toLowerCase();if(e.includes("error:")||e.includes("failed")||e.includes("exception"))return"error";try{let t=JSON.parse(s);if(t.error||t.status==="error")return"error";if(t.warning||t.status==="warning")return"warning"}catch(t){}return"success"}function U(s,e){if(s&&typeof s=="object"&&e in s)return s[e];let t=e.split("."),r=s;for(let n=0;n<t.length;n+=1){let i=t[n],o=i.match(/^(.+)\[(\*|\d+)\]$/);if(o){let a=o[1],l=o[2];if(!r||typeof r!="object"||!(a in r))return;let c=r[a];if(!Array.isArray(c))return;if(l==="*"){let p=t.slice(n+1).join(".");return p?c.map(g=>U(g,p)).filter(g=>g!==void 0):c}r=c[parseInt(l,10)]}else if(r&&typeof r=="object"&&i in r)r=r[i];else return}return r}function Pt(s){return typeof s=="boolean"?s.toString():typeof s=="string"?`"${s}"`:typeof s=="number"?s.toString():s===null?"null":s===void 0?"undefined":JSON.stringify(s)}function pt(s){try{return JSON.stringify(JSON.parse(s),null,2)}catch(e){return s}}function H(s){if(!s.trim())return!0;try{return JSON.parse(s),!0}catch(e){return!1}}function Nt(s){return typeof s!="object"||s===null?0:Array.isArray(s)?s.reduce((e,t)=>e+Nt(t),0):Object.keys(s).length+Object.values(s).reduce((e,t)=>e+Nt(t),0)}function jr(s){if(!s.trim())return"Empty";try{let e=JSON.parse(s);return`Valid JSON \u2022 ${s.length} chars \u2022 ${s.split(`
`).length} lines \u2022 ${Nt(e)} keys`}catch(e){return`Invalid JSON \u2022 ${e.message}`}}var X=class{static register(e,t){let r=e.closest("form");if(!(r instanceof HTMLFormElement))return console.warn("[Form Coordinator] Plugin is not inside a form"),null;let n=this.coordinators.get(r);if(!n){let i,o=a=>{let l=Array.from(i.instances).some(c=>c.submissionAction!=="only-submit");!i.allowNativeSubmission&&l&&(console.log("[Form Coordinator] Blocking native submit until a plugin explicitly permits it"),a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())};i={instances:new Set,hiddenSubmitRequesters:new Set,allowNativeSubmission:!1,submitListener:o},r.addEventListener("submit",o,!0),this.coordinators.set(r,i),n=i}return n.instances.add(t),r}static unregister(e,t){let r=this.coordinators.get(e);r&&(r.instances.delete(t),r.hiddenSubmitRequesters.delete(t),this.applySubmitButtonVisibility(e,r),r.instances.size===0&&(e.removeEventListener("submit",r.submitListener,!0),this.coordinators.delete(e)))}static setSubmitHidden(e,t,r){let n=this.coordinators.get(e);n&&(r?n.hiddenSubmitRequesters.add(t):n.hiddenSubmitRequesters.delete(t),this.applySubmitButtonVisibility(e,n))}static submit(e,t){let r=this.coordinators.get(e);if(!r)return!1;let n=e.querySelector('button[type="submit"]');return n instanceof HTMLElement?(r.allowNativeSubmission=!0,n.click(),window.setTimeout(()=>{r.allowNativeSubmission=!1,t()},1500),!0):!1}static ensureSubmitHiddenStyle(){if(document.getElementById(this.SUBMIT_HIDDEN_STYLE_ID))return;let e=document.createElement("style");e.id=this.SUBMIT_HIDDEN_STYLE_ID,e.textContent='.daf-webrequest-submit-hidden button[data-e2e="btn-submit"] { display: none !important; }',document.head.appendChild(e)}static applySubmitButtonVisibility(e,t){var r;e.classList.toggle("daf-webrequest-submit-hidden",t.hiddenSubmitRequesters.size>0),t.hiddenSubmitRequesters.size>0?this.ensureSubmitHiddenStyle():document.querySelectorAll("form.daf-webrequest-submit-hidden").length===0&&((r=document.getElementById(this.SUBMIT_HIDDEN_STYLE_ID))==null||r.remove())}};X.coordinators=new WeakMap,X.SUBMIT_HIDDEN_STYLE_ID="daf-webrequest-submit-hidden-style";var ht=class{constructor(e){this.callbacks=e;this.timerId=null;this.delayedStartTime=0}get isTimerActive(){return this.timerId!==null}get delayedSubmissionStartTime(){return this.delayedStartTime}handlePostSubmissionAction(e){if(console.log("[Submission Action] Checking submission action:",e),e==="no-submit"){console.log("[Submission Action] No action configured");return}if(e==="quick-submit"){console.log("[Submission Action] Quick submit - triggering after 500ms"),window.setTimeout(()=>{this.callbacks.submit()},500);return}e==="delayed-submit"&&(console.log("[Submission Action] Delayed submit - starting countdown timer"),this.startDelayedSubmission())}startDelayedSubmission(){this.clearTimer();let e=this.callbacks.getCountdownSeconds()*1e3,t=Date.now();this.delayedStartTime=t;let r=()=>{let n=Date.now()-t;e-n<=0?(console.log("[Submission Action] Countdown complete - submitting form"),this.callbacks.submit(),this.timerId=null,this.delayedStartTime=0):(this.callbacks.requestUpdate(),this.timerId=window.setTimeout(r,100))};console.log("[Submission Action] Starting delayed submission countdown for",this.callbacks.getCountdownSeconds(),"seconds"),r()}startCooldownTimer(){this.clearTimer();let e=()=>{let t=Date.now()-this.callbacks.getLastApiCallTime(),r=this.callbacks.getCountdownSeconds()*1e3;t<r?(this.callbacks.requestUpdate(),this.timerId=window.setTimeout(e,1e3)):(this.callbacks.onCooldownComplete(),this.timerId=null,this.callbacks.requestUpdate())};this.timerId=window.setTimeout(e,1e3)}dispose(){this.clearTimer()}clearTimer(){this.timerId!==null&&(window.clearTimeout(this.timerId),this.timerId=null)}};function jn(s,e){let t={fields:[]};e&&e.trim()&&(t.title=e.trim());let r=Array.from(s.entries()).filter(([,n])=>n.checked).sort((n,i)=>n[1].order-i[1].order);return t.fields=r.map(([n,i])=>({path:n,title:i.title||n})),t}function Lr(s){return s.startsWith('"{')&&s.endsWith('}"')?JSON.parse(s.slice(1,-1).replace(/\\"/g,'"')):s.trim().startsWith('{"')?JSON.parse(s):null}function Ft(s,e){return`"${JSON.stringify(jn(s,e)).replace(/"/g,'\\"')}"`}function Ur(s){return s?s.split(`
`).map(e=>{let t=e.match(/^([^:]+):\s*(.*)$/);if(!t)return e;let r=t[1].trim(),n=t[2];return`<strong>${r}:</strong> ${n}`}).join("<br>"):""}function mt(s){if(!s)return"";try{return JSON.stringify(JSON.parse(s),null,2)}catch(e){return s}}function We(s,e){if(!s.fields||!Array.isArray(s.fields))return"Invalid configuration format";let t;try{t=JSON.parse(e)}catch(n){return console.error("[Message Formatting] Failed to parse response data:",n),"Unable to parse response data"}let r=[];return s.fields.forEach(n=>{let i=U(t,n.path);if(Array.isArray(i))if(i.length>0){let o=i[0],a=typeof o!="object"||o===null;r.push(`${n.title}:`),i.forEach((l,c)=>{r.push(`  ${c+1}. ${a?String(l):JSON.stringify(l)}`)})}else r.push(`${n.title}: (empty)`);else{let o=i!=null?String(i):"N/A";r.push(`${n.title}: ${o}`)}}),r.join(`
`)}function Ln(s,e){return s?Object.entries(s).filter(([t])=>t!=="value"&&!e.has(t)).map(([t,r])=>({name:t,default:r.defaultValue,config:r})):[]}function zr(s,e,t){let r=Ln(s,t);return y`
    <table class="debug-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Default Value</th>
          <th>Current Value</th>
        </tr>
      </thead>
      <tbody>
        ${r.map(n=>y`
          <tr>
            <td><code class="property-name">${n.name}</code></td>
            <td class="value-default">${Pt(n.default)}</td>
            <td class="value-current">${Un(n.name,n.config,e)}</td>
          </tr>
        `)}
      </tbody>
    </table>
  `}function Un(s,e,t){let r=t[s],n=e.type;if(n==="boolean")return y`
      <span style="font-weight: 500; color: ${r?"#28a745":"#dc3545"};">
        ${r?"\u2713 Yes":"\u2717 No"}
      </span>
    `;if(n==="string"){let i=(s==="bearerToken"||s==="clientSecret")&&r&&r.length>0?`***${r.slice(-4)}`:r,o=i&&i.length>100?`${i.substring(0,100)}...`:i;return y`
      <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
        ${o||"<empty>"}
      </span>
    `}return n==="number"||n==="integer"?y`<span style="font-weight: 500;">${r}</span>`:y`<span>${Pt(r)}</span>`}function Hr(s,e){let t=a=>y`
    <div class="debug-json-container">
      <button class="debug-json-copy-btn" @click=${()=>e(a)} title="Copy to clipboard">📋 Copy</button>
      <pre class="debug-json">${a}</pre>
    </div>
  `,r=s.oauthTokenResponse?JSON.stringify(s.oauthTokenResponse,null,2):"",n=s.requestHeaders?pt(s.requestHeaders):"",i=s.requestBody?pt(s.requestBody):"",o=s.apiResponse?pt(s.apiResponse):"";return y`
    <table class="debug-table">
      <thead>
        <tr><th>Property</th><th>Value</th></tr>
      </thead>
      <tbody>
        <tr><td><code>apiUrl</code></td><td style="word-break: break-all;">${s.apiUrl||"<not set>"}</td></tr>
        <tr><td><code>method</code></td><td>${s.method}</td></tr>
        ${s.oauthTokenResponse?y`
          <tr><td><code>OAuth Token</code></td><td>${t(r)}</td></tr>
        `:""}
        <tr><td><code>requestHeaders</code></td><td>${n?t(n):"<not set>"}</td></tr>
        <tr><td><code>requestBody</code></td><td>${i?t(i):"<not set>"}</td></tr>
        <tr>
          <td><code>State</code></td>
          <td>
            <strong>Loading:</strong> ${s.isLoading}<br>
            <strong>Has Successful Call:</strong> ${s.hasSuccessfulCall}<br>
            <strong>Button Disabled:</strong> ${s.isButtonDisabled}
          </td>
        </tr>
        ${s.apiResponse?y`
          <tr><td><code>Response</code></td><td>${t(o)}</td></tr>
        `:""}
      </tbody>
    </table>
  `}function Dr(s){if(!s.trim())return"";let e="",t="",r="";try{let n=JSON.parse(s);e=JSON.stringify(n),t=`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}catch(n){r=n.message}return y`
    <div class="form-group">
      <label class="control-label">Generated Output</label>
      <div style="display: flex; gap: 16px;">
        <div style="flex: 1;">
          <label class="control-label" style="font-size: 12px; color: #6c757d;">Minified JSON</label>
          <textarea class="form-control" readonly rows="3" .value=${e}
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
          ></textarea>
        </div>
        <div style="flex: 1;">
          <label class="control-label" style="font-size: 12px; color: #6c757d;">Escaped for Code</label>
          <textarea class="form-control" readonly rows="3" .value=${t}
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
          ></textarea>
        </div>
      </div>
      ${r?y`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${r}</div>`:""}
    </div>
  `}function Br(s){if(!s.trim()||!H(s))return"";try{let e=JSON.parse(s);return y`
      <div class="form-group">
        <label class="control-label">JSON Structure Preview</label>
        <div class="json-viewer">
${Vt(e,0)}
        </div>
      </div>
    `}catch(e){return""}}function Vt(s,e=0){let t="  ".repeat(e);if(s===null)return'<span class="json-syntax-null">null</span>';if(typeof s=="string")return`<span class="json-syntax-string">"${s}"</span>`;if(typeof s=="number")return`<span class="json-syntax-number">${s}</span>`;if(typeof s=="boolean")return`<span class="json-syntax-boolean">${s}</span>`;if(Array.isArray(s))return s.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${s.map(n=>`${t}  ${Vt(n,e+1)}`).join(`,
`)}
${t}<span class="json-syntax-punctuation">]</span>`;if(typeof s=="object"){let r=Object.keys(s);return r.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${r.map(i=>`${t}  <span class="json-syntax-key">"${i}"</span><span class="json-syntax-punctuation">:</span> ${Vt(s[i],e+1)}`).join(`,
`)}
${t}<span class="json-syntax-punctuation">}</span>`}return String(s)}function Jr(s,e){let t=H(s),r=jr(s);return y`
    <div class="debug-tools">
      <div class="form-group">
        <label class="control-label">JSON Request Body Editor</label>
        <div class="json-editor-container">
          <div class="json-editor-toolbar">
            <div class="json-editor-actions">
              <button class="json-editor-btn" @click=${e.onFormat} ?disabled=${!t}
                title="Format and beautify JSON">✨ Format</button>
              <button class="json-editor-btn" @click=${e.onMinify} ?disabled=${!t}
                title="Minify JSON to single line">🗜️ Minify</button>
              <button class="json-editor-btn" @click=${e.onClear} title="Clear JSON content">🗑️ Clear</button>
              <button class="json-editor-btn" @click=${e.onInsertSample} title="Insert sample JSON">📝 Sample</button>
            </div>
            <div class="json-editor-status ${t?"valid":"invalid"}">${r}</div>
          </div>
          <textarea
            class="form-control json-editor-textarea"
            .value=${s}
            @input=${e.onInput}
            @blur=${e.onBlur}
            @paste=${e.onPaste}
            placeholder="Enter JSON request body here..."
            spellcheck="false"
          ></textarea>
        </div>
      </div>
      ${Dr(s)}
      ${Br(s)}
    </div>
  `}function qr(s,e){let t=s.formatterJsonInput.trim().length>0,r=t&&H(s.formatterJsonInput),n=null,i="";if(t)try{n=JSON.parse(s.formatterJsonInput)}catch(a){i=a.message}let o=(a,l)=>y`
    <button
      class="debug-tab-button ${s.activeFormatterTab===a?"active":""}"
      @click=${()=>e.onTabChange(a)}
    >${l}</button>
  `;return y`
    <div class="debug-tools">
      <div class="form-group">
        <label class="control-label">Paste Response JSON</label>
        <textarea
          class="form-control"
          rows="8"
          .value=${s.formatterJsonInput}
          @input=${e.onJsonInput}
          placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
          style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
        ></textarea>
        ${i?y`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
      </div>

      ${r&&n?y`
        <div class="debug-tab-nav" style="margin-bottom: 0;">
          ${o("success","\u2713 Success Message")}
          ${o("warning","\u26A0 Warning Message")}
          ${o("error","\u2715 Error Message")}
        </div>

        <div class="debug-tab-content ${s.activeFormatterTab==="success"?"active":""}">
          ${e.renderMessageTypeConfig("success",s.successMessage,n)}
        </div>
        <div class="debug-tab-content ${s.activeFormatterTab==="warning"?"active":""}">
          ${e.renderMessageTypeConfig("warning",s.warningMessage,n)}
        </div>
        <div class="debug-tab-content ${s.activeFormatterTab==="error"?"active":""}">
          ${e.renderMessageTypeConfig("error",s.errorMessage,n)}
        </div>
      `:""}
    </div>
  `}function zn(s,e){let t=[];return s.forEach((r,n)=>{if(!r.checked)return;let i=U(e,n);t.push({title:r.title||n,value:i!==void 0?String(i):"N/A"})}),t}function Zr(s,e){let t=zn(s,e);return t.length===0?y`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`:t.map(r=>y`
    <div style="margin-bottom: 8px;">
      <strong>${r.title}:</strong> ${r.value}
    </div>
  `)}function Yr(s,e){return s.length===0?y`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`:s.map(([t,r],n)=>y`
    <div draggable="true"
      @dragstart=${i=>{i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",n.toString())}}
      @dragover=${i=>{i.preventDefault(),i.dataTransfer.dropEffect="move"}}
      @drop=${i=>{i.preventDefault();let o=parseInt(i.dataTransfer.getData("text/plain"));o!==n&&e.onReorder(o,n)}}
      style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; padding: 10px; background: var(--ntx-form-theme-color-background); border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; cursor: move; transition: all 0.2s;"
      @mouseenter=${i=>{i.currentTarget.style.borderColor="var(--ntx-form-theme-color-primary)",i.currentTarget.style.boxShadow="0 2px 4px rgba(0,0,0,0.1)"}}
      @mouseleave=${i=>{i.currentTarget.style.borderColor="var(--ntx-form-theme-color-border)",i.currentTarget.style.boxShadow="none"}}>
      <div style="font-size: 16px; color: var(--ntx-form-theme-color-secondary); cursor: grab;" title="Drag to reorder">⋮⋮</div>
      <div style="font-weight: 600; color: var(--ntx-form-theme-color-primary); min-width: 30px;">${n+1}.</div>
      <div style="flex: 1; min-width: 0;">
        <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-bottom: 4px; word-break: break-all;"><code style="font-size: 10px;">${t}</code></div>
        <input type="text" class="form-control" placeholder="Display title" .value=${r.title}
          @input=${i=>e.onTitleChange(t,i.target.value)}
          style="font-size: 13px; padding: 6px 8px; height: auto;" />
      </div>
      <button @click=${()=>e.onRemove(t)}
        style="background: var(--ntx-form-theme-color-error, #dc3545); color: white; border: none; border-radius: 4px; padding: 6px 10px; cursor: pointer; font-size: 12px; transition: filter 0.2s;"
        @mouseenter=${i=>{i.currentTarget.style.filter="brightness(0.9)"}}
        @mouseleave=${i=>{i.currentTarget.style.filter="brightness(1)"}} title="Remove field">✕</button>
    </div>
  `)}function Gr(s,e,t){let r=[],n=(i,o)=>{!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).forEach(a=>{let l=o?`${o}.${a}`:a,c=i[a];if(Array.isArray(c)&&c.length>0)t&&r.push({kind:"array",path:`${l}[*]`,title:a,preview:`Array with ${c.length} item${c.length>1?"s":""}`}),typeof c[0]=="object"&&!Array.isArray(c[0])&&n(c[0],t?`${l}[*]`:`${l}[0]`);else if(c!==null&&typeof c!="object"){let p=String(c);r.push({kind:"value",path:l,title:l.split(".").pop()||l,preview:p.length>50?`${p.substring(0,50)}...`:p})}else c&&typeof c=="object"&&!Array.isArray(c)&&n(c,l)})};return n(s,e),r}function jt(s){return Array.from(s.entries()).filter(([,e])=>e.checked).sort((e,t)=>e[1].order-t[1].order)}function Kr(s,e,t,r){if(!t){s.delete(e);return}let n=-1;s.forEach(i=>{i.order>n&&(n=i.order)}),s.set(e,{title:r,checked:!0,order:n+1})}function Qr(s,e,t){let r=s.get(e);r&&s.set(e,b(d({},r),{title:t}))}function Xr(s,e){s.delete(e)}function Wr(s,e,t){let r=jt(s);if(e===t)return;let[n]=r.splice(e,1);n&&(r.splice(t,0,n),r.forEach(([i,o],a)=>{s.set(i,b(d({},o),{order:a}))}))}function es(s,e,t){let r=e[s];if(r.startsWith('"{')&&r.endsWith('}"'))try{let n=JSON.parse(r.slice(1,-1).replace(/\\"/g,'"'));return{title:n.title||null,message:We(n,t)}}catch(n){return console.error("[Message Formatting] Failed to parse quoted config:",n),{title:null,message:r}}if(r.trim().startsWith('{"'))try{let n=JSON.parse(r);return{title:n.title||null,message:We(n,t)}}catch(n){return console.error("[Message Formatting] Failed to parse unquoted config:",n),{title:null,message:r}}return{title:null,message:r}}async function ts(s){let e=new AbortController,t=!1,r=s.timeoutSeconds===null?null:window.setTimeout(()=>{t=!0,e.abort()},s.timeoutSeconds*1e3);try{let n=await fetch(s.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:s.clientId,client_secret:s.clientSecret}),signal:e.signal});if(!n.ok)throw new Error(`Token request failed with status ${n.status}`);let i=await n.json();if(!i.access_token)throw new Error("No access_token in response");return{accessToken:i.access_token,debugMetadata:{token_type:i.token_type||"Bearer",expires_in:i.expires_in,scope:i.scope,fetched_at:new Date().toISOString(),expires_at:i.expires_in?new Date(Date.now()+i.expires_in*1e3).toISOString():null}}}catch(n){throw t&&s.timeoutSeconds!==null?new Error(`OAuth token request timed out after ${s.timeoutSeconds} seconds.`):n}finally{r!==null&&window.clearTimeout(r)}}var rs="1.1.8",Hn=new Set(["clientSecret"]),ss=!1;function Dn(s){if(ss)return;ss=!0;let e=Or.safeParse(s);if(e.success){console.log("[Plugin Contract] Contract validation passed");return}console.error("[Plugin Contract] Contract validation failed"),e.error.issues.forEach((t,r)=>{console.error(`  [${r+1}] path=${t.path.join(".")} message=${t.message}`)})}var T=class extends re{constructor(){super();this.activeDebugTab="properties";this.activeFormatterTab="success";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.formatterUseArrayNotation=!0;this.formatterMessageTitle="";this.label="";this.description="";this.readOnly=!1;this._value={success:!1,valid:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0};this.requestBody="";this.apiUrl="";this.requestHeaders="";this.bearerToken="";this.tokenUrl="";this.clientId="";this.clientSecret="";this.outputValueKey="";this.contentType="application/json";this.requestTimeout=30;this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.countdownEnabled=!1;this.countdownTimer=5;this._btnEnabled=!0;this.btnText="Send API Request";this.btnAlignment="left";this._btnVisible=!0;this._submissionAction="no-submit";this.submitHidden=!1;this.showMoreDetails="Never";this.alertPosition="After";this.detailsExpanded=!1;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.oauthTokenResponse=null;this.containingForm=null;this.validationModule=new ut;this.submissionScheduler=new ht({getCountdownSeconds:()=>this.countdownTimer,getLastApiCallTime:()=>this.lastApiCallTime,submit:()=>this.submitNintexForm(),requestUpdate:()=>this.requestUpdate(),onCooldownComplete:()=>{this.showCooldownAlert=!1}});this.isFinalizingSubmission=!1}get value(){return this._value}set value(t){let r=this._value;this._value=t,console.log("[Value Setter] Value changed, dispatching ntx-value-change event",t),this.dispatchNintexValueChange(t),this.requestUpdate("value",r)}dispatchNintexValueChange(t){this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:t,bubbles:!0,composed:!0}))}get btnEnabled(){return this._btnEnabled}set btnEnabled(t){let r=this._btnEnabled;this._btnEnabled=t,console.log(`[Property Setter] btnEnabled changed from ${r} to ${t}`),this.requestUpdate("btnEnabled",r)}get btnVisible(){return this._btnVisible}set btnVisible(t){let r=this._btnVisible;this._btnVisible=t,console.log(`[Property Setter] btnVisible changed from ${r} to ${t}`),this.requestUpdate("btnVisible",r)}get submissionAction(){return this._submissionAction}set submissionAction(t){let r=t||"no-submit",n=this._submissionAction;n!==r&&(this._submissionAction=r,console.log(`[Property Setter] submissionAction changed from ${n} to ${r}`),this.requestUpdate("submissionAction",n),this.isConnected&&(this.clearApiOutput("submission action changed"),this.publishPendingResultToNintex()))}connectedCallback(){var t,r;super.connectedCallback(),((t=this.value)==null?void 0:t.valid)!==!0&&((r=this.value)==null?void 0:r.valid)!==!1&&(this.value=b(d({},this.value),{valid:!1})),this.registerWithContainingForm(),this.validationModule.attach(),this.injectErrorMessageSuppressStyle()}registerWithContainingForm(){this.containingForm=X.register(this,this),this.toggleSubmitButtonVisibility()}unregisterFromContainingForm(){this.containingForm&&X.unregister(this.containingForm,this),this.containingForm=null}static getMetaConfig(){let t={controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:rs,description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional bearer token value for authorization header used if token URL is not provided",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional OAuth token endpoint URL",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional JSON key path to extract from response",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},requestTimeout:{type:"number",title:"Request Timeout",description:"Maximum seconds to wait for the OAuth token or API request. Set to 0 to disable the timeout.",defaultValue:30},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},valid:{type:"boolean",title:"Valid",description:"Validation flag used by form rules. True on successful API call and in only-submit mode."},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"Actual message from API response"},formattedResponse:{type:"string",title:"Formatted Response",description:"Formatted response message based on success warning and error message configuration"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:!1,valid:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true allows repeated API calls. If false blocks repeated calls after success until request configuration or submission behavior changes.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},submissionAction:{type:"string",title:"Submission Action",description:"Action to take after a successful API call Set to only submit to skip API call and submit form directly",enum:["no-submit","quick-submit","delayed-submit","only-submit"],defaultValue:"no-submit"},submitHidden:{type:"boolean",title:"Hide Submit Button",description:"If true, hides the Nintex form submit button from users.",defaultValue:!1},showMoreDetails:{type:"string",title:"Show More Details",description:"Controls when to show expandable raw response details in alerts.",enum:["Never","Always","On Error/Warning"],defaultValue:"Never"},alertPosition:{type:"string",title:"Alert Position",description:"Controls where the alert message is displayed relative to the button.",enum:["After","Before","Pop-out"],defaultValue:"After"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}};return Dn(t),t}render(){return this.debugMode?y`
        <div class="plugin-container">
          ${this.btnVisible?this.renderButtonWithAlert("Calling API..."):""}
          
          <div class="debug-tabs">
            <div class="debug-version">Plugin Version: ${rs}</div>
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
      `:this.btnVisible?y`
      <div class="plugin-container">
        ${this.renderButtonWithAlert("Processing...")}
      </div>
    `:y`<div class="plugin-container" style="display: none;"></div>`}renderButtonWithAlert(t){let r=this.renderResponseAlert(this.alertPosition==="Before"),n=y`
      <button 
        class="btn btn-primary" 
        part="api-button"
        @click=${()=>this.triggerAPICall()} 
        ?disabled=${this.isButtonDisabled()}
      >
        ${this.isLoading?y`<span class="spinner"></span>${t}`:this.btnText}
      </button>
    `;return this.alertPosition==="Pop-out"?y`
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            ${n}
          </div>
        </div>
        ${this.shouldShowAlert()?this.renderModal(r):""}
      `:this.alertPosition==="Before"?y`
        <div class="form-group">
          ${r}
          <div class="btn-container align-${this.btnAlignment}">
            ${n}
          </div>
        </div>
      `:y`
      <div class="form-group">
        <div class="btn-container align-${this.btnAlignment}">
          ${n}
        </div>
        ${r}
      </div>
    `}shouldShowAlert(){let r=Date.now()-this.lastApiCallTime,n=this.countdownTimer*1e3;return this.countdownEnabled&&this.lastApiCallTime>0&&r<n&&this.showCooldownAlert?!0:!(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)}renderModal(t){return y`
      <div class="modal-overlay" @click=${r=>{r.target===r.currentTarget&&this.closeModal()}}>
        <div class="modal-content">
          <button class="modal-close" @click=${()=>this.closeModal()}>&times;</button>
          ${t}
        </div>
      </div>
    `}closeModal(){this.apiResponse="",this.responseType=null,this.showCooldownAlert=!1,this.requestUpdate()}renderResponseAlert(t=!1){var ft;let n=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3,o=this.countdownEnabled&&this.lastApiCallTime>0&&n<i,a=this.submissionAction==="delayed-submit"&&this.submissionScheduler.isTimerActive&&(this.responseType==="success"||this.responseType==="warning"),l=t?"alert-before":"";if(o&&this.showCooldownAlert){let N=Math.ceil((i-n)/1e3);return y`
        <div class="alert alert-info ${l}" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${N} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let c=`alert-${this.responseType}`,p=this.getAlertIcon(this.responseType),g=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),k=this.getCustomMessage(this.responseType),C=k.title,I=k.message,W=0;if(a){let N=Date.now()-this.submissionScheduler.delayedSubmissionStartTime,ns=this.countdownTimer*1e3-N;W=Math.max(0,Math.ceil(ns/1e3))}let ae=I.includes(`
`);if(this.responseType==="success"){let N=this.shouldShowMoreDetails("success")||a;return y`
        <div class="alert ${c} ${l}" part="response-alert">
          ${C?y`
            <div>
              <strong>${C}</strong>
            </div>
          `:""}
          ${ae?y`
            <div class="alert-response" style="white-space: pre-line; margin-top: ${C?"8px":"0"};">
              ${I}
            </div>
          `:y`
            <div style="display: inline; margin-left: ${C?"4px":"0"};">
              ${I}
            </div>
          `}
          ${N?y`
            <div class="alert-footer">
              <div class="alert-footer-left">
                ${this.shouldShowMoreDetails("success")?y`
                  <button 
                    class="alert-more-details-toggle"
                    @click=${()=>this.toggleDetailsExpanded()}
                  >
                    ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
                  </button>
                `:""}
              </div>
              ${a?y`
                <div class="alert-footer-right">
                  Submitting form in ${W} seconds...
                </div>
              `:""}
            </div>
            ${this.detailsExpanded&&this.shouldShowMoreDetails("success")?y`
              <div class="alert-more-details-wrapper">
                <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
                <div class="alert-more-details-content">${mt(this.apiResponse)}</div>
              </div>
            `:""}
          `:""}
        </div>
      `}let $e=this.shouldShowMoreDetails(this.responseType)||a;return y`
      <div class="alert ${c} ${l}" part="response-alert">
        ${C?y`
          <div>
            <strong>${C}</strong>
          </div>
        `:""}
        ${ae?y`
          <div class="alert-response" style="white-space: pre-line; margin-top: ${C?"8px":"0"};">
            ${I}
          </div>
        `:y`
          <div style="display: inline; margin-left: ${C?"4px":"0"};">
            ${I}
          </div>
        `}
        ${(ft=this.value)!=null&&ft.message?y`
          <div class="alert-response">
            ${ur(Ur(this.value.message))}
          </div>
        `:""}
        ${$e?y`
          <div class="alert-footer">
            <div class="alert-footer-left">
              ${this.shouldShowMoreDetails(this.responseType)?y`
                <button 
                  class="alert-more-details-toggle"
                  @click=${()=>this.toggleDetailsExpanded()}
                >
                  ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
                </button>
              `:""}
            </div>
            ${a?y`
              <div class="alert-footer-right">
                Submitting form in ${W} seconds...
              </div>
            `:""}
          </div>
          ${this.detailsExpanded&&this.shouldShowMoreDetails(this.responseType)?y`
            <div class="alert-more-details-wrapper">
              <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
              <div class="alert-more-details-content">${mt(this.apiResponse)}</div>
            </div>
          `:""}
        `:""}
      </div>
    `}getAlertIcon(t){switch(t){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}shouldShowMoreDetails(t){return this.showMoreDetails==="Never"?!1:this.showMoreDetails==="Always"?!0:this.showMoreDetails==="On Error/Warning"?t==="error"||t==="warning":!1}toggleDetailsExpanded(){this.detailsExpanded=!this.detailsExpanded,this.requestUpdate()}copyRawResponseToClipboard(){let t=mt(this.apiResponse);this.copyToClipboard(t)}getCustomMessage(t){return es(t,{success:this.successMessage,warning:this.warningMessage,error:this.errorMessage},this.value.data)}updated(t){let n=["allowMultipleAPICalls","apiUrl","method","requestBody","requestHeaders","bearerToken","tokenUrl","clientId","clientSecret","contentType","outputValueKey","requestTimeout"].some(o=>t.has(o)),i=t.has("sendAPICall")&&this.sendAPICall;(n||i)&&(this.clearApiOutput(n?"configuration changed":"new API call requested"),i?this.publishPendingResultBeforeValidation():this.publishPendingResultToNintex()),t.has("submitHidden")&&this.toggleSubmitButtonVisibility(),t.has("btnVisible")&&(console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`),this.requestUpdate()),t.has("btnEnabled")&&(console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`),this.requestUpdate()),t.has("btnText")&&(console.log(`[UI Property Change] btnText changed to: ${this.btnText}`),this.requestUpdate()),t.has("btnAlignment")&&(console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`),this.requestUpdate()),t.has("debugMode")&&(console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`),this.requestUpdate())}toggleSubmitButtonVisibility(){this.containingForm&&X.setSubmitHidden(this.containingForm,this,this.submitHidden)}clearApiOutput(t){this.hasSuccessfulCall=!1;let r=new Date().toISOString();console.log(`[API Call] Clearing API output: ${t}`),this.responseType=null,this.apiResponse="",this.value={success:!1,valid:!1,statusCode:0,responseType:"pending",data:"",message:"",formattedResponse:"",timestamp:r,executionTime:0}}async publishPendingResultToNintex(){await this.updateComplete,this.dispatchNintexValueChange(this.value),await new Promise(t=>window.setTimeout(t,800))}async publishPendingResultBeforeValidation(){await this.publishPendingResultToNintex(),await this.handleAPICallTrigger()}async handleAPICallTrigger(){if(console.log("[API Call] handleAPICallTrigger started"),this.sendAPICall=!1,this.isFinalizingSubmission){console.log("[API Call] Ignored - final native submission is in progress");return}if(this.submissionAction==="only-submit"){console.log("[API Call] Submission action is only-submit \u2014 submitting form directly"),this.value=b(d({},this.value),{valid:!0}),this.submitNintexForm();return}console.log("[API Call] Running form validation via ValidationModule...");let t=await this.validationModule.runHardValidation();if(console.log("[API Call] Validation result:",t),!t){console.log("[API Call] Validation FAILED \u2014 blocking API call");return}if(console.log("[API Call] Validation PASSED \u2014 proceeding"),!this.allowMultipleAPICalls&&this.hasSuccessfulCall){console.log("[API Call] Multiple API calls not allowed and already had successful call \u2014 BLOCKING");return}if(this.countdownEnabled){let n=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&n<i){console.log("[API Call] In cooldown period \u2014 BLOCKING"),this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.submissionScheduler.startCooldownTimer();return}}console.log("[API Call] All checks passed \u2014 calling handleApiCall()"),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls)return this.isLoading;let t=this.hasSuccessfulCall;return this.isLoading||!this.btnEnabled||t}setActiveTab(t){this.activeDebugTab=t,this.requestUpdate()}renderPropertiesTab(){let t=this.constructor.getMetaConfig();return zr(t.properties,this,Hn)}renderRequestDetailsTab(){return Hr({apiUrl:this.apiUrl,method:this.method,oauthTokenResponse:this.oauthTokenResponse,requestHeaders:this.requestHeaders,requestBody:this.requestBody,isLoading:this.isLoading,hasSuccessfulCall:this.hasSuccessfulCall,isButtonDisabled:this.isButtonDisabled(),apiResponse:this.apiResponse},t=>this.copyToClipboard(t))}renderAPIToolsTab(){return Jr(this.requestBody,{onFormat:()=>this.formatJson(),onMinify:()=>this.minifyJson(),onClear:()=>this.clearJson(),onInsertSample:()=>this.insertSampleJson(),onInput:t=>this.handleJsonInput(t),onBlur:t=>this.handleJsonBlur(t),onPaste:t=>this.handleJsonPaste(t)})}renderResponseFormatterTab(){return qr({formatterJsonInput:this.formatterJsonInput,activeFormatterTab:this.activeFormatterTab,successMessage:this.successMessage,warningMessage:this.warningMessage,errorMessage:this.errorMessage},{onJsonInput:t=>{let r=t.target;this.formatterJsonInput=r.value,this.requestUpdate()},onTabChange:t=>{this.activeFormatterTab=t,this.loadConfigIntoFields(t),this.requestUpdate()},renderMessageTypeConfig:(t,r,n)=>this.renderMessageTypeConfig(t,r,n)})}renderMessageTypeConfig(t,r,n){let o={success:{bg:"#d4edda",text:"#155724",border:"#c3e6cb",btnBg:"#28a745",btnText:"white"},warning:{bg:"#fff3cd",text:"#856404",border:"#ffeaa7",btnBg:"#ffc107",btnText:"#000"},error:{bg:"#f8d7da",text:"#721c24",border:"#f5c6cb",btnBg:"#dc3545",btnText:"white"}}[t];return y`
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
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; background: ${o.bg}; color: ${o.text}; border-color: ${o.border};"
            ></textarea>
          </div>
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
            ${r.trim().startsWith('{"fields"')||r.trim().startsWith('"{')?"\u2713 Formatted response configuration detected":"\u25CB Plain text message"}
          </div>
        </div>

        <!-- Preview -->
        <div class="form-group">
          <label class="control-label">Preview of Current Configuration</label>
          <div style="border: 1px solid ${o.border}; border-radius: 4px; padding: 16px; background: ${o.bg}; color: ${o.text}; white-space: pre-line; min-height: 60px;">
            ${this.getPreviewForConfig(r,n)}
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
              @input=${a=>{let l=a.target;this.formatterMessageTitle=l.value,this.requestUpdate()}}
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
                    @change=${a=>{let l=a.target;this.formatterUseArrayNotation=l.checked,this.requestUpdate()}}
                    style="cursor: pointer;"
                  />
                  List all array items
                </label>
              </h4>
              <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background);">
                ${this.renderAvailableFields(n,"")}
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

        ${this.formatterSelectedFields.size>0?y`
          <!-- New Configuration Preview -->
          <div class="form-group">
            <label class="control-label">New Configuration Preview</label>
            <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt); white-space: pre-line;">
              ${this.renderFormattedPreview(n)}
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
                .value=${Ft(this.formatterSelectedFields,this.formatterMessageTitle)}
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 100px; background: ${o.bg}; color: ${o.text}; border-color: ${o.border};"
              ></textarea>
              <button 
                class="btn" 
                style="position: absolute; top: 8px; right: 8px; padding: 6px 16px; font-size: 13px; background: ${o.btnBg}; color: ${o.btnText||"white"}; border: none; font-weight: 600;"
                @click=${()=>{let a=Ft(this.formatterSelectedFields,this.formatterMessageTitle);this.copyToClipboard(a)}}
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
    `}getPreviewForConfig(t,r){if(!t||t.trim().length===0)return y`<span style="font-style: italic; opacity: 0.6;">No configuration set</span>`;let n=this.value,i=b(d({},this.value),{data:JSON.stringify(r)});this.value=i;let o;if(t.trim().startsWith('{"fields"')||t.trim().startsWith('"{'))try{let a;if(t.startsWith('"{')&&t.endsWith('}"')){let l=t.slice(1,-1).replace(/\\"/g,'"');a=JSON.parse(l)}else a=JSON.parse(t);o=We(a,this.value.data)}catch(a){o=t}else o=t;return this.value=n,o}loadConfigIntoFields(t){let r=t==="success"?this.successMessage:t==="warning"?this.warningMessage:this.errorMessage;if(this.formatterSelectedFields.clear(),this.formatterMessageTitle="",!r||r.trim().length===0){this.requestUpdate();return}try{let n=Lr(r);if(!n){this.requestUpdate();return}n.title&&(this.formatterMessageTitle=n.title),n.fields&&Array.isArray(n.fields)&&n.fields.forEach((i,o)=>{this.formatterSelectedFields.set(i.path,{title:i.title||i.path,checked:!0,order:o})})}catch(n){console.error("[Config Loading] Failed to parse config:",n)}this.requestUpdate()}renderAvailableFields(t,r){let n=Gr(t,r,this.formatterUseArrayNotation);return n.length===0?y`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`:n.map(i=>{var a;let o=((a=this.formatterSelectedFields.get(i.path))==null?void 0:a.checked)||!1;return y`
        <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${o?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
          <input
            type="checkbox"
            .checked=${o}
            @change=${l=>{let c=l.target;Kr(this.formatterSelectedFields,i.path,c.checked,i.title),this.requestUpdate()}}
            style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
          />
          <div style="flex: 1; margin-left: 10px; min-width: 0;">
            <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
              <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${i.path}</code>
              ${i.kind==="array"?y`<span style="margin-left: 6px; font-size: 11px; color: var(--ntx-form-theme-color-secondary);">📋 Array</span>`:""}
            </div>
            <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
              ${i.preview}
            </div>
          </div>
        </div>
      `})}renderSelectedFieldsList(){return Yr(jt(this.formatterSelectedFields),{onReorder:(t,r)=>{Wr(this.formatterSelectedFields,t,r),this.requestUpdate()},onTitleChange:(t,r)=>{Qr(this.formatterSelectedFields,t,r),this.requestUpdate()},onRemove:t=>{Xr(this.formatterSelectedFields,t),this.requestUpdate()}})}renderFormattedPreview(t){return Zr(this.formatterSelectedFields,t)}formatJson(){if(H(this.requestBody))try{let t=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(t,null,2),this.requestUpdate()}catch(t){}}minifyJson(){if(H(this.requestBody))try{let t=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(t),this.requestUpdate()}catch(t){}}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){let t={startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:"req-"+Date.now()}}}};this.requestBody=JSON.stringify(t,null,2),this.requestUpdate()}handleJsonInput(t){let r=t.target;this.requestBody=r.value,this.requestUpdate()}handleJsonBlur(t){if(H(this.requestBody)&&this.requestBody.trim())try{let r=JSON.parse(this.requestBody),n=JSON.stringify(r,null,2);n!==this.requestBody&&(this.requestBody=n,this.requestUpdate())}catch(r){}}handleJsonPaste(t){setTimeout(()=>{H(this.requestBody)&&this.formatJson()},100)}static removeInstructionalPlaceholders(t){if(Array.isArray(t))return t.map(r=>this.removeInstructionalPlaceholders(r));if(t&&typeof t=="object"){let r={};for(let[n,i]of Object.entries(t)){if(typeof i=="string"&&/^<.*>$/.test(i.trim()))continue;let o=this.removeInstructionalPlaceholders(i);o!==void 0&&!(typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(r[n]=o)}return r}return t}getRequestTimeoutSeconds(){let t=Number(this.requestTimeout);return Number.isFinite(t)&&t>0?t:null}setRequestConfigurationError(t){let r=Date.now()-this.apiCallStartTime,n=new Date().toISOString();this.responseType="error",this.apiResponse=t;let i=this.getCustomMessage("error").message;this.value={success:!1,valid:!1,statusCode:0,responseType:"error",data:t,message:t,formattedResponse:i,timestamp:n,executionTime:r},this.requestUpdate()}async handleApiCall(){var a;if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let t=Pr(this.contentType,this.requestBody);if(t.error){this.setRequestConfigurationError(`Request body is not valid JSON: ${t.error}`);return}let r=t.body,n=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{let l=await ts({tokenUrl:this.tokenUrl,clientId:this.clientId,clientSecret:this.clientSecret,timeoutSeconds:this.getRequestTimeoutSeconds()});n=l.accessToken,this.oauthTokenResponse=l.debugMetadata}catch(l){let c=Date.now()-this.apiCallStartTime,p=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${l instanceof Error?l.message:String(l)}`,this.value={success:!1,valid:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:"",formattedResponse:this.errorMessage,timestamp:p,executionTime:c},this.isLoading=!1,this.requestUpdate();return}let i=this.apiUrl||"",o=Fr(this.requestHeaders);n&&n.trim()&&(o.Authorization=`Bearer ${n.trim()}`),await pr({url:i,method:this.method||"POST",headers:o,requestBody:r,contentType:this.contentType,timeoutSeconds:(a=this.getRequestTimeoutSeconds())!=null?a:0,setLoading:l=>{this.isLoading=l,this.requestUpdate()},setResponse:(l,c,p)=>{let g=Date.now()-this.apiCallStartTime,k=new Date().toISOString();this.apiResponse=l,this.responseType=p===!1?"error":Vr(l),this.formatterJsonInput=l,this.formatterSelectedFields.clear();let C,I,W="";try{let N=JSON.parse(l);N.access_token&&(C=N.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(I=U(N,this.outputValueKey)),W=U(N,"d.Message")||U(N,"Message")||U(N,"message")||U(N,"msg")||U(N,"data.message")||""}catch(N){}let ae=this.getCustomMessage(this.responseType),$e=p===!0&&this.responseType==="success";this.value=d(d({success:$e,valid:$e,statusCode:c!==void 0?c:this.responseType==="success"?200:500,responseType:this.responseType,data:l,message:W,formattedResponse:ae.message,timestamp:k,executionTime:g},C&&{access_token:C}),I!==void 0&&{output:I}),$e&&(this.hasSuccessfulCall=!0),console.log("[Value Change] Value updated at:",new Date().toISOString()),this.requestUpdate(),$e&&(console.log("[Value Change] Waiting 800ms for Nintex to process value change..."),setTimeout(()=>{console.log("[Value Change] Wait complete at:",new Date().toISOString(),"- proceeding with submission action"),this.handlePostSubmissionAction()},800))}})}async copyToClipboard(t){try{await navigator.clipboard.writeText(t)}catch(r){console.error("Failed to copy text:",r)}}handlePostSubmissionAction(){this.submissionScheduler.handlePostSubmissionAction(this.submissionAction)}submitNintexForm(){if(console.log("[Submission Action] Attempting to submit Nintex form"),!this.containingForm){console.error("[Submission Action] No coordinated form found");return}console.log("[Submission Action] Clicking submit button"),this.isFinalizingSubmission=!0,X.submit(this.containingForm,()=>{this.isFinalizingSubmission=!1})||(console.error("[Submission Action] No submit button found"),this.isFinalizingSubmission=!1)}disconnectedCallback(){super.disconnectedCallback(),this.submissionScheduler.dispose(),this.validationModule.detach(),this.unregisterFromContainingForm(),this.removeErrorMessageSuppressStyle()}injectErrorMessageSuppressStyle(){if(document.getElementById(T.ERROR_SUPPRESS_STYLE_ID))return;let t=document.createElement("style");t.id=T.ERROR_SUPPRESS_STYLE_ID,t.textContent=".form-group:has(daf-webrequest-plugin) .nx-error-message { display: none !important; }",document.head.appendChild(t)}removeErrorMessageSuppressStyle(){var t;document.querySelectorAll("daf-webrequest-plugin").length===0&&((t=document.getElementById(T.ERROR_SUPPRESS_STYLE_ID))==null||t.remove())}};T.styles=vt`
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
  `,T.ERROR_SUPPRESS_STYLE_ID="daf-webrequest-suppress-nx-error",$([E({type:String})],T.prototype,"label",2),$([E({type:String})],T.prototype,"description",2),$([E({type:Boolean})],T.prototype,"readOnly",2),$([E({type:Object})],T.prototype,"value",1),$([E({type:String})],T.prototype,"requestBody",2),$([E({type:String})],T.prototype,"apiUrl",2),$([E({type:String})],T.prototype,"requestHeaders",2),$([E({type:String})],T.prototype,"bearerToken",2),$([E({type:String})],T.prototype,"tokenUrl",2),$([E({type:String})],T.prototype,"clientId",2),$([E({type:String})],T.prototype,"clientSecret",2),$([E({type:String})],T.prototype,"outputValueKey",2),$([E({type:String})],T.prototype,"contentType",2),$([E({type:Number})],T.prototype,"requestTimeout",2),$([E({type:Boolean,reflect:!0})],T.prototype,"debugMode",2),$([E({type:String})],T.prototype,"method",2),$([E({type:String})],T.prototype,"successMessage",2),$([E({type:String})],T.prototype,"warningMessage",2),$([E({type:String})],T.prototype,"errorMessage",2),$([E({type:Boolean,reflect:!0,attribute:"send-api-call"})],T.prototype,"sendAPICall",2),$([E({type:Boolean,reflect:!0,attribute:"allow-multiple-api-calls"})],T.prototype,"allowMultipleAPICalls",2),$([E({type:Boolean,reflect:!0,attribute:"countdown-enabled"})],T.prototype,"countdownEnabled",2),$([E({type:Number})],T.prototype,"countdownTimer",2),$([E({type:Boolean,reflect:!0,attribute:"btn-enabled"})],T.prototype,"btnEnabled",1),$([E({type:String,reflect:!0,attribute:"btn-text"})],T.prototype,"btnText",2),$([E({type:String,reflect:!0,attribute:"btn-alignment"})],T.prototype,"btnAlignment",2),$([E({type:Boolean,reflect:!0,attribute:"btn-visible"})],T.prototype,"btnVisible",1),$([E({type:String,reflect:!0,attribute:"submission-action"})],T.prototype,"submissionAction",1),$([E({type:Boolean,reflect:!0,attribute:"submit-hidden"})],T.prototype,"submitHidden",2),$([E({type:String,reflect:!0,attribute:"show-more-details"})],T.prototype,"showMoreDetails",2),$([E({type:String,reflect:!0,attribute:"alert-position"})],T.prototype,"alertPosition",2),T=$([hr("daf-webrequest-plugin")],T);export{T as DafWebRequestPlugin};
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
