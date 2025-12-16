var ue=Object.defineProperty,Ve=Object.defineProperties,qe=Object.getOwnPropertyDescriptor,Be=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var pe=(i,t,e)=>t in i?ue(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,x=(i,t)=>{for(var e in t||(t={}))He.call(t,e)&&pe(i,e,t[e]);if(de)for(var e of de(t))ze.call(t,e)&&pe(i,e,t[e]);return i},H=(i,t)=>Ve(i,Be(t));var f=(i,t,e,s)=>{for(var r=s>1?void 0:s?qe(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ue(t,e,r),r};var z=globalThis,R=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),he=new WeakMap,O=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(R&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=he.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&he.set(e,t))}return t}toString(){return this.cssText}},fe=i=>new O(typeof i=="string"?i:i+"",void 0,Q),X=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new O(e,i,Q)},me=(i,t)=>{if(R)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=z.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},Y=R?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return fe(e)})(i):i;var{is:Re,defineProperty:Le,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:De,getOwnPropertySymbols:Ke,getPrototypeOf:Ze}=Object,$=globalThis,ge=$.trustedTypes,Ge=ge?ge.emptyScript:"",W=$.reactiveElementPolyfillSupport,M=(i,t)=>i,J={toAttribute(i,t){switch(t){case Boolean:i=i?Ge:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch(s){e=null}}return e}},L=(i,t)=>!Re(i,t),be={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:L},ye,ve;(ye=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ve=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);var v=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=be){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Le(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var o;let{get:r,set:n}=(o=Fe(this.prototype,t))!=null?o:{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){let l=r==null?void 0:r.call(this);n==null||n.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:be}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;let t=Ze(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){let e=this.properties,s=[...De(e),...Ke(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Y(r))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return me(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:J).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n,o,a,l;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let c=s.getPropertyOptions(r),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((n=c.converter)==null?void 0:n.fromAttribute)!==void 0?c.converter:J;this._$Em=r,this[r]=(l=(a=d.fromAttribute(e,c.type))!=null?a:(o=this._$Ej)==null?void 0:o.get(r))!=null?l:null,this._$Em=null}}requestUpdate(t,e,s){var r,n;if(t!==void 0){let o=this.constructor,a=this[t];if(s!=null||(s=o.getPropertyOptions(t)),!(((r=s.hasChanged)!=null?r:L)(a,e)||s.useDefault&&s.reflect&&a===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:n},o){var a,l,c;s&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(l=o!=null?o:e)!=null?l:this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,a]of n){let{wrapped:l}=a,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},xe;v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[M("elementProperties")]=new Map,v[M("finalized")]=new Map,W==null||W({ReactiveElement:v}),((xe=$.reactiveElementVersions)!=null?xe:$.reactiveElementVersions=[]).push("2.1.0");var j=globalThis,F=j.trustedTypes,$e=F?F.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ee="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+w,Qe=`<${Pe}>`,_=document,U=()=>_.createComment(""),V=i=>i===null||typeof i!="object"&&typeof i!="function",ae=Array.isArray,Xe=i=>ae(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ee=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,Ae=/>/g,C=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Te=/'/g,Ce=/"/g,ke=/^(?:script|style|textarea|title)$/i,le=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),u=le(1),it=le(2),at=le(3),E=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Se=new WeakMap,S=_.createTreeWalker(_,129);function Ie(i,t){if(!ae(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(t):t}var Ye=(i,t)=>{let e=i.length-1,s=[],r,n=t===2?"<svg>":t===3?"<math>":"",o=N;for(let a=0;a<e;a++){let l=i[a],c,d,p=-1,b=0;for(;b<l.length&&(o.lastIndex=b,d=o.exec(l),d!==null);)b=o.lastIndex,o===N?d[1]==="!--"?o=we:d[1]!==void 0?o=Ae:d[2]!==void 0?(ke.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=C):d[3]!==void 0&&(o=C):o===C?d[0]===">"?(o=r!=null?r:N,p=-1):d[1]===void 0?p=-2:(p=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?C:d[3]==='"'?Ce:Te):o===Ce||o===Te?o=C:o===we||o===Ae?o=N:(o=C,r=void 0);let y=o===C&&i[a+1].startsWith("/>")?" ":"";n+=o===N?l+Qe:p>=0?(s.push(c),l.slice(0,p)+Ee+l.slice(p)+w+y):l+w+(p===-2?a:y)}return[Ie(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},q=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0,a=t.length-1,l=this.parts,[c,d]=Ye(t,e);if(this.el=i.createElement(c,s),S.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=S.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Ee)){let b=d[o++],y=r.getAttribute(p).split(w),T=/([.?@])?(.*)/.exec(b);l.push({type:1,index:n,name:T[2],strings:y,ctor:T[1]==="."?re:T[1]==="?"?oe:T[1]==="@"?ne:I}),r.removeAttribute(p)}else p.startsWith(w)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(ke.test(r.tagName)){let p=r.textContent.split(w),b=p.length-1;if(b>0){r.textContent=F?F.emptyScript:"";for(let y=0;y<b;y++)r.append(p[y],U()),S.nextNode(),l.push({type:2,index:++n});r.append(p[b],U())}}}else if(r.nodeType===8)if(r.data===Pe)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(w,p+1))!==-1;)l.push({type:7,index:n}),p+=w.length-1}n++}}static createElement(t,e){let s=_.createElement("template");return s.innerHTML=t,s}};function k(i,t,e=i,s){var o,a,l;if(t===E)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,n=V(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=k(i,r._$AS(i,t.values),r,s)),t}var se=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:_).importNode(e,!0);S.currentNode=r;let n=S.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new B(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new ie(n,this,t)),this._$AV.push(d),l=s[++a]}o!==(l==null?void 0:l.index)&&(n=S.nextNode(),o++)}return S.currentNode=_,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class i{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var n;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),V(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var n;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(Ie(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{let o=new se(r,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Se.get(t.strings);return e===void 0&&Se.set(t.strings,e=new q(t)),e}k(t){ae(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let n of t)r===e.length?e.push(s=new i(this.O(U()),this.O(U()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,r){let n=this.strings,o=!1;if(n===void 0)t=k(this,t,e,0),o=!V(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let a=t,l,c;for(t=n[0],l=0;l<n.length-1;l++)c=k(this,a[s+l],e,l),c===E&&(c=this._$AH[l]),o||(o=!V(c)||c!==this._$AH[l]),c===g?t=g:t!==g&&(t+=(c!=null?c:"")+n[l+1]),this._$AH[l]=c}o&&!r&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},re=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},oe=class extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},ne=class extends I{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=k(this,t,e,0))!=null?o:g)===E)return;let s=this._$AH,r=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==g&&(s===g||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},ie=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var te=j.litHtmlPolyfillSupport,_e;te==null||te(q,B),((_e=j.litHtmlVersions)!=null?_e:j.litHtmlVersions=[]).push("3.3.0");var Oe=(i,t,e)=>{var n,o;let s=(n=e==null?void 0:e.renderBefore)!=null?n:t,r=s._$litPart$;if(r===void 0){let a=(o=e==null?void 0:e.renderBefore)!=null?o:null;s._$litPart$=r=new B(t.insertBefore(U(),a),a,void 0,e!=null?e:{})}return r._$AI(i),r};var P=globalThis,A=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}},Me;A._$litElement$=!0,A.finalized=!0,(Me=P.litElementHydrateSupport)==null||Me.call(P,{LitElement:A});var ce=P.litElementPolyfillSupport;ce==null||ce({LitElement:A});var Je;((Je=P.litElementVersions)!=null?Je:P.litElementVersions=[]).push("4.2.0");async function Ne({url:i,method:t="POST",headers:e={},requestBody:s,contentType:r="application/json",setLoading:n,setResponse:o}){n(!0),o("",0,!1);try{let a,l=x({Accept:"application/json"},e);["POST","PUT","PATCH","DELETE"].includes(t.toUpperCase())&&s!=null&&s!==""&&(r==="application/json"?(l["Content-Type"]="application/json",a=typeof s=="string"?s:JSON.stringify(s)):r==="application/x-www-form-urlencoded"?(l["Content-Type"]="application/x-www-form-urlencoded",typeof s=="string"?a=s:typeof s=="object"&&s!==null&&(a=Object.keys(s).map(p=>`${encodeURIComponent(p)}=${encodeURIComponent(s[p])}`).join("&"))):(l["Content-Type"]=r,a=typeof s=="string"?s:JSON.stringify(s)));let c=await fetch(i,{method:t,headers:l,body:a}),d=await c.text();o(d,c.status,c.ok)}catch(a){o("Error: "+((a==null?void 0:a.message)||a),0,!1)}finally{n(!1)}}var je=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var We={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:L},et=(i=We,t,e)=>{let{kind:s,metadata:r}=e,n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(e.name,i),s==="accessor"){let{name:o}=e;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.C(o,void 0,i,a),a}}}if(s==="setter"){let{name:o}=e;return function(a){let l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+s)};function m(i){return(t,e)=>typeof e=="object"?et(i,t,e):((s,r,n)=>{let o=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,t,e)}var h=class extends A{constructor(){super();this.activeDebugTab="properties";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.cooldownTimerId=null;this.label="",this.description="",this.readOnly=!1,this.value={success:!1,statusCode:0,responseType:"",data:"",message:"",timestamp:"",executionTime:0},this.requestBody="",this.apiUrl="",this.requestHeaders="",this.bearerToken="",this.outputValueKey="",this.responseConfig="",this.contentType="application/json",this.debugMode=!1,this.method="POST",this.successMessage="API call completed successfully",this.warningMessage="API call completed with warnings",this.errorMessage="API call failed",this.sendAPICall=!1,this.allowMultipleAPICalls=!1,this.countdownEnabled=!1,this.countdownTimer=5,this.btnEnabled=!0,this.btnText="Send API Request",this.btnAlignment="left",this.btnVisible=!0}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL with Token",description:"The endpoint URL to call, including any required token as a query parameter.",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional: Bearer token value for Authorization header",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional: JSON key path to extract from response",defaultValue:""},responseConfig:{type:"string",title:"Response Format Configuration",description:"JSON configuration for formatting API response display",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"User-friendly message describing the result"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:!1,statusCode:0,responseType:"",data:"",message:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}}}render(){return this.debugMode?u`
        <div class="plugin-container">
          ${this.btnVisible?u`
            <div class="form-group">
              <div class="btn-container align-${this.btnAlignment}">
                <button 
                  class="btn btn-primary" 
                  part="api-button"
                  @click=${()=>this.triggerAPICall()} 
                  ?disabled=${this.isButtonDisabled()}
                >
                  ${this.isLoading?u`<span class="spinner"></span>Calling API...`:this.btnText}
                </button>
              </div>
              ${this.renderResponseAlert()}
            </div>
          `:""}

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
      `:this.btnVisible?u`
      <div class="plugin-container">
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            <button 
              class="btn btn-primary" 
              part="api-button"
              @click=${()=>this.triggerAPICall()} 
              ?disabled=${this.isButtonDisabled()}
            >
              ${this.isLoading?u`<span class="spinner"></span>Processing...`:this.btnText}
            </button>
          </div>
          ${this.renderResponseAlert()}
        </div>
      </div>
    `:u`<div class="plugin-container" style="display: none;"></div>`}renderResponseAlert(){var d;let s=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3;if(this.countdownEnabled&&this.lastApiCallTime>0&&s<r&&this.showCooldownAlert){let p=Math.ceil((r-s)/1e3);return u`
        <div class="alert alert-info" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${p} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let o=`alert-${this.responseType}`,a=this.getAlertIcon(this.responseType),l=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),c=this.getCustomMessage(this.responseType);return this.responseType==="success"?u`
        <div class="alert ${o}" part="response-alert">
          <div>
            <span class="alert-icon">${a}</span>
            <strong>${l}:</strong> ${c}
          </div>
        </div>
      `:u`
      <div class="alert ${o}" part="response-alert">
        <div>
          <span class="alert-icon">${a}</span>
          <strong>${l}:</strong> ${c}
        </div>
        ${(d=this.value)!=null&&d.message?u`
          <div class="alert-response">
            ${this.value.message}
          </div>
        `:""}
      </div>
    `}getAlertIcon(e){switch(e){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}getCustomMessage(e){switch(e){case"success":return this.successMessage;case"warning":return this.warningMessage;case"error":return this.errorMessage;default:return"Unknown response type"}}updated(e){e.has("value")&&this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),e.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger()}handleAPICallTrigger(){if(this.sendAPICall=!1,!(!this.allowMultipleAPICalls&&this.hasSuccessfulCall)){if(this.countdownEnabled){let s=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&s<r){this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}this.handleApiCall()}}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls){let r=this.isLoading;return this.debugMode&&console.log("Button disabled check - multiple calls allowed:",{isLoading:this.isLoading,btnEnabled:this.btnEnabled,result:r,note:"btnEnabled is ignored when allowMultipleAPICalls=true"}),r}let e=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning"),s=this.isLoading||!this.btnEnabled||e;return this.debugMode&&console.log("Button disabled check - single call only:",{isLoading:this.isLoading,btnEnabled:this.btnEnabled,permanentlyDisabled:e,hasSuccessfulCall:this.hasSuccessfulCall,responseType:this.responseType,result:s}),s}setActiveTab(e){this.activeDebugTab=e,this.requestUpdate()}renderPropertiesTab(){let e=[{name:"btnText",default:"Send API Call",current:this.btnText},{name:"btnAlignment",default:"left",current:this.btnAlignment},{name:"btnVisible",default:!0,current:this.btnVisible},{name:"btnEnabled",default:!0,current:this.btnEnabled},{name:"debugMode",default:!1,current:this.debugMode},{name:"countdownEnabled",default:!0,current:this.countdownEnabled},{name:"countdownTimer",default:5,current:this.countdownTimer},{name:"allowMultipleAPICalls",default:!1,current:this.allowMultipleAPICalls},{name:"sendAPICall",default:!1,current:this.sendAPICall},{name:"bearerToken",default:"",current:this.bearerToken?"***"+this.bearerToken.slice(-4):""},{name:"successMessage",default:"API call completed successfully",current:this.successMessage},{name:"warningMessage",default:"API call completed with warnings",current:this.warningMessage},{name:"errorMessage",default:"API call failed",current:this.errorMessage}];return u`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(s=>u`
            <tr>
              <td><code>${s.name}</code></td>
              <td>${this.formatValue(s.default)}</td>
              <td>${this.formatValue(s.current)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}renderRequestDetailsTab(){return u`
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
          <tr>
            <td><code>requestHeaders</code></td>
            <td>
              ${this.requestHeaders?u`
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
              ${this.requestBody?u`
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
          ${this.apiResponse?u`
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
    `}renderAPIToolsTab(){let e=this.isValidJson(this.requestBody),s=this.getJsonStatus(this.requestBody);return u`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">JSON Request Body Editor</label>
          <div class="json-editor-container">
            <div class="json-editor-toolbar">
              <div class="json-editor-actions">
                <button 
                  class="json-editor-btn" 
                  @click=${this.formatJson}
                  ?disabled=${!e}
                  title="Format and beautify JSON"
                >
                  ✨ Format
                </button>
                <button 
                  class="json-editor-btn" 
                  @click=${this.minifyJson}
                  ?disabled=${!e}
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
              <div class="json-editor-status ${e?"valid":"invalid"}">
                ${s}
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
    `}renderResponseFormatterTab(){let e=this.formatterJsonInput.trim().length>0,s=e&&this.isValidJson(this.formatterJsonInput),r=null,n="";if(e)try{r=JSON.parse(this.formatterJsonInput)}catch(o){n=o.message}return u`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${o=>{let a=o.target;this.formatterJsonInput=a.value,this.formatterSelectedFields.clear(),this.requestUpdate()}}
            placeholder="Paste your API response JSON here..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${n?u`<div class="text-danger" style="margin-top: 8px;">${n}</div>`:""}
        </div>

        ${s&&r?u`
          <div class="form-group">
            <label class="control-label">Select Fields to Display</label>
            <div style="max-height: 400px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px;">
              ${this.renderFieldSelector(r,"")}
            </div>
          </div>

          ${this.formatterSelectedFields.size>0?u`
            <div class="form-group">
              <label class="control-label">Preview</label>
              <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt);">
                ${this.renderFormattedPreview(r)}
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Configuration JSON</label>
              <textarea 
                class="form-control" 
                readonly
                rows="6"
                .value=${this.generateResponseConfig()}
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
              ></textarea>
              <button 
                class="btn btn-primary" 
                style="margin-top: 8px;"
                @click=${()=>{this.responseConfig=this.generateResponseConfig(),this.requestUpdate(),alert("Configuration saved to responseConfig property!")}}
              >
                Save Configuration
              </button>
            </div>
          `:""}
        `:""}
      </div>
    `}renderFieldSelector(e,s){let r=[],n=(o,a)=>{o&&typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).forEach(l=>{var p,b;let c=a?`${a}.${l}`:l,d=o[l];if(d!==null&&typeof d!="object"){let y=c,T=((p=this.formatterSelectedFields.get(y))==null?void 0:p.checked)||!1,Ue=((b=this.formatterSelectedFields.get(y))==null?void 0:b.title)||"";r.push(u`
              <div style="display: flex; align-items: center; margin-bottom: 12px; gap: 12px;">
                <input 
                  type="checkbox" 
                  .checked=${T}
                  @change=${K=>{let Z=K.target,G=this.formatterSelectedFields.get(y)||{title:"",checked:!1};this.formatterSelectedFields.set(y,H(x({},G),{checked:Z.checked})),this.requestUpdate()}}
                  style="width: 18px; height: 18px; cursor: pointer;"
                />
                <div style="flex: 1;">
                  <div style="font-weight: 500; margin-bottom: 4px;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px;">${y}</code>
                  </div>
                  <div style="font-size: 12px; color: var(--ntx-form-theme-color-secondary);">Value: ${String(d)}</div>
                </div>
                ${T?u`
                  <input 
                    type="text" 
                    class="form-control"
                    placeholder="Custom title (optional)"
                    .value=${Ue}
                    @input=${K=>{let Z=K.target,G=this.formatterSelectedFields.get(y)||{title:"",checked:!1};this.formatterSelectedFields.set(y,H(x({},G),{title:Z.value})),this.requestUpdate()}}
                    style="max-width: 250px; font-size: 13px;"
                  />
                `:""}
              </div>
            `)}else d&&typeof d=="object"&&!Array.isArray(d)&&n(d,c)})};return n(e,s),r}renderFormattedPreview(e){let s=[];return this.formatterSelectedFields.forEach((r,n)=>{if(r.checked){let o=this.extractNestedValue(e,n),a=r.title||n;s.push(u`
          <div style="margin-bottom: 8px;">
            <strong>${a}:</strong> ${o!==void 0?String(o):"N/A"}
          </div>
        `)}}),s.length>0?s:u`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`}generateResponseConfig(){let e={fields:[]};return this.formatterSelectedFields.forEach((s,r)=>{s.checked&&e.fields.push({path:r,title:s.title||r})}),JSON.stringify(e,null,2)}formatValue(e){return typeof e=="boolean"?e.toString():typeof e=="string"?`"${e}"`:typeof e=="number"?e.toString():e===null?"null":e===void 0?"undefined":JSON.stringify(e)}formatJsonForDisplay(e){try{let s=JSON.parse(e);return JSON.stringify(s,null,2)}catch(s){return e}}isValidJson(e){if(!e.trim())return!0;try{return JSON.parse(e),!0}catch(s){return!1}}getJsonStatus(e){if(!e.trim())return"Empty";try{let s=JSON.parse(e),r=e.length,n=e.split(`
`).length,o=this.countJsonKeys(s);return`Valid JSON \u2022 ${r} chars \u2022 ${n} lines \u2022 ${o} keys`}catch(s){return`Invalid JSON \u2022 ${s.message}`}}countJsonKeys(e){return typeof e!="object"||e===null?0:Array.isArray(e)?e.reduce((s,r)=>s+this.countJsonKeys(r),0):Object.keys(e).length+Object.values(e).reduce((s,r)=>s+this.countJsonKeys(r),0)}formatJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}catch(e){}}minifyJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e),this.requestUpdate()}catch(e){}}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){let e={startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:"req-"+Date.now()}}}};this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}handleJsonInput(e){let s=e.target;this.requestBody=s.value,this.requestUpdate()}handleJsonBlur(e){if(this.isValidJson(this.requestBody)&&this.requestBody.trim())try{let s=JSON.parse(this.requestBody),r=JSON.stringify(s,null,2);r!==this.requestBody&&(this.requestBody=r,this.requestUpdate())}catch(s){}}handleJsonPaste(e){setTimeout(()=>{this.isValidJson(this.requestBody)&&this.formatJson()},100)}renderJsonOutput(){if(!this.requestBody.trim())return"";let e="",s="",r="";try{let n=JSON.parse(this.requestBody);e=JSON.stringify(n),s='"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}catch(n){r=n.message}return u`
      <div class="form-group">
        <label class="control-label">Generated Output</label>
        <div style="display: flex; gap: 16px;">
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Minified JSON</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${e}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
          <div style="flex: 1;">
            <label class="control-label" style="font-size: 12px; color: #6c757d;">Escaped for Code</label>
            <textarea 
              class="form-control" 
              readonly 
              rows="3"
              .value=${s}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
        </div>
        ${r?u`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${r}</div>`:""}
      </div>
    `}renderJsonPreview(){if(!this.requestBody.trim()||!this.isValidJson(this.requestBody))return"";try{let e=JSON.parse(this.requestBody);return u`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(e,0)}
          </div>
        </div>
      `}catch(e){return""}}renderJsonWithSyntaxHighlight(e,s=0){let r="  ".repeat(s);if(e===null)return'<span class="json-syntax-null">null</span>';if(typeof e=="string")return`<span class="json-syntax-string">"${e}"</span>`;if(typeof e=="number")return`<span class="json-syntax-number">${e}</span>`;if(typeof e=="boolean")return`<span class="json-syntax-boolean">${e}</span>`;if(Array.isArray(e))return e.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${e.map(o=>`${r}  ${this.renderJsonWithSyntaxHighlight(o,s+1)}`).join(`,
