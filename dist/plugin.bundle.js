var pe=Object.defineProperty,Je=Object.defineProperties,je=Object.getOwnPropertyDescriptor,qe=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var ce=(n,s,e)=>s in n?pe(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e,w=(n,s)=>{for(var e in s||(s={}))Re.call(s,e)&&ce(n,e,s[e]);if(de)for(var e of de(s))Fe.call(s,e)&&ce(n,e,s[e]);return n},H=(n,s)=>Je(n,qe(s));var m=(n,s,e,t)=>{for(var o=t>1?void 0:t?je(s,e):s,i=n.length-1,r;i>=0;i--)(r=n[i])&&(o=(t?r(s,e,o):r(o))||o);return t&&o&&pe(s,e,o),o};var B=globalThis,L=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),ue=new WeakMap,N=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o,e=this.t;if(L&&s===void 0){let t=e!==void 0&&e.length===1;t&&(s=ue.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&ue.set(e,s))}return s}toString(){return this.cssText}},he=n=>new N(typeof n=="string"?n:n+"",void 0,G),Q=(n,...s)=>{let e=n.length===1?n[0]:s.reduce((t,o,i)=>t+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new N(e,n,G)},me=(n,s)=>{if(L)n.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of s){let t=document.createElement("style"),o=B.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=e.cssText,n.appendChild(t)}},Z=L?n=>n:n=>n instanceof CSSStyleSheet?(s=>{let e="";for(let t of s.cssRules)e+=t.cssText;return he(e)})(n):n;var{is:He,defineProperty:Be,getOwnPropertyDescriptor:Le,getOwnPropertyNames:ze,getOwnPropertySymbols:De,getPrototypeOf:Ke}=Object,A=globalThis,fe=A.trustedTypes,Ge=fe?fe.emptyScript:"",Y=A.reactiveElementPolyfillSupport,V=(n,s)=>n,M={toAttribute(n,s){switch(s){case Boolean:n=n?Ge:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,s){let e=n;switch(s){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(t){e=null}}return e}},z=(n,s)=>!He(n,s),ge={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:z},be,ye;(be=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(ye=A.litPropertyMetadata)!=null||(A.litPropertyMetadata=new WeakMap);var $=class extends HTMLElement{static addInitializer(s){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,e=ge){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(s)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(s,e),!e.noAccessor){let t=Symbol(),o=this.getPropertyDescriptor(s,t,e);o!==void 0&&Be(this.prototype,s,o)}}static getPropertyDescriptor(s,e,t){var r;let{get:o,set:i}=(r=Le(this.prototype,s))!=null?r:{get(){return this[e]},set(a){this[e]=a}};return{get:o,set(a){let l=o==null?void 0:o.call(this);i==null||i.call(this,a),this.requestUpdate(s,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){var e;return(e=this.elementProperties.get(s))!=null?e:ge}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;let s=Ke(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){let e=this.properties,t=[...ze(e),...De(e)];for(let o of t)this.createProperty(o,e[o])}let s=this[Symbol.metadata];if(s!==null){let e=litPropertyMetadata.get(s);if(e!==void 0)for(let[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let o=this._$Eu(e,t);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){let e=[];if(Array.isArray(s)){let t=new Set(s.flat(1/0).reverse());for(let o of t)e.unshift(Z(o))}else s!==void 0&&e.push(Z(s));return e}static _$Eu(s,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var s;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(s=this.constructor.l)==null||s.forEach(e=>e(this))}addController(s){var e,t;((e=this._$EO)!=null?e:this._$EO=new Set).add(s),this.renderRoot!==void 0&&this.isConnected&&((t=s.hostConnected)==null||t.call(s))}removeController(s){var e;(e=this._$EO)==null||e.delete(s)}_$E_(){let s=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(s.set(t,this[t]),delete this[t]);s.size>0&&(this._$Ep=s)}createRenderRoot(){var e;let s=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return me(s,this.constructor.elementStyles),s}connectedCallback(){var s,e;(s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(s){}disconnectedCallback(){var s;(s=this._$EO)==null||s.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(s,e,t){this._$AK(s,t)}_$ET(s,e){var i;let t=this.constructor.elementProperties.get(s),o=this.constructor._$Eu(s,t);if(o!==void 0&&t.reflect===!0){let r=(((i=t.converter)==null?void 0:i.toAttribute)!==void 0?t.converter:M).toAttribute(e,t.type);this._$Em=s,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(s,e){var i,r,a,l;let t=this.constructor,o=t._$Eh.get(s);if(o!==void 0&&this._$Em!==o){let d=t.getPropertyOptions(o),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)==null?void 0:i.fromAttribute)!==void 0?d.converter:M;this._$Em=o,this[o]=(l=(a=c.fromAttribute(e,d.type))!=null?a:(r=this._$Ej)==null?void 0:r.get(o))!=null?l:null,this._$Em=null}}requestUpdate(s,e,t){var o,i;if(s!==void 0){let r=this.constructor,a=this[s];if(t!=null||(t=r.getPropertyOptions(s)),!(((o=t.hasChanged)!=null?o:z)(a,e)||t.useDefault&&t.reflect&&a===((i=this._$Ej)==null?void 0:i.get(s))&&!this.hasAttribute(r._$Eu(s,t))))return;this.C(s,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(s,e,{useDefault:t,reflect:o,wrapped:i},r){var a,l,d;t&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(s)&&(this._$Ej.set(s,(l=r!=null?r:e)!=null?l:this[s]),i!==!0||r!==void 0)||(this._$AL.has(s)||(this.hasUpdated||t||(e=void 0),this._$AL.set(s,e)),o===!0&&this._$Em!==s&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(s))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t,o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,a]of i){let{wrapped:l}=a,d=this[r];l!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,a,d)}}let s=!1,e=this._$AL;try{s=this.shouldUpdate(e),s?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EM()}catch(i){throw s=!1,this._$EM(),i}s&&this._$AE(e)}willUpdate(s){}_$AE(s){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostUpdated)==null?void 0:o.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(s){}firstUpdated(s){}},ve;$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[V("elementProperties")]=new Map,$[V("finalized")]=new Map,Y==null||Y({ReactiveElement:$}),((ve=A.reactiveElementVersions)!=null?ve:A.reactiveElementVersions=[]).push("2.1.0");var J=globalThis,D=J.trustedTypes,xe=D?D.createPolicy("lit-html",{createHTML:n=>n}):void 0,_e="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+S,Qe=`<${Ee}>`,E=document,j=()=>E.createComment(""),q=n=>n===null||typeof n!="object"&&typeof n!="function",ie=Array.isArray,Ze=n=>ie(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",X=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,we=/>/g,C=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Se=/"/g,ke=/^(?:script|style|textarea|title)$/i,ne=n=>(s,...e)=>({_$litType$:n,strings:s,values:e}),p=ne(1),it=ne(2),nt=ne(3),k=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Te=new WeakMap,_=E.createTreeWalker(E,129);function Ie(n,s){if(!ie(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(s):s}var Ye=(n,s)=>{let e=n.length-1,t=[],o,i=s===2?"<svg>":s===3?"<math>":"",r=U;for(let a=0;a<e;a++){let l=n[a],d,c,u=-1,g=0;for(;g<l.length&&(r.lastIndex=g,c=r.exec(l),c!==null);)g=r.lastIndex,r===U?c[1]==="!--"?r=$e:c[1]!==void 0?r=we:c[2]!==void 0?(ke.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=C):c[3]!==void 0&&(r=C):r===C?c[0]===">"?(r=o!=null?o:U,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?C:c[3]==='"'?Se:Ae):r===Se||r===Ae?r=C:r===$e||r===we?r=U:(r=C,o=void 0);let b=r===C&&n[a+1].startsWith("/>")?" ":"";i+=r===U?l+Qe:u>=0?(t.push(d),l.slice(0,u)+_e+l.slice(u)+S+b):l+S+(u===-2?a:b)}return[Ie(n,i+(n[e]||"<?>")+(s===2?"</svg>":s===3?"</math>":"")),t]},R=class n{constructor({strings:s,_$litType$:e},t){let o;this.parts=[];let i=0,r=0,a=s.length-1,l=this.parts,[d,c]=Ye(s,e);if(this.el=n.createElement(d,t),_.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=_.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(_e)){let g=c[r++],b=o.getAttribute(u).split(S),x=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:x[2],strings:b,ctor:x[1]==="."?te:x[1]==="?"?se:x[1]==="@"?oe:O}),o.removeAttribute(u)}else u.startsWith(S)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(ke.test(o.tagName)){let u=o.textContent.split(S),g=u.length-1;if(g>0){o.textContent=D?D.emptyScript:"";for(let b=0;b<g;b++)o.append(u[b],j()),_.nextNode(),l.push({type:2,index:++i});o.append(u[g],j())}}}else if(o.nodeType===8)if(o.data===Ee)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(S,u+1))!==-1;)l.push({type:7,index:i}),u+=S.length-1}i++}}static createElement(s,e){let t=E.createElement("template");return t.innerHTML=s,t}};function P(n,s,e=n,t){var r,a,l;if(s===k)return s;let o=t!==void 0?(r=e._$Co)==null?void 0:r[t]:e._$Cl,i=q(s)?void 0:s._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,e,t)),t!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[t]=o:e._$Cl=o),o!==void 0&&(s=P(n,o._$AS(n,s.values),o,t)),s}var ee=class{constructor(s,e){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){var d;let{el:{content:e},parts:t}=this._$AD,o=((d=s==null?void 0:s.creationScope)!=null?d:E).importNode(e,!0);_.currentNode=o;let i=_.nextNode(),r=0,a=0,l=t[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new F(i,i.nextSibling,this,s):l.type===1?c=new l.ctor(i,l.name,l.strings,this,s):l.type===6&&(c=new re(i,this,s)),this._$AV.push(c),l=t[++a]}r!==(l==null?void 0:l.index)&&(i=_.nextNode(),r++)}return _.currentNode=E,o}p(s){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(s,t,e),e+=t.strings.length-2):t._$AI(s[e])),e++}},F=class n{get _$AU(){var s,e;return(e=(s=this._$AM)==null?void 0:s._$AU)!=null?e:this._$Cv}constructor(s,e,t,o){var i;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=s,this._$AB=e,this._$AM=t,this.options=o,this._$Cv=(i=o==null?void 0:o.isConnected)!=null?i:!0}get parentNode(){let s=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(s==null?void 0:s.nodeType)===11&&(s=e.parentNode),s}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(s,e=this){s=P(this,s,e),q(s)?s===y||s==null||s===""?(this._$AH!==y&&this._$AR(),this._$AH=y):s!==this._$AH&&s!==k&&this._(s):s._$litType$!==void 0?this.$(s):s.nodeType!==void 0?this.T(s):Ze(s)?this.k(s):this._(s)}O(s){return this._$AA.parentNode.insertBefore(s,this._$AB)}T(s){this._$AH!==s&&(this._$AR(),this._$AH=this.O(s))}_(s){this._$AH!==y&&q(this._$AH)?this._$AA.nextSibling.data=s:this.T(E.createTextNode(s)),this._$AH=s}$(s){var i;let{values:e,_$litType$:t}=s,o=typeof t=="number"?this._$AC(s):(t.el===void 0&&(t.el=R.createElement(Ie(t.h,t.h[0]),this.options)),t);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(e);else{let r=new ee(o,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(s){let e=Te.get(s.strings);return e===void 0&&Te.set(s.strings,e=new R(s)),e}k(s){ie(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,o=0;for(let i of s)o===e.length?e.push(t=new n(this.O(j()),this.O(j()),this,this.options)):t=e[o],t._$AI(i),o++;o<e.length&&(this._$AR(t&&t._$AB.nextSibling,o),e.length=o)}_$AR(s=this._$AA.nextSibling,e){var t;for((t=this._$AP)==null?void 0:t.call(this,!1,!0,e);s&&s!==this._$AB;){let o=s.nextSibling;s.remove(),s=o}}setConnected(s){var e;this._$AM===void 0&&(this._$Cv=s,(e=this._$AP)==null||e.call(this,s))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(s,e,t,o,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=s,this.name=e,this._$AM=o,this.options=i,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=y}_$AI(s,e=this,t,o){let i=this.strings,r=!1;if(i===void 0)s=P(this,s,e,0),r=!q(s)||s!==this._$AH&&s!==k,r&&(this._$AH=s);else{let a=s,l,d;for(s=i[0],l=0;l<i.length-1;l++)d=P(this,a[t+l],e,l),d===k&&(d=this._$AH[l]),r||(r=!q(d)||d!==this._$AH[l]),d===y?s=y:s!==y&&(s+=(d!=null?d:"")+i[l+1]),this._$AH[l]=d}r&&!o&&this.j(s)}j(s){s===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,s!=null?s:"")}},te=class extends O{constructor(){super(...arguments),this.type=3}j(s){this.element[this.name]=s===y?void 0:s}},se=class extends O{constructor(){super(...arguments),this.type=4}j(s){this.element.toggleAttribute(this.name,!!s&&s!==y)}},oe=class extends O{constructor(s,e,t,o,i){super(s,e,t,o,i),this.type=5}_$AI(s,e=this){var r;if((s=(r=P(this,s,e,0))!=null?r:y)===k)return;let t=this._$AH,o=s===y&&t!==y||s.capture!==t.capture||s.once!==t.once||s.passive!==t.passive,i=s!==y&&(t===y||o);o&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,s),this._$AH=s}handleEvent(s){var e,t;typeof this._$AH=="function"?this._$AH.call((t=(e=this.options)==null?void 0:e.host)!=null?t:this.element,s):this._$AH.handleEvent(s)}},re=class{constructor(s,e,t){this.element=s,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(s){P(this,s)}};var W=J.litHtmlPolyfillSupport,Ce;W==null||W(R,F),((Ce=J.litHtmlVersions)!=null?Ce:J.litHtmlVersions=[]).push("3.3.0");var Pe=(n,s,e)=>{var i,r;let t=(i=e==null?void 0:e.renderBefore)!=null?i:s,o=t._$litPart$;if(o===void 0){let a=(r=e==null?void 0:e.renderBefore)!=null?r:null;t._$litPart$=o=new F(s.insertBefore(j(),a),a,void 0,e!=null?e:{})}return o._$AI(n),o};var I=globalThis,T=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=s.firstChild),s}update(s){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=Pe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return k}},Oe;T._$litElement$=!0,T.finalized=!0,(Oe=I.litElementHydrateSupport)==null||Oe.call(I,{LitElement:T});var ae=I.litElementPolyfillSupport;ae==null||ae({LitElement:T});var Ne;((Ne=I.litElementVersions)!=null?Ne:I.litElementVersions=[]).push("4.2.0");async function Ve({url:n,method:s="POST",headers:e={},requestBody:t,contentType:o="application/json",setLoading:i,setResponse:r}){i(!0),r("",0,!1);try{let a,l=w({Accept:"application/json"},e);["POST","PUT","PATCH","DELETE"].includes(s.toUpperCase())&&t!=null&&t!==""&&(o==="application/json"?(l["Content-Type"]="application/json",a=typeof t=="string"?t:JSON.stringify(t)):o==="application/x-www-form-urlencoded"?(l["Content-Type"]="application/x-www-form-urlencoded",typeof t=="string"?a=t:typeof t=="object"&&t!==null&&(a=Object.keys(t).map(u=>`${encodeURIComponent(u)}=${encodeURIComponent(t[u])}`).join("&"))):(l["Content-Type"]=o,a=typeof t=="string"?t:JSON.stringify(t)));let d=await fetch(n,{method:s,headers:l,body:a}),c=await d.text();r(c,d.status,d.ok)}catch(a){r("Error: "+((a==null?void 0:a.message)||a),0,!1)}finally{i(!1)}}var Me=n=>(s,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,s)}):customElements.define(n,s)};var Xe={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:z},We=(n=Xe,s,e)=>{let{kind:t,metadata:o}=e,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),t==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),t==="accessor"){let{name:r}=e;return{set(a){let l=s.get.call(this);s.set.call(this,a),this.requestUpdate(r,l,n)},init(a){return a!==void 0&&this.C(r,void 0,n,a),a}}}if(t==="setter"){let{name:r}=e;return function(a){let l=this[r];s.call(this,a),this.requestUpdate(r,l,n)}}throw Error("Unsupported decorator location: "+t)};function f(n){return(s,e)=>typeof e=="object"?We(n,s,e):((t,o,i)=>{let r=o.hasOwnProperty(i);return o.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(o,i):void 0})(n,s,e)}var h=class extends T{constructor(){super();this.activeDebugTab="properties";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this._value={success:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0};this._btnEnabled=!0;this._btnVisible=!0;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.cooldownTimerId=null;this.formValidationError="";this.oauthTokenResponse=null;this.label="",this.description="",this.readOnly=!1,this.requestBody="",this.apiUrl="",this.requestHeaders="",this.bearerToken="",this.tokenUrl="",this.clientId="",this.clientSecret="",this.outputValueKey="",this.contentType="application/json",this.debugMode=!1,this.method="POST",this.successMessage="API call completed successfully",this.warningMessage="API call completed with warnings",this.errorMessage="API call failed",this.sendAPICall=!1,this.allowMultipleAPICalls=!1,this.countdownEnabled=!1,this.countdownTimer=5,this._btnEnabled=!0,this.btnText="Send API Request",this.btnAlignment="left",this._btnVisible=!0,this.formValidation=!1,this.submissionAction="no-submit",this.submitHidden=!1}get value(){return this._value}set value(e){let t=this._value;this._value=e,console.log("[Value Setter] Value changed, dispatching ntx-value-change event",e),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:e,bubbles:!0,composed:!0})),this.requestUpdate("value",t)}get btnEnabled(){return this._btnEnabled}set btnEnabled(e){let t=this._btnEnabled;this._btnEnabled=e,console.log(`[Property Setter] btnEnabled changed from ${t} to ${e}`),this.requestUpdate("btnEnabled",t)}get btnVisible(){return this._btnVisible}set btnVisible(e){let t=this._btnVisible;this._btnVisible=e,console.log(`[Property Setter] btnVisible changed from ${t} to ${e}`),this.requestUpdate("btnVisible",t)}connectedCallback(){super.connectedCallback(),this.toggleSubmitButtonVisibility()}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional: Bearer token value for Authorization header (used if Token URL is not provided)",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional: OAuth token endpoint URL e.g. https://api.example.com/oauth2/v1/token",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional: JSON key path to extract from response",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"Actual message from API response"},formattedResponse:{type:"string",title:"Formatted Response",description:"Formatted response message based on Success/Warning/Error Message configuration"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},formValidation:{type:"boolean",title:"Validate Form Before API Call",description:"If true, validates the entire Nintex form before making the API call. Only proceeds if all required fields are valid.",defaultValue:!1},submissionAction:{type:"string",title:"Submission Action",description:'Action to take after a successful API call. Set to "only-submit" to skip API call and directly submit the form.',enum:["no-submit","quick-submit","delayed-submit","only-submit"],defaultValue:"no-submit"},submitHidden:{type:"boolean",title:"Hide Submit Button",description:"If true, hides the Nintex form submit button from users.",defaultValue:!1}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}}}render(){return this.debugMode?p`
        <div class="plugin-container">
          ${this.btnVisible?p`
            <div class="form-group">
              <div class="btn-container align-${this.btnAlignment}">
                <button 
                  class="btn btn-primary" 
                  part="api-button"
                  @click=${()=>this.triggerAPICall()} 
                  ?disabled=${this.isButtonDisabled()}
                >
                  ${this.isLoading?p`<span class="spinner"></span>Calling API...`:this.btnText}
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
      `:this.btnVisible?p`
      <div class="plugin-container">
        <div class="form-group">
          <div class="btn-container align-${this.btnAlignment}">
            <button 
              class="btn btn-primary" 
              part="api-button"
              @click=${()=>this.triggerAPICall()} 
              ?disabled=${this.isButtonDisabled()}
            >
              ${this.isLoading?p`<span class="spinner"></span>Processing...`:this.btnText}
            </button>
          </div>
          ${this.renderResponseAlert()}
        </div>
      </div>
    `:p`<div class="plugin-container" style="display: none;"></div>`}renderResponseAlert(){var b;let t=Date.now()-this.lastApiCallTime,o=this.countdownTimer*1e3,i=this.countdownEnabled&&this.lastApiCallTime>0&&t<o,r=this.submissionAction==="delayed-submit"&&this.cooldownTimerId!==null&&(this.responseType==="success"||this.responseType==="warning");if(this.formValidationError)return p`
        <div class="alert alert-error" part="validation-alert">
          <div>
            <span class="alert-icon">✗</span>
            <strong>Validation Error:</strong> ${this.formValidationError}
          </div>
        </div>
      `;if(i&&this.showCooldownAlert){let x=Math.ceil((o-t)/1e3);return p`
        <div class="alert alert-info" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${x} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let a=`alert-${this.responseType}`,l=this.getAlertIcon(this.responseType),d=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),c=this.getCustomMessage(this.responseType),u=0;r&&(u=Math.ceil((o-t)/1e3));let g=c.includes(`
`);return this.responseType==="success"?p`
        <div class="alert ${a}" part="response-alert">
          <div>
            <span class="alert-icon">${l}</span>
            <strong>${d}</strong>
          </div>
          ${g?p`
            <div class="alert-response" style="white-space: pre-line; margin-top: 8px;">
              ${c}
            </div>
          `:p`
            <div style="display: inline; margin-left: 4px;">
              ${c}
            </div>
          `}
          ${r?p`
            <div class="alert-response">
              Submitting form in ${u} seconds...
            </div>
          `:""}
        </div>
      `:p`
      <div class="alert ${a}" part="response-alert">
        <div>
          <span class="alert-icon">${l}</span>
          <strong>${d}</strong>
        </div>
        ${g?p`
          <div class="alert-response" style="white-space: pre-line; margin-top: 8px;">
            ${c}
          </div>
        `:p`
          <div style="display: inline; margin-left: 4px;">
            ${c}
          </div>
        `}
        ${(b=this.value)!=null&&b.message?p`
          <div class="alert-response">
            ${this.value.message}
          </div>
        `:""}
        ${r?p`
          <div class="alert-response">
            Submitting form in ${u} seconds...
          </div>
        `:""}
      </div>
    `}getAlertIcon(e){switch(e){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}getCustomMessage(e){let t;switch(e){case"success":t=this.successMessage;break;case"warning":t=this.warningMessage;break;case"error":t=this.errorMessage;break;default:t="Unknown response type"}if(t.startsWith('"{')&&t.endsWith('}"'))try{let o=t.slice(1,-1).replace(/\\"/g,'"'),i=JSON.parse(o);return this.formatResponseWithConfig(i)}catch(o){return console.error("[Message Formatting] Failed to parse quoted config:",o),t}if(t.trim().startsWith('{"fields"')&&t.trim().endsWith("}"))try{let o=JSON.parse(t);return this.formatResponseWithConfig(o)}catch(o){return console.error("[Message Formatting] Failed to parse unquoted config:",o),t}return t}formatResponseWithConfig(e){if(!e.fields||!Array.isArray(e.fields))return"Invalid configuration format";let t;try{t=JSON.parse(this.value.data)}catch(i){return console.error("[Message Formatting] Failed to parse response data:",i),"Unable to parse response data"}let o=[];return e.fields.forEach(i=>{let r=this.extractNestedValue(t,i.path),a=r!==void 0?String(r):"N/A";o.push(`${i.title}: ${a}`)}),o.join(`
`)}updated(e){e.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger(),e.has("submitHidden")&&this.toggleSubmitButtonVisibility(),e.has("btnVisible")&&(console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`),this.requestUpdate()),e.has("btnEnabled")&&(console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`),this.requestUpdate()),e.has("btnText")&&(console.log(`[UI Property Change] btnText changed to: ${this.btnText}`),this.requestUpdate()),e.has("btnAlignment")&&(console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`),this.requestUpdate()),e.has("debugMode")&&(console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`),this.requestUpdate())}toggleSubmitButtonVisibility(){let e="ntx-submit-button-hidden-style";if(this.submitHidden){if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=`
          button[data-e2e="btn-submit"] {
            display: none !important;
          }
        `,document.head.appendChild(t),console.log("[Submit Button] Hidden via CSS")}}else{let t=document.getElementById(e);t&&(t.remove(),console.log("[Submit Button] Made visible by removing CSS"))}}async validateNintexForm(){console.log("[Validation] Starting form validation...");let e=document.querySelector("form");if(!e)return console.warn("[Validation] No form found for validation"),!0;console.log("[Validation] Triggering validation on form inputs"),e.querySelectorAll("input, textarea, select").forEach(d=>{(d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement||d instanceof HTMLSelectElement)&&d.reportValidity()}),console.log("[Validation] Waiting 200ms for validation state to update..."),await new Promise(d=>setTimeout(d,200));let o=e.querySelectorAll('[aria-invalid="true"]'),i=e.querySelectorAll(":invalid"),r=e.querySelectorAll('.ntx-form-error, [class*="error-message"]'),l=o.length+i.length===0&&r.length===0;return console.log("[Validation] Invalid fields found:"),console.log("  - aria-invalid:",o.length),console.log("  - HTML5 invalid:",i.length),console.log("  - Error messages:",r.length),console.log("[Validation] Form is valid:",l),l||(console.log("[Validation] Form validation FAILED. Invalid fields:"),o.forEach((d,c)=>{console.log(`  [aria-invalid ${c+1}]`,d)}),i.forEach((d,c)=>{console.log(`  [HTML5 invalid ${c+1}]`,d)})),l}async handleAPICallTrigger(){if(console.log("[API Call] handleAPICallTrigger started"),this.sendAPICall=!1,this.formValidationError="",this.submissionAction==="only-submit"){console.log("[API Call] Submission action is only-submit - skipping API call and validation, submitting form directly"),this.submitNintexForm();return}if(this.formValidation){console.log("[API Call] Form validation is ENABLED, checking form...");let e=await this.validateNintexForm();if(console.log("[API Call] Validation result:",e),!e){console.log("[API Call] Form validation FAILED - BLOCKING API call"),this.formValidationError="Please fill in all required fields correctly before submitting.",this.requestUpdate();return}console.log("[API Call] Form validation PASSED - proceeding with API call")}else console.log("[API Call] Form validation is DISABLED");if(!this.allowMultipleAPICalls&&this.hasSuccessfulCall){console.log("[API Call] Multiple API calls not allowed and already had successful call - BLOCKING");return}if(this.countdownEnabled){let t=Date.now()-this.lastApiCallTime,o=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&t<o){console.log("[API Call] In cooldown period - BLOCKING"),this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}console.log("[API Call] All checks passed - calling handleApiCall()"),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls)return this.isLoading;let e=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning");return this.isLoading||!this.btnEnabled||e}setActiveTab(e){this.activeDebugTab=e,this.requestUpdate()}renderPropertiesTab(){let e=this.constructor.getMetaConfig(),t=[];if(e.properties)for(let[o,i]of Object.entries(e.properties))o!=="value"&&t.push({name:o,default:i.defaultValue,config:i});return t.sort((o,i)=>o.name.localeCompare(i.name)),p`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(o=>p`
            <tr>
              <td><code class="property-name">${o.name}</code></td>
              <td class="value-default">${this.formatValue(o.default)}</td>
              <td class="value-current">${this.renderPropertyInput(o.name,o.config)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}renderPropertyInput(e,t){let o=this[e],i=t.type;if(i==="boolean")return p`
        <span style="font-weight: 500; color: ${o?"#28a745":"#dc3545"};">
          ${o?"\u2713 Yes":"\u2717 No"}
        </span>
      `;if(i==="string"){let r=(e==="bearerToken"||e==="clientSecret")&&o&&o.length>0?"***"+o.slice(-4):o,a=r&&r.length>100?r.substring(0,100)+"...":r;return p`
        <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
          ${a||"<empty>"}
        </span>
      `}return i==="number"||i==="integer"?p`
        <span style="font-weight: 500;">
          ${o}
        </span>
      `:p`<span>${this.formatValue(o)}</span>`}renderRequestDetailsTab(){return p`
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
    `}renderResponseFormatterTab(){let e=this.formatterJsonInput.trim().length>0,t=e&&this.isValidJson(this.formatterJsonInput),o=null,i="";if(e)try{o=JSON.parse(this.formatterJsonInput)}catch(r){i=r.message}return p`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${r=>{let a=r.target;this.formatterJsonInput=a.value,this.formatterSelectedFields.clear(),this.requestUpdate()}}
            placeholder="Paste your API response JSON here..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${i?p`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
        </div>

        ${t&&o?p`
          <div class="form-group">
            <label class="control-label">Configure Response Fields</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <!-- Available Fields -->
              <div>
                <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--ntx-form-theme-color-input-text);">Available Fields</h4>
                <div style="max-height: 500px; overflow-y: auto; border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 12px; background: var(--ntx-form-theme-color-background);">
                  ${this.renderAvailableFields(o,"")}
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
            <div class="form-group">
              <label class="control-label">Preview</label>
              <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt);">
                ${this.renderFormattedPreview(o)}
              </div>
            </div>

            <div class="form-group">
              <label class="control-label">Response Format Configuration</label>
              <div style="position: relative;">
                <textarea 
                  class="form-control" 
                  readonly
                  rows="3"
                  .value=${this.generateResponseConfigQuoted()}
                  style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 80px;"
                ></textarea>
                <button 
                  class="btn btn-primary" 
                  style="position: absolute; top: 8px; right: 8px; padding: 4px 12px; font-size: 12px;"
                  @click=${()=>{let r=this.generateResponseConfigQuoted();this.copyToClipboard(r)}}
                  title="Copy to clipboard"
                >
                  📋 Copy
                </button>
              </div>
            </div>
          `:""}
        `:""}
      </div>
    `}renderAvailableFields(e,t){let o=[],i=(r,a)=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(l=>{var u;let d=a?`${a}.${l}`:l,c=r[l];if(c!==null&&typeof c!="object"){let g=d,b=((u=this.formatterSelectedFields.get(g))==null?void 0:u.checked)||!1;o.push(p`
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${b?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${b}
                  @change=${x=>{if(x.target.checked){let v=-1;this.formatterSelectedFields.forEach(le=>{le.order>v&&(v=le.order)}),this.formatterSelectedFields.set(g,{title:g.split(".").pop()||g,checked:!0,order:v+1})}else this.formatterSelectedFields.delete(g);this.requestUpdate()}}
                  style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                />
                <div style="flex: 1; margin-left: 10px; min-width: 0;">
                  <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${g}</code>
                  </div>
                  <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                    ${String(c).length>50?String(c).substring(0,50)+"...":String(c)}
                  </div>
                </div>
              </div>
            `)}else c&&typeof c=="object"&&!Array.isArray(c)&&i(c,d)})};return i(e,t),o.length>0?o:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`}renderSelectedFieldsList(){let e=Array.from(this.formatterSelectedFields.entries()).filter(([t,o])=>o.checked).sort((t,o)=>t[1].order-o[1].order);return e.length===0?p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`:e.map(([t,o],i)=>p`
      <div 
        draggable="true"
        @dragstart=${r=>{r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",i.toString())}}
        @dragover=${r=>{r.preventDefault(),r.dataTransfer.dropEffect="move"}}
        @drop=${r=>{r.preventDefault();let a=parseInt(r.dataTransfer.getData("text/plain")),l=i;if(a!==l){let d=Array.from(e),[c]=d.splice(a,1);d.splice(l,0,c),d.forEach(([u,g],b)=>{this.formatterSelectedFields.set(u,H(w({},g),{order:b}))}),this.requestUpdate()}}}
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
        @mouseenter=${r=>{r.currentTarget.style.borderColor="var(--ntx-form-theme-color-primary)",r.currentTarget.style.boxShadow="0 2px 4px rgba(0,0,0,0.1)"}}
        @mouseleave=${r=>{r.currentTarget.style.borderColor="var(--ntx-form-theme-color-border)",r.currentTarget.style.boxShadow="none"}}
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
            .value=${o.title}
            @input=${r=>{let a=r.target;this.formatterSelectedFields.set(t,H(w({},o),{title:a.value})),this.requestUpdate()}}
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
          @mouseenter=${r=>{r.currentTarget.style.filter="brightness(0.9)"}}
          @mouseleave=${r=>{r.currentTarget.style.filter="brightness(1)"}}
          title="Remove field"
        >
          ✕
        </button>
      </div>
    `)}renderFormattedPreview(e){let t=[];return this.formatterSelectedFields.forEach((o,i)=>{if(o.checked){let r=this.extractNestedValue(e,i),a=o.title||i;t.push(p`
          <div style="margin-bottom: 8px;">
            <strong>${a}:</strong> ${r!==void 0?String(r):"N/A"}
          </div>
        `)}}),t.length>0?t:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`}generateResponseConfig(){let e={fields:[]};return Array.from(this.formatterSelectedFields.entries()).filter(([o,i])=>i.checked).sort((o,i)=>o[1].order-i[1].order).forEach(([o,i])=>{e.fields.push({path:o,title:i.title||o})}),JSON.stringify(e,null,2)}generateResponseConfigQuoted(){let e={fields:[]};return Array.from(this.formatterSelectedFields.entries()).filter(([i,r])=>r.checked).sort((i,r)=>i[1].order-r[1].order).forEach(([i,r])=>{e.fields.push({path:i,title:r.title||i})}),`"${JSON.stringify(e).replace(/"/g,'\\"')}"`}formatValue(e){return typeof e=="boolean"?e.toString():typeof e=="string"?`"${e}"`:typeof e=="number"?e.toString():e===null?"null":e===void 0?"undefined":JSON.stringify(e)}formatJsonForDisplay(e){try{let t=JSON.parse(e);return JSON.stringify(t,null,2)}catch(t){return e}}isValidJson(e){if(!e.trim())return!0;try{return JSON.parse(e),!0}catch(t){return!1}}getJsonStatus(e){if(!e.trim())return"Empty";try{let t=JSON.parse(e),o=e.length,i=e.split(`
`).length,r=this.countJsonKeys(t);return`Valid JSON \u2022 ${o} chars \u2022 ${i} lines \u2022 ${r} keys`}catch(t){return`Invalid JSON \u2022 ${t.message}`}}countJsonKeys(e){return typeof e!="object"||e===null?0:Array.isArray(e)?e.reduce((t,o)=>t+this.countJsonKeys(o),0):Object.keys(e).length+Object.values(e).reduce((t,o)=>t+this.countJsonKeys(o),0)}formatJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}catch(e){}}minifyJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e),this.requestUpdate()}catch(e){}}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){let e={startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:"req-"+Date.now()}}}};this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}handleJsonInput(e){let t=e.target;this.requestBody=t.value,this.requestUpdate()}handleJsonBlur(e){if(this.isValidJson(this.requestBody)&&this.requestBody.trim())try{let t=JSON.parse(this.requestBody),o=JSON.stringify(t,null,2);o!==this.requestBody&&(this.requestBody=o,this.requestUpdate())}catch(t){}}handleJsonPaste(e){setTimeout(()=>{this.isValidJson(this.requestBody)&&this.formatJson()},100)}renderJsonOutput(){if(!this.requestBody.trim())return"";let e="",t="",o="";try{let i=JSON.parse(this.requestBody);e=JSON.stringify(i),t='"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}catch(i){o=i.message}return p`
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
        ${o?p`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${o}</div>`:""}
      </div>
    `}renderJsonPreview(){if(!this.requestBody.trim()||!this.isValidJson(this.requestBody))return"";try{let e=JSON.parse(this.requestBody);return p`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(e,0)}
          </div>
        </div>
      `}catch(e){return""}}renderJsonWithSyntaxHighlight(e,t=0){let o="  ".repeat(t);if(e===null)return'<span class="json-syntax-null">null</span>';if(typeof e=="string")return`<span class="json-syntax-string">"${e}"</span>`;if(typeof e=="number")return`<span class="json-syntax-number">${e}</span>`;if(typeof e=="boolean")return`<span class="json-syntax-boolean">${e}</span>`;if(Array.isArray(e))return e.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${e.map(r=>`${o}  ${this.renderJsonWithSyntaxHighlight(r,t+1)}`).join(`,
`)}
${o}<span class="json-syntax-punctuation">]</span>`;if(typeof e=="object"){let i=Object.keys(e);return i.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${i.map(a=>`${o}  <span class="json-syntax-key">"${a}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(e[a],t+1)}`).join(`,
`)}
${o}<span class="json-syntax-punctuation">}</span>`}return String(e)}static removeInstructionalPlaceholders(e){if(Array.isArray(e))return e.map(t=>this.removeInstructionalPlaceholders(t));if(e&&typeof e=="object"){let t={};for(let[o,i]of Object.entries(e)){if(typeof i=="string"&&/^<.*>$/.test(i.trim()))continue;let r=this.removeInstructionalPlaceholders(i);r!==void 0&&!(typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(t[o]=r)}return t}return e}async fetchOAuthToken(){let e=await fetch(this.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:this.clientId,client_secret:this.clientSecret})});if(!e.ok)throw new Error(`Token request failed with status ${e.status}`);let t=await e.json();if(!t.access_token)throw new Error("No access_token in response");return this.oauthTokenResponse={access_token:t.access_token,token_type:t.token_type||"Bearer",expires_in:t.expires_in,scope:t.scope,fetched_at:new Date().toISOString(),expires_at:t.expires_in?new Date(Date.now()+t.expires_in*1e3).toISOString():null},t.access_token}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let e=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{e=await this.fetchOAuthToken()}catch(r){let a=Date.now()-this.apiCallStartTime,l=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${r instanceof Error?r.message:String(r)}`,this.value={success:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:"",formattedResponse:this.errorMessage,timestamp:l,executionTime:a},this.isLoading=!1,this.requestUpdate();return}let t=this.apiUrl||"",o={};if(this.requestHeaders)try{o=JSON.parse(this.requestHeaders)}catch(r){o={},this.requestHeaders.split(/\r?\n/).forEach(a=>{let l=a.indexOf(":");if(l>-1){let d=a.slice(0,l).trim(),c=a.slice(l+1).trim();d&&(o[d]=c)}})}e&&e.trim()&&(o.Authorization=`Bearer ${e.trim()}`);let i;if(this.contentType==="application/x-www-form-urlencoded")i=this.requestBody||"";else if(this.contentType==="application/json")if(this.requestBody&&this.requestBody.trim())try{i=JSON.parse(this.requestBody)}catch(r){i=void 0}else i=void 0;else i=this.requestBody||"";await Ve({url:t,method:this.method||"POST",headers:o,requestBody:i,contentType:this.contentType,setLoading:r=>{this.isLoading=r,this.requestUpdate()},setResponse:(r,a,l)=>{let d=Date.now()-this.apiCallStartTime,c=new Date().toISOString();this.apiResponse=r,this.responseType=l===!1?"error":this.determineResponseType(r),this.formatterJsonInput=r,this.formatterSelectedFields.clear();let u,g,b="";try{let v=JSON.parse(r);v.access_token&&(u=v.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(g=this.extractNestedValue(v,this.outputValueKey)),b=this.extractNestedValue(v,"d.Message")||this.extractNestedValue(v,"Message")||this.extractNestedValue(v,"message")||this.extractNestedValue(v,"msg")||this.extractNestedValue(v,"data.message")||""}catch(v){}let x=this.getCustomMessage(this.responseType);this.value=w(w({success:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:a||(this.responseType==="success"?200:500),responseType:this.responseType,data:r,message:b,formattedResponse:x,timestamp:c,executionTime:d},u&&{access_token:u}),g!==void 0&&{output:g}),(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),console.log("[Value Change] Value updated at:",new Date().toISOString()),this.requestUpdate(),(this.responseType==="success"||this.responseType==="warning")&&(console.log("[Value Change] Waiting 800ms for Nintex to process value change..."),setTimeout(()=>{console.log("[Value Change] Wait complete at:",new Date().toISOString(),"- proceeding with submission action"),this.handlePostSubmissionAction()},800))}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let t=JSON.parse(e);if(t.error||t.status==="error")return"error";if(t.warning||t.status==="warning")return"warning"}catch(t){}return"success"}extractNestedValue(e,t){if(e&&typeof e=="object"&&t in e)return e[t];let o=t.split("."),i=e;for(let r of o)if(i&&typeof i=="object"&&r in i)i=i[r];else return;return i}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy text:",t)}}handlePostSubmissionAction(){if(console.log("[Submission Action] Checking submission action:",this.submissionAction),this.submissionAction==="no-submit"){console.log("[Submission Action] No action configured");return}if(this.submissionAction==="quick-submit"){console.log("[Submission Action] Quick submit - triggering after 500ms"),setTimeout(()=>{this.submitNintexForm()},500);return}if(this.submissionAction==="delayed-submit"){console.log("[Submission Action] Delayed submit - starting countdown timer"),this.startDelayedSubmission();return}}submitNintexForm(){console.log("[Submission Action] Attempting to submit Nintex form");let e=document.querySelector("form");if(!e){console.error("[Submission Action] No form found");return}let t=e.querySelector('button[type="submit"]');t instanceof HTMLElement?(console.log("[Submission Action] Clicking submit button"),t.click()):console.error("[Submission Action] No submit button found")}startDelayedSubmission(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=this.countdownTimer*1e3,t=Date.now(),o=()=>{let i=Date.now()-t;e-i<=0?(console.log("[Submission Action] Countdown complete - submitting form"),this.submitNintexForm(),this.cooldownTimerId=null):(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(o,100))};console.log("[Submission Action] Starting delayed submission countdown for",this.countdownTimer,"seconds"),o()}startCooldownTimer(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=()=>{let o=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;o<i?(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(e,1e3)):(this.showCooldownAlert=!1,this.cooldownTimerId=null,this.requestUpdate())};this.cooldownTimerId=window.setTimeout(e,1e3)}disconnectedCallback(){super.disconnectedCallback(),this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null)}};h.styles=Q`
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
  `,m([f({type:String})],h.prototype,"label",2),m([f({type:String})],h.prototype,"description",2),m([f({type:Boolean})],h.prototype,"readOnly",2),m([f({type:Object})],h.prototype,"value",1),m([f({type:String})],h.prototype,"requestBody",2),m([f({type:String})],h.prototype,"apiUrl",2),m([f({type:String})],h.prototype,"requestHeaders",2),m([f({type:String})],h.prototype,"bearerToken",2),m([f({type:String})],h.prototype,"tokenUrl",2),m([f({type:String})],h.prototype,"clientId",2),m([f({type:String})],h.prototype,"clientSecret",2),m([f({type:String})],h.prototype,"outputValueKey",2),m([f({type:String})],h.prototype,"contentType",2),m([f({type:Boolean,reflect:!0})],h.prototype,"debugMode",2),m([f({type:String})],h.prototype,"method",2),m([f({type:String})],h.prototype,"successMessage",2),m([f({type:String})],h.prototype,"warningMessage",2),m([f({type:String})],h.prototype,"errorMessage",2),m([f({type:Boolean,reflect:!0,attribute:"send-api-call"})],h.prototype,"sendAPICall",2),m([f({type:Boolean,reflect:!0,attribute:"allow-multiple-api-calls"})],h.prototype,"allowMultipleAPICalls",2),m([f({type:Boolean,reflect:!0,attribute:"countdown-enabled"})],h.prototype,"countdownEnabled",2),m([f({type:Number})],h.prototype,"countdownTimer",2),m([f({type:Boolean,reflect:!0,attribute:"btn-enabled"})],h.prototype,"btnEnabled",1),m([f({type:String,reflect:!0,attribute:"btn-text"})],h.prototype,"btnText",2),m([f({type:String,reflect:!0,attribute:"btn-alignment"})],h.prototype,"btnAlignment",2),m([f({type:Boolean,reflect:!0,attribute:"btn-visible"})],h.prototype,"btnVisible",1),m([f({type:Boolean,reflect:!0,attribute:"form-validation"})],h.prototype,"formValidation",2),m([f({type:String,reflect:!0,attribute:"submission-action"})],h.prototype,"submissionAction",2),m([f({type:Boolean,reflect:!0,attribute:"submit-hidden"})],h.prototype,"submitHidden",2),h=m([Me("daf-webrequest-plugin")],h);export{h as DafWebRequestPlugin};
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
