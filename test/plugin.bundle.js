var yt=Object.defineProperty,gs=Object.defineProperties,ys=Object.getOwnPropertyDescriptor,vs=Object.getOwnPropertyDescriptors;var Ut=Object.getOwnPropertySymbols;var bs=Object.prototype.hasOwnProperty,xs=Object.prototype.propertyIsEnumerable;var zt=(r,e,t)=>e in r?yt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))bs.call(e,t)&&zt(r,t,e[t]);if(Ut)for(var t of Ut(e))xs.call(e,t)&&zt(r,t,e[t]);return r},b=(r,e)=>gs(r,vs(e));var _s=(r,e)=>{for(var t in e)yt(r,t,{get:e[t],enumerable:!0})};var $=(r,e,t,s)=>{for(var n=s>1?void 0:s?ys(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&yt(e,t,n),n};var et=globalThis,tt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),Ht=new WeakMap,Ue=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tt&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=Ht.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ht.set(t,e))}return e}toString(){return this.cssText}},Jt=r=>new Ue(typeof r=="string"?r:r+"",void 0,vt),bt=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((s,n,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[i+1],r[0]);return new Ue(t,r,vt)},Dt=(r,e)=>{if(tt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),n=et.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,r.appendChild(s)}},xt=tt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return Jt(t)})(r):r;var{is:ws,defineProperty:Ts,getOwnPropertyDescriptor:Ss,getOwnPropertyNames:As,getOwnPropertySymbols:Cs,getPrototypeOf:ks}=Object,X=globalThis,Bt=X.trustedTypes,$s=Bt?Bt.emptyScript:"",_t=X.reactiveElementPolyfillSupport,ze=(r,e)=>r,He={toAttribute(r,e){switch(e){case Boolean:r=r?$s:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch(s){t=null}}return t}},rt=(r,e)=>!ws(r,e),qt={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:rt},Zt,Yt;(Zt=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Yt=X.litPropertyMetadata)!=null||(X.litPropertyMetadata=new WeakMap);var B=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=qt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Ts(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){var o;let{get:n,set:i}=(o=Ss(this.prototype,e))!=null?o:{get(){return this[t]},set(a){this[t]=a}};return{get:n,set(a){let l=n==null?void 0:n.call(this);i==null||i.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:qt}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;let e=ks(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){let t=this.properties,s=[...As(t),...Cs(t)];for(let n of s)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let n of s)t.unshift(xt(n))}else e!==void 0&&t.push(xt(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return Dt(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var n;return(n=s.hostConnected)==null?void 0:n.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var i;let s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){let o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:He).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i,o,a,l;let s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let c=s.getPropertyOptions(n),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((i=c.converter)==null?void 0:i.fromAttribute)!==void 0?c.converter:He;this._$Em=n,this[n]=(l=(a=p.fromAttribute(t,c.type))!=null?a:(o=this._$Ej)==null?void 0:o.get(n))!=null?l:null,this._$Em=null}}requestUpdate(e,t,s){var n,i;if(e!==void 0){let o=this.constructor,a=this[e];if(s!=null||(s=o.getPropertyOptions(e)),!(((n=s.hasChanged)!=null?n:rt)(a,t)||s.useDefault&&s.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:n,wrapped:i},o){var a,l,c;s&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(l=o!=null?o:t)!=null?l:this[e]),i!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:l}=a,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},Gt;B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[ze("elementProperties")]=new Map,B[ze("finalized")]=new Map,_t==null||_t({ReactiveElement:B}),((Gt=X.reactiveElementVersions)!=null?Gt:X.reactiveElementVersions=[]).push("2.1.0");var De=globalThis,st=De.trustedTypes,Kt=st?st.createPolicy("lit-html",{createHTML:r=>r}):void 0,sr="$lit$",W=`lit$${Math.random().toFixed(9).slice(2)}$`,nr="?"+W,Es=`<${nr}>`,ce=document,Be=()=>ce.createComment(""),qe=r=>r===null||typeof r!="object"&&typeof r!="function",Et=Array.isArray,Rs=r=>Et(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",wt=`[ 	
\f\r]`,Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,Xt=/>/g,ae=RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,er=/"/g,ir=/^(?:script|style|textarea|title)$/i,Rt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),y=Rt(1),li=Rt(2),ci=Rt(3),q=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),tr=new WeakMap,le=ce.createTreeWalker(ce,129);function or(r,e){if(!Et(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kt!==void 0?Kt.createHTML(e):e}var Is=(r,e)=>{let t=r.length-1,s=[],n,i=e===2?"<svg>":e===3?"<math>":"",o=Je;for(let a=0;a<t;a++){let l=r[a],c,p,g=-1,k=0;for(;k<l.length&&(o.lastIndex=k,p=o.exec(l),p!==null);)k=o.lastIndex,o===Je?p[1]==="!--"?o=Qt:p[1]!==void 0?o=Xt:p[2]!==void 0?(ir.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=ae):p[3]!==void 0&&(o=ae):o===ae?p[0]===">"?(o=n!=null?n:Je,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?ae:p[3]==='"'?er:Wt):o===er||o===Wt?o=ae:o===Qt||o===Xt?o=Je:(o=ae,n=void 0);let C=o===ae&&r[a+1].startsWith("/>")?" ":"";i+=o===Je?l+Es:g>=0?(s.push(c),l.slice(0,g)+sr+l.slice(g)+W+C):l+W+(g===-2?a:C)}return[or(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Ze=class r{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let i=0,o=0,a=e.length-1,l=this.parts,[c,p]=Is(e,t);if(this.el=r.createElement(c,s),le.currentNode=this.el.content,t===2||t===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(n=le.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let g of n.getAttributeNames())if(g.endsWith(sr)){let k=p[o++],C=n.getAttribute(g).split(W),M=/([.?@])?(.*)/.exec(k);l.push({type:1,index:i,name:M[2],strings:C,ctor:M[1]==="."?At:M[1]==="?"?Ct:M[1]==="@"?kt:Ee}),n.removeAttribute(g)}else g.startsWith(W)&&(l.push({type:6,index:i}),n.removeAttribute(g));if(ir.test(n.tagName)){let g=n.textContent.split(W),k=g.length-1;if(k>0){n.textContent=st?st.emptyScript:"";for(let C=0;C<k;C++)n.append(g[C],Be()),le.nextNode(),l.push({type:2,index:++i});n.append(g[k],Be())}}}else if(n.nodeType===8)if(n.data===nr)l.push({type:2,index:i});else{let g=-1;for(;(g=n.data.indexOf(W,g+1))!==-1;)l.push({type:7,index:i}),g+=W.length-1}i++}}static createElement(e,t){let s=ce.createElement("template");return s.innerHTML=e,s}};function $e(r,e,t=r,s){var o,a,l;if(e===q)return e;let n=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl,i=qe(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),i===void 0?n=void 0:(n=new i(r),n._$AT(r,t,s)),s!==void 0?((l=t._$Co)!=null?l:t._$Co=[])[s]=n:t._$Cl=n),n!==void 0&&(e=$e(r,n._$AS(r,e.values),n,s)),e}var St=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;let{el:{content:t},parts:s}=this._$AD,n=((c=e==null?void 0:e.creationScope)!=null?c:ce).importNode(t,!0);le.currentNode=n;let i=le.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let p;l.type===2?p=new Ye(i,i.nextSibling,this,e):l.type===1?p=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(p=new $t(i,this,e)),this._$AV.push(p),l=s[++a]}o!==(l==null?void 0:l.index)&&(i=le.nextNode(),o++)}return le.currentNode=ce,n}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},Ye=class r{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,n){var i;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=(i=n==null?void 0:n.isConnected)!=null?i:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$e(this,e,t),qe(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Rs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ze.createElement(or(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(t);else{let o=new St(n,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=tr.get(e.strings);return t===void 0&&tr.set(e.strings,t=new Ze(e)),t}k(e){Et(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,n=0;for(let i of e)n===t.length?t.push(s=new r(this.O(Be()),this.O(Be()),this,this.options)):s=t[n],s._$AI(i),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,i){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=R}_$AI(e,t=this,s,n){let i=this.strings,o=!1;if(i===void 0)e=$e(this,e,t,0),o=!qe(e)||e!==this._$AH&&e!==q,o&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=$e(this,a[s+l],t,l),c===q&&(c=this._$AH[l]),o||(o=!qe(c)||c!==this._$AH[l]),c===R?e=R:e!==R&&(e+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!n&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},At=class extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},Ct=class extends Ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}},kt=class extends Ee{constructor(e,t,s,n,i){super(e,t,s,n,i),this.type=5}_$AI(e,t=this){var o;if((e=(o=$e(this,e,t,0))!=null?o:R)===q)return;let s=this._$AH,n=e===R&&s!==R||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==R&&(s===R||n);n&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},$t=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){$e(this,e)}};var Tt=De.litHtmlPolyfillSupport,rr;Tt==null||Tt(Ze,Ye),((rr=De.litHtmlVersions)!=null?rr:De.litHtmlVersions=[]).push("3.3.0");var ar=(r,e,t)=>{var i,o;let s=(i=t==null?void 0:t.renderBefore)!=null?i:e,n=s._$litPart$;if(n===void 0){let a=(o=t==null?void 0:t.renderBefore)!=null?o:null;s._$litPart$=n=new Ye(e.insertBefore(Be(),a),a,void 0,t!=null?t:{})}return n._$AI(r),n};var de=globalThis,ee=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;let e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ar(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return q}},lr;ee._$litElement$=!0,ee.finalized=!0,(lr=de.litElementHydrateSupport)==null||lr.call(de,{LitElement:ee});var It=de.litElementPolyfillSupport;It==null||It({LitElement:ee});var cr;((cr=de.litElementVersions)!=null?cr:de.litElementVersions=[]).push("4.2.0");var dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ur=r=>(...e)=>({_$litDirective$:r,values:e}),nt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Ge=class extends nt{constructor(e){if(super(e),this.it=R,e.type!==dr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===R||e==null)return this._t=void 0,this.it=e;if(e===q)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ge.directiveName="unsafeHTML",Ge.resultType=1;var pr=ur(Ge);async function hr({url:r,method:e="POST",headers:t={},requestBody:s,contentType:n="application/json",timeoutSeconds:i=30,setLoading:o,setResponse:a}){let l=Number.isFinite(i)&&i>0?i:null,c=new AbortController,p=!1,g=l===null?null:window.setTimeout(()=>{p=!0,c.abort()},l*1e3);o(!0);try{let k,C=d({Accept:"application/json"},t);["POST","PUT","PATCH","DELETE"].includes(e.toUpperCase())&&s!=null&&s!==""&&(n==="application/json"?(C["Content-Type"]="application/json",k=typeof s=="string"?s:JSON.stringify(s)):n==="application/x-www-form-urlencoded"?(C["Content-Type"]="application/x-www-form-urlencoded",typeof s=="string"?k=s:typeof s=="object"&&s!==null&&(k=Object.keys(s).map(oe=>`${encodeURIComponent(oe)}=${encodeURIComponent(s[oe])}`).join("&"))):(C["Content-Type"]=n,k=typeof s=="string"?s:JSON.stringify(s)));let M=await fetch(r,{method:e,headers:C,body:k,signal:c.signal}),ie=await M.text();a(ie,M.status,M.ok)}catch(k){let C=p&&l!==null?`Request timed out after ${l} seconds.`:"Error: "+((k==null?void 0:k.message)||k);a(C,0,!1)}finally{g!==null&&window.clearTimeout(g),o(!1)}}var mr=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var Ms={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:rt},Os=(r=Ms,e,t)=>{let{kind:s,metadata:n}=t,i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(t.name,r),s==="accessor"){let{name:o}=t;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,r)},init(a){return a!==void 0&&this.C(o,void 0,r,a),a}}}if(s==="setter"){let{name:o}=t;return function(a){let l=this[o];e.call(this,a),this.requestUpdate(o,l,r)}}throw Error("Unsupported decorator location: "+s)};function E(r){return(e,t)=>typeof t=="object"?Os(r,e,t):((s,n,i)=>{let o=n.hasOwnProperty(i);return n.constructor.createProperty(i,s),o?Object.getOwnPropertyDescriptor(n,i):void 0})(r,e,t)}var fr='[role="alert"], .ntx-form-error, .ntx-error-message',ot=class{constructor(){this.isBlurRevalidating=!1;this.focusedControlValues=new WeakMap;this._onGlobalFocusIn=e=>{var i,o,a;let s=(a=((o=(i=e.composedPath)==null?void 0:i.call(e))!=null?o:[])[0])!=null?a:e.target,n=this.getTrackableControl(s);n&&this.focusedControlValues.set(n,this.getComparableControlValue(n))};this._onGlobalFocusOut=e=>{var l,c,p;if(this.isBlurRevalidating)return;let s=(p=((c=(l=e.composedPath)==null?void 0:l.call(e))!=null?c:[])[0])!=null?p:e.target;if(!(s instanceof HTMLElement))return;let n=this.getFormContext();if(!n||!n.form.contains(s)||!this.hasValidationMarkers(n.form))return;let i=this.getTrackableControl(s);if(!i)return;let o=this.focusedControlValues.get(i),a=this.getComparableControlValue(i);this.focusedControlValues.delete(i),!(o===void 0||o===a)&&(this.isBlurRevalidating=!0,this.runSoftValidationAndUpdateUI(n).then(()=>{this.isBlurRevalidating=!1}).catch(()=>{this.isBlurRevalidating=!1}))}}attach(){document.addEventListener("focusin",this._onGlobalFocusIn),document.addEventListener("focusout",this._onGlobalFocusOut)}detach(){document.removeEventListener("focusin",this._onGlobalFocusIn),document.removeEventListener("focusout",this._onGlobalFocusOut)}async runHardValidation(){let e=this.getFormContext();if(!e)return console.warn("[ValidationModule] No form context found \u2014 blocking API call"),!1;this.clearNintexValidationUI(),this.suppressNativeSubmitArtifacts(e.form),await this.triggerNativeValidation(e),this.suppressNativeSubmitArtifacts(e.form);let t=this.collectValidationSummary(e);if(console.info("[ValidationModule] Hard validation summary",t),t.fieldValidation||t.ruleValidation){let s=e.form.querySelector('[aria-invalid="true"]');return s&&s.focus(),!1}return this.suppressNativeSubmitArtifacts(e.form),!0}clearNintexValidationUI(){document.querySelectorAll(".daf-injected-error").forEach(e=>e.remove()),document.querySelectorAll("[data-daf-validated]").forEach(e=>{e.removeAttribute("aria-invalid"),e.removeAttribute("data-daf-validated")}),document.querySelectorAll(".daf-has-error").forEach(e=>{e.classList.remove("nx-has-error","daf-has-error")})}hasValidationMarkers(e){return e.querySelector('[aria-invalid="true"]')?!0:Array.from(e.querySelectorAll(fr)).some(t=>this.isValidationAlertElement(t)&&this.isElementVisible(t)&&this.isValidationAlertText(t.textContent))}getFormContext(){var a,l;let e=document.querySelector("form");if(!(e instanceof HTMLFormElement))return null;let t=e.querySelector('button[data-e2e="btn-submit"], input[data-e2e="btn-submit"]'),s=Array.from(e.querySelectorAll('button[type="submit"], input[type="submit"]')).find(c=>this.isElementVisible(c)),n=Array.from(e.querySelectorAll("button:not([type])")).find(c=>{var p,g;return this.isElementVisible(c)&&/submit/i.test(((p=c.getAttribute("data-e2e"))!=null?p:"")+" "+((g=c.textContent)!=null?g:""))}),i=(l=(a=t!=null?t:s)!=null?a:n)!=null?l:null;if(!(i instanceof HTMLElement))return null;let o=Array.from(e.querySelectorAll("input, select, textarea")).filter(c=>this.isElementVisible(c)&&!c.disabled);return{form:e,submitControl:i,controls:o}}async triggerNativeValidation(e){var i;e.form.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation()},{capture:!0,once:!0});let t=e.submitControl,s=t instanceof HTMLButtonElement?t:null,n=(i=s==null?void 0:s.getAttribute("type"))!=null?i:null;try{s&&s.setAttribute("type","button"),t.click(),await this.wait(350)}finally{s&&(n===null?s.removeAttribute("type"):s.setAttribute("type",n))}}async runSoftValidationAndUpdateUI(e){await this.wait(120);let t=this.collectValidationSummary(e);console.info("[ValidationModule] Soft validation summary",t),!t.fieldValidation&&!t.ruleValidation&&(this.clearNintexValidationUI(),this.suppressNativeSubmitArtifacts(e.form))}clearNativeSubmitArtifacts(e){[...Array.from(document.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')),...Array.from(e.querySelectorAll('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]'))].forEach(n=>{n.textContent=""}),Array.from(e.querySelectorAll('[role="alert"], .ntx-form-error, .ntx-error-message')).filter(n=>{var o;return((o=n.textContent)!=null?o:"").trim().toLowerCase().includes("api call not successful")}).forEach(n=>{n.textContent=""})}suppressNativeSubmitArtifacts(e){this.clearNativeSubmitArtifacts(e),[0,75,200,400].forEach(t=>{window.setTimeout(()=>{this.clearNativeSubmitArtifacts(e)},t)})}isValidationAlertElement(e){return!e.matches('#screenReaderErrorMessage, [data-e2e="screenReaderErrorMessage"]')}isValidationAlertText(e){let t=(e!=null?e:"").trim().toLowerCase();return!(!t||t.includes("there is 1 error in the form you are trying to submit")||t.includes("there are ")&&t.includes(" error in the form you are trying to submit")||t.includes("api call not successful"))}collectValidationSummary(e){let t=Array.from(e.form.querySelectorAll('[aria-invalid="true"]')).filter(g=>this.isElementVisible(g)),s=e.controls.filter(g=>this.isElementVisible(g)&&g.matches(":invalid")),n=Array.from(e.form.querySelectorAll(fr)).filter(g=>this.isValidationAlertElement(g)&&this.isElementVisible(g)&&this.isValidationAlertText(g.textContent)),i=[...new Set(s.map(g=>this.getControlLabel(g)))],o=[...new Set(n.map(g=>{var k,C;return(C=(k=g.textContent)==null?void 0:k.trim())!=null?C:""}))].filter(Boolean),a=t.length>0||s.length>0,l=n.length>0&&a,c=a||l?"Validation surfaced":"No validation markers",p=`${c} - aria: ${t.length}, html5: ${s.length}, alerts: ${n.length}`;return{outcome:c,ariaCount:t.length,html5Count:s.length,alertCount:n.length,fieldValidation:a,ruleValidation:l,message:p,invalidControls:i,alerts:o}}isElementVisible(e){let t=e,s=window.getComputedStyle(t);return s.display!=="none"&&s.visibility!=="hidden"&&t.offsetParent!==null}getControlLabel(e){return e.getAttribute("aria-label")||e.name||e.id||e.getAttribute("placeholder")||e.tagName.toLowerCase()}getTrackableControl(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement?e:null}getComparableControlValue(e){var t;if(e instanceof HTMLInputElement){let s=e.type.toLowerCase();return s==="checkbox"||s==="radio"?e.checked?"checked":"unchecked":s==="file"?Array.from((t=e.files)!=null?t:[]).map(n=>n.name).join("|"):e.value}return e instanceof HTMLSelectElement&&e.multiple?Array.from(e.selectedOptions).map(s=>s.value).join("|"):e.value}wait(e){return new Promise(t=>{window.setTimeout(t,e)})}};function gr(r,e){if(r==="application/x-www-form-urlencoded")return{body:e||""};if(r==="application/json"){if(!e||!e.trim())return{body:void 0};try{return{body:JSON.parse(e)}}catch(t){return{body:void 0,error:t instanceof Error?t.message:String(t)}}}return{body:e||""}}function yr(r){if(!r)return{};try{return JSON.parse(r)}catch(e){let t={};return r.split(/\r?\n/).forEach(s=>{let n=s.indexOf(":");if(n<=-1)return;let i=s.slice(0,n).trim(),o=s.slice(n+1).trim();i&&(t[i]=o)}),t}}function at(r){let e=r.toLowerCase();if(e.includes("error:")||e.includes("failed")||e.includes("exception"))return"error";try{let t=JSON.parse(r);if(t.error||t.status==="error")return"error";if(t.warning||t.status==="warning")return"warning"}catch(t){}return"success"}function F(r,e){if(r&&typeof r=="object"&&e in r)return r[e];let t=e.split("."),s=r;for(let n=0;n<t.length;n+=1){let i=t[n],o=i.match(/^(.+)\[(\*|\d+)\]$/);if(o){let a=o[1],l=o[2];if(!s||typeof s!="object"||!(a in s))return;let c=s[a];if(!Array.isArray(c))return;if(l==="*"){let p=t.slice(n+1).join(".");return p?c.map(g=>F(g,p)).filter(g=>g!==void 0):c}s=c[parseInt(l,10)]}else if(s&&typeof s=="object"&&i in s)s=s[i];else return}return s}function Ot(r){return typeof r=="boolean"?r.toString():typeof r=="string"?`"${r}"`:typeof r=="number"?r.toString():r===null?"null":r===void 0?"undefined":JSON.stringify(r)}function lt(r){try{return JSON.stringify(JSON.parse(r),null,2)}catch(e){return r}}function V(r){if(!r.trim())return!0;try{return JSON.parse(r),!0}catch(e){return!1}}function Mt(r){return typeof r!="object"||r===null?0:Array.isArray(r)?r.reduce((e,t)=>e+Mt(t),0):Object.keys(r).length+Object.values(r).reduce((e,t)=>e+Mt(t),0)}function vr(r){if(!r.trim())return"Empty";try{let e=JSON.parse(r);return`Valid JSON \u2022 ${r.length} chars \u2022 ${r.split(`
`).length} lines \u2022 ${Mt(e)} keys`}catch(e){return`Invalid JSON \u2022 ${e.message}`}}var Z=class{static register(e,t){let s=e.closest("form");if(!(s instanceof HTMLFormElement))return console.warn("[Form Coordinator] Plugin is not inside a form"),null;let n=this.coordinators.get(s);if(!n){let i,o=a=>{let l=Array.from(i.instances).some(c=>c.submissionAction!=="only-submit");!i.allowNativeSubmission&&l&&(console.log("[Form Coordinator] Blocking native submit until a plugin explicitly permits it"),a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())};i={instances:new Set,hiddenSubmitRequesters:new Set,allowNativeSubmission:!1,submitListener:o},s.addEventListener("submit",o,!0),this.coordinators.set(s,i),n=i}return n.instances.add(t),s}static unregister(e,t){let s=this.coordinators.get(e);s&&(s.instances.delete(t),s.hiddenSubmitRequesters.delete(t),this.applySubmitButtonVisibility(e,s),s.instances.size===0&&(e.removeEventListener("submit",s.submitListener,!0),this.coordinators.delete(e)))}static setSubmitHidden(e,t,s){let n=this.coordinators.get(e);n&&(s?n.hiddenSubmitRequesters.add(t):n.hiddenSubmitRequesters.delete(t),this.applySubmitButtonVisibility(e,n))}static submit(e,t){let s=this.coordinators.get(e);if(!s)return!1;let n=e.querySelector('button[type="submit"]');return n instanceof HTMLElement?(s.allowNativeSubmission=!0,n.click(),window.setTimeout(()=>{s.allowNativeSubmission=!1,t()},1500),!0):!1}static ensureSubmitHiddenStyle(){if(document.getElementById(this.SUBMIT_HIDDEN_STYLE_ID))return;let e=document.createElement("style");e.id=this.SUBMIT_HIDDEN_STYLE_ID,e.textContent='.daf-webrequest-submit-hidden button[data-e2e="btn-submit"] { display: none !important; }',document.head.appendChild(e)}static applySubmitButtonVisibility(e,t){var s;e.classList.toggle("daf-webrequest-submit-hidden",t.hiddenSubmitRequesters.size>0),t.hiddenSubmitRequesters.size>0?this.ensureSubmitHiddenStyle():document.querySelectorAll("form.daf-webrequest-submit-hidden").length===0&&((s=document.getElementById(this.SUBMIT_HIDDEN_STYLE_ID))==null||s.remove())}};Z.coordinators=new WeakMap,Z.SUBMIT_HIDDEN_STYLE_ID="daf-webrequest-submit-hidden-style";var ct=class{constructor(e){this.callbacks=e;this.timerId=null;this.delayedStartTime=0}get isTimerActive(){return this.timerId!==null}get delayedSubmissionStartTime(){return this.delayedStartTime}handlePostSubmissionAction(e){if(console.log("[Submission Action] Checking submission action:",e),e==="no-submit"){console.log("[Submission Action] No action configured");return}if(e==="quick-submit"){console.log("[Submission Action] Quick submit - triggering after 500ms"),window.setTimeout(()=>{this.callbacks.submit()},500);return}e==="delayed-submit"&&(console.log("[Submission Action] Delayed submit - starting countdown timer"),this.startDelayedSubmission())}startDelayedSubmission(){this.clearTimer();let e=this.callbacks.getCountdownSeconds()*1e3,t=Date.now();this.delayedStartTime=t;let s=()=>{let n=Date.now()-t;e-n<=0?(console.log("[Submission Action] Countdown complete - submitting form"),this.callbacks.submit(),this.timerId=null,this.delayedStartTime=0):(this.callbacks.requestUpdate(),this.timerId=window.setTimeout(s,100))};console.log("[Submission Action] Starting delayed submission countdown for",this.callbacks.getCountdownSeconds(),"seconds"),s()}startCooldownTimer(){this.clearTimer();let e=()=>{let t=Date.now()-this.callbacks.getLastApiCallTime(),s=this.callbacks.getCountdownSeconds()*1e3;t<s?(this.callbacks.requestUpdate(),this.timerId=window.setTimeout(e,1e3)):(this.callbacks.onCooldownComplete(),this.timerId=null,this.callbacks.requestUpdate())};this.timerId=window.setTimeout(e,1e3)}dispose(){this.clearTimer()}clearTimer(){this.timerId!==null&&(window.clearTimeout(this.timerId),this.timerId=null)}};function Ns(r,e){let t={fields:[]};e&&e.trim()&&(t.title=e.trim());let s=Array.from(r.entries()).filter(([,n])=>n.checked).sort((n,i)=>n[1].order-i[1].order);return t.fields=s.map(([n,i])=>({path:n,title:i.title||n})),t}function br(r){return r.startsWith('"{')&&r.endsWith('}"')?JSON.parse(r.slice(1,-1).replace(/\\"/g,'"')):r.trim().startsWith('{"')?JSON.parse(r):null}function Nt(r,e){return`"${JSON.stringify(Ns(r,e)).replace(/"/g,'\\"')}"`}function xr(r){return r?r.split(`
`).map(e=>{let t=e.match(/^([^:]+):\s*(.*)$/);if(!t)return e;let s=t[1].trim(),n=t[2];return`<strong>${s}:</strong> ${n}`}).join("<br>"):""}function dt(r){if(!r)return"";try{return JSON.stringify(JSON.parse(r),null,2)}catch(e){return r}}function Ke(r,e){if(!r.fields||!Array.isArray(r.fields))return"Invalid configuration format";let t;try{t=JSON.parse(e)}catch(n){return console.error("[Message Formatting] Failed to parse response data:",n),"Unable to parse response data"}let s=[];return r.fields.forEach(n=>{let i=F(t,n.path);if(Array.isArray(i))if(i.length>0){let o=i[0],a=typeof o!="object"||o===null;s.push(`${n.title}:`),i.forEach((l,c)=>{s.push(`  ${c+1}. ${a?String(l):JSON.stringify(l)}`)})}else s.push(`${n.title}: (empty)`);else{let o=i!=null?String(i):"N/A";s.push(`${n.title}: ${o}`)}}),s.join(`
`)}function Ps(r,e){return r?Object.entries(r).filter(([t])=>t!=="value"&&!e.has(t)).map(([t,s])=>({name:t,default:s.defaultValue,config:s})):[]}function _r(r,e,t){let s=Ps(r,t);return y`
    <table class="debug-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Default Value</th>
          <th>Current Value</th>
        </tr>
      </thead>
      <tbody>
        ${s.map(n=>y`
          <tr>
            <td><code class="property-name">${n.name}</code></td>
            <td class="value-default">${Ot(n.default)}</td>
            <td class="value-current">${Fs(n.name,n.config,e)}</td>
          </tr>
        `)}
      </tbody>
    </table>
  `}function Fs(r,e,t){let s=t[r],n=e.type;if(n==="boolean")return y`
      <span style="font-weight: 500; color: ${s?"#28a745":"#dc3545"};">
        ${s?"\u2713 Yes":"\u2717 No"}
      </span>
    `;if(n==="string"){let i=(r==="bearerToken"||r==="clientSecret")&&s&&s.length>0?`***${s.slice(-4)}`:s,o=i&&i.length>100?`${i.substring(0,100)}...`:i;return y`
      <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
        ${o||"<empty>"}
      </span>
    `}return n==="number"||n==="integer"?y`<span style="font-weight: 500;">${s}</span>`:y`<span>${Ot(s)}</span>`}function wr(r,e){let t=a=>y`
    <div class="debug-json-container">
      <button class="debug-json-copy-btn" @click=${()=>e(a)} title="Copy to clipboard">📋 Copy</button>
      <pre class="debug-json">${a}</pre>
    </div>
  `,s=r.oauthTokenResponse?JSON.stringify(r.oauthTokenResponse,null,2):"",n=r.requestHeaders?lt(r.requestHeaders):"",i=r.requestBody?lt(r.requestBody):"",o=r.apiResponse?lt(r.apiResponse):"";return y`
    <table class="debug-table">
      <thead>
        <tr><th>Property</th><th>Value</th></tr>
      </thead>
      <tbody>
        <tr><td><code>apiUrl</code></td><td style="word-break: break-all;">${r.apiUrl||"<not set>"}</td></tr>
        <tr><td><code>method</code></td><td>${r.method}</td></tr>
        ${r.oauthTokenResponse?y`
          <tr><td><code>OAuth Token</code></td><td>${t(s)}</td></tr>
        `:""}
        <tr><td><code>requestHeaders</code></td><td>${n?t(n):"<not set>"}</td></tr>
        <tr><td><code>requestBody</code></td><td>${i?t(i):"<not set>"}</td></tr>
        <tr>
          <td><code>State</code></td>
          <td>
            <strong>Loading:</strong> ${r.isLoading}<br>
            <strong>Has Successful Call:</strong> ${r.hasSuccessfulCall}<br>
            <strong>Button Disabled:</strong> ${r.isButtonDisabled}
          </td>
        </tr>
        ${r.apiResponse?y`
          <tr><td><code>Response</code></td><td>${t(o)}</td></tr>
        `:""}
      </tbody>
    </table>
  `}function Tr(r){if(!r.trim())return"";let e="",t="",s="";try{let n=JSON.parse(r);e=JSON.stringify(n),t=`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}catch(n){s=n.message}return y`
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
      ${s?y`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${s}</div>`:""}
    </div>
  `}function Sr(r){if(!r.trim()||!V(r))return"";try{let e=JSON.parse(r);return y`
      <div class="form-group">
        <label class="control-label">JSON Structure Preview</label>
        <div class="json-viewer">
${Pt(e,0)}
        </div>
      </div>
    `}catch(e){return""}}function Pt(r,e=0){let t="  ".repeat(e);if(r===null)return'<span class="json-syntax-null">null</span>';if(typeof r=="string")return`<span class="json-syntax-string">"${r}"</span>`;if(typeof r=="number")return`<span class="json-syntax-number">${r}</span>`;if(typeof r=="boolean")return`<span class="json-syntax-boolean">${r}</span>`;if(Array.isArray(r))return r.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${r.map(n=>`${t}  ${Pt(n,e+1)}`).join(`,
`)}
${t}<span class="json-syntax-punctuation">]</span>`;if(typeof r=="object"){let s=Object.keys(r);return s.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${s.map(i=>`${t}  <span class="json-syntax-key">"${i}"</span><span class="json-syntax-punctuation">:</span> ${Pt(r[i],e+1)}`).join(`,
`)}
${t}<span class="json-syntax-punctuation">}</span>`}return String(r)}function Ar(r,e){let t=V(r),s=vr(r);return y`
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
            <div class="json-editor-status ${t?"valid":"invalid"}">${s}</div>
          </div>
          <textarea
            class="form-control json-editor-textarea"
            .value=${r}
            @input=${e.onInput}
            @blur=${e.onBlur}
            @paste=${e.onPaste}
            placeholder="Enter JSON request body here..."
            spellcheck="false"
          ></textarea>
        </div>
      </div>
      ${Tr(r)}
      ${Sr(r)}
    </div>
  `}function Cr(r,e){let t=r.formatterJsonInput.trim().length>0,s=t&&V(r.formatterJsonInput),n=null,i="";if(t)try{n=JSON.parse(r.formatterJsonInput)}catch(a){i=a.message}let o=(a,l)=>y`
    <button
      class="debug-tab-button ${r.activeFormatterTab===a?"active":""}"
      @click=${()=>e.onTabChange(a)}
    >${l}</button>
  `;return y`
    <div class="debug-tools">
      <div class="form-group">
        <label class="control-label">Paste Response JSON</label>
        <textarea
          class="form-control"
          rows="8"
          .value=${r.formatterJsonInput}
          @input=${e.onJsonInput}
          placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
          style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
        ></textarea>
        ${i?y`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
      </div>

      ${s&&n?y`
        <div class="debug-tab-nav" style="margin-bottom: 0;">
          ${o("success","\u2713 Success Message")}
          ${o("warning","\u26A0 Warning Message")}
          ${o("error","\u2715 Error Message")}
        </div>

        <div class="debug-tab-content ${r.activeFormatterTab==="success"?"active":""}">
          ${e.renderMessageTypeConfig("success",r.successMessage,n)}
        </div>
        <div class="debug-tab-content ${r.activeFormatterTab==="warning"?"active":""}">
          ${e.renderMessageTypeConfig("warning",r.warningMessage,n)}
        </div>
        <div class="debug-tab-content ${r.activeFormatterTab==="error"?"active":""}">
          ${e.renderMessageTypeConfig("error",r.errorMessage,n)}
        </div>
      `:""}
    </div>
  `}function Vs(r,e){let t=[];return r.forEach((s,n)=>{if(!s.checked)return;let i=F(e,n);t.push({title:s.title||n,value:i!==void 0?String(i):"N/A"})}),t}function kr(r,e){let t=Vs(r,e);return t.length===0?y`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`:t.map(s=>y`
    <div style="margin-bottom: 8px;">
      <strong>${s.title}:</strong> ${s.value}
    </div>
  `)}function $r(r,e){return r.length===0?y`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`:r.map(([t,s],n)=>y`
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
        <input type="text" class="form-control" placeholder="Display title" .value=${s.title}
          @input=${i=>e.onTitleChange(t,i.target.value)}
          style="font-size: 13px; padding: 6px 8px; height: auto;" />
      </div>
      <button @click=${()=>e.onRemove(t)}
        style="background: var(--ntx-form-theme-color-error, #dc3545); color: white; border: none; border-radius: 4px; padding: 6px 10px; cursor: pointer; font-size: 12px; transition: filter 0.2s;"
        @mouseenter=${i=>{i.currentTarget.style.filter="brightness(0.9)"}}
        @mouseleave=${i=>{i.currentTarget.style.filter="brightness(1)"}} title="Remove field">✕</button>
    </div>
  `)}function Er(r){switch(r){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}function Rr(r,e){return r==="Never"?!1:r==="Always"?!0:r==="On Error/Warning"&&(e==="error"||e==="warning")}function Ir(r){return r.countdownEnabled&&r.lastApiCallTime>0&&r.now-r.lastApiCallTime<r.countdownTimer*1e3&&r.showCooldownAlert?!0:!(!r.apiResponse||!r.responseType||r.lastCooldownAlertTime>r.lastApiCallTime)}function Mr(r){if(!V(r))return null;try{return JSON.stringify(JSON.parse(r),null,2)}catch(e){return null}}function Or(r){if(!V(r))return null;try{return JSON.stringify(JSON.parse(r))}catch(e){return null}}function Nr(r){return JSON.stringify({startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:`req-${r}`}}}},null,2)}function Pr(r){return{success:!1,valid:!1,statusCode:0,responseType:"pending",data:"",message:"",formattedResponse:"",timestamp:r,executionTime:0}}function Fr(r){let e=r.success===!0&&r.responseType==="success";return d(d({success:e,valid:e,statusCode:r.statusCode!==void 0?r.statusCode:r.responseType==="success"?200:500,responseType:r.responseType,data:r.data,message:r.message,formattedResponse:r.formattedResponse,timestamp:r.timestamp,executionTime:r.executionTime},r.accessToken&&{access_token:r.accessToken}),r.output!==void 0&&{output:r.output})}function Vr(r,e,t,s){return{success:!1,valid:!1,statusCode:0,responseType:"error",data:r,message:r,formattedResponse:e,timestamp:t,executionTime:s}}function jr(r,e,t){let s=[],n=(i,o)=>{!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).forEach(a=>{let l=o?`${o}.${a}`:a,c=i[a];if(Array.isArray(c)&&c.length>0)t&&s.push({kind:"array",path:`${l}[*]`,title:a,preview:`Array with ${c.length} item${c.length>1?"s":""}`}),typeof c[0]=="object"&&!Array.isArray(c[0])&&n(c[0],t?`${l}[*]`:`${l}[0]`);else if(c!==null&&typeof c!="object"){let p=String(c);s.push({kind:"value",path:l,title:l.split(".").pop()||l,preview:p.length>50?`${p.substring(0,50)}...`:p})}else c&&typeof c=="object"&&!Array.isArray(c)&&n(c,l)})};return n(r,e),s}function Ft(r){return Array.from(r.entries()).filter(([,e])=>e.checked).sort((e,t)=>e[1].order-t[1].order)}function Lr(r,e,t,s){if(!t){r.delete(e);return}let n=-1;r.forEach(i=>{i.order>n&&(n=i.order)}),r.set(e,{title:s,checked:!0,order:n+1})}function Ur(r,e,t){let s=r.get(e);s&&r.set(e,b(d({},s),{title:t}))}function zr(r,e){r.delete(e)}function Hr(r,e,t){let s=Ft(r);if(e===t)return;let[n]=s.splice(e,1);n&&(s.splice(t,0,n),s.forEach(([i,o],a)=>{r.set(i,b(d({},o),{order:a}))}))}function Jr(r,e,t){let s=e[r];if(s.startsWith('"{')&&s.endsWith('}"'))try{let n=JSON.parse(s.slice(1,-1).replace(/\\"/g,'"'));return{title:n.title||null,message:Ke(n,t)}}catch(n){return console.error("[Message Formatting] Failed to parse quoted config:",n),{title:null,message:s}}if(s.trim().startsWith('{"'))try{let n=JSON.parse(s);return{title:n.title||null,message:Ke(n,t)}}catch(n){return console.error("[Message Formatting] Failed to parse unquoted config:",n),{title:null,message:s}}return{title:null,message:s}}async function Dr(r){let e=new AbortController,t=!1,s=r.timeoutSeconds===null?null:window.setTimeout(()=>{t=!0,e.abort()},r.timeoutSeconds*1e3);try{let n=await fetch(r.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:r.clientId,client_secret:r.clientSecret}),signal:e.signal});if(!n.ok)throw new Error(`Token request failed with status ${n.status}`);let i=await n.json();if(!i.access_token)throw new Error("No access_token in response");return{accessToken:i.access_token,debugMetadata:{token_type:i.token_type||"Bearer",expires_in:i.expires_in,scope:i.scope,fetched_at:new Date().toISOString(),expires_at:i.expires_in?new Date(Date.now()+i.expires_in*1e3).toISOString():null}}}catch(n){throw t&&r.timeoutSeconds!==null?new Error(`OAuth token request timed out after ${r.timeoutSeconds} seconds.`):n}finally{s!==null&&window.clearTimeout(s)}}function Br(r,e,t){let s=e===!1?"error":at(r),n,i,o="";try{let a=JSON.parse(r);a.access_token&&(n=a.access_token),t&&t.trim()&&(i=F(a,t)),o=F(a,"d.Message")||F(a,"Message")||F(a,"message")||F(a,"msg")||F(a,"data.message")||""}catch(a){}return{responseType:s,accessToken:n,output:i,message:o}}var qr=bt`
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
  `;var h={};_s(h,{BRAND:()=>dn,DIRTY:()=>ue,EMPTY_PATH:()=>zs,INVALID:()=>x,NEVER:()=>Yn,OK:()=>O,ParseStatus:()=>I,Schema:()=>S,ZodAny:()=>se,ZodArray:()=>Q,ZodBigInt:()=>he,ZodBoolean:()=>me,ZodBranded:()=>Xe,ZodCatch:()=>Ae,ZodDate:()=>fe,ZodDefault:()=>Se,ZodDiscriminatedUnion:()=>ht,ZodEffects:()=>U,ZodEnum:()=>we,ZodError:()=>N,ZodFirstPartyTypeKind:()=>_,ZodFunction:()=>ft,ZodIntersection:()=>be,ZodIssueCode:()=>u,ZodLazy:()=>xe,ZodLiteral:()=>_e,ZodMap:()=>Pe,ZodNaN:()=>Ve,ZodNativeEnum:()=>Te,ZodNever:()=>z,ZodNull:()=>ye,ZodNullable:()=>D,ZodNumber:()=>pe,ZodObject:()=>P,ZodOptional:()=>j,ZodParsedType:()=>f,ZodPipeline:()=>We,ZodPromise:()=>ne,ZodReadonly:()=>Ce,ZodRecord:()=>mt,ZodSchema:()=>S,ZodSet:()=>Fe,ZodString:()=>re,ZodSymbol:()=>Oe,ZodTransformer:()=>U,ZodTuple:()=>J,ZodType:()=>S,ZodUndefined:()=>ge,ZodUnion:()=>ve,ZodUnknown:()=>K,ZodVoid:()=>Ne,addIssueToContext:()=>m,any:()=>bn,array:()=>Tn,bigint:()=>mn,boolean:()=>ss,coerce:()=>Zn,custom:()=>es,date:()=>fn,datetimeRegex:()=>Xr,defaultErrorMap:()=>Y,discriminatedUnion:()=>kn,effect:()=>Ln,enum:()=>Fn,function:()=>On,getErrorMap:()=>Re,getParsedType:()=>H,instanceof:()=>pn,intersection:()=>$n,isAborted:()=>ut,isAsync:()=>Ie,isDirty:()=>pt,isValid:()=>te,late:()=>un,lazy:()=>Nn,literal:()=>Pn,makeIssue:()=>Qe,map:()=>In,nan:()=>hn,nativeEnum:()=>Vn,never:()=>_n,null:()=>vn,nullable:()=>zn,number:()=>rs,object:()=>Sn,objectUtil:()=>Vt,oboolean:()=>qn,onumber:()=>Bn,optional:()=>Un,ostring:()=>Dn,pipeline:()=>Jn,preprocess:()=>Hn,promise:()=>jn,quotelessJson:()=>js,record:()=>Rn,set:()=>Mn,setErrorMap:()=>Us,strictObject:()=>An,string:()=>ts,symbol:()=>gn,transformer:()=>Ln,tuple:()=>En,undefined:()=>yn,union:()=>Cn,unknown:()=>xn,util:()=>A,void:()=>wn});var A;(function(r){r.assertEqual=n=>{};function e(n){}r.assertIs=e;function t(n){throw new Error}r.assertNever=t,r.arrayToEnum=n=>{let i={};for(let o of n)i[o]=o;return i},r.getValidEnumValues=n=>{let i=r.objectKeys(n).filter(a=>typeof n[n[a]]!="number"),o={};for(let a of i)o[a]=n[a];return r.objectValues(o)},r.objectValues=n=>r.objectKeys(n).map(function(i){return n[i]}),r.objectKeys=typeof Object.keys=="function"?n=>Object.keys(n):n=>{let i=[];for(let o in n)Object.prototype.hasOwnProperty.call(n,o)&&i.push(o);return i},r.find=(n,i)=>{for(let o of n)if(i(o))return o},r.isInteger=typeof Number.isInteger=="function"?n=>Number.isInteger(n):n=>typeof n=="number"&&Number.isFinite(n)&&Math.floor(n)===n;function s(n,i=" | "){return n.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}r.joinValues=s,r.jsonStringifyReplacer=(n,i)=>typeof i=="bigint"?i.toString():i})(A||(A={}));var Vt;(function(r){r.mergeShapes=(e,t)=>d(d({},e),t)})(Vt||(Vt={}));var f=A.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),H=r=>{switch(typeof r){case"undefined":return f.undefined;case"string":return f.string;case"number":return Number.isNaN(r)?f.nan:f.number;case"boolean":return f.boolean;case"function":return f.function;case"bigint":return f.bigint;case"symbol":return f.symbol;case"object":return Array.isArray(r)?f.array:r===null?f.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?f.promise:typeof Map!="undefined"&&r instanceof Map?f.map:typeof Set!="undefined"&&r instanceof Set?f.set:typeof Date!="undefined"&&r instanceof Date?f.date:f.object;default:return f.unknown}};var u=A.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),js=r=>JSON.stringify(r,null,2).replace(/"([^"]+)":/g,"$1:"),N=class r extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=s=>{this.issues=[...this.issues,s]},this.addIssues=(s=[])=>{this.issues=[...this.issues,...s]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){let t=e||function(i){return i.message},s={_errors:[]},n=i=>{for(let o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(n);else if(o.code==="invalid_return_type")n(o.returnTypeError);else if(o.code==="invalid_arguments")n(o.argumentsError);else if(o.path.length===0)s._errors.push(t(o));else{let a=s,l=0;for(;l<o.path.length;){let c=o.path[l];l===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(t(o))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return n(this),s}static assert(e){if(!(e instanceof r))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,A.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){let t={},s=[];for(let n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):s.push(e(n));return{formErrors:s,fieldErrors:t}}get formErrors(){return this.flatten()}};N.create=r=>new N(r);var Ls=(r,e)=>{let t;switch(r.code){case u.invalid_type:r.received===f.undefined?t="Required":t=`Expected ${r.expected}, received ${r.received}`;break;case u.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(r.expected,A.jsonStringifyReplacer)}`;break;case u.unrecognized_keys:t=`Unrecognized key(s) in object: ${A.joinValues(r.keys,", ")}`;break;case u.invalid_union:t="Invalid input";break;case u.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${A.joinValues(r.options)}`;break;case u.invalid_enum_value:t=`Invalid enum value. Expected ${A.joinValues(r.options)}, received '${r.received}'`;break;case u.invalid_arguments:t="Invalid function arguments";break;case u.invalid_return_type:t="Invalid function return type";break;case u.invalid_date:t="Invalid date";break;case u.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(t=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?t=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?t=`Invalid input: must end with "${r.validation.endsWith}"`:A.assertNever(r.validation):r.validation!=="regex"?t=`Invalid ${r.validation}`:t="Invalid";break;case u.too_small:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:t="Invalid input";break;case u.too_big:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?t=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:t="Invalid input";break;case u.custom:t="Invalid input";break;case u.invalid_intersection_types:t="Intersection results could not be merged";break;case u.not_multiple_of:t=`Number must be a multiple of ${r.multipleOf}`;break;case u.not_finite:t="Number must be finite";break;default:t=e.defaultError,A.assertNever(r)}return{message:t}},Y=Ls;var Zr=Y;function Us(r){Zr=r}function Re(){return Zr}var Qe=r=>{let{data:e,path:t,errorMaps:s,issueData:n}=r,i=[...t,...n.path||[]],o=b(d({},n),{path:i});if(n.message!==void 0)return b(d({},n),{path:i,message:n.message});let a="",l=s.filter(c=>!!c).slice().reverse();for(let c of l)a=c(o,{data:e,defaultError:a}).message;return b(d({},n),{path:i,message:a})},zs=[];function m(r,e){let t=Re(),s=Qe({issueData:e,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,t,t===Y?void 0:Y].filter(n=>!!n)});r.common.issues.push(s)}var I=class r{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){let s=[];for(let n of t){if(n.status==="aborted")return x;n.status==="dirty"&&e.dirty(),s.push(n.value)}return{status:e.value,value:s}}static async mergeObjectAsync(e,t){let s=[];for(let n of t){let i=await n.key,o=await n.value;s.push({key:i,value:o})}return r.mergeObjectSync(e,s)}static mergeObjectSync(e,t){let s={};for(let n of t){let{key:i,value:o}=n;if(i.status==="aborted"||o.status==="aborted")return x;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value!="undefined"||n.alwaysSet)&&(s[i.value]=o.value)}return{status:e.value,value:s}}},x=Object.freeze({status:"aborted"}),ue=r=>({status:"dirty",value:r}),O=r=>({status:"valid",value:r}),ut=r=>r.status==="aborted",pt=r=>r.status==="dirty",te=r=>r.status==="valid",Ie=r=>typeof Promise!="undefined"&&r instanceof Promise;var v;(function(r){r.errToObj=e=>typeof e=="string"?{message:e}:e||{},r.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(v||(v={}));var L=class{constructor(e,t,s,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=s,this._key=n}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Yr=(r,e)=>{if(te(e))return{success:!0,data:e.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new N(r.common.issues);return this._error=t,this._error}}};function w(r){if(!r)return{};let{errorMap:e,invalid_type_error:t,required_error:s,description:n}=r;if(e&&(t||s))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:n}:{errorMap:(o,a)=>{var c,p;let{message:l}=r;return o.code==="invalid_enum_value"?{message:l!=null?l:a.defaultError}:typeof a.data=="undefined"?{message:(c=l!=null?l:s)!=null?c:a.defaultError}:o.code!=="invalid_type"?{message:a.defaultError}:{message:(p=l!=null?l:t)!=null?p:a.defaultError}},description:n}}var S=class{get description(){return this._def.description}_getType(e){return H(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:H(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new I,ctx:{common:e.parent.common,data:e.data,parsedType:H(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(Ie(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let s=this.safeParse(e,t);if(s.success)return s.data;throw s.error}safeParse(e,t){var i;let s={common:{issues:[],async:(i=t==null?void 0:t.async)!=null?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:H(e)},n=this._parseSync({data:e,path:s.path,parent:s});return Yr(s,n)}"~validate"(e){var s,n;let t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:H(e)};if(!this["~standard"].async)try{let i=this._parseSync({data:e,path:[],parent:t});return te(i)?{value:i.value}:{issues:t.common.issues}}catch(i){(n=(s=i==null?void 0:i.message)==null?void 0:s.toLowerCase())!=null&&n.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(i=>te(i)?{value:i.value}:{issues:t.common.issues})}async parseAsync(e,t){let s=await this.safeParseAsync(e,t);if(s.success)return s.data;throw s.error}async safeParseAsync(e,t){let s={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:H(e)},n=this._parse({data:e,path:s.path,parent:s}),i=await(Ie(n)?n:Promise.resolve(n));return Yr(s,i)}refine(e,t){let s=n=>typeof t=="string"||typeof t=="undefined"?{message:t}:typeof t=="function"?t(n):t;return this._refinement((n,i)=>{let o=e(n),a=()=>i.addIssue(d({code:u.custom},s(n)));return typeof Promise!="undefined"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,t){return this._refinement((s,n)=>e(s)?!0:(n.addIssue(typeof t=="function"?t(s,n):t),!1))}_refinement(e){return new U({schema:this,typeName:_.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return j.create(this,this._def)}nullable(){return D.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Q.create(this)}promise(){return ne.create(this,this._def)}or(e){return ve.create([this,e],this._def)}and(e){return be.create(this,e,this._def)}transform(e){return new U(b(d({},w(this._def)),{schema:this,typeName:_.ZodEffects,effect:{type:"transform",transform:e}}))}default(e){let t=typeof e=="function"?e:()=>e;return new Se(b(d({},w(this._def)),{innerType:this,defaultValue:t,typeName:_.ZodDefault}))}brand(){return new Xe(d({typeName:_.ZodBranded,type:this},w(this._def)))}catch(e){let t=typeof e=="function"?e:()=>e;return new Ae(b(d({},w(this._def)),{innerType:this,catchValue:t,typeName:_.ZodCatch}))}describe(e){let t=this.constructor;return new t(b(d({},this._def),{description:e}))}pipe(e){return We.create(this,e)}readonly(){return Ce.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Hs=/^c[^\s-]{8,}$/i,Js=/^[0-9a-z]+$/,Ds=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Bs=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,qs=/^[a-z0-9_-]{21}$/i,Zs=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Ys=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Gs=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Ks="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",jt,Qs=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Xs=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Ws=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,en=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,tn=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,rn=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Kr="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",sn=new RegExp(`^${Kr}$`);function Qr(r){let e="[0-5]\\d";r.precision?e=`${e}\\.\\d{${r.precision}}`:r.precision==null&&(e=`${e}(\\.\\d+)?`);let t=r.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function nn(r){return new RegExp(`^${Qr(r)}$`)}function Xr(r){let e=`${Kr}T${Qr(r)}`,t=[];return t.push(r.local?"Z?":"Z"),r.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function on(r,e){return!!((e==="v4"||!e)&&Qs.test(r)||(e==="v6"||!e)&&Ws.test(r))}function an(r,e){if(!Zs.test(r))return!1;try{let[t]=r.split("."),s=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),n=JSON.parse(atob(s));return!(typeof n!="object"||n===null||"typ"in n&&(n==null?void 0:n.typ)!=="JWT"||!n.alg||e&&n.alg!==e)}catch(t){return!1}}function ln(r,e){return!!((e==="v4"||!e)&&Xs.test(r)||(e==="v6"||!e)&&en.test(r))}var re=class r extends S{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==f.string){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_type,expected:f.string,received:i.parsedType}),x}let s=new I,n;for(let i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="max")e.data.length>i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),s.dirty());else if(i.kind==="length"){let o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(n=this._getOrReturnCtx(e,n),o?m(n,{code:u.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&m(n,{code:u.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),s.dirty())}else if(i.kind==="email")Gs.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"email",code:u.invalid_string,message:i.message}),s.dirty());else if(i.kind==="emoji")jt||(jt=new RegExp(Ks,"u")),jt.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"emoji",code:u.invalid_string,message:i.message}),s.dirty());else if(i.kind==="uuid")Bs.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"uuid",code:u.invalid_string,message:i.message}),s.dirty());else if(i.kind==="nanoid")qs.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"nanoid",code:u.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid")Hs.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"cuid",code:u.invalid_string,message:i.message}),s.dirty());else if(i.kind==="cuid2")Js.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"cuid2",code:u.invalid_string,message:i.message}),s.dirty());else if(i.kind==="ulid")Ds.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"ulid",code:u.invalid_string,message:i.message}),s.dirty());else if(i.kind==="url")try{new URL(e.data)}catch(o){n=this._getOrReturnCtx(e,n),m(n,{validation:"url",code:u.invalid_string,message:i.message}),s.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"regex",code:u.invalid_string,message:i.message}),s.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),s.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:{startsWith:i.value},message:i.message}),s.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:{endsWith:i.value},message:i.message}),s.dirty()):i.kind==="datetime"?Xr(i).test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:"datetime",message:i.message}),s.dirty()):i.kind==="date"?sn.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:"date",message:i.message}),s.dirty()):i.kind==="time"?nn(i).test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{code:u.invalid_string,validation:"time",message:i.message}),s.dirty()):i.kind==="duration"?Ys.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"duration",code:u.invalid_string,message:i.message}),s.dirty()):i.kind==="ip"?on(e.data,i.version)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"ip",code:u.invalid_string,message:i.message}),s.dirty()):i.kind==="jwt"?an(e.data,i.alg)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"jwt",code:u.invalid_string,message:i.message}),s.dirty()):i.kind==="cidr"?ln(e.data,i.version)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"cidr",code:u.invalid_string,message:i.message}),s.dirty()):i.kind==="base64"?tn.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"base64",code:u.invalid_string,message:i.message}),s.dirty()):i.kind==="base64url"?rn.test(e.data)||(n=this._getOrReturnCtx(e,n),m(n,{validation:"base64url",code:u.invalid_string,message:i.message}),s.dirty()):A.assertNever(i);return{status:s.value,value:e.data}}_regex(e,t,s){return this.refinement(n=>e.test(n),d({validation:t,code:u.invalid_string},v.errToObj(s)))}_addCheck(e){return new r(b(d({},this._def),{checks:[...this._def.checks,e]}))}email(e){return this._addCheck(d({kind:"email"},v.errToObj(e)))}url(e){return this._addCheck(d({kind:"url"},v.errToObj(e)))}emoji(e){return this._addCheck(d({kind:"emoji"},v.errToObj(e)))}uuid(e){return this._addCheck(d({kind:"uuid"},v.errToObj(e)))}nanoid(e){return this._addCheck(d({kind:"nanoid"},v.errToObj(e)))}cuid(e){return this._addCheck(d({kind:"cuid"},v.errToObj(e)))}cuid2(e){return this._addCheck(d({kind:"cuid2"},v.errToObj(e)))}ulid(e){return this._addCheck(d({kind:"ulid"},v.errToObj(e)))}base64(e){return this._addCheck(d({kind:"base64"},v.errToObj(e)))}base64url(e){return this._addCheck(d({kind:"base64url"},v.errToObj(e)))}jwt(e){return this._addCheck(d({kind:"jwt"},v.errToObj(e)))}ip(e){return this._addCheck(d({kind:"ip"},v.errToObj(e)))}cidr(e){return this._addCheck(d({kind:"cidr"},v.errToObj(e)))}datetime(e){var t,s;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck(d({kind:"datetime",precision:typeof(e==null?void 0:e.precision)=="undefined"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!=null?t:!1,local:(s=e==null?void 0:e.local)!=null?s:!1},v.errToObj(e==null?void 0:e.message)))}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck(d({kind:"time",precision:typeof(e==null?void 0:e.precision)=="undefined"?null:e==null?void 0:e.precision},v.errToObj(e==null?void 0:e.message)))}duration(e){return this._addCheck(d({kind:"duration"},v.errToObj(e)))}regex(e,t){return this._addCheck(d({kind:"regex",regex:e},v.errToObj(t)))}includes(e,t){return this._addCheck(d({kind:"includes",value:e,position:t==null?void 0:t.position},v.errToObj(t==null?void 0:t.message)))}startsWith(e,t){return this._addCheck(d({kind:"startsWith",value:e},v.errToObj(t)))}endsWith(e,t){return this._addCheck(d({kind:"endsWith",value:e},v.errToObj(t)))}min(e,t){return this._addCheck(d({kind:"min",value:e},v.errToObj(t)))}max(e,t){return this._addCheck(d({kind:"max",value:e},v.errToObj(t)))}length(e,t){return this._addCheck(d({kind:"length",value:e},v.errToObj(t)))}nonempty(e){return this.min(1,v.errToObj(e))}trim(){return new r(b(d({},this._def),{checks:[...this._def.checks,{kind:"trim"}]}))}toLowerCase(){return new r(b(d({},this._def),{checks:[...this._def.checks,{kind:"toLowerCase"}]}))}toUpperCase(){return new r(b(d({},this._def),{checks:[...this._def.checks,{kind:"toUpperCase"}]}))}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};re.create=r=>{var e;return new re(d({checks:[],typeName:_.ZodString,coerce:(e=r==null?void 0:r.coerce)!=null?e:!1},w(r)))};function cn(r,e){let t=(r.toString().split(".")[1]||"").length,s=(e.toString().split(".")[1]||"").length,n=t>s?t:s,i=Number.parseInt(r.toFixed(n).replace(".","")),o=Number.parseInt(e.toFixed(n).replace(".",""));return i%o/10**n}var pe=class r extends S{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==f.number){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_type,expected:f.number,received:i.parsedType}),x}let s,n=new I;for(let i of this._def.checks)i.kind==="int"?A.isInteger(e.data)||(s=this._getOrReturnCtx(e,s),m(s,{code:u.invalid_type,expected:"integer",received:"float",message:i.message}),n.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),m(s,{code:u.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),m(s,{code:u.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty()):i.kind==="multipleOf"?cn(e.data,i.value)!==0&&(s=this._getOrReturnCtx(e,s),m(s,{code:u.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(s=this._getOrReturnCtx(e,s),m(s,{code:u.not_finite,message:i.message}),n.dirty()):A.assertNever(i);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,v.toString(t))}gt(e,t){return this.setLimit("min",e,!1,v.toString(t))}lte(e,t){return this.setLimit("max",e,!0,v.toString(t))}lt(e,t){return this.setLimit("max",e,!1,v.toString(t))}setLimit(e,t,s,n){return new r(b(d({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:v.toString(n)}]}))}_addCheck(e){return new r(b(d({},this._def),{checks:[...this._def.checks,e]}))}int(e){return this._addCheck({kind:"int",message:v.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:v.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:v.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:v.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:v.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:v.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:v.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:v.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:v.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&A.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let s of this._def.checks){if(s.kind==="finite"||s.kind==="int"||s.kind==="multipleOf")return!0;s.kind==="min"?(t===null||s.value>t)&&(t=s.value):s.kind==="max"&&(e===null||s.value<e)&&(e=s.value)}return Number.isFinite(t)&&Number.isFinite(e)}};pe.create=r=>new pe(d({checks:[],typeName:_.ZodNumber,coerce:(r==null?void 0:r.coerce)||!1},w(r)));var he=class r extends S{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch(i){return this._getInvalidInput(e)}if(this._getType(e)!==f.bigint)return this._getInvalidInput(e);let s,n=new I;for(let i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(s=this._getOrReturnCtx(e,s),m(s,{code:u.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(s=this._getOrReturnCtx(e,s),m(s,{code:u.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(s=this._getOrReturnCtx(e,s),m(s,{code:u.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):A.assertNever(i);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return m(t,{code:u.invalid_type,expected:f.bigint,received:t.parsedType}),x}gte(e,t){return this.setLimit("min",e,!0,v.toString(t))}gt(e,t){return this.setLimit("min",e,!1,v.toString(t))}lte(e,t){return this.setLimit("max",e,!0,v.toString(t))}lt(e,t){return this.setLimit("max",e,!1,v.toString(t))}setLimit(e,t,s,n){return new r(b(d({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:s,message:v.toString(n)}]}))}_addCheck(e){return new r(b(d({},this._def),{checks:[...this._def.checks,e]}))}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:v.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:v.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:v.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:v.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:v.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}};he.create=r=>{var e;return new he(d({checks:[],typeName:_.ZodBigInt,coerce:(e=r==null?void 0:r.coerce)!=null?e:!1},w(r)))};var me=class extends S{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==f.boolean){let s=this._getOrReturnCtx(e);return m(s,{code:u.invalid_type,expected:f.boolean,received:s.parsedType}),x}return O(e.data)}};me.create=r=>new me(d({typeName:_.ZodBoolean,coerce:(r==null?void 0:r.coerce)||!1},w(r)));var fe=class r extends S{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==f.date){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_type,expected:f.date,received:i.parsedType}),x}if(Number.isNaN(e.data.getTime())){let i=this._getOrReturnCtx(e);return m(i,{code:u.invalid_date}),x}let s=new I,n;for(let i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),s.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(n=this._getOrReturnCtx(e,n),m(n,{code:u.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),s.dirty()):A.assertNever(i);return{status:s.value,value:new Date(e.data.getTime())}}_addCheck(e){return new r(b(d({},this._def),{checks:[...this._def.checks,e]}))}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:v.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:v.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}};fe.create=r=>new fe(d({checks:[],coerce:(r==null?void 0:r.coerce)||!1,typeName:_.ZodDate},w(r)));var Oe=class extends S{_parse(e){if(this._getType(e)!==f.symbol){let s=this._getOrReturnCtx(e);return m(s,{code:u.invalid_type,expected:f.symbol,received:s.parsedType}),x}return O(e.data)}};Oe.create=r=>new Oe(d({typeName:_.ZodSymbol},w(r)));var ge=class extends S{_parse(e){if(this._getType(e)!==f.undefined){let s=this._getOrReturnCtx(e);return m(s,{code:u.invalid_type,expected:f.undefined,received:s.parsedType}),x}return O(e.data)}};ge.create=r=>new ge(d({typeName:_.ZodUndefined},w(r)));var ye=class extends S{_parse(e){if(this._getType(e)!==f.null){let s=this._getOrReturnCtx(e);return m(s,{code:u.invalid_type,expected:f.null,received:s.parsedType}),x}return O(e.data)}};ye.create=r=>new ye(d({typeName:_.ZodNull},w(r)));var se=class extends S{constructor(){super(...arguments),this._any=!0}_parse(e){return O(e.data)}};se.create=r=>new se(d({typeName:_.ZodAny},w(r)));var K=class extends S{constructor(){super(...arguments),this._unknown=!0}_parse(e){return O(e.data)}};K.create=r=>new K(d({typeName:_.ZodUnknown},w(r)));var z=class extends S{_parse(e){let t=this._getOrReturnCtx(e);return m(t,{code:u.invalid_type,expected:f.never,received:t.parsedType}),x}};z.create=r=>new z(d({typeName:_.ZodNever},w(r)));var Ne=class extends S{_parse(e){if(this._getType(e)!==f.undefined){let s=this._getOrReturnCtx(e);return m(s,{code:u.invalid_type,expected:f.void,received:s.parsedType}),x}return O(e.data)}};Ne.create=r=>new Ne(d({typeName:_.ZodVoid},w(r)));var Q=class r extends S{_parse(e){let{ctx:t,status:s}=this._processInputParams(e),n=this._def;if(t.parsedType!==f.array)return m(t,{code:u.invalid_type,expected:f.array,received:t.parsedType}),x;if(n.exactLength!==null){let o=t.data.length>n.exactLength.value,a=t.data.length<n.exactLength.value;(o||a)&&(m(t,{code:o?u.too_big:u.too_small,minimum:a?n.exactLength.value:void 0,maximum:o?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),s.dirty())}if(n.minLength!==null&&t.data.length<n.minLength.value&&(m(t,{code:u.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),s.dirty()),n.maxLength!==null&&t.data.length>n.maxLength.value&&(m(t,{code:u.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),s.dirty()),t.common.async)return Promise.all([...t.data].map((o,a)=>n.type._parseAsync(new L(t,o,t.path,a)))).then(o=>I.mergeArray(s,o));let i=[...t.data].map((o,a)=>n.type._parseSync(new L(t,o,t.path,a)));return I.mergeArray(s,i)}get element(){return this._def.type}min(e,t){return new r(b(d({},this._def),{minLength:{value:e,message:v.toString(t)}}))}max(e,t){return new r(b(d({},this._def),{maxLength:{value:e,message:v.toString(t)}}))}length(e,t){return new r(b(d({},this._def),{exactLength:{value:e,message:v.toString(t)}}))}nonempty(e){return this.min(1,e)}};Q.create=(r,e)=>new Q(d({type:r,minLength:null,maxLength:null,exactLength:null,typeName:_.ZodArray},w(e)));function Me(r){if(r instanceof P){let e={};for(let t in r.shape){let s=r.shape[t];e[t]=j.create(Me(s))}return new P(b(d({},r._def),{shape:()=>e}))}else return r instanceof Q?new Q(b(d({},r._def),{type:Me(r.element)})):r instanceof j?j.create(Me(r.unwrap())):r instanceof D?D.create(Me(r.unwrap())):r instanceof J?J.create(r.items.map(e=>Me(e))):r}var P=class r extends S{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=A.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==f.object){let c=this._getOrReturnCtx(e);return m(c,{code:u.invalid_type,expected:f.object,received:c.parsedType}),x}let{status:s,ctx:n}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof z&&this._def.unknownKeys==="strip"))for(let c in n.data)o.includes(c)||a.push(c);let l=[];for(let c of o){let p=i[c],g=n.data[c];l.push({key:{status:"valid",value:c},value:p._parse(new L(n,g,n.path,c)),alwaysSet:c in n.data})}if(this._def.catchall instanceof z){let c=this._def.unknownKeys;if(c==="passthrough")for(let p of a)l.push({key:{status:"valid",value:p},value:{status:"valid",value:n.data[p]}});else if(c==="strict")a.length>0&&(m(n,{code:u.unrecognized_keys,keys:a}),s.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let p of a){let g=n.data[p];l.push({key:{status:"valid",value:p},value:c._parse(new L(n,g,n.path,p)),alwaysSet:p in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let c=[];for(let p of l){let g=await p.key,k=await p.value;c.push({key:g,value:k,alwaysSet:p.alwaysSet})}return c}).then(c=>I.mergeObjectSync(s,c)):I.mergeObjectSync(s,l)}get shape(){return this._def.shape()}strict(e){return v.errToObj,new r(d(b(d({},this._def),{unknownKeys:"strict"}),e!==void 0?{errorMap:(t,s)=>{var i,o,a,l;let n=(a=(o=(i=this._def).errorMap)==null?void 0:o.call(i,t,s).message)!=null?a:s.defaultError;return t.code==="unrecognized_keys"?{message:(l=v.errToObj(e).message)!=null?l:n}:{message:n}}}:{}))}strip(){return new r(b(d({},this._def),{unknownKeys:"strip"}))}passthrough(){return new r(b(d({},this._def),{unknownKeys:"passthrough"}))}extend(e){return new r(b(d({},this._def),{shape:()=>d(d({},this._def.shape()),e)}))}merge(e){return new r({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>d(d({},this._def.shape()),e._def.shape()),typeName:_.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new r(b(d({},this._def),{catchall:e}))}pick(e){let t={};for(let s of A.objectKeys(e))e[s]&&this.shape[s]&&(t[s]=this.shape[s]);return new r(b(d({},this._def),{shape:()=>t}))}omit(e){let t={};for(let s of A.objectKeys(this.shape))e[s]||(t[s]=this.shape[s]);return new r(b(d({},this._def),{shape:()=>t}))}deepPartial(){return Me(this)}partial(e){let t={};for(let s of A.objectKeys(this.shape)){let n=this.shape[s];e&&!e[s]?t[s]=n:t[s]=n.optional()}return new r(b(d({},this._def),{shape:()=>t}))}required(e){let t={};for(let s of A.objectKeys(this.shape))if(e&&!e[s])t[s]=this.shape[s];else{let i=this.shape[s];for(;i instanceof j;)i=i._def.innerType;t[s]=i}return new r(b(d({},this._def),{shape:()=>t}))}keyof(){return Wr(A.objectKeys(this.shape))}};P.create=(r,e)=>new P(d({shape:()=>r,unknownKeys:"strip",catchall:z.create(),typeName:_.ZodObject},w(e)));P.strictCreate=(r,e)=>new P(d({shape:()=>r,unknownKeys:"strict",catchall:z.create(),typeName:_.ZodObject},w(e)));P.lazycreate=(r,e)=>new P(d({shape:r,unknownKeys:"strip",catchall:z.create(),typeName:_.ZodObject},w(e)));var ve=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),s=this._def.options;function n(i){for(let a of i)if(a.result.status==="valid")return a.result;for(let a of i)if(a.result.status==="dirty")return t.common.issues.push(...a.ctx.common.issues),a.result;let o=i.map(a=>new N(a.ctx.common.issues));return m(t,{code:u.invalid_union,unionErrors:o}),x}if(t.common.async)return Promise.all(s.map(async i=>{let o=b(d({},t),{common:b(d({},t.common),{issues:[]}),parent:null});return{result:await i._parseAsync({data:t.data,path:t.path,parent:o}),ctx:o}})).then(n);{let i,o=[];for(let l of s){let c=b(d({},t),{common:b(d({},t.common),{issues:[]}),parent:null}),p=l._parseSync({data:t.data,path:t.path,parent:c});if(p.status==="valid")return p;p.status==="dirty"&&!i&&(i={result:p,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;let a=o.map(l=>new N(l));return m(t,{code:u.invalid_union,unionErrors:a}),x}}get options(){return this._def.options}};ve.create=(r,e)=>new ve(d({options:r,typeName:_.ZodUnion},w(e)));var G=r=>r instanceof xe?G(r.schema):r instanceof U?G(r.innerType()):r instanceof _e?[r.value]:r instanceof we?r.options:r instanceof Te?A.objectValues(r.enum):r instanceof Se?G(r._def.innerType):r instanceof ge?[void 0]:r instanceof ye?[null]:r instanceof j?[void 0,...G(r.unwrap())]:r instanceof D?[null,...G(r.unwrap())]:r instanceof Xe||r instanceof Ce?G(r.unwrap()):r instanceof Ae?G(r._def.innerType):[],ht=class r extends S{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.object)return m(t,{code:u.invalid_type,expected:f.object,received:t.parsedType}),x;let s=this.discriminator,n=t.data[s],i=this.optionsMap.get(n);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(m(t,{code:u.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[s]}),x)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,s){let n=new Map;for(let i of t){let o=G(i.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of o){if(n.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);n.set(a,i)}}return new r(d({typeName:_.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n},w(s)))}};function Lt(r,e){let t=H(r),s=H(e);if(r===e)return{valid:!0,data:r};if(t===f.object&&s===f.object){let n=A.objectKeys(e),i=A.objectKeys(r).filter(a=>n.indexOf(a)!==-1),o=d(d({},r),e);for(let a of i){let l=Lt(r[a],e[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(t===f.array&&s===f.array){if(r.length!==e.length)return{valid:!1};let n=[];for(let i=0;i<r.length;i++){let o=r[i],a=e[i],l=Lt(o,a);if(!l.valid)return{valid:!1};n.push(l.data)}return{valid:!0,data:n}}else return t===f.date&&s===f.date&&+r==+e?{valid:!0,data:r}:{valid:!1}}var be=class extends S{_parse(e){let{status:t,ctx:s}=this._processInputParams(e),n=(i,o)=>{if(ut(i)||ut(o))return x;let a=Lt(i.value,o.value);return a.valid?((pt(i)||pt(o))&&t.dirty(),{status:t.value,value:a.data}):(m(s,{code:u.invalid_intersection_types}),x)};return s.common.async?Promise.all([this._def.left._parseAsync({data:s.data,path:s.path,parent:s}),this._def.right._parseAsync({data:s.data,path:s.path,parent:s})]).then(([i,o])=>n(i,o)):n(this._def.left._parseSync({data:s.data,path:s.path,parent:s}),this._def.right._parseSync({data:s.data,path:s.path,parent:s}))}};be.create=(r,e,t)=>new be(d({left:r,right:e,typeName:_.ZodIntersection},w(t)));var J=class r extends S{_parse(e){let{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==f.array)return m(s,{code:u.invalid_type,expected:f.array,received:s.parsedType}),x;if(s.data.length<this._def.items.length)return m(s,{code:u.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),x;!this._def.rest&&s.data.length>this._def.items.length&&(m(s,{code:u.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...s.data].map((o,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new L(s,o,s.path,a)):null}).filter(o=>!!o);return s.common.async?Promise.all(i).then(o=>I.mergeArray(t,o)):I.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new r(b(d({},this._def),{rest:e}))}};J.create=(r,e)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new J(d({items:r,typeName:_.ZodTuple,rest:null},w(e)))};var mt=class r extends S{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==f.object)return m(s,{code:u.invalid_type,expected:f.object,received:s.parsedType}),x;let n=[],i=this._def.keyType,o=this._def.valueType;for(let a in s.data)n.push({key:i._parse(new L(s,a,s.path,a)),value:o._parse(new L(s,s.data[a],s.path,a)),alwaysSet:a in s.data});return s.common.async?I.mergeObjectAsync(t,n):I.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,s){return t instanceof S?new r(d({keyType:e,valueType:t,typeName:_.ZodRecord},w(s))):new r(d({keyType:re.create(),valueType:e,typeName:_.ZodRecord},w(t)))}},Pe=class extends S{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==f.map)return m(s,{code:u.invalid_type,expected:f.map,received:s.parsedType}),x;let n=this._def.keyType,i=this._def.valueType,o=[...s.data.entries()].map(([a,l],c)=>({key:n._parse(new L(s,a,s.path,[c,"key"])),value:i._parse(new L(s,l,s.path,[c,"value"]))}));if(s.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of o){let c=await l.key,p=await l.value;if(c.status==="aborted"||p.status==="aborted")return x;(c.status==="dirty"||p.status==="dirty")&&t.dirty(),a.set(c.value,p.value)}return{status:t.value,value:a}})}else{let a=new Map;for(let l of o){let c=l.key,p=l.value;if(c.status==="aborted"||p.status==="aborted")return x;(c.status==="dirty"||p.status==="dirty")&&t.dirty(),a.set(c.value,p.value)}return{status:t.value,value:a}}}};Pe.create=(r,e,t)=>new Pe(d({valueType:e,keyType:r,typeName:_.ZodMap},w(t)));var Fe=class r extends S{_parse(e){let{status:t,ctx:s}=this._processInputParams(e);if(s.parsedType!==f.set)return m(s,{code:u.invalid_type,expected:f.set,received:s.parsedType}),x;let n=this._def;n.minSize!==null&&s.data.size<n.minSize.value&&(m(s,{code:u.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),n.maxSize!==null&&s.data.size>n.maxSize.value&&(m(s,{code:u.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());let i=this._def.valueType;function o(l){let c=new Set;for(let p of l){if(p.status==="aborted")return x;p.status==="dirty"&&t.dirty(),c.add(p.value)}return{status:t.value,value:c}}let a=[...s.data.values()].map((l,c)=>i._parse(new L(s,l,s.path,c)));return s.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(e,t){return new r(b(d({},this._def),{minSize:{value:e,message:v.toString(t)}}))}max(e,t){return new r(b(d({},this._def),{maxSize:{value:e,message:v.toString(t)}}))}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Fe.create=(r,e)=>new Fe(d({valueType:r,minSize:null,maxSize:null,typeName:_.ZodSet},w(e)));var ft=class r extends S{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.function)return m(t,{code:u.invalid_type,expected:f.function,received:t.parsedType}),x;function s(a,l){return Qe({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Re(),Y].filter(c=>!!c),issueData:{code:u.invalid_arguments,argumentsError:l}})}function n(a,l){return Qe({data:a,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Re(),Y].filter(c=>!!c),issueData:{code:u.invalid_return_type,returnTypeError:l}})}let i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof ne){let a=this;return O(async function(...l){let c=new N([]),p=await a._def.args.parseAsync(l,i).catch(C=>{throw c.addIssue(s(l,C)),c}),g=await Reflect.apply(o,this,p);return await a._def.returns._def.type.parseAsync(g,i).catch(C=>{throw c.addIssue(n(g,C)),c})})}else{let a=this;return O(function(...l){let c=a._def.args.safeParse(l,i);if(!c.success)throw new N([s(l,c.error)]);let p=Reflect.apply(o,this,c.data),g=a._def.returns.safeParse(p,i);if(!g.success)throw new N([n(p,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new r(b(d({},this._def),{args:J.create(e).rest(K.create())}))}returns(e){return new r(b(d({},this._def),{returns:e}))}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,s){return new r(d({args:e||J.create([]).rest(K.create()),returns:t||K.create(),typeName:_.ZodFunction},w(s)))}},xe=class extends S{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};xe.create=(r,e)=>new xe(d({getter:r,typeName:_.ZodLazy},w(e)));var _e=class extends S{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return m(t,{received:t.data,code:u.invalid_literal,expected:this._def.value}),x}return{status:"valid",value:e.data}}get value(){return this._def.value}};_e.create=(r,e)=>new _e(d({value:r,typeName:_.ZodLiteral},w(e)));function Wr(r,e){return new we(d({values:r,typeName:_.ZodEnum},w(e)))}var we=class r extends S{_parse(e){if(typeof e.data!="string"){let t=this._getOrReturnCtx(e),s=this._def.values;return m(t,{expected:A.joinValues(s),received:t.parsedType,code:u.invalid_type}),x}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),s=this._def.values;return m(t,{received:t.data,code:u.invalid_enum_value,options:s}),x}return O(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return r.create(e,d(d({},this._def),t))}exclude(e,t=this._def){return r.create(this.options.filter(s=>!e.includes(s)),d(d({},this._def),t))}};we.create=Wr;var Te=class extends S{_parse(e){let t=A.getValidEnumValues(this._def.values),s=this._getOrReturnCtx(e);if(s.parsedType!==f.string&&s.parsedType!==f.number){let n=A.objectValues(t);return m(s,{expected:A.joinValues(n),received:s.parsedType,code:u.invalid_type}),x}if(this._cache||(this._cache=new Set(A.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){let n=A.objectValues(t);return m(s,{received:s.data,code:u.invalid_enum_value,options:n}),x}return O(e.data)}get enum(){return this._def.values}};Te.create=(r,e)=>new Te(d({values:r,typeName:_.ZodNativeEnum},w(e)));var ne=class extends S{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.promise&&t.common.async===!1)return m(t,{code:u.invalid_type,expected:f.promise,received:t.parsedType}),x;let s=t.parsedType===f.promise?t.data:Promise.resolve(t.data);return O(s.then(n=>this._def.type.parseAsync(n,{path:t.path,errorMap:t.common.contextualErrorMap})))}};ne.create=(r,e)=>new ne(d({type:r,typeName:_.ZodPromise},w(e)));var U=class extends S{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:s}=this._processInputParams(e),n=this._def.effect||null,i={addIssue:o=>{m(s,o),o.fatal?t.abort():t.dirty()},get path(){return s.path}};if(i.addIssue=i.addIssue.bind(i),n.type==="preprocess"){let o=n.transform(s.data,i);if(s.common.async)return Promise.resolve(o).then(async a=>{if(t.value==="aborted")return x;let l=await this._def.schema._parseAsync({data:a,path:s.path,parent:s});return l.status==="aborted"?x:l.status==="dirty"?ue(l.value):t.value==="dirty"?ue(l.value):l});{if(t.value==="aborted")return x;let a=this._def.schema._parseSync({data:o,path:s.path,parent:s});return a.status==="aborted"?x:a.status==="dirty"?ue(a.value):t.value==="dirty"?ue(a.value):a}}if(n.type==="refinement"){let o=a=>{let l=n.refinement(a,i);if(s.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(s.common.async===!1){let a=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});return a.status==="aborted"?x:(a.status==="dirty"&&t.dirty(),o(a.value),{status:t.value,value:a.value})}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(a=>a.status==="aborted"?x:(a.status==="dirty"&&t.dirty(),o(a.value).then(()=>({status:t.value,value:a.value}))))}if(n.type==="transform")if(s.common.async===!1){let o=this._def.schema._parseSync({data:s.data,path:s.path,parent:s});if(!te(o))return x;let a=n.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:s.data,path:s.path,parent:s}).then(o=>te(o)?Promise.resolve(n.transform(o.value,i)).then(a=>({status:t.value,value:a})):x);A.assertNever(n)}};U.create=(r,e,t)=>new U(d({schema:r,typeName:_.ZodEffects,effect:e},w(t)));U.createWithPreprocess=(r,e,t)=>new U(d({schema:e,effect:{type:"preprocess",transform:r},typeName:_.ZodEffects},w(t)));var j=class extends S{_parse(e){return this._getType(e)===f.undefined?O(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};j.create=(r,e)=>new j(d({innerType:r,typeName:_.ZodOptional},w(e)));var D=class extends S{_parse(e){return this._getType(e)===f.null?O(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};D.create=(r,e)=>new D(d({innerType:r,typeName:_.ZodNullable},w(e)));var Se=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),s=t.data;return t.parsedType===f.undefined&&(s=this._def.defaultValue()),this._def.innerType._parse({data:s,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};Se.create=(r,e)=>new Se(d({innerType:r,typeName:_.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default},w(e)));var Ae=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),s=b(d({},t),{common:b(d({},t.common),{issues:[]})}),n=this._def.innerType._parse({data:s.data,path:s.path,parent:d({},s)});return Ie(n)?n.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new N(s.common.issues)},input:s.data})})):{status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new N(s.common.issues)},input:s.data})}}removeCatch(){return this._def.innerType}};Ae.create=(r,e)=>new Ae(d({innerType:r,typeName:_.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch},w(e)));var Ve=class extends S{_parse(e){if(this._getType(e)!==f.nan){let s=this._getOrReturnCtx(e);return m(s,{code:u.invalid_type,expected:f.nan,received:s.parsedType}),x}return{status:"valid",value:e.data}}};Ve.create=r=>new Ve(d({typeName:_.ZodNaN},w(r)));var dn=Symbol("zod_brand"),Xe=class extends S{_parse(e){let{ctx:t}=this._processInputParams(e),s=t.data;return this._def.type._parse({data:s,path:t.path,parent:t})}unwrap(){return this._def.type}},We=class r extends S{_parse(e){let{status:t,ctx:s}=this._processInputParams(e);if(s.common.async)return(async()=>{let i=await this._def.in._parseAsync({data:s.data,path:s.path,parent:s});return i.status==="aborted"?x:i.status==="dirty"?(t.dirty(),ue(i.value)):this._def.out._parseAsync({data:i.value,path:s.path,parent:s})})();{let n=this._def.in._parseSync({data:s.data,path:s.path,parent:s});return n.status==="aborted"?x:n.status==="dirty"?(t.dirty(),{status:"dirty",value:n.value}):this._def.out._parseSync({data:n.value,path:s.path,parent:s})}}static create(e,t){return new r({in:e,out:t,typeName:_.ZodPipeline})}},Ce=class extends S{_parse(e){let t=this._def.innerType._parse(e),s=n=>(te(n)&&(n.value=Object.freeze(n.value)),n);return Ie(t)?t.then(n=>s(n)):s(t)}unwrap(){return this._def.innerType}};Ce.create=(r,e)=>new Ce(d({innerType:r,typeName:_.ZodReadonly},w(e)));function Gr(r,e){let t=typeof r=="function"?r(e):typeof r=="string"?{message:r}:r;return typeof t=="string"?{message:t}:t}function es(r,e={},t){return r?se.create().superRefine((s,n)=>{var o,a;let i=r(s);if(i instanceof Promise)return i.then(l=>{var c,p;if(!l){let g=Gr(e,s),k=(p=(c=g.fatal)!=null?c:t)!=null?p:!0;n.addIssue(b(d({code:"custom"},g),{fatal:k}))}});if(!i){let l=Gr(e,s),c=(a=(o=l.fatal)!=null?o:t)!=null?a:!0;n.addIssue(b(d({code:"custom"},l),{fatal:c}))}}):se.create()}var un={object:P.lazycreate},_;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(_||(_={}));var pn=(r,e={message:`Input not instance of ${r.name}`})=>es(t=>t instanceof r,e),ts=re.create,rs=pe.create,hn=Ve.create,mn=he.create,ss=me.create,fn=fe.create,gn=Oe.create,yn=ge.create,vn=ye.create,bn=se.create,xn=K.create,_n=z.create,wn=Ne.create,Tn=Q.create,Sn=P.create,An=P.strictCreate,Cn=ve.create,kn=ht.create,$n=be.create,En=J.create,Rn=mt.create,In=Pe.create,Mn=Fe.create,On=ft.create,Nn=xe.create,Pn=_e.create,Fn=we.create,Vn=Te.create,jn=ne.create,Ln=U.create,Un=j.create,zn=D.create,Hn=U.createWithPreprocess,Jn=We.create,Dn=()=>ts().optional(),Bn=()=>rs().optional(),qn=()=>ss().optional(),Zn={string:r=>re.create(b(d({},r),{coerce:!0})),number:r=>pe.create(b(d({},r),{coerce:!0})),boolean:r=>me.create(b(d({},r),{coerce:!0})),bigint:r=>he.create(b(d({},r),{coerce:!0})),date:r=>fe.create(b(d({},r),{coerce:!0}))};var Yn=x;var Gn=/^\w+([_]\w+)*$/,ns=/^\w+([\s-_]\w+)*$/,is=h.record(h.lazy(function(){return h.union([h.string(),h.number(),h.boolean(),is])})),je=h.object({title:h.string().regex(ns).max(40).optional(),required:h.boolean().optional(),description:h.string().optional(),defaultValue:h.union([h.string(),h.boolean(),h.number(),is]).optional(),format:h.string().optional(),isValueField:h.boolean().optional()}),Kn=h.number().int().positive().lte(12).gte(1),os=h.intersection(je,h.object({type:h.literal("string"),minLength:h.number().optional(),maxLength:h.number().optional()})),as=h.intersection(je,h.object({type:h.literal("string"),enum:h.array(h.string().nonempty()),showAsRadio:h.boolean().optional(),verticalLayout:h.boolean().optional()})),ls=h.intersection(je,h.object({type:h.literal("number"),minimum:h.number().optional(),maximum:h.number().optional()})),cs=h.intersection(je,h.object({type:h.literal("integer"),minimum:h.number().optional(),maximum:h.number().optional()})),ds=h.intersection(je,h.object({type:h.literal("boolean")})),us=h.intersection(je,h.object({type:h.literal("object"),properties:h.lazy(function(){return h.record(h.union([as,os,ls,cs,ds,us]))}).optional()})),Qn=h.union([as,os,ls,cs,ds,us]),Xn=h.object({staticProperties:h.array(h.string()).optional(),canvasRestrictions:h.object({hideInToolbar:h.boolean().optional(),minSize:Kn.optional(),isFullRow:h.boolean().optional()}).optional()}),ps=h.object({version:h.string().nonempty(),fallbackDisableSubmit:h.boolean(),controlName:h.string().nonempty().regex(ns).max(40),pluginAuthor:h.string().optional(),pluginVersion:h.string().optional(),searchTerms:h.array(h.string()).optional(),description:h.string().optional(),groupName:h.union([h.string(),h.object({name:h.string(),order:h.number()})]).optional(),iconUrl:h.string().optional(),designer:Xn.optional(),properties:h.record(h.string().regex(Gn),h.union([Qn,h.boolean()])).optional(),standardProperties:h.object({fieldLabel:h.boolean().optional(),toolTip:h.boolean().optional(),description:h.boolean().optional(),placeholder:h.boolean().optional(),defaultValue:h.boolean().optional(),visibility:h.boolean().optional(),readOnly:h.boolean().optional(),required:h.boolean().optional()}).optional(),events:h.array(h.string()).optional()}).strict();var Wn="1.1.8",hs=!1;function ei(r){if(hs)return;hs=!0;let e=ps.safeParse(r);if(e.success){console.log("[Plugin Contract] Contract validation passed");return}console.error("[Plugin Contract] Contract validation failed"),e.error.issues.forEach((t,s)=>{console.error(`  [${s+1}] path=${t.path.join(".")} message=${t.message}`)})}function ms(){let r={controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:Wn,description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional bearer token value for authorization header used if token URL is not provided",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional OAuth token endpoint URL",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional JSON key path to extract from response",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},requestTimeout:{type:"number",title:"Request Timeout",description:"Maximum seconds to wait for the OAuth token or API request. Set to 0 to disable the timeout.",defaultValue:30},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},valid:{type:"boolean",title:"Valid",description:"Validation flag used by form rules. True on successful API call and in only-submit mode."},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"Actual message from API response"},formattedResponse:{type:"string",title:"Formatted Response",description:"Formatted response message based on success warning and error message configuration"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:!1,valid:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true allows repeated API calls. If false blocks repeated calls after success until request configuration or submission behavior changes.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},submissionAction:{type:"string",title:"Submission Action",description:"Action to take after a successful API call Set to only submit to skip API call and submit form directly",enum:["no-submit","quick-submit","delayed-submit","only-submit"],defaultValue:"no-submit"},submitHidden:{type:"boolean",title:"Hide Submit Button",description:"If true, hides the Nintex form submit button from users.",defaultValue:!1},showMoreDetails:{type:"string",title:"Show More Details",description:"Controls when to show expandable raw response details in alerts.",enum:["Never","Always","On Error/Warning"],defaultValue:"Never"},alertPosition:{type:"string",title:"Alert Position",description:"Controls where the alert message is displayed relative to the button.",enum:["After","Before","Pop-out"],defaultValue:"After"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}};return ei(r),r}var ti="1.1.8",ri=new Set(["clientSecret"]),T=class extends ee{constructor(){super();this.activeDebugTab="properties";this.activeFormatterTab="success";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.formatterUseArrayNotation=!0;this.formatterMessageTitle="";this.label="";this.description="";this.readOnly=!1;this._value={success:!1,valid:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0};this.requestBody="";this.apiUrl="";this.requestHeaders="";this.bearerToken="";this.tokenUrl="";this.clientId="";this.clientSecret="";this.outputValueKey="";this.contentType="application/json";this.requestTimeout=30;this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.countdownEnabled=!1;this.countdownTimer=5;this._btnEnabled=!0;this.btnText="Send API Request";this.btnAlignment="left";this._btnVisible=!0;this._submissionAction="no-submit";this.submitHidden=!1;this.showMoreDetails="Never";this.alertPosition="After";this.detailsExpanded=!1;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.oauthTokenResponse=null;this.containingForm=null;this.validationModule=new ot;this.submissionScheduler=new ct({getCountdownSeconds:()=>this.countdownTimer,getLastApiCallTime:()=>this.lastApiCallTime,submit:()=>this.submitNintexForm(),requestUpdate:()=>this.requestUpdate(),onCooldownComplete:()=>{this.showCooldownAlert=!1}});this.isFinalizingSubmission=!1}get value(){return this._value}set value(t){let s=this._value;this._value=t,console.log("[Value Setter] Value changed, dispatching ntx-value-change event",t),this.dispatchNintexValueChange(t),this.requestUpdate("value",s)}dispatchNintexValueChange(t){this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:t,bubbles:!0,composed:!0}))}get btnEnabled(){return this._btnEnabled}set btnEnabled(t){let s=this._btnEnabled;this._btnEnabled=t,console.log(`[Property Setter] btnEnabled changed from ${s} to ${t}`),this.requestUpdate("btnEnabled",s)}get btnVisible(){return this._btnVisible}set btnVisible(t){let s=this._btnVisible;this._btnVisible=t,console.log(`[Property Setter] btnVisible changed from ${s} to ${t}`),this.requestUpdate("btnVisible",s)}get submissionAction(){return this._submissionAction}set submissionAction(t){let s=t||"no-submit",n=this._submissionAction;n!==s&&(this._submissionAction=s,console.log(`[Property Setter] submissionAction changed from ${n} to ${s}`),this.requestUpdate("submissionAction",n),this.isConnected&&(this.clearApiOutput("submission action changed"),this.publishPendingResultToNintex()))}connectedCallback(){var t,s;super.connectedCallback(),((t=this.value)==null?void 0:t.valid)!==!0&&((s=this.value)==null?void 0:s.valid)!==!1&&(this.value=b(d({},this.value),{valid:!1})),this.registerWithContainingForm(),this.validationModule.attach(),this.injectErrorMessageSuppressStyle()}registerWithContainingForm(){this.containingForm=Z.register(this,this),this.toggleSubmitButtonVisibility()}unregisterFromContainingForm(){this.containingForm&&Z.unregister(this.containingForm,this),this.containingForm=null}static getMetaConfig(){return ms()}render(){return this.debugMode?y`
        <div class="plugin-container">
          ${this.btnVisible?this.renderButtonWithAlert("Calling API..."):""}
          
          <div class="debug-tabs">
            <div class="debug-version">Plugin Version: ${ti}</div>
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
    `:y`<div class="plugin-container" style="display: none;"></div>`}renderButtonWithAlert(t){let s=this.renderResponseAlert(this.alertPosition==="Before"),n=y`
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
        ${this.shouldShowAlert()?this.renderModal(s):""}
      `:this.alertPosition==="Before"?y`
        <div class="form-group">
          ${s}
          <div class="btn-container align-${this.btnAlignment}">
            ${n}
          </div>
        </div>
      `:y`
      <div class="form-group">
        <div class="btn-container align-${this.btnAlignment}">
          ${n}
        </div>
        ${s}
      </div>
    `}shouldShowAlert(){return Ir({now:Date.now(),lastApiCallTime:this.lastApiCallTime,countdownTimer:this.countdownTimer,countdownEnabled:this.countdownEnabled,showCooldownAlert:this.showCooldownAlert,apiResponse:this.apiResponse,responseType:this.responseType,lastCooldownAlertTime:this.lastCooldownAlertTime})}renderModal(t){return y`
      <div class="modal-overlay" @click=${s=>{s.target===s.currentTarget&&this.closeModal()}}>
        <div class="modal-content">
          <button class="modal-close" @click=${()=>this.closeModal()}>&times;</button>
          ${t}
        </div>
      </div>
    `}closeModal(){this.apiResponse="",this.responseType=null,this.showCooldownAlert=!1,this.requestUpdate()}renderResponseAlert(t=!1){var Le;let n=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3,o=this.countdownEnabled&&this.lastApiCallTime>0&&n<i,a=this.submissionAction==="delayed-submit"&&this.submissionScheduler.isTimerActive&&(this.responseType==="success"||this.responseType==="warning"),l=t?"alert-before":"";if(o&&this.showCooldownAlert){let ke=Math.ceil((i-n)/1e3);return y`
        <div class="alert alert-info ${l}" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${ke} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let c=`alert-${this.responseType}`,p=this.getAlertIcon(this.responseType),g=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),k=this.getCustomMessage(this.responseType),C=k.title,M=k.message,ie=0;if(a){let ke=Date.now()-this.submissionScheduler.delayedSubmissionStartTime,fs=this.countdownTimer*1e3-ke;ie=Math.max(0,Math.ceil(fs/1e3))}let oe=M.includes(`
`);if(this.responseType==="success"){let ke=this.shouldShowMoreDetails("success")||a;return y`
        <div class="alert ${c} ${l}" part="response-alert">
          ${C?y`
            <div>
              <strong>${C}</strong>
            </div>
          `:""}
          ${oe?y`
            <div class="alert-response" style="white-space: pre-line; margin-top: ${C?"8px":"0"};">
              ${M}
            </div>
          `:y`
            <div style="display: inline; margin-left: ${C?"4px":"0"};">
              ${M}
            </div>
          `}
          ${ke?y`
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
                  Submitting form in ${ie} seconds...
                </div>
              `:""}
            </div>
            ${this.detailsExpanded&&this.shouldShowMoreDetails("success")?y`
              <div class="alert-more-details-wrapper">
                <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
                <div class="alert-more-details-content">${dt(this.apiResponse)}</div>
              </div>
            `:""}
          `:""}
        </div>
      `}let gt=this.shouldShowMoreDetails(this.responseType)||a;return y`
      <div class="alert ${c} ${l}" part="response-alert">
        ${C?y`
          <div>
            <strong>${C}</strong>
          </div>
        `:""}
        ${oe?y`
          <div class="alert-response" style="white-space: pre-line; margin-top: ${C?"8px":"0"};">
            ${M}
          </div>
        `:y`
          <div style="display: inline; margin-left: ${C?"4px":"0"};">
            ${M}
          </div>
        `}
        ${(Le=this.value)!=null&&Le.message?y`
          <div class="alert-response">
            ${pr(xr(this.value.message))}
          </div>
        `:""}
        ${gt?y`
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
                Submitting form in ${ie} seconds...
              </div>
            `:""}
          </div>
          ${this.detailsExpanded&&this.shouldShowMoreDetails(this.responseType)?y`
            <div class="alert-more-details-wrapper">
              <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
              <div class="alert-more-details-content">${dt(this.apiResponse)}</div>
            </div>
          `:""}
        `:""}
      </div>
    `}getAlertIcon(t){return Er(t)}shouldShowMoreDetails(t){return Rr(this.showMoreDetails,t)}toggleDetailsExpanded(){this.detailsExpanded=!this.detailsExpanded,this.requestUpdate()}copyRawResponseToClipboard(){let t=dt(this.apiResponse);this.copyToClipboard(t)}getCustomMessage(t){return Jr(t,{success:this.successMessage,warning:this.warningMessage,error:this.errorMessage},this.value.data)}updated(t){let n=["allowMultipleAPICalls","apiUrl","method","requestBody","requestHeaders","bearerToken","tokenUrl","clientId","clientSecret","contentType","outputValueKey","requestTimeout"].some(o=>t.has(o)),i=t.has("sendAPICall")&&this.sendAPICall;(n||i)&&(this.clearApiOutput(n?"configuration changed":"new API call requested"),i?this.publishPendingResultBeforeValidation():this.publishPendingResultToNintex()),t.has("submitHidden")&&this.toggleSubmitButtonVisibility(),t.has("btnVisible")&&(console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`),this.requestUpdate()),t.has("btnEnabled")&&(console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`),this.requestUpdate()),t.has("btnText")&&(console.log(`[UI Property Change] btnText changed to: ${this.btnText}`),this.requestUpdate()),t.has("btnAlignment")&&(console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`),this.requestUpdate()),t.has("debugMode")&&(console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`),this.requestUpdate())}toggleSubmitButtonVisibility(){this.containingForm&&Z.setSubmitHidden(this.containingForm,this,this.submitHidden)}clearApiOutput(t){this.hasSuccessfulCall=!1;let s=new Date().toISOString();console.log(`[API Call] Clearing API output: ${t}`),this.responseType=null,this.apiResponse="",this.value=Pr(s)}async publishPendingResultToNintex(){await this.updateComplete,this.dispatchNintexValueChange(this.value),await new Promise(t=>window.setTimeout(t,800))}async publishPendingResultBeforeValidation(){await this.publishPendingResultToNintex(),await this.handleAPICallTrigger()}async handleAPICallTrigger(){if(console.log("[API Call] handleAPICallTrigger started"),this.sendAPICall=!1,this.isFinalizingSubmission){console.log("[API Call] Ignored - final native submission is in progress");return}if(this.submissionAction==="only-submit"){console.log("[API Call] Submission action is only-submit \u2014 submitting form directly"),this.value=b(d({},this.value),{valid:!0}),this.submitNintexForm();return}console.log("[API Call] Running form validation via ValidationModule...");let t=await this.validationModule.runHardValidation();if(console.log("[API Call] Validation result:",t),!t){console.log("[API Call] Validation FAILED \u2014 blocking API call");return}if(console.log("[API Call] Validation PASSED \u2014 proceeding"),!this.allowMultipleAPICalls&&this.hasSuccessfulCall){console.log("[API Call] Multiple API calls not allowed and already had successful call \u2014 BLOCKING");return}if(this.countdownEnabled){let n=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&n<i){console.log("[API Call] In cooldown period \u2014 BLOCKING"),this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.submissionScheduler.startCooldownTimer();return}}console.log("[API Call] All checks passed \u2014 calling handleApiCall()"),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls)return this.isLoading;let t=this.hasSuccessfulCall;return this.isLoading||!this.btnEnabled||t}setActiveTab(t){this.activeDebugTab=t,this.requestUpdate()}renderPropertiesTab(){let t=this.constructor.getMetaConfig();return _r(t.properties,this,ri)}renderRequestDetailsTab(){return wr({apiUrl:this.apiUrl,method:this.method,oauthTokenResponse:this.oauthTokenResponse,requestHeaders:this.requestHeaders,requestBody:this.requestBody,isLoading:this.isLoading,hasSuccessfulCall:this.hasSuccessfulCall,isButtonDisabled:this.isButtonDisabled(),apiResponse:this.apiResponse},t=>this.copyToClipboard(t))}renderAPIToolsTab(){return Ar(this.requestBody,{onFormat:()=>this.formatJson(),onMinify:()=>this.minifyJson(),onClear:()=>this.clearJson(),onInsertSample:()=>this.insertSampleJson(),onInput:t=>this.handleJsonInput(t),onBlur:t=>this.handleJsonBlur(t),onPaste:t=>this.handleJsonPaste(t)})}renderResponseFormatterTab(){return Cr({formatterJsonInput:this.formatterJsonInput,activeFormatterTab:this.activeFormatterTab,successMessage:this.successMessage,warningMessage:this.warningMessage,errorMessage:this.errorMessage},{onJsonInput:t=>{let s=t.target;this.formatterJsonInput=s.value,this.requestUpdate()},onTabChange:t=>{this.activeFormatterTab=t,this.loadConfigIntoFields(t),this.requestUpdate()},renderMessageTypeConfig:(t,s,n)=>this.renderMessageTypeConfig(t,s,n)})}renderMessageTypeConfig(t,s,n){let o={success:{bg:"#d4edda",text:"#155724",border:"#c3e6cb",btnBg:"#28a745",btnText:"white"},warning:{bg:"#fff3cd",text:"#856404",border:"#ffeaa7",btnBg:"#ffc107",btnText:"#000"},error:{bg:"#f8d7da",text:"#721c24",border:"#f5c6cb",btnBg:"#dc3545",btnText:"white"}}[t];return y`
      <div style="border: 1px solid var(--ntx-form-theme-color-border); border-top: none; border-radius: 0 0 4px 4px; padding: 16px; background: var(--ntx-form-theme-color-background);">
        
        <!-- Current Configuration -->
        <div class="form-group">
          <label class="control-label">Current ${t.charAt(0).toUpperCase()+t.slice(1)} Message Configuration</label>
          <div style="position: relative;">
            <textarea 
              class="form-control" 
              readonly
              rows="4"
              .value=${s}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; background: ${o.bg}; color: ${o.text}; border-color: ${o.border};"
            ></textarea>
          </div>
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
            ${s.trim().startsWith('{"fields"')||s.trim().startsWith('"{')?"\u2713 Formatted response configuration detected":"\u25CB Plain text message"}
          </div>
        </div>

        <!-- Preview -->
        <div class="form-group">
          <label class="control-label">Preview of Current Configuration</label>
          <div style="border: 1px solid ${o.border}; border-radius: 4px; padding: 16px; background: ${o.bg}; color: ${o.text}; white-space: pre-line; min-height: 60px;">
            ${this.getPreviewForConfig(s,n)}
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
                .value=${Nt(this.formatterSelectedFields,this.formatterMessageTitle)}
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 100px; background: ${o.bg}; color: ${o.text}; border-color: ${o.border};"
              ></textarea>
              <button 
                class="btn" 
                style="position: absolute; top: 8px; right: 8px; padding: 6px 16px; font-size: 13px; background: ${o.btnBg}; color: ${o.btnText||"white"}; border: none; font-weight: 600;"
                @click=${()=>{let a=Nt(this.formatterSelectedFields,this.formatterMessageTitle);this.copyToClipboard(a)}}
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
    `}getPreviewForConfig(t,s){if(!t||t.trim().length===0)return y`<span style="font-style: italic; opacity: 0.6;">No configuration set</span>`;let n=this.value,i=b(d({},this.value),{data:JSON.stringify(s)});this.value=i;let o;if(t.trim().startsWith('{"fields"')||t.trim().startsWith('"{'))try{let a;if(t.startsWith('"{')&&t.endsWith('}"')){let l=t.slice(1,-1).replace(/\\"/g,'"');a=JSON.parse(l)}else a=JSON.parse(t);o=Ke(a,this.value.data)}catch(a){o=t}else o=t;return this.value=n,o}loadConfigIntoFields(t){let s=t==="success"?this.successMessage:t==="warning"?this.warningMessage:this.errorMessage;if(this.formatterSelectedFields.clear(),this.formatterMessageTitle="",!s||s.trim().length===0){this.requestUpdate();return}try{let n=br(s);if(!n){this.requestUpdate();return}n.title&&(this.formatterMessageTitle=n.title),n.fields&&Array.isArray(n.fields)&&n.fields.forEach((i,o)=>{this.formatterSelectedFields.set(i.path,{title:i.title||i.path,checked:!0,order:o})})}catch(n){console.error("[Config Loading] Failed to parse config:",n)}this.requestUpdate()}renderAvailableFields(t,s){let n=jr(t,s,this.formatterUseArrayNotation);return n.length===0?y`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`:n.map(i=>{var a;let o=((a=this.formatterSelectedFields.get(i.path))==null?void 0:a.checked)||!1;return y`
        <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${o?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
          <input
            type="checkbox"
            .checked=${o}
            @change=${l=>{let c=l.target;Lr(this.formatterSelectedFields,i.path,c.checked,i.title),this.requestUpdate()}}
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
      `})}renderSelectedFieldsList(){return $r(Ft(this.formatterSelectedFields),{onReorder:(t,s)=>{Hr(this.formatterSelectedFields,t,s),this.requestUpdate()},onTitleChange:(t,s)=>{Ur(this.formatterSelectedFields,t,s),this.requestUpdate()},onRemove:t=>{zr(this.formatterSelectedFields,t),this.requestUpdate()}})}renderFormattedPreview(t){return kr(this.formatterSelectedFields,t)}formatJson(){let t=Mr(this.requestBody);t!==null&&(this.requestBody=t,this.requestUpdate())}minifyJson(){let t=Or(this.requestBody);t!==null&&(this.requestBody=t,this.requestUpdate())}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){this.requestBody=Nr(Date.now()),this.requestUpdate()}handleJsonInput(t){let s=t.target;this.requestBody=s.value,this.requestUpdate()}handleJsonBlur(t){if(V(this.requestBody)&&this.requestBody.trim())try{let s=JSON.parse(this.requestBody),n=JSON.stringify(s,null,2);n!==this.requestBody&&(this.requestBody=n,this.requestUpdate())}catch(s){}}handleJsonPaste(t){setTimeout(()=>{V(this.requestBody)&&this.formatJson()},100)}static removeInstructionalPlaceholders(t){if(Array.isArray(t))return t.map(s=>this.removeInstructionalPlaceholders(s));if(t&&typeof t=="object"){let s={};for(let[n,i]of Object.entries(t)){if(typeof i=="string"&&/^<.*>$/.test(i.trim()))continue;let o=this.removeInstructionalPlaceholders(i);o!==void 0&&!(typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(s[n]=o)}return s}return t}getRequestTimeoutSeconds(){let t=Number(this.requestTimeout);return Number.isFinite(t)&&t>0?t:null}setRequestConfigurationError(t){let s=Date.now()-this.apiCallStartTime,n=new Date().toISOString();this.responseType="error",this.apiResponse=t;let i=this.getCustomMessage("error").message;this.value=Vr(t,i,n,s),this.requestUpdate()}async handleApiCall(){var a;if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let t=gr(this.contentType,this.requestBody);if(t.error){this.setRequestConfigurationError(`Request body is not valid JSON: ${t.error}`);return}let s=t.body,n=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{let l=await Dr({tokenUrl:this.tokenUrl,clientId:this.clientId,clientSecret:this.clientSecret,timeoutSeconds:this.getRequestTimeoutSeconds()});n=l.accessToken,this.oauthTokenResponse=l.debugMetadata}catch(l){let c=Date.now()-this.apiCallStartTime,p=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${l instanceof Error?l.message:String(l)}`,this.value={success:!1,valid:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:"",formattedResponse:this.errorMessage,timestamp:p,executionTime:c},this.isLoading=!1,this.requestUpdate();return}let i=this.apiUrl||"",o=yr(this.requestHeaders);n&&n.trim()&&(o.Authorization=`Bearer ${n.trim()}`),await hr({url:i,method:this.method||"POST",headers:o,requestBody:s,contentType:this.contentType,timeoutSeconds:(a=this.getRequestTimeoutSeconds())!=null?a:0,setLoading:l=>{this.isLoading=l,this.requestUpdate()},setResponse:(l,c,p)=>{let g=Date.now()-this.apiCallStartTime,k=new Date().toISOString();this.apiResponse=l,this.responseType=p===!1?"error":at(l),this.formatterJsonInput=l,this.formatterSelectedFields.clear();let C=Br(l,p,this.outputValueKey),{accessToken:M,output:ie,message:oe}=C;this.responseType=C.responseType;let gt=this.getCustomMessage(this.responseType),Le=p===!0&&this.responseType==="success";this.value=Fr({success:p===!0,responseType:this.responseType,statusCode:c,data:l,message:oe,formattedResponse:gt.message,timestamp:k,executionTime:g,accessToken:M,output:ie}),Le&&(this.hasSuccessfulCall=!0),console.log("[Value Change] Value updated at:",new Date().toISOString()),this.requestUpdate(),Le&&(console.log("[Value Change] Waiting 800ms for Nintex to process value change..."),setTimeout(()=>{console.log("[Value Change] Wait complete at:",new Date().toISOString(),"- proceeding with submission action"),this.handlePostSubmissionAction()},800))}})}async copyToClipboard(t){try{await navigator.clipboard.writeText(t)}catch(s){console.error("Failed to copy text:",s)}}handlePostSubmissionAction(){this.submissionScheduler.handlePostSubmissionAction(this.submissionAction)}submitNintexForm(){if(console.log("[Submission Action] Attempting to submit Nintex form"),!this.containingForm){console.error("[Submission Action] No coordinated form found");return}console.log("[Submission Action] Clicking submit button"),this.isFinalizingSubmission=!0,Z.submit(this.containingForm,()=>{this.isFinalizingSubmission=!1})||(console.error("[Submission Action] No submit button found"),this.isFinalizingSubmission=!1)}disconnectedCallback(){super.disconnectedCallback(),this.submissionScheduler.dispose(),this.validationModule.detach(),this.unregisterFromContainingForm(),this.removeErrorMessageSuppressStyle()}injectErrorMessageSuppressStyle(){if(document.getElementById(T.ERROR_SUPPRESS_STYLE_ID))return;let t=document.createElement("style");t.id=T.ERROR_SUPPRESS_STYLE_ID,t.textContent=".form-group:has(daf-webrequest-plugin) .nx-error-message { display: none !important; }",document.head.appendChild(t)}removeErrorMessageSuppressStyle(){var t;document.querySelectorAll("daf-webrequest-plugin").length===0&&((t=document.getElementById(T.ERROR_SUPPRESS_STYLE_ID))==null||t.remove())}};T.styles=qr,T.ERROR_SUPPRESS_STYLE_ID="daf-webrequest-suppress-nx-error",$([E({type:String})],T.prototype,"label",2),$([E({type:String})],T.prototype,"description",2),$([E({type:Boolean})],T.prototype,"readOnly",2),$([E({type:Object})],T.prototype,"value",1),$([E({type:String})],T.prototype,"requestBody",2),$([E({type:String})],T.prototype,"apiUrl",2),$([E({type:String})],T.prototype,"requestHeaders",2),$([E({type:String})],T.prototype,"bearerToken",2),$([E({type:String})],T.prototype,"tokenUrl",2),$([E({type:String})],T.prototype,"clientId",2),$([E({type:String})],T.prototype,"clientSecret",2),$([E({type:String})],T.prototype,"outputValueKey",2),$([E({type:String})],T.prototype,"contentType",2),$([E({type:Number})],T.prototype,"requestTimeout",2),$([E({type:Boolean,reflect:!0})],T.prototype,"debugMode",2),$([E({type:String})],T.prototype,"method",2),$([E({type:String})],T.prototype,"successMessage",2),$([E({type:String})],T.prototype,"warningMessage",2),$([E({type:String})],T.prototype,"errorMessage",2),$([E({type:Boolean,reflect:!0,attribute:"send-api-call"})],T.prototype,"sendAPICall",2),$([E({type:Boolean,reflect:!0,attribute:"allow-multiple-api-calls"})],T.prototype,"allowMultipleAPICalls",2),$([E({type:Boolean,reflect:!0,attribute:"countdown-enabled"})],T.prototype,"countdownEnabled",2),$([E({type:Number})],T.prototype,"countdownTimer",2),$([E({type:Boolean,reflect:!0,attribute:"btn-enabled"})],T.prototype,"btnEnabled",1),$([E({type:String,reflect:!0,attribute:"btn-text"})],T.prototype,"btnText",2),$([E({type:String,reflect:!0,attribute:"btn-alignment"})],T.prototype,"btnAlignment",2),$([E({type:Boolean,reflect:!0,attribute:"btn-visible"})],T.prototype,"btnVisible",1),$([E({type:String,reflect:!0,attribute:"submission-action"})],T.prototype,"submissionAction",1),$([E({type:Boolean,reflect:!0,attribute:"submit-hidden"})],T.prototype,"submitHidden",2),$([E({type:String,reflect:!0,attribute:"show-more-details"})],T.prototype,"showMoreDetails",2),$([E({type:String,reflect:!0,attribute:"alert-position"})],T.prototype,"alertPosition",2),T=$([mr("daf-webrequest-plugin")],T);export{T as DafWebRequestPlugin};
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
