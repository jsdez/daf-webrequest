var ge=Object.defineProperty,He=Object.defineProperties,ze=Object.getOwnPropertyDescriptor,Ke=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var fe=(a,s,e)=>s in a?ge(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,T=(a,s)=>{for(var e in s||(s={}))We.call(s,e)&&fe(a,e,s[e]);if(me)for(var e of me(s))Ge.call(s,e)&&fe(a,e,s[e]);return a},R=(a,s)=>He(a,Ke(s));var f=(a,s,e,t)=>{for(var o=t>1?void 0:t?ze(s,e):s,i=a.length-1,r;i>=0;i--)(r=a[i])&&(o=(t?r(s,e,o):r(o))||o);return t&&o&&ge(s,e,o),o};var W=globalThis,G=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),be=new WeakMap,F=class{constructor(s,e,t){if(this._$cssResult$=!0,t!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o,e=this.t;if(G&&s===void 0){let t=e!==void 0&&e.length===1;t&&(s=be.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),t&&be.set(e,s))}return s}toString(){return this.cssText}},ye=a=>new F(typeof a=="string"?a:a+"",void 0,ee),te=(a,...s)=>{let e=a.length===1?a[0]:s.reduce((t,o,i)=>t+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+a[i+1],a[0]);return new F(e,a,ee)},ve=(a,s)=>{if(G)a.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of s){let t=document.createElement("style"),o=W.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=e.cssText,a.appendChild(t)}},se=G?a=>a:a=>a instanceof CSSStyleSheet?(s=>{let e="";for(let t of s.cssRules)e+=t.cssText;return ye(e)})(a):a;var{is:Qe,defineProperty:Ye,getOwnPropertyDescriptor:Ze,getOwnPropertyNames:Xe,getOwnPropertySymbols:et,getPrototypeOf:tt}=Object,k=globalThis,xe=k.trustedTypes,st=xe?xe.emptyScript:"",oe=k.reactiveElementPolyfillSupport,J=(a,s)=>a,B={toAttribute(a,s){switch(s){case Boolean:a=a?st:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,s){let e=a;switch(s){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch(t){e=null}}return e}},Q=(a,s)=>!Qe(a,s),we={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:Q},$e,Te;($e=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Te=k.litPropertyMetadata)!=null||(k.litPropertyMetadata=new WeakMap);var A=class extends HTMLElement{static addInitializer(s){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,e=we){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(s)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(s,e),!e.noAccessor){let t=Symbol(),o=this.getPropertyDescriptor(s,t,e);o!==void 0&&Ye(this.prototype,s,o)}}static getPropertyDescriptor(s,e,t){var r;let{get:o,set:i}=(r=Ze(this.prototype,s))!=null?r:{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let l=o==null?void 0:o.call(this);i==null||i.call(this,n),this.requestUpdate(s,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){var e;return(e=this.elementProperties.get(s))!=null?e:we}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let s=tt(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let e=this.properties,t=[...Xe(e),...et(e)];for(let o of t)this.createProperty(o,e[o])}let s=this[Symbol.metadata];if(s!==null){let e=litPropertyMetadata.get(s);if(e!==void 0)for(let[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let o=this._$Eu(e,t);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){let e=[];if(Array.isArray(s)){let t=new Set(s.flat(1/0).reverse());for(let o of t)e.unshift(se(o))}else s!==void 0&&e.push(se(s));return e}static _$Eu(s,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var s;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(s=this.constructor.l)==null||s.forEach(e=>e(this))}addController(s){var e,t;((e=this._$EO)!=null?e:this._$EO=new Set).add(s),this.renderRoot!==void 0&&this.isConnected&&((t=s.hostConnected)==null||t.call(s))}removeController(s){var e;(e=this._$EO)==null||e.delete(s)}_$E_(){let s=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(s.set(t,this[t]),delete this[t]);s.size>0&&(this._$Ep=s)}createRenderRoot(){var e;let s=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return ve(s,this.constructor.elementStyles),s}connectedCallback(){var s,e;(s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(s){}disconnectedCallback(){var s;(s=this._$EO)==null||s.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(s,e,t){this._$AK(s,t)}_$ET(s,e){var i;let t=this.constructor.elementProperties.get(s),o=this.constructor._$Eu(s,t);if(o!==void 0&&t.reflect===!0){let r=(((i=t.converter)==null?void 0:i.toAttribute)!==void 0?t.converter:B).toAttribute(e,t.type);this._$Em=s,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(s,e){var i,r,n,l;let t=this.constructor,o=t._$Eh.get(s);if(o!==void 0&&this._$Em!==o){let d=t.getPropertyOptions(o),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)==null?void 0:i.fromAttribute)!==void 0?d.converter:B;this._$Em=o,this[o]=(l=(n=c.fromAttribute(e,d.type))!=null?n:(r=this._$Ej)==null?void 0:r.get(o))!=null?l:null,this._$Em=null}}requestUpdate(s,e,t){var o,i;if(s!==void 0){let r=this.constructor,n=this[s];if(t!=null||(t=r.getPropertyOptions(s)),!(((o=t.hasChanged)!=null?o:Q)(n,e)||t.useDefault&&t.reflect&&n===((i=this._$Ej)==null?void 0:i.get(s))&&!this.hasAttribute(r._$Eu(s,t))))return;this.C(s,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(s,e,{useDefault:t,reflect:o,wrapped:i},r){var n,l,d;t&&!((n=this._$Ej)!=null?n:this._$Ej=new Map).has(s)&&(this._$Ej.set(s,(l=r!=null?r:e)!=null?l:this[s]),i!==!0||r!==void 0)||(this._$AL.has(s)||(this.hasUpdated||t||(e=void 0),this._$AL.set(s,e)),o===!0&&this._$Em!==s&&((d=this._$Eq)!=null?d:this._$Eq=new Set).add(s))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t,o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:l}=n,d=this[r];l!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,n,d)}}let s=!1,e=this._$AL;try{s=this.shouldUpdate(e),s?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EM()}catch(i){throw s=!1,this._$EM(),i}s&&this._$AE(e)}willUpdate(s){}_$AE(s){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostUpdated)==null?void 0:o.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(s){}firstUpdated(s){}},Ae;A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[J("elementProperties")]=new Map,A[J("finalized")]=new Map,oe==null||oe({ReactiveElement:A}),((Ae=k.reactiveElementVersions)!=null?Ae:k.reactiveElementVersions=[]).push("2.1.0");var j=globalThis,Y=j.trustedTypes,Se=Y?Y.createPolicy("lit-html",{createHTML:a=>a}):void 0,Me="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Ne="?"+E,ot=`<${Ne}>`,M=document,L=()=>M.createComment(""),D=a=>a===null||typeof a!="object"&&typeof a!="function",pe=Array.isArray,rt=a=>pe(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",re=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,ke=/>/g,P=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,_e=/"/g,Oe=/^(?:script|style|textarea|title)$/i,ue=a=>(s,...e)=>({_$litType$:a,strings:s,values:e}),p=ue(1),ht=ue(2),mt=ue(3),S=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Pe=new WeakMap,I=M.createTreeWalker(M,129);function Ve(a,s){if(!pe(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(s):s}var it=(a,s)=>{let e=a.length-1,t=[],o,i=s===2?"<svg>":s===3?"<math>":"",r=q;for(let n=0;n<e;n++){let l=a[n],d,c,u=-1,b=0;for(;b<l.length&&(r.lastIndex=b,c=r.exec(l),c!==null);)b=r.lastIndex,r===q?c[1]==="!--"?r=Ce:c[1]!==void 0?r=ke:c[2]!==void 0?(Oe.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=P):c[3]!==void 0&&(r=P):r===P?c[0]===">"?(r=o!=null?o:q,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?P:c[3]==='"'?_e:Ee):r===_e||r===Ee?r=P:r===Ce||r===ke?r=q:(r=P,o=void 0);let h=r===P&&a[n+1].startsWith("/>")?" ":"";i+=r===q?l+ot:u>=0?(t.push(d),l.slice(0,u)+Me+l.slice(u)+E+h):l+E+(u===-2?n:h)}return[Ve(a,i+(a[e]||"<?>")+(s===2?"</svg>":s===3?"</math>":"")),t]},H=class a{constructor({strings:s,_$litType$:e},t){let o;this.parts=[];let i=0,r=0,n=s.length-1,l=this.parts,[d,c]=it(s,e);if(this.el=a.createElement(d,t),I.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=I.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(Me)){let b=c[r++],h=o.getAttribute(u).split(E),v=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:v[2],strings:h,ctor:v[1]==="."?ae:v[1]==="?"?le:v[1]==="@"?de:U}),o.removeAttribute(u)}else u.startsWith(E)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(Oe.test(o.tagName)){let u=o.textContent.split(E),b=u.length-1;if(b>0){o.textContent=Y?Y.emptyScript:"";for(let h=0;h<b;h++)o.append(u[h],L()),I.nextNode(),l.push({type:2,index:++i});o.append(u[b],L())}}}else if(o.nodeType===8)if(o.data===Ne)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(E,u+1))!==-1;)l.push({type:7,index:i}),u+=E.length-1}i++}}static createElement(s,e){let t=M.createElement("template");return t.innerHTML=s,t}};function V(a,s,e=a,t){var r,n,l;if(s===S)return s;let o=t!==void 0?(r=e._$Co)==null?void 0:r[t]:e._$Cl,i=D(s)?void 0:s._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((n=o==null?void 0:o._$AO)==null||n.call(o,!1),i===void 0?o=void 0:(o=new i(a),o._$AT(a,e,t)),t!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[t]=o:e._$Cl=o),o!==void 0&&(s=V(a,o._$AS(a,s.values),o,t)),s}var ne=class{constructor(s,e){this._$AV=[],this._$AN=void 0,this._$AD=s,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(s){var d;let{el:{content:e},parts:t}=this._$AD,o=((d=s==null?void 0:s.creationScope)!=null?d:M).importNode(e,!0);I.currentNode=o;let i=I.nextNode(),r=0,n=0,l=t[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new z(i,i.nextSibling,this,s):l.type===1?c=new l.ctor(i,l.name,l.strings,this,s):l.type===6&&(c=new ce(i,this,s)),this._$AV.push(c),l=t[++n]}r!==(l==null?void 0:l.index)&&(i=I.nextNode(),r++)}return I.currentNode=M,o}p(s){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(s,t,e),e+=t.strings.length-2):t._$AI(s[e])),e++}},z=class a{get _$AU(){var s,e;return(e=(s=this._$AM)==null?void 0:s._$AU)!=null?e:this._$Cv}constructor(s,e,t,o){var i;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=s,this._$AB=e,this._$AM=t,this.options=o,this._$Cv=(i=o==null?void 0:o.isConnected)!=null?i:!0}get parentNode(){let s=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(s==null?void 0:s.nodeType)===11&&(s=e.parentNode),s}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(s,e=this){s=V(this,s,e),D(s)?s===y||s==null||s===""?(this._$AH!==y&&this._$AR(),this._$AH=y):s!==this._$AH&&s!==S&&this._(s):s._$litType$!==void 0?this.$(s):s.nodeType!==void 0?this.T(s):rt(s)?this.k(s):this._(s)}O(s){return this._$AA.parentNode.insertBefore(s,this._$AB)}T(s){this._$AH!==s&&(this._$AR(),this._$AH=this.O(s))}_(s){this._$AH!==y&&D(this._$AH)?this._$AA.nextSibling.data=s:this.T(M.createTextNode(s)),this._$AH=s}$(s){var i;let{values:e,_$litType$:t}=s,o=typeof t=="number"?this._$AC(s):(t.el===void 0&&(t.el=H.createElement(Ve(t.h,t.h[0]),this.options)),t);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(e);else{let r=new ne(o,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(s){let e=Pe.get(s.strings);return e===void 0&&Pe.set(s.strings,e=new H(s)),e}k(s){pe(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,o=0;for(let i of s)o===e.length?e.push(t=new a(this.O(L()),this.O(L()),this,this.options)):t=e[o],t._$AI(i),o++;o<e.length&&(this._$AR(t&&t._$AB.nextSibling,o),e.length=o)}_$AR(s=this._$AA.nextSibling,e){var t;for((t=this._$AP)==null?void 0:t.call(this,!1,!0,e);s&&s!==this._$AB;){let o=s.nextSibling;s.remove(),s=o}}setConnected(s){var e;this._$AM===void 0&&(this._$Cv=s,(e=this._$AP)==null||e.call(this,s))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(s,e,t,o,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=s,this.name=e,this._$AM=o,this.options=i,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=y}_$AI(s,e=this,t,o){let i=this.strings,r=!1;if(i===void 0)s=V(this,s,e,0),r=!D(s)||s!==this._$AH&&s!==S,r&&(this._$AH=s);else{let n=s,l,d;for(s=i[0],l=0;l<i.length-1;l++)d=V(this,n[t+l],e,l),d===S&&(d=this._$AH[l]),r||(r=!D(d)||d!==this._$AH[l]),d===y?s=y:s!==y&&(s+=(d!=null?d:"")+i[l+1]),this._$AH[l]=d}r&&!o&&this.j(s)}j(s){s===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,s!=null?s:"")}},ae=class extends U{constructor(){super(...arguments),this.type=3}j(s){this.element[this.name]=s===y?void 0:s}},le=class extends U{constructor(){super(...arguments),this.type=4}j(s){this.element.toggleAttribute(this.name,!!s&&s!==y)}},de=class extends U{constructor(s,e,t,o,i){super(s,e,t,o,i),this.type=5}_$AI(s,e=this){var r;if((s=(r=V(this,s,e,0))!=null?r:y)===S)return;let t=this._$AH,o=s===y&&t!==y||s.capture!==t.capture||s.once!==t.once||s.passive!==t.passive,i=s!==y&&(t===y||o);o&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,s),this._$AH=s}handleEvent(s){var e,t;typeof this._$AH=="function"?this._$AH.call((t=(e=this.options)==null?void 0:e.host)!=null?t:this.element,s):this._$AH.handleEvent(s)}},ce=class{constructor(s,e,t){this.element=s,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(s){V(this,s)}};var ie=j.litHtmlPolyfillSupport,Ie;ie==null||ie(H,z),((Ie=j.litHtmlVersions)!=null?Ie:j.litHtmlVersions=[]).push("3.3.0");var Ue=(a,s,e)=>{var i,r;let t=(i=e==null?void 0:e.renderBefore)!=null?i:s,o=t._$litPart$;if(o===void 0){let n=(r=e==null?void 0:e.renderBefore)!=null?r:null;t._$litPart$=o=new z(s.insertBefore(L(),n),n,void 0,e!=null?e:{})}return o._$AI(a),o};var N=globalThis,_=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=s.firstChild),s}update(s){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(s),this._$Do=Ue(e,this.renderRoot,this.renderOptions)}connectedCallback(){var s;super.connectedCallback(),(s=this._$Do)==null||s.setConnected(!0)}disconnectedCallback(){var s;super.disconnectedCallback(),(s=this._$Do)==null||s.setConnected(!1)}render(){return S}},Re;_._$litElement$=!0,_.finalized=!0,(Re=N.litElementHydrateSupport)==null||Re.call(N,{LitElement:_});var he=N.litElementPolyfillSupport;he==null||he({LitElement:_});var Fe;((Fe=N.litElementVersions)!=null?Fe:N.litElementVersions=[]).push("4.2.0");var Je={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Be=a=>(...s)=>({_$litDirective$:a,values:s}),Z=class{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,e,t){this._$Ct=s,this._$AM=e,this._$Ci=t}_$AS(s,e){return this.update(s,e)}update(s,e){return this.render(...e)}};var K=class extends Z{constructor(s){if(super(s),this.it=y,s.type!==Je.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(s){if(s===y||s==null)return this._t=void 0,this.it=s;if(s===S)return s;if(typeof s!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(s===this.it)return this._t;this.it=s;let e=[s];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};K.directiveName="unsafeHTML",K.resultType=1;var qe=Be(K);async function je({url:a,method:s="POST",headers:e={},requestBody:t,contentType:o="application/json",setLoading:i,setResponse:r}){i(!0);try{let n,l=T({Accept:"application/json"},e);["POST","PUT","PATCH","DELETE"].includes(s.toUpperCase())&&t!=null&&t!==""&&(o==="application/json"?(l["Content-Type"]="application/json",n=typeof t=="string"?t:JSON.stringify(t)):o==="application/x-www-form-urlencoded"?(l["Content-Type"]="application/x-www-form-urlencoded",typeof t=="string"?n=t:typeof t=="object"&&t!==null&&(n=Object.keys(t).map(u=>`${encodeURIComponent(u)}=${encodeURIComponent(t[u])}`).join("&"))):(l["Content-Type"]=o,n=typeof t=="string"?t:JSON.stringify(t)));let d=await fetch(a,{method:s,headers:l,body:n}),c=await d.text();r(c,d.status,d.ok)}catch(n){r("Error: "+((n==null?void 0:n.message)||n),0,!1)}finally{i(!1)}}var Le=a=>(s,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,s)}):customElements.define(a,s)};var nt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:Q},at=(a=nt,s,e)=>{let{kind:t,metadata:o}=e,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),t==="setter"&&((a=Object.create(a)).wrapped=!0),i.set(e.name,a),t==="accessor"){let{name:r}=e;return{set(n){let l=s.get.call(this);s.set.call(this,n),this.requestUpdate(r,l,a)},init(n){return n!==void 0&&this.C(r,void 0,a,n),n}}}if(t==="setter"){let{name:r}=e;return function(n){let l=this[r];s.call(this,n),this.requestUpdate(r,l,a)}}throw Error("Unsupported decorator location: "+t)};function g(a){return(s,e)=>typeof e=="object"?at(a,s,e):((t,o,i)=>{let r=o.hasOwnProperty(i);return o.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(o,i):void 0})(a,s,e)}var m=class extends _{constructor(){super();this.activeDebugTab="properties";this.activeFormatterTab="success";this.formatterJsonInput="";this.formatterSelectedFields=new Map;this.formatterUseArrayNotation=!0;this.formatterMessageTitle="";this.label="";this.description="";this.readOnly=!1;this._value={success:null,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0};this.requestBody="";this.apiUrl="";this.requestHeaders="";this.bearerToken="";this.tokenUrl="";this.clientId="";this.clientSecret="";this.outputValueKey="";this.contentType="application/json";this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.countdownEnabled=!1;this.countdownTimer=5;this._btnEnabled=!0;this.btnText="Send API Request";this.btnAlignment="left";this._btnVisible=!0;this.fieldValidation=!1;this.ruleValidation=!1;this.submissionAction="no-submit";this.submitHidden=!1;this.showMoreDetails="Never";this.alertPosition="After";this.detailsExpanded=!1;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.showCooldownAlert=!1;this.lastCooldownAlertTime=0;this.apiCallStartTime=0;this.cooldownTimerId=null;this.formValidationError="";this.oauthTokenResponse=null;this.checkingRuleValidation=!1;this.submitBlockerAttached=!1;this.delayedSubmissionStartTime=0;this.allowFormSubmit=!1}get value(){return this._value}set value(e){let t=this._value;this._value=e,console.log("[Value Setter] Value changed, dispatching ntx-value-change event",e),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:e,bubbles:!0,composed:!0})),this.requestUpdate("value",t)}get btnEnabled(){return this._btnEnabled}set btnEnabled(e){let t=this._btnEnabled;this._btnEnabled=e,console.log(`[Property Setter] btnEnabled changed from ${t} to ${e}`),this.requestUpdate("btnEnabled",t)}get btnVisible(){return this._btnVisible}set btnVisible(e){let t=this._btnVisible;this._btnVisible=e,console.log(`[Property Setter] btnVisible changed from ${t} to ${e}`),this.requestUpdate("btnVisible",t)}connectedCallback(){super.connectedCallback(),this.toggleSubmitButtonVisibility(),this.attachSubmitBlocker()}attachSubmitBlocker(){if(this.submitBlockerAttached)return;let e=document.querySelector("form");if(!e){console.warn("[Submit Blocker] No form found to attach blocker");return}e.addEventListener("submit",t=>{if(this.checkingRuleValidation){console.log("[Submit Blocker] Blocking submit - checking rule validation"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();return}if(this.allowFormSubmit){console.log("[Submit Blocker] Allowing submit - explicitly triggered by plugin"),this.allowFormSubmit=!1;return}if(this.submissionAction==="no-submit"){console.log("[Submit Blocker] Blocking submit - submissionAction is no-submit"),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();return}},!0),this.submitBlockerAttached=!0,console.log("[Submit Blocker] Persistent submit blocker attached")}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL",description:"The endpoint URL to call",defaultValue:""},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH","OPTIONS"],defaultValue:"POST"},requestHeaders:{type:"string",title:"Request Headers",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},bearerToken:{type:"string",title:"Bearer Token",description:"Optional: Bearer token value for Authorization header (used if Token URL is not provided)",defaultValue:""},tokenUrl:{type:"string",title:"Token URL",description:"Optional: OAuth token endpoint URL e.g. https://api.example.com/oauth2/v1/token",defaultValue:""},clientId:{type:"string",title:"Client ID",description:"OAuth Client ID required if Token URL is provided",defaultValue:""},clientSecret:{type:"string",title:"Client Secret",description:"OAuth Client Secret required if Token URL is provided",defaultValue:""},requestBody:{type:"string",title:"Request Body",description:"Body to send in the API request. Format depends on Content Type.",defaultValue:""},outputValueKey:{type:"string",title:"Output Value Key",description:"Optional: JSON key path to extract from response",defaultValue:""},contentType:{type:"string",title:"Content Type",description:"The Content-Type header for the request body.",enum:["application/json","application/x-www-form-urlencoded","text/plain"],defaultValue:"application/json"},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"object",title:"API Response",description:"The complete API response object containing status, data, and metadata",isValueField:!0,properties:{success:{type:"boolean",title:"Success",description:"Whether the API call was successful"},statusCode:{type:"integer",title:"HTTP Status Code",description:"The HTTP response status code"},responseType:{type:"string",title:"Response Type",description:"The categorized response type (success, warning, error)"},data:{type:"string",title:"Response Data",description:"The raw response data from the API"},message:{type:"string",title:"Response Message",description:"Actual message from API response"},formattedResponse:{type:"string",title:"Formatted Response",description:"Formatted response message based on Success/Warning/Error Message configuration"},timestamp:{type:"string",title:"Timestamp",description:"ISO timestamp of when the API call was made"},executionTime:{type:"integer",title:"Execution Time",description:"Time taken for the API call in milliseconds"},access_token:{type:"string",title:"Access Token",description:"Automatically extracted access_token from response if present"},output:{type:"string",title:"Custom Output",description:"Custom extracted value based on outputValueKey property"}},defaultValue:{success:null,statusCode:0,responseType:"",data:"",message:"",formattedResponse:"",timestamp:"",executionTime:0}},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails. Can be plain text or a Response Format Configuration JSON from the Response Formatter.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},countdownEnabled:{type:"boolean",title:"Enable Countdown Timer",description:"If true, enforces a countdown timer between API calls. If false, allows unlimited rapid calls.",defaultValue:!1},countdownTimer:{type:"number",title:"Countdown Timer",description:"Number of seconds to wait between API calls when countdown is enabled.",defaultValue:5},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"},fieldValidation:{type:"boolean",title:"Validate Fields Before API Call",description:"If true, validates all form fields before making the API call. Only proceeds if all required fields are valid.",defaultValue:!1},ruleValidation:{type:"boolean",title:"Validate Rules Before API Call",description:"If true, validates Nintex form rules by triggering submission logic (but blocking actual submit). This catches rule-based validation. Only proceeds if all rules pass.",defaultValue:!1},submissionAction:{type:"string",title:"Submission Action",description:'Action to take after a successful API call. Set to "only-submit" to skip API call and directly submit the form.',enum:["no-submit","quick-submit","delayed-submit","only-submit"],defaultValue:"no-submit"},submitHidden:{type:"boolean",title:"Hide Submit Button",description:"If true, hides the Nintex form submit button from users.",defaultValue:!1},showMoreDetails:{type:"string",title:"Show More Details",description:"Controls when to show expandable raw response details in alerts.",enum:["Never","Always","On Error/Warning"],defaultValue:"Never"},alertPosition:{type:"string",title:"Alert Position",description:"Controls where the alert message is displayed relative to the button.",enum:["After","Before","Pop-out"],defaultValue:"After"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!1}}}render(){return this.debugMode?p`
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
    `:p`<div class="plugin-container" style="display: none;"></div>`}renderButtonWithAlert(e){let t=this.renderResponseAlert(this.alertPosition==="Before"),o=p`
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
        ${this.shouldShowAlert()?this.renderModal(t):""}
      `:this.alertPosition==="Before"?p`
        <div class="form-group">
          ${t}
          <div class="btn-container align-${this.btnAlignment}">
            ${o}
          </div>
        </div>
      `:p`
      <div class="form-group">
        <div class="btn-container align-${this.btnAlignment}">
          ${o}
        </div>
        ${t}
      </div>
    `}shouldShowAlert(){if(this.formValidationError)return!0;let t=Date.now()-this.lastApiCallTime,o=this.countdownTimer*1e3;return this.countdownEnabled&&this.lastApiCallTime>0&&t<o&&this.showCooldownAlert?!0:!(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)}renderModal(e){return p`
      <div class="modal-overlay" @click=${t=>{t.target===t.currentTarget&&this.closeModal()}}>
        <div class="modal-content">
          <button class="modal-close" @click=${()=>this.closeModal()}>&times;</button>
          ${e}
        </div>
      </div>
    `}closeModal(){this.apiResponse="",this.responseType=null,this.formValidationError="",this.showCooldownAlert=!1,this.requestUpdate()}renderResponseAlert(e=!1){var $;let o=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3,r=this.countdownEnabled&&this.lastApiCallTime>0&&o<i,n=this.submissionAction==="delayed-submit"&&this.cooldownTimerId!==null&&(this.responseType==="success"||this.responseType==="warning"),l=e?"alert-before":"";if(this.formValidationError)return p`
        <div class="alert alert-error ${l}" part="validation-alert">
          <div>
            <span class="alert-icon">✗</span>
            <strong>Validation Error:</strong> ${this.formValidationError}
          </div>
        </div>
      `;if(r&&this.showCooldownAlert){let C=Math.ceil((i-o)/1e3);return p`
        <div class="alert alert-info ${l}" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${C} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType||this.lastCooldownAlertTime>this.lastApiCallTime)return"";let d=`alert-${this.responseType}`,c=this.getAlertIcon(this.responseType),u=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),b=this.getCustomMessage(this.responseType),h=b.title,v=b.message,w=0;if(n){let C=Date.now()-this.delayedSubmissionStartTime,De=this.countdownTimer*1e3-C;w=Math.max(0,Math.ceil(De/1e3))}let x=v.includes(`
`);if(this.responseType==="success"){let C=this.shouldShowMoreDetails("success")||n;return p`
        <div class="alert ${d} ${l}" part="response-alert">
          ${h?p`
            <div>
              <strong>${h}</strong>
            </div>
          `:""}
          ${x?p`
            <div class="alert-response" style="white-space: pre-line; margin-top: ${h?"8px":"0"};">
              ${v}
            </div>
          `:p`
            <div style="display: inline; margin-left: ${h?"4px":"0"};">
              ${v}
            </div>
          `}
          ${C?p`
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
              ${n?p`
                <div class="alert-footer-right">
                  Submitting form in ${w} seconds...
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
      `}let O=this.shouldShowMoreDetails(this.responseType)||n;return p`
      <div class="alert ${d} ${l}" part="response-alert">
        ${h?p`
          <div>
            <strong>${h}</strong>
          </div>
        `:""}
        ${x?p`
          <div class="alert-response" style="white-space: pre-line; margin-top: ${h?"8px":"0"};">
            ${v}
          </div>
        `:p`
          <div style="display: inline; margin-left: ${h?"4px":"0"};">
            ${v}
          </div>
        `}
        ${($=this.value)!=null&&$.message?p`
          <div class="alert-response">
            ${qe(this.formatMessageWithBoldLabels(this.value.message))}
          </div>
        `:""}
        ${O?p`
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
            ${n?p`
              <div class="alert-footer-right">
                Submitting form in ${w} seconds...
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
`).map(i=>{let r=i.match(/^([^:]+):\s*(.*)$/);if(r){let n=r[1].trim(),l=r[2];return`<strong>${n}:</strong> ${l}`}return i}).join("<br>"):""}getAlertIcon(e){switch(e){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}shouldShowMoreDetails(e){return this.showMoreDetails==="Never"?!1:this.showMoreDetails==="Always"?!0:this.showMoreDetails==="On Error/Warning"?e==="error"||e==="warning":!1}toggleDetailsExpanded(){this.detailsExpanded=!this.detailsExpanded,this.requestUpdate()}formatRawResponse(){if(!this.apiResponse)return"";try{let e=JSON.parse(this.apiResponse);return JSON.stringify(e,null,2)}catch(e){return this.apiResponse}}copyRawResponseToClipboard(){let e=this.formatRawResponse();this.copyToClipboard(e)}getCustomMessage(e){let t;switch(e){case"success":t=this.successMessage;break;case"warning":t=this.warningMessage;break;case"error":t=this.errorMessage;break;default:t="Unknown response type"}if(t.startsWith('"{')&&t.endsWith('}"'))try{let o=t.slice(1,-1).replace(/\\"/g,'"'),i=JSON.parse(o);return{title:i.title||null,message:this.formatResponseWithConfig(i)}}catch(o){return console.error("[Message Formatting] Failed to parse quoted config:",o),{title:null,message:t}}if(t.trim().startsWith('{"'))try{let o=JSON.parse(t);return{title:o.title||null,message:this.formatResponseWithConfig(o)}}catch(o){return console.error("[Message Formatting] Failed to parse unquoted config:",o),{title:null,message:t}}return{title:null,message:t}}formatResponseWithConfig(e){if(!e.fields||!Array.isArray(e.fields))return"Invalid configuration format";let t;try{t=JSON.parse(this.value.data)}catch(i){return console.error("[Message Formatting] Failed to parse response data:",i),"Unable to parse response data"}let o=[];return e.fields.forEach(i=>{let r=this.extractNestedValue(t,i.path);if(Array.isArray(r))if(r.length>0){let n=r[0];typeof n!="object"||n===null?(o.push(`${i.title}:`),r.forEach((d,c)=>{o.push(`  ${c+1}. ${String(d)}`)})):(o.push(`${i.title}:`),r.forEach((d,c)=>{let u=JSON.stringify(d);o.push(`  ${c+1}. ${u}`)}))}else o.push(`${i.title}: (empty)`);else{let n=r!=null?String(r):"N/A";o.push(`${i.title}: ${n}`)}}),o.join(`
`)}updated(e){e.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger(),e.has("submitHidden")&&this.toggleSubmitButtonVisibility(),e.has("btnVisible")&&(console.log(`[UI Property Change] btnVisible changed to: ${this.btnVisible}`),this.requestUpdate()),e.has("btnEnabled")&&(console.log(`[UI Property Change] btnEnabled changed to: ${this.btnEnabled}`),this.requestUpdate()),e.has("btnText")&&(console.log(`[UI Property Change] btnText changed to: ${this.btnText}`),this.requestUpdate()),e.has("btnAlignment")&&(console.log(`[UI Property Change] btnAlignment changed to: ${this.btnAlignment}`),this.requestUpdate()),e.has("debugMode")&&(console.log(`[UI Property Change] debugMode changed to: ${this.debugMode}`),this.requestUpdate())}toggleSubmitButtonVisibility(){let e="ntx-submit-button-hidden-style";if(this.submitHidden){if(!document.getElementById(e)){let t=document.createElement("style");t.id=e,t.textContent=`
          button[data-e2e="btn-submit"] {
            display: none !important;
          }
        `,document.head.appendChild(t),console.log("[Submit Button] Hidden via CSS")}}else{let t=document.getElementById(e);t&&(t.remove(),console.log("[Submit Button] Made visible by removing CSS"))}}async validateNintexFormBySubmit(){console.log("[Rule Validation] Starting rule-based validation...");let e=document.querySelector("form");return e?(this.checkingRuleValidation=!0,console.log("[Rule Validation] Flag set - will block form submission"),new Promise(t=>{let o=e.querySelector('button[type="submit"]');o instanceof HTMLElement?(console.log("[Rule Validation] Triggering submit to check rules..."),o.click(),setTimeout(()=>{console.log("[Rule Validation] Checking for validation errors...");let i=e.querySelectorAll('[aria-invalid="true"]'),r=e.querySelectorAll(":invalid"),n=e.querySelectorAll('.ntx-form-error, [class*="error-message"], [role="alert"]'),d=i.length+r.length===0&&n.length===0;console.log("[Rule Validation] Validation check results:"),console.log("  - aria-invalid:",i.length),console.log("  - HTML5 invalid:",r.length),console.log("  - Error messages:",n.length),console.log("[Rule Validation] Form is valid:",d),this.checkingRuleValidation=!1,console.log("[Rule Validation] Flag cleared - form can submit if triggered"),t(d)},350)):(console.error("[Rule Validation] No submit button found"),this.checkingRuleValidation=!1,t(!0))})):(console.warn("[Rule Validation] No form found for validation"),!0)}async validateNintexForm(){console.log("[Validation] Starting form validation...");let e=document.querySelector("form");if(!e)return console.warn("[Validation] No form found for validation"),!0;console.log("[Validation] Triggering validation on form inputs"),e.querySelectorAll("input, textarea, select").forEach(d=>{(d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement||d instanceof HTMLSelectElement)&&d.reportValidity()}),console.log("[Validation] Waiting 200ms for validation state to update..."),await new Promise(d=>setTimeout(d,200));let o=e.querySelectorAll('[aria-invalid="true"]'),i=e.querySelectorAll(":invalid"),r=e.querySelectorAll('.ntx-form-error, [class*="error-message"]'),l=o.length+i.length===0&&r.length===0;return console.log("[Validation] Invalid fields found:"),console.log("  - aria-invalid:",o.length),console.log("  - HTML5 invalid:",i.length),console.log("  - Error messages:",r.length),console.log("[Validation] Form is valid:",l),l||(console.log("[Validation] Form validation FAILED. Invalid fields:"),o.forEach((d,c)=>{console.log(`  [aria-invalid ${c+1}]`,d)}),i.forEach((d,c)=>{console.log(`  [HTML5 invalid ${c+1}]`,d)})),l}async handleAPICallTrigger(){if(console.log("[API Trigger] Button clicked - starting validation and API flow..."),this.sendAPICall=!1,this.formValidationError="",this.submissionAction==="only-submit"){console.log("[API Trigger] Submission action is only-submit - skipping validation and API, submitting form directly"),this.submitNintexForm();return}if(this.fieldValidation){console.log("[API Trigger] Field validation is ENABLED, checking fields...");let e=await this.validateNintexForm();if(console.log("[API Trigger] Field validation result:",e),!e){console.log("[API Trigger] Field validation FAILED - STOPPING"),this.formValidationError="Please fill in all required fields correctly before submitting.",this.requestUpdate();return}console.log("[API Trigger] Field validation PASSED - proceeding...")}else console.log("[API Trigger] Field validation is DISABLED - skipping...");if(this.ruleValidation){console.log("[API Trigger] Rule validation is ENABLED, checking rules...");let e=await this.validateNintexFormBySubmit();if(console.log("[API Trigger] Rule validation result:",e),!e){console.log("[API Trigger] Rule validation FAILED - STOPPING"),this.formValidationError="Please correct the form validation errors before proceeding.",this.requestUpdate();return}console.log("[API Trigger] Rule validation PASSED - proceeding...")}else console.log("[API Trigger] Rule validation is DISABLED - skipping...");if(!this.allowMultipleAPICalls&&this.hasSuccessfulCall){console.log("[API Trigger] Multiple API calls not allowed and already had successful call - STOPPING");return}if(this.countdownEnabled){let t=Date.now()-this.lastApiCallTime,o=this.countdownTimer*1e3;if(this.lastApiCallTime>0&&t<o){console.log("[API Trigger] In cooldown period - STOPPING"),this.showCooldownAlert=!0,this.lastCooldownAlertTime=Date.now(),this.startCooldownTimer();return}}console.log("[API Trigger] All validation and checks passed - calling handleApiCall()"),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){if(this.allowMultipleAPICalls)return this.isLoading;let e=this.hasSuccessfulCall&&(this.responseType==="success"||this.responseType==="warning");return this.isLoading||!this.btnEnabled||e}setActiveTab(e){this.activeDebugTab=e,this.requestUpdate()}renderPropertiesTab(){let e=this.constructor.getMetaConfig(),t=[];if(e.properties)for(let[o,i]of Object.entries(e.properties))o!=="value"&&t.push({name:o,default:i.defaultValue,config:i});return p`
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
      `;if(i==="string"){let r=(e==="bearerToken"||e==="clientSecret")&&o&&o.length>0?"***"+o.slice(-4):o,n=r&&r.length>100?r.substring(0,100)+"...":r;return p`
        <span style="font-family: 'Courier New', monospace; font-size: 12px; word-break: break-all;">
          ${n||"<empty>"}
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
            @input=${r=>{let n=r.target;this.formatterJsonInput=n.value,this.requestUpdate()}}
            placeholder="Paste your API response JSON here (for success, error, or warning responses)..."
            style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 13px;"
          ></textarea>
          ${i?p`<div class="text-danger" style="margin-top: 8px;">${i}</div>`:""}
        </div>

        ${t&&o?p`
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
    `}renderMessageTypeConfig(e,t,o){let r={success:{bg:"#d4edda",text:"#155724",border:"#c3e6cb",btnBg:"#28a745",btnText:"white"},warning:{bg:"#fff3cd",text:"#856404",border:"#ffeaa7",btnBg:"#ffc107",btnText:"#000"},error:{bg:"#f8d7da",text:"#721c24",border:"#f5c6cb",btnBg:"#dc3545",btnText:"white"}}[e];return p`
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
              style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 12px; background: ${r.bg}; color: ${r.text}; border-color: ${r.border};"
            ></textarea>
          </div>
          <div style="font-size: 11px; color: var(--ntx-form-theme-color-secondary); margin-top: 4px;">
            ${t.trim().startsWith('{"fields"')||t.trim().startsWith('"{')?"\u2713 Formatted response configuration detected":"\u25CB Plain text message"}
          </div>
        </div>

        <!-- Preview -->
        <div class="form-group">
          <label class="control-label">Preview of Current Configuration</label>
          <div style="border: 1px solid ${r.border}; border-radius: 4px; padding: 16px; background: ${r.bg}; color: ${r.text}; white-space: pre-line; min-height: 60px;">
            ${this.getPreviewForConfig(t,o)}
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
              @input=${n=>{let l=n.target;this.formatterMessageTitle=l.value,this.requestUpdate()}}
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
                    @change=${n=>{let l=n.target;this.formatterUseArrayNotation=l.checked,this.requestUpdate()}}
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
                @click=${()=>{let n=this.generateResponseConfigQuoted();this.copyToClipboard(n)}}
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
    `}getPreviewForConfig(e,t){if(!e||e.trim().length===0)return p`<span style="font-style: italic; opacity: 0.6;">No configuration set</span>`;let o=this.value,i=R(T({},this.value),{data:JSON.stringify(t)});this.value=i;let r;if(e.trim().startsWith('{"fields"')||e.trim().startsWith('"{'))try{let n;if(e.startsWith('"{')&&e.endsWith('}"')){let l=e.slice(1,-1).replace(/\\"/g,'"');n=JSON.parse(l)}else n=JSON.parse(e);r=this.formatResponseWithConfig(n)}catch(n){r=e}else r=e;return this.value=o,r}loadConfigIntoFields(e){let t=e==="success"?this.successMessage:e==="warning"?this.warningMessage:this.errorMessage;if(this.formatterSelectedFields.clear(),this.formatterMessageTitle="",!t||t.trim().length===0){this.requestUpdate();return}try{let o;if(t.startsWith('"{')&&t.endsWith('}"')){let i=t.slice(1,-1).replace(/\\"/g,'"');o=JSON.parse(i)}else if(t.trim().startsWith('{"'))o=JSON.parse(t);else{this.requestUpdate();return}o.title&&(this.formatterMessageTitle=o.title),o.fields&&Array.isArray(o.fields)&&o.fields.forEach((i,r)=>{this.formatterSelectedFields.set(i.path,{title:i.title||i.path,checked:!0,order:r})})}catch(o){console.error("[Config Loading] Failed to parse config:",o)}this.requestUpdate()}renderAvailableFields(e,t){let o=[],i=(r,n)=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(l=>{var u,b;let d=n?`${n}.${l}`:l,c=r[l];if(Array.isArray(c)&&c.length>0){if(this.formatterUseArrayNotation){let h=`${d}[*]`,v=((u=this.formatterSelectedFields.get(h))==null?void 0:u.checked)||!1,w=`Array with ${c.length} item${c.length>1?"s":""}`;o.push(p`
                <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${v?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                  <input 
                    type="checkbox" 
                    .checked=${v}
                    @change=${x=>{if(x.target.checked){let $=-1;this.formatterSelectedFields.forEach(C=>{C.order>$&&($=C.order)}),this.formatterSelectedFields.set(h,{title:l,checked:!0,order:$+1})}else this.formatterSelectedFields.delete(h);this.requestUpdate()}}
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
              `)}if(typeof c[0]=="object"&&!Array.isArray(c[0])){let h=this.formatterUseArrayNotation?`${d}[*]`:`${d}[0]`;i(c[0],h)}}else if(c!==null&&typeof c!="object"){let h=d,v=((b=this.formatterSelectedFields.get(h))==null?void 0:b.checked)||!1;o.push(p`
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px; padding: 8px; border-radius: 4px; background: ${v?"var(--ntx-form-theme-color-primary-light, #e3f2fd)":"transparent"}; transition: background 0.2s;">
                <input 
                  type="checkbox" 
                  .checked=${v}
                  @change=${w=>{if(w.target.checked){let O=-1;this.formatterSelectedFields.forEach($=>{$.order>O&&(O=$.order)}),this.formatterSelectedFields.set(h,{title:h.split(".").pop()||h,checked:!0,order:O+1})}else this.formatterSelectedFields.delete(h);this.requestUpdate()}}
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
            `)}else c&&typeof c=="object"&&!Array.isArray(c)&&i(c,d)})};return i(e,t),o.length>0?o:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields available</div>`}renderSelectedFieldsList(){let e=Array.from(this.formatterSelectedFields.entries()).filter(([t,o])=>o.checked).sort((t,o)=>t[1].order-o[1].order);return e.length===0?p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic; padding: 12px; text-align: center;">No fields selected. Check fields from the left panel.</div>`:e.map(([t,o],i)=>p`
      <div 
        draggable="true"
        @dragstart=${r=>{r.dataTransfer.effectAllowed="move",r.dataTransfer.setData("text/plain",i.toString())}}
        @dragover=${r=>{r.preventDefault(),r.dataTransfer.dropEffect="move"}}
        @drop=${r=>{r.preventDefault();let n=parseInt(r.dataTransfer.getData("text/plain")),l=i;if(n!==l){let d=Array.from(e),[c]=d.splice(n,1);d.splice(l,0,c),d.forEach(([u,b],h)=>{this.formatterSelectedFields.set(u,R(T({},b),{order:h}))}),this.requestUpdate()}}}
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
            @input=${r=>{let n=r.target;this.formatterSelectedFields.set(t,R(T({},o),{title:n.value})),this.requestUpdate()}}
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
    `)}renderFormattedPreview(e){let t=[];return this.formatterSelectedFields.forEach((o,i)=>{if(o.checked){let r=this.extractNestedValue(e,i),n=o.title||i;t.push(p`
          <div style="margin-bottom: 8px;">
            <strong>${n}:</strong> ${r!==void 0?String(r):"N/A"}
          </div>
        `)}}),t.length>0?t:p`<div style="color: var(--ntx-form-theme-color-secondary); font-style: italic;">No fields selected</div>`}generateResponseConfig(){let e={};return this.formatterMessageTitle&&this.formatterMessageTitle.trim()&&(e.title=this.formatterMessageTitle.trim()),e.fields=[],Array.from(this.formatterSelectedFields.entries()).filter(([o,i])=>i.checked).sort((o,i)=>o[1].order-i[1].order).forEach(([o,i])=>{e.fields.push({path:o,title:i.title||o})}),JSON.stringify(e,null,2)}generateResponseConfigQuoted(){let e={};return this.formatterMessageTitle&&this.formatterMessageTitle.trim()&&(e.title=this.formatterMessageTitle.trim()),e.fields=[],Array.from(this.formatterSelectedFields.entries()).filter(([i,r])=>r.checked).sort((i,r)=>i[1].order-r[1].order).forEach(([i,r])=>{e.fields.push({path:i,title:r.title||i})}),`"${JSON.stringify(e).replace(/"/g,'\\"')}"`}formatValue(e){return typeof e=="boolean"?e.toString():typeof e=="string"?`"${e}"`:typeof e=="number"?e.toString():e===null?"null":e===void 0?"undefined":JSON.stringify(e)}formatJsonForDisplay(e){try{let t=JSON.parse(e);return JSON.stringify(t,null,2)}catch(t){return e}}isValidJson(e){if(!e.trim())return!0;try{return JSON.parse(e),!0}catch(t){return!1}}getJsonStatus(e){if(!e.trim())return"Empty";try{let t=JSON.parse(e),o=e.length,i=e.split(`
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
${i.map(n=>`${o}  <span class="json-syntax-key">"${n}"</span><span class="json-syntax-punctuation">:</span> ${this.renderJsonWithSyntaxHighlight(e[n],t+1)}`).join(`,
`)}
${o}<span class="json-syntax-punctuation">}</span>`}return String(e)}static removeInstructionalPlaceholders(e){if(Array.isArray(e))return e.map(t=>this.removeInstructionalPlaceholders(t));if(e&&typeof e=="object"){let t={};for(let[o,i]of Object.entries(e)){if(typeof i=="string"&&/^<.*>$/.test(i.trim()))continue;let r=this.removeInstructionalPlaceholders(i);r!==void 0&&!(typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(t[o]=r)}return t}return e}async fetchOAuthToken(){let e=await fetch(this.tokenUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:this.clientId,client_secret:this.clientSecret})});if(!e.ok)throw new Error(`Token request failed with status ${e.status}`);let t=await e.json();if(!t.access_token)throw new Error("No access_token in response");return this.oauthTokenResponse={access_token:t.access_token,token_type:t.token_type||"Bearer",expires_in:t.expires_in,scope:t.scope,fetched_at:new Date().toISOString(),expires_at:t.expires_in?new Date(Date.now()+t.expires_in*1e3).toISOString():null},t.access_token}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.apiCallStartTime=Date.now(),this.responseType=null,this.apiResponse="";let e=this.bearerToken;if(this.tokenUrl&&this.clientId&&this.clientSecret)try{e=await this.fetchOAuthToken()}catch(r){let n=Date.now()-this.apiCallStartTime,l=new Date().toISOString();this.responseType="error",this.apiResponse=`OAuth token fetch failed: ${r instanceof Error?r.message:String(r)}`,this.value={success:!1,statusCode:401,responseType:"error",data:this.apiResponse,message:"",formattedResponse:this.errorMessage,timestamp:l,executionTime:n},this.isLoading=!1,this.requestUpdate();return}let t=this.apiUrl||"",o={};if(this.requestHeaders)try{o=JSON.parse(this.requestHeaders)}catch(r){o={},this.requestHeaders.split(/\r?\n/).forEach(n=>{let l=n.indexOf(":");if(l>-1){let d=n.slice(0,l).trim(),c=n.slice(l+1).trim();d&&(o[d]=c)}})}e&&e.trim()&&(o.Authorization=`Bearer ${e.trim()}`);let i;if(this.contentType==="application/x-www-form-urlencoded")i=this.requestBody||"";else if(this.contentType==="application/json")if(this.requestBody&&this.requestBody.trim())try{i=JSON.parse(this.requestBody)}catch(r){i=void 0}else i=void 0;else i=this.requestBody||"";await je({url:t,method:this.method||"POST",headers:o,requestBody:i,contentType:this.contentType,setLoading:r=>{this.isLoading=r,this.requestUpdate()},setResponse:(r,n,l)=>{let d=Date.now()-this.apiCallStartTime,c=new Date().toISOString();this.apiResponse=r,this.responseType=l===!1?"error":this.determineResponseType(r),this.formatterJsonInput=r,this.formatterSelectedFields.clear();let u,b,h="";try{let x=JSON.parse(r);x.access_token&&(u=x.access_token),this.outputValueKey&&this.outputValueKey.trim()&&(b=this.extractNestedValue(x,this.outputValueKey)),h=this.extractNestedValue(x,"d.Message")||this.extractNestedValue(x,"Message")||this.extractNestedValue(x,"message")||this.extractNestedValue(x,"msg")||this.extractNestedValue(x,"data.message")||""}catch(x){}let v=this.getCustomMessage(this.responseType);this.value=T(T({success:l!==!1&&(this.responseType==="success"||this.responseType==="warning"),statusCode:n!==void 0?n:this.responseType==="success"?200:500,responseType:this.responseType,data:r,message:h,formattedResponse:v.message,timestamp:c,executionTime:d},u&&{access_token:u}),b!==void 0&&{output:b}),(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),console.log("[Value Change] Value updated at:",new Date().toISOString()),this.requestUpdate(),(this.responseType==="success"||this.responseType==="warning")&&(console.log("[Value Change] Waiting 800ms for Nintex to process value change..."),setTimeout(()=>{console.log("[Value Change] Wait complete at:",new Date().toISOString(),"- proceeding with submission action"),this.handlePostSubmissionAction()},800))}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let t=JSON.parse(e);if(t.error||t.status==="error")return"error";if(t.warning||t.status==="warning")return"warning"}catch(t){}return"success"}extractNestedValue(e,t){if(e&&typeof e=="object"&&t in e)return e[t];let o=t.split("."),i=e,r=!1;for(let n=0;n<o.length;n++){let l=o[n],d=l.match(/^(.+)\[(\*|\d+)\]$/);if(d){let c=d[1],u=d[2];if(i&&typeof i=="object"&&c in i){let b=i[c];if(Array.isArray(b))if(u==="*"){let h=o.slice(n+1);if(h.length>0){let v=h.join(".");i=b.map(w=>this.extractNestedValue(w,v)).filter(w=>w!==void 0)}else i=b;r=!0;break}else i=b[parseInt(u)];else return}else return}else if(i&&typeof i=="object"&&l in i)i=i[l];else return}return i}async copyToClipboard(e){try{await navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy text:",t)}}handlePostSubmissionAction(){if(console.log("[Submission Action] API call complete - checking submission action:",this.submissionAction),this.submissionAction==="no-submit"){console.log("[Submission Action] No submission - API call complete, form will not submit");return}if(this.submissionAction==="quick-submit"){console.log("[Submission Action] Quick submit - submitting after 500ms"),setTimeout(()=>{this.submitNintexForm()},500);return}if(this.submissionAction==="delayed-submit"){console.log("[Submission Action] Delayed submit - starting countdown timer"),this.startDelayedSubmission();return}}submitNintexForm(){console.log("[Submission Action] Attempting to submit Nintex form");let e=document.querySelector("form");if(!e){console.error("[Submission Action] No form found");return}let t=e.querySelector('button[type="submit"]');t instanceof HTMLElement?(console.log("[Submission Action] Clicking submit button"),this.allowFormSubmit=!0,t.click(),setTimeout(()=>{this.allowFormSubmit=!1},100)):console.error("[Submission Action] No submit button found")}startDelayedSubmission(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=this.countdownTimer*1e3,t=Date.now();this.delayedSubmissionStartTime=t;let o=()=>{let i=Date.now()-t;e-i<=0?(console.log("[Submission Action] Countdown complete - submitting form"),this.submitNintexForm(),this.cooldownTimerId=null,this.delayedSubmissionStartTime=0):(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(o,100))};console.log("[Submission Action] Starting delayed submission countdown for",this.countdownTimer,"seconds"),o()}startCooldownTimer(){this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null);let e=()=>{let o=Date.now()-this.lastApiCallTime,i=this.countdownTimer*1e3;o<i?(this.requestUpdate(),this.cooldownTimerId=window.setTimeout(e,1e3)):(this.showCooldownAlert=!1,this.cooldownTimerId=null,this.requestUpdate())};this.cooldownTimerId=window.setTimeout(e,1e3)}disconnectedCallback(){super.disconnectedCallback(),this.cooldownTimerId!==null&&(clearTimeout(this.cooldownTimerId),this.cooldownTimerId=null),this.checkingRuleValidation=!1}};m.styles=te`
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
  `,f([g({type:String})],m.prototype,"label",2),f([g({type:String})],m.prototype,"description",2),f([g({type:Boolean})],m.prototype,"readOnly",2),f([g({type:Object})],m.prototype,"value",1),f([g({type:String})],m.prototype,"requestBody",2),f([g({type:String})],m.prototype,"apiUrl",2),f([g({type:String})],m.prototype,"requestHeaders",2),f([g({type:String})],m.prototype,"bearerToken",2),f([g({type:String})],m.prototype,"tokenUrl",2),f([g({type:String})],m.prototype,"clientId",2),f([g({type:String})],m.prototype,"clientSecret",2),f([g({type:String})],m.prototype,"outputValueKey",2),f([g({type:String})],m.prototype,"contentType",2),f([g({type:Boolean,reflect:!0})],m.prototype,"debugMode",2),f([g({type:String})],m.prototype,"method",2),f([g({type:String})],m.prototype,"successMessage",2),f([g({type:String})],m.prototype,"warningMessage",2),f([g({type:String})],m.prototype,"errorMessage",2),f([g({type:Boolean,reflect:!0,attribute:"send-api-call"})],m.prototype,"sendAPICall",2),f([g({type:Boolean,reflect:!0,attribute:"allow-multiple-api-calls"})],m.prototype,"allowMultipleAPICalls",2),f([g({type:Boolean,reflect:!0,attribute:"countdown-enabled"})],m.prototype,"countdownEnabled",2),f([g({type:Number})],m.prototype,"countdownTimer",2),f([g({type:Boolean,reflect:!0,attribute:"btn-enabled"})],m.prototype,"btnEnabled",1),f([g({type:String,reflect:!0,attribute:"btn-text"})],m.prototype,"btnText",2),f([g({type:String,reflect:!0,attribute:"btn-alignment"})],m.prototype,"btnAlignment",2),f([g({type:Boolean,reflect:!0,attribute:"btn-visible"})],m.prototype,"btnVisible",1),f([g({type:Boolean,reflect:!0,attribute:"field-validation"})],m.prototype,"fieldValidation",2),f([g({type:Boolean,reflect:!0,attribute:"rule-validation"})],m.prototype,"ruleValidation",2),f([g({type:String,reflect:!0,attribute:"submission-action"})],m.prototype,"submissionAction",2),f([g({type:Boolean,reflect:!0,attribute:"submit-hidden"})],m.prototype,"submitHidden",2),f([g({type:String,reflect:!0,attribute:"show-more-details"})],m.prototype,"showMoreDetails",2),f([g({type:String,reflect:!0,attribute:"alert-position"})],m.prototype,"alertPosition",2),m=f([Le("daf-webrequest-plugin")],m);export{m as DafWebRequestPlugin};
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
