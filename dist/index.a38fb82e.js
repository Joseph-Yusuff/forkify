function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire7e89;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire7e89=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.a38fb82e.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,d,f,p={},h="object"==typeof document&&document.all,g=(f={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;p=f.IS_HTMLDDA?function(e){return"function"==typeof e||e===g}:function(e){return"function"==typeof e};var v,y={},m={};v=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var b=Function.prototype,_=b.call,w=v&&b.bind.bind(_,_);m=v?w:function(e){return function(){return _.apply(e,arguments)}};var k,E,S;S=function(e){return null==e};var $=TypeError;E=function(e){if(S(e))throw $("Can't call method on "+e);return e};var O=Object;k=function(e){return O(E(e))};var j=m({}.hasOwnProperty);y=Object.hasOwn||function(e,t){return j(k(e),t)};var L,x=Function.prototype,P=c&&Object.getOwnPropertyDescriptor,M=y(x,"name"),T={EXISTS:M,PROPER:M&&"something"===function(){}.name,CONFIGURABLE:M&&(!c||c&&P(x,"name").configurable)}.CONFIGURABLE,I={},H={},F=Object.defineProperty;L=function(e,t){try{F(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var q="__core-js_shared__",A=a[q]||L(q,{});H=A;var N=m(Function.toString);p(H.inspectSource)||(H.inspectSource=function(e){return N(e)}),I=H.inspectSource;var C,D,R=a.WeakMap;D=p(R)&&/native code/.test(String(R));var U={},W=f.all;U=f.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:p(e)||e===W}:function(e){return"object"==typeof e?null!==e:p(e)};var G,B,z,J={},Y=a.document,V=U(Y)&&U(Y.createElement);z=function(e){return V?Y.createElement(e):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(z("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(U(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=v?re.bind(re):function(){return re.apply(re,arguments)};var ie,oe={},ae=function(e){return p(e)?e:void 0};ie=function(e,t){return arguments.length<2?ae(a[e]):a[e]&&a[e][t]};var se={};se=m({}.isPrototypeOf);var ce,ue,le,de={};de=ie("navigator","userAgent")||"";var fe,pe,he=a.process,ge=a.Deno,ve=he&&he.versions||ge&&ge.version,ye=ve&&ve.v8;ye&&(pe=(fe=ye.split("."))[0]>0&&fe[0]<4?1:+(fe[0]+fe[1])),!pe&&de&&(!(fe=de.match(/Edge\/(\d+)/))||fe[1]>=74)&&(fe=de.match(/Chrome\/(\d+)/))&&(pe=+fe[1]),le=pe,ue=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&le&&le<41})),ce=ue&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var me=Object;oe=ce?function(e){return"symbol"==typeof e}:function(e){var t=ie("Symbol");return p(t)&&se(t.prototype,me(e))};var be,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(p(e))return e;throw Ee(we(e)+" is not a function")},be=function(e,t){var n=e[t];return S(n)?void 0:_e(n)};var Se,$e=TypeError;Se=function(e,t){var n,r;if("string"===t&&p(n=e.toString)&&!U(r=ne(n,e)))return r;if(p(n=e.valueOf)&&!U(r=ne(n,e)))return r;if("string"!==t&&p(n=e.toString)&&!U(r=ne(n,e)))return r;throw $e("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return H[e]||(H[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"});var je,Le=0,xe=Math.random(),Pe=m(1..toString);je=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Pe(++Le+xe,36)};var Me=Oe("wks"),Te=a.Symbol,Ie=Te&&Te.for,He=ce?Te:Te&&Te.withoutSetter||je,Fe=TypeError,qe=function(e){if(!y(Me,e)||!ue&&"string"!=typeof Me[e]){var t="Symbol."+e;ue&&y(Te,e)?Me[e]=Te[e]:Me[e]=ce&&Ie?Ie(t):He(t)}return Me[e]}("toPrimitive");te=function(e,t){if(!U(e)||oe(e))return e;var n,r=be(e,qe);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!U(n)||oe(n))return n;throw Fe("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return oe(t)?t:t+""};var Ae=TypeError,Ne=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,De="enumerable",Re="configurable",Ue="writable";G=c?Q?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&Ue in n&&!n[Ue]){var r=Ce(e,t);r&&r[Ue]&&(e[t]=n.value,n={configurable:Re in n?n[Re]:r[Re],enumerable:De in n?n[De]:r[De],writable:!1})}return Ne(e,t,n)}:Ne:function(e,t,n){if(K(e),t=ee(t),K(n),B)try{return Ne(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ae("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var We;We=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,n){return G(e,t,We(1,n))}:function(e,t,n){return e[t]=n,e};var Ge,Be=Oe("keys");Ge=function(e){return Be[e]||(Be[e]=je(e))};var ze={};ze={};var Je,Ye,Ve,Qe="Object already initialized",Ke=a.TypeError,Xe=a.WeakMap;if(D||H.state){var Ze=H.state||(H.state=new Xe);Ze.get=Ze.get,Ze.has=Ze.has,Ze.set=Ze.set,Je=function(e,t){if(Ze.has(e))throw Ke(Qe);return t.facade=e,Ze.set(e,t),t},Ye=function(e){return Ze.get(e)||{}},Ve=function(e){return Ze.has(e)}}else{var et=Ge("state");ze[et]=!0,Je=function(e,t){if(y(e,et))throw Ke(Qe);return t.facade=e,J(e,et,t),t},Ye=function(e){return y(e,et)?e[et]:{}},Ve=function(e){return y(e,et)}}var tt=(C={set:Je,get:Ye,has:Ve,enforce:function(e){return Ve(e)?Ye(e):Je(e,{})},getterFor:function(e){return function(t){var n;if(!U(t)||(n=Ye(t)).type!==e)throw Ke("Incompatible receiver, "+e+" required");return n}}}).enforce,nt=C.get,rt=Object.defineProperty,it=c&&!u((function(){return 8!==rt((function(){}),"length",{value:8}).length})),ot=String(String).split("String"),at=d=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!y(e,"name")||T&&e.name!==t)&&(c?rt(e,"name",{value:t,configurable:!0}):e.name=t),it&&n&&y(n,"arity")&&e.length!==n.arity&&rt(e,"length",{value:n.arity});try{n&&y(n,"constructor")&&n.constructor?c&&rt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=tt(e);return y(r,"source")||(r.source=ot.join("string"==typeof t?t:"")),e};Function.prototype.toString=at((function(){return p(this)&&nt(this).source||I(this)}),"toString"),l=function(e,t,n){return n.get&&d(n.get,t,{getter:!0}),n.set&&d(n.set,t,{setter:!0}),G(e,t,n)};var st;st=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var ct=a.RegExp,ut=ct.prototype;c&&u((function(){var e=!0;try{ct(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(ut,"flags").get.call(t)!==r||n!==r}))&&l(ut,"flags",{configurable:!0,get:st});var lt,dt,ft,pt={}.propertyIsEnumerable,ht=Object.getOwnPropertyDescriptor,gt=ht&&!pt.call({1:2},1);ft=gt?function(e){var t=ht(this,e);return!!t&&t.enumerable}:pt;var vt,yt,mt={},bt=m({}.toString),_t=m("".slice);yt=function(e){return _t(bt(e),8,-1)};var wt=Object,kt=m("".split);mt=u((function(){return!wt("z").propertyIsEnumerable(0)}))?function(e){return"String"==yt(e)?kt(e,""):wt(e)}:wt,vt=function(e){return mt(E(e))};var Et,St=Object.getOwnPropertyDescriptor,$t=dt=c?St:function(e,t){if(e=vt(e),t=ee(t),B)try{return St(e,t)}catch(e){}if(y(e,t))return We(!ne(ft,e,t),e[t])};Et=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(p(n)&&d(n,o,r),r.global)i?e[t]=n:L(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:G(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var Ot,jt,Lt,xt,Pt,Mt={},Tt={},It=Math.ceil,Ht=Math.floor;Tt=Math.trunc||function(e){var t=+e;return(t>0?Ht:It)(t)},Pt=function(e){var t=+e;return t!=t||0===t?0:Tt(t)};var Ft=Math.max,qt=Math.min;xt=function(e,t){var n=Pt(e);return n<0?Ft(n+t,0):qt(n,t)};var At,Nt,Ct=Math.min;Nt=function(e){return e>0?Ct(Pt(e),9007199254740991):0},At=function(e){return Nt(e.length)};var Dt=function(e){return function(t,n,r){var i,o=vt(t),a=At(o),s=xt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Rt={includes:Dt(!0),indexOf:Dt(!1)}.indexOf,Ut=m([].push);Lt=function(e,t){var n,r=vt(e),i=0,o=[];for(n in r)!y(ze,n)&&y(r,n)&&Ut(o,n);for(;t.length>i;)y(r,n=t[i++])&&(~Rt(o,n)||Ut(o,n));return o};var Wt,Gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");jt=Object.getOwnPropertyNames||function(e){return Lt(e,Gt)},Wt=Object.getOwnPropertySymbols;var Bt=m([].concat);Mt=ie("Reflect","ownKeys")||function(e){var t=jt(K(e));return Wt?Bt(t,Wt(e)):t},Ot=function(e,t,n){for(var r=Mt(t),i=G,o=dt,a=0;a<r.length;a++){var s=r[a];y(e,s)||n&&y(n,s)||i(e,s,o(t,s))}};var zt={},Jt=/#|\.prototype\./,Yt=function(e,t){var n=Qt[Vt(e)];return n==Xt||n!=Kt&&(p(t)?u(t):!!t)},Vt=Yt.normalize=function(e){return String(e).replace(Jt,".").toLowerCase()},Qt=Yt.data={},Kt=Yt.NATIVE="N",Xt=Yt.POLYFILL="P";zt=Yt,lt=function(e,t){var n,r,i,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||L(c,{}):(a[c]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(s=$t(n,r))&&s.value:n[r],!zt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Ot(o,i)}(e.sham||i&&i.sham)&&J(o,"sham",!0),Et(n,r,o,e)}};var Zt,en={},tn=Function.prototype,nn=tn.apply,rn=tn.call;en="object"==typeof Reflect&&Reflect.apply||(v?rn.bind(nn):function(){return rn.apply(nn,arguments)});var on,an,sn=(an=function(e){if("Function"===yt(e))return m(e)})(an.bind);on=function(e,t){return _e(e),void 0===t?e:v?sn(e,t):function(){return e.apply(t,arguments)}};var cn={};cn=ie("document","documentElement");var un={};un=m([].slice);var ln,dn=TypeError;ln=function(e,t){if(e<t)throw dn("Not enough arguments");return e};var fn;fn=/(?:ipad|iphone|ipod).*applewebkit/i.test(de);var pn;pn="process"==yt(a.process);var hn,gn,vn,yn,mn=a.setImmediate,bn=a.clearImmediate,_n=a.process,wn=a.Dispatch,kn=a.Function,En=a.MessageChannel,Sn=a.String,$n=0,On={},jn="onreadystatechange";try{hn=a.location}catch(e){}var Ln=function(e){if(y(On,e)){var t=On[e];delete On[e],t()}},xn=function(e){return function(){Ln(e)}},Pn=function(e){Ln(e.data)},Mn=function(e){a.postMessage(Sn(e),hn.protocol+"//"+hn.host)};mn&&bn||(mn=function(e){ln(arguments.length,1);var t=p(e)?e:kn(e),n=un(arguments,1);return On[++$n]=function(){en(t,void 0,n)},gn($n),$n},bn=function(e){delete On[e]},pn?gn=function(e){_n.nextTick(xn(e))}:wn&&wn.now?gn=function(e){wn.now(xn(e))}:En&&!fn?(yn=(vn=new En).port2,vn.port1.onmessage=Pn,gn=on(yn.postMessage,yn)):a.addEventListener&&p(a.postMessage)&&!a.importScripts&&hn&&"file:"!==hn.protocol&&!u(Mn)?(gn=Mn,a.addEventListener("message",Pn,!1)):gn=jn in z("script")?function(e){cn.appendChild(z("script"))[jn]=function(){cn.removeChild(this),Ln(e)}}:function(e){setTimeout(xn(e),0)});var Tn=(Zt={set:mn,clear:bn}).clear;lt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Tn},{clearImmediate:Tn});var In,Hn,Fn=Zt.set;Hn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var qn,An=a.Function,Nn=/MSIE .\./.test(de)||Hn&&((qn=a.Bun.version.split(".")).length<3||0==qn[0]&&(qn[1]<3||3==qn[1]&&0==qn[2]));In=function(e,t){var n=t?2:1;return Nn?function(r,i){var o=ln(arguments.length,1)>n,a=p(r)?r:An(r),s=o?un(arguments,n):[],c=o?function(){en(a,this,s)}:a;return t?e(c,i):e(c)}:e};var Cn=a.setImmediate?In(Fn,!1):Fn;lt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==Cn},{setImmediate:Cn});var Dn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new x(r||[]);return i(a,"_invoke",{value:$(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function $(e,t,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return M()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?h:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function O(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=d(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Dn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Dn:Function("r","regeneratorRuntime = r")(Dn)}const Rn="https://forkify-api.herokuapp.com/api/v2/recipes/",Un="7b35e287-3b88-4647-9953-c3a71f6923b6",Wn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message}(${i.status})`);return o}catch(e){throw e}var n},Gn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},Bn=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},zn=function(e=Gn.search.page){Gn.search.page=e;const t=(e-1)*Gn.search.resultsPerPage,n=e*Gn.search.resultsPerPage;return Gn.search.results.slice(t,n)},Jn=function(){localStorage.setItem("bookmarks",JSON.stringify(Gn.bookmarks))},Yn=function(e){Gn.bookmarks.push(e),e.id===Gn.recipe.id&&(Gn.recipe.bookmarked=!0),Jn()};!function(){const e=localStorage.getItem("bookmarks");e&&(Gn.bookmarks=JSON.parse(e))}(),console.log(Gn.bookmarks);var Vn;Vn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Qn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=` <div class="spinner">\n    <svg>\n      <use href="${n(Vn)}#icon-loader"></use>\n    </svg>\n  </div> \n  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`  \n    <div class="error">\n  <div>\n    <svg>\n      <use href="${n(Vn)}#icon-alert-triangle"></use>\n    </svg>\n  </div>\n  <p>${e}</p>\n</div>\n`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`  \n\n    <div class="message">\n      <div>\n        <svg>\n          <use href="${n(Vn)}#icon-smile"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>\n\n`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Kn;function Xn(e,t,n,r,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(u,c,n,r)}Kn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let i,o=r[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,n,r,i){const o=!0,a=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return Xn(l,(u-1)*s,r,i,o)}(i,n,e,o,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return Xn(i,o,t,n,r)}(i,o,t)};var Zn=new class extends Qn{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. please try another one!";_message="";addHandlerrender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--increase-servings");if(!n)return;console.log(n);const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return console.log(this._data),` \n    <figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n    </figure>\n    \n    <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(Vn)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(Vn)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n    \n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings-1}">\n          <svg>\n            <use href="${n(Vn)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--increase-servings"data-update-to="${this._data.servings+1}">\n          <svg>\n            <use href="${n(Vn)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n    \n    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(Vn)}#icon-user"></use>\n            </svg>\n          </div>\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${n(Vn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n    </div>\n    \n    <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n    \n    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n    \n    \n    </div>\n    <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sourceUrl}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${n(Vn)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n    </div>\n    `}_generateMarkupIngredient(e){return`\n  <li class="recipe__ingredient">\n  <svg class="recipe__icon">\n    <use href="${n(Vn)}#icon-check"></use>\n  </svg>\n  <div class="recipe__quantity">${e.quantity?n(Kn)(e.quantity).toString():""}</div>\n  <div class="recipe__description">\n    <span class="recipe__unit">${e.unit}</span>\n    ${e.description}\n  </div>\n</li>\n  `}};var er=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var tr=new class extends Qn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return console.log(this._data),` <li class="preview">\n    <a class="preview__link ${this._data.id===e?"preview__link--active":""} " href="#${this._data.id}">\n      <figure class="preview__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${this._data.title}</h4>\n        <p class="preview__publisher">${this._data.publisher}</p>\n        </div>\n        \n        <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n        <svg>\n        <use href="${n(Vn)}#icon-user"></use>\n        </svg>\n        </div>\n    </a>\n  </li>`}};var nr=new class extends Qn{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map((e=>tr.render(e,!1))).join("")}};var rr=new class extends Qn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(console.log(n),!n)return;const r=+n.dataset.goto;console.log(r),e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return console.log(t),1===e&&t>1?`\n       <button data-goto= "${e+1}"class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n                <use href="${n(Vn)}#icon-arrow-right"></use>\n            </svg>\n    </button>  `:e===t&&t>1?`<button data-goto= "${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n                <use href="${n(Vn)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e-1}</span>\n    </button>`:e<t?`<button data-goto= "${e-1}" class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n          <use href="${n(Vn)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${e-1}</span>\n      </button>\n      \n     <button data-goto= "${e+1}" class="btn--inline pagination__btn--next">\n        <span>Page ${e+1}</span>\n        <svg class="search__icon">\n          <use href="${n(Vn)}#icon-arrow-right"></use>\n        </svg>\n      </button>  `:""}};var ir=new class extends Qn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage=" No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>tr.render(e,!1))).join("")}};var or=new class extends Qn{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded:)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const ar=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Zn.renderSpinner(),nr.update(zn()),ir.update(Gn.bookmarks),await async function(e){try{const t=await Wn(`${Rn}${e}?key=${Un}`);Gn.recipe=Bn(t);const{recipe:n}=t.data;Gn.recipe={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},Gn.bookmarks.some((t=>t.id===e))?Gn.recipe.bookmarked=!0:Gn.recipe.bookmarked=!1,console.log(Gn.recipe)}catch(e){throw console.error(`${e} 🎆🎆🎆🎆`),e}}(e),Zn.render(Gn.recipe)}catch(e){Zn.renderError(),console.err(e)}},sr=async function(){try{nr.renderSpinner();const e=er.getQuery();if(!e)return;await async function(e){try{Gn.search.query=e;const t=await Wn(`${Rn}?search=${e}&key=${Un}`);console.log(t),Gn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Gn.search.page=1}catch(e){throw console.error(`${e} 🎆🎆🎆🎆`),e}}(e),nr.render(zn()),rr.render(Gn.search)}catch(e){console.log(e)}},cr=function(e){nr.render(zn(e)),rr.render(Gn.search)},ur=function(e){!function(e){Gn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Gn.recipe.servings})),Gn.recipe.servings=e}(e),Zn.update(Gn.recipe)},lr=function(){Gn.recipe.bookmarked?function(e){const t=Gn.bookmarks.findIndex((t=>t.id===e));Gn.bookmarks.splice(t,1),e===Gn.recipe.id&&(Gn.recipe.bookmarked=!1),Jn()}(Gn.recipe.id):Yn(Gn.recipe),Zn.update(Gn.recipe),ir.render(Gn.bookmarks)},dr=function(){ir.render(Gn.bookmarks)},fr=async function(e){try{or.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct Format :)");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,cooking_time:+e.cookingTime,servings:+e.servings,publisher:e.publisher,ingredients:t},r=await Wn(`${Rn}?search=${n.title}&key=${Un}`,n);Gn.recipe=Bn(r),Yn(Gn.recipe)}catch(e){throw e}}(e),console.log(Gn.recipe),Zn.render(Gn.recipe),or.renderMessage(),ir.render(Gn.bookmarks),window.history.pushState(null,"",`#${Gn.recipe.id}`),setTimeout((function(){or.toggleWindow()}),2500)}catch(e){console.error("🎆",e),or.renderError(e.message)}};ir.addHandlerRender(dr),Zn.addHandlerrender(ar),Zn.addHandlerUpdateServings(ur),Zn.addHandlerAddBookmark(lr),er.addHandlerSearch(sr),rr.addHandlerClick(cr),or.addHandlerUpload(fr);
//# sourceMappingURL=index.a38fb82e.js.map
