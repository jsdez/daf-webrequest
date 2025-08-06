var le=Object.defineProperty;var Ue=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var ae=(o,e,t)=>e in o?le(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,D=(o,e)=>{for(var t in e||(e={}))ke.call(e,t)&&ae(o,t,e[t]);if(ne)for(var t of ne(e))Ne.call(e,t)&&ae(o,t,e[t]);return o};var u=(o,e,t,s)=>{for(var r=s>1?void 0:s?Ue(e,t):e,n=o.length-1,i;n>=0;n--)(i=o[n])&&(r=(s?i(e,t,r):i(r))||r);return s&&r&&le(e,t,r),r};var V=globalThis,z=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),ce=new WeakMap,M=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(z&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ce.set(t,e))}return e}toString(){return this.cssText}},pe=o=>new M(typeof o=="string"?o:o+"",void 0,F),K=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,r,n)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new M(t,o,F)},he=(o,e)=>{if(z)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),r=V.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,o.appendChild(s)}},Z=z?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return pe(t)})(o):o;var{is:He,defineProperty:Le,getOwnPropertyDescriptor:Re,getOwnPropertyNames:Be,getOwnPropertySymbols:Ve,getPrototypeOf:ze}=Object,A=globalThis,de=A.trustedTypes,je=de?de.emptyScript:"",G=A.reactiveElementPolyfillSupport,I=(o,e)=>o,O={toAttribute(o,e){switch(e){case Boolean:o=o?je:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch(s){t=null}}return t}},j=(o,e)=>!He(o,e),ue={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:j},fe,me;(fe=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(me=A.litPropertyMetadata)!=null||(A.litPropertyMetadata=new WeakMap);var $=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Le(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){var i;let{get:r,set:n}=(i=Re(this.prototype,e))!=null?i:{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){let a=r==null?void 0:r.call(this);n==null||n.call(this,l),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:ue}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let e=ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let t=this.properties,s=[...Be(t),...Ve(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(Z(r))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return he(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let i=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:O).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){var n,i,l,a;let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let c=s.getPropertyOptions(r),h=typeof c.converter=="function"?{fromAttribute:c.converter}:((n=c.converter)==null?void 0:n.fromAttribute)!==void 0?c.converter:O;this._$Em=r,this[r]=(a=(l=h.fromAttribute(t,c.type))!=null?l:(i=this._$Ej)==null?void 0:i.get(r))!=null?a:null,this._$Em=null}}requestUpdate(e,t,s){var r,n;if(e!==void 0){let i=this.constructor,l=this[e];if(s!=null||(s=i.getPropertyOptions(e)),!(((r=s.hasChanged)!=null?r:j)(l,t)||s.useDefault&&s.reflect&&l===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(i._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},i){var l,a,c;s&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=i!=null?i:t)!=null?a:this[e]),n!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,l]of n){let{wrapped:a}=l,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,l,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},ge;$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[I("elementProperties")]=new Map,$[I("finalized")]=new Map,G==null||G({ReactiveElement:$}),((ge=A.reactiveElementVersions)!=null?ge:A.reactiveElementVersions=[]).push("2.1.0");var k=globalThis,q=k.trustedTypes,ye=q?q.createPolicy("lit-html",{createHTML:o=>o}):void 0,Se="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+v,qe=`<${we}>`,w=document,N=()=>w.createComment(""),H=o=>o===null||typeof o!="object"&&typeof o!="function",re=Array.isArray,Je=o=>re(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,be=/>/g,x=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,ve=/"/g,Ce=/^(?:script|style|textarea|title)$/i,ie=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=ie(1),We=ie(2),et=ie(3),C=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),_e=new WeakMap,S=w.createTreeWalker(w,129);function Ee(o,e){if(!re(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(e):e}var De=(o,e)=>{let t=o.length-1,s=[],r,n=e===2?"<svg>":e===3?"<math>":"",i=U;for(let l=0;l<t;l++){let a=o[l],c,h,p=-1,y=0;for(;y<a.length&&(i.lastIndex=y,h=i.exec(a),h!==null);)y=i.lastIndex,i===U?h[1]==="!--"?i=$e:h[1]!==void 0?i=be:h[2]!==void 0?(Ce.test(h[2])&&(r=RegExp("</"+h[2],"g")),i=x):h[3]!==void 0&&(i=x):i===x?h[0]===">"?(i=r!=null?r:U,p=-1):h[1]===void 0?p=-2:(p=i.lastIndex-h[2].length,c=h[1],i=h[3]===void 0?x:h[3]==='"'?ve:Ae):i===ve||i===Ae?i=x:i===$e||i===be?i=U:(i=x,r=void 0);let b=i===x&&o[l+1].startsWith("/>")?" ":"";n+=i===U?a+qe:p>=0?(s.push(c),a.slice(0,p)+Se+a.slice(p)+v+b):a+v+(p===-2?l:b)}return[Ee(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},L=class o{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,i=0,l=e.length-1,a=this.parts,[c,h]=De(e,t);if(this.el=o.createElement(c,s),S.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=S.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Se)){let y=h[i++],b=r.getAttribute(p).split(v),B=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:B[2],strings:b,ctor:B[1]==="."?W:B[1]==="?"?ee:B[1]==="@"?te:T}),r.removeAttribute(p)}else p.startsWith(v)&&(a.push({type:6,index:n}),r.removeAttribute(p));if(Ce.test(r.tagName)){let p=r.textContent.split(v),y=p.length-1;if(y>0){r.textContent=q?q.emptyScript:"";for(let b=0;b<y;b++)r.append(p[b],N()),S.nextNode(),a.push({type:2,index:++n});r.append(p[y],N())}}}else if(r.nodeType===8)if(r.data===we)a.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(v,p+1))!==-1;)a.push({type:7,index:n}),p+=v.length-1}n++}}static createElement(e,t){let s=w.createElement("template");return s.innerHTML=e,s}};function P(o,e,t=o,s){var i,l,a;if(e===C)return e;let r=s!==void 0?(i=t._$Co)==null?void 0:i[s]:t._$Cl,n=H(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(o),r._$AT(o,t,s)),s!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[s]=r:t._$Cl=r),r!==void 0&&(e=P(o,r._$AS(o,e.values),r,s)),e}var Y=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;let{el:{content:t},parts:s}=this._$AD,r=((c=e==null?void 0:e.creationScope)!=null?c:w).importNode(t,!0);S.currentNode=r;let n=S.nextNode(),i=0,l=0,a=s[0];for(;a!==void 0;){if(i===a.index){let h;a.type===2?h=new R(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new se(n,this,e)),this._$AV.push(h),a=s[++l]}i!==(a==null?void 0:a.index)&&(n=S.nextNode(),i++)}return S.currentNode=w,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},R=class o{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,r){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),H(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var n;let{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=L.createElement(Ee(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{let i=new Y(r,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new L(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let n of e)r===t.length?t.push(s=new o(this.O(N()),this.O(N()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(e,t=this,s,r){let n=this.strings,i=!1;if(n===void 0)e=P(this,e,t,0),i=!H(e)||e!==this._$AH&&e!==C,i&&(this._$AH=e);else{let l=e,a,c;for(e=n[0],a=0;a<n.length-1;a++)c=P(this,l[s+a],t,a),c===C&&(c=this._$AH[a]),i||(i=!H(c)||c!==this._$AH[a]),c===m?e=m:e!==m&&(e+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}i&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},W=class extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},ee=class extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},te=class extends T{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=P(this,e,t,0))!=null?i:m)===C)return;let s=this._$AH,r=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==m&&(s===m||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},se=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}};var X=k.litHtmlPolyfillSupport,xe;X==null||X(L,R),((xe=k.litHtmlVersions)!=null?xe:k.litHtmlVersions=[]).push("3.3.0");var Pe=(o,e,t)=>{var n,i;let s=(n=t==null?void 0:t.renderBefore)!=null?n:e,r=s._$litPart$;if(r===void 0){let l=(i=t==null?void 0:t.renderBefore)!=null?i:null;s._$litPart$=r=new R(e.insertBefore(N(),l),l,void 0,t!=null?t:{})}return r._$AI(o),r};var E=globalThis,_=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;let e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}},Te;_._$litElement$=!0,_.finalized=!0,(Te=E.litElementHydrateSupport)==null||Te.call(E,{LitElement:_});var oe=E.litElementPolyfillSupport;oe==null||oe({LitElement:_});var Me;((Me=E.litElementVersions)!=null?Me:E.litElementVersions=[]).push("4.2.0");async function Ie({url:o,method:e="POST",headers:t={},requestBody:s,setLoading:r,setResponse:n}){r(!0),n("");try{let l=await(await fetch(o,{method:e,headers:D({"Content-Type":"application/json",Accept:"application/json"},t),body:["POST","PUT","PATCH","DELETE"].includes(e.toUpperCase())?JSON.stringify(s):void 0})).text();n(l)}catch(i){n("Error: "+((i==null?void 0:i.message)||i))}finally{r(!1)}}var Oe=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};var Fe={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:j},Ke=(o=Fe,e,t)=>{let{kind:s,metadata:r}=t,n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(t.name,o),s==="accessor"){let{name:i}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(i,a,o)},init(l){return l!==void 0&&this.C(i,void 0,o,l),l}}}if(s==="setter"){let{name:i}=t;return function(l){let a=this[i];e.call(this,l),this.requestUpdate(i,a,o)}}throw Error("Unsupported decorator location: "+s)};function f(o){return(e,t)=>typeof t=="object"?Ke(o,e,t):((s,r,n)=>{let i=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),i?Object.getOwnPropertyDescriptor(r,n):void 0})(o,e,t)}var d=class extends _{constructor(){super(...arguments);this.label="";this.description="";this.readOnly=!1;this.value="";this.requestBody="";this.apiUrl="";this.requestHeaders="";this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.btnEnabled=!0;this.btnText="Execute API Call";this.btnAlignment="left";this.btnVisible=!0;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL with Token",description:"The endpoint URL to call, including any required token as a query parameter.",defaultValue:""},requestHeaders:{type:"string",title:"Request Headers (JSON)",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},requestBody:{type:"string",title:"Request Body (JSON)",description:"Body to send in the API request, as a JSON object.",defaultValue:""},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"string",title:"Value",isValueField:!0,defaultValue:""},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH"],defaultValue:"POST"},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Execute API Call"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!0}}}render(){if(this.debugMode){let s="",r="",n="";try{this.requestBody&&(s=JSON.stringify(JSON.parse(this.requestBody)),r='"'+s.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"')}catch(i){n="Invalid JSON"}return g`
        <div class="plugin-container">
          <div class="form-group">
            <label class="control-label" part="debug-label">Enter JSON:</label>
            <textarea 
              class="form-control" 
              part="debug-input"
              rows="8" 
              .value=${this.requestBody} 
              @input=${i=>{this.requestBody=i.target.value,this.requestUpdate()}}
            ></textarea>
          </div>
          <div class="form-group">
            <label class="control-label" part="output-label">Minified & Escaped JSON:</label>
            <textarea 
              class="form-control" 
              part="debug-output"
              readonly 
              rows="4"
            >${r}</textarea>
            ${n?g`<div class="text-danger" part="error-message">${n}</div>`:""}
          </div>
          <div class="form-group">
            ${this.btnVisible?g`
              <div class="btn-container align-${this.btnAlignment}">
                <button 
                  class="btn btn-primary" 
                  part="api-button"
                  @click=${()=>this.triggerAPICall()} 
                  ?disabled=${this.isButtonDisabled()}
                >
                  ${this.isLoading?g`<span class="spinner"></span>Calling API...`:this.btnText}
                </button>
              </div>
            `:""}
            ${this.renderResponseAlert()}
          </div>
        </div>
      `}return g`
      <div class="plugin-container">
        <div class="form-group">
          ${this.btnVisible?g`
            <div class="btn-container align-${this.btnAlignment}">
              <button 
                class="btn btn-primary" 
                part="api-button"
                @click=${()=>this.triggerAPICall()} 
                ?disabled=${this.isButtonDisabled()}
              >
                ${this.isLoading?g`<span class="spinner"></span>Processing...`:this.btnText}
              </button>
            </div>
          `:""}
          ${this.renderResponseAlert()}
          
          <!-- Debug info -->
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            Debug: allowMultiple=${this.allowMultipleAPICalls}, hasSuccessful=${this.hasSuccessfulCall}, responseType=${this.responseType}
          </div>
        </div>
      </div>
    `}renderResponseAlert(){if(!this.apiResponse||!this.responseType)return"";let t=`alert-${this.responseType}`,s=this.getAlertIcon(this.responseType),r=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),n=this.getCustomMessage(this.responseType);return g`
      <div class="alert ${t}" part="response-alert">
        <div>
          <span class="alert-icon">${s}</span>
          <strong>${r}:</strong> ${n}
        </div>
        ${this.debugMode?g`
          <div class="alert-response">
            <strong>Response:</strong> ${this.apiResponse}
          </div>
        `:""}
      </div>
    `}getAlertIcon(t){switch(t){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}getCustomMessage(t){switch(t){case"success":return this.successMessage;case"warning":return this.warningMessage;case"error":return this.errorMessage;default:return"Unknown response type"}}updated(t){t.has("value")&&this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),t.has("sendAPICall")&&this.sendAPICall&&!this.isLoading&&this.canMakeAPICall()&&this.handleApiCall()}triggerAPICall(){this.canMakeAPICall()&&!this.isLoading&&(this.sendAPICall=!0,this.handleApiCall())}isButtonDisabled(){return this.isLoading||!this.canMakeAPICall()||!this.btnEnabled}canMakeAPICall(){if(this.allowMultipleAPICalls)return!0;let t=!this.hasSuccessfulCall||this.responseType==="error";return console.log("canMakeAPICall:",{allowMultipleAPICalls:this.allowMultipleAPICalls,hasSuccessfulCall:this.hasSuccessfulCall,responseType:this.responseType,canCall:t}),t}static removeInstructionalPlaceholders(t){if(Array.isArray(t))return t.map(s=>this.removeInstructionalPlaceholders(s));if(t&&typeof t=="object"){let s={};for(let[r,n]of Object.entries(t)){if(typeof n=="string"&&/^<.*>$/.test(n.trim()))continue;let i=this.removeInstructionalPlaceholders(n);i!==void 0&&!(typeof i=="object"&&i!==null&&Object.keys(i).length===0)&&(s[r]=i)}return s}return t}async handleApiCall(){if(!this.canMakeAPICall())return;this.responseType=null,this.apiResponse="";let t=this.apiUrl||"",s={};if(this.requestHeaders)try{s=JSON.parse(this.requestHeaders)}catch(n){s={},this.requestHeaders.split(/\r?\n/).forEach(i=>{let l=i.indexOf(":");if(l>-1){let a=i.slice(0,l).trim(),c=i.slice(l+1).trim();a&&(s[a]=c)}})}let r={startData:{se_input:"This is a test"}};await Ie({url:t,method:this.method||"POST",headers:s,requestBody:r,setLoading:n=>{this.isLoading=n,this.requestUpdate()},setResponse:n=>{this.apiResponse=n,this.responseType=this.determineResponseType(n),this.value=n,(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),this.sendAPICall=!1,this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),this.requestUpdate()}})}determineResponseType(t){if(t.toLowerCase().includes("error:")||t.toLowerCase().includes("failed")||t.toLowerCase().includes("exception"))return"error";try{let s=JSON.parse(t);if(s.error||s.status==="error")return"error";if(s.warning||s.status==="warning")return"warning"}catch(s){}return"success"}};d.styles=K`
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

    .alert-icon {
      margin-right: 8px;
      font-weight: bold;
    }

    .alert-response {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      white-space: pre-wrap;
      word-break: break-all;
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
  `,u([f({type:String})],d.prototype,"label",2),u([f({type:String})],d.prototype,"description",2),u([f({type:Boolean})],d.prototype,"readOnly",2),u([f({type:String})],d.prototype,"value",2),u([f({type:String})],d.prototype,"requestBody",2),u([f({type:String})],d.prototype,"apiUrl",2),u([f({type:String})],d.prototype,"requestHeaders",2),u([f({type:Boolean})],d.prototype,"debugMode",2),u([f({type:String})],d.prototype,"method",2),u([f({type:String})],d.prototype,"successMessage",2),u([f({type:String})],d.prototype,"warningMessage",2),u([f({type:String})],d.prototype,"errorMessage",2),u([f({type:Boolean})],d.prototype,"sendAPICall",2),u([f({type:Boolean})],d.prototype,"allowMultipleAPICalls",2),u([f({type:Boolean})],d.prototype,"btnEnabled",2),u([f({type:String})],d.prototype,"btnText",2),u([f({type:String})],d.prototype,"btnAlignment",2),u([f({type:Boolean})],d.prototype,"btnVisible",2),d=u([Oe("daf-webrequest-plugin")],d);export{d as DafWebRequestPlugin};
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