`)}
${r}<span class="json-syntax-punctuation">]</span>`;if(typeof e=="object"){let n=Object.keys(e);return n.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${n.map(a=>`${r}  <span class="json-syntax-key">"${a}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(e[a],s+1)}`).join(`,
`)}
${r}<span class="json-syntax-punctuation">}</span>`}return String(e)}static removeInstructionalPlaceholders(e){if(Array.isArray(e))return e.map(s=>this.removeInstructionalPlaceholders(s));if(e&&typeof e=="object"){let s={};for(let[r,n]of Object.entries(e)){if(typeof n=="string"&&/^<.*>$/.test(n.trim()))continue;let o=this.removeInstructionalPlaceholders(n);o!==void 0&&!(typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(s[r]=o)}return s}return e}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let e=this.apiUrl||"",s={};if(this.requestHeaders)try{s=JSON.parse(this.requestHeaders)}catch(n){s={},this.requestHeaders.split(/\r?\n/).forEach(o=>{let a=o.indexOf(":");if(a>-1){let l=o.slice(0,a).trim(),c=o.slice(a+1).trim();l&&(s[l]=c)}})}this.bearerToken&&this.bearerToken.trim()&&(s.Authorization=`Bearer ${this.bearerToken.trim()}`);let r;if(this.contentType==="application/x-www-form-urlencoded")r=this.requestBody||"";else if(this.contentType==="application/json")if(this.requestBody&&this.requestBody.trim())try{r=JSON.parse(this.requestBody)}catch(n){r=void 0}else r=void 0;else r=this.requestBody||"";await Ne({url:e,method:this.method||"POST",headers:s,requestBody:r,contentType:this.contentType,setLoading:n=>{this.isLoading=n,this.requestUpdate()},setResponse:(n,o,a)=>{let l=Date.now()-this.apiCallStartTime,c=new Date().toISOString();this.apiResponse=n,this.responseType=a===!1?"error":this.determineResponseType(n);let d,p;try{let b=JSON.parse(n);b.access_token&&(d=b.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(p=this.extractNestedValue(b,this.outputValueKey))}catch(b){}this.value=x(x({success:a!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:o||(this.responseType==="success"?200:500),responseType:this.responseType,data:n,message:this.getCustomMessage(this.responseType),timestamp:c,executionTime:l},d&&{access_token:d}),p!==void 0&&{output:p}),(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),this.requestUpdate()}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let s=JSON.parse(e);if(s.error||s.status==="error")return"error";if(s.warning||s.status==="warning")return"warning"}catch(s){}return"success"}extractNestedValue(e,s){if(e&&typeof e=="object"&&s in e)return e[s];let r=s.split("."),n=e;for(let o of r)if(n&&typeof n=="object"&&o in n)n=n[o];else return;return n}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch(s){console.error("Failed to copy text:",s)}}startCooldownTimer(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=()=>{let r=Date.now()-this.lastApiCallTime,n=this.countdownTimer*1e3;r<n?(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(e,1e3)):(this.showCooldownAlert=!1,this.cooldownTimerId=null,this.requestUpdate())};this.cooldownTimerId=window.setTimeout(e,1e3)}disconnectedCallback(){super.disconnectedCallback(),this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null)}};h.styles=X`
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
  `,f([m({type:String})],h.prototype,"label",2),f([m({type:String})],h.prototype,"description",2),f([m({type:Boolean})],h.prototype,"readOnly",2),f([m({type:Object})],h.prototype,"value",2),f([m({type:String})],h.prototype,"requestBody",2),f([m({type:String})],h.prototype,"apiUrl",2),f([m({type:String})],h.prototype,"requestHeaders",2),f([m({type:String})],h.prototype,"bearerToken",2),f([m({type:String})],h.prototype,"outputValueKey",2),f([m({type:String})],h.prototype,"responseConfig",2),f([m({type:String})],h.prototype,"contentType",2),f([m({type:Boolean})],h.prototype,"debugMode",2),f([m({type:String})],h.prototype,"method",2),f([m({type:String})],h.prototype,"successMessage",2),f([m({type:String})],h.prototype,"warningMessage",2),f([m({type:String})],h.prototype,"errorMessage",2),f([m({type:Boolean})],h.prototype,"sendAPICall",2),f([m({type:Boolean})],h.prototype,"allowMultipleAPICalls",2),f([m({type:Boolean})],h.prototype,"countdownEnabled",2),f([m({type:Number})],h.prototype,"countdownTimer",2),f([m({type:Boolean})],h.prototype,"btnEnabled",2),f([m({type:String})],h.prototype,"btnText",2),f([m({type:String})],h.prototype,"btnAlignment",2),f([m({type:Boolean})],h.prototype,"btnVisible",2),h=f([je("daf-webrequest-plugin")],h);export{h as DafWebRequestPlugin};
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
