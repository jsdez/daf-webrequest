var le=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var ae=(i,e,t)=>e in i?le(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,J=(i,e)=>{for(var t in e||(e={}))Ue.call(e,t)&&ae(i,t,e[t]);if(ne)for(var t of ne(e))He.call(e,t)&&ae(i,t,e[t]);return i};var u=(i,e,t,s)=>{for(var r=s>1?void 0:s?ke(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&le(e,t,r),r};var q=globalThis,V=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),ce=new WeakMap,I=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(V&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ce.set(t,e))}return e}toString(){return this.cssText}},de=i=>new I(typeof i=="string"?i:i+"",void 0,F),K=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new I(t,i,F)},pe=(i,e)=>{if(V)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),r=q.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},Z=V?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return de(t)})(i):i;var{is:Ne,defineProperty:Le,getOwnPropertyDescriptor:Be,getOwnPropertyNames:Re,getOwnPropertySymbols:qe,getPrototypeOf:Ve}=Object,$=globalThis,he=$.trustedTypes,ze=he?he.emptyScript:"",G=$.reactiveElementPolyfillSupport,M=(i,e)=>i,O={toAttribute(i,e){switch(e){case Boolean:i=i?ze:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch(s){t=null}}return t}},z=(i,e)=>!Ne(i,e),ue={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:z},me,fe;(me=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(fe=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);var y=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Le(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){var o;let{get:r,set:n}=(o=Be(this.prototype,e))!=null?o:{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){let a=r==null?void 0:r.call(this);n==null||n.call(this,l),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:ue}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;let e=Ve(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){let t=this.properties,s=[...Re(t),...qe(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(Z(r))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;let e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return pe(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:O).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n,o,l,a;let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let c=s.getPropertyOptions(r),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((n=c.converter)==null?void 0:n.fromAttribute)!==void 0?c.converter:O;this._$Em=r,this[r]=(a=(l=d.fromAttribute(t,c.type))!=null?l:(o=this._$Ej)==null?void 0:o.get(r))!=null?a:null,this._$Em=null}}requestUpdate(e,t,s){var r,n;if(e!==void 0){let o=this.constructor,l=this[e];if(s!=null||(s=o.getPropertyOptions(e)),!(((r=s.hasChanged)!=null?r:z)(l,t)||s.useDefault&&s.reflect&&l===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:n},o){var l,a,c;s&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(a=o!=null?o:t)!=null?a:this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,l]of this._$Ep)this[o]=l;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,l]of n){let{wrapped:a}=l,c=this[o];a!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,l,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}},ge;y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[M("elementProperties")]=new Map,y[M("finalized")]=new Map,G==null||G({ReactiveElement:y}),((ge=$.reactiveElementVersions)!=null?ge:$.reactiveElementVersions=[]).push("2.1.0");var U=globalThis,j=U.trustedTypes,be=j?j.createPolicy("lit-html",{createHTML:i=>i}):void 0,Te="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,_e="?"+A,je=`<${_e}>`,_=document,H=()=>_.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",re=Array.isArray,De=i=>re(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,ve=/>/g,w=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,Ae=/"/g,Ce=/^(?:script|style|textarea|title)$/i,oe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=oe(1),We=oe(2),et=oe(3),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),xe=new WeakMap,T=_.createTreeWalker(_,129);function Se(i,e){if(!re(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return be!==void 0?be.createHTML(e):e}var Je=(i,e)=>{let t=i.length-1,s=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=k;for(let l=0;l<t;l++){let a=i[l],c,d,h=-1,b=0;for(;b<a.length&&(o.lastIndex=b,d=o.exec(a),d!==null);)b=o.lastIndex,o===k?d[1]==="!--"?o=ye:d[1]!==void 0?o=ve:d[2]!==void 0?(Ce.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=w):d[3]!==void 0&&(o=w):o===w?d[0]===">"?(o=r!=null?r:k,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?w:d[3]==='"'?Ae:$e):o===Ae||o===$e?o=w:o===ye||o===ve?o=k:(o=w,r=void 0);let v=o===w&&i[l+1].startsWith("/>")?" ":"";n+=o===k?a+je:h>=0?(s.push(c),a.slice(0,h)+Te+a.slice(h)+A+v):a+A+(h===-2?l:v)}return[Se(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},L=class i{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,o=0,l=e.length-1,a=this.parts,[c,d]=Je(e,t);if(this.el=i.createElement(c,s),T.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=T.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(Te)){let b=d[o++],v=r.getAttribute(h).split(A),R=/([.?@])?(.*)/.exec(b);a.push({type:1,index:n,name:R[2],strings:v,ctor:R[1]==="."?W:R[1]==="?"?ee:R[1]==="@"?te:E}),r.removeAttribute(h)}else h.startsWith(A)&&(a.push({type:6,index:n}),r.removeAttribute(h));if(Ce.test(r.tagName)){let h=r.textContent.split(A),b=h.length-1;if(b>0){r.textContent=j?j.emptyScript:"";for(let v=0;v<b;v++)r.append(h[v],H()),T.nextNode(),a.push({type:2,index:++n});r.append(h[b],H())}}}else if(r.nodeType===8)if(r.data===_e)a.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(A,h+1))!==-1;)a.push({type:7,index:n}),h+=A.length-1}n++}}static createElement(e,t){let s=_.createElement("template");return s.innerHTML=e,s}};function P(i,e,t=i,s){var o,l,a;if(e===C)return e;let r=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl,n=N(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?((a=t._$Co)!=null?a:t._$Co=[])[s]=r:t._$Cl=r),r!==void 0&&(e=P(i,r._$AS(i,e.values),r,s)),e}var Y=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var c;let{el:{content:t},parts:s}=this._$AD,r=((c=e==null?void 0:e.creationScope)!=null?c:_).importNode(t,!0);T.currentNode=r;let n=T.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new B(n,n.nextSibling,this,e):a.type===1?d=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(d=new se(n,this,e)),this._$AV.push(d),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=T.nextNode(),o++)}return T.currentNode=_,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},B=class i{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,r){var n;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),N(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):De(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){var n;let{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=L.createElement(Se(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{let o=new Y(r,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new L(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let n of e)r===t.length?t.push(s=new i(this.O(H()),this.O(H()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},E=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(e,t=this,s,r){let n=this.strings,o=!1;if(n===void 0)e=P(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{let l=e,a,c;for(e=n[0],a=0;a<n.length-1;a++)c=P(this,l[s+a],t,a),c===C&&(c=this._$AH[a]),o||(o=!N(c)||c!==this._$AH[a]),c===f?e=f:e!==f&&(e+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}o&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},W=class extends E{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},ee=class extends E{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},te=class extends E{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=P(this,e,t,0))!=null?o:f)===C)return;let s=this._$AH,r=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==f&&(s===f||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},se=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}};var X=U.litHtmlPolyfillSupport,we;X==null||X(L,B),((we=U.litHtmlVersions)!=null?we:U.litHtmlVersions=[]).push("3.3.0");var Pe=(i,e,t)=>{var n,o;let s=(n=t==null?void 0:t.renderBefore)!=null?n:e,r=s._$litPart$;if(r===void 0){let l=(o=t==null?void 0:t.renderBefore)!=null?o:null;s._$litPart$=r=new B(e.insertBefore(H(),l),l,void 0,t!=null?t:{})}return r._$AI(i),r};var S=globalThis,x=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;let e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}},Ee;x._$litElement$=!0,x.finalized=!0,(Ee=S.litElementHydrateSupport)==null||Ee.call(S,{LitElement:x});var ie=S.litElementPolyfillSupport;ie==null||ie({LitElement:x});var Ie;((Ie=S.litElementVersions)!=null?Ie:S.litElementVersions=[]).push("4.2.0");async function Me({url:i,method:e="POST",headers:t={},requestBody:s,setLoading:r,setResponse:n}){r(!0),n("",0,!1);try{let o=await fetch(i,{method:e,headers:J({"Content-Type":"application/json",Accept:"application/json"},t),body:["POST","PUT","PATCH","DELETE"].includes(e.toUpperCase())?JSON.stringify(s):void 0}),l=await o.text();n(l,o.status,o.ok)}catch(o){n("Error: "+((o==null?void 0:o.message)||o),0,!1)}finally{r(!1)}}var Oe=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};var Fe={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:z},Ke=(i=Fe,e,t)=>{let{kind:s,metadata:r}=t,n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),s==="accessor"){let{name:o}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,i)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(s==="setter"){let{name:o}=t;return function(l){let a=this[o];e.call(this,l),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function m(i){return(e,t)=>typeof t=="object"?Ke(i,e,t):((s,r,n)=>{let o=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,e,t)}var p=class extends x{constructor(){super();this.activeDebugTab="properties";this.label="";this.description="";this.readOnly=!1;this.value={success:!1,statusCode:0,responseType:"",data:"",message:"",timestamp:"",executionTime:0};this.requestBody="";this.apiUrl="";this.requestHeaders="";this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.countdownEnabled=!1;this.countdownTimer=5;this.btnEnabled=!0;this.btnText="Send API Request";this.btnAlignment="left";this.btnVisible=!0;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.label="",this.description="",this.readOnly=!1,this.value={success:!1,statusCode:0,responseType:"",data:"",message:"",timestamp:"",executionTime:0},this.requestBody="",this.apiUrl="",this.requestHeaders="",this.debugMode=!1,this.method="POST",this.successMessage="API call completed successfully",this.warningMessage="API call completed with warnings",this.errorMessage="API call failed",this.sendAPICall=!1,this.allowMultipleAPICalls=!1,this.countdownEnabled=!1,this.countdownTimer=5,this.btnEnabled=!0,this.btnText="Send API Request",this.btnAlignment="left",this.btnVisible=!0}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL with Token",description:"The endpoint URL to call, including any required token as a query parameter.",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request, as a JSON object.",defaultValue:""},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"User-friendly message describing the result"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"}},defaultValue:{success:!1,statusCode:0,responseType:"",data:"",message:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer (seconds)",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}}}render(){return this.debugMode?g`
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
                  ${this.isLoading?g`<span class="spinner"></span>Calling API...`:this.btnText}
                </button>
              </div>
            `:""}
            ${this.renderResponseAlert()}
          </div>

          <div class="debug-tabs">
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
          </div>
        </div>
      `:g`
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
        </div>
      </div>
    `}renderResponseAlert(){let s=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3;if(this.countdownEnabled&&this.lastApiCallTime>0&&s<r&&this.showCooldownAlert){let d=Math.ceil((r-s)/1e3);return g`
        <div class="alert alert-info" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${d} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let o=`alert-${this.responseType}`,l=this.getAlertIcon(this.responseType),a=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),c=this.getCustomMessage(this.responseType);return g`
      <div class="alert ${o}" part="response-alert">
        <div>
          <span class="alert-icon">${l}</span>
          <strong>${a}:</strong> ${c}
        </div>
        ${this.debugMode?g`
          <div class="alert-response">
            <strong>Response:</strong> ${this.apiResponse}
          </div>
        `:""}
      </div>
    `}getAlertIcon(t){switch(t){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}getCustomMessage(t){switch(t){case"success":return this.successMessage;case"warning":return this.warningMessage;case"error":return this.errorMessage;default:return"Unknown response type"}}updated(t){t.has("value")&&this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),t.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger()}handleAPICallTrigger(){if(this.sendAPICall=!1,!(!this.allowMultipleAPICalls&&this.hasSuccessfulCall)){if(this.countdownEnabled){let s=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&s<r){this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}this.handleApiCall()}}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls){let r=this.isLoading;return this.debugMode&&console.log("Button disabled check - multiple calls allowed:",{isLoading:this.isLoading,btnEnabled:this.btnEnabled,result:r,note:"btnEnabled is ignored when allowMultipleAPICalls=true"}),r}let t=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning"),s=this.isLoading||!this.btnEnabled||t;return this.debugMode&&console.log("Button disabled check - single call only:",{isLoading:this.isLoading,btnEnabled:this.btnEnabled,permanentlyDisabled:t,hasSuccessfulCall:this.hasSuccessfulCall,responseType:this.responseType,result:s}),s}setActiveTab(t){this.activeDebugTab=t,this.requestUpdate()}renderPropertiesTab(){let t=[{name:"btnText",default:"Send API Call",current:this.btnText},{name:"btnAlignment",default:"left",current:this.btnAlignment},{name:"btnVisible",default:!0,current:this.btnVisible},{name:"btnEnabled",default:!0,current:this.btnEnabled},{name:"debugMode",default:!1,current:this.debugMode},{name:"countdownEnabled",default:!0,current:this.countdownEnabled},{name:"countdownTimer",default:5,current:this.countdownTimer},{name:"allowMultipleAPICalls",default:!1,current:this.allowMultipleAPICalls},{name:"sendAPICall",default:!1,current:this.sendAPICall},{name:"successMessage",default:"API call completed successfully",current:this.successMessage},{name:"warningMessage",default:"API call completed with warnings",current:this.warningMessage},{name:"errorMessage",default:"API call failed",current:this.errorMessage}];return g`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(s=>g`
            <tr>
              <td><code>${s.name}</code></td>
              <td>${this.formatValue(s.default)}</td>
              <td>${this.formatValue(s.current)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}renderRequestDetailsTab(){return g`
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
            <td>${this.apiUrl||"<not set>"}</td>
          </tr>
          <tr>
            <td><code>method</code></td>
            <td>${this.method}</td>
          </tr>
          <tr>
            <td><code>requestHeaders</code></td>
            <td>
              ${this.requestHeaders?g`
                <pre class="debug-json">${this.requestHeaders}</pre>
              `:"<not set>"}
            </td>
          </tr>
          <tr>
            <td><code>requestBody</code></td>
            <td>
              ${this.requestBody?g`
                <pre class="debug-json">${this.requestBody}</pre>
              `:"<not set>"}
            </td>
          </tr>
          <tr>
            <td><code>State</code></td>
            <td>
              Loading: ${this.isLoading}<br>
              Has Successful Call: ${this.hasSuccessfulCall}<br>
              Button Disabled: ${this.isButtonDisabled()}
            </td>
          </tr>
        </tbody>
      </table>
    `}renderAPIToolsTab(){let t="",s="",r="";try{this.requestBody&&(t=JSON.stringify(JSON.parse(this.requestBody)),s='"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"')}catch(n){r="Invalid JSON"}return g`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label" part="debug-label">JSON Editor:</label>
          <textarea 
            class="form-control" 
            part="debug-input"
            rows="8" 
            .value=${this.requestBody} 
            @input=${n=>{this.requestBody=n.target.value,this.requestUpdate()}}
            placeholder="Enter JSON request body..."
          ></textarea>
        </div>
        <div class="form-group">
          <label class="control-label" part="output-label">Minified & Escaped JSON:</label>
          <textarea 
            class="form-control" 
            part="debug-output"
            readonly 
            rows="4"
            .value=${s}
          ></textarea>
          ${r?g`<div class="text-danger" part="error-message">${r}</div>`:""}
        </div>
      </div>
    `}formatValue(t){return typeof t=="boolean"?t.toString():typeof t=="string"?`"${t}"`:typeof t=="number"?t.toString():t===null?"null":t===void 0?"undefined":JSON.stringify(t)}static removeInstructionalPlaceholders(t){if(Array.isArray(t))return t.map(s=>this.removeInstructionalPlaceholders(s));if(t&&typeof t=="object"){let s={};for(let[r,n]of Object.entries(t)){if(typeof n=="string"&&/^<.*>$/.test(n.trim()))continue;let o=this.removeInstructionalPlaceholders(n);o!==void 0&&!(typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(s[r]=o)}return s}return t}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let t=this.apiUrl||"",s={};if(this.requestHeaders)try{s=JSON.parse(this.requestHeaders)}catch(n){s={},this.requestHeaders.split(/\r?\n/).forEach(o=>{let l=o.indexOf(":");if(l>-1){let a=o.slice(0,l).trim(),c=o.slice(l+1).trim();a&&(s[a]=c)}})}let r={startData:{se_input:"This is a test"}};await Me({url:t,method:this.method||"POST",headers:s,requestBody:r,setLoading:n=>{this.isLoading=n,this.requestUpdate()},setResponse:(n,o,l)=>{let a=Date.now()-this.apiCallStartTime,c=new Date().toISOString();this.apiResponse=n,this.responseType=l===!1?"error":this.determineResponseType(n),this.value={success:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:o||(this.responseType==="success"?200:500),responseType:this.responseType,data:n,message:this.getCustomMessage(this.responseType),timestamp:c,executionTime:a},(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),this.requestUpdate()}})}determineResponseType(t){if(t.toLowerCase().includes("error:")||t.toLowerCase().includes("failed")||t.toLowerCase().includes("exception"))return"error";try{let s=JSON.parse(t);if(s.error||s.status==="error")return"error";if(s.warning||s.status==="warning")return"warning"}catch(s){}return"success"}startCooldownTimer(){let t=()=>{let r=Date.now()-this.lastApiCallTime,n=this.countdownTimer*1e3;r<n?(this.requestUpdate(),setTimeout(t,1e3)):(this.showCooldownAlert=!1,this.requestUpdate())};setTimeout(t,1e3)}};p.styles=K`
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

    /* Debug Tabs */
    .debug-tabs {
      margin-top: var(--ntx-form-theme-spacing-md, 16px);
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
      background-color: var(--ntx-form-theme-color-background-alt, #f8f9fa);
      font-weight: 500;
      color: var(--ntx-form-theme-color-input-text, #333333);
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
  `,u([m({type:String})],p.prototype,"label",2),u([m({type:String})],p.prototype,"description",2),u([m({type:Boolean})],p.prototype,"readOnly",2),u([m({type:Object})],p.prototype,"value",2),u([m({type:String})],p.prototype,"requestBody",2),u([m({type:String})],p.prototype,"apiUrl",2),u([m({type:String})],p.prototype,"requestHeaders",2),u([m({type:Boolean})],p.prototype,"debugMode",2),u([m({type:String})],p.prototype,"method",2),u([m({type:String})],p.prototype,"successMessage",2),u([m({type:String})],p.prototype,"warningMessage",2),u([m({type:String})],p.prototype,"errorMessage",2),u([m({type:Boolean})],p.prototype,"sendAPICall",2),u([m({type:Boolean})],p.prototype,"allowMultipleAPICalls",2),u([m({type:Boolean})],p.prototype,"countdownEnabled",2),u([m({type:Number})],p.prototype,"countdownTimer",2),u([m({type:Boolean})],p.prototype,"btnEnabled",2),u([m({type:String})],p.prototype,"btnText",2),u([m({type:String})],p.prototype,"btnAlignment",2),u([m({type:Boolean})],p.prototype,"btnVisible",2),p=u([Oe("daf-webrequest-plugin")],p);export{p as DafWebRequestPlugin};
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
