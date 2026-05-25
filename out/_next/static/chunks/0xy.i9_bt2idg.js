(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20955,(e,t,n)=>{var r={229:function(e){var t,n,r,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}var l=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?l=r.concat(l):u=-1,l.length&&p())}function p(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||c||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}},i=!0;try{r[e](n,n.exports,o),i=!1}finally{i&&delete a[e]}return n.exports}o.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=o(229)},50461,(e,t,n)=>{"use strict";var r,a;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(a=e.g.process)?void 0:a.env)?e.g.process:e.r(20955)},41705,(e,t,n)=>{"use strict";n._=function(e){return e&&e.__esModule?e:{default:e}}},8481,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element");function a(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return{$$typeof:r,type:e,key:a,ref:void 0!==(t=n.ref)?t:null,props:n}}n.Fragment=Symbol.for("react.fragment"),n.jsx=a,n.jsxs=a},91398,(e,t,n)=>{"use strict";t.exports=e.r(8481)},61556,(e,t,n)=>{"use strict";var r=e.i(50461),a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),g=Symbol.iterator,x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||x}function v(){}function j(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||x}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var k=j.prototype=new v;k.constructor=j,_(k,y.prototype),k.isPureReactComponent=!0;var w=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(e,t,n){var r=n.ref;return{$$typeof:a,type:e,key:t,ref:void 0!==r?r:null,props:n}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function O(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function R(e,t,n){if(null==e)return e;var r=[],i=0;return!function e(t,n,r,i,s){var l,c,u,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var p=!1;if(null===t)p=!0;else switch(d){case"bigint":case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case a:case o:p=!0;break;case m:return e((p=t._init)(t._payload),n,r,i,s)}}if(p)return s=s(t),p=""===i?"."+O(t,0):i,w(s)?(r="",null!=p&&(r=p.replace(P,"$&/")+"/"),e(s,n,r,"",function(e){return e})):null!=s&&(E(s)&&(l=s,c=r+(null==s.key||t&&t.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+p,s=C(l.type,c,l.props)),n.push(s)),1;p=0;var f=""===i?".":i+":";if(w(t))for(var h=0;h<t.length;h++)d=f+O(i=t[h],h),p+=e(i,n,r,d,s);else if("function"==typeof(h=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=g&&u[g]||u["@@iterator"])?u:null))for(t=h.call(t),h=0;!(i=t.next()).done;)d=f+O(i=i.value,h++),p+=e(i,n,r,d,s);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(N,N):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),n,r,i,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return p}(e,r,"","",function(e){return t.call(n,e,i++)}),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof r.default&&"function"==typeof r.default.emit)return void r.default.emit("uncaughtException",e);console.error(e)};n.Activity=h,n.Children={map:R,forEach:function(e,t,n){R(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=i,n.Profiler=l,n.PureComponent=j,n.StrictMode=s,n.Suspense=p,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,n.__COMPILER_RUNTIME={__proto__:null,c:function(e){return z.H.useMemoCache(e)}},n.cache=function(e){return function(){return e.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=_({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&("ref"!==o||void 0!==t.ref)&&(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),s=0;s<o;s++)i[s]=arguments[s+2];r.children=i}return C(e.type,a,r)},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:c,_context:e},e},n.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return C(e,o,a)},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:T}},n.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},n.startTransition=function(e){var t=z.T,n={};z.T=n;try{var r=e(),a=z.S;null!==a&&a(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(N,M)}catch(e){M(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),z.T=t}},n.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},n.use=function(e){return z.H.use(e)},n.useActionState=function(e,t,n){return z.H.useActionState(e,t,n)},n.useCallback=function(e,t){return z.H.useCallback(e,t)},n.useContext=function(e){return z.H.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e,t){return z.H.useDeferredValue(e,t)},n.useEffect=function(e,t){return z.H.useEffect(e,t)},n.useEffectEvent=function(e){return z.H.useEffectEvent(e)},n.useId=function(){return z.H.useId()},n.useImperativeHandle=function(e,t,n){return z.H.useImperativeHandle(e,t,n)},n.useInsertionEffect=function(e,t){return z.H.useInsertionEffect(e,t)},n.useLayoutEffect=function(e,t){return z.H.useLayoutEffect(e,t)},n.useMemo=function(e,t){return z.H.useMemo(e,t)},n.useOptimistic=function(e,t){return z.H.useOptimistic(e,t)},n.useReducer=function(e,t,n){return z.H.useReducer(e,t,n)},n.useRef=function(e){return z.H.useRef(e)},n.useState=function(e){return z.H.useState(e)},n.useSyncExternalStore=function(e,t,n){return z.H.useSyncExternalStore(e,t,n)},n.useTransition=function(){return z.H.useTransition()},n.version="19.2.0"},91788,(e,t,n)=>{"use strict";t.exports=e.r(61556)},17547,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"HeadManagerContext",{enumerable:!0,get:function(){return r}});let r=e.r(41705)._(e.r(91788)).default.createContext({})},94470,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},52456,(e,t,n)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}n._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}},94941,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let r=e.r(91788),a="u"<typeof window,o=a?()=>{}:r.useLayoutEffect,i=a?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},80963,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return h},defaultHead:function(){return d}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(41705),i=e.r(52456),s=e.r(91398),l=i._(e.r(91788)),c=o._(e.r(94941)),u=e.r(17547);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(94470);let f=["name","httpEquiv","charSet","itemProp"];function m(e){let t,n,r,a;return e.reduce(p,[]).reverse().concat(d().reverse()).filter((t=new Set,n=new Set,r=new Set,a={},e=>{let o=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?o=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?o=!1:n.add(e.type);break;case"meta":for(let t=0,n=f.length;t<n;t++){let n=f[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?o=!1:r.add(n);else{let t=e.props[n],r=a[n]||new Set;("name"!==n||!i)&&r.has(t)?o=!1:(r.add(t),a[n]=r)}}}return o})).reverse().map((e,t)=>{let n=e.key||t;return l.default.cloneElement(e,{key:n})})}let h=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},58678,(e,t,n)=>{t.exports=e.r(80963)},1085,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={AppRouterContext:function(){return i},GlobalLayoutRouterContext:function(){return l},LayoutRouterContext:function(){return s},MissingSlotContext:function(){return u},TemplateContext:function(){return c}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(41705)._(e.r(91788)),i=o.default.createContext(null),s=o.default.createContext(null),l=o.default.createContext(null),c=o.default.createContext(null),u=o.default.createContext(new Set)},31430,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return a}});class r extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new r}delete(){throw new r}set(){throw new r}sort(){throw new r}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},70008,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={NavigationPromisesContext:function(){return u},PathParamsContext:function(){return c},PathnameContext:function(){return l},ReadonlyURLSearchParams:function(){return i.ReadonlyURLSearchParams},SearchParamsContext:function(){return s},createDevToolsInstrumentedPromise:function(){return d}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(91788),i=e.r(31430),s=(0,o.createContext)(null),l=(0,o.createContext)(null),c=(0,o.createContext)(null),u=(0,o.createContext)(null);function d(e,t){let n=Promise.resolve(t);return n.status="fulfilled",n.value=t,n.displayName=`${e} (SSR)`,n}},14760,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={BailoutToCSRError:function(){return i},isBailoutToCSRError:function(){return s}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o="BAILOUT_TO_CLIENT_SIDE_RENDERING";class i extends Error{constructor(e){super(`Bail out to client-side rendering: ${e}`),this.reason=e,this.digest=o}}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===o}},91622,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={HTTPAccessErrorStatus:function(){return o},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return s},getAccessFallbackErrorTypeByStatus:function(){return u},getAccessFallbackHTTPStatus:function(){return c},isHTTPAccessFallbackError:function(){return l}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},i=new Set(Object.values(o)),s="NEXT_HTTP_ERROR_FALLBACK";function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,n]=e.digest.split(";");return t===s&&i.has(Number(n))}function c(e){return Number(e.digest.split(";")[1])}function u(e){switch(e){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},40184,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RedirectStatusCode",{enumerable:!0,get:function(){return a}});var r,a=((r={})[r.SeeOther=303]="SeeOther",r[r.TemporaryRedirect=307]="TemporaryRedirect",r[r.PermanentRedirect=308]="PermanentRedirect",r);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},1939,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={REDIRECT_ERROR_CODE:function(){return i},isRedirectError:function(){return s}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let o=e.r(40184),i="NEXT_REDIRECT";function s(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[n,r]=t,a=t.slice(2,-2).join(";"),s=Number(t.at(-2));return n===i&&("replace"===r||"push"===r)&&"string"==typeof a&&!isNaN(s)&&s in o.RedirectStatusCode}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},68934,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isNextRouterError",{enumerable:!0,get:function(){return o}});let r=e.r(91622),a=e.r(1939);function o(e){return(0,a.isRedirectError)(e)||(0,r.isHTTPAccessFallbackError)(e)}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},10477,e=>{"use strict";var t=e.i(91398),n=e.i(45246),r=e.i(91788),a=e.i(39056),o=e.i(272),i=e.i(60814),s=e.i(41158),l=e.i(3828),c=e.i(69027);let u=i.keyframes`
  0%   { transform: translateY(0px) rotate(0deg); }
  50%  { transform: translateY(-14px) rotate(1.2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,d=i.keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`,p=i.keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`,f=i.keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
`,m=i.keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50%       { transform: scale(1.04); opacity: 0.8; }
`,h={French:"🇫🇷",Spanish:"🇪🇸",German:"🇩🇪",English:"🇬🇧",Portuguese:"🇵🇹",Italian:"🇮🇹",Japanese:"🇯🇵",Chinese:"🇨🇳",Arabic:"🇸🇦",Dutch:"🇳🇱"},g=i.default.div.withConfig({displayName:"Intro__Styled",componentId:"sc-9610e352-0"})`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  width: 100vw;
  background: #eef3e8;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: -120px;
    right: -120px;
    width: 440px;
    height: 440px;
    border-radius: 50%;
   background: radial-gradient(circle, rgba(51,105,30,0.08) 0%, transparent 72%);
    pointer-events: none;
    z-index: 0;
  }

  .topbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    position: relative;
    z-index: 10;
    flex-shrink: 0;
  }

  .logo-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .logo-img {
    height: 52px;
    display: block;
    filter: drop-shadow(0 2px 6px rgba(27, 94, 32, 0.15));
  }

  .main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px 48px 32px;
    position: relative;
    z-index: 2;
    gap: 32px;
  }

  .left {
    flex: 1;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    animation: ${d} 0.45s ease both;
  }

  .heading {
    margin-bottom: 28px;
  }
  .heading h1 {
    font-size: clamp(26px, 3.2vw, 40px);
    font-weight: 800;
    color: #111;
    margin: 0 0 4px 0;
    line-height: 1.12;
    letter-spacing: -0.8px;
  }
  .heading h1 span {
    color: #2e7d32;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-color: rgba(46, 125, 50, 0.45);
    text-decoration-thickness: 3px;
  }
  .heading p {
    font-size: 14px;
    color: #6b7c6b;
    font-weight: 400;
    margin: 14px 0 0 0;
    line-height: 1.65;
    max-width: 380px;
  }

  .panels {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    animation: ${f} 0.4s 0.1s ease both;
  }

  .sel-panel {
    background: #f1f8e9;
border: 1px solid #dcedc8;
    border-radius: 14px;
    padding: 14px 18px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .sel-panel:hover {
    border-color: #a5d6a7;
    box-shadow: 0 4px 18px rgba(27, 94, 32, 0.10);
  }

  .panel-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #6fa85e;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .panel-label::before {
    content: "";
    display: inline-block;
    width: 12px; height: 2px;
    background: #7aaa68;
    border-radius: 2px;
  }

  .grade-row { display: flex; align-items: center; gap: 12px; }
  .grade-icon {
    width: 40px; height: 40px; border-radius: 12px;
    background: linear-gradient(135deg, #1b5e20, #43a047);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
    box-shadow: 0 3px 10px rgba(27, 94, 32, 0.22);
  }
  .gi-sub {
    display: block; font-size: 9px; font-weight: 700;
    color: #6fa85e; letter-spacing: 0.8px; text-transform: uppercase;
    margin-bottom: 2px;
  }
  .gi-val {
    display: block; font-size: 14px; font-weight: 700; color: #1a2e19;
    line-height: 1.2;
  }

  .lang-pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .lang-pill {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 15px; border-radius: 999px;
    font-weight: 600; font-size: 13px; cursor: pointer;
    transition: all 0.2s ease; font-family: "Poppins", sans-serif;
    background: #ffffff;
color: #33691e;
border: 1.5px solid #c8e6c9;
  }
  .lang-pill:hover {
    background: #e8f5e2; border-color: #2e7d32;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(46, 125, 50, 0.14);
  }
  .lang-pill.active {
   background: #33691e;
    border-color: transparent; color: #fff;
    box-shadow: 0 5px 14px rgba(27, 94, 32, 0.30);
    transform: scale(1.04);
  }
  .pill-flag { font-size: 15px; }

  .action-row {
    display: flex;
    align-items: center;
    gap: 18px;
    animation: ${d} 0.4s 0.2s ease both;
  }

  .actionBtn {
    display: inline-flex; align-items: center; gap: 10px;
    background: #33691e;
    color: #fff; font-weight: 700; font-size: 15px;
    padding: 14px 36px; border-radius: 14px; text-decoration: none;
    transition: all 0.25s ease; font-family: "Poppins", sans-serif;
    letter-spacing: 0.2px;
    box-shadow: 0 6px 22px rgba(27, 94, 32, 0.28);
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    flex-shrink: 0;
    white-space: nowrap;
  }
  .actionBtn:hover {
    background: #1b5e20;
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(27, 94, 32, 0.38);
  }
  .btn-arrow { font-size: 18px; transition: transform 0.2s; }
  .actionBtn:hover .btn-arrow { transform: translateX(5px); }

  .right {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: ${p} 0.5s 0.08s ease both;
    transform: translateX(20px);
  }

  .mascot-circle {
    width: clamp(260px, 32vw, 380px);
    height: clamp(260px, 32vw, 380px);
    border-radius: 50%;
    background: radial-gradient(circle at 40% 38%, #dcedc8 0%, #c5e1a5 45%, #aed581 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    position: relative;
    box-shadow:
      0 20px 60px rgba(27, 94, 32, 0.16),
      0 4px 16px rgba(27, 94, 32, 0.10);
  }
  .mascot-ring {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: 2px dashed rgba(46, 125, 50, 0.20);
    animation: ${m} 4s ease-in-out infinite;
    pointer-events: none;
  }
  .mascot-wrap {
    animation: ${u} 4.6s ease-in-out infinite;
    filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.18));
    position: relative;
    z-index: 2;
    margin-bottom: -4px;
  }
  .mascot {
    height: clamp(200px, 26vw, 310px);
    display: block;
  }

  .dot-dec {
    position: absolute;
    border-radius: 50%;
    background: #2e7d32;
    opacity: var(--op);
    width: var(--s); height: var(--s);
  }

  @media (max-width: 900px) {
    .main { gap: 32px; padding: 0 32px 40px; }
    .topbar { padding: 18px 32px; }
  }

  @media (max-width: 768px) {
    .main {
      flex-direction: column;
      align-items: center;
      padding: 0 20px 40px;
      gap: 32px;
    }
    .left { max-width: 100%; align-items: flex-start; }
    .right { order: -1; }
    .mascot-circle { width: 220px; height: 220px; }
    .mascot { height: 180px !important; }
    .heading h1 { font-size: 32px; }
    .topbar { padding: 16px 20px; }
    .action-row { flex-wrap: wrap; }
  }

  @media (max-width: 480px) {
    .heading h1 { font-size: 27px; }
    .mascot-circle { width: 190px; height: 190px; }
    .mascot { height: 155px !important; }
    .lang-pill { padding: 7px 12px; font-size: 12px; }
    .actionBtn { width: 100%; justify-content: center; }
    .action-row { flex-direction: column; align-items: flex-start; width: 100%; }
  }
`;function x(){let e=(0,l.useRouter)().basePath||"",[n,a]=(0,r.useState)({}),[i,u]=(0,r.useState)([]),[d,p]=(0,r.useState)("");(0,r.useEffect)(()=>{(async()=>{try{let e=localStorage.getItem("user_id");if(!e)return;let{data:t}=await o.apiService.getProfile({user_id:e});if("success"===t.status){a(t);let e=t.language?t.language.split(","):[];u(e),p(e[0]?.trim()||"")}}catch(e){console.error("Profile error",e)}})()},[]);let f=n.grade||"";return(0,t.jsxs)(g,{children:[(0,t.jsxs)("div",{className:"topbar",children:[(0,t.jsx)("div",{className:"logo-row",children:(0,t.jsx)("img",{className:"logo-img",src:`${e}/img/konzeptes/logo.png`,alt:"KONZEPTES"})}),(0,t.jsx)(c.default,{})]}),(0,t.jsxs)("div",{className:"main",children:[(0,t.jsxs)("div",{className:"left",children:[(0,t.jsxs)("div",{className:"heading",children:[(0,t.jsxs)("h1",{children:["Welcome to",(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:"Konzeptes!"})]}),(0,t.jsx)("p",{children:"Select your grade and language to begin your session."})]}),(0,t.jsxs)("div",{className:"panels",children:[(0,t.jsxs)("div",{className:"sel-panel",children:[(0,t.jsx)("div",{className:"panel-label",children:"Your Grade"}),(0,t.jsxs)("div",{className:"grade-row",children:[(0,t.jsx)("div",{className:"grade-icon",children:"🎓"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"gi-sub",children:"Enrolled as"}),(0,t.jsx)("span",{className:"gi-val",children:f||"No Grade Selected"})]})]})]}),(0,t.jsxs)("div",{className:"sel-panel",children:[(0,t.jsx)("div",{className:"panel-label",children:"Learning Language"}),(0,t.jsx)("div",{className:"lang-pills",children:i.length>0?i.map(e=>{let n=e.trim();return(0,t.jsxs)("button",{className:`lang-pill${d===n?" active":""}`,onClick:()=>p(n),children:[(0,t.jsx)("span",{className:"pill-flag",children:h[n]??"🌐"}),n]},n)}):(0,t.jsx)("button",{className:"lang-pill",disabled:!0,children:"🌐 No Language"})})]})]}),(0,t.jsx)("div",{className:"action-row",children:(0,t.jsxs)(s.default,{className:"actionBtn",href:"/home",children:["Let's Go ",(0,t.jsx)("span",{className:"btn-arrow",children:"→"})]})})]}),(0,t.jsx)("div",{className:"right",children:(0,t.jsxs)("div",{className:"mascot-circle",children:[(0,t.jsx)("div",{className:"mascot-ring"}),(0,t.jsx)("div",{className:"dot-dec",style:{"--s":"8px","--op":.18,top:"14%",left:"10%"}}),(0,t.jsx)("div",{className:"dot-dec",style:{"--s":"5px","--op":.14,top:"22%",right:"12%"}}),(0,t.jsx)("div",{className:"dot-dec",style:{"--s":"6px","--op":.12,bottom:"18%",left:"8%"}}),(0,t.jsx)("div",{className:"mascot-wrap",children:(0,t.jsx)("img",{className:"mascot",src:`${e}/img/konzeptes/kea.png`,alt:"mascot"})})]})})]})]})}var _=e.i(58678);let b=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),y=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let j=(0,r.createContext)({}),k=(0,r.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:a,className:o="",children:i,iconNode:s,...l},c)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:m=""}=(0,r.useContext)(j)??{},h=a??p?24*Number(n??d)/Number(t??u):n??d;return(0,r.createElement)("svg",{ref:c,...v,width:t??u??v.width,height:t??u??v.height,stroke:e??f,strokeWidth:h,className:b("lucide",m,o),...!i&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(l)&&{"aria-hidden":"true"},...l},[...s.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(i)?i:[i]])}),w=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...a},o)=>(0,r.createElement)(k,{ref:o,iconNode:t,className:b(`lucide-${y(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...a}));return n.displayName=y(e),n},N=w("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),z=w("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),S=w("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["default",0,function(){let[e,i]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!1),[c,u]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1),[f,m]=(0,r.useState)({username:"",email:"",password:"",salutation:"",p_first:"",p_last:"",c_first:"",c_last:"",level:"",mobile:"",email:"",username:"",package:"",grade:"",language:[],curriculum:""}),h=(0,r.useRef)();(0,r.useEffect)(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,r.useEffect)(()=>{"true"===localStorage.getItem("isLoggedIn")&&l(!0)},[]),(0,r.useEffect)(()=>{s&&"true"===localStorage.getItem("show_login_popup")&&(localStorage.removeItem("show_login_popup"),a.default.fire({html:`
            <div style="padding: 10px; font-family: 'Quicksand', sans-serif;">
              <div style="width: 70px; height: 70px; border: 3px solid #2b7d10; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px;">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#2b7d10" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style="color: #2b7d10; font-size: 18px; font-weight: 600; margin: 0;">Login Success!</h3>
            </div>`,showConfirmButton:!0,confirmButtonText:"OK",buttonsStyling:!1,width:"380px",background:"#f4f9f4",backdrop:"rgba(0,0,0,0.7)",customClass:{popup:"custom-login-popup",backdrop:"custom-blur-backdrop",confirmButton:"custom-login-btn"}}))},[s]);let g=e=>m({...f,[e.target.name]:e.target.value}),b=async t=>{t.preventDefault();let n=(f.password||"").trim();if(!f.username&&!f.email)return void a.default.fire({icon:"warning",text:"Please enter username or email",confirmButtonColor:"#33691e"});try{let t=e?o.apiService.register:o.apiService.login,r=e?{salutation:f.salutation,p_first_name:f.p_first,p_last_name:f.p_last,c_first_name:f.c_first,c_last_name:f.c_last,level:f.level,mobile:f.mobile,email:f.email,package_type:f.package,grade:f.grade,language:f.language.join(","),curriculum:f.curriculum}:{identifier:f.username||f.email,password:n},{data:s}=await t(r);"success"===s.status?e?(await a.default.fire({icon:"success",title:"Account Created!",html:`
    <div style="text-align:left">
      <b>Username:</b> ${s.username}<br/>
      <b>Password:</b> ${s.password}<br/><br/>
      <small>Please save these credentials.</small>
    </div>
  `,confirmButtonColor:"#33691e"}),await fetch("http://localhost:5000/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f.email,username:s.username,password:s.password})}),i(!1)):(localStorage.setItem("user_id",s.user_id),localStorage.setItem("user_email",s.email||actualIdentifier||""),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("child_name",s.c_first_name||""),localStorage.setItem("parent_name",s.p_first_name||""),localStorage.setItem("profile_pic",s.profile_pic||""),localStorage.setItem("grade",s.grade||""),localStorage.setItem("language",s.language||""),localStorage.setItem("curriculum",s.curriculum||""),window.dispatchEvent(new CustomEvent("profile-updated",{detail:{profile_pic:s.profile_pic||"",child_name:s.c_first_name||"",parent_name:s.p_first_name||""}})),localStorage.setItem("show_login_popup","true"),l(!0)):a.default.fire({icon:"error",text:s.message||"Action Failed",confirmButtonColor:"#33691e"})}catch(e){a.default.fire({icon:"error",text:"Server Connection Error",confirmButtonColor:"#33691e"})}};return((0,r.useEffect)(()=>{e&&m({identifier:"",password:"",salutation:"",p_first:"",p_last:"",c_first:"",c_last:"",level:"",mobile:"",email:"",package:"",grade:"",language:[],curriculum:""})},[e]),s)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.default,{children:(0,t.jsx)("title",{className:"jsx-dea6c42ba069dd0d",children:"Konzeptes | Learning App 🎓"})}),(0,t.jsx)(n.default,{id:"dea6c42ba069dd0d",children:".custom-blur-backdrop{-webkit-backdrop-filter:blur(10px)!important;background:#00000073!important}.custom-login-popup{border-radius:16px!important}.custom-login-btn{color:#fff!important;box-shadow:none!important;cursor:pointer!important;background-color:#2b7d10!important;border:none!important;border-radius:8px!important;outline:none!important;margin-top:10px!important;padding:10px 36px!important;font-family:Quicksand,sans-serif!important;font-size:15px!important;font-weight:700!important;transition:all .2s!important}.custom-login-btn:hover,.custom-login-btn:focus{background-color:#1e5c0b!important;outline:none!important;box-shadow:0 4px 12px #2b7d104d!important}"}),(0,t.jsx)(x,{})]}):(0,t.jsxs)("div",{className:"auth-page",children:[(0,t.jsx)(_.default,{children:(0,t.jsx)("title",{children:e?"Konzeptes | Register":"Konzeptes | Login"})}),e?(0,t.jsxs)("div",{className:"konz-split",children:[(0,t.jsxs)("aside",{className:"konz-split__brand",children:[(0,t.jsx)("div",{className:"konz-split__logo-row",children:(0,t.jsx)("img",{src:"/img/konzeptes/logo.png",alt:"Konzeptes",className:"konz-split__brand-logo"})}),(0,t.jsxs)("div",{className:"konz-split__brand-copy",children:[(0,t.jsx)("h2",{children:"Start your learning journey!"}),(0,t.jsx)("p",{children:"Create your account and get access to exercises, progress tracking, and personalised content for your child."})]})]}),(0,t.jsxs)("section",{className:"konz-split__form konz-reg",children:[(0,t.jsx)("img",{src:"/img/konzeptes/logo.png",alt:"Konzeptes",className:"konz-split__mobile-logo"}),(0,t.jsx)("h1",{className:"konz-split__title",children:"Create Account"}),(0,t.jsx)("p",{className:"konz-split__subtitle",children:"Join thousands of students already learning."}),(0,t.jsxs)("form",{onSubmit:b,className:"konz-split__form-fields",autoComplete:"off",children:[(0,t.jsx)("span",{className:"konz-reg__section-label",children:"🎓 Student Details"}),(0,t.jsxs)("div",{className:"konz-reg__grid konz-reg__grid--2",children:[(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"First Name"}),(0,t.jsx)("input",{name:"c_first",placeholder:"First name",required:!0,value:f.c_first,onChange:g,className:"konz-field__input"})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Last Name"}),(0,t.jsx)("input",{name:"c_last",placeholder:"Last name",required:!0,value:f.c_last,onChange:g,className:"konz-field__input"})]})]}),(0,t.jsx)("span",{className:"konz-reg__section-label",children:"👤 Parent Details"}),(0,t.jsxs)("div",{className:"konz-reg__grid konz-reg__grid--3",children:[(0,t.jsxs)("div",{className:"konz-field konz-reg__salutation",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Title"}),(0,t.jsxs)("select",{name:"salutation",required:!0,value:f.salutation,onChange:g,className:"konz-field__input",children:[(0,t.jsx)("option",{value:"",children:"—"}),(0,t.jsx)("option",{children:"Mr."}),(0,t.jsx)("option",{children:"Mrs."}),(0,t.jsx)("option",{children:"Ms."})]})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"First Name"}),(0,t.jsx)("input",{name:"p_first",placeholder:"First name",required:!0,value:f.p_first,onChange:g,className:"konz-field__input"})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Last Name"}),(0,t.jsx)("input",{name:"p_last",placeholder:"Last name",required:!0,value:f.p_last,onChange:g,className:"konz-field__input"})]})]}),(0,t.jsxs)("div",{className:"konz-reg__grid konz-reg__grid--2",children:[(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Mobile"}),(0,t.jsx)("input",{name:"mobile",placeholder:"Mobile number",required:!0,value:f.mobile,maxLength:10,onChange:e=>{let t=e.target.value.replace(/\D/g,"");m({...f,mobile:t})},className:"konz-field__input"})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Email"}),(0,t.jsxs)("div",{className:"konz-field__input-wrap",children:[(0,t.jsx)("span",{className:"konz-field__icon-left",children:(0,t.jsx)(S,{size:16})}),(0,t.jsx)("input",{name:"email",type:"email",placeholder:"you@example.com",required:!0,value:f.email,onChange:g,autoComplete:"off",className:"konz-field__input konz-field__input--has-left"})]})]})]}),(0,t.jsx)("div",{className:"konz-field"}),(0,t.jsx)("span",{className:"konz-reg__section-label",children:"📚 Account Info"}),(0,t.jsxs)("div",{className:"konz-reg__grid konz-reg__grid--2",children:[(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Grade"}),(0,t.jsxs)("select",{name:"grade",required:!0,value:f.grade,onChange:g,className:"konz-field__input",children:[(0,t.jsx)("option",{value:"",children:"Select grade"}),(0,t.jsx)("option",{children:"Primary 1"}),(0,t.jsx)("option",{children:"Primary 2"}),(0,t.jsx)("option",{children:"Primary 3"}),(0,t.jsx)("option",{children:"Primary 4"}),(0,t.jsx)("option",{children:"Primary 5"}),(0,t.jsx)("option",{children:"Primary 6 (PSLE)"}),(0,t.jsx)("option",{children:"Secondary 1"}),(0,t.jsx)("option",{children:"Secondary 2"}),(0,t.jsx)("option",{children:"Secondary 3"}),(0,t.jsx)("option",{children:"Secondary 4 (O Level)"}),(0,t.jsx)("option",{children:"A Level"})]})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Curriculum"}),(0,t.jsxs)("select",{name:"curriculum",required:!0,value:f.curriculum,onChange:g,className:"konz-field__input",children:[(0,t.jsx)("option",{value:"",children:"Select curriculum"}),(0,t.jsx)("option",{value:"MOE",children:"MOE"}),(0,t.jsx)("option",{value:"IGCSE",children:"IGCSE"}),(0,t.jsx)("option",{value:"IB",children:"IB"}),(0,t.jsx)("option",{value:"CBSE",children:"CBSE"})]})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Language"}),(0,t.jsxs)("div",{className:"konz-reg__lang-wrap",ref:h,children:[(0,t.jsx)("div",{className:"konz-reg__lang-box",onClick:()=>p(!d),children:f.language.length>0?f.language.join(", "):"Select language"}),d&&(0,t.jsx)("div",{className:"konz-reg__lang-dropdown",children:["Hindi","French","German"].map(e=>(0,t.jsxs)("label",{className:"konz-reg__lang-item",children:[(0,t.jsx)("input",{type:"checkbox",checked:f.language.includes(e),onChange:()=>{let t=f.language.includes(e)?f.language.filter(t=>t!==e):[...f.language,e];m({...f,language:t})}}),e]},e))})]})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Package"}),(0,t.jsxs)("select",{name:"package",required:!0,value:f.package,onChange:g,className:"konz-field__input",children:[(0,t.jsx)("option",{value:"",children:"Select package"}),(0,t.jsx)("option",{value:"paid",children:"Monthly"}),(0,t.jsx)("option",{value:"paid",children:"Yearly"}),(0,t.jsx)("option",{value:"free",children:"Free"})]})]})]}),(0,t.jsxs)("button",{type:"submit",className:"konz-split__submit",style:{marginTop:"20px"},children:["Create Account ",(0,t.jsx)("span",{"aria-hidden":"true",children:"→"})]}),(0,t.jsx)("p",{className:"konz-split__toggle",onClick:()=>i(!1),children:"Already have an account? Login"})]})]})]}):(0,t.jsxs)("div",{className:"konz-split",children:[(0,t.jsxs)("aside",{className:"konz-split__brand",children:[(0,t.jsx)("div",{className:"konz-split__logo-row",children:(0,t.jsx)("img",{src:"/img/konzeptes/logo.png",alt:"Konzeptes",className:"konz-split__brand-logo"})}),(0,t.jsxs)("div",{className:"konz-split__brand-copy",children:[(0,t.jsx)("h2",{children:"Welcome back, learner!"}),(0,t.jsx)("p",{children:"Pick up right where you left off — your concepts, exercises and progress are all waiting for you."})]})]}),(0,t.jsxs)("section",{className:"konz-split__form",children:[(0,t.jsx)("img",{src:"/img/konzeptes/logo.png",alt:"Konzeptes",className:"konz-split__mobile-logo"}),(0,t.jsx)("h1",{className:"konz-split__title",children:"Login"}),(0,t.jsx)("p",{className:"konz-split__subtitle",children:"Sign in to continue your learning journey."}),(0,t.jsxs)("form",{onSubmit:b,className:"konz-split__form-fields",autoComplete:"on",children:[(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Username"}),(0,t.jsx)("div",{className:"konz-field__input-wrap",children:(0,t.jsx)("input",{name:"username",type:"text",placeholder:"Enter username",value:f.username||"",onChange:g,autoComplete:"username",className:"konz-field__input"})})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Email"}),(0,t.jsxs)("div",{className:"konz-field__input-wrap",children:[(0,t.jsx)("span",{className:"konz-field__icon-left",children:(0,t.jsx)(S,{size:18})}),(0,t.jsx)("input",{name:"email",type:"email",placeholder:"Enter email",value:f.email||"",onChange:g,autoComplete:"email",className:"konz-field__input konz-field__input--has-left"})]})]}),(0,t.jsxs)("div",{className:"konz-field",children:[(0,t.jsx)("label",{className:"konz-field__label",children:"Password"}),(0,t.jsxs)("div",{className:"konz-field__input-wrap",children:[(0,t.jsx)("input",{name:"password",type:c?"text":"password",placeholder:"Enter your password",required:!0,value:f.password,onChange:g,autoComplete:"current-password",className:"konz-field__input konz-field__input--has-right"}),(0,t.jsx)("span",{className:"konz-field__icon-right",onClick:()=>u(!c),children:c?(0,t.jsx)(N,{size:18}):(0,t.jsx)(z,{size:18})})]})]}),(0,t.jsxs)("div",{className:"konz-split__row",children:[(0,t.jsxs)("label",{className:"konz-split__remember",children:[(0,t.jsx)("input",{type:"checkbox"})," Remember me"]}),(0,t.jsx)("a",{href:"#",className:"konz-split__forgot",children:"Forgot password?"})]}),(0,t.jsxs)("button",{type:"submit",className:"konz-split__submit",children:["Login ",(0,t.jsx)("span",{"aria-hidden":"true",children:"→"})]}),(0,t.jsx)("p",{className:"konz-split__toggle",onClick:()=>i(!0),children:"Create New Account"})]})]})]})]})}],10477)},21899,(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(10477)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);