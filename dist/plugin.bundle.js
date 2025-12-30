var ue=Object.defineProperty,je=Object.defineProperties,qe=Object.getOwnPropertyDescriptor,Be=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var pe=(n,t,e)=>t in n?ue(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,x=(n,t)=>{for(var e in t||(t={}))He.call(t,e)&&pe(n,e,t[e]);if(de)for(var e of de(t))Re.call(t,e)&&pe(n,e,t[e]);return n},H=(n,t)=>je(n,Be(t));var h=(n,t,e,s)=>{for(var r=s>1?void 0:s?qe(t,e):t,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ue(t,e,r),r};var R=globalThis,L=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),he=new WeakMap,O=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(L&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=he.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&he.set(e,t))}return t}toString(){return this.cssText}},fe=n=>new O(typeof n=="string"?n:n+"",void 0,Q),X=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new O(e,n,Q)},me=(n,t)=>{if(L)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=R.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},Y=L?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return fe(e)})(n):n;var{is:Le,defineProperty:ze,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:De,getOwnPropertySymbols:Ke,getPrototypeOf:Ze}=Object,$=globalThis,ge=$.trustedTypes,Ge=ge?ge.emptyScript:"",W=$.reactiveElementPolyfillSupport,M=(n,t)=>n,N={toAttribute(n,t){switch(t){case Boolean:n=n?Ge:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},z=(n,t)=>!Le(n,t),be={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:z},ye,ve;(ye=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ve=$.litPropertyMetadata)!=null||($.litPropertyMetadata=new WeakMap);var v=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=be){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&ze(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var o;let{get:r,set:i}=(o=Fe(this.prototype,t))!=null?o:{get(){return this[e]},set(a){this[e]=a}};return{get:r,set(a){let l=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:be}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;let t=Ze(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){let e=this.properties,s=[...De(e),...Ke(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Y(r))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return me(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var i,o,a,l;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let c=s.getPropertyOptions(r),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((i=c.converter)==null?void 0:i.fromAttribute)!==void 0?c.converter:N;this._$Em=r,this[r]=(l=(a=d.fromAttribute(e,c.type))!=null?a:(o=this._$Ej)==null?void 0:o.get(r))!=null?l:null,this._$Em=null}}requestUpdate(t,e,s){var r,i;if(t!==void 0){let o=this.constructor,a=this[t];if(s!=null||(s=o.getPropertyOptions(t)),!(((r=s.hasChanged)!=null?r:z)(a,e)||s.useDefault&&s.reflect&&a===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},o){var a,l,c;s&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(l=o!=null?o:e)!=null?l:this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:l}=a,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},xe;v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[M("elementProperties")]=new Map,v[M("finalized")]=new Map,W==null||W({ReactiveElement:v}),((xe=$.reactiveElementVersions)!=null?xe:$.reactiveElementVersions=[]).push("2.1.0");var U=globalThis,F=U.trustedTypes,$e=F?F.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ee="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Pe="?"+w,Qe=`<${Pe}>`,_=document,V=()=>_.createComment(""),j=n=>n===null||typeof n!="object"&&typeof n!="function",ae=Array.isArray,Xe=n=>ae(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ee=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,Ae=/>/g,S=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Te=/'/g,Se=/"/g,ke=/^(?:script|style|textarea|title)$/i,le=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),f=le(1),nt=le(2),at=le(3),E=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Ce=new WeakMap,C=_.createTreeWalker(_,129);function Ie(n,t){if(!ae(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(t):t}var Ye=(n,t)=>{let e=n.length-1,s=[],r,i=t===2?"<svg>":t===3?"<math>":"",o=J;for(let a=0;a<e;a++){let l=n[a],c,d,p=-1,y=0;for(;y<l.length&&(o.lastIndex=y,d=o.exec(l),d!==null);)y=o.lastIndex,o===J?d[1]==="!--"?o=we:d[1]!==void 0?o=Ae:d[2]!==void 0?(ke.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=S):d[3]!==void 0&&(o=S):o===S?d[0]===">"?(o=r!=null?r:J,p=-1):d[1]===void 0?p=-2:(p=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?S:d[3]==='"'?Se:Te):o===Se||o===Te?o=S:o===we||o===Ae?o=J:(o=S,r=void 0);let g=o===S&&n[a+1].startsWith("/>")?" ":"";i+=o===J?l+Qe:p>=0?(s.push(c),l.slice(0,p)+Ee+l.slice(p)+w+g):l+w+(p===-2?a:g)}return[Ie(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},q=class n{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0,a=t.length-1,l=this.parts,[c,d]=Ye(t,e);if(this.el=n.createElement(c,s),C.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=C.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Ee)){let y=d[o++],g=r.getAttribute(p).split(w),T=/([.?@])?(.*)/.exec(y);l.push({type:1,index:i,name:T[2],strings:g,ctor:T[1]==="."?re:T[1]==="?"?oe:T[1]==="@"?ie:I}),r.removeAttribute(p)}else p.startsWith(w)&&(l.push({type:6,index:i}),r.removeAttribute(p));if(ke.test(r.tagName)){let p=r.textContent.split(w),y=p.length-1;if(y>0){r.textContent=F?F.emptyScript:"";for(let g=0;g<y;g++)r.append(p[g],V()),C.nextNode(),l.push({type:2,index:++i});r.append(p[y],V())}}}else if(r.nodeType===8)if(r.data===Pe)l.push({type:2,index:i});else{let p=-1;for(;(p=r.data.indexOf(w,p+1))!==-1;)l.push({type:7,index:i}),p+=w.length-1}i++}}static createElement(t,e){let s=_.createElement("template");return s.innerHTML=t,s}};function k(n,t,e=n,s){var o,a,l;if(t===E)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,i=j(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=k(n,r._$AS(n,t.values),r,s)),t}var se=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:_).importNode(e,!0);C.currentNode=r;let i=C.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new B(i,i.nextSibling,this,t):l.type===1?d=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(d=new ne(i,this,t)),this._$AV.push(d),l=s[++a]}o!==(l==null?void 0:l.index)&&(i=C.nextNode(),o++)}return C.currentNode=_,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class n{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var i;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(i=r==null?void 0:r.isConnected)!=null?i:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),j(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var i;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(Ie(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{let o=new se(r,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Ce.get(t.strings);return e===void 0&&Ce.set(t.strings,e=new q(t)),e}k(t){ae(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new n(this.O(V()),this.O(V()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(t,e=this,s,r){let i=this.strings,o=!1;if(i===void 0)t=k(this,t,e,0),o=!j(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let a=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=k(this,a[s+l],e,l),c===E&&(c=this._$AH[l]),o||(o=!j(c)||c!==this._$AH[l]),c===b?t=b:t!==b&&(t+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!r&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},re=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}},oe=class extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}},ie=class extends I{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var o;if((t=(o=k(this,t,e,0))!=null?o:b)===E)return;let s=this._$AH,r=t===b&&s!==b||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},ne=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var te=U.litHtmlPolyfillSupport,_e;te==null||te(q,B),((_e=U.litHtmlVersions)!=null?_e:U.litHtmlVersions=[]).push("3.3.0");var Oe=(n,t,e)=>{var i,o;let s=(i=e==null?void 0:e.renderBefore)!=null?i:t,r=s._$litPart$;if(r===void 0){let a=(o=e==null?void 0:e.renderBefore)!=null?o:null;s._$litPart$=r=new B(t.insertBefore(V(),a),a,void 0,e!=null?e:{})}return r._$AI(n),r};var P=globalThis,A=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}},Me;A._$litElement$=!0,A.finalized=!0,(Me=P.litElementHydrateSupport)==null||Me.call(P,{LitElement:A});var ce=P.litElementPolyfillSupport;ce==null||ce({LitElement:A});var Ne;((Ne=P.litElementVersions)!=null?Ne:P.litElementVersions=[]).push("4.2.0");async function Je({url:n,method:t="POST",headers:e={},requestBody:s,contentType:r="application/json",setLoading:i,setResponse:o}){i(!0),o("",0,!1);try{let a,l=x({Accept:"application/json"},e);["POST","PUT","PATCH","DELETE"].includes(t.toUpperCase())&&s!=null&&s!==""&&(r==="application/json"?(l["Content-Type"]="application/json",a=typeof s=="string"?s:JSON.stringify(s)):r==="application/x-www-form-urlencoded"?(l["Content-Type"]="application/x-www-form-urlencoded",typeof s=="string"?a=s:typeof s=="object"&&s!==null&&(a=Object.keys(s).map(p=>`${encodeURIComponent(p)}=${encodeURIComponent(s[p])}`).join("&"))):(l["Content-Type"]=r,a=typeof s=="string"?s:JSON.stringify(s)));let c=await fetch(n,{method:t,headers:l,body:a}),d=await c.text();o(d,c.status,c.ok)}catch(a){o("Error: "+((a==null?void 0:a.message)||a),0,!1)}finally{i(!1)}}var Ue=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var We={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:z},et=(n=We,t,e)=>{let{kind:s,metadata:r}=e,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),s==="accessor"){let{name:o}=e;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,n)},init(a){return a!==void 0&&this.C(o,void 0,n,a),a}}}if(s==="setter"){let{name:o}=e;return function(a){let l=this[o];t.call(this,a),this.requestUpdate(o,l,n)}}throw Error("Unsupported decorator location: "+s)};function m(n){return(t,e)=>typeof e=="object"?et(n,t,e):((s,r,i)=>{let o=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),o?Object.getOwnPropertyDescriptor(r,i):void 0})(n,t,e)}var u=class extends A{constructor(){super();this.activeDebugTab="properties";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.cooldownTimerId=null;this.formValidationError="";this.label="",this.description="",this.readOnly=!1,this.value={success:!1,statusCode:0,responseType:"",data:"",message:"",timestamp:"",executionTime:0},this.requestBody="",this.apiUrl="",this.requestHeaders="",this.bearerToken="",this.tokenUrl="",this.clientId="",this.clientSecret="",this.outputValueKey="",this.responseConfig="",this.contentType="application/json",this.debugMode=!1,this.method="POST",this.successMessage="API call completed successfully",this.warningMessage="API call completed with warnings",this.errorMessage="API call failed",this.sendAPICall=!1,this.allowMultipleAPICalls=!1,this.countdownEnabled=!1,this.countdownTimer=5,this.btnEnabled=!0,this.btnText="Send API Request",this.btnAlignment="left",this.btnVisible=!0,this.formValidation=!1}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional: Bearer token value for Authorization header (used if Token URL is not provided)",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional: OAuth token endpoint URL e.g. https://api.example.com/oauth2/v1/token",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional: JSON key path to extract from response",defaultValue:""},responseConfig:{type:"string",title:"Response Format Configuration",description:"JSON configuration for formatting API response display",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"User-friendly message describing the result"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:!1,statusCode:0,responseType:"",data:"",message:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},formValidation:{type:"boolean",title:"Validate Form Before API Call",description:"If true, validates the entire Nintex form before making the API call. Only proceeds if all required fields are valid.",defaultValue:!1}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}}}render(){return this.debugMode?f`
        <div class="plugin-container">
          ${this.btnVisible?f`
            <div class="form-group">
              <div class="btn-container align-${this.btnAlignment}">
                <button 
                  class="btn btn-primary" 
                  part="api-button"
                  @click=${()=>this.triggerAPICall()} 
                  ?disabled=${this.isButtonDisabled()}
                >
                  ${this.isLoading?f`<span class="spinner"></span>Calling API...`:this.btnText}
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
      `:this.btnVisible?f`
      <div class="plugin-container">
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            <button 
              class="btn btn-primary" 
              part="api-button"
              @click=${()=>this.triggerAPICall()} 
              ?disabled=${this.isButtonDisabled()}
            >
              ${this.isLoading?f`<span class="spinner"></span>Processing...`:this.btnText}
            </button>
          </div>
          ${this.renderResponseAlert()}
        </div>
      </div>
    `:f`<div class="plugin-container" style="display: none;"></div>`}renderResponseAlert(){var d;let s=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3,i=this.countdownEnabled&&this.lastApiCallTime>0&&s<r;if(this.formValidationError)return f`
        <div class="alert alert-error" part="validation-alert">
          <div>
            <span class="alert-icon">✗</span>
            <strong>Validation Error:</strong> ${this.formValidationError}
          </div>
        </div>
      `;if(i&&this.showCooldownAlert){let p=Math.ceil((r-s)/1e3);return f`
        <div class="alert alert-info" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${p} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let o=`alert-${this.responseType}`,a=this.getAlertIcon(this.responseType),l=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),c=this.getCustomMessage(this.responseType);return this.responseType==="success"?f`
        <div class="alert ${o}" part="response-alert">
          <div>
            <span class="alert-icon">${a}</span>
            <strong>${l}:</strong> ${c}
          </div>
        </div>
      `:f`
      <div class="alert ${o}" part="response-alert">
        <div>
          <span class="alert-icon">${a}</span>
          <strong>${l}:</strong> ${c}
        </div>
        ${(d=this.value)!=null&&d.message?f`
          <div class="alert-response">
            ${this.value.message}
          </div>
        `:""}
      </div>
    `}getAlertIcon(e){switch(e){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}getCustomMessage(e){switch(e){case"success":return this.successMessage;case"warning":return this.warningMessage;case"error":return this.errorMessage;default:return"Unknown response type"}}updated(e){e.has("value")&&this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),e.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger()}validateNintexForm(){let e=document.querySelector("form");if(!e)return console.warn("No form found for validation"),!0;let s=e.checkValidity();return s||e.reportValidity(),s}handleAPICallTrigger(){if(this.sendAPICall=!1,this.formValidationError="",this.formValidation&&!this.validateNintexForm()){this.formValidationError="Please fill in all required fields correctly before submitting.",this.requestUpdate();return}if(!(!this.allowMultipleAPICalls&&this.hasSuccessfulCall)){if(this.countdownEnabled){let s=Date.now()-this.lastApiCallTime,r=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&s<r){this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}this.handleApiCall()}}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls){let r=this.isLoading;return this.debugMode&&console.log("Button disabled check - multiple calls allowed:",{isLoading:this.isLoading,btnEnabled:this.btnEnabled,result:r,note:"btnEnabled is ignored when allowMultipleAPICalls=true"}),r}let e=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning"),s=this.isLoading||!this.btnEnabled||e;return this.debugMode&&console.log("Button disabled check - single call only:",{isLoading:this.isLoading,btnEnabled:this.btnEnabled,permanentlyDisabled:e,hasSuccessfulCall:this.hasSuccessfulCall,responseType:this.responseType,result:s}),s}setActiveTab(e){this.activeDebugTab=e,this.requestUpdate()}renderPropertiesTab(){let e=[{name:"btnText",default:"Send API Call",current:this.btnText},{name:"btnAlignment",default:"left",current:this.btnAlignment},{name:"btnVisible",default:!0,current:this.btnVisible},{name:"btnEnabled",default:!0,current:this.btnEnabled},{name:"debugMode",default:!1,current:this.debugMode},{name:"countdownEnabled",default:!0,current:this.countdownEnabled},{name:"countdownTimer",default:5,current:this.countdownTimer},{name:"allowMultipleAPICalls",default:!1,current:this.allowMultipleAPICalls},{name:"sendAPICall",default:!1,current:this.sendAPICall},{name:"bearerToken",default:"",current:this.bearerToken?"***"+this.bearerToken.slice(-4):""},{name:"successMessage",default:"API call completed successfully",current:this.successMessage},{name:"warningMessage",default:"API call completed with warnings",current:this.warningMessage},{name:"errorMessage",default:"API call failed",current:this.errorMessage}];return f`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(s=>f`
            <tr>
              <td><code>${s.name}</code></td>
              <td>${this.formatValue(s.default)}</td>
              <td>${this.formatValue(s.current)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}renderRequestDetailsTab(){return f`
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
              ${this.requestHeaders?f`
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
              ${this.requestBody?f`
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
          ${this.apiResponse?f`
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
    `}renderAPIToolsTab(){let e=this.isValidJson(this.requestBody),s=this.getJsonStatus(this.requestBody);return f`
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
    `}renderResponseFormatterTab(){let e=this.formatterJsonInput.trim().length>0,s=e&&this.isValidJson(this.formatterJsonInput),r=null,i="";if(e)try{r=JSON.parse(this.formatterJsonInput)}catch(o){i=o.message}return f`
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
          ${i?f`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
        </div>

        ${s&&r?f`
          <div class="form-group">
            <label class="control-label">Select Fields to Display</label>
            <div style="max-height: 400px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px;">
              ${this.renderFieldSelector(r,"")}
            </div>
          </div>

          ${this.formatterSelectedFields.size>0?f`
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
    `}renderFieldSelector(e,s){let r=[],i=(o,a)=>{o&&typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).forEach(l=>{var p,y;let c=a?`${a}.${l}`:l,d=o[l];if(d!==null&&typeof d!="object"){let g=c,T=((p=this.formatterSelectedFields.get(g))==null?void 0:p.checked)||!1,Ve=((y=this.formatterSelectedFields.get(g))==null?void 0:y.title)||"";r.push(f`
              <div style="display: flex; align-items: center; margin-bottom: 12px; gap: 12px;">
                <input 
                  type="checkbox" 
                  .checked=${T}
                  @change=${K=>{let Z=K.target,G=this.formatterSelectedFields.get(g)||{title:"",checked:!1};this.formatterSelectedFields.set(g,H(x({},G),{checked:Z.checked})),this.requestUpdate()}}
                  style="width: 18px; height: 18px; cursor: pointer;"
                />
                <div style="flex: 1;">
                  <div style="font-weight: 500; margin-bottom: 4px;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px;">${g}</code>
                  </div>
                  <div style="font-size: 12px; color: var(--ntx-form-theme-color-secondary);">Value: ${String(d)}</div>
                </div>
                ${T?f`
                  <input 
                    type="text" 
                    class="form-control"
                    placeholder="Custom title (optional)"
                    .value=${Ve}
                    @input=${K=>{let Z=K.target,G=this.formatterSelectedFields.get(g)||{title:"",checked:!1};this.formatterSelectedFields.set(g,H(x({},G),{title:Z.value})),this.requestUpdate()}}
                    style="max-width: 250px; font-size: 13px;"
                  />
                `:""}
              </div>
            `)}else d&&typeof d=="object"&&!Array.isArray(d)&&i(d,c)})};return i(e,s),r}renderFormattedPreview(e){let s=[];return this.formatterSelectedFields.forEach((r,i)=>{if(r.checked){let o=this.extractNestedValue(e,i),a=r.title||i;s.push(f`
          <div style="margin-bottom: 8px;">
            <strong>${a}:</strong> ${o!==void 0?String(o):"N/A"}
          </div>
        `)}}),s.length>0?s:f`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`}generateResponseConfig(){let e={fields:[]};return this.formatterSelectedFields.forEach((s,r)=>{s.checked&&e.fields.push({path:r,title:s.title||r})}),JSON.stringify(e,null,2)}formatValue(e){return typeof e=="boolean"?e.toString():typeof e=="string"?`"${e}"`:typeof e=="number"?e.toString():e===null?"null":e===void 0?"undefined":JSON.stringify(e)}formatJsonForDisplay(e){try{let s=JSON.parse(e);return JSON.stringify(s,null,2)}catch(s){return e}}isValidJson(e){if(!e.trim())return!0;try{return JSON.parse(e),!0}catch(s){return!1}}getJsonStatus(e){if(!e.trim())return"Empty";try{let s=JSON.parse(e),r=e.length,i=e.split(`
`).length,o=this.countJsonKeys(s);return`Valid JSON \u2022 ${r} chars \u2022 ${i} lines \u2022 ${o} keys`}catch(s){return`Invalid JSON \u2022 ${s.message}`}}countJsonKeys(e){return typeof e!="object"||e===null?0:Array.isArray(e)?e.reduce((s,r)=>s+this.countJsonKeys(r),0):Object.keys(e).length+Object.values(e).reduce((s,r)=>s+this.countJsonKeys(r),0)}formatJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}catch(e){}}minifyJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e),this.requestUpdate()}catch(e){}}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){let e={startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:"req-"+Date.now()}}}};this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}handleJsonInput(e){let s=e.target;this.requestBody=s.value,this.requestUpdate()}handleJsonBlur(e){if(this.isValidJson(this.requestBody)&&this.requestBody.trim())try{let s=JSON.parse(this.requestBody),r=JSON.stringify(s,null,2);r!==this.requestBody&&(this.requestBody=r,this.requestUpdate())}catch(s){}}handleJsonPaste(e){setTimeout(()=>{this.isValidJson(this.requestBody)&&this.formatJson()},100)}renderJsonOutput(){if(!this.requestBody.trim())return"";let e="",s="",r="";try{let i=JSON.parse(this.requestBody);e=JSON.stringify(i),s='"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}catch(i){r=i.message}return f`
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
        ${r?f`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${r}</div>`:""}
      </div>
    `}renderJsonPreview(){if(!this.requestBody.trim()||!this.isValidJson(this.requestBody))return"";try{let e=JSON.parse(this.requestBody);return f`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(e,0)}
          </div>
        </div>
      `}catch(e){return""}}renderJsonWithSyntaxHighlight(e,s=0){let r="  ".repeat(s);if(e===null)return'<span class="json-syntax-null">null</span>';if(typeof e=="string")return`<span class="json-syntax-string">"${e}"</span>`;if(typeof e=="number")return`<span class="json-syntax-number">${e}</span>`;if(typeof e=="boolean")return`<span class="json-syntax-boolean">${e}</span>`;if(Array.isArray(e))return e.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${e.map(o=>`${r}  ${this.renderJsonWithSyntaxHighlight(o,s+1)}`).join(`,
`)}
${r}<span class="json-syntax-punctuation">]</span>`;if(typeof e=="object"){let i=Object.keys(e);return i.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${i.map(a=>`${r}  <span class="json-syntax-key">"${a}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(e[a],s+1)}`).join(`,
`)}
${r}<span class="json-syntax-punctuation">}</span>`}return String(e)}static removeInstructionalPlaceholders(e){if(Array.isArray(e))return e.map(s=>this.removeInstructionalPlaceholders(s));if(e&&typeof e=="object"){let s={};for(let[r,i]of Object.entries(e)){if(typeof i=="string"&&/^<.*>$/.test(i.trim()))continue;let o=this.removeInstructionalPlaceholders(i);o!==void 0&&!(typeof o=="object"&&o!==null&&Object.keys(o).length===0)&&(s[r]=o)}return s}return e}async fetchOAuthToken(){let e=await fetch(this.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:this.clientId,client_secret:this.clientSecret})});if(!e.ok)throw new Error(`Token request failed with status ${e.status}`);let s=await e.json();if(!s.access_token)throw new Error("No access_token in response");return s.access_token}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let e=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{e=await this.fetchOAuthToken()}catch(o){let a=Date.now()-this.apiCallStartTime,l=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${o instanceof Error?o.message:String(o)}`,this.value={success:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:this.errorMessage,timestamp:l,executionTime:a},this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),this.isLoading=!1,this.requestUpdate();return}let s=this.apiUrl||"",r={};if(this.requestHeaders)try{r=JSON.parse(this.requestHeaders)}catch(o){r={},this.requestHeaders.split(/\r?\n/).forEach(a=>{let l=a.indexOf(":");if(l>-1){let c=a.slice(0,l).trim(),d=a.slice(l+1).trim();c&&(r[c]=d)}})}e&&e.trim()&&(r.Authorization=`Bearer ${e.trim()}`);let i;if(this.contentType==="application/x-www-form-urlencoded")i=this.requestBody||"";else if(this.contentType==="application/json")if(this.requestBody&&this.requestBody.trim())try{i=JSON.parse(this.requestBody)}catch(o){i=void 0}else i=void 0;else i=this.requestBody||"";await Je({url:s,method:this.method||"POST",headers:r,requestBody:i,contentType:this.contentType,setLoading:o=>{this.isLoading=o,this.requestUpdate()},setResponse:(o,a,l)=>{let c=Date.now()-this.apiCallStartTime,d=new Date().toISOString();this.apiResponse=o,this.responseType=l===!1?"error":this.determineResponseType(o);let p,y;try{let g=JSON.parse(o);g.access_token&&(p=g.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(y=this.extractNestedValue(g,this.outputValueKey))}catch(g){}this.value=x(x({success:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:a||(this.responseType==="success"?200:500),responseType:this.responseType,data:o,message:this.getCustomMessage(this.responseType),timestamp:d,executionTime:c},p&&{access_token:p}),y!==void 0&&{output:y}),(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),this.requestUpdate()}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let s=JSON.parse(e);if(s.error||s.status==="error")return"error";if(s.warning||s.status==="warning")return"warning"}catch(s){}return"success"}extractNestedValue(e,s){if(e&&typeof e=="object"&&s in e)return e[s];let r=s.split("."),i=e;for(let o of r)if(i&&typeof i=="object"&&o in i)i=i[o];else return;return i}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch(s){console.error("Failed to copy text:",s)}}startCooldownTimer(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=()=>{let r=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;r<i?(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(e,1e3)):(this.showCooldownAlert=!1,this.cooldownTimerId=null,this.requestUpdate())};this.cooldownTimerId=window.setTimeout(e,1e3)}disconnectedCallback(){super.disconnectedCallback(),this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null)}};u.styles=X`
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
  `,h([m({type:String})],u.prototype,"label",2),h([m({type:String})],u.prototype,"description",2),h([m({type:Boolean})],u.prototype,"readOnly",2),h([m({type:Object})],u.prototype,"value",2),h([m({type:String})],u.prototype,"requestBody",2),h([m({type:String})],u.prototype,"apiUrl",2),h([m({type:String})],u.prototype,"requestHeaders",2),h([m({type:String})],u.prototype,"bearerToken",2),h([m({type:String})],u.prototype,"tokenUrl",2),h([m({type:String})],u.prototype,"clientId",2),h([m({type:String})],u.prototype,"clientSecret",2),h([m({type:String})],u.prototype,"outputValueKey",2),h([m({type:String})],u.prototype,"responseConfig",2),h([m({type:String})],u.prototype,"contentType",2),h([m({type:Boolean})],u.prototype,"debugMode",2),h([m({type:String})],u.prototype,"method",2),h([m({type:String})],u.prototype,"successMessage",2),h([m({type:String})],u.prototype,"warningMessage",2),h([m({type:String})],u.prototype,"errorMessage",2),h([m({type:Boolean})],u.prototype,"sendAPICall",2),h([m({type:Boolean})],u.prototype,"allowMultipleAPICalls",2),h([m({type:Boolean})],u.prototype,"countdownEnabled",2),h([m({type:Number})],u.prototype,"countdownTimer",2),h([m({type:Boolean})],u.prototype,"btnEnabled",2),h([m({type:String})],u.prototype,"btnText",2),h([m({type:String})],u.prototype,"btnAlignment",2),h([m({type:Boolean})],u.prototype,"btnVisible",2),h([m({type:Boolean})],u.prototype,"formValidation",2),u=h([Ue("daf-webrequest-plugin")],u);export{u as DafWebRequestPlugin};
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
