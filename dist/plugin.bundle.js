var me=Object.defineProperty,Re=Object.defineProperties,qe=Object.getOwnPropertyDescriptor,je=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var he=(n,s,e)=>s in n?me(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e,$=(n,s)=>{for(var e in s||(s={}))Be.call(s,e)&&he(n,e,s[e]);if(ue)for(var e of ue(s))He.call(s,e)&&he(n,e,s[e]);return n},U=(n,s)=>Re(n,je(s));var f=(n,s,e,t)=>{for(var r=t>1?void 0:t?qe(s,e):s,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(t?o(s,e,r):o(r))||r);return t&&r&&me(s,e,r),r};var D=globalThis,K=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),fe=new WeakMap,J=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o,e=this.t;if(K&&s===void 0){let t=e!==void 0&&e.length===1;t&&(s=fe.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&fe.set(e,s))}return s}toString(){return this.cssText}},ge=n=>new J(typeof n=="string"?n:n+"",void 0,Y),Z=(n,...s)=>{let e=n.length===1?n[0]:s.reduce((t,r,i)=>t+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new J(e,n,Y)},be=(n,s)=>{if(K)n.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of s){let t=document.createElement("style"),r=D.litNonce;r!==void 0&&t.setAttribute("nonce",r),t.textContent=e.cssText,n.appendChild(t)}},X=K?n=>n:n=>n instanceof CSSStyleSheet?(s=>{let e="";for(let t of s.cssRules)e+=t.cssText;return ge(e)})(n):n;var{is:Le,defineProperty:ze,getOwnPropertyDescriptor:De,getOwnPropertyNames:Ke,getOwnPropertySymbols:We,getPrototypeOf:Ge}=Object,S=globalThis,ye=S.trustedTypes,Qe=ye?ye.emptyScript:"",ee=S.reactiveElementPolyfillSupport,F=(n,s)=>n,R={toAttribute(n,s){switch(s){case Boolean:n=n?Qe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,s){let e=n;switch(s){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(t){e=null}}return e}},W=(n,s)=>!Le(n,s),ve={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:W},xe,we;(xe=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(we=S.litPropertyMetadata)!=null||(S.litPropertyMetadata=new WeakMap);var A=class extends HTMLElement{static addInitializer(s){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,e=ve){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(s)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(s,e),!e.noAccessor){let t=Symbol(),r=this.getPropertyDescriptor(s,t,e);r!==void 0&&ze(this.prototype,s,r)}}static getPropertyDescriptor(s,e,t){var o;let{get:r,set:i}=(o=De(this.prototype,s))!=null?o:{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){let l=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(s,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){var e;return(e=this.elementProperties.get(s))!=null?e:ve}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;let s=Ge(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){let e=this.properties,t=[...Ke(e),...We(e)];for(let r of t)this.createProperty(r,e[r])}let s=this[Symbol.metadata];if(s!==null){let e=litPropertyMetadata.get(s);if(e!==void 0)for(let[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let r=this._$Eu(e,t);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){let e=[];if(Array.isArray(s)){let t=new Set(s.flat(1/0).reverse());for(let r of t)e.unshift(X(r))}else s!==void 0&&e.push(X(s));return e}static _$Eu(s,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var s;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(s=this.constructor.l)==null||s.forEach(e=>e(this))}addController(s){var e,t;((e=this._$EO)!=null?e:this._$EO=new Set).add(s),this.renderRoot!==void 0&&this.isConnected&&((t=s.hostConnected)==null||t.call(s))}removeController(s){var e;(e=this._$EO)==null||e.delete(s)}_$E_(){let s=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(s.set(t,this[t]),delete this[t]);s.size>0&&(this._$Ep=s)}createRenderRoot(){var e;let s=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return be(s,this.constructor.elementStyles),s}connectedCallback(){var s,e;(s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(s){}disconnectedCallback(){var s;(s=this._$EO)==null||s.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(s,e,t){this._$AK(s,t)}_$ET(s,e){var i;let t=this.constructor.elementProperties.get(s),r=this.constructor._$Eu(s,t);if(r!==void 0&&t.reflect===!0){let o=(((i=t.converter)==null?void 0:i.toAttribute)!==void 0?t.converter:R).toAttribute(e,t.type);this._$Em=s,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(s,e){var i,o,a,l;let t=this.constructor,r=t._$Eh.get(s);if(r!==void 0&&this._$Em!==r){let d=t.getPropertyOptions(r),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)==null?void 0:i.fromAttribute)!==void 0?d.converter:R;this._$Em=r,this[r]=(l=(a=c.fromAttribute(e,d.type))!=null?a:(o=this._$Ej)==null?void 0:o.get(r))!=null?l:null,this._$Em=null}}requestUpdate(s,e,t){var r,i;if(s!==void 0){let o=this.constructor,a=this[s];if(t!=null||(t=o.getPropertyOptions(s)),!(((r=t.hasChanged)!=null?r:W)(a,e)||t.useDefault&&t.reflect&&a===((i=this._$Ej)==null?void 0:i.get(s))&&!this.hasAttribute(o._$Eu(s,t))))return;this.C(s,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(s,e,{useDefault:t,reflect:r,wrapped:i},o){var a,l,d;t&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(s)&&(this._$Ej.set(s,(l=o!=null?o:e)!=null?l:this[s]),i!==!0||o!==void 0)||(this._$AL.has(s)||(this.hasUpdated||t||(e=void 0),this._$AL.set(s,e)),r===!0&&this._$Em!==s&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(s))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:l}=a,d=this[o];l!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,a,d)}}let s=!1,e=this._$AL;try{s=this.shouldUpdate(e),s?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw s=!1,this._$EM(),i}s&&this._$AE(e)}willUpdate(s){}_$AE(s){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostUpdated)==null?void 0:r.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(s){}firstUpdated(s){}},$e;A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[F("elementProperties")]=new Map,A[F("finalized")]=new Map,ee==null||ee({ReactiveElement:A}),(($e=S.reactiveElementVersions)!=null?$e:S.reactiveElementVersions=[]).push("2.1.0");var j=globalThis,G=j.trustedTypes,Ae=G?G.createPolicy("lit-html",{createHTML:n=>n}):void 0,Pe="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie="?"+C,Ye=`<${Ie}>`,I=document,B=()=>I.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",le=Array.isArray,Ze=n=>le(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",te=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Se=/>/g,_=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ce=/'/g,ke=/"/g,Me=/^(?:script|style|textarea|title)$/i,de=n=>(s,...e)=>({_$litType$:n,strings:s,values:e}),p=de(1),at=de(2),lt=de(3),M=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ee=new WeakMap,P=I.createTreeWalker(I,129);function Ne(n,s){if(!le(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ae!==void 0?Ae.createHTML(s):s}var Xe=(n,s)=>{let e=n.length-1,t=[],r,i=s===2?"<svg>":s===3?"<math>":"",o=q;for(let a=0;a<e;a++){let l=n[a],d,c,u=-1,b=0;for(;b<l.length&&(o.lastIndex=b,c=o.exec(l),c!==null);)b=o.lastIndex,o===q?c[1]==="!--"?o=Te:c[1]!==void 0?o=Se:c[2]!==void 0?(Me.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=_):c[3]!==void 0&&(o=_):o===_?c[0]===">"?(o=r!=null?r:q,u=-1):c[1]===void 0?u=-2:(u=o.lastIndex-c[2].length,d=c[1],o=c[3]===void 0?_:c[3]==='"'?ke:Ce):o===ke||o===Ce?o=_:o===Te||o===Se?o=q:(o=_,r=void 0);let h=o===_&&n[a+1].startsWith("/>")?" ":"";i+=o===q?l+Ye:u>=0?(t.push(d),l.slice(0,u)+Pe+l.slice(u)+C+h):l+C+(u===-2?a:h)}return[Ne(n,i+(n[e]||"<?>")+(s===2?"</svg>":s===3?"</math>":"")),t]},L=class n{constructor({strings:s,_$litType$:e},t){let r;this.parts=[];let i=0,o=0,a=s.length-1,l=this.parts,[d,c]=Xe(s,e);if(this.el=n.createElement(d,t),P.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=P.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(Pe)){let b=c[o++],h=r.getAttribute(u).split(C),y=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:y[2],strings:h,ctor:y[1]==="."?oe:y[1]==="?"?ie:y[1]==="@"?ne:V}),r.removeAttribute(u)}else u.startsWith(C)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(Me.test(r.tagName)){let u=r.textContent.split(C),b=u.length-1;if(b>0){r.textContent=G?G.emptyScript:"";for(let h=0;h<b;h++)r.append(u[h],B()),P.nextNode(),l.push({type:2,index:++i});r.append(u[b],B())}}}else if(r.nodeType===8)if(r.data===Ie)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(C,u+1))!==-1;)l.push({type:7,index:i}),u+=C.length-1}i++}}static createElement(s,e){let t=I.createElement("template");return t.innerHTML=s,t}};function O(n,s,e=n,t){var o,a,l;if(s===M)return s;let r=t!==void 0?(o=e._$Co)==null?void 0:o[t]:e._$Cl,i=H(s)?void 0:s._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,t)),t!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[t]=r:e._$Cl=r),r!==void 0&&(s=O(n,r._$AS(n,s.values),r,t)),s}var re=class{constructor(s,e){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){var d;let{el:{content:e},parts:t}=this._$AD,r=((d=s==null?void 0:s.creationScope)!=null?d:I).importNode(e,!0);P.currentNode=r;let i=P.nextNode(),o=0,a=0,l=t[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new z(i,i.nextSibling,this,s):l.type===1?c=new l.ctor(i,l.name,l.strings,this,s):l.type===6&&(c=new ae(i,this,s)),this._$AV.push(c),l=t[++a]}o!==(l==null?void 0:l.index)&&(i=P.nextNode(),o++)}return P.currentNode=I,r}p(s){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(s,t,e),e+=t.strings.length-2):t._$AI(s[e])),e++}},z=class n{get _$AU(){var s,e;return(e=(s=this._$AM)==null?void 0:s._$AU)!=null?e:this._$Cv}constructor(s,e,t,r){var i;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=s,this._$AB=e,this._$AM=t,this.options=r,this._$Cv=(i=r==null?void 0:r.isConnected)!=null?i:!0}get parentNode(){let s=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(s==null?void 0:s.nodeType)===11&&(s=e.parentNode),s}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(s,e=this){s=O(this,s,e),H(s)?s===v||s==null||s===""?(this._$AH!==v&&this._$AR(),this._$AH=v):s!==this._$AH&&s!==M&&this._(s):s._$litType$!==void 0?this.$(s):s.nodeType!==void 0?this.T(s):Ze(s)?this.k(s):this._(s)}O(s){return this._$AA.parentNode.insertBefore(s,this._$AB)}T(s){this._$AH!==s&&(this._$AR(),this._$AH=this.O(s))}_(s){this._$AH!==v&&H(this._$AH)?this._$AA.nextSibling.data=s:this.T(I.createTextNode(s)),this._$AH=s}$(s){var i;let{values:e,_$litType$:t}=s,r=typeof t=="number"?this._$AC(s):(t.el===void 0&&(t.el=L.createElement(Ne(t.h,t.h[0]),this.options)),t);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{let o=new re(r,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(s){let e=Ee.get(s.strings);return e===void 0&&Ee.set(s.strings,e=new L(s)),e}k(s){le(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,r=0;for(let i of s)r===e.length?e.push(t=new n(this.O(B()),this.O(B()),this,this.options)):t=e[r],t._$AI(i),r++;r<e.length&&(this._$AR(t&&t._$AB.nextSibling,r),e.length=r)}_$AR(s=this._$AA.nextSibling,e){var t;for((t=this._$AP)==null?void 0:t.call(this,!1,!0,e);s&&s!==this._$AB;){let r=s.nextSibling;s.remove(),s=r}}setConnected(s){var e;this._$AM===void 0&&(this._$Cv=s,(e=this._$AP)==null||e.call(this,s))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(s,e,t,r,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=s,this.name=e,this._$AM=r,this.options=i,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=v}_$AI(s,e=this,t,r){let i=this.strings,o=!1;if(i===void 0)s=O(this,s,e,0),o=!H(s)||s!==this._$AH&&s!==M,o&&(this._$AH=s);else{let a=s,l,d;for(s=i[0],l=0;l<i.length-1;l++)d=O(this,a[t+l],e,l),d===M&&(d=this._$AH[l]),o||(o=!H(d)||d!==this._$AH[l]),d===v?s=v:s!==v&&(s+=(d!=null?d:"")+i[l+1]),this._$AH[l]=d}o&&!r&&this.j(s)}j(s){s===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,s!=null?s:"")}},oe=class extends V{constructor(){super(...arguments),this.type=3}j(s){this.element[this.name]=s===v?void 0:s}},ie=class extends V{constructor(){super(...arguments),this.type=4}j(s){this.element.toggleAttribute(this.name,!!s&&s!==v)}},ne=class extends V{constructor(s,e,t,r,i){super(s,e,t,r,i),this.type=5}_$AI(s,e=this){var o;if((s=(o=O(this,s,e,0))!=null?o:v)===M)return;let t=this._$AH,r=s===v&&t!==v||s.capture!==t.capture||s.once!==t.once||s.passive!==t.passive,i=s!==v&&(t===v||r);r&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,s),this._$AH=s}handleEvent(s){var e,t;typeof this._$AH=="function"?this._$AH.call((t=(e=this.options)==null?void 0:e.host)!=null?t:this.element,s):this._$AH.handleEvent(s)}},ae=class{constructor(s,e,t){this.element=s,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(s){O(this,s)}};var se=j.litHtmlPolyfillSupport,_e;se==null||se(L,z),((_e=j.litHtmlVersions)!=null?_e:j.litHtmlVersions=[]).push("3.3.0");var Oe=(n,s,e)=>{var i,o;let t=(i=e==null?void 0:e.renderBefore)!=null?i:s,r=t._$litPart$;if(r===void 0){let a=(o=e==null?void 0:e.renderBefore)!=null?o:null;t._$litPart$=r=new z(s.insertBefore(B(),a),a,void 0,e!=null?e:{})}return r._$AI(n),r};var N=globalThis,k=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=s.firstChild),s}update(s){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=Oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return M}},Ve;k._$litElement$=!0,k.finalized=!0,(Ve=N.litElementHydrateSupport)==null||Ve.call(N,{LitElement:k});var ce=N.litElementPolyfillSupport;ce==null||ce({LitElement:k});var Ue;((Ue=N.litElementVersions)!=null?Ue:N.litElementVersions=[]).push("4.2.0");async function Je({url:n,method:s="POST",headers:e={},requestBody:t,contentType:r="application/json",setLoading:i,setResponse:o}){i(!0);try{let a,l=$({Accept:"application/json"},e);["POST","PUT","PATCH","DELETE"].includes(s.toUpperCase())&&t!=null&&t!==""&&(r==="application/json"?(l["Content-Type"]="application/json",a=typeof t=="string"?t:JSON.stringify(t)):r==="application/x-www-form-urlencoded"?(l["Content-Type"]="application/x-www-form-urlencoded",typeof t=="string"?a=t:typeof t=="object"&&t!==null&&(a=Object.keys(t).map(u=>`${encodeURIComponent(u)}=${encodeURIComponent(t[u])}`).join("&"))):(l["Content-Type"]=r,a=typeof t=="string"?t:JSON.stringify(t)));let d=await fetch(n,{method:s,headers:l,body:a}),c=await d.text();o(c,d.status,d.ok)}catch(a){o("Error: "+((a==null?void 0:a.message)||a),0,!1)}finally{i(!1)}}var Fe=n=>(s,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,s)}):customElements.define(n,s)};var et={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:W},tt=(n=et,s,e)=>{let{kind:t,metadata:r}=e,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),t==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),t==="accessor"){let{name:o}=e;return{set(a){let l=s.get.call(this);s.set.call(this,a),this.requestUpdate(o,l,n)},init(a){return a!==void 0&&this.C(o,void 0,n,a),a}}}if(t==="setter"){let{name:o}=e;return function(a){let l=this[o];s.call(this,a),this.requestUpdate(o,l,n)}}throw Error("Unsupported decorator location: "+t)};function g(n){return(s,e)=>typeof e=="object"?tt(n,s,e):((t,r,i)=>{let o=r.hasOwnProperty(i);return r.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(r,i):void 0})(n,s,e)}var m=class extends k{constructor(){super();this.activeDebugTab="properties";this.activeFormatterTab="success";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.formatterUseArrayNotation=!0;this.formatterMessageTitle="";this._value={success:null,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0};this._btnEnabled=!0;this._btnVisible=!0;this.detailsExpanded=!1;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.cooldownTimerId=null;this.formValidationError="";this.oauthTokenResponse=null;this.label="",this.description="",this.readOnly=!1,this.requestBody="",this.apiUrl="",this.requestHeaders="",this.bearerToken="",this.tokenUrl="",this.clientId="",this.clientSecret="",this.outputValueKey="",this.contentType="application/json",this.debugMode=!1,this.method="POST",this.successMessage="API call completed successfully",this.warningMessage="API call completed with warnings",this.errorMessage="API call failed",this.sendAPICall=!1,this.allowMultipleAPICalls=!1,this.countdownEnabled=!1,this.countdownTimer=5,this._btnEnabled=!0,this.btnText="Send API Request",this.btnAlignment="left",this._btnVisible=!0,this.formValidation=!1,this.submissionAction="no-submit",this.submitHidden=!1,this.showMoreDetails="Never",this.alertPosition="After"}get value(){return this._value}set value(e){let t=this._value;this._value=e,console.log("[Value Setter] Value changed, dispatching ntx-value-change event",e),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:e,bubbles:!0,composed:!0})),this.requestUpdate("value",t)}get btnEnabled(){return this._btnEnabled}set btnEnabled(e){let t=this._btnEnabled;this._btnEnabled=e,console.log(`[Property Setter] btnEnabled changed from ${t} to ${e}`),this.requestUpdate("btnEnabled",t)}get btnVisible(){return this._btnVisible}set btnVisible(e){let t=this._btnVisible;this._btnVisible=e,console.log(`[Property Setter] btnVisible changed from ${t} to ${e}`),this.requestUpdate("btnVisible",t)}connectedCallback(){super.connectedCallback(),this.toggleSubmitButtonVisibility()}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional: Bearer token value for Authorization header (used if Token URL is not provided)",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional: OAuth token endpoint URL e.g. https://api.example.com/oauth2/v1/token",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional: JSON key path to extract from response",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"Actual message from API response"},formattedResponse:{type:"string",title:"Formatted Response",description:"Formatted response message based on Success/Warning/Error Message configuration"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:null,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},formValidation:{type:"boolean",title:"Validate Form Before API Call",description:"If true, validates the entire Nintex form before making the API call. Only proceeds if all required fields are valid.",defaultValue:!1},submissionAction:{type:"string",title:"Submission Action",description:'Action to take after a successful API call. Set to "only-submit" to skip API call and directly submit the form.',enum:["no-submit","quick-submit","delayed-submit","only-submit"],defaultValue:"no-submit"},submitHidden:{type:"boolean",title:"Hide Submit Button",description:"If true, hides the Nintex form submit button from users.",defaultValue:!1},showMoreDetails:{type:"string",title:"Show More Details",description:"Controls when to show expandable raw response details in alerts.",enum:["Never","Always","On Error/Warning"],defaultValue:"Never"},alertPosition:{type:"string",title:"Alert Position",description:"Controls where the alert message is displayed relative to the button.",enum:["After","Before","Pop-out"],defaultValue:"After"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}}}render(){return this.debugMode?p`
        <div class="plugin-container">
          ${this.btnVisible?this.renderButtonWithAlert("Calling API..."):""}

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
      `:this.btnVisible?p`
      <div class="plugin-container">
        ${this.renderButtonWithAlert("Processing...")}
      </div>
    `:p`<div class="plugin-container" style="display: none;"></div>`}renderButtonWithAlert(e){let t=this.renderResponseAlert(this.alertPosition==="Before"),r=p`
      <button 
        class="btn btn-primary" 
        part="api-button"
        @click=${()=>this.triggerAPICall()} 
        ?disabled=${this.isButtonDisabled()}
      >
        ${this.isLoading?p`<span class="spinner"></span>${e}`:this.btnText}
      </button>
    `;return this.alertPosition==="Pop-out"?p`
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            ${r}
          </div>
        </div>
        ${this.shouldShowAlert()?this.renderModal(t):""}
      `:this.alertPosition==="Before"?p`
        <div class="form-group">
          ${t}
          <div class="btn-container align-${this.btnAlignment}">
            ${r}
          </div>
        </div>
      `:p`
      <div class="form-group">
        <div class="btn-container align-${this.btnAlignment}">
          ${r}
        </div>
        ${t}
      </div>
    `}shouldShowAlert(){if(this.formValidationError)return!0;let t=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3;return this.countdownEnabled&&this.lastApiCallTime>0&&t<r&&this.showCooldownAlert?!0:!(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)}renderModal(e){return p`
      <div class="modal-overlay" @click=${t=>{t.target===t.currentTarget&&this.closeModal()}}>
        <div class="modal-content">
          <button class="modal-close" @click=${()=>this.closeModal()}>&times;</button>
          ${e}
        </div>
      </div>
    `}closeModal(){this.apiResponse="",this.responseType=null,this.formValidationError="",this.showCooldownAlert=!1,this.requestUpdate()}renderResponseAlert(e=!1){var E;let r=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3,o=this.countdownEnabled&&this.lastApiCallTime>0&&r<i,a=this.submissionAction==="delayed-submit"&&this.cooldownTimerId!==null&&(this.responseType==="success"||this.responseType==="warning"),l=e?"alert-before":"";if(this.formValidationError)return p`
        <div class="alert alert-error ${l}" part="validation-alert">
          <div>
            <span class="alert-icon">✗</span>
            <strong>Validation Error:</strong> ${this.formValidationError}
          </div>
        </div>
      `;if(o&&this.showCooldownAlert){let T=Math.ceil((i-r)/1e3);return p`
        <div class="alert alert-info ${l}" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${T} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let d=`alert-${this.responseType}`,c=this.getAlertIcon(this.responseType),u=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),b=this.getCustomMessage(this.responseType),h=b.title,y=b.message,w=0;a&&(w=Math.ceil((i-r)/1e3));let x=y.includes(`
`);return this.responseType==="success"?p`
        <div class="alert ${d} ${l}" part="response-alert">
          ${h?p`
            <div>
              <strong>${h}</strong>
            </div>
          `:""}
          ${x?p`
            <div class="alert-response" style="white-space: pre-line; margin-top: ${h?"8px":"0"};">
              ${y}
            </div>
          `:p`
            <div style="display: inline; margin-left: ${h?"4px":"0"};">
              ${y}
            </div>
          `}
          ${a?p`
            <div class="alert-response">
              Submitting form in ${w} seconds...
            </div>
          `:""}
          ${this.shouldShowMoreDetails("success")?p`
            <div class="alert-more-details">
              <button 
                class="alert-more-details-toggle"
                @click=${()=>this.toggleDetailsExpanded()}
              >
                ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
              </button>
              ${this.detailsExpanded?p`
                <div class="alert-more-details-wrapper">
                  <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
                  <div class="alert-more-details-content">${this.formatRawResponse()}</div>
                </div>
              `:""}
            </div>
          `:""}
        </div>
      `:p`
      <div class="alert ${d} ${l}" part="response-alert">
        ${h?p`
          <div>
            <strong>${h}</strong>
          </div>
        `:""}
        ${x?p`
          <div class="alert-response" style="white-space: pre-line; margin-top: ${h?"8px":"0"};">
            ${y}
          </div>
        `:p`
          <div style="display: inline; margin-left: ${h?"4px":"0"};">
            ${y}
          </div>
        `}
        ${(E=this.value)!=null&&E.message?p`
          <div class="alert-response">
            ${this.value.message}
          </div>
        `:""}
        ${a?p`
          <div class="alert-response">
            Submitting form in ${w} seconds...
          </div>
        `:""}
        ${this.shouldShowMoreDetails(this.responseType)?p`
          <div class="alert-more-details">
            <button 
              class="alert-more-details-toggle"
              @click=${()=>this.toggleDetailsExpanded()}
            >
              ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
            </button>
            ${this.detailsExpanded?p`
              <div class="alert-more-details-wrapper">
                <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
                <div class="alert-more-details-content">${this.formatRawResponse()}</div>
              </div>
            `:""}
          </div>
        `:""}
      </div>
    `}getAlertIcon(e){switch(e){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}shouldShowMoreDetails(e){return this.showMoreDetails==="Never"?!1:this.showMoreDetails==="Always"?!0:this.showMoreDetails==="On Error/Warning"?e==="error"||e==="warning":!1}toggleDetailsExpanded(){this.detailsExpanded=!this.detailsExpanded,this.requestUpdate()}formatRawResponse(){if(!this.apiResponse)return"";try{let e=JSON.parse(this.apiResponse);return JSON.stringify(e,null,2)}catch(e){return this.apiResponse}}copyRawResponseToClipboard(){let e=this.formatRawResponse();this.copyToClipboard(e)}getCustomMessage(e){let t;switch(e){case"success":t=this.successMessage;break;case"warning":t=this.warningMessage;break;case"error":t=this.errorMessage;break;default:t="Unknown response type"}if(t.startsWith('"{')&&t.endsWith('}"'))try{let r=t.slice(1,-1).replace(/\\"/g,'"'),i=JSON.parse(r);return{title:i.title||null,message:this.formatResponseWithConfig(i)}}catch(r){return console.error("[Message Formatting] Failed to parse quoted config:",r),{title:null,message:t}}if(t.trim().startsWith('{"'))try{let r=JSON.parse(t);return{title:r.title||null,message:this.formatResponseWithConfig(r)}}catch(r){return console.error("[Message Formatting] Failed to parse unquoted config:",r),{title:null,message:t}}return{title:null,message:t}}formatResponseWithConfig(e){if(!e.fields||!Array.isArray(e.fields))return"Invalid configuration format";let t;try{t=JSON.parse(this.value.data)}catch(i){return console.error("[Message Formatting] Failed to parse response data:",i),"Unable to parse response data"}let r=[];return e.fields.forEach(i=>{let o=this.extractNestedValue(t,i.path);if(Array.isArray(o))if(o.length>0){let a=o[0];typeof a!="object"||a===null?(r.push(`${i.title}:`),o.forEach((d,c)=>{r.push(`  ${c+1}. ${String(d)}`)})):(r.push(`${i.title}:`),o.forEach((d,c)=>{let u=JSON.stringify(d);r.push(`  ${c+1}. ${u}`)}))}else r.push(`${i.title}: (empty)`);else{let a=o!=null?String(o):"N/A";r.push(`${i.title}: ${a}`)}}),r.join(`
`)}updated(e){e.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger(),e.has("submitHidden")&&this.toggleSubmitButtonVisibility(),e.has("btnVisible")&&(console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`),this.requestUpdate()),e.has("btnEnabled")&&(console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`),this.requestUpdate()),e.has("btnText")&&(console.log(`[UI Property Change] btnText changed to: ${this.btnText}`),this.requestUpdate()),e.has("btnAlignment")&&(console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`),this.requestUpdate()),e.has("debugMode")&&(console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`),this.requestUpdate())}toggleSubmitButtonVisibility(){let e="ntx-submit-button-hidden-style";if(this.submitHidden){if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=`
          button[data-e2e="btn-submit"] {
            display: none !important;
          }
        `,document.head.appendChild(t),console.log("[Submit Button] Hidden via CSS")}}else{let t=document.getElementById(e);t&&(t.remove(),console.log("[Submit Button] Made visible by removing CSS"))}}async validateNintexForm(){console.log("[Validation] Starting form validation...");let e=document.querySelector("form");if(!e)return console.warn("[Validation] No form found for validation"),!0;console.log("[Validation] Triggering validation on form inputs"),e.querySelectorAll("input, textarea, select").forEach(d=>{(d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement||d instanceof HTMLSelectElement)&&d.reportValidity()}),console.log("[Validation] Waiting 200ms for validation state to update..."),await new Promise(d=>setTimeout(d,200));let r=e.querySelectorAll('[aria-invalid="true"]'),i=e.querySelectorAll(":invalid"),o=e.querySelectorAll('.ntx-form-error, [class*="error-message"]'),l=r.length+i.length===0&&o.length===0;return console.log("[Validation] Invalid fields found:"),console.log("  - aria-invalid:",r.length),console.log("  - HTML5 invalid:",i.length),console.log("  - Error messages:",o.length),console.log("[Validation] Form is valid:",l),l||(console.log("[Validation] Form validation FAILED. Invalid fields:"),r.forEach((d,c)=>{console.log(`  [aria-invalid ${c+1}]`,d)}),i.forEach((d,c)=>{console.log(`  [HTML5 invalid ${c+1}]`,d)})),l}async handleAPICallTrigger(){if(console.log("[API Call] handleAPICallTrigger started"),this.sendAPICall=!1,this.formValidationError="",this.submissionAction==="only-submit"){console.log("[API Call] Submission action is only-submit - skipping API call and validation, submitting form directly"),this.submitNintexForm();return}if(this.formValidation){console.log("[API Call] Form validation is ENABLED, checking form...");let e=await this.validateNintexForm();if(console.log("[API Call] Validation result:",e),!e){console.log("[API Call] Form validation FAILED - BLOCKING API call"),this.formValidationError="Please fill in all required fields correctly before submitting.",this.requestUpdate();return}console.log("[API Call] Form validation PASSED - proceeding with API call")}else console.log("[API Call] Form validation is DISABLED");if(!this.allowMultipleAPICalls&&this.hasSuccessfulCall){console.log("[API Call] Multiple API calls not allowed and already had successful call - BLOCKING");return}if(this.countdownEnabled){let t=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&t<r){console.log("[API Call] In cooldown period - BLOCKING"),this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}console.log("[API Call] All checks passed - calling handleApiCall()"),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls)return this.isLoading;let e=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning");return this.isLoading||!this.btnEnabled||e}setActiveTab(e){this.activeDebugTab=e,this.requestUpdate()}renderPropertiesTab(){let e=this.constructor.getMetaConfig(),t=[];if(e.properties)for(let[r,i]of Object.entries(e.properties))r!=="value"&&t.push({name:r,default:i.defaultValue,config:i});return t.sort((r,i)=>r.name.localeCompare(i.name)),p`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(r=>p`
            <tr>
              <td><code class="property-name">${r.name}</code></td>
              <td class="value-default">${this.formatValue(r.default)}</td>
              <td class="value-current">${this.renderPropertyInput(r.name,r.config)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}renderPropertyInput(e,t){let r=this[e],i=t.type;if(i==="boolean")return p`
        <span style="font-weight: 500; color: ${r?"#28a745":"#dc3545"};">
          ${r?"\u2713 Yes":"\u2717 No"}
        </span>
      `;if(i==="string"){let o=(e==="bearerToken"||e==="clientSecret")&&r&&r.length>0?"***"+r.slice(-4):r,a=o&&o.length>100?o.substring(0,100)+"...":o;return p`
        <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
          ${a||"<empty>"}
        </span>
      `}return i==="number"||i==="integer"?p`
        <span style="font-weight: 500;">
          ${r}
        </span>
      `:p`<span>${this.formatValue(r)}</span>`}renderRequestDetailsTab(){return p`
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
          ${this.oauthTokenResponse?p`
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
              ${this.requestHeaders?p`
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
              ${this.requestBody?p`
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
          ${this.apiResponse?p`
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
    `}renderAPIToolsTab(){let e=this.isValidJson(this.requestBody),t=this.getJsonStatus(this.requestBody);return p`
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
                ${t}
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
    `}renderResponseFormatterTab(){let e=this.formatterJsonInput.trim().length>0,t=e&&this.isValidJson(this.formatterJsonInput),r=null,i="";if(e)try{r=JSON.parse(this.formatterJsonInput)}catch(o){i=o.message}return p`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${o=>{let a=o.target;this.formatterJsonInput=a.value,this.requestUpdate()}}
            placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${i?p`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
        </div>

        ${t&&r?p`
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
            ${this.renderMessageTypeConfig("success",this.successMessage,r)}
          </div>

          <!-- Warning Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab==="warning"?"active":""}">
            ${this.renderMessageTypeConfig("warning",this.warningMessage,r)}
          </div>

          <!-- Error Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab==="error"?"active":""}">
            ${this.renderMessageTypeConfig("error",this.errorMessage,r)}
          </div>
        `:""}
      </div>
    `}renderMessageTypeConfig(e,t,r){let o={success:{bg:"#d4edda",text:"#155724",border:"#c3e6cb",btnBg:"#28a745",btnText:"white"},warning:{bg:"#fff3cd",text:"#856404",border:"#ffeaa7",btnBg:"#ffc107",btnText:"#000"},error:{bg:"#f8d7da",text:"#721c24",border:"#f5c6cb",btnBg:"#dc3545",btnText:"white"}}[e];return p`
      <div style="border: 1px solid var(--ntx-form-theme-color-border); border-top: none; border-radius: 0 0 4px 4px; padding: 16px; background: var(--ntx-form-theme-color-background);">
        
        <!-- Current Configuration -->
        <div class="form-group">
          <label class="control-label">Current ${e.charAt(0).toUpperCase()+e.slice(1)} Message Configuration</label>
          <div style="position: relative;">
            <textarea 
              class="form-control" 
              readonly
              rows="4"
              .value=${t}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; background: ${o.bg}; color: ${o.text}; border-color: ${o.border};"
            ></textarea>
          </div>
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
            ${t.trim().startsWith('{"fields"')||t.trim().startsWith('"{')?"\u2713 Formatted response configuration detected":"\u25CB Plain text message"}
          </div>
        </div>

        <!-- Preview -->
        <div class="form-group">
          <label class="control-label">Preview of Current Configuration</label>
          <div style="border: 1px solid ${o.border}; border-radius: 4px; padding: 16px; background: ${o.bg}; color: ${o.text}; white-space: pre-line; min-height: 60px;">
            ${this.getPreviewForConfig(t,r)}
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
                ${this.renderAvailableFields(r,"")}
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

        ${this.formatterSelectedFields.size>0?p`
          <!-- New Configuration Preview -->
          <div class="form-group">
            <label class="control-label">New Configuration Preview</label>
            <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt); white-space: pre-line;">
              ${this.renderFormattedPreview(r)}
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
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 100px; background: ${o.bg}; color: ${o.text}; border-color: ${o.border};"
              ></textarea>
              <button 
                class="btn" 
                style="position: absolute; top: 8px; right: 8px; padding: 6px 16px; font-size: 13px; background: ${o.btnBg}; color: ${o.btnText||"white"}; border: none; font-weight: 600;"
                @click=${()=>{let a=this.generateResponseConfigQuoted();this.copyToClipboard(a)}}
                title="Copy configuration to paste into ${e.charAt(0).toUpperCase()+e.slice(1)} Message property"
              >
                📋 Copy Config
              </button>
            </div>
            <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
              Copy this and paste into the <strong>${e.charAt(0).toUpperCase()+e.slice(1)} Message</strong> property in Plugin Properties
            </div>
          </div>
        `:""}
      </div>
    `}getPreviewForConfig(e,t){if(!e||e.trim().length===0)return p`<span style="font-style: italic; opacity: 0.6;">No configuration set</span>`;let r=this.value,i=U($({},this.value),{data:JSON.stringify(t)});this.value=i;let o;if(e.trim().startsWith('{"fields"')||e.trim().startsWith('"{'))try{let a;if(e.startsWith('"{')&&e.endsWith('}"')){let l=e.slice(1,-1).replace(/\\"/g,'"');a=JSON.parse(l)}else a=JSON.parse(e);o=this.formatResponseWithConfig(a)}catch(a){o=e}else o=e;return this.value=r,o}loadConfigIntoFields(e){let t=e==="success"?this.successMessage:e==="warning"?this.warningMessage:this.errorMessage;if(this.formatterSelectedFields.clear(),this.formatterMessageTitle="",!t||t.trim().length===0){this.requestUpdate();return}try{let r;if(t.startsWith('"{')&&t.endsWith('}"')){let i=t.slice(1,-1).replace(/\\"/g,'"');r=JSON.parse(i)}else if(t.trim().startsWith('{"'))r=JSON.parse(t);else{this.requestUpdate();return}r.title&&(this.formatterMessageTitle=r.title),r.fields&&Array.isArray(r.fields)&&r.fields.forEach((i,o)=>{this.formatterSelectedFields.set(i.path,{title:i.title||i.path,checked:!0,order:o})})}catch(r){console.error("[Config Loading] Failed to parse config:",r)}this.requestUpdate()}renderAvailableFields(e,t){let r=[],i=(o,a)=>{o&&typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).forEach(l=>{var u,b;let d=a?`${a}.${l}`:l,c=o[l];if(Array.isArray(c)&&c.length>0){if(this.formatterUseArrayNotation){let h=`${d}[*]`,y=((u=this.formatterSelectedFields.get(h))==null?void 0:u.checked)||!1,w=`Array with ${c.length} item${c.length>1?"s":""}`;r.push(p`
                <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${y?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                  <input 
                    type="checkbox" 
                    .checked=${y}
                    @change=${x=>{if(x.target.checked){let T=-1;this.formatterSelectedFields.forEach(pe=>{pe.order>T&&(T=pe.order)}),this.formatterSelectedFields.set(h,{title:l,checked:!0,order:T+1})}else this.formatterSelectedFields.delete(h);this.requestUpdate()}}
                    style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                  />
                  <div style="flex: 1; margin-left: 10px; min-width: 0;">
                    <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                      <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${h}</code>
                      <span style="margin-left: 6px; font-size: 11px; color: var(--ntx-form-theme-color-secondary);">📋 Array</span>
                    </div>
                    <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                      ${w}
                    </div>
                  </div>
                </div>
              `)}if(typeof c[0]=="object"&&!Array.isArray(c[0])){let h=this.formatterUseArrayNotation?`${d}[*]`:`${d}[0]`;i(c[0],h)}}else if(c!==null&&typeof c!="object"){let h=d,y=((b=this.formatterSelectedFields.get(h))==null?void 0:b.checked)||!1;r.push(p`
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${y?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${y}
                  @change=${w=>{if(w.target.checked){let E=-1;this.formatterSelectedFields.forEach(T=>{T.order>E&&(E=T.order)}),this.formatterSelectedFields.set(h,{title:h.split(".").pop()||h,checked:!0,order:E+1})}else this.formatterSelectedFields.delete(h);this.requestUpdate()}}
                  style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                />
                <div style="flex: 1; margin-left: 10px; min-width: 0;">
                  <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${h}</code>
                  </div>
                  <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                    ${String(c).length>50?String(c).substring(0,50)+"...":String(c)}
                  </div>
                </div>
              </div>
            `)}else c&&typeof c=="object"&&!Array.isArray(c)&&i(c,d)})};return i(e,t),r.length>0?r:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`}renderSelectedFieldsList(){let e=Array.from(this.formatterSelectedFields.entries()).filter(([t,r])=>r.checked).sort((t,r)=>t[1].order-r[1].order);return e.length===0?p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`:e.map(([t,r],i)=>p`
      <div 
        draggable="true"
        @dragstart=${o=>{o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("text/plain",i.toString())}}
        @dragover=${o=>{o.preventDefault(),o.dataTransfer.dropEffect="move"}}
        @drop=${o=>{o.preventDefault();let a=parseInt(o.dataTransfer.getData("text/plain")),l=i;if(a!==l){let d=Array.from(e),[c]=d.splice(a,1);d.splice(l,0,c),d.forEach(([u,b],h)=>{this.formatterSelectedFields.set(u,U($({},b),{order:h}))}),this.requestUpdate()}}}
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
        @mouseenter=${o=>{o.currentTarget.style.borderColor="var(--ntx-form-theme-color-primary)",o.currentTarget.style.boxShadow="0 2px 4px rgba(0,0,0,0.1)"}}
        @mouseleave=${o=>{o.currentTarget.style.borderColor="var(--ntx-form-theme-color-border)",o.currentTarget.style.boxShadow="none"}}
      >
        <div style="font-size: 16px; color: var(--ntx-form-theme-color-secondary); cursor: grab;" title="Drag to reorder">
          ⋮⋮
        </div>
        <div style="font-weight: 600; color: var(--ntx-form-theme-color-primary); min-width: 30px;">
          ${i+1}.
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-bottom: 4px; word-break: break-all;">
            <code style="font-size: 10px;">${t}</code>
          </div>
          <input 
            type="text" 
            class="form-control"
            placeholder="Display title"
            .value=${r.title}
            @input=${o=>{let a=o.target;this.formatterSelectedFields.set(t,U($({},r),{title:a.value})),this.requestUpdate()}}
            style="font-size: 13px; padding: 6px 8px; height: auto;"
          />
        </div>
        <button
          @click=${()=>{this.formatterSelectedFields.delete(t),this.requestUpdate()}}
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
          @mouseenter=${o=>{o.currentTarget.style.filter="brightness(0.9)"}}
          @mouseleave=${o=>{o.currentTarget.style.filter="brightness(1)"}}
          title="Remove field"
        >
          ✕
        </button>
      </div>
    `)}renderFormattedPreview(e){let t=[];return this.formatterSelectedFields.forEach((r,i)=>{if(r.checked){let o=this.extractNestedValue(e,i),a=r.title||i;t.push(p`
          <div style="margin-bottom: 8px;">
            <strong>${a}:</strong> ${o!==void 0?String(o):"N/A"}
          </div>
        `)}}),t.length>0?t:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`}generateResponseConfig(){let e={};return this.formatterMessageTitle&&this.formatterMessageTitle.trim()&&(e.title=this.formatterMessageTitle.trim()),e.fields=[],Array.from(this.formatterSelectedFields.entries()).filter(([r,i])=>i.checked).sort((r,i)=>r[1].order-i[1].order).forEach(([r,i])=>{e.fields.push({path:r,title:i.title||r})}),JSON.stringify(e,null,2)}generateResponseConfigQuoted(){let e={};return this.formatterMessageTitle&&this.formatterMessageTitle.trim()&&(e.title=this.formatterMessageTitle.trim()),e.fields=[],Array.from(this.formatterSelectedFields.entries()).filter(([i,o])=>o.checked).sort((i,o)=>i[1].order-o[1].order).forEach(([i,o])=>{e.fields.push({path:i,title:o.title||i})}),`"${JSON.stringify(e).replace(/"/g,'\\"')}"`}formatValue(e){return typeof e=="boolean"?e.toString():typeof e=="string"?`"${e}"`:typeof e=="number"?e.toString():e===null?"null":e===void 0?"undefined":JSON.stringify(e)}formatJsonForDisplay(e){try{let t=JSON.parse(e);return JSON.stringify(t,null,2)}catch(t){return e}}isValidJson(e){if(!e.trim())return!0;try{return JSON.parse(e),!0}catch(t){return!1}}getJsonStatus(e){if(!e.trim())return"Empty";try{let t=JSON.parse(e),r=e.length,i=e.split(`
`).length,o=this.countJsonKeys(t);return`Valid JSON \u2022 ${r} chars \u2022 ${i} lines \u2022 ${o} keys`}catch(t){return`Invalid JSON \u2022 ${t.message}`}}countJsonKeys(e){return typeof e!="object"||e===null?0:Array.isArray(e)?e.reduce((t,r)=>t+this.countJsonKeys(r),0):Object.keys(e).length+Object.values(e).reduce((t,r)=>t+this.countJsonKeys(r),0)}formatJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}catch(e){}}minifyJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e),this.requestUpdate()}catch(e){}}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){let e={startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:"req-"+Date.now()}}}};this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}handleJsonInput(e){let t=e.target;this.requestBody=t.value,this.requestUpdate()}handleJsonBlur(e){if(this.isValidJson(this.requestBody)&&this.requestBody.trim())try{let t=JSON.parse(this.requestBody),r=JSON.stringify(t,null,2);r!==this.requestBody&&(this.requestBody=r,this.requestUpdate())}catch(t){}}handleJsonPaste(e){setTimeout(()=>{this.isValidJson(this.requestBody)&&this.formatJson()},100)}renderJsonOutput(){if(!this.requestBody.trim())return"";let e="",t="",r="";try{let i=JSON.parse(this.requestBody);e=JSON.stringify(i),t='"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}catch(i){r=i.message}return p`
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
              .value=${t}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px;"
            ></textarea>
          </div>
        </div>
        ${r?p`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${r}</div>`:""}
      </div>
    `}renderJsonPreview(){if(!this.requestBody.trim()||!this.isValidJson(this.requestBody))return"";try{let e=JSON.parse(this.requestBody);return p`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(e,0)}
          </div>
        </div>
      `}catch(e){return""}}renderJsonWithSyntaxHighlight(e,t=0){let r="  ".repeat(t);if(e===null)return'<span class="json-syntax-null">null</span>';if(typeof e=="string")return`<span class="json-syntax-string">"${e}"</span>`;if(typeof e=="number")return`<span class="json-syntax-number">${e}</span>`;if(typeof e=="boolean")return`<span class="json-syntax-boolean">${e}</span>`;if(Array.isArray(e))return e.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${e.map(o=>`${r}  ${this.renderJsonWithSyntaxHighlight(o,t+1)}`).join(`,
`)}
${r}<span class="json-syntax-punctuation">]</span>`;if(typeof e=="object"){let i=Object.keys(e);return i.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${i.map(a=>`${r}  <span class="json-syntax-key">"${a}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(e[a],t+1)}`).join(`,
`)}
${r}<span class="json-syntax-punctuation">}</span>`}return String(e)}static removeInstructionalPlaceholders(e){if(Array.isArray(e))return e.map(t=>this.removeInstructionalPlaceholders(t));if(e&&typeof e=="object"){let t={};for(let[r,i]of Object.entries(e)){if(typeof i=="string"&&/^<.*>$/.test(i.trim()))continue;let o=this.removeInstructionalPlaceholders(i);o!==void 0&&!(typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(t[r]=o)}return t}return e}async fetchOAuthToken(){let e=await fetch(this.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:this.clientId,client_secret:this.clientSecret})});if(!e.ok)throw new Error(`Token request failed with status ${e.status}`);let t=await e.json();if(!t.access_token)throw new Error("No access_token in response");return this.oauthTokenResponse={access_token:t.access_token,token_type:t.token_type||"Bearer",expires_in:t.expires_in,scope:t.scope,fetched_at:new Date().toISOString(),expires_at:t.expires_in?new Date(Date.now()+t.expires_in*1e3).toISOString():null},t.access_token}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let e=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{e=await this.fetchOAuthToken()}catch(o){let a=Date.now()-this.apiCallStartTime,l=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${o instanceof Error?o.message:String(o)}`,this.value={success:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:"",formattedResponse:this.errorMessage,timestamp:l,executionTime:a},this.isLoading=!1,this.requestUpdate();return}let t=this.apiUrl||"",r={};if(this.requestHeaders)try{r=JSON.parse(this.requestHeaders)}catch(o){r={},this.requestHeaders.split(/\r?\n/).forEach(a=>{let l=a.indexOf(":");if(l>-1){let d=a.slice(0,l).trim(),c=a.slice(l+1).trim();d&&(r[d]=c)}})}e&&e.trim()&&(r.Authorization=`Bearer ${e.trim()}`);let i;if(this.contentType==="application/x-www-form-urlencoded")i=this.requestBody||"";else if(this.contentType==="application/json")if(this.requestBody&&this.requestBody.trim())try{i=JSON.parse(this.requestBody)}catch(o){i=void 0}else i=void 0;else i=this.requestBody||"";await Je({url:t,method:this.method||"POST",headers:r,requestBody:i,contentType:this.contentType,setLoading:o=>{this.isLoading=o,this.requestUpdate()},setResponse:(o,a,l)=>{let d=Date.now()-this.apiCallStartTime,c=new Date().toISOString();this.apiResponse=o,this.responseType=l===!1?"error":this.determineResponseType(o),this.formatterJsonInput=o,this.formatterSelectedFields.clear();let u,b,h="";try{let x=JSON.parse(o);x.access_token&&(u=x.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(b=this.extractNestedValue(x,this.outputValueKey)),h=this.extractNestedValue(x,"d.Message")||this.extractNestedValue(x,"Message")||this.extractNestedValue(x,"message")||this.extractNestedValue(x,"msg")||this.extractNestedValue(x,"data.message")||""}catch(x){}let y=this.getCustomMessage(this.responseType);this.value=$($({success:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:a!==void 0?a:this.responseType==="success"?200:500,responseType:this.responseType,data:o,message:h,formattedResponse:y.message,timestamp:c,executionTime:d},u&&{access_token:u}),b!==void 0&&{output:b}),(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),console.log("[Value Change] Value updated at:",new Date().toISOString()),this.requestUpdate(),(this.responseType==="success"||this.responseType==="warning")&&(console.log("[Value Change] Waiting 800ms for Nintex to process value change..."),setTimeout(()=>{console.log("[Value Change] Wait complete at:",new Date().toISOString(),"- proceeding with submission action"),this.handlePostSubmissionAction()},800))}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let t=JSON.parse(e);if(t.error||t.status==="error")return"error";if(t.warning||t.status==="warning")return"warning"}catch(t){}return"success"}extractNestedValue(e,t){if(e&&typeof e=="object"&&t in e)return e[t];let r=t.split("."),i=e,o=!1;for(let a=0;a<r.length;a++){let l=r[a],d=l.match(/^(.+)\[(\*|\d+)\]$/);if(d){let c=d[1],u=d[2];if(i&&typeof i=="object"&&c in i){let b=i[c];if(Array.isArray(b))if(u==="*"){let h=r.slice(a+1);if(h.length>0){let y=h.join(".");i=b.map(w=>this.extractNestedValue(w,y)).filter(w=>w!==void 0)}else i=b;o=!0;break}else i=b[parseInt(u)];else return}else return}else if(i&&typeof i=="object"&&l in i)i=i[l];else return}return i}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy text:",t)}}handlePostSubmissionAction(){if(console.log("[Submission Action] Checking submission action:",this.submissionAction),this.submissionAction==="no-submit"){console.log("[Submission Action] No action configured");return}if(this.submissionAction==="quick-submit"){console.log("[Submission Action] Quick submit - triggering after 500ms"),setTimeout(()=>{this.submitNintexForm()},500);return}if(this.submissionAction==="delayed-submit"){console.log("[Submission Action] Delayed submit - starting countdown timer"),this.startDelayedSubmission();return}}submitNintexForm(){console.log("[Submission Action] Attempting to submit Nintex form");let e=document.querySelector("form");if(!e){console.error("[Submission Action] No form found");return}let t=e.querySelector('button[type="submit"]');t instanceof HTMLElement?(console.log("[Submission Action] Clicking submit button"),t.click()):console.error("[Submission Action] No submit button found")}startDelayedSubmission(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=this.countdownTimer*1e3,t=Date.now(),r=()=>{let i=Date.now()-t;e-i<=0?(console.log("[Submission Action] Countdown complete - submitting form"),this.submitNintexForm(),this.cooldownTimerId=null):(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(r,100))};console.log("[Submission Action] Starting delayed submission countdown for",this.countdownTimer,"seconds"),r()}startCooldownTimer(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=()=>{let r=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;r<i?(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(e,1e3)):(this.showCooldownAlert=!1,this.cooldownTimerId=null,this.requestUpdate())};this.cooldownTimerId=window.setTimeout(e,1e3)}disconnectedCallback(){super.disconnectedCallback(),this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null)}};m.styles=Z`
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
      padding-top: 8px;
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
  `,f([g({type:String})],m.prototype,"label",2),f([g({type:String})],m.prototype,"description",2),f([g({type:Boolean})],m.prototype,"readOnly",2),f([g({type:Object})],m.prototype,"value",1),f([g({type:String})],m.prototype,"requestBody",2),f([g({type:String})],m.prototype,"apiUrl",2),f([g({type:String})],m.prototype,"requestHeaders",2),f([g({type:String})],m.prototype,"bearerToken",2),f([g({type:String})],m.prototype,"tokenUrl",2),f([g({type:String})],m.prototype,"clientId",2),f([g({type:String})],m.prototype,"clientSecret",2),f([g({type:String})],m.prototype,"outputValueKey",2),f([g({type:String})],m.prototype,"contentType",2),f([g({type:Boolean,reflect:!0})],m.prototype,"debugMode",2),f([g({type:String})],m.prototype,"method",2),f([g({type:String})],m.prototype,"successMessage",2),f([g({type:String})],m.prototype,"warningMessage",2),f([g({type:String})],m.prototype,"errorMessage",2),f([g({type:Boolean,reflect:!0,attribute:"send-api-call"})],m.prototype,"sendAPICall",2),f([g({type:Boolean,reflect:!0,attribute:"allow-multiple-api-calls"})],m.prototype,"allowMultipleAPICalls",2),f([g({type:Boolean,reflect:!0,attribute:"countdown-enabled"})],m.prototype,"countdownEnabled",2),f([g({type:Number})],m.prototype,"countdownTimer",2),f([g({type:Boolean,reflect:!0,attribute:"btn-enabled"})],m.prototype,"btnEnabled",1),f([g({type:String,reflect:!0,attribute:"btn-text"})],m.prototype,"btnText",2),f([g({type:String,reflect:!0,attribute:"btn-alignment"})],m.prototype,"btnAlignment",2),f([g({type:Boolean,reflect:!0,attribute:"btn-visible"})],m.prototype,"btnVisible",1),f([g({type:Boolean,reflect:!0,attribute:"form-validation"})],m.prototype,"formValidation",2),f([g({type:String,reflect:!0,attribute:"submission-action"})],m.prototype,"submissionAction",2),f([g({type:Boolean,reflect:!0,attribute:"submit-hidden"})],m.prototype,"submitHidden",2),f([g({type:String,reflect:!0,attribute:"show-more-details"})],m.prototype,"showMoreDetails",2),f([g({type:String,reflect:!0,attribute:"alert-position"})],m.prototype,"alertPosition",2),m=f([Fe("daf-webrequest-plugin")],m);export{m as DafWebRequestPlugin};
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
