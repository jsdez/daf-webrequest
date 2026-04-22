var ge=Object.defineProperty,qe=Object.defineProperties,De=Object.getOwnPropertyDescriptor,ze=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Ke=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var fe=(n,t,e)=>t in n?ge(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,T=(n,t)=>{for(var e in t||(t={}))Ke.call(t,e)&&fe(n,e,t[e]);if(me)for(var e of me(t))We.call(t,e)&&fe(n,e,t[e]);return n},U=(n,t)=>qe(n,ze(t));var f=(n,t,e,s)=>{for(var o=s>1?void 0:s?De(t,e):t,i=n.length-1,r;i>=0;i--)(r=n[i])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ge(t,e,o),o};var K=globalThis,W=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),be=new WeakMap,F=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(W&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=be.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&be.set(e,t))}return t}toString(){return this.cssText}},ye=n=>new F(typeof n=="string"?n:n+"",void 0,X),ee=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,o,i)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new F(e,n,X)},ve=(n,t)=>{if(W)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=K.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,n.appendChild(s)}},te=W?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ye(e)})(n):n;var{is:Ge,defineProperty:Qe,getOwnPropertyDescriptor:Ye,getOwnPropertyNames:Ze,getOwnPropertySymbols:Xe,getPrototypeOf:et}=Object,k=globalThis,xe=k.trustedTypes,tt=xe?xe.emptyScript:"",se=k.reactiveElementPolyfillSupport,J=(n,t)=>n,R={toAttribute(n,t){switch(t){case Boolean:n=n?tt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},G=(n,t)=>!Ge(n,t),we={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:G},$e,Te;($e=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Te=k.litPropertyMetadata)!=null||(k.litPropertyMetadata=new WeakMap);var A=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=we){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&Qe(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){var r;let{get:o,set:i}=(r=Ye(this.prototype,t))!=null?r:{get(){return this[e]},set(a){this[e]=a}};return{get:o,set(a){let l=o==null?void 0:o.call(this);i==null||i.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:we}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let t=et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let e=this.properties,s=[...Ze(e),...Xe(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(te(o))}else t!==void 0&&e.push(te(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return ve(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var i;let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let r=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){var i,r,a,l;let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let d=s.getPropertyOptions(o),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)==null?void 0:i.fromAttribute)!==void 0?d.converter:R;this._$Em=o,this[o]=(l=(a=c.fromAttribute(e,d.type))!=null?a:(r=this._$Ej)==null?void 0:r.get(o))!=null?l:null,this._$Em=null}}requestUpdate(t,e,s){var o,i;if(t!==void 0){let r=this.constructor,a=this[t];if(s!=null||(s=r.getPropertyOptions(t)),!(((o=s.hasChanged)!=null?o:G)(a,e)||s.useDefault&&s.reflect&&a===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:i},r){var a,l,d;s&&!((a=this._$Ej)!=null?a:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(l=r!=null?r:e)!=null?l:this[t]),i!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,a]of i){let{wrapped:l}=a,d=this[r];l!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,a,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var o;return(o=s.hostUpdated)==null?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},Ae;A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[J("elementProperties")]=new Map,A[J("finalized")]=new Map,se==null||se({ReactiveElement:A}),((Ae=k.reactiveElementVersions)!=null?Ae:k.reactiveElementVersions=[]).push("2.1.0");var B=globalThis,Q=B.trustedTypes,Se=Q?Q.createPolicy("lit-html",{createHTML:n=>n}):void 0,Me="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Ne="?"+E,st=`<${Ne}>`,M=document,L=()=>M.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",ce=Array.isArray,ot=n=>ce(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",oe=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,ke=/>/g,P=RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,_e=/"/g,Oe=/^(?:script|style|textarea|title)$/i,pe=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=pe(1),ut=pe(2),ht=pe(3),S=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Pe=new WeakMap,I=M.createTreeWalker(M,129);function Ve(n,t){if(!ce(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(t):t}var rt=(n,t)=>{let e=n.length-1,s=[],o,i=t===2?"<svg>":t===3?"<math>":"",r=j;for(let a=0;a<e;a++){let l=n[a],d,c,u=-1,b=0;for(;b<l.length&&(r.lastIndex=b,c=r.exec(l),c!==null);)b=r.lastIndex,r===j?c[1]==="!--"?r=Ce:c[1]!==void 0?r=ke:c[2]!==void 0?(Oe.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=P):c[3]!==void 0&&(r=P):r===P?c[0]===">"?(r=o!=null?o:j,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?P:c[3]==='"'?_e:Ee):r===_e||r===Ee?r=P:r===Ce||r===ke?r=j:(r=P,o=void 0);let m=r===P&&n[a+1].startsWith("/>")?" ":"";i+=r===j?l+st:u>=0?(s.push(d),l.slice(0,u)+Me+l.slice(u)+E+m):l+E+(u===-2?a:m)}return[Ve(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},q=class n{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,r=0,a=t.length-1,l=this.parts,[d,c]=rt(t,e);if(this.el=n.createElement(d,s),I.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=I.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(Me)){let b=c[r++],m=o.getAttribute(u).split(E),v=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:v[2],strings:m,ctor:v[1]==="."?ne:v[1]==="?"?ae:v[1]==="@"?le:V}),o.removeAttribute(u)}else u.startsWith(E)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(Oe.test(o.tagName)){let u=o.textContent.split(E),b=u.length-1;if(b>0){o.textContent=Q?Q.emptyScript:"";for(let m=0;m<b;m++)o.append(u[m],L()),I.nextNode(),l.push({type:2,index:++i});o.append(u[b],L())}}}else if(o.nodeType===8)if(o.data===Ne)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(E,u+1))!==-1;)l.push({type:7,index:i}),u+=E.length-1}i++}}static createElement(t,e){let s=M.createElement("template");return s.innerHTML=t,s}};function O(n,t,e=n,s){var r,a,l;if(t===S)return t;let o=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl,i=H(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=o:e._$Cl=o),o!==void 0&&(t=O(n,o._$AS(n,t.values),o,s)),t}var ie=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var d;let{el:{content:e},parts:s}=this._$AD,o=((d=t==null?void 0:t.creationScope)!=null?d:M).importNode(e,!0);I.currentNode=o;let i=I.nextNode(),r=0,a=0,l=s[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new D(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new de(i,this,t)),this._$AV.push(c),l=s[++a]}r!==(l==null?void 0:l.index)&&(i=I.nextNode(),r++)}return I.currentNode=M,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},D=class n{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,o){var i;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=(i=o==null?void 0:o.isConnected)!=null?i:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),H(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var i;let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(Ve(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(e);else{let r=new ie(o,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=Pe.get(t.strings);return e===void 0&&Pe.set(t.strings,e=new q(t)),e}k(t){ce(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let i of t)o===e.length?e.push(s=new n(this.O(L()),this.O(L()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},V=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,o){let i=this.strings,r=!1;if(i===void 0)t=O(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{let a=t,l,d;for(t=i[0],l=0;l<i.length-1;l++)d=O(this,a[s+l],e,l),d===S&&(d=this._$AH[l]),r||(r=!H(d)||d!==this._$AH[l]),d===y?t=y:t!==y&&(t+=(d!=null?d:"")+i[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},ne=class extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},ae=class extends V{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},le=class extends V{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=O(this,t,e,0))!=null?r:y)===S)return;let s=this._$AH,o=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==y&&(s===y||o);o&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},de=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}};var re=B.litHtmlPolyfillSupport,Ie;re==null||re(q,D),((Ie=B.litHtmlVersions)!=null?Ie:B.litHtmlVersions=[]).push("3.3.0");var Ue=(n,t,e)=>{var i,r;let s=(i=e==null?void 0:e.renderBefore)!=null?i:t,o=s._$litPart$;if(o===void 0){let a=(r=e==null?void 0:e.renderBefore)!=null?r:null;s._$litPart$=o=new D(t.insertBefore(L(),a),a,void 0,e!=null?e:{})}return o._$AI(n),o};var N=globalThis,_=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ue(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}},Fe;_._$litElement$=!0,_.finalized=!0,(Fe=N.litElementHydrateSupport)==null||Fe.call(N,{LitElement:_});var ue=N.litElementPolyfillSupport;ue==null||ue({LitElement:_});var Je;((Je=N.litElementVersions)!=null?Je:N.litElementVersions=[]).push("4.2.0");var Re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},je=n=>(...t)=>({_$litDirective$:n,values:t}),Y=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var z=class extends Y{constructor(t){if(super(t),this.it=y,t.type!==Re.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===S)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};z.directiveName="unsafeHTML",z.resultType=1;var Be=je(z);async function Le({url:n,method:t="POST",headers:e={},requestBody:s,contentType:o="application/json",setLoading:i,setResponse:r}){i(!0);try{let a,l=T({Accept:"application/json"},e);["POST","PUT","PATCH","DELETE"].includes(t.toUpperCase())&&s!=null&&s!==""&&(o==="application/json"?(l["Content-Type"]="application/json",a=typeof s=="string"?s:JSON.stringify(s)):o==="application/x-www-form-urlencoded"?(l["Content-Type"]="application/x-www-form-urlencoded",typeof s=="string"?a=s:typeof s=="object"&&s!==null&&(a=Object.keys(s).map(u=>`${encodeURIComponent(u)}=${encodeURIComponent(s[u])}`).join("&"))):(l["Content-Type"]=o,a=typeof s=="string"?s:JSON.stringify(s)));let d=await fetch(n,{method:t,headers:l,body:a}),c=await d.text();r(c,d.status,d.ok)}catch(a){r("Error: "+((a==null?void 0:a.message)||a),0,!1)}finally{i(!1)}}var He=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var it={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:G},nt=(n=it,t,e)=>{let{kind:s,metadata:o}=e,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),s==="accessor"){let{name:r}=e;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,n)},init(a){return a!==void 0&&this.C(r,void 0,n,a),a}}}if(s==="setter"){let{name:r}=e;return function(a){let l=this[r];t.call(this,a),this.requestUpdate(r,l,n)}}throw Error("Unsupported decorator location: "+s)};function g(n){return(t,e)=>typeof e=="object"?nt(n,t,e):((s,o,i)=>{let r=o.hasOwnProperty(i);return o.constructor.createProperty(i,s),r?Object.getOwnPropertyDescriptor(o,i):void 0})(n,t,e)}var h=class extends _{constructor(){super();this.activeDebugTab="properties";this.activeFormatterTab="success";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.formatterUseArrayNotation=!0;this.formatterMessageTitle="";this.label="";this.description="";this.readOnly=!1;this._value={success:null,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0};this.requestBody="";this.apiUrl="";this.requestHeaders="";this.bearerToken="";this.tokenUrl="";this.clientId="";this.clientSecret="";this.outputValueKey="";this.contentType="application/json";this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.countdownEnabled=!1;this.countdownTimer=5;this._btnEnabled=!0;this.btnText="Send API Request";this.btnAlignment="left";this._btnVisible=!0;this.fieldValidation=!1;this.ruleValidation=!1;this.submissionAction="no-submit";this.submitHidden=!1;this.showMoreDetails="Never";this.alertPosition="After";this.detailsExpanded=!1;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.cooldownTimerId=null;this.formValidationError="";this.oauthTokenResponse=null;this.submitBlockerAttached=!1;this.delayedSubmissionStartTime=0;this.allowFormSubmit=!1}get value(){return this._value}set value(e){let s=this._value;this._value=e,console.log("[Value Setter] Value changed, dispatching ntx-value-change event",e),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:e,bubbles:!0,composed:!0})),this.requestUpdate("value",s)}get btnEnabled(){return this._btnEnabled}set btnEnabled(e){let s=this._btnEnabled;this._btnEnabled=e,console.log(`[Property Setter] btnEnabled changed from ${s} to ${e}`),this.requestUpdate("btnEnabled",s)}get btnVisible(){return this._btnVisible}set btnVisible(e){let s=this._btnVisible;this._btnVisible=e,console.log(`[Property Setter] btnVisible changed from ${s} to ${e}`),this.requestUpdate("btnVisible",s)}connectedCallback(){super.connectedCallback(),this.toggleSubmitButtonVisibility(),this.attachSubmitBlocker()}attachSubmitBlocker(){if(this.submitBlockerAttached)return;let e=document.querySelector("form");if(!e){console.warn("[Submit Blocker] No form found to attach blocker");return}e.addEventListener("submit",s=>{if(this.allowFormSubmit){console.log("[Submit Blocker] Allowing submit - explicitly triggered by plugin"),this.allowFormSubmit=!1;return}if(this.submissionAction==="no-submit"){console.log("[Submit Blocker] Blocking submit - submissionAction is no-submit"),s.preventDefault(),s.stopPropagation(),s.stopImmediatePropagation();return}},!0),this.submitBlockerAttached=!0,console.log("[Submit Blocker] Persistent submit blocker attached")}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional: Bearer token value for Authorization header (used if Token URL is not provided)",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional: OAuth token endpoint URL",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional: JSON key path to extract from response",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"Actual message from API response"},formattedResponse:{type:"string",title:"Formatted Response",description:"Formatted response message based on Success/Warning/Error Message configuration"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:!1,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0,access_token:"",output:""}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},fieldValidation:{type:"boolean",title:"Validate Fields Before API Call",description:"If true, validates all form fields before making the API call. Only proceeds if all required fields are valid.",defaultValue:!1},ruleValidation:{type:"boolean",title:"Rule Validation Gate",description:"When set to true by Nintex rule engine, blocks API calls and shows validation error. When false, allows API call to proceed. Use Nintex rules to control this value based on your validation logic.",defaultValue:!1},submissionAction:{type:"string",title:"Submission Action",description:'Action to take after a successful API call. Set to "only-submit" to skip API call and directly submit the form.',enum:["no-submit","quick-submit","delayed-submit","only-submit"],defaultValue:"no-submit"},submitHidden:{type:"boolean",title:"Hide Submit Button",description:"If true, hides the Nintex form submit button from users.",defaultValue:!1},showMoreDetails:{type:"string",title:"Show More Details",description:"Controls when to show expandable raw response details in alerts.",enum:["Never","Always","On Error/Warning"],defaultValue:"Never"},alertPosition:{type:"string",title:"Alert Position",description:"Controls where the alert message is displayed relative to the button.",enum:["After","Before","Pop-out"],defaultValue:"After"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}}}render(){return this.debugMode?p`
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
    `:p`<div class="plugin-container" style="display: none;"></div>`}renderButtonWithAlert(e){let s=this.renderResponseAlert(this.alertPosition==="Before"),o=p`
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
            ${o}
          </div>
        </div>
        ${this.shouldShowAlert()?this.renderModal(s):""}
      `:this.alertPosition==="Before"?p`
        <div class="form-group">
          ${s}
          <div class="btn-container align-${this.btnAlignment}">
            ${o}
          </div>
        </div>
      `:p`
      <div class="form-group">
        <div class="btn-container align-${this.btnAlignment}">
          ${o}
        </div>
        ${s}
      </div>
    `}shouldShowAlert(){if(this.formValidationError)return!0;let s=Date.now()-this.lastApiCallTime,o=this.countdownTimer*1e3;return this.countdownEnabled&&this.lastApiCallTime>0&&s<o&&this.showCooldownAlert?!0:!(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)}renderModal(e){return p`
      <div class="modal-overlay" @click=${s=>{s.target===s.currentTarget&&this.closeModal()}}>
        <div class="modal-content">
          <button class="modal-close" @click=${()=>this.closeModal()}>&times;</button>
          ${e}
        </div>
      </div>
    `}closeModal(){this.apiResponse="",this.responseType=null,this.formValidationError="",this.showCooldownAlert=!1,this.requestUpdate()}renderResponseAlert(e=!1){var x;let o=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3,r=this.countdownEnabled&&this.lastApiCallTime>0&&o<i,a=this.submissionAction==="delayed-submit"&&this.cooldownTimerId!==null&&(this.responseType==="success"||this.responseType==="warning"),l=e?"alert-before":"";if(this.formValidationError)return p`
        <div class="alert alert-error ${l}" part="validation-alert">
          <div>
            <span class="alert-icon">✗</span>
            <strong>Validation Error:</strong> ${this.formValidationError}
          </div>
        </div>
      `;if(r&&this.showCooldownAlert){let $=Math.ceil((i-o)/1e3);return p`
        <div class="alert alert-info ${l}" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${$} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let d=`alert-${this.responseType}`,c=this.getCustomMessage(this.responseType),u=c.title,b=c.message,m=0;if(a){let $=Date.now()-this.delayedSubmissionStartTime,C=this.countdownTimer*1e3-$;m=Math.max(0,Math.ceil(C/1e3))}let v=b.includes(`
`);if(this.responseType==="success"){let $=this.shouldShowMoreDetails("success")||a;return p`
        <div class="alert ${d} ${l}" part="response-alert">
          ${u?p`
            <div>
              <strong>${u}</strong>
            </div>
          `:""}
          ${v?p`
            <div class="alert-response" style="white-space: pre-line; margin-top: ${u?"8px":"0"};">
              ${b}
            </div>
          `:p`
            <div style="display: inline; margin-left: ${u?"4px":"0"};">
              ${b}
            </div>
          `}
          ${$?p`
            <div class="alert-footer">
              <div class="alert-footer-left">
                ${this.shouldShowMoreDetails("success")?p`
                  <button 
                    class="alert-more-details-toggle"
                    @click=${()=>this.toggleDetailsExpanded()}
                  >
                    ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
                  </button>
                `:""}
              </div>
              ${a?p`
                <div class="alert-footer-right">
                  Submitting form in ${m} seconds...
                </div>
              `:""}
            </div>
            ${this.detailsExpanded&&this.shouldShowMoreDetails("success")?p`
              <div class="alert-more-details-wrapper">
                <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
                <div class="alert-more-details-content">${this.formatRawResponse()}</div>
              </div>
            `:""}
          `:""}
        </div>
      `}let w=this.shouldShowMoreDetails(this.responseType)||a;return p`
      <div class="alert ${d} ${l}" part="response-alert">
        ${u?p`
          <div>
            <strong>${u}</strong>
          </div>
        `:""}
        ${v?p`
          <div class="alert-response" style="white-space: pre-line; margin-top: ${u?"8px":"0"};">
            ${b}
          </div>
        `:p`
          <div style="display: inline; margin-left: ${u?"4px":"0"};">
            ${b}
          </div>
        `}
        ${(x=this.value)!=null&&x.message?p`
          <div class="alert-response">
            ${Be(this.formatMessageWithBoldLabels(this.value.message))}
          </div>
        `:""}
        ${w?p`
          <div class="alert-footer">
            <div class="alert-footer-left">
              ${this.shouldShowMoreDetails(this.responseType)?p`
                <button 
                  class="alert-more-details-toggle"
                  @click=${()=>this.toggleDetailsExpanded()}
                >
                  ${this.detailsExpanded?"\u25BC":"\u25B6"} More Details...
                </button>
              `:""}
            </div>
            ${a?p`
              <div class="alert-footer-right">
                Submitting form in ${m} seconds...
              </div>
            `:""}
          </div>
          ${this.detailsExpanded&&this.shouldShowMoreDetails(this.responseType)?p`
            <div class="alert-more-details-wrapper">
              <span class="alert-more-details-copy" @click=${()=>this.copyRawResponseToClipboard()}>copy</span>
              <div class="alert-more-details-content">${this.formatRawResponse()}</div>
            </div>
          `:""}
        `:""}
      </div>
    `}formatMessageWithBoldLabels(e){return e?e.split(`
`).map(i=>{let r=i.match(/^([^:]+):\s*(.*)$/);if(r){let a=r[1].trim(),l=r[2];return`<strong>${a}:</strong> ${l}`}return i}).join("<br>"):""}shouldShowMoreDetails(e){return this.showMoreDetails==="Never"?!1:this.showMoreDetails==="Always"?!0:this.showMoreDetails==="On Error/Warning"?e==="error"||e==="warning":!1}toggleDetailsExpanded(){this.detailsExpanded=!this.detailsExpanded,this.requestUpdate()}formatRawResponse(){if(!this.apiResponse)return"";try{let e=JSON.parse(this.apiResponse);return JSON.stringify(e,null,2)}catch(e){return this.apiResponse}}copyRawResponseToClipboard(){let e=this.formatRawResponse();this.copyToClipboard(e)}getCustomMessage(e){let s;switch(e){case"success":s=this.successMessage;break;case"warning":s=this.warningMessage;break;case"error":s=this.errorMessage;break;default:s="Unknown response type"}if(s.startsWith('"{')&&s.endsWith('}"'))try{let o=s.slice(1,-1).replace(/\\"/g,'"'),i=JSON.parse(o);return{title:i.title||null,message:this.formatResponseWithConfig(i)}}catch(o){return console.error("[Message Formatting] Failed to parse quoted config:",o),{title:null,message:s}}if(s.trim().startsWith('{"'))try{let o=JSON.parse(s);return{title:o.title||null,message:this.formatResponseWithConfig(o)}}catch(o){return console.error("[Message Formatting] Failed to parse unquoted config:",o),{title:null,message:s}}return{title:null,message:s}}formatResponseWithConfig(e){if(!e.fields||!Array.isArray(e.fields))return"Invalid configuration format";let s;try{s=JSON.parse(this.value.data)}catch(i){return console.error("[Message Formatting] Failed to parse response data:",i),"Unable to parse response data"}let o=[];return e.fields.forEach(i=>{let r=this.extractNestedValue(s,i.path);if(Array.isArray(r))if(r.length>0){let a=r[0];typeof a!="object"||a===null?(o.push(`${i.title}:`),r.forEach((d,c)=>{o.push(`  ${c+1}. ${String(d)}`)})):(o.push(`${i.title}:`),r.forEach((d,c)=>{let u=JSON.stringify(d);o.push(`  ${c+1}. ${u}`)}))}else o.push(`${i.title}: (empty)`);else{let a=r!=null?String(r):"N/A";o.push(`${i.title}: ${a}`)}}),o.join(`
`)}updated(e){e.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger(),e.has("submitHidden")&&this.toggleSubmitButtonVisibility(),e.has("btnVisible")&&console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`),e.has("btnEnabled")&&console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`),e.has("btnText")&&console.log(`[UI Property Change] btnText changed to: ${this.btnText}`),e.has("btnAlignment")&&console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`),e.has("debugMode")&&console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`)}toggleSubmitButtonVisibility(){let e="ntx-submit-button-hidden-style";if(this.submitHidden){if(!document.getElementById(e)){let s=document.createElement("style");s.id=e,s.textContent=`
          button[data-e2e="btn-submit"] {
            display: none !important;
          }
        `,document.head.appendChild(s),console.log("[Submit Button] Hidden via CSS")}}else{let s=document.getElementById(e);s&&(s.remove(),console.log("[Submit Button] Made visible by removing CSS"))}}async validateNintexForm(){console.log("[Validation] Starting form validation...");let e=document.querySelector("form");if(!e)return console.warn("[Validation] No form found for validation"),!0;console.log("[Validation] Triggering validation on form inputs"),e.querySelectorAll("input, textarea, select").forEach(d=>{(d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement||d instanceof HTMLSelectElement)&&d.reportValidity()}),console.log("[Validation] Waiting 200ms for validation state to update..."),await new Promise(d=>setTimeout(d,200));let o=e.querySelectorAll('[aria-invalid="true"]'),i=e.querySelectorAll(":invalid"),r=e.querySelectorAll('.ntx-form-error, [class*="error-message"]'),l=o.length+i.length===0&&r.length===0;return console.log("[Validation] Invalid fields found:"),console.log("  - aria-invalid:",o.length),console.log("  - HTML5 invalid:",i.length),console.log("  - Error messages:",r.length),console.log("[Validation] Form is valid:",l),l||(console.log("[Validation] Form validation FAILED. Invalid fields:"),o.forEach((d,c)=>{console.log(`  [aria-invalid ${c+1}]`,d)}),i.forEach((d,c)=>{console.log(`  [HTML5 invalid ${c+1}]`,d)})),l}async handleAPICallTrigger(){if(console.log("[API Trigger] Button clicked - starting validation and API flow..."),this.sendAPICall=!1,this.formValidationError="",this.submissionAction==="only-submit"){console.log("[API Trigger] Submission action is only-submit - skipping validation and API, submitting form directly"),this.submitNintexForm();return}if(this.fieldValidation){console.log("[API Trigger] Field validation is ENABLED, checking fields...");let e=await this.validateNintexForm();if(console.log("[API Trigger] Field validation result:",e),!e){console.log("[API Trigger] Field validation FAILED - STOPPING"),this.formValidationError="Please fill in all required fields correctly before submitting.",this.requestUpdate();return}console.log("[API Trigger] Field validation PASSED - proceeding...")}else console.log("[API Trigger] Field validation is DISABLED - skipping...");if(this.ruleValidation){console.log("[API Trigger] Rule validation gate is TRUE - BLOCKING API call"),this.formValidationError="Please correct the form errors before proceeding.",this.requestUpdate();return}if(console.log("[API Trigger] Rule validation gate is FALSE - proceeding..."),!this.allowMultipleAPICalls&&this.hasSuccessfulCall){console.log("[API Trigger] Multiple API calls not allowed and already had successful call - STOPPING");return}if(this.countdownEnabled){let s=Date.now()-this.lastApiCallTime,o=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&s<o){console.log("[API Trigger] In cooldown period - STOPPING"),this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}console.log("[API Trigger] All validation and checks passed - calling handleApiCall()"),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls)return this.isLoading;let e=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning");return this.isLoading||!this.btnEnabled||e}setActiveTab(e){this.activeDebugTab=e,this.requestUpdate()}renderPropertiesTab(){let e=this.constructor.getMetaConfig(),s=[];if(e.properties)for(let[o,i]of Object.entries(e.properties))o!=="value"&&s.push({name:o,default:i.defaultValue,config:i});return p`
      <table class="debug-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Default Value</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(o=>p`
            <tr>
              <td><code class="property-name">${o.name}</code></td>
              <td class="value-default">${this.formatValue(o.default)}</td>
              <td class="value-current">${this.renderPropertyInput(o.name,o.config)}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}renderPropertyInput(e,s){let o=this[e],i=s.type;if(i==="boolean")return p`
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
    `}renderAPIToolsTab(){let e=this.isValidJson(this.requestBody),s=this.getJsonStatus(this.requestBody);return p`
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
    `}renderResponseFormatterTab(){let e=this.formatterJsonInput.trim().length>0,s=e&&this.isValidJson(this.formatterJsonInput),o=null,i="";if(e)try{o=JSON.parse(this.formatterJsonInput)}catch(r){i=r.message}return p`
      <div class="debug-tools">
        <div class="form-group">
          <label class="control-label">Paste Response JSON</label>
          <textarea 
            class="form-control" 
            rows="8"
            .value=${this.formatterJsonInput}
            @input=${r=>{let a=r.target;this.formatterJsonInput=a.value,this.requestUpdate()}}
            placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${i?p`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
        </div>

        ${s&&o?p`
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
            ${this.renderMessageTypeConfig("success",this.successMessage,o)}
          </div>

          <!-- Warning Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab==="warning"?"active":""}">
            ${this.renderMessageTypeConfig("warning",this.warningMessage,o)}
          </div>

          <!-- Error Tab Content -->
          <div class="debug-tab-content ${this.activeFormatterTab==="error"?"active":""}">
            ${this.renderMessageTypeConfig("error",this.errorMessage,o)}
          </div>
        `:""}
      </div>
    `}renderMessageTypeConfig(e,s,o){let r={success:{bg:"#d4edda",text:"#155724",border:"#c3e6cb",btnBg:"#28a745",btnText:"white"},warning:{bg:"#fff3cd",text:"#856404",border:"#ffeaa7",btnBg:"#ffc107",btnText:"#000"},error:{bg:"#f8d7da",text:"#721c24",border:"#f5c6cb",btnBg:"#dc3545",btnText:"white"}}[e];return p`
      <div style="border: 1px solid var(--ntx-form-theme-color-border); border-top: none; border-radius: 0 0 4px 4px; padding: 16px; background: var(--ntx-form-theme-color-background);">
        
        <!-- Current Configuration -->
        <div class="form-group">
          <label class="control-label">Current ${e.charAt(0).toUpperCase()+e.slice(1)} Message Configuration</label>
          <div style="position: relative;">
            <textarea 
              class="form-control" 
              readonly
              rows="4"
              .value=${s}
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; background: ${r.bg}; color: ${r.text}; border-color: ${r.border};"
            ></textarea>
          </div>
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
            ${s.trim().startsWith('{"fields"')||s.trim().startsWith('"{')?"\u2713 Formatted response configuration detected":"\u25CB Plain text message"}
          </div>
        </div>

        <!-- Preview -->
        <div class="form-group">
          <label class="control-label">Preview of Current Configuration</label>
          <div style="border: 1px solid ${r.border}; border-radius: 4px; padding: 16px; background: ${r.bg}; color: ${r.text}; white-space: pre-line; min-height: 60px;">
            ${this.getPreviewForConfig(s,o)}
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
          <!-- New Configuration Preview -->
          <div class="form-group">
            <label class="control-label">New Configuration Preview</label>
            <div style="border: 1px solid var(--ntx-form-theme-color-border); border-radius: 4px; padding: 16px; background: var(--ntx-form-theme-color-background-alt); white-space: pre-line;">
              ${this.renderFormattedPreview(o)}
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
                style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; padding-right: 100px; background: ${r.bg}; color: ${r.text}; border-color: ${r.border};"
              ></textarea>
              <button 
                class="btn" 
                style="position: absolute; top: 8px; right: 8px; padding: 6px 16px; font-size: 13px; background: ${r.btnBg}; color: ${r.btnText||"white"}; border: none; font-weight: 600;"
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
    `}getPreviewForConfig(e,s){if(!e||e.trim().length===0)return p`<span style="font-style: italic; opacity: 0.6;">No configuration set</span>`;let o=this.value,i=U(T({},this.value),{data:JSON.stringify(s)});this.value=i;let r;if(e.trim().startsWith('{"fields"')||e.trim().startsWith('"{'))try{let a;if(e.startsWith('"{')&&e.endsWith('}"')){let l=e.slice(1,-1).replace(/\\"/g,'"');a=JSON.parse(l)}else a=JSON.parse(e);r=this.formatResponseWithConfig(a)}catch(a){r=e}else r=e;return this.value=o,r}loadConfigIntoFields(e){let s=e==="success"?this.successMessage:e==="warning"?this.warningMessage:this.errorMessage;if(this.formatterSelectedFields.clear(),this.formatterMessageTitle="",!s||s.trim().length===0){this.requestUpdate();return}try{let o;if(s.startsWith('"{')&&s.endsWith('}"')){let i=s.slice(1,-1).replace(/\\"/g,'"');o=JSON.parse(i)}else if(s.trim().startsWith('{"'))o=JSON.parse(s);else{this.requestUpdate();return}o.title&&(this.formatterMessageTitle=o.title),o.fields&&Array.isArray(o.fields)&&o.fields.forEach((i,r)=>{this.formatterSelectedFields.set(i.path,{title:i.title||i.path,checked:!0,order:r})})}catch(o){console.error("[Config Loading] Failed to parse config:",o)}this.requestUpdate()}renderAvailableFields(e,s){let o=[],i=(r,a)=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(l=>{var u,b;let d=a?`${a}.${l}`:l,c=r[l];if(Array.isArray(c)&&c.length>0){if(this.formatterUseArrayNotation){let m=`${d}[*]`,v=((u=this.formatterSelectedFields.get(m))==null?void 0:u.checked)||!1,w=`Array with ${c.length} item${c.length>1?"s":""}`;o.push(p`
                <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${v?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                  <input 
                    type="checkbox" 
                    .checked=${v}
                    @change=${x=>{if(x.target.checked){let C=-1;this.formatterSelectedFields.forEach(he=>{he.order>C&&(C=he.order)}),this.formatterSelectedFields.set(m,{title:l,checked:!0,order:C+1})}else this.formatterSelectedFields.delete(m);this.requestUpdate()}}
                    style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                  />
                  <div style="flex: 1; margin-left: 10px; min-width: 0;">
                    <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                      <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${m}</code>
                      <span style="margin-left: 6px; font-size: 11px; color: var(--ntx-form-theme-color-secondary);">📋 Array</span>
                    </div>
                    <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                      ${w}
                    </div>
                  </div>
                </div>
              `)}if(typeof c[0]=="object"&&!Array.isArray(c[0])){let m=this.formatterUseArrayNotation?`${d}[*]`:`${d}[0]`;i(c[0],m)}}else if(c!==null&&typeof c!="object"){let m=d,v=((b=this.formatterSelectedFields.get(m))==null?void 0:b.checked)||!1;o.push(p`
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${v?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${v}
                  @change=${w=>{if(w.target.checked){let $=-1;this.formatterSelectedFields.forEach(C=>{C.order>$&&($=C.order)}),this.formatterSelectedFields.set(m,{title:m.split(".").pop()||m,checked:!0,order:$+1})}else this.formatterSelectedFields.delete(m);this.requestUpdate()}}
                  style="width: 18px; height: 18px; cursor: pointer; margin-top: 2px; flex-shrink: 0;"
                />
                <div style="flex: 1; margin-left: 10px; min-width: 0;">
                  <div style="font-weight: 500; margin-bottom: 4px; word-break: break-word;">
                    <code style="background: var(--ntx-form-theme-color-background-alt); padding: 2px 6px; border-radius: 3px; font-size: 12px;">${m}</code>
                  </div>
                  <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); word-break: break-word;">
                    ${String(c).length>50?String(c).substring(0,50)+"...":String(c)}
                  </div>
                </div>
              </div>
            `)}else c&&typeof c=="object"&&!Array.isArray(c)&&i(c,d)})};return i(e,s),o.length>0?o:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`}renderSelectedFieldsList(){let e=Array.from(this.formatterSelectedFields.entries()).filter(([s,o])=>o.checked).sort((s,o)=>s[1].order-o[1].order);return e.length===0?p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`:e.map(([s,o],i)=>p`
      <div 
        draggable="true"
        @dragstart=${r=>{r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",i.toString())}}
        @dragover=${r=>{r.preventDefault(),r.dataTransfer.dropEffect="move"}}
        @drop=${r=>{r.preventDefault();let a=parseInt(r.dataTransfer.getData("text/plain")),l=i;if(a!==l){let d=Array.from(e),[c]=d.splice(a,1);d.splice(l,0,c),d.forEach(([u,b],m)=>{this.formatterSelectedFields.set(u,U(T({},b),{order:m}))}),this.requestUpdate()}}}
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
            <code style="font-size: 10px;">${s}</code>
          </div>
          <input 
            type="text" 
            class="form-control"
            placeholder="Display title"
            .value=${o.title}
            @input=${r=>{let a=r.target;this.formatterSelectedFields.set(s,U(T({},o),{title:a.value})),this.requestUpdate()}}
            style="font-size: 13px; padding: 6px 8px; height: auto;"
          />
        </div>
        <button
          @click=${()=>{this.formatterSelectedFields.delete(s),this.requestUpdate()}}
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
    `)}renderFormattedPreview(e){let s=[];return this.formatterSelectedFields.forEach((o,i)=>{if(o.checked){let r=this.extractNestedValue(e,i),a=o.title||i;s.push(p`
          <div style="margin-bottom: 8px;">
            <strong>${a}:</strong> ${r!==void 0?String(r):"N/A"}
          </div>
        `)}}),s.length>0?s:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`}generateResponseConfigQuoted(){let e={};return this.formatterMessageTitle&&this.formatterMessageTitle.trim()&&(e.title=this.formatterMessageTitle.trim()),e.fields=[],Array.from(this.formatterSelectedFields.entries()).filter(([i,r])=>r.checked).sort((i,r)=>i[1].order-r[1].order).forEach(([i,r])=>{e.fields.push({path:i,title:r.title||i})}),`"${JSON.stringify(e).replace(/"/g,'\\"')}"`}formatValue(e){return typeof e=="boolean"?e.toString():typeof e=="string"?`"${e}"`:typeof e=="number"?e.toString():e===null?"null":e===void 0?"undefined":JSON.stringify(e)}formatJsonForDisplay(e){try{let s=JSON.parse(e);return JSON.stringify(s,null,2)}catch(s){return e}}isValidJson(e){if(!e.trim())return!0;try{return JSON.parse(e),!0}catch(s){return!1}}getJsonStatus(e){if(!e.trim())return"Empty";try{let s=JSON.parse(e),o=e.length,i=e.split(`
`).length,r=this.countJsonKeys(s);return`Valid JSON \u2022 ${o} chars \u2022 ${i} lines \u2022 ${r} keys`}catch(s){return`Invalid JSON \u2022 ${s.message}`}}countJsonKeys(e){return typeof e!="object"||e===null?0:Array.isArray(e)?e.reduce((s,o)=>s+this.countJsonKeys(o),0):Object.keys(e).length+Object.values(e).reduce((s,o)=>s+this.countJsonKeys(o),0)}formatJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}catch(e){}}minifyJson(){if(this.isValidJson(this.requestBody))try{let e=JSON.parse(this.requestBody);this.requestBody=JSON.stringify(e),this.requestUpdate()}catch(e){}}clearJson(){this.requestBody="",this.requestUpdate()}insertSampleJson(){let e={startData:{se_input:"This is a test",options:{callbackUrl:"optionally add a callback URL here. Must be https",metadata:{userId:"12345",requestId:"req-"+Date.now()}}}};this.requestBody=JSON.stringify(e,null,2),this.requestUpdate()}handleJsonInput(e){let s=e.target;this.requestBody=s.value,this.requestUpdate()}handleJsonBlur(e){this.isValidJson(this.requestBody)&&this.requestBody.trim()&&this.formatJson()}handleJsonPaste(e){setTimeout(()=>{this.isValidJson(this.requestBody)&&this.formatJson()},100)}renderJsonOutput(){if(!this.requestBody.trim())return"";let e="",s="",o="";try{let i=JSON.parse(this.requestBody);e=JSON.stringify(i),s='"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}catch(i){o=i.message}return p`
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
        ${o?p`<div class="text-danger" style="margin-top: 8px; font-size: 12px;">${o}</div>`:""}
      </div>
    `}renderJsonPreview(){if(!this.requestBody.trim()||!this.isValidJson(this.requestBody))return"";try{let e=JSON.parse(this.requestBody);return p`
        <div class="form-group">
          <label class="control-label">JSON Structure Preview</label>
          <div class="json-viewer">
${this.renderJsonWithSyntaxHighlight(e,0)}
          </div>
        </div>
      `}catch(e){return""}}renderJsonWithSyntaxHighlight(e,s=0){let o="  ".repeat(s);if(e===null)return'<span class="json-syntax-null">null</span>';if(typeof e=="string")return`<span class="json-syntax-string">"${e}"</span>`;if(typeof e=="number")return`<span class="json-syntax-number">${e}</span>`;if(typeof e=="boolean")return`<span class="json-syntax-boolean">${e}</span>`;if(Array.isArray(e))return e.length===0?'<span class="json-syntax-punctuation">[]</span>':`<span class="json-syntax-punctuation">[</span>
${e.map(r=>`${o}  ${this.renderJsonWithSyntaxHighlight(r,s+1)}`).join(`,
`)}
${o}<span class="json-syntax-punctuation">]</span>`;if(typeof e=="object"){let i=Object.keys(e);return i.length===0?'<span class="json-syntax-punctuation">{}</span>':`<span class="json-syntax-punctuation">{</span>
${i.map(a=>`${o}  <span class="json-syntax-key">"${a}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(e[a],s+1)}`).join(`,
`)}
${o}<span class="json-syntax-punctuation">}</span>`}return String(e)}async fetchOAuthToken(){let e=await fetch(this.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:this.clientId,client_secret:this.clientSecret})});if(!e.ok)throw new Error(`Token request failed with status ${e.status}`);let s=await e.json();if(!s.access_token)throw new Error("No access_token in response");return this.oauthTokenResponse={access_token:s.access_token,token_type:s.token_type||"Bearer",expires_in:s.expires_in,scope:s.scope,fetched_at:new Date().toISOString(),expires_at:s.expires_in?new Date(Date.now()+s.expires_in*1e3).toISOString():null},s.access_token}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let e=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{e=await this.fetchOAuthToken()}catch(r){let a=Date.now()-this.apiCallStartTime,l=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${r instanceof Error?r.message:String(r)}`,this.value={success:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:"",formattedResponse:this.errorMessage,timestamp:l,executionTime:a},this.isLoading=!1,this.requestUpdate();return}let s=this.apiUrl||"",o={};if(this.requestHeaders)try{o=JSON.parse(this.requestHeaders)}catch(r){o={},this.requestHeaders.split(/\r?\n/).forEach(a=>{let l=a.indexOf(":");if(l>-1){let d=a.slice(0,l).trim(),c=a.slice(l+1).trim();d&&(o[d]=c)}})}e&&e.trim()&&(o.Authorization=`Bearer ${e.trim()}`);let i;if(this.contentType==="application/x-www-form-urlencoded")i=this.requestBody||"";else if(this.contentType==="application/json")if(this.requestBody&&this.requestBody.trim())try{i=JSON.parse(this.requestBody)}catch(r){i=void 0}else i=void 0;else i=this.requestBody||"";await Le({url:s,method:this.method||"POST",headers:o,requestBody:i,contentType:this.contentType,setLoading:r=>{this.isLoading=r,this.requestUpdate()},setResponse:(r,a,l)=>{let d=Date.now()-this.apiCallStartTime,c=new Date().toISOString();this.apiResponse=r,this.responseType=l===!1?"error":this.determineResponseType(r),this.formatterJsonInput=r,this.formatterSelectedFields.clear();let u,b,m="";try{let x=JSON.parse(r);x.access_token&&(u=x.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(b=this.extractNestedValue(x,this.outputValueKey)),m=this.extractNestedValue(x,"d.Message")||this.extractNestedValue(x,"Message")||this.extractNestedValue(x,"message")||this.extractNestedValue(x,"msg")||this.extractNestedValue(x,"data.message")||""}catch(x){}let v=this.getCustomMessage(this.responseType);this.value=T(T({success:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:a!==void 0?a:this.responseType==="success"?200:500,responseType:this.responseType,data:r,message:m,formattedResponse:v.message,timestamp:c,executionTime:d},u&&{access_token:u}),b!==void 0&&{output:b}),(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),console.log("[Value Change] Value updated at:",new Date().toISOString()),this.requestUpdate(),(this.responseType==="success"||this.responseType==="warning")&&(console.log("[Value Change] Waiting 800ms for Nintex to process value change..."),setTimeout(()=>{console.log("[Value Change] Wait complete at:",new Date().toISOString(),"- proceeding with submission action"),this.handlePostSubmissionAction()},800))}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let s=JSON.parse(e);if(s.error||s.status==="error")return"error";if(s.warning||s.status==="warning")return"warning"}catch(s){}return"success"}extractNestedValue(e,s){if(e&&typeof e=="object"&&s in e)return e[s];let o=s.split("."),i=e,r=!1;for(let a=0;a<o.length;a++){let l=o[a],d=l.match(/^(.+)\[(\*|\d+)\]$/);if(d){let c=d[1],u=d[2];if(i&&typeof i=="object"&&c in i){let b=i[c];if(Array.isArray(b))if(u==="*"){let m=o.slice(a+1);if(m.length>0){let v=m.join(".");i=b.map(w=>this.extractNestedValue(w,v)).filter(w=>w!==void 0)}else i=b;r=!0;break}else i=b[parseInt(u)];else return}else return}else if(i&&typeof i=="object"&&l in i)i=i[l];else return}return i}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch(s){console.error("Failed to copy text:",s)}}handlePostSubmissionAction(){if(console.log("[Submission Action] API call complete - checking submission action:",this.submissionAction),this.submissionAction==="no-submit"){console.log("[Submission Action] No submission - API call complete, form will not submit");return}if(this.submissionAction==="quick-submit"){console.log("[Submission Action] Quick submit - submitting after 500ms"),setTimeout(()=>{this.submitNintexForm()},500);return}if(this.submissionAction==="delayed-submit"){console.log("[Submission Action] Delayed submit - starting countdown timer"),this.startDelayedSubmission();return}}submitNintexForm(){console.log("[Submission Action] Attempting to submit Nintex form");let e=document.querySelector("form");if(!e){console.error("[Submission Action] No form found");return}let s=e.querySelector('button[type="submit"]');s instanceof HTMLElement?(console.log("[Submission Action] Clicking submit button"),this.allowFormSubmit=!0,s.click(),setTimeout(()=>{this.allowFormSubmit=!1},100)):console.error("[Submission Action] No submit button found")}startDelayedSubmission(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=this.countdownTimer*1e3,s=Date.now();this.delayedSubmissionStartTime=s;let o=()=>{let i=Date.now()-s;e-i<=0?(console.log("[Submission Action] Countdown complete - submitting form"),this.submitNintexForm(),this.cooldownTimerId=null,this.delayedSubmissionStartTime=0):(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(o,100))};console.log("[Submission Action] Starting delayed submission countdown for",this.countdownTimer,"seconds"),o()}startCooldownTimer(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=()=>{let o=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;o<i?(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(e,1e3)):(this.showCooldownAlert=!1,this.cooldownTimerId=null,this.requestUpdate())};this.cooldownTimerId=window.setTimeout(e,1e3)}disconnectedCallback(){super.disconnectedCallback(),this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null)}};h.styles=ee`
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
  `,f([g({type:String})],h.prototype,"label",2),f([g({type:String})],h.prototype,"description",2),f([g({type:Boolean})],h.prototype,"readOnly",2),f([g({type:Object})],h.prototype,"value",1),f([g({type:String})],h.prototype,"requestBody",2),f([g({type:String})],h.prototype,"apiUrl",2),f([g({type:String})],h.prototype,"requestHeaders",2),f([g({type:String})],h.prototype,"bearerToken",2),f([g({type:String})],h.prototype,"tokenUrl",2),f([g({type:String})],h.prototype,"clientId",2),f([g({type:String})],h.prototype,"clientSecret",2),f([g({type:String})],h.prototype,"outputValueKey",2),f([g({type:String})],h.prototype,"contentType",2),f([g({type:Boolean,reflect:!0})],h.prototype,"debugMode",2),f([g({type:String})],h.prototype,"method",2),f([g({type:String})],h.prototype,"successMessage",2),f([g({type:String})],h.prototype,"warningMessage",2),f([g({type:String})],h.prototype,"errorMessage",2),f([g({type:Boolean,reflect:!0,attribute:"send-api-call"})],h.prototype,"sendAPICall",2),f([g({type:Boolean,reflect:!0,attribute:"allow-multiple-api-calls"})],h.prototype,"allowMultipleAPICalls",2),f([g({type:Boolean,reflect:!0,attribute:"countdown-enabled"})],h.prototype,"countdownEnabled",2),f([g({type:Number})],h.prototype,"countdownTimer",2),f([g({type:Boolean,reflect:!0,attribute:"btn-enabled"})],h.prototype,"btnEnabled",1),f([g({type:String,reflect:!0,attribute:"btn-text"})],h.prototype,"btnText",2),f([g({type:String,reflect:!0,attribute:"btn-alignment"})],h.prototype,"btnAlignment",2),f([g({type:Boolean,reflect:!0,attribute:"btn-visible"})],h.prototype,"btnVisible",1),f([g({type:Boolean,reflect:!0,attribute:"field-validation"})],h.prototype,"fieldValidation",2),f([g({type:Boolean,reflect:!0,attribute:"rule-validation"})],h.prototype,"ruleValidation",2),f([g({type:String,reflect:!0,attribute:"submission-action"})],h.prototype,"submissionAction",2),f([g({type:Boolean,reflect:!0,attribute:"submit-hidden"})],h.prototype,"submitHidden",2),f([g({type:String,reflect:!0,attribute:"show-more-details"})],h.prototype,"showMoreDetails",2),f([g({type:String,reflect:!0,attribute:"alert-position"})],h.prototype,"alertPosition",2),h=f([He("daf-webrequest-plugin")],h);export{h as DafWebRequestPlugin};
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
