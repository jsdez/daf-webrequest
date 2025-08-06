var lt=Object.defineProperty;var Ht=Object.getOwnPropertyDescriptor;var nt=Object.getOwnPropertySymbols;var Rt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var at=(i,t,e)=>t in i?lt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,D=(i,t)=>{for(var e in t||(t={}))Rt.call(t,e)&&at(i,e,t[e]);if(nt)for(var e of nt(t))Mt.call(t,e)&&at(i,e,t[e]);return i};var f=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ht(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&lt(t,e,s),s};var z=globalThis,B=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),ct=new WeakMap,O=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(B&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ct.set(e,t))}return t}toString(){return this.cssText}},ht=i=>new O(typeof i=="string"?i:i+"",void 0,F),K=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new O(e,i,F)},pt=(i,t)=>{if(B)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),s=z.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},Z=B?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return ht(e)})(i):i;var{is:kt,defineProperty:Lt,getOwnPropertyDescriptor:qt,getOwnPropertyNames:It,getOwnPropertySymbols:zt,getPrototypeOf:Bt}=Object,_=globalThis,dt=_.trustedTypes,jt=dt?dt.emptyScript:"",G=_.reactiveElementPolyfillSupport,U=(i,t)=>i,N={toAttribute(i,t){switch(t){case Boolean:i=i?jt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch(r){e=null}}return e}},j=(i,t)=>!kt(i,t),ut={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:j},ft,mt;(ft=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(mt=_.litPropertyMetadata)!=null||(_.litPropertyMetadata=new WeakMap);var g=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Lt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){var o;let{get:s,set:n}=(o=qt(this.prototype,t))!=null?o:{get(){return this[e]},set(l){this[e]=l}};return{get:s,set(l){let a=s==null?void 0:s.call(this);n==null||n.call(this,l),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:ut}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=Bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,r=[...It(e),...zt(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(Z(s))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostConnected)==null?void 0:s.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var n;let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:N).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n,o,l,a;let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let c=r.getPropertyOptions(s),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((n=c.converter)==null?void 0:n.fromAttribute)!==void 0?c.converter:N;this._$Em=s,this[s]=(a=(l=p.fromAttribute(e,c.type))!=null?l:(o=this._$Ej)==null?void 0:o.get(s))!=null?a:null,this._$Em=null}}requestUpdate(t,e,r){var s,n;if(t!==void 0){let o=this.constructor,l=this[t];if(r!=null||(r=o.getPropertyOptions(t)),!(((s=r.hasChanged)!=null?s:j)(l,e)||r.useDefault&&r.reflect&&l===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:n},o){var l,a,c;r&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(a=o!=null?o:e)!=null?a:this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r,s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((r=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,l]of this._$Ep)this[o]=l;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,l]of n){let{wrapped:a}=l,c=this[o];a!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,l,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},yt;g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[U("elementProperties")]=new Map,g[U("finalized")]=new Map,G==null||G({ReactiveElement:g}),((yt=_.reactiveElementVersions)!=null?yt:_.reactiveElementVersions=[]).push("2.1.0");var R=globalThis,V=R.trustedTypes,gt=V?V.createPolicy("lit-html",{createHTML:i=>i}):void 0,St="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Et="?"+v,Vt=`<${Et}>`,S=document,M=()=>S.createComment(""),k=i=>i===null||typeof i!="object"&&typeof i!="function",st=Array.isArray,Jt=i=>st(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,_t=/>/g,A=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,bt=/"/g,wt=/^(?:script|style|textarea|title)$/i,ot=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),w=ot(1),Wt=ot(2),te=ot(3),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),At=new WeakMap,x=S.createTreeWalker(S,129);function Ct(i,t){if(!st(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}var Dt=(i,t)=>{let e=i.length-1,r=[],s,n=t===2?"<svg>":t===3?"<math>":"",o=H;for(let l=0;l<e;l++){let a=i[l],c,p,h=-1,y=0;for(;y<a.length&&(o.lastIndex=y,p=o.exec(a),p!==null);)y=o.lastIndex,o===H?p[1]==="!--"?o=$t:p[1]!==void 0?o=_t:p[2]!==void 0?(wt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=A):p[3]!==void 0&&(o=A):o===A?p[0]===">"?(o=s!=null?s:H,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?A:p[3]==='"'?bt:vt):o===bt||o===vt?o=A:o===$t||o===_t?o=H:(o=A,s=void 0);let $=o===A&&i[l+1].startsWith("/>")?" ":"";n+=o===H?a+Vt:h>=0?(r.push(c),a.slice(0,h)+St+a.slice(h)+v+$):a+v+(h===-2?l:$)}return[Ct(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},L=class i{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let n=0,o=0,l=t.length-1,a=this.parts,[c,p]=Dt(t,e);if(this.el=i.createElement(c,r),x.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=x.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(St)){let y=p[o++],$=s.getAttribute(h).split(v),I=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:I[2],strings:$,ctor:I[1]==="."?W:I[1]==="?"?tt:I[1]==="@"?et:T}),s.removeAttribute(h)}else h.startsWith(v)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(wt.test(s.tagName)){let h=s.textContent.split(v),y=h.length-1;if(y>0){s.textContent=V?V.emptyScript:"";for(let $=0;$<y;$++)s.append(h[$],M()),x.nextNode(),a.push({type:2,index:++n});s.append(h[y],M())}}}else if(s.nodeType===8)if(s.data===Et)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(v,h+1))!==-1;)a.push({type:7,index:n}),h+=v.length-1}n++}}static createElement(t,e){let r=S.createElement("template");return r.innerHTML=t,r}};function P(i,t,e=i,r){var o,l,a;if(t===E)return t;let s=r!==void 0?(o=e._$Co)==null?void 0:o[r]:e._$Cl,n=k(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,e,r)),r!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[r]=s:e._$Cl=s),s!==void 0&&(t=P(i,s._$AS(i,t.values),s,r)),t}var Y=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:r}=this._$AD,s=((c=t==null?void 0:t.creationScope)!=null?c:S).importNode(e,!0);x.currentNode=s;let n=x.nextNode(),o=0,l=0,a=r[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new q(n,n.nextSibling,this,t):a.type===1?p=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(p=new rt(n,this,t)),this._$AV.push(p),a=r[++l]}o!==(a==null?void 0:a.index)&&(n=x.nextNode(),o++)}return x.currentNode=S,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},q=class i{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,r,s){var n;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(n=s==null?void 0:s.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),k(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var n;let{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=L.createElement(Ct(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{let o=new Y(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=At.get(t.strings);return e===void 0&&At.set(t.strings,e=new L(t)),e}k(t){st(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,s=0;for(let n of t)s===e.length?e.push(r=new i(this.O(M()),this.O(M()),this,this.options)):r=e[s],r._$AI(n),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){let n=this.strings,o=!1;if(n===void 0)t=P(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let l=t,a,c;for(t=n[0],a=0;a<n.length-1;a++)c=P(this,l[r+a],e,a),c===E&&(c=this._$AH[a]),o||(o=!k(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},W=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},tt=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},et=class extends T{constructor(t,e,r,s,n){super(t,e,r,s,n),this.type=5}_$AI(t,e=this){var o;if((t=(o=P(this,t,e,0))!=null?o:d)===E)return;let r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)==null?void 0:e.host)!=null?r:this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};var X=R.litHtmlPolyfillSupport,xt;X==null||X(L,q),((xt=R.litHtmlVersions)!=null?xt:R.litHtmlVersions=[]).push("3.3.0");var Pt=(i,t,e)=>{var n,o;let r=(n=e==null?void 0:e.renderBefore)!=null?n:t,s=r._$litPart$;if(s===void 0){let l=(o=e==null?void 0:e.renderBefore)!=null?o:null;r._$litPart$=s=new q(t.insertBefore(M(),l),l,void 0,e!=null?e:{})}return s._$AI(i),s};var C=globalThis,b=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;let t=super.createRenderRoot();return(r=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}},Tt;b._$litElement$=!0,b.finalized=!0,(Tt=C.litElementHydrateSupport)==null||Tt.call(C,{LitElement:b});var it=C.litElementPolyfillSupport;it==null||it({LitElement:b});var Ot;((Ot=C.litElementVersions)!=null?Ot:C.litElementVersions=[]).push("4.2.0");async function Ut({url:i,method:t="POST",headers:e={},requestBody:r,setLoading:s,setResponse:n}){s(!0),n("");try{let l=await(await fetch(i,{method:t,headers:D({"Content-Type":"application/json",Accept:"application/json"},e),body:["POST","PUT","PATCH","DELETE"].includes(t.toUpperCase())?JSON.stringify(r):void 0})).text();n(l)}catch(o){n("Error: "+((o==null?void 0:o.message)||o))}finally{s(!1)}}var Nt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var Ft={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:j},Kt=(i=Ft,t,e)=>{let{kind:r,metadata:s}=e,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(e.name,i),r==="accessor"){let{name:o}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,i)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(r==="setter"){let{name:o}=e;return function(l){let a=this[o];t.call(this,l),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+r)};function m(i){return(t,e)=>typeof e=="object"?Kt(i,t,e):((r,s,n)=>{let o=s.hasOwnProperty(n);return s.constructor.createProperty(n,r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(i,t,e)}var u=class extends b{constructor(){super(...arguments);this.label="";this.description="";this.readOnly=!1;this.value="";this.requestBody="";this.apiUrl="";this.requestHeaders="";this.debugMode=!1;this.method="POST";this.isLoading=!1;this.apiResponse="";this.responseType=null}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL with Token",description:"The endpoint URL to call, including any required token as a query parameter.",defaultValue:""},requestHeaders:{type:"string",title:"Request Headers (JSON)",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},requestBody:{type:"string",title:"Request Body (JSON)",description:"Body to send in the API request, as a JSON object.",defaultValue:""},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"string",title:"Value",isValueField:!0,defaultValue:""},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH"],defaultValue:"POST"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!0}}}render(){if(this.debugMode){let r="",s="",n="";try{this.requestBody&&(r=JSON.stringify(JSON.parse(this.requestBody)),s='"'+r.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"')}catch(o){n="Invalid JSON"}return w`
        <div class="plugin-container">
          <div class="form-group">
            <label class="control-label" part="debug-label">Enter JSON:</label>
            <textarea 
              class="form-control" 
              part="debug-input"
              rows="8" 
              .value=${this.requestBody} 
              @input=${o=>{this.requestBody=o.target.value,this.requestUpdate()}}
            ></textarea>
          </div>
          <div class="form-group">
            <label class="control-label" part="output-label">Minified & Escaped JSON:</label>
            <textarea 
              class="form-control" 
              part="debug-output"
              readonly 
              rows="4"
            >${s}</textarea>
            ${n?w`<div class="text-danger" part="error-message">${n}</div>`:""}
          </div>
          <div class="form-group">
            <button 
              class="btn btn-primary" 
              part="api-button"
              @click=${()=>this.handleApiCall()} 
              ?disabled=${this.isLoading}
            >
              ${this.isLoading?w`<span class="spinner"></span>Calling API...`:"Call API"}
            </button>
            ${this.renderResponseAlert()}
          </div>
        </div>
      `}return w`
      <div class="plugin-container">
        <div class="form-group">
          <button 
            class="btn btn-primary" 
            part="api-button"
            @click=${()=>this.handleApiCall()} 
            ?disabled=${this.isLoading}
          >
            ${this.isLoading?w`<span class="spinner"></span>Processing...`:"Execute API Call"}
          </button>
          ${this.renderResponseAlert()}
        </div>
      </div>
    `}renderResponseAlert(){if(!this.apiResponse)return"";let e=this.responseType?`alert-${this.responseType}`:"alert-success";return w`
      <div class="alert ${e}" part="response-alert">
        ${this.apiResponse}
      </div>
    `}updated(e){e.has("value")&&this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0}))}static removeInstructionalPlaceholders(e){if(Array.isArray(e))return e.map(r=>this.removeInstructionalPlaceholders(r));if(e&&typeof e=="object"){let r={};for(let[s,n]of Object.entries(e)){if(typeof n=="string"&&/^<.*>$/.test(n.trim()))continue;let o=this.removeInstructionalPlaceholders(n);o!==void 0&&!(typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(r[s]=o)}return r}return e}async handleApiCall(){this.responseType=null,this.apiResponse="";let e=this.apiUrl||"",r={};if(this.requestHeaders)try{r=JSON.parse(this.requestHeaders)}catch(n){r={},this.requestHeaders.split(/\r?\n/).forEach(o=>{let l=o.indexOf(":");if(l>-1){let a=o.slice(0,l).trim(),c=o.slice(l+1).trim();a&&(r[a]=c)}})}let s={startData:{se_input:"This is a test"}};await Ut({url:e,method:this.method||"POST",headers:r,requestBody:s,setLoading:n=>{this.isLoading=n,this.requestUpdate()},setResponse:n=>{this.apiResponse=n,this.responseType=this.determineResponseType(n),this.value=n,this.requestUpdate()}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let r=JSON.parse(e);if(r.error||r.status==="error")return"error";if(r.warning||r.status==="warning")return"warning"}catch(r){}return"success"}};u.styles=K`
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
  `,f([m({type:String})],u.prototype,"label",2),f([m({type:String})],u.prototype,"description",2),f([m({type:Boolean})],u.prototype,"readOnly",2),f([m({type:String})],u.prototype,"value",2),f([m({type:String})],u.prototype,"requestBody",2),f([m({type:String})],u.prototype,"apiUrl",2),f([m({type:String})],u.prototype,"requestHeaders",2),f([m({type:Boolean})],u.prototype,"debugMode",2),f([m({type:String})],u.prototype,"method",2),u=f([Nt("daf-webrequest-plugin")],u);export{u as DafWebRequestPlugin};
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
