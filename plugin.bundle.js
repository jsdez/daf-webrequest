var lt=Object.defineProperty;var Ut=Object.getOwnPropertyDescriptor;var nt=Object.getOwnPropertySymbols;var Nt=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable;var at=(o,t,e)=>t in o?lt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,J=(o,t)=>{for(var e in t||(t={}))Nt.call(t,e)&&at(o,e,t[e]);if(nt)for(var e of nt(t))kt.call(t,e)&&at(o,e,t[e]);return o};var u=(o,t,e,s)=>{for(var r=s>1?void 0:s?Ut(t,e):t,n=o.length-1,i;n>=0;n--)(i=o[n])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&lt(t,e,r),r};var V=globalThis,z=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),ct=new WeakMap,O=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ct.set(e,t))}return t}toString(){return this.cssText}},pt=o=>new O(typeof o=="string"?o:o+"",void 0,F),K=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,r,n)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new O(e,o,F)},ht=(o,t)=>{if(z)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=V.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,o.appendChild(s)}},Z=z?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return pt(e)})(o):o;var{is:Lt,defineProperty:Ht,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:Rt,getOwnPropertySymbols:Vt,getPrototypeOf:zt}=Object,A=globalThis,dt=A.trustedTypes,qt=dt?dt.emptyScript:"",G=A.reactiveElementPolyfillSupport,M=(o,t)=>o,I={toAttribute(o,t){switch(t){case Boolean:o=o?qt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch(s){e=null}}return e}},q=(o,t)=>!Lt(o,t),ut={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:q},ft,mt;(ft=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(mt=A.litPropertyMetadata)!=null||(A.litPropertyMetadata=new WeakMap);var b=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ht(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var i;let{get:r,set:n}=(i=Bt(this.prototype,t))!=null?i:{get(){return this[e]},set(l){this[e]=l}};return{get:r,set(l){let a=r==null?void 0:r.call(this);n==null||n.call(this,l),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:ut}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;let t=zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){let e=this.properties,s=[...Rt(e),...Vt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Z(r))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$EO)!=null?e:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:I).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var n,i,l,a;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let c=s.getPropertyOptions(r),h=typeof c.converter=="function"?{fromAttribute:c.converter}:((n=c.converter)==null?void 0:n.fromAttribute)!==void 0?c.converter:I;this._$Em=r,this[r]=(a=(l=h.fromAttribute(e,c.type))!=null?l:(i=this._$Ej)==null?void 0:i.get(r))!=null?a:null,this._$Em=null}}requestUpdate(t,e,s){var r,n;if(t!==void 0){let i=this.constructor,l=this[t];if(s!=null||(s=i.getPropertyOptions(t)),!(((r=s.hasChanged)!=null?r:q)(l,e)||s.useDefault&&s.reflect&&l===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:n},i){var l,a,c;s&&!((l=this._$Ej)!=null?l:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,(a=i!=null?i:e)!=null?a:this[t]),n!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&((c=this._$Eq)!=null?c:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,l]of n){let{wrapped:a}=l,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,l,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}},gt;b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[M("elementProperties")]=new Map,b[M("finalized")]=new Map,G==null||G({ReactiveElement:b}),((gt=A.reactiveElementVersions)!=null?gt:A.reactiveElementVersions=[]).push("2.1.0");var N=globalThis,j=N.trustedTypes,yt=j?j.createPolicy("lit-html",{createHTML:o=>o}):void 0,xt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+v,jt=`<${St}>`,S=document,k=()=>S.createComment(""),L=o=>o===null||typeof o!="object"&&typeof o!="function",rt=Array.isArray,Dt=o=>rt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,$t=/>/g,w=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,vt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,it=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),g=it(1),Wt=it(2),te=it(3),C=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),_t=new WeakMap,x=S.createTreeWalker(S,129);function Et(o,t){if(!rt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}var Jt=(o,t)=>{let e=o.length-1,s=[],r,n=t===2?"<svg>":t===3?"<math>":"",i=U;for(let l=0;l<e;l++){let a=o[l],c,h,p=-1,y=0;for(;y<a.length&&(i.lastIndex=y,h=i.exec(a),h!==null);)y=i.lastIndex,i===U?h[1]==="!--"?i=bt:h[1]!==void 0?i=$t:h[2]!==void 0?(Ct.test(h[2])&&(r=RegExp("</"+h[2],"g")),i=w):h[3]!==void 0&&(i=w):i===w?h[0]===">"?(i=r!=null?r:U,p=-1):h[1]===void 0?p=-2:(p=i.lastIndex-h[2].length,c=h[1],i=h[3]===void 0?w:h[3]==='"'?vt:At):i===vt||i===At?i=w:i===bt||i===$t?i=U:(i=w,r=void 0);let $=i===w&&o[l+1].startsWith("/>")?" ":"";n+=i===U?a+jt:p>=0?(s.push(c),a.slice(0,p)+xt+a.slice(p)+v+$):a+v+(p===-2?l:$)}return[Et(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},H=class o{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,i=0,l=t.length-1,a=this.parts,[c,h]=Jt(t,e);if(this.el=o.createElement(c,s),x.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=x.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(xt)){let y=h[i++],$=r.getAttribute(p).split(v),R=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:R[2],strings:$,ctor:R[1]==="."?W:R[1]==="?"?tt:R[1]==="@"?et:T}),r.removeAttribute(p)}else p.startsWith(v)&&(a.push({type:6,index:n}),r.removeAttribute(p));if(Ct.test(r.tagName)){let p=r.textContent.split(v),y=p.length-1;if(y>0){r.textContent=j?j.emptyScript:"";for(let $=0;$<y;$++)r.append(p[$],k()),x.nextNode(),a.push({type:2,index:++n});r.append(p[y],k())}}}else if(r.nodeType===8)if(r.data===St)a.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(v,p+1))!==-1;)a.push({type:7,index:n}),p+=v.length-1}n++}}static createElement(t,e){let s=S.createElement("template");return s.innerHTML=t,s}};function P(o,t,e=o,s){var i,l,a;if(t===C)return t;let r=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl,n=L(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(o),r._$AT(o,e,s)),s!==void 0?((a=e._$Co)!=null?a:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=P(o,r._$AS(o,t.values),r,s)),t}var Y=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:S).importNode(e,!0);x.currentNode=r;let n=x.nextNode(),i=0,l=0,a=s[0];for(;a!==void 0;){if(i===a.index){let h;a.type===2?h=new B(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new st(n,this,t)),this._$AV.push(h),a=s[++l]}i!==(a==null?void 0:a.index)&&(n=x.nextNode(),i++)}return x.currentNode=S,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class o{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(n=r==null?void 0:r.isConnected)!=null?n:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),L(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var n;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(Et(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{let i=new Y(r,this),l=i.u(this.options);i.p(e),this.T(l),this._$AH=i}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new H(t)),e}k(t){rt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let n of t)r===e.length?e.push(s=new o(this.O(k()),this.O(k()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(t,e=this,s,r){let n=this.strings,i=!1;if(n===void 0)t=P(this,t,e,0),i=!L(t)||t!==this._$AH&&t!==C,i&&(this._$AH=t);else{let l=t,a,c;for(t=n[0],a=0;a<n.length-1;a++)c=P(this,l[s+a],e,a),c===C&&(c=this._$AH[a]),i||(i=!L(c)||c!==this._$AH[a]),c===m?t=m:t!==m&&(t+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}i&&!r&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},W=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},tt=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},et=class extends T{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=P(this,t,e,0))!=null?i:m)===C)return;let s=this._$AH,r=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==m&&(s===m||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},st=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};var X=N.litHtmlPolyfillSupport,wt;X==null||X(H,B),((wt=N.litHtmlVersions)!=null?wt:N.litHtmlVersions=[]).push("3.3.0");var Pt=(o,t,e)=>{var n,i;let s=(n=e==null?void 0:e.renderBefore)!=null?n:t,r=s._$litPart$;if(r===void 0){let l=(i=e==null?void 0:e.renderBefore)!=null?i:null;s._$litPart$=r=new B(t.insertBefore(k(),l),l,void 0,e!=null?e:{})}return r._$AI(o),r};var E=globalThis,_=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return C}},Tt;_._$litElement$=!0,_.finalized=!0,(Tt=E.litElementHydrateSupport)==null||Tt.call(E,{LitElement:_});var ot=E.litElementPolyfillSupport;ot==null||ot({LitElement:_});var Ot;((Ot=E.litElementVersions)!=null?Ot:E.litElementVersions=[]).push("4.2.0");async function Mt({url:o,method:t="POST",headers:e={},requestBody:s,setLoading:r,setResponse:n}){r(!0),n("");try{let l=await(await fetch(o,{method:t,headers:J({"Content-Type":"application/json",Accept:"application/json"},e),body:["POST","PUT","PATCH","DELETE"].includes(t.toUpperCase())?JSON.stringify(s):void 0})).text();n(l)}catch(i){n("Error: "+((i==null?void 0:i.message)||i))}finally{r(!1)}}var It=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var Ft={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:q},Kt=(o=Ft,t,e)=>{let{kind:s,metadata:r}=e,n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(e.name,o),s==="accessor"){let{name:i}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,a,o)},init(l){return l!==void 0&&this.C(i,void 0,o,l),l}}}if(s==="setter"){let{name:i}=e;return function(l){let a=this[i];t.call(this,l),this.requestUpdate(i,a,o)}}throw Error("Unsupported decorator location: "+s)};function f(o){return(t,e)=>typeof e=="object"?Kt(o,t,e):((s,r,n)=>{let i=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),i?Object.getOwnPropertyDescriptor(r,n):void 0})(o,t,e)}var d=class extends _{constructor(){super(...arguments);this.label="";this.description="";this.readOnly=!1;this.value="";this.requestBody="";this.apiUrl="";this.requestHeaders="";this.debugMode=!1;this.method="POST";this.successMessage="API call completed successfully";this.warningMessage="API call completed with warnings";this.errorMessage="API call failed";this.sendAPICall=!1;this.allowMultipleAPICalls=!1;this.btnEnabled=!0;this.btnText="Send API Request";this.btnAlignment="left";this.btnVisible=!0;this.isLoading=!1;this.apiResponse="";this.responseType=null;this.hasSuccessfulCall=!1;this.lastApiCallTime=0;this.API_COOLDOWN_MS=5e3;this.showCooldownAlert=!1;this.originalBtnEnabled=!0}static getMetaConfig(){return{controlName:"Web Request Plugin",fallbackDisableSubmit:!1,version:"1.0.0",description:"A Nintex Form Plugin for making API calls.",properties:{apiUrl:{type:"string",title:"API URL with Token",description:"The endpoint URL to call, including any required token as a query parameter.",defaultValue:""},requestHeaders:{type:"string",title:"Request Headers (JSON)",description:"Headers to include in the API request, as a JSON object.",defaultValue:""},requestBody:{type:"string",title:"Request Body (JSON)",description:"Body to send in the API request, as a JSON object.",defaultValue:""},waitForResponse:{type:"boolean",title:"Wait for Callback Response",description:"If true, the plugin will wait for a callback post body once the workflow is completed.",defaultValue:!1},value:{type:"string",title:"Value",isValueField:!0,defaultValue:""},debugMode:{type:"boolean",title:"Debug Mode",description:"If true, enables the JSON converter UI.",defaultValue:!1},method:{type:"string",title:"HTTP Method",description:"The HTTP method to use for the API call.",enum:["POST","GET","PUT","DELETE","PATCH"],defaultValue:"POST"},successMessage:{type:"string",title:"Success Message",description:"Custom message to display when the API call succeeds.",defaultValue:"API call completed successfully"},warningMessage:{type:"string",title:"Warning Message",description:"Custom message to display when the API call returns a warning.",defaultValue:"API call completed with warnings"},errorMessage:{type:"string",title:"Error Message",description:"Custom message to display when the API call fails.",defaultValue:"API call failed"},sendAPICall:{type:"boolean",title:"Send API Call",description:"Set to true to trigger the API call. Automatically resets to false after execution.",defaultValue:!1},allowMultipleAPICalls:{type:"boolean",title:"Allow Multiple API Calls",description:"If true, allows repeated API calls. If false, disables further calls after first success/warning.",defaultValue:!1},btnVisible:{type:"boolean",title:"Button Visible",description:"If true, the button is visible on the form.",defaultValue:!0},btnEnabled:{type:"boolean",title:"Button Enabled",description:"If true, the button is enabled and can be clicked.",defaultValue:!0},btnText:{type:"string",title:"Button Text",description:"The text to display on the button.",defaultValue:"Send API Request"},btnAlignment:{type:"string",title:"Button Alignment",description:"The alignment of the button within the container.",enum:["left","center","right"],defaultValue:"left"}},standardProperties:{fieldLabel:!0,description:!0,readOnly:!0,defaultValue:!0}}}render(){if(this.debugMode){let s="",r="",n="";try{this.requestBody&&(s=JSON.stringify(JSON.parse(this.requestBody)),r='"'+s.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"')}catch(i){n="Invalid JSON"}return g`
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
            <!-- Debug info -->
            <div style="margin-top: 8px; font-size: 12px; color: #666;">
              Debug: allowMultiple=${this.allowMultipleAPICalls}, hasSuccessful=${this.hasSuccessfulCall}, responseType=${this.responseType}
            </div>
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
    `}renderResponseAlert(){let s=Date.now()-this.lastApiCallTime;if(this.lastApiCallTime>0&&s<this.API_COOLDOWN_MS&&this.showCooldownAlert){let c=Math.ceil((this.API_COOLDOWN_MS-s)/1e3);return g`
        <div class="alert alert-info" part="cooldown-alert">
          <div>
            <span class="alert-icon">ℹ</span>
            <strong>Information:</strong> Please wait ${c} seconds before sending another request.
          </div>
        </div>
      `}if(!this.apiResponse||!this.responseType)return"";let n=`alert-${this.responseType}`,i=this.getAlertIcon(this.responseType),l=this.responseType.charAt(0).toUpperCase()+this.responseType.slice(1),a=this.getCustomMessage(this.responseType);return g`
      <div class="alert ${n}" part="response-alert">
        <div>
          <span class="alert-icon">${i}</span>
          <strong>${l}:</strong> ${a}
        </div>
        ${this.debugMode?g`
          <div class="alert-response">
            <strong>Response:</strong> ${this.apiResponse}
          </div>
        `:""}
      </div>
    `}getAlertIcon(e){switch(e){case"success":return"\u2713";case"warning":return"\u26A0";case"error":return"\u2717";default:return"\u2022"}}getCustomMessage(e){switch(e){case"success":return this.successMessage;case"warning":return this.warningMessage;case"error":return this.errorMessage;default:return"Unknown response type"}}updated(e){e.has("value")&&this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),e.has("btnEnabled")&&(this.originalBtnEnabled=this.btnEnabled),e.has("sendAPICall")&&this.sendAPICall&&this.handleAPICallTrigger()}handleAPICallTrigger(){this.sendAPICall=!1;let s=Date.now()-this.lastApiCallTime;if(this.lastApiCallTime>0&&s<this.API_COOLDOWN_MS){this.showCooldownAlert=!0,this.startCooldownTimer();return}this.allowMultipleAPICalls||(this.btnEnabled=!1),this.handleApiCall()}triggerAPICall(){this.sendAPICall=!0}isButtonDisabled(){let s=Date.now()-this.lastApiCallTime,r=this.lastApiCallTime>0&&s<this.API_COOLDOWN_MS;return this.isLoading||!this.btnEnabled||r}static removeInstructionalPlaceholders(e){if(Array.isArray(e))return e.map(s=>this.removeInstructionalPlaceholders(s));if(e&&typeof e=="object"){let s={};for(let[r,n]of Object.entries(e)){if(typeof n=="string"&&/^<.*>$/.test(n.trim()))continue;let i=this.removeInstructionalPlaceholders(n);i!==void 0&&!(typeof i=="object"&&i!==null&&Object.keys(i).length===0)&&(s[r]=i)}return s}return e}async handleApiCall(){if(this.isLoading)return;this.lastApiCallTime=Date.now(),this.responseType=null,this.apiResponse="";let e=this.apiUrl||"",s={};if(this.requestHeaders)try{s=JSON.parse(this.requestHeaders)}catch(n){s={},this.requestHeaders.split(/\r?\n/).forEach(i=>{let l=i.indexOf(":");if(l>-1){let a=i.slice(0,l).trim(),c=i.slice(l+1).trim();a&&(s[a]=c)}})}let r={startData:{se_input:"This is a test"}};await Mt({url:e,method:this.method||"POST",headers:s,requestBody:r,setLoading:n=>{this.isLoading=n,this.requestUpdate()},setResponse:n=>{this.apiResponse=n,this.responseType=this.determineResponseType(n),this.value=n,(this.responseType==="success"||this.responseType==="warning")&&(this.hasSuccessfulCall=!0),this.allowMultipleAPICalls&&(this.btnEnabled=this.originalBtnEnabled),this.dispatchEvent(new CustomEvent("ntx-value-change",{detail:this.value,bubbles:!0,composed:!0})),this.requestUpdate()}})}determineResponseType(e){if(e.toLowerCase().includes("error:")||e.toLowerCase().includes("failed")||e.toLowerCase().includes("exception"))return"error";try{let s=JSON.parse(e);if(s.error||s.status==="error")return"error";if(s.warning||s.status==="warning")return"warning"}catch(s){}return"success"}startCooldownTimer(){let e=()=>{Date.now()-this.lastApiCallTime<this.API_COOLDOWN_MS?(this.requestUpdate(),setTimeout(e,1e3)):(this.showCooldownAlert=!1,this.requestUpdate())};setTimeout(e,1e3)}};d.styles=K`
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
  `,u([f({type:String})],d.prototype,"label",2),u([f({type:String})],d.prototype,"description",2),u([f({type:Boolean})],d.prototype,"readOnly",2),u([f({type:String})],d.prototype,"value",2),u([f({type:String})],d.prototype,"requestBody",2),u([f({type:String})],d.prototype,"apiUrl",2),u([f({type:String})],d.prototype,"requestHeaders",2),u([f({type:Boolean})],d.prototype,"debugMode",2),u([f({type:String})],d.prototype,"method",2),u([f({type:String})],d.prototype,"successMessage",2),u([f({type:String})],d.prototype,"warningMessage",2),u([f({type:String})],d.prototype,"errorMessage",2),u([f({type:Boolean})],d.prototype,"sendAPICall",2),u([f({type:Boolean})],d.prototype,"allowMultipleAPICalls",2),u([f({type:Boolean})],d.prototype,"btnEnabled",2),u([f({type:String})],d.prototype,"btnText",2),u([f({type:String})],d.prototype,"btnAlignment",2),u([f({type:Boolean})],d.prototype,"btnVisible",2),d=u([It("daf-webrequest-plugin")],d);export{d as DafWebRequestPlugin};
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
