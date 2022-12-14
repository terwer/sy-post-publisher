import{b2 as ft,b3 as gt,b4 as P,b5 as F,b6 as W,b7 as b,b8 as p,aG as ye,b9 as bt,ba as dt,bb as C,a_ as Et,bc as It,bd as Ot,be as ke,bf as Lt,bg as Tt,u as M,bh as Nt,bi as R,bj as y,bk as se,bl as Y,bm as V,r as U,bn as $,z as K,a0 as pt,F as vt,bo as Rt,bp as Ce,bq as Z,t as ee,br as Ft,bs as oe,bt as ce,v as yt,bu as kt,A as Ct,E as Pt,bv as ue,bw as St,bx as Dt,by as ie,bz as _e,bA as me,bB as fe,bC as ge,bD as be,bE as de,a1 as ht,af as At,bF as Ee}from"./vendor-a9bad54d.js";/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Mt="9.2.2";function Vt(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ke().__INTLIFY_PROD_DEVTOOLS__=!1)}ft.__EXTEND_POINT__;let Pe=gt.__EXTEND_POINT__;const O=()=>++Pe,T={UNEXPECTED_RETURN_TYPE:Pe,INVALID_ARGUMENT:O(),MUST_BE_CALL_SETUP_TOP:O(),NOT_INSLALLED:O(),NOT_AVAILABLE_IN_LEGACY_MODE:O(),REQUIRED_VALUE:O(),INVALID_VALUE:O(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:O(),NOT_INSLALLED_WITH_PROVIDE:O(),UNEXPECTED_ERROR:O(),NOT_COMPATIBLE_LEGACY_VUE_I18N:O(),BRIDGE_SUPPORT_VUE_2_ONLY:O(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:O(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:O(),__EXTEND_POINT__:O()};function N(e,...r){return Tt(e,null,void 0)}const q=P("__transrateVNode"),z=P("__datetimeParts"),J=P("__numberParts"),Ut=P("__setPluralRules");P("__intlifyMeta");const wt=P("__injectWithOption");function Q(e){if(!p(e))return e;for(const r in e)if(!!Z(e,r))if(!r.includes("."))p(e[r])&&Q(e[r]);else{const a=r.split("."),s=a.length-1;let o=e;for(let c=0;c<s;c++)a[c]in o||(o[a[c]]={}),o=o[a[c]];o[a[s]]=e[r],delete e[r],p(o[a[s]])&&Q(o[a[s]])}return e}function Se(e,r){const{messages:a,__i18n:s,messageResolver:o,flatJson:c}=r,l=y(a)?a:R(s)?{}:{[e]:{}};if(R(s)&&s.forEach(u=>{if("locale"in u&&"resource"in u){const{locale:_,resource:m}=u;_?(l[_]=l[_]||{},w(m,l[_])):w(m,l)}else b(u)&&w(JSON.parse(u),l)}),o==null&&c)for(const u in l)Z(l,u)&&Q(l[u]);return l}const G=e=>!p(e)||R(e);function w(e,r){if(G(e)||G(r))throw N(T.INVALID_VALUE);for(const a in e)Z(e,a)&&(G(e[a])||G(r[a])?r[a]=e[a]:w(e[a],r[a]))}function De(e){return e.type}function Wt(e,r,a){let s=p(r.messages)?r.messages:{};"__i18nGlobal"in a&&(s=Se(e.locale.value,{messages:s,__i18n:a.__i18nGlobal}));const o=Object.keys(s);o.length&&o.forEach(c=>{e.mergeLocaleMessage(c,s[c])});{if(p(r.datetimeFormats)){const c=Object.keys(r.datetimeFormats);c.length&&c.forEach(l=>{e.mergeDateTimeFormat(l,r.datetimeFormats[l])})}if(p(r.numberFormats)){const c=Object.keys(r.numberFormats);c.length&&c.forEach(l=>{e.mergeNumberFormat(l,r.numberFormats[l])})}}}function Ie(e){return ht(At,null,e,0)}const Oe="__INTLIFY_META__";let Le=0;function Te(e){return(r,a,s,o)=>e(a,s,ee()||void 0,o)}const xt=()=>{const e=ee();let r=null;return e&&(r=De(e)[Oe])?{[Oe]:r}:null};function he(e={},r){const{__root:a}=e,s=a===void 0;let o=C(e.inheritLocale)?e.inheritLocale:!0;const c=M(a&&o?a.locale.value:b(e.locale)?e.locale:Nt),l=M(a&&o?a.fallbackLocale.value:b(e.fallbackLocale)||R(e.fallbackLocale)||y(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:c.value),u=M(Se(c.value,e)),_=M(y(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),m=M(y(e.numberFormats)?e.numberFormats:{[c.value]:{}});let I=a?a.missingWarn:C(e.missingWarn)||se(e.missingWarn)?e.missingWarn:!0,f=a?a.fallbackWarn:C(e.fallbackWarn)||se(e.fallbackWarn)?e.fallbackWarn:!0,g=a?a.fallbackRoot:C(e.fallbackRoot)?e.fallbackRoot:!0,L=!!e.fallbackFormat,S=Y(e.missing)?e.missing:null,k=Y(e.missing)?Te(e.missing):null,A=Y(e.postTranslation)?e.postTranslation:null,H=a?a.warnHtmlMessage:C(e.warnHtmlMessage)?e.warnHtmlMessage:!0,B=!!e.escapeParameter;const ne=a?a.modifiers:y(e.modifiers)?e.modifiers:{};let x=e.pluralRules||a&&a.pluralRules,i;i=(()=>{s&&Ee(null);const t={version:Mt,locale:c.value,fallbackLocale:l.value,messages:u.value,modifiers:ne,pluralRules:x,missing:k===null?void 0:k,missingWarn:I,fallbackWarn:f,fallbackFormat:L,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:H,escapeParameter:B,messageResolver:e.messageResolver,__meta:{framework:"vue"}};t.datetimeFormats=_.value,t.numberFormats=m.value,t.__datetimeFormatters=y(i)?i.__datetimeFormatters:void 0,t.__numberFormatters=y(i)?i.__numberFormatters:void 0;const n=Ft(t);return s&&Ee(n),n})(),V(i,c.value,l.value);function Ve(){return[c.value,l.value,u.value,_.value,m.value]}const Ue=U({get:()=>c.value,set:t=>{c.value=t,i.locale=c.value}}),we=U({get:()=>l.value,set:t=>{l.value=t,i.fallbackLocale=l.value,V(i,c.value,t)}}),We=U(()=>u.value),xe=U(()=>_.value),je=U(()=>m.value);function Ye(){return Y(A)?A:null}function Ge(t){A=t,i.postTranslation=t}function He(){return S}function Be(t){t!==null&&(k=Te(t)),S=t,i.missing=k}const D=(t,n,v,E,X,j)=>{Ve();let h;if(__INTLIFY_PROD_DEVTOOLS__)try{ue(xt()),s||(i.fallbackContext=a?St():void 0),h=t(i)}finally{ue(null),s||(i.fallbackContext=void 0)}else h=t(i);if(W(h)&&h===Dt){const[mt,ra]=n();return a&&g?E(a):X(mt)}else{if(j(h))return h;throw N(T.UNEXPECTED_RETURN_TYPE)}};function re(...t){return D(n=>Reflect.apply(_e,null,[n,...t]),()=>ie(...t),"translate",n=>Reflect.apply(n.t,n,[...t]),n=>n,n=>b(n))}function Xe(...t){const[n,v,E]=t;if(E&&!p(E))throw N(T.INVALID_ARGUMENT);return re(n,v,F({resolvedMessage:!0},E||{}))}function $e(...t){return D(n=>Reflect.apply(ge,null,[n,...t]),()=>fe(...t),"datetime format",n=>Reflect.apply(n.d,n,[...t]),()=>me,n=>b(n))}function Ke(...t){return D(n=>Reflect.apply(de,null,[n,...t]),()=>be(...t),"number format",n=>Reflect.apply(n.n,n,[...t]),()=>me,n=>b(n))}function qe(t){return t.map(n=>b(n)||W(n)||C(n)?Ie(String(n)):n)}const ze={normalize:qe,interpolate:t=>t,type:"vnode"};function Je(...t){return D(n=>{let v;const E=n;try{E.processor=ze,v=Reflect.apply(_e,null,[E,...t])}finally{E.processor=null}return v},()=>ie(...t),"translate",n=>n[q](...t),n=>[Ie(n)],n=>R(n))}function Qe(...t){return D(n=>Reflect.apply(de,null,[n,...t]),()=>be(...t),"number format",n=>n[J](...t),()=>[],n=>b(n)||R(n))}function Ze(...t){return D(n=>Reflect.apply(ge,null,[n,...t]),()=>fe(...t),"datetime format",n=>n[z](...t),()=>[],n=>b(n)||R(n))}function et(t){x=t,i.pluralRules=x}function tt(t,n){const v=b(n)?n:c.value,E=le(v);return i.messageResolver(E,t)!==null}function at(t){let n=null;const v=Ce(i,l.value,c.value);for(let E=0;E<v.length;E++){const X=u.value[v[E]]||{},j=i.messageResolver(X,t);if(j!=null){n=j;break}}return n}function nt(t){const n=at(t);return n!=null?n:a?a.tm(t)||{}:{}}function le(t){return u.value[t]||{}}function rt(t,n){u.value[t]=n,i.messages=u.value}function lt(t,n){u.value[t]=u.value[t]||{},w(n,u.value[t]),i.messages=u.value}function st(t){return _.value[t]||{}}function ot(t,n){_.value[t]=n,i.datetimeFormats=_.value,oe(i,t,n)}function ct(t,n){_.value[t]=F(_.value[t]||{},n),i.datetimeFormats=_.value,oe(i,t,n)}function ut(t){return m.value[t]||{}}function it(t,n){m.value[t]=n,i.numberFormats=m.value,ce(i,t,n)}function _t(t,n){m.value[t]=F(m.value[t]||{},n),i.numberFormats=m.value,ce(i,t,n)}Le++,a&&$&&(K(a.locale,t=>{o&&(c.value=t,i.locale=t,V(i,c.value,l.value))}),K(a.fallbackLocale,t=>{o&&(l.value=t,i.fallbackLocale=t,V(i,c.value,l.value))}));const d={id:Le,locale:Ue,fallbackLocale:we,get inheritLocale(){return o},set inheritLocale(t){o=t,t&&a&&(c.value=a.locale.value,l.value=a.fallbackLocale.value,V(i,c.value,l.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:We,get modifiers(){return ne},get pluralRules(){return x||{}},get isGlobal(){return s},get missingWarn(){return I},set missingWarn(t){I=t,i.missingWarn=I},get fallbackWarn(){return f},set fallbackWarn(t){f=t,i.fallbackWarn=f},get fallbackRoot(){return g},set fallbackRoot(t){g=t},get fallbackFormat(){return L},set fallbackFormat(t){L=t,i.fallbackFormat=L},get warnHtmlMessage(){return H},set warnHtmlMessage(t){H=t,i.warnHtmlMessage=t},get escapeParameter(){return B},set escapeParameter(t){B=t,i.escapeParameter=t},t:re,getLocaleMessage:le,setLocaleMessage:rt,mergeLocaleMessage:lt,getPostTranslationHandler:Ye,setPostTranslationHandler:Ge,getMissingHandler:He,setMissingHandler:Be,[Ut]:et};return d.datetimeFormats=xe,d.numberFormats=je,d.rt=Xe,d.te=tt,d.tm=nt,d.d=$e,d.n=Ke,d.getDateTimeFormat=st,d.setDateTimeFormat=ot,d.mergeDateTimeFormat=ct,d.getNumberFormat=ut,d.setNumberFormat=it,d.mergeNumberFormat=_t,d[wt]=e.__injectWithOption,d[q]=Je,d[z]=Ze,d[J]=Qe,d}const te={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function jt({slots:e},r){return r.length===1&&r[0]==="default"?(e.default?e.default():[]).reduce((s,o)=>s=[...s,...R(o.children)?o.children:[o]],[]):r.reduce((a,s)=>{const o=e[s];return o&&(a[s]=o()),a},{})}function Ae(e){return pt}const Ne={name:"i18n-t",props:F({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>W(e)||!isNaN(e)}},te),setup(e,r){const{slots:a,attrs:s}=r,o=e.i18n||ae({useScope:e.scope,__useComponent:!0});return()=>{const c=Object.keys(a).filter(f=>f!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=b(e.plural)?+e.plural:e.plural);const u=jt(r,c),_=o[q](e.keypath,u,l),m=F({},s),I=b(e.tag)||p(e.tag)?e.tag:Ae();return ye(I,m,_)}}};function Yt(e){return R(e)&&!b(e[0])}function Me(e,r,a,s){const{slots:o,attrs:c}=r;return()=>{const l={part:!0};let u={};e.locale&&(l.locale=e.locale),b(e.format)?l.key=e.format:p(e.format)&&(b(e.format.key)&&(l.key=e.format.key),u=Object.keys(e.format).reduce((g,L)=>a.includes(L)?F({},g,{[L]:e.format[L]}):g,{}));const _=s(e.value,l,u);let m=[l.key];R(_)?m=_.map((g,L)=>{const S=o[g.type],k=S?S({[g.type]:g.value,index:L,parts:_}):[g.value];return Yt(k)&&(k[0].key=`${g.type}-${L}`),k}):b(_)&&(m=[_]);const I=F({},c),f=b(e.tag)||p(e.tag)?e.tag:Ae();return ye(f,I,m)}}const pe={name:"i18n-n",props:F({value:{type:Number,required:!0},format:{type:[String,Object]}},te),setup(e,r){const a=e.i18n||ae({useScope:"parent",__useComponent:!0});return Me(e,r,bt,(...s)=>a[J](...s))}},ve={name:"i18n-d",props:F({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},te),setup(e,r){const a=e.i18n||ae({useScope:"parent",__useComponent:!0});return Me(e,r,dt,(...s)=>a[z](...s))}};function Gt(e,r){const a=e;if(e.mode==="composition")return a.__getInstance(r)||e.global;{const s=a.__getInstance(r);return s!=null?s.__composer:e.global.__composer}}function Ht(e){const r=l=>{const{instance:u,modifiers:_,value:m}=l;if(!u||!u.$)throw N(T.UNEXPECTED_ERROR);const I=Gt(e,u.$),f=Re(m);return[Reflect.apply(I.t,I,[...Fe(f)]),I]};return{created:(l,u)=>{const[_,m]=r(u);$&&e.global===m&&(l.__i18nWatcher=K(m.locale,()=>{u.instance&&u.instance.$forceUpdate()})),l.__composer=m,l.textContent=_},unmounted:l=>{$&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:u})=>{if(l.__composer){const _=l.__composer,m=Re(u);l.textContent=Reflect.apply(_.t,_,[...Fe(m)])}},getSSRProps:l=>{const[u]=r(l);return{textContent:u}}}}function Re(e){if(b(e))return{path:e};if(y(e)){if(!("path"in e))throw N(T.REQUIRED_VALUE,"path");return e}else throw N(T.INVALID_VALUE)}function Fe(e){const{path:r,locale:a,args:s,choice:o,plural:c}=e,l={},u=s||{};return b(a)&&(l.locale=a),W(o)&&(l.plural=o),W(c)&&(l.plural=c),[r,u,l]}function Bt(e,r,...a){const s=y(a[0])?a[0]:{},o=!!s.useI18nComponentName;(C(s.globalInstall)?s.globalInstall:!0)&&(e.component(o?"i18n":Ne.name,Ne),e.component(pe.name,pe),e.component(ve.name,ve)),e.directive("t",Ht(r))}const Xt=P("global-vue-i18n");function sa(e={},r){const a=C(e.globalInjection)?e.globalInjection:!0,s=!0,o=new Map,[c,l]=$t(e),u=P("");function _(f){return o.get(f)||null}function m(f,g){o.set(f,g)}function I(f){o.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return s},async install(g,...L){g.__VUE_I18N_SYMBOL__=u,g.provide(g.__VUE_I18N_SYMBOL__,f),a&&ta(g,f.global),Bt(g,f,...L);const S=g.unmount;g.unmount=()=>{f.dispose(),S()}},get global(){return l},dispose(){c.stop()},__instances:o,__getInstance:_,__setInstance:m,__deleteInstance:I};return f}}function ae(e={}){const r=ee();if(r==null)throw N(T.MUST_BE_CALL_SETUP_TOP);if(!r.isCE&&r.appContext.app!=null&&!r.appContext.app.__VUE_I18N_SYMBOL__)throw N(T.NOT_INSLALLED);const a=Kt(r),s=zt(a),o=De(r),c=qt(e,o);if(c==="global")return Wt(s,e,o),s;if(c==="parent"){let _=Jt(a,r,e.__useComponent);return _==null&&(_=s),_}const l=a;let u=l.__getInstance(r);if(u==null){const _=F({},e);"__i18n"in o&&(_.__i18n=o.__i18n),s&&(_.__root=s),u=he(_),Qt(l,r),l.__setInstance(r,u)}return u}function $t(e,r,a){const s=Et();{const o=s.run(()=>he(e));if(o==null)throw N(T.UNEXPECTED_ERROR);return[s,o]}}function Kt(e){{const r=yt(e.isCE?Xt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!r)throw N(e.isCE?T.NOT_INSLALLED_WITH_PROVIDE:T.UNEXPECTED_ERROR);return r}}function qt(e,r){return kt(e)?"__i18n"in r?"local":"global":e.useScope?e.useScope:"local"}function zt(e){return e.mode==="composition"?e.global:e.global.__composer}function Jt(e,r,a=!1){let s=null;const o=r.root;let c=r.parent;for(;c!=null;){const l=e;if(e.mode==="composition"&&(s=l.__getInstance(c)),s!=null||o===c)break;c=c.parent}return s}function Qt(e,r,a){Ct(()=>{},r),Pt(()=>{e.__deleteInstance(r)},r)}const Zt=["locale","fallbackLocale","availableLocales"],ea=["t","rt","d","n","tm"];function ta(e,r){const a=Object.create(null);Zt.forEach(s=>{const o=Object.getOwnPropertyDescriptor(r,s);if(!o)throw N(T.UNEXPECTED_ERROR);const c=vt(o.value)?{get(){return o.value.value},set(l){o.value.value=l}}:{get(){return o.get&&o.get()}};Object.defineProperty(a,s,c)}),e.config.globalProperties.$i18n=a,ea.forEach(s=>{const o=Object.getOwnPropertyDescriptor(r,s);if(!o||!o.value)throw N(T.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${s}`,o)})}It(Rt);Ot(Ce);Vt();if(__INTLIFY_PROD_DEVTOOLS__){const e=ke();e.__INTLIFY__=!0,Lt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{sa as c,ae as u};
