const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-view-a3wjUiqG.js","assets/listing-grid-Bra-fXFW.js","assets/favorited-view-PysQ7rTZ.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();var Pr=Object.defineProperty,xr=(t,e,r)=>e in t?Pr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ve=(t,e,r)=>(xr(t,typeof e!="symbol"?e+"":e,r),r),Rr=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},ze=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Se=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},pt=(t,e,r)=>(Rr(t,e,"access private method"),r);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zt(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let E=null,pe=!1,Pe=1;const Te=Symbol("SIGNAL");function re(t){const e=E;return E=t,e}function Tr(){return E}function Nr(){return pe}const nt={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function We(t){if(pe)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(E===null)return;E.consumerOnSignalRead(t);const e=E.nextProducerIndex++;if(se(E),e<E.producerNode.length&&E.producerNode[e]!==t&&Ye(E)){const r=E.producerNode[e];ke(r,E.producerIndexOfThis[e])}E.producerNode[e]!==t&&(E.producerNode[e]=t,E.producerIndexOfThis[e]=Ye(E)?Gt(t,E,e):0),E.producerLastReadVersion[e]=t.version}function Or(){Pe++}function Bt(t){if(!(!t.dirty&&t.lastCleanEpoch===Pe)){if(!t.producerMustRecompute(t)&&!Wr(t)){t.dirty=!1,t.lastCleanEpoch=Pe;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Pe}}function qt(t){if(t.liveConsumerNode===void 0)return;const e=pe;pe=!0;try{for(const r of t.liveConsumerNode)r.dirty||Lr(r)}finally{pe=e}}function Ir(){return E?.consumerAllowSignalWrites!==!1}function Lr(t){var e;t.dirty=!0,qt(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function Mr(t){return t&&(t.nextProducerIndex=0),re(t)}function Ur(t,e){if(re(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Ye(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)ke(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function Wr(t){se(t);for(let e=0;e<t.producerNode.length;e++){const r=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==r.version||(Bt(r),i!==r.version))return!0}return!1}function Gt(t,e,r){var i;if(st(t),se(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let n=0;n<t.producerNode.length;n++)t.producerIndexOfThis[n]=Gt(t.producerNode[n],t,n)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(e)-1}function ke(t,e){var r;if(st(t),se(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(r=t.unwatched)==null||r.call(t.wrapper);for(let n=0;n<t.producerNode.length;n++)ke(t.producerNode[n],t.producerIndexOfThis[n])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const n=t.liveConsumerIndexOfThis[e],s=t.liveConsumerNode[e];se(s),s.producerIndexOfThis[n]=e}}function Ye(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function se(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function st(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Kt(t){if(Bt(t),We(t),t.value===et)throw t.error;return t.value}function kr(t){const e=Object.create(Fr);e.computation=t;const r=()=>Kt(e);return r[Te]=e,r}const Be=Symbol("UNSET"),qe=Symbol("COMPUTING"),et=Symbol("ERRORED"),Fr={...nt,value:Be,dirty:!0,error:null,equal:zt,producerMustRecompute(t){return t.value===Be||t.value===qe},producerRecomputeValue(t){if(t.value===qe)throw new Error("Detected cycle in computations.");const e=t.value;t.value=qe;const r=Mr(t);let i,n=!1;try{i=t.computation.call(t.wrapper),n=e!==Be&&e!==et&&t.equal.call(t.wrapper,e,i)}catch(s){i=et,t.error=s}finally{Ur(t,r)}if(n){t.value=e;return}t.value=i,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Hr(){throw new Error}let Dr=Hr;function jr(){Dr()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vr(t){const e=Object.create(qr);e.value=t;const r=()=>(We(e),e.value);return r[Te]=e,r}function zr(){return We(this),this.value}function Br(t,e){Ir()||jr(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Gr(t))}const qr={...nt,equal:zt,value:void 0};function Gr(t){t.version++,Or(),qt(t)}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=Symbol("node");var T;(t=>{var e,r,i,n;class s{constructor(c,h={}){Se(this,r),Ve(this,e);const a=Vr(c)[Te];if(this[x]=a,a.wrapper=this,h){const d=h.equals;d&&(a.equal=d),a.watched=h[t.subtle.watched],a.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return zr.call(this[x])}set(c){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Nr())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[x];Br(h,c)}}e=x,r=new WeakSet,t.isState=u=>typeof u=="object"&&ze(r,u),t.State=s;class o{constructor(c,h){Se(this,n),Ve(this,i);const a=kr(c)[Te];if(a.consumerAllowSignalWrites=!0,this[x]=a,a.wrapper=this,h){const d=h.equals;d&&(a.equal=d),a.watched=h[t.subtle.watched],a.unwatched=h[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Kt(this[x])}}i=x,n=new WeakSet,t.isComputed=u=>typeof u=="object"&&ze(n,u),t.Computed=o,(u=>{var c,h,l,a;function d(_){let f,p=null;try{p=re(null),f=_()}finally{re(p)}return f}u.untrack=d;function g(_){var f;if(!(0,t.isComputed)(_)&&!(0,t.isWatcher)(_))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((f=_[x].producerNode)==null?void 0:f.map(p=>p.wrapper))??[]}u.introspectSources=g;function w(_){var f;if(!(0,t.isComputed)(_)&&!(0,t.isState)(_))throw new TypeError("Called introspectSinks without a Signal argument");return((f=_[x].liveConsumerNode)==null?void 0:f.map(p=>p.wrapper))??[]}u.introspectSinks=w;function N(_){if(!(0,t.isComputed)(_)&&!(0,t.isState)(_))throw new TypeError("Called hasSinks without a Signal argument");const f=_[x].liveConsumerNode;return f?f.length>0:!1}u.hasSinks=N;function S(_){if(!(0,t.isComputed)(_)&&!(0,t.isWatcher)(_))throw new TypeError("Called hasSources without a Computed or Watcher argument");const f=_[x].producerNode;return f?f.length>0:!1}u.hasSources=S;class C{constructor(f){Se(this,h),Se(this,l),Ve(this,c);let p=Object.create(nt);p.wrapper=this,p.consumerMarkedDirty=f,p.consumerIsAlwaysLive=!0,p.consumerAllowSignalWrites=!1,p.producerNode=[],this[x]=p}watch(...f){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");pt(this,l,a).call(this,f);const p=this[x];p.dirty=!1;const $=re(p);for(const M of f)We(M[x]);re($)}unwatch(...f){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");pt(this,l,a).call(this,f);const p=this[x];se(p);for(let $=p.producerNode.length-1;$>=0;$--)if(f.includes(p.producerNode[$].wrapper)){ke(p.producerNode[$],p.producerIndexOfThis[$]);const M=p.producerNode.length-1;if(p.producerNode[$]=p.producerNode[M],p.producerIndexOfThis[$]=p.producerIndexOfThis[M],p.producerNode.length--,p.producerIndexOfThis.length--,p.nextProducerIndex--,$<p.producerNode.length){const D=p.producerIndexOfThis[$],R=p.producerNode[$];st(R),R.liveConsumerIndexOfThis[D]=$}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[x].producerNode.filter(p=>p.dirty).map(p=>p.wrapper)}}c=x,h=new WeakSet,l=new WeakSet,a=function(_){for(const f of _)if(!(0,t.isComputed)(f)&&!(0,t.isState)(f))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=_=>ze(h,_),u.Watcher=C;function H(){var _;return(_=Tr())==null?void 0:_.wrapper}u.currentComputed=H,u.watched=Symbol("watched"),u.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(T||(T={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=Symbol("SignalWatcherBrand"),Jr=new FinalizationRegistry(({watcher:t,signal:e})=>{t.unwatch(e)}),vt=new WeakMap;function Qr(t){return t[Kr]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new T.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new T.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new T.subtle.Watcher(function(){const r=vt.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())});vt.set(e,this),Jr.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(r=>r.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,r,i){this._$So=!0,super.requestUpdate(e,r,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);const r=this._$So;this.requestUpdate(),this._$So=r}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr={CHILD:2},Zr=t=>(...e)=>({_$litDirective$:t,values:e});let Yr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,Ne=ot.trustedTypes,mt=Ne?Ne.createPolicy("lit-html",{createHTML:t=>t}):void 0,Jt="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,Qt="?"+V,ei=`<${Qt}>`,Z=document,we=()=>Z.createComment(""),ye=t=>t===null||typeof t!="object"&&typeof t!="function",at=Array.isArray,ti=t=>at(t)||typeof t?.[Symbol.iterator]=="function",Ge=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,_t=/>/g,G=RegExp(`>|${Ge}(?:([^\\s"'>=/]+)(${Ge}*=${Ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,yt=/"/g,Xt=/^(?:script|style|textarea|title)$/i,ri=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Ke=ri(1),oe=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),$t=new WeakMap,Q=Z.createTreeWalker(Z,129);function Zt(t,e){if(!at(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(e):e}const ii=(t,e)=>{const r=t.length-1,i=[];let n,s=e===2?"<svg>":e===3?"<math>":"",o=ce;for(let u=0;u<r;u++){const c=t[u];let h,l,a=-1,d=0;for(;d<c.length&&(o.lastIndex=d,l=o.exec(c),l!==null);)d=o.lastIndex,o===ce?l[1]==="!--"?o=gt:l[1]!==void 0?o=_t:l[2]!==void 0?(Xt.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=G):l[3]!==void 0&&(o=G):o===G?l[0]===">"?(o=n??ce,a=-1):l[1]===void 0?a=-2:(a=o.lastIndex-l[2].length,h=l[1],o=l[3]===void 0?G:l[3]==='"'?yt:wt):o===yt||o===wt?o=G:o===gt||o===_t?o=ce:(o=G,n=void 0);const g=o===G&&t[u+1].startsWith("/>")?" ":"";s+=o===ce?c+ei:a>=0?(i.push(h),c.slice(0,a)+Jt+c.slice(a)+V+g):c+V+(a===-2?u:g)}return[Zt(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class $e{constructor({strings:e,_$litType$:r},i){let n;this.parts=[];let s=0,o=0;const u=e.length-1,c=this.parts,[h,l]=ii(e,r);if(this.el=$e.createElement(h,i),Q.currentNode=this.el.content,r===2||r===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(n=Q.nextNode())!==null&&c.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const a of n.getAttributeNames())if(a.endsWith(Jt)){const d=l[o++],g=n.getAttribute(a).split(V),w=/([.?@])?(.*)/.exec(d);c.push({type:1,index:s,name:w[2],strings:g,ctor:w[1]==="."?si:w[1]==="?"?oi:w[1]==="@"?ai:Fe}),n.removeAttribute(a)}else a.startsWith(V)&&(c.push({type:6,index:s}),n.removeAttribute(a));if(Xt.test(n.tagName)){const a=n.textContent.split(V),d=a.length-1;if(d>0){n.textContent=Ne?Ne.emptyScript:"";for(let g=0;g<d;g++)n.append(a[g],we()),Q.nextNode(),c.push({type:2,index:++s});n.append(a[d],we())}}}else if(n.nodeType===8)if(n.data===Qt)c.push({type:2,index:s});else{let a=-1;for(;(a=n.data.indexOf(V,a+1))!==-1;)c.push({type:7,index:s}),a+=V.length-1}s++}}static createElement(e,r){const i=Z.createElement("template");return i.innerHTML=e,i}}function ae(t,e,r=t,i){if(e===oe)return e;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const s=ye(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(t),n._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(e=ae(t,n._$AS(t,e.values),n,i)),e}class ni{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,n=(e?.creationScope??Z).importNode(r,!0);Q.currentNode=n;let s=Q.nextNode(),o=0,u=0,c=i[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new Ae(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new ci(s,this,e)),this._$AV.push(h),c=i[++u]}o!==c?.index&&(s=Q.nextNode(),o++)}return Q.currentNode=Z,n}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class Ae{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,n){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ae(this,e,r),ye(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ti(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=$e.createElement(Zt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const s=new ni(n,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(e){let r=$t.get(e.strings);return r===void 0&&$t.set(e.strings,r=new $e(e)),r}k(e){at(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of e)n===r.length?r.push(i=new Ae(this.O(we()),this.O(we()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Fe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,n,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(e,r=this,i,n){const s=this.strings;let o=!1;if(s===void 0)e=ae(this,e,r,0),o=!ye(e)||e!==this._$AH&&e!==oe,o&&(this._$AH=e);else{const u=e;let c,h;for(e=s[0],c=0;c<s.length-1;c++)h=ae(this,u[i+c],r,c),h===oe&&(h=this._$AH[c]),o||=!ye(h)||h!==this._$AH[c],h===A?e=A:e!==A&&(e+=(h??"")+s[c+1]),this._$AH[c]=h}o&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class si extends Fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class oi extends Fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class ai extends Fe{constructor(e,r,i,n,s){super(e,r,i,n,s),this.type=5}_$AI(e,r=this){if((e=ae(this,e,r,0)??A)===oe)return;const i=this._$AH,n=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==A&&(i===A||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ci{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ae(this,e)}}const ui=ot.litHtmlPolyfillSupport;ui?.($e,Ae),(ot.litHtmlVersions??=[]).push("3.3.1");const hi=(t,e,r)=>{const i=r?.renderBefore??e;let n=i._$litPart$;if(n===void 0){const s=r?.renderBefore??null;i._$litPart$=n=new Ae(e.insertBefore(we(),s),s,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=(t,e)=>{const r=t._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(e,!1),ve(i,e);return!0},Oe=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},Yt=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),pi(e)}};function di(t){this._$AN!==void 0?(Oe(this),this._$AM=t,Yt(this)):this._$AM=t}function fi(t,e=!1,r=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)ve(i[s],!1),Oe(i[s]);else i!=null&&(ve(i,!1),Oe(i));else ve(this,t)}const pi=t=>{t.type==Xr.CHILD&&(t._$AP??=fi,t._$AQ??=di)};let vi=class extends Yr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Yt(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(ve(this,e),Oe(this))}setValue(e){if(li(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mi=class extends vi{_$Sl(){if(this._$Su!==void 0)return;this._$SW=new T.Computed(()=>{var r;return(r=this._$Sj)===null||r===void 0?void 0:r.get()});const e=this._$Su=new T.subtle.Watcher(()=>{var r;(r=this._$SO)===null||r===void 0||r._(this),e.watch()});e.watch(this._$SW)}_$Sp(){var e;this._$Su!==void 0&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,(e=this._$SO)===null||e===void 0||e.m(this))}commit(){this.setValue(T.subtle.untrack(()=>{var e;return(e=this._$SW)===null||e===void 0?void 0:e.get()}))}render(e){return T.subtle.untrack(()=>e.get())}update(e,[r]){var i,n;return(i=this._$SO)!==null&&i!==void 0||(this._$SO=(n=e.options)===null||n===void 0?void 0:n.host),r!==this._$Sj&&this._$Sj!==void 0&&this._$Sp(),this._$Sj=r,this._$Sl(),T.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}};const ue=Zr(mi);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */T.State;T.Computed;const K=(t,e)=>new T.State(t,e),J=(t,e)=>new T.Computed(t,e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=globalThis,ct=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),bt=new WeakMap;let er=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ct&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=bt.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&bt.set(r,e))}return e}toString(){return this.cssText}};const gi=t=>new er(typeof t=="string"?t:t+"",void 0,ut),_i=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1],t[0]);return new er(r,t,ut)},wi=(t,e)=>{if(ct)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),n=xe.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,t.appendChild(i)}},Et=ct?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return gi(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yi,defineProperty:$i,getOwnPropertyDescriptor:bi,getOwnPropertyNames:Ei,getOwnPropertySymbols:Ai,getPrototypeOf:Si}=Object,He=globalThis,At=He.trustedTypes,Ci=At?At.emptyScript:"",Pi=He.reactiveElementPolyfillSupport,me=(t,e)=>t,tt={toAttribute(t,e){switch(e){case Boolean:t=t?Ci:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},tr=(t,e)=>!yi(t,e),St={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:tr};Symbol.metadata??=Symbol("metadata"),He.litPropertyMetadata??=new WeakMap;class te extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=St){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,r);n!==void 0&&$i(this.prototype,e,n)}}static getPropertyDescriptor(e,r,i){const{get:n,set:s}=bi(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get:n,set(o){const u=n?.call(this);s?.call(this,o),this.requestUpdate(e,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??St}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;const e=Si(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){const r=this.properties,i=[...Ei(r),...Ai(r)];for(const n of i)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)r.unshift(Et(n))}else e!==void 0&&r.push(Et(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$ET(e,r){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:tt).toAttribute(r,i.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,r){const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:tt;this._$Em=n;const u=o.fromAttribute(r,s.type);this[n]=u??this._$Ej?.get(n)??u,this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){const n=this.constructor,s=this[e];if(i??=n.getPropertyOptions(e),!((i.hasChanged??tr)(s,r)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??r??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(r=void 0),this._$AL.set(e,r)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:o}=s,u=this[n];o!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,s,u)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}}te.elementStyles=[],te.shadowRootOptions={mode:"open"},te[me("elementProperties")]=new Map,te[me("finalized")]=new Map,Pi?.({ReactiveElement:te}),(He.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=globalThis;class ge extends te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=hi(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return oe}}ge._$litElement$=!0,ge.finalized=!0,ht.litElementHydrateSupport?.({LitElement:ge});const xi=ht.litElementPolyfillSupport;xi?.({LitElement:ge});(ht.litElementVersions??=[]).push("4.2.1");function Ri(t){for(var e=[],r=0;r<t.length;){var i=t[r];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:r,value:t[r++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});continue}if(i==="{"){e.push({type:"OPEN",index:r,value:t[r++]});continue}if(i==="}"){e.push({type:"CLOSE",index:r,value:t[r++]});continue}if(i===":"){for(var n="",s=r+1;s<t.length;){var o=t.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){n+=t[s++];continue}break}if(!n)throw new TypeError("Missing parameter name at ".concat(r));e.push({type:"NAME",index:r,value:n}),r=s;continue}if(i==="("){var u=1,c="",s=r+1;if(t[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<t.length;){if(t[s]==="\\"){c+=t[s++]+t[s++];continue}if(t[s]===")"){if(u--,u===0){s++;break}}else if(t[s]==="("&&(u++,t[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));c+=t[s++]}if(u)throw new TypeError("Unbalanced pattern at ".concat(r));if(!c)throw new TypeError("Missing pattern at ".concat(r));e.push({type:"PATTERN",index:r,value:c}),r=s;continue}e.push({type:"CHAR",index:r,value:t[r++]})}return e.push({type:"END",index:r,value:""}),e}function lt(t,e){e===void 0&&(e={});for(var r=Ri(t),i=e.prefixes,n=i===void 0?"./":i,s=e.delimiter,o=s===void 0?"/#?":s,u=[],c=0,h=0,l="",a=function(R){if(h<r.length&&r[h].type===R)return r[h++].value},d=function(R){var P=a(R);if(P!==void 0)return P;var U=r[h],je=U.type,Cr=U.index;throw new TypeError("Unexpected ".concat(je," at ").concat(Cr,", expected ").concat(R))},g=function(){for(var R="",P;P=a("CHAR")||a("ESCAPED_CHAR");)R+=P;return R},w=function(R){for(var P=0,U=o;P<U.length;P++){var je=U[P];if(R.indexOf(je)>-1)return!0}return!1},N=function(R){var P=u[u.length-1],U=R||(P&&typeof P=="string"?P:"");if(P&&!U)throw new TypeError('Must have text between two parameters, missing text after "'.concat(P.name,'"'));return!U||w(U)?"[^".concat(z(o),"]+?"):"(?:(?!".concat(z(U),")[^").concat(z(o),"])+?")};h<r.length;){var S=a("CHAR"),C=a("NAME"),H=a("PATTERN");if(C||H){var _=S||"";n.indexOf(_)===-1&&(l+=_,_=""),l&&(u.push(l),l=""),u.push({name:C||c++,prefix:_,suffix:"",pattern:H||N(_),modifier:a("MODIFIER")||""});continue}var f=S||a("ESCAPED_CHAR");if(f){l+=f;continue}l&&(u.push(l),l="");var p=a("OPEN");if(p){var _=g(),$=a("NAME")||"",M=a("PATTERN")||"",D=g();d("CLOSE"),u.push({name:$||(M?c++:""),pattern:$&&!M?N(_):M,prefix:_,suffix:D,modifier:a("MODIFIER")||""});continue}d("END")}return u}function rr(t,e){return ir(lt(t,e),e)}function ir(t,e){e===void 0&&(e={});var r=dt(e),i=e.encode,n=i===void 0?function(c){return c}:i,s=e.validate,o=s===void 0?!0:s,u=t.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),r)});return function(c){for(var h="",l=0;l<t.length;l++){var a=t[l];if(typeof a=="string"){h+=a;continue}var d=c?c[a.name]:void 0,g=a.modifier==="?"||a.modifier==="*",w=a.modifier==="*"||a.modifier==="+";if(Array.isArray(d)){if(!w)throw new TypeError('Expected "'.concat(a.name,'" to not repeat, but got an array'));if(d.length===0){if(g)continue;throw new TypeError('Expected "'.concat(a.name,'" to not be empty'))}for(var N=0;N<d.length;N++){var S=n(d[N],a);if(o&&!u[l].test(S))throw new TypeError('Expected all "'.concat(a.name,'" to match "').concat(a.pattern,'", but got "').concat(S,'"'));h+=a.prefix+S+a.suffix}continue}if(typeof d=="string"||typeof d=="number"){var S=n(String(d),a);if(o&&!u[l].test(S))throw new TypeError('Expected "'.concat(a.name,'" to match "').concat(a.pattern,'", but got "').concat(S,'"'));h+=a.prefix+S+a.suffix;continue}if(!g){var C=w?"an array":"a string";throw new TypeError('Expected "'.concat(a.name,'" to be ').concat(C))}}return h}}function z(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function dt(t){return t&&t.sensitive?"":"i"}function Ti(t,e){if(!e)return t;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,n=r.exec(t.source);n;)e.push({name:n[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),n=r.exec(t.source);return t}function Ni(t,e,r){var i=t.map(function(n){return nr(n,e,r).source});return new RegExp("(?:".concat(i.join("|"),")"),dt(r))}function Oi(t,e,r){return Ii(lt(t,r),e,r)}function Ii(t,e,r){r===void 0&&(r={});for(var i=r.strict,n=i===void 0?!1:i,s=r.start,o=s===void 0?!0:s,u=r.end,c=u===void 0?!0:u,h=r.encode,l=h===void 0?function(P){return P}:h,a=r.delimiter,d=a===void 0?"/#?":a,g=r.endsWith,w=g===void 0?"":g,N="[".concat(z(w),"]|$"),S="[".concat(z(d),"]"),C=o?"^":"",H=0,_=t;H<_.length;H++){var f=_[H];if(typeof f=="string")C+=z(l(f));else{var p=z(l(f.prefix)),$=z(l(f.suffix));if(f.pattern)if(e&&e.push(f),p||$)if(f.modifier==="+"||f.modifier==="*"){var M=f.modifier==="*"?"?":"";C+="(?:".concat(p,"((?:").concat(f.pattern,")(?:").concat($).concat(p,"(?:").concat(f.pattern,"))*)").concat($,")").concat(M)}else C+="(?:".concat(p,"(").concat(f.pattern,")").concat($,")").concat(f.modifier);else{if(f.modifier==="+"||f.modifier==="*")throw new TypeError('Can not repeat "'.concat(f.name,'" without a prefix and suffix'));C+="(".concat(f.pattern,")").concat(f.modifier)}else C+="(?:".concat(p).concat($,")").concat(f.modifier)}}if(c)n||(C+="".concat(S,"?")),C+=r.endsWith?"(?=".concat(N,")"):"$";else{var D=t[t.length-1],R=typeof D=="string"?S.indexOf(D[D.length-1])>-1:D===void 0;n||(C+="(?:".concat(S,"(?=").concat(N,"))?")),R||(C+="(?=".concat(S,"|").concat(N,")"))}return new RegExp(C,dt(r))}function nr(t,e,r){return t instanceof RegExp?Ti(t,e):Array.isArray(t)?Ni(t,e,r):Oi(t,e,r)}function Ct(t,e,r){return(e=Li(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Li(t){var e=Mi(t,"string");return typeof e=="symbol"?e:e+""}function Mi(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Y(t){return typeof t=="object"&&!!t}function be(t){return typeof t=="function"}function k(t){return typeof t=="string"}function Ie(t=[]){return Array.isArray(t)?t:[t]}function B(t){return`[Vaadin.Router] ${t}`}class sr extends Error{constructor(e){super(B(`Page not found (${e.pathname})`)),Ct(this,"code",void 0),Ct(this,"context",void 0),this.context=e,this.code=404}}const X=Symbol("NotFoundResult");function or(t){return new sr(t)}function ar(t){return(Array.isArray(t)?t[0]:t)??""}function Le(t){return ar(t?.path)}function Ui(t){return Array.isArray(t)&&t.length>0?t:void 0}const rt=new Map;rt.set("|false",{keys:[],pattern:/(?:)/u});function Pt(t){try{return decodeURIComponent(t)}catch{return t}}function Wi(t,e,r=!1,i=[],n){const s=`${t}|${String(r)}`,o=ar(e);let u=rt.get(s);if(!u){const l=[];u={keys:l,pattern:nr(t,l,{end:r,strict:t===""})},rt.set(s,u)}const c=u.pattern.exec(o);if(!c)return null;const h={...n};for(let l=1;l<c.length;l++){const a=u.keys[l-1],d=a.name,g=c[l];(g!==void 0||!Object.hasOwn(h,d))&&(a.modifier==="+"||a.modifier==="*"?h[d]=g?g.split(/[/?#]/u).map(Pt):[]:h[d]=g&&Pt(g))}return{keys:[...i,...u.keys],params:h,path:c[0]}}var ki=Wi;function cr(t,e,r,i,n){let s,o,u=0,c=Le(t);return c.startsWith("/")&&(r&&(c=c.substring(1)),r=!0),{next(h){if(t===h)return{done:!0,value:void 0};t.__children??=Ui(t.children);const l=t.__children??[],a=!t.__children&&!t.children;if(!s&&(s=ki(c,e,a,i,n),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:t}};if(s&&l.length>0)for(;u<l.length;){if(!o){const g=l[u];g.parent=t;let w=s.path.length;w>0&&e.charAt(w)==="/"&&(w+=1),o=cr(g,e.substring(w),r,s.keys,s.params)}const d=o.next(h);if(!d.done)return{done:!1,value:d.value};o=null,u+=1}return{done:!0,value:void 0}}}}var Fi=cr;function Hi(t){if(be(t.route.action))return t.route.action(t)}function xt(t,e,r){Di(t,e),e.set(t,r)}function Di(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function I(t,e){return t.get(ur(t,e))}function Ce(t,e,r){return t.set(ur(t,e),r),r}function ur(t,e,r){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}function _e(t,e,r){return(e=ji(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ji(t){var e=Vi(t,"string");return typeof e=="symbol"?e:e+""}function Vi(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zi(t,e){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function Bi(t){return!!t&&typeof t=="object"&&"next"in t&&"params"in t&&"result"in t&&"route"in t}class qi extends Error{constructor(e,r){let i=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=Le(e.route);n&&(i+=` Resolution had failed on route: '${n}'`),super(i,r),_e(this,"code",void 0),_e(this,"context",void 0),this.code=r?.code,this.context=e}warn(){console.warn(this.message)}}function Gi(t,e){const{path:r,route:i}=e;if(i&&!i.__synthetic){const n={path:r,route:i};if(i.parent&&t.chain)for(let s=t.chain.length-1;s>=0&&t.chain[s].route!==i.parent;s--)t.chain.pop();t.chain?.push(n)}}var he=new WeakMap,O=new WeakMap;class hr{constructor(e,{baseUrl:r="",context:i,errorHandler:n,resolveRoute:s=Hi}={}){if(_e(this,"baseUrl",void 0),xt(this,he,void 0),_e(this,"errorHandler",void 0),_e(this,"resolveRoute",void 0),xt(this,O,void 0),Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=r,this.errorHandler=n,this.resolveRoute=s,Array.isArray(e)?Ce(O,this,{__children:e,__synthetic:!0,action:()=>{},path:""}):Ce(O,this,{...e,parent:void 0}),Ce(he,this,{...i,hash:"",async next(){return X},params:{},pathname:"",resolver:this,route:I(O,this),search:"",chain:[]})}get root(){return I(O,this)}get context(){return I(he,this)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...I(O,this).__children??[]]}removeRoutes(){I(O,this).__children=[]}async resolve(e){const r=this,i={...I(he,this),...k(e)?{pathname:e}:e,next:h},n=Fi(I(O,this),this.__normalizePathname(i.pathname)??i.pathname,!!this.baseUrl),s=this.resolveRoute;let o=null,u=null,c=i;async function h(l=!1,a=o?.value?.route,d){const g=d===null?o?.value?.route:void 0;if(o=u??n.next(g),u=null,!l&&(o.done||!zi(o.value.route,a)))return u=o,X;if(o.done)throw or(i);c={...i,params:o.value.params,route:o.value.route,chain:c.chain?.slice()},Gi(c,o.value);const w=await s(c);return w!=null&&w!==X?(c.result=Bi(w)?w.result:w,Ce(he,r,c),c):await h(l,a,w)}try{return await h(!0,I(O,this))}catch(l){const a=l instanceof sr?l:new qi(c,{code:500,cause:l});if(this.errorHandler)return c.result=this.errorHandler(a),c;throw l}}setRoutes(e){I(O,this).__children=[...Ie(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const r=this.__effectiveBaseUrl,i=e.startsWith("/")?new URL(r).origin+e:`./${e}`,n=new URL(i,r).href;if(n.startsWith(r))return n.slice(r.length)}addRoutes(e){return I(O,this).__children=[...I(O,this).__children??[],...Ie(e)],this.getRoutes()}}function lr(t,e,r,i){const n=e.name??i?.(e);if(n&&(t.has(n)?t.get(n)?.push(e):t.set(n,[e])),Array.isArray(r))for(const s of r)s.parent=e,lr(t,s,s.__children??s.children,i)}function Rt(t,e){const r=t.get(e);if(r){if(r.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return r[0]}}function Ki(t,e={}){if(!(t instanceof hr))throw new TypeError("An instance of Resolver is expected");const r=new Map,i=new Map;return(n,s)=>{let o=Rt(i,n);if(!o&&(i.clear(),lr(i,t.root,t.root.__children,e.cacheKeyProvider),o=Rt(i,n),!o))throw new Error(`Route "${n}" not found`);let u=o.fullPath?r.get(o.fullPath):void 0;if(!u){let l=Le(o),a=o.parent;for(;a;){const w=Le(a);w&&(l=`${w.replace(/\/$/u,"")}/${l.replace(/^\//u,"")}`),a=a.parent}const d=lt(l),g=Object.create(null);for(const w of d)k(w)||(g[w.name]=!0);u={keys:g,tokens:d},r.set(l,u),o.fullPath=l}let h=ir(u.tokens,{encode:encodeURIComponent,...e})(s)||"/";if(e.stringifyQueryParams&&s){const l={};for(const[d,g]of Object.entries(s))!(d in u.keys)&&g&&(l[d]=g);const a=e.stringifyQueryParams(l);a&&(h+=a.startsWith("?")?a:`?${a}`)}return h}}var Ji=Ki;const Qi=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Re=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Xi(){function t(){return!0}return dr(t)}function Zi(){try{return Yi()?!0:en()?Re?!tn():!Xi():!1}catch{return!1}}function Yi(){return localStorage.getItem("vaadin.developmentmode.force")}function en(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function tn(){return!!(Re&&Object.keys(Re).map(e=>Re[e]).filter(e=>e.productionMode).length>0)}function dr(t,e){if(typeof t!="function")return;const r=Qi.exec(t.toString());if(r)try{t=new Function(r[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return t(e)}window.Vaadin=window.Vaadin||{};const Tt=function(t,e){if(window.Vaadin.developmentMode)return dr(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Zi());function rn(){/*! vaadin-dev-mode:start
(function () {
'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
return typeof obj;
} : function (obj) {
return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function (instance, Constructor) {
if (!(instance instanceof Constructor)) {
  throw new TypeError("Cannot call a class as a function");
}
};
var createClass = function () {
function defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
 return function (Constructor, protoProps, staticProps) {
  if (protoProps) defineProperties(Constructor.prototype, protoProps);
  if (staticProps) defineProperties(Constructor, staticProps);
  return Constructor;
};
}();
var getPolymerVersion = function getPolymerVersion() {
return window.Polymer && window.Polymer.version;
};
var StatisticsGatherer = function () {
function StatisticsGatherer(logger) {
  classCallCheck(this, StatisticsGatherer);
   this.now = new Date().getTime();
  this.logger = logger;
}
 createClass(StatisticsGatherer, [{
  key: 'frameworkVersionDetectors',
  value: function frameworkVersionDetectors() {
    return {
      'Flow': function Flow() {
        if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
          var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
            return window.Vaadin.Flow.clients[key];
          }).filter(function (client) {
            return client.getVersionInfo;
          }).map(function (client) {
            return client.getVersionInfo().flow;
          });
          if (flowVersions.length > 0) {
            return flowVersions[0];
          }
        }
      },
      'Vaadin Framework': function VaadinFramework() {
        if (window.vaadin && window.vaadin.clients) {
          var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
            return client.getVersionInfo;
          }).map(function (client) {
            return client.getVersionInfo().vaadinVersion;
          });
          if (frameworkVersions.length > 0) {
            return frameworkVersions[0];
          }
        }
      },
      'AngularJs': function AngularJs() {
        if (window.angular && window.angular.version && window.angular.version) {
          return window.angular.version.full;
        }
      },
      'Angular': function Angular() {
        if (window.ng) {
          var tags = document.querySelectorAll("[ng-version]");
          if (tags.length > 0) {
            return tags[0].getAttribute("ng-version");
          }
          return "Unknown";
        }
      },
      'Backbone.js': function BackboneJs() {
        if (window.Backbone) {
          return window.Backbone.VERSION;
        }
      },
      'React': function React() {
        var reactSelector = '[data-reactroot], [data-reactid]';
        if (!!document.querySelector(reactSelector)) {
          // React does not publish the version by default
          return "unknown";
        }
      },
      'Ember': function Ember() {
        if (window.Em && window.Em.VERSION) {
          return window.Em.VERSION;
        } else if (window.Ember && window.Ember.VERSION) {
          return window.Ember.VERSION;
        }
      },
      'jQuery': function (_jQuery) {
        function jQuery() {
          return _jQuery.apply(this, arguments);
        }
         jQuery.toString = function () {
          return _jQuery.toString();
        };
         return jQuery;
      }(function () {
        if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
          return jQuery.prototype.jquery;
        }
      }),
      'Polymer': function Polymer() {
        var version = getPolymerVersion();
        if (version) {
          return version;
        }
      },
      'LitElement': function LitElement() {
        var version = window.litElementVersions && window.litElementVersions[0];
        if (version) {
          return version;
        }
      },
      'LitHtml': function LitHtml() {
        var version = window.litHtmlVersions && window.litHtmlVersions[0];
        if (version) {
          return version;
        }
      },
      'Vue.js': function VueJs() {
        if (window.Vue) {
          return window.Vue.version;
        }
      }
    };
  }
}, {
  key: 'getUsedVaadinElements',
  value: function getUsedVaadinElements(elements) {
    var version = getPolymerVersion();
    var elementClasses = void 0;
    // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
    // Check all locations calling the method getEntries() in
    // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
    // Currently it is only used by BootstrapHandler.
    if (version && version.indexOf('2') === 0) {
      // Polymer 2: components classes are stored in window.Vaadin
      elementClasses = Object.keys(window.Vaadin).map(function (c) {
        return window.Vaadin[c];
      }).filter(function (c) {
        return c.is;
      });
    } else {
      // Polymer 3: components classes are stored in window.Vaadin.registrations
      elementClasses = window.Vaadin.registrations || [];
    }
    elementClasses.forEach(function (klass) {
      var version = klass.version ? klass.version : "0.0.0";
      elements[klass.is] = { version: version };
    });
  }
}, {
  key: 'getUsedVaadinThemes',
  value: function getUsedVaadinThemes(themes) {
    ['Lumo', 'Material'].forEach(function (themeName) {
      var theme;
      var version = getPolymerVersion();
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: themes are stored in window.Vaadin
        theme = window.Vaadin[themeName];
      } else {
        // Polymer 3: themes are stored in custom element registry
        theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
      }
      if (theme && theme.version) {
        themes[themeName] = { version: theme.version };
      }
    });
  }
}, {
  key: 'getFrameworks',
  value: function getFrameworks(frameworks) {
    var detectors = this.frameworkVersionDetectors();
    Object.keys(detectors).forEach(function (framework) {
      var detector = detectors[framework];
      try {
        var version = detector();
        if (version) {
          frameworks[framework] = { version: version };
        }
      } catch (e) {}
    });
  }
}, {
  key: 'gather',
  value: function gather(storage) {
    var storedStats = storage.read();
    var gatheredStats = {};
    var types = ["elements", "frameworks", "themes"];
     types.forEach(function (type) {
      gatheredStats[type] = {};
      if (!storedStats[type]) {
        storedStats[type] = {};
      }
    });
     var previousStats = JSON.stringify(storedStats);
     this.getUsedVaadinElements(gatheredStats.elements);
    this.getFrameworks(gatheredStats.frameworks);
    this.getUsedVaadinThemes(gatheredStats.themes);
     var now = this.now;
    types.forEach(function (type) {
      var keys = Object.keys(gatheredStats[type]);
      keys.forEach(function (key) {
        if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
          storedStats[type][key] = { firstUsed: now };
        }
        // Discards any previously logged version number
        storedStats[type][key].version = gatheredStats[type][key].version;
        storedStats[type][key].lastUsed = now;
      });
    });
     var newStats = JSON.stringify(storedStats);
    storage.write(newStats);
    if (newStats != previousStats && Object.keys(storedStats).length > 0) {
      this.logger.debug("New stats: " + newStats);
    }
  }
}]);
return StatisticsGatherer;
}();
var StatisticsStorage = function () {
function StatisticsStorage(key) {
  classCallCheck(this, StatisticsStorage);
   this.key = key;
}
 createClass(StatisticsStorage, [{
  key: 'read',
  value: function read() {
    var localStorageStatsString = localStorage.getItem(this.key);
    try {
      return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
    } catch (e) {
      return {};
    }
  }
}, {
  key: 'write',
  value: function write(data) {
    localStorage.setItem(this.key, data);
  }
}, {
  key: 'clear',
  value: function clear() {
    localStorage.removeItem(this.key);
  }
}, {
  key: 'isEmpty',
  value: function isEmpty() {
    var storedStats = this.read();
    var empty = true;
    Object.keys(storedStats).forEach(function (key) {
      if (Object.keys(storedStats[key]).length > 0) {
        empty = false;
      }
    });
     return empty;
  }
}]);
return StatisticsStorage;
}();
var StatisticsSender = function () {
function StatisticsSender(url, logger) {
  classCallCheck(this, StatisticsSender);
   this.url = url;
  this.logger = logger;
}
 createClass(StatisticsSender, [{
  key: 'send',
  value: function send(data, errorHandler) {
    var logger = this.logger;
     if (navigator.onLine === false) {
      logger.debug("Offline, can't send");
      errorHandler();
      return;
    }
    logger.debug("Sending data to " + this.url);
     var req = new XMLHttpRequest();
    req.withCredentials = true;
    req.addEventListener("load", function () {
      // Stats sent, nothing more to do
      logger.debug("Response: " + req.responseText);
    });
    req.addEventListener("error", function () {
      logger.debug("Send failed");
      errorHandler();
    });
    req.addEventListener("abort", function () {
      logger.debug("Send aborted");
      errorHandler();
    });
    req.open("POST", this.url);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(data);
  }
}]);
return StatisticsSender;
}();
var StatisticsLogger = function () {
function StatisticsLogger(id) {
  classCallCheck(this, StatisticsLogger);
   this.id = id;
}
 createClass(StatisticsLogger, [{
  key: '_isDebug',
  value: function _isDebug() {
    return localStorage.getItem("vaadin." + this.id + ".debug");
  }
}, {
  key: 'debug',
  value: function debug(msg) {
    if (this._isDebug()) {
      console.info(this.id + ": " + msg);
    }
  }
}]);
return StatisticsLogger;
}();
var UsageStatistics = function () {
function UsageStatistics() {
  classCallCheck(this, UsageStatistics);
   this.now = new Date();
  this.timeNow = this.now.getTime();
  this.gatherDelay = 10; // Delay between loading this file and gathering stats
  this.initialDelay = 24 * 60 * 60;
   this.logger = new StatisticsLogger("statistics");
  this.storage = new StatisticsStorage("vaadin.statistics.basket");
  this.gatherer = new StatisticsGatherer(this.logger);
  this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
}
 createClass(UsageStatistics, [{
  key: 'maybeGatherAndSend',
  value: function maybeGatherAndSend() {
    var _this = this;
     if (localStorage.getItem(UsageStatistics.optOutKey)) {
      return;
    }
    this.gatherer.gather(this.storage);
    setTimeout(function () {
      _this.maybeSend();
    }, this.gatherDelay * 1000);
  }
}, {
  key: 'lottery',
  value: function lottery() {
    return true;
  }
}, {
  key: 'currentMonth',
  value: function currentMonth() {
    return this.now.getYear() * 12 + this.now.getMonth();
  }
}, {
  key: 'maybeSend',
  value: function maybeSend() {
    var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
    var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
     if (!firstUse) {
      // Use a grace period to avoid interfering with tests, incognito mode etc
      firstUse = this.timeNow;
      localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
    }
     if (this.timeNow < firstUse + this.initialDelay * 1000) {
      this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
      return;
    }
    if (this.currentMonth() <= monthProcessed) {
      this.logger.debug("This month has already been processed");
      return;
    }
    localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
    // Use random sampling
    if (this.lottery()) {
      this.logger.debug("Congratulations, we have a winner!");
    } else {
      this.logger.debug("Sorry, no stats from you this time");
      return;
    }
     this.send();
  }
}, {
  key: 'send',
  value: function send() {
    // Ensure we have the latest data
    this.gatherer.gather(this.storage);
     // Read, send and clean up
    var data = this.storage.read();
    data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
    data["usageStatisticsVersion"] = UsageStatistics.version;
    var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
    var self = this;
    this.sender.send(info + JSON.stringify(data), function () {
      // Revert the 'month processed' flag
      localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
    });
  }
}], [{
  key: 'version',
  get: function get$1() {
    return '2.1.2';
  }
}, {
  key: 'firstUseKey',
  get: function get$1() {
    return 'vaadin.statistics.firstuse';
  }
}, {
  key: 'monthProcessedKey',
  get: function get$1() {
    return 'vaadin.statistics.monthProcessed';
  }
}, {
  key: 'optOutKey',
  get: function get$1() {
    return 'vaadin.statistics.optout';
  }
}]);
return UsageStatistics;
}();
try {
window.Vaadin = window.Vaadin || {};
window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
// Intentionally ignored as this is not a problem in the app being developed
}
}());
 vaadin-dev-mode:end **/}const nn=function(){if(typeof Tt=="function")return Tt(rn)};function sn(t,e=window.Vaadin??={}){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}sn();nn();const on=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},an=(t,e)=>{const r=()=>{t.removeEventListener("animationend",r),e()};t.addEventListener("animationend",r)};async function cn(t,e){return t.classList.add(e),await new Promise(r=>{if(on(t)){const i=t.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;t.setAttribute("style",`position: absolute; ${n}`),an(t,()=>{t.classList.remove(e),t.removeAttribute("style"),r()})}else t.classList.remove(e),r()})}var Nt=cn;function fr(t){if(!t||!k(t.path))throw new Error(B('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!be(t.action)&&!Array.isArray(t.children)&&!be(t.children)&&!k(t.component)&&!k(t.redirect))throw new Error(B(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach(e=>{e in t&&console.warn(B(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Ot(t){Ie(t).forEach(e=>fr(e))}function un({next:t,...e}){return e}function Me(t,e){const r=e.__effectiveBaseUrl;return r?new URL(t.replace(/^\//u,""),r).pathname:t}function pr(t){return t.map(e=>e.path).reduce((e,r)=>r.length?`${e.replace(/\/$/u,"")}/${r.replace(/^\//u,"")}`:e,"")}function hn(t){return pr(t.map(e=>e.route))}function L({chain:t=[],hash:e="",params:r={},pathname:i="",redirectFrom:n,resolver:s,search:o=""},u){const c=t.map(h=>h.route);return{baseUrl:s?.baseUrl??"",getUrl:(h={})=>s?Me(rr(hn(t))({...r,...h}),s):"",hash:e,params:r,pathname:i,redirectFrom:n,route:u??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:o,searchParams:new URLSearchParams(o)}}function vr(t,e){const r={...t.params};return{redirect:{from:t.pathname,params:r,pathname:e}}}function ln(t,e){if(e.location=L(t),t.chain){const r=t.chain.map(i=>i.route).indexOf(t.route);t.chain[r].element=e}return e}function De(t,e,...r){if(typeof t=="function")return t.apply(e,r)}function mr(t,e,...r){return i=>i&&Y(i)&&("cancel"in i||"redirect"in i)?i:De(e?.[t],e,...r)}function dn(t,e){if(!Array.isArray(t)&&!Y(t))throw new Error(B(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const r=Ie(t);r.forEach(i=>fr(i)),e.__children=r}function Ee(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function fn(t){if(typeof t!="object")return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}function pn(t){const{port:e,protocol:r}=t,s=r==="http:"&&e==="80"||r==="https:"&&e==="443"?t.hostname:t.host;return`${r}//${s}`}function It(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function Lt(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const r=t instanceof MouseEvent?t.composedPath():t.path??[];for(let c=0;c<r.length;c++){const h=r[c];if("nodeName"in h&&h.nodeName.toLowerCase()==="a"){e=h;break}}for(;e&&e instanceof Node&&It(e)!=="a";)e=e.parentNode;if(!e||It(e)!=="a")return;const i=e;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||pn(i))!==window.location.origin)return;const{hash:s,pathname:o,search:u}=i;Ee("go",{hash:s,pathname:o,search:u})&&t instanceof MouseEvent&&(t.preventDefault(),t.type==="click"&&window.scrollTo(0,0))}const vn={activate(){window.document.addEventListener("click",Lt)},inactivate(){window.document.removeEventListener("click",Lt)}};var mn=vn;function Mt(t){if(t.state==="vaadin-router-ignore")return;const{hash:e,pathname:r,search:i}=window.location;Ee("go",{hash:e,pathname:r,search:i})}const gn={activate(){window.addEventListener("popstate",Mt)},inactivate(){window.removeEventListener("popstate",Mt)}};var _n=gn;let Ut=[];const wn={CLICK:mn,POPSTATE:_n};function Wt(t=[]){Ut.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),Ut=t}function yn(t,e){gr(t,e),e.add(t)}function j(t,e,r){gr(t,e),e.set(t,r)}function gr(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Je(t,e,r){return(e=$n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $n(t){var e=bn(t,"string");return typeof e=="symbol"?e:e+""}function bn(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function W(t,e,r){return t.set(v(t,e),r),r}function y(t,e){return t.get(v(t,e))}function v(t,e,r){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}const En=256;function de(){return{cancel:!0}}const _r={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return X}};var it=new WeakMap,Ue=new WeakMap,Qe=new WeakMap,ie=new WeakMap,ne=new WeakMap,le=new WeakMap,q=new WeakMap,F=new WeakMap,m=new WeakSet;class An extends hr{constructor(e,r){const n=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...r,resolveRoute:async s=>await v(m,this,Sn).call(this,s)}),yn(this,m),Je(this,"location",L({resolver:this})),Je(this,"ready",Promise.resolve(this.location)),j(this,it,new WeakSet),j(this,Ue,new WeakSet),j(this,Qe,v(m,this,Dt).bind(this)),j(this,ie,0),j(this,ne,void 0),Je(this,"__previousContext",void 0),j(this,le,void 0),j(this,q,null),j(this,F,null),Wt(Object.values(wn)),this.setOutlet(e),this.subscribe()}setOutlet(e){e&&v(m,this,$r).call(this,e),W(ne,this,e)}getOutlet(){return y(ne,this)}async setRoutes(e,r=!1){return this.__previousContext=void 0,W(le,this,void 0),Ot(e),super.setRoutes(e),r||v(m,this,Dt).call(this),await this.ready}addRoutes(e){return Ot(e),super.addRoutes(e)}async render(e,r=!1){W(ie,this,y(ie,this)+1);const i=y(ie,this),n={..._r,...k(e)?{hash:"",search:"",pathname:e}:e,__renderId:i};return this.ready=v(m,this,Cn).call(this,n,r),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",y(Qe,this))}unsubscribe(){window.removeEventListener("vaadin-router-go",y(Qe,this))}static setTriggers(...e){Wt(e)}urlForName(e,r){return y(le,this)||W(le,this,Ji(this,{cacheKeyProvider(i){return"component"in i&&typeof i.component=="string"?i.component:void 0}})),Me(y(le,this).call(this,e,r??void 0),this)}urlForPath(e,r){return Me(rr(e)(r??void 0),this)}static go(e){const{pathname:r,search:i,hash:n}=k(e)?new URL(e,"http://a"):e;return Ee("go",{pathname:r,search:i,hash:n})}}async function Sn(t){const{route:e}=t;if(be(e.children)){let i=await e.children(un(t));be(e.children)||({children:i}=e),dn(i,e)}const r={component:i=>{const n=document.createElement(i);return y(Ue,this).add(n),n},prevent:de,redirect:i=>vr(t,i)};return await Promise.resolve().then(async()=>{if(v(m,this,ee).call(this,t))return await De(e.action,e,t,r)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===X||Y(i)&&"redirect"in i))return i;if(k(e.redirect))return r.redirect(e.redirect)}).then(i=>{if(i!=null)return i;if(k(e.component))return r.component(e.component)})}async function Cn(t,e){const{__renderId:r}=t;try{const i=await this.resolve(t),n=await v(m,this,ft).call(this,i);if(!v(m,this,ee).call(this,n))return this.location;const s=this.__previousContext;if(n===s)return v(m,this,Xe).call(this,s,!0),this.location;if(this.location=L(n),e&&v(m,this,Xe).call(this,n,r===1),Ee("location-changed",{router:this,location:this.location}),n.__skipAttach)return v(m,this,br).call(this,n,s),this.__previousContext=n,this.location;v(m,this,Rn).call(this,n,s);const o=v(m,this,Ln).call(this,n);if(v(m,this,In).call(this,n),v(m,this,On).call(this,n,s),await o,v(m,this,ee).call(this,n))return v(m,this,Tn).call(this),this.__previousContext=n,this.location}catch(i){if(r===y(ie,this)){e&&v(m,this,Xe).call(this,this.context);for(const n of y(ne,this)?.children??[])n.remove();throw this.location=L(Object.assign(t,{resolver:this})),Ee("error",{router:this,error:i,...t}),i}}return this.location}async function ft(t,e=t){const r=await v(m,this,wr).call(this,e),n=r!==e?r:t,o=Me(pr(r.chain??[]),this)===r.pathname,u=async(h,l=h.route,a)=>{const d=await h.next(!1,l,a);return d===null||d===X?o?h:l.parent!=null?await u(h,l.parent,d):d:d},c=await u(r);if(c==null||c===X)throw or(n);return c!==r?await v(m,this,ft).call(this,n,c):await v(m,this,Pn).call(this,r)}async function wr(t){const{result:e}=t;if(e instanceof HTMLElement)return ln(t,e),t;if(e&&"redirect"in e){const r=await v(m,this,yr).call(this,e.redirect,t.__redirectCount,t.__renderId);return await v(m,this,wr).call(this,r)}throw e instanceof Error?e:new Error(B(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${fn(e)}". Double check the action return value for the route.`))}async function Pn(t){return await v(m,this,xn).call(this,t).then(async e=>e===this.__previousContext||e===t?e:await v(m,this,ft).call(this,e))}async function xn(t){const e=this.__previousContext??{},r=e.chain??[],i=t.chain??[];let n=Promise.resolve(void 0);const s=o=>vr(t,o);if(t.__divergedChainIndex=0,t.__skipAttach=!1,r.length){for(let o=0;o<Math.min(r.length,i.length)&&!(r[o].route!==i[o].route||r[o].path!==i[o].path&&r[o].element!==i[o].element||!v(m,this,Ht).call(this,r[o].element,i[o].element));t.__divergedChainIndex++,o++);if(t.__skipAttach=i.length===r.length&&t.__divergedChainIndex===i.length&&v(m,this,Ht).call(this,t.result,e.result),t.__skipAttach){for(let o=i.length-1;o>=0;o--)n=v(m,this,kt).call(this,n,t,{prevent:de},r[o]);for(let o=0;o<i.length;o++)n=v(m,this,Ft).call(this,n,t,{prevent:de,redirect:s},i[o]),r[o].element.location=L(t,r[o].route)}else for(let o=r.length-1;o>=t.__divergedChainIndex;o--)n=v(m,this,kt).call(this,n,t,{prevent:de},r[o])}if(!t.__skipAttach)for(let o=0;o<i.length;o++)o<t.__divergedChainIndex?o<r.length&&r[o].element&&(r[o].element.location=L(t,r[o].route)):(n=v(m,this,Ft).call(this,n,t,{prevent:de,redirect:s},i[o]),i[o].element&&(i[o].element.location=L(t,i[o].route)));return await n.then(async o=>{if(o&&Y(o)){if("cancel"in o&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in o)return await v(m,this,yr).call(this,o.redirect,t.__redirectCount,t.__renderId)}return t})}async function kt(t,e,r,i){const n=L(e);let s=await t;if(v(m,this,ee).call(this,e)&&(s=mr("onBeforeLeave",i.element,n,r,this)(s)),!(Y(s)&&"redirect"in s))return s}async function Ft(t,e,r,i){const n=L(e,i.route),s=await t;if(v(m,this,ee).call(this,e))return mr("onBeforeEnter",i.element,n,r,this)(s)}function Ht(t,e){return t instanceof Element&&e instanceof Element?y(Ue,this).has(t)&&y(Ue,this).has(e)?t.localName===e.localName:t===e:!1}function ee(t){return t.__renderId===y(ie,this)}async function yr(t,e=0,r=0){if(e>En)throw new Error(B(`Too many redirects when rendering ${t.from}`));return await this.resolve({..._r,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:e+1,__renderId:r})}function $r(t=y(ne,this)){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(B(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}function Xe({pathname:t,search:e="",hash:r=""},i){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==r){const n=i?"replaceState":"pushState";window.history[n](null,document.title,t+e+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}function br(t,e){let r=y(ne,this);for(let i=0;i<(t.__divergedChainIndex??0);i++){const n=e?.chain?.[i].element;if(n)if(n.parentNode===r)t.chain[i].element=n,r=n;else break}return r}function Rn(t,e){v(m,this,$r).call(this),v(m,this,Nn).call(this);const r=v(m,this,br).call(this,t,e);W(q,this,[]),W(F,this,Array.from(r?.children??[]).filter(n=>y(it,this).has(n)&&n!==t.result));let i=r;for(let n=t.__divergedChainIndex??0;n<(t.chain?.length??0);n++){const s=t.chain[n].element;s&&(i?.appendChild(s),y(it,this).add(s),i===r&&y(q,this).push(s),i=s)}}function Tn(){if(y(F,this))for(const t of y(F,this))t.remove();W(F,this,null),W(q,this,null)}function Nn(){if(y(F,this)&&y(q,this)){for(const t of y(q,this))t.remove();W(F,this,null),W(q,this,null)}}function On(t,e){if(!(!e?.chain||t.__divergedChainIndex==null))for(let r=e.chain.length-1;r>=t.__divergedChainIndex&&v(m,this,ee).call(this,t);r--){const i=e.chain[r].element;if(i)try{const n=L(t);De(i.onAfterLeave,i,n,{},this)}finally{if(y(F,this)?.includes(i))for(const n of i.children)n.remove()}}}function In(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let e=t.__divergedChainIndex;e<t.chain.length&&v(m,this,ee).call(this,t);e++){const r=t.chain[e].element;if(r){const i=L(t,t.chain[e].route);De(r.onAfterEnter,r,i,{},this)}}}async function Ln(t){const e=y(F,this)?.[0],r=y(q,this)?.[0],i=[],{chain:n=[]}=t;let s;for(let o=n.length-1;o>=0;o--)if(n[o].route.animate){s=n[o].route.animate;break}if(e&&r&&s){const o=Y(s)&&s.leave?s.leave:"leaving",u=Y(s)&&s.enter?s.enter:"entering";i.push(Nt(e,o)),i.push(Nt(r,u))}return await Promise.all(i),t}function Dt(t){const{pathname:e,search:r,hash:i}=t instanceof CustomEvent?t.detail:window.location;k(this.__normalizePathname(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:r,hash:i},!0))}const Mn="modulepreload",Un=function(t){return"/Real-Estate-Lint-Element-3-FrontEnd/"+t},jt={},Vt=function(e,r,i){let n=Promise.resolve();if(r&&r.length>0){let c=function(h){return Promise.all(h.map(l=>Promise.resolve(l).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),u=o?.nonce||o?.getAttribute("nonce");n=c(r.map(h=>{if(h=Un(h),h in jt)return;jt[h]=!0;const l=h.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${a}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Mn,l||(d.as="script"),d.crossOrigin="",d.href=h,u&&d.setAttribute("nonce",u),document.head.appendChild(d),l)return new Promise((g,w)=>{d.addEventListener("load",g),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(o){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=o,window.dispatchEvent(u),!u.defaultPrevented)throw o}return n.then(o=>{for(const u of o||[])u.status==="rejected"&&s(u.reason);return e().catch(s)})},Wn=[{path:"/home",component:"home-view",action:()=>Vt(()=>import("./home-view-a3wjUiqG.js"),__vite__mapDeps([0,1]))},{path:"/favorited",component:"favorited-view",action:()=>Vt(()=>import("./favorited-view-PysQ7rTZ.js"),__vite__mapDeps([2,1]))},{path:"",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/Real-Estate-Lint-Element-3-FrontEnd/",redirect:"/home"}],kn=_i`*{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}.header{background-color:#ffe600;padding:42px 30px 50px;text-align:center}.header .header-contaner{margin:.5rem auto;width:100%;max-width:800px}.header h1{font-size:2rem;font-weight:700;color:#000;margin-bottom:1rem}.header .prompt{display:block;margin:.5rem auto;padding:.75rem 1rem;border-radius:.5rem;border:none;width:100%;max-width:630px;font-size:1rem;margin-bottom:20px}.header .tabs{display:flex;position:absolute;background:transparent;margin:8px 0 0;gap:0;border-radius:.75rem .75rem 0 0;overflow:hidden}.header .tab{background-color:#ffe600;border:none;padding:.73rem 2rem;font-size:1rem;font-weight:600;color:#000;cursor:pointer;border-top-left-radius:.75rem;border-top-right-radius:.75rem;transition:all .2s ease-in-out}.header .tab.active{background-color:#fff;box-shadow:0 -2px 5px #0000001a}.header .tab:not(.active):hover{background-color:#ffec80}.body-wrapper{display:flex;min-height:65vh;margin:0 auto;padding:0 30px;align-content:center;flex-direction:column;flex-wrap:wrap}.body-wrapper .filter-container{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center}.body-wrapper .search{display:block;margin:40px auto 0 0;padding:.75rem 1rem;border-radius:.5rem;border:1px solid #ddd;width:100%;max-width:630px;font-size:1rem}.body-wrapper .filters{display:flex;justify-content:space-between;max-width:665px;margin:20px auto 10px 0}.body-wrapper .filters .sorting{display:flex;gap:.3rem;margin-right:10px}.body-wrapper .filters .sorting-button{background:#fff;border:1px solid #ddd;border-radius:1rem;padding:.5rem 1rem;font-weight:500;font-size:.9rem}.body-wrapper .filters .reset-button{color:#fff;background:red;border:1px solid;border-radius:1rem;padding:.5rem 1rem;font-weight:500;font-size:.9rem}@media(max-width:450px){.filters{display:grid}.sorting-button{margin-top:15px}}@media(min-width:840px){.tabs{margin:8px 0 0 85px!important}}`;class Er{async getListings(){return await(await fetch("/mock-listings.json")).json()}toggleFavorite(e,r){return console.log("Favorite",e,r),Promise.resolve()}}function b(t,e,r){return(e=Fn(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Fn(t){var e=Hn(t,"string");return typeof e=="symbol"?e:e+""}function Hn(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Dn(t,e,r){jn(t,e),e.set(t,r)}function jn(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Vn(t,e){return t.get(Ar(t,e))}function zn(t,e,r){return t.set(Ar(t,e),r),r}function Ar(t,e,r){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:r;throw new TypeError("Private element is not present on this object")}var Ze=new WeakMap;class Bn{constructor(e=new Er){Dn(this,Ze,void 0),b(this,"totalListings",K([])),b(this,"favoriteIds",K([])),b(this,"searchTerm",K("")),b(this,"homeSorting",K({field:"",order:"asc"})),b(this,"favoritesSorting",K({field:"",order:"asc"})),b(this,"currentPage",K(0)),b(this,"pageSize",K(3)),b(this,"filterByTerm",(r,i)=>{const n=i.toLowerCase();return r.filter(s=>s.titulo.toLowerCase().includes(n)||s.descripcion.toLowerCase().includes(n))}),b(this,"sortListings",(r,i)=>{if(!i.field)return r;const n=i.order==="asc"?1:-1;return[...r].sort((s,o)=>(Number(s[i.field])-Number(o[i.field]))*n)}),b(this,"homeView",J(()=>{const r=this.filteredListings.get();return this.sortListings(r,this.homeSorting.get())})),b(this,"filteredListings",J(()=>{const r=this.totalListings.get(),i=this.searchTerm.get().toLowerCase();return r.filter(n=>n.titulo.toLowerCase().includes(i)||n.descripcion.toLowerCase().includes(i))})),b(this,"allFavorites",J(()=>this.totalListings.get().filter(r=>this.favoriteIds.get().includes(r.link)))),b(this,"filteredAllFavorites",J(()=>this.filterByTerm(this.allFavorites.get(),this.searchTerm.get()))),b(this,"favoritedView",J(()=>{const r=this.filteredAllFavorites.get();return this.sortListings(r,this.favoritesSorting.get())})),b(this,"loadListings",async()=>{const r=await Vn(Ze,this).getListings();r.status==="ok"&&this.totalListings.set(Object.values(r.items))}),b(this,"updateSearch",r=>{this.searchTerm.set(r),this.currentPage.set(0)}),b(this,"toggleFavorite",r=>{const i=this.favoriteIds.get().includes(r);this.favoriteIds.set(i?this.favoriteIds.get().filter(n=>n!==r):[...this.favoriteIds.get(),r])}),b(this,"setHomeSort",r=>{const i=this.homeSorting.get(),n=i.field===r&&i.order==="asc"?"desc":"asc";this.homeSorting.set({field:r,order:n})}),b(this,"setFavoritesSort",r=>{const i=this.favoritesSorting.get(),n=i.field===r&&i.order==="asc"?"desc":"asc";this.favoritesSorting.set({field:r,order:n})}),b(this,"resetFilters",()=>{this.searchTerm.set(""),this.homeSorting.set({field:"",order:"asc"}),this.favoritesSorting.set({field:"",order:"asc"})}),b(this,"setPage",(r,i)=>{this.currentPage.set(r),this.pageSize.set(i)}),b(this,"isFavorite",r=>this.favoriteIds.get().includes(r)),zn(Ze,this,e)}}const qn=new Bn(new Er);function fe(t,e,r){return(e=Gn(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Gn(t){var e=Kn(t,"string");return typeof e=="symbol"?e:e+""}function Kn(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}class Sr extends Qr(ge){constructor(){super(),fe(this,"onSearchInput",e=>this.store.updateSearch(e.target.value.toLowerCase())),fe(this,"changeSorting",e=>{const r=location.pathname;r==="/home"?this.store.setHomeSort(e):r==="/favorited"&&this.store.setFavoritesSort(e)}),fe(this,"sortingIndicatorFor",e=>J(()=>{const r=location.pathname,i=r==="/home"?this.store.homeSorting.get():r==="/favorited"?this.store.favoritesSorting.get():{field:"",order:"asc"};return i.field===e?i.order==="asc"?" ↑":" ↓":""})),fe(this,"resetButton",J(()=>{const e=location.pathname,r=e==="/home"?this.store.homeSorting.get():e==="/favorited"?this.store.favoritesSorting.get():{field:""},i=this.store.searchTerm.get();return r.field!==""||i!==""?Ke`<button class="reset-button" @click=${this.store.resetFilters}>Reset</button>`:Ke``})),this.store=qn}get isActive(){return e=>location.pathname===e?"active":""}firstUpdated(){const e=this.renderRoot.querySelector("#outlet");this.router=new An(e).setRoutes(Wn),window.addEventListener("vaadin-router-location-changed",()=>{this.requestUpdate()})}render(){return Ke`
      <div class="header">
        <div class="header-contaner">
          <h1>Where do you want to live?</h1>
          <div class="tabs">
            <a class="tab ${this.isActive("/home")}" href="/home">Home</a>
            <a class="tab ${this.isActive("/favorited")}" href="/favorited">Favorited</a>
          </div>
        </div>
      </div>
      <div class="body-wrapper">
        <div class="filter-container">
          <input class="search" type="text" placeholder="Filter results with keywords" .value=${ue(this.store.searchTerm)} @input=${this.onSearchInput} />
          <div class="filters">
            <div class="sorting">
              <button class="sorting-button" @click=${()=>this.changeSorting("precio")}>
                Price <span>${ue(this.sortingIndicatorFor("precio"))}</span>
              </button>
              <button class="sorting-button" @click=${()=>this.changeSorting("habitaciones")}>
                Beds & baths <span>${ue(this.sortingIndicatorFor("habitaciones"))}</span>
              </button>
              <button class="sorting-button" @click=${()=>this.changeSorting("size")}>
                Home size <span>${ue(this.sortingIndicatorFor("size"))}</span>
              </button>
            </div>
            ${ue(this.resetButton)}
          </div>
        </div>
        <div id="outlet"></div>
      </div>
    `}}fe(Sr,"styles",kn);customElements.define("lit-app",Sr);export{_i as a,J as b,Qr as e,tr as f,ge as i,ue as o,gi as r,qn as s,tt as u,Ke as x};
