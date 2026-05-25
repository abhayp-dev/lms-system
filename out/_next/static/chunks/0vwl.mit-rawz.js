(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1085,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={AppRouterContext:function(){return o},GlobalLayoutRouterContext:function(){return l},LayoutRouterContext:function(){return s},MissingSlotContext:function(){return d},TemplateContext:function(){return c}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i=e.r(41705)._(e.r(91788)),o=i.default.createContext(null),s=i.default.createContext(null),l=i.default.createContext(null),c=i.default.createContext(null),d=i.default.createContext(new Set)},31430,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return n}});class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class n extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},70008,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={NavigationPromisesContext:function(){return d},PathParamsContext:function(){return c},PathnameContext:function(){return l},ReadonlyURLSearchParams:function(){return o.ReadonlyURLSearchParams},SearchParamsContext:function(){return s},createDevToolsInstrumentedPromise:function(){return p}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i=e.r(91788),o=e.r(31430),s=(0,i.createContext)(null),l=(0,i.createContext)(null),c=(0,i.createContext)(null),d=(0,i.createContext)(null);function p(e,t){let r=Promise.resolve(t);return r.status="fulfilled",r.value=t,r.displayName=`${e} (SSR)`,r}},14760,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={BailoutToCSRError:function(){return o},isBailoutToCSRError:function(){return s}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i="BAILOUT_TO_CLIENT_SIDE_RENDERING";class o extends Error{constructor(e){super(`Bail out to client-side rendering: ${e}`),this.reason=e,this.digest=i}}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===i}},91622,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={HTTPAccessErrorStatus:function(){return i},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return s},getAccessFallbackErrorTypeByStatus:function(){return d},getAccessFallbackHTTPStatus:function(){return c},isHTTPAccessFallbackError:function(){return l}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},o=new Set(Object.values(i)),s="NEXT_HTTP_ERROR_FALLBACK";function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r]=e.digest.split(";");return t===s&&o.has(Number(r))}function c(e){return Number(e.digest.split(";")[1])}function d(e){switch(e){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},40184,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RedirectStatusCode",{enumerable:!0,get:function(){return n}});var a,n=((a={})[a.SeeOther=303]="SeeOther",a[a.TemporaryRedirect=307]="TemporaryRedirect",a[a.PermanentRedirect=308]="PermanentRedirect",a);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},1939,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={REDIRECT_ERROR_CODE:function(){return o},isRedirectError:function(){return s}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i=e.r(40184),o="NEXT_REDIRECT";function s(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,a]=t,n=t.slice(2,-2).join(";"),s=Number(t.at(-2));return r===o&&("replace"===a||"push"===a)&&"string"==typeof n&&!isNaN(s)&&s in i.RedirectStatusCode}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},68934,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isNextRouterError",{enumerable:!0,get:function(){return i}});let a=e.r(91622),n=e.r(1939);function i(e){return(0,n.isRedirectError)(e)||(0,a.isHTTPAccessFallbackError)(e)}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},51724,e=>{"use strict";var t=e.i(91398),r=e.i(91788),a=e.i(3828),n=e.i(41158),i=e.i(69027),o=e.i(272),s=e.i(58678);let l=[{accent:"#FF6B6B",light:"#FFF1F1"},{accent:"#4DA3FF",light:"#EEF6FF"},{accent:"#FFB648",light:"#FFF7E8"},{accent:"#4DD0E1",light:"#EAFBFD"},{accent:"#C58CE0",light:"#F8EEFC"},{accent:"#F48FB1",light:"#FFF0F5"},{accent:"#FF8A65",light:"#FFF1EC"},{accent:"#7986CB",light:"#EEF1FF"},{accent:"#81C784",light:"#EEF8EF"},{accent:"#4DB6AC",light:"#EAF8F6"}],c={French:"🇫🇷",Spanish:"🇪🇸",German:"🇩🇪",English:"🇬🇧",Hindi:"🇮🇳",Portuguese:"🇵🇹",Italian:"🇮🇹",Japanese:"🇯🇵",Chinese:"🇨🇳",Arabic:"🇸🇦"},d=`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }

html,
body,
#__next {
  background: #f2f5ef !important;
  overflow-x: hidden;
  min-height: 100%;
}
.kp {
  min-height:100vh;
  font-family:'Nunito','Segoe UI','Noto Sans Devanagari',sans-serif;
  background:#f2f5ef;
  position:relative;
  overflow:hidden;
}

.kp::before {
  content:'';
  position:absolute;
  width:360px; height:360px;
  border-radius:50%;
  background:rgba(76,175,80,0.03);
  top:-120px; right:-80px;
  filter:blur(12px);
}

/* ── Header ── */
.kp-header {
  position:sticky; top:0; z-index:100;
  display:grid; grid-template-columns:auto 1fr auto;
  align-items:center;
  padding:10px 24px 2px;
  background:transparent;
}
.kp-header-left, .kp-header-right { display:flex; align-items:center; }
.kp-header-right { justify-content:flex-end; }

.kp-brand {
  text-align:center;
  font-size:2.2rem; font-weight:900;
  color:#2b7d10; letter-spacing:0.2px;
}

/* ── Back button: circle → pill on hover ── */
.kp-back {
  display:flex; align-items:center; justify-content:center;
  height:40px; min-width:40px;
  padding:0;
  border:none; border-radius:22px;
  background:#ffffff;
  cursor:pointer;
  box-shadow:0 4px 14px rgba(0,0,0,0.08);
  transition:all 0.25s cubic-bezier(0.34,1.56,0.64,1);
  overflow:hidden;
  gap:0;
}
.kp-back:hover {
  min-width:44px;
  padding:0 16px 0 12px;
  gap:6px;
  transform:translateY(-2px) scale(1.04);
  box-shadow:0 8px 20px rgba(0,0,0,0.13);
}
.kp-back svg {
  flex-shrink:0;
  transition:transform 0.25s ease;
}
.kp-back:hover svg { transform:translateX(-1px); }
.kp-back-label {
  font-size:0.8rem; font-weight:800; color:#2b7d10;
  white-space:nowrap;
  max-width:0; opacity:0; overflow:hidden;
  transition:max-width 0.25s ease, opacity 0.2s ease;
  font-family:'Nunito',sans-serif;
}
.kp-back:hover .kp-back-label { max-width:60px; opacity:1; }

/* ── Page content ── */
.kp-content {
  max-width:1260px; margin:0 auto;
  padding:6px 20px 42px;
  position:relative; z-index:2;
}

/* ── Context pill (grade \xb7 language) ── */
.kp-context-pill {
  display:inline-flex; align-items:center; gap:6px;
  background:rgba(255,255,255,0.7);
  border:1px solid rgba(139,195,74,0.2);
  border-radius:99px;
  padding:5px 14px;
  margin-bottom:6px;
  backdrop-filter:blur(6px);
}
.kp-context-pill span {
  font-size:0.75rem; font-weight:700;
  color:#4a7240;
}
.kp-context-pill .kp-dot {
  color:#b5cdb1; font-weight:400; font-size:0.72rem;
}

/* ── Heading ── */
.kp-heading {
  font-size:1.75rem; font-weight:900;
  color:#1d5a10; margin-bottom:4px; line-height:1.25;
}
.kp-desc {
  font-size:0.88rem; line-height:1.5;
  font-weight:600; color:#71856d;
  margin-bottom:20px;
}

/* ── Grid ── */
.kp-grid {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
  gap:16px;
}

/* ── Card ── */
.kp-card {
  text-decoration:none; color:inherit;
  border-radius:22px; overflow:hidden;
  background:#fff;
  border:2px solid rgba(139,195,74,0.12);
  box-shadow:0 6px 20px rgba(0,0,0,0.05);
  transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
             box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1),
             border-color 0.3s ease;
  animation:fadeUp 0.45s ease both;
  position:relative;
  will-change:transform;
}
.kp-card:hover {
  transform:translateY(-10px) scale(1.02);
  border-color:var(--card-accent, rgba(139,195,74,0.4));
  box-shadow:0 20px 40px rgba(0,0,0,0.13),
             0 0 0 3px var(--card-accent-faint, rgba(139,195,74,0.12));
}

/* ── Card top image area ── */
.kp-cardTop {
  height:150px;
  position:relative; overflow:hidden;
  display:flex; align-items:center; justify-content:center;
  transition:background 0.3s ease;
}
.kp-circleA, .kp-circleB {
  position:absolute; border-radius:50%;
  transition:opacity 0.3s ease, transform 0.3s ease;
}
.kp-circleA { width:150px; height:150px; right:-34px; bottom:-34px; opacity:0.12; }
.kp-circleB { width:72px; height:72px; top:-16px; left:-16px; opacity:0.08; }
.kp-card:hover .kp-circleA { opacity:0.18; transform:scale(1.1); }
.kp-card:hover .kp-circleB { opacity:0.13; }

.kp-icon {
  width:104px; height:104px; object-fit:contain;
  position:relative; z-index:2;
  animation:floatIcon 3.8s ease-in-out infinite;
  filter:drop-shadow(0 8px 14px rgba(0,0,0,0.12));
  transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease;
}
.kp-card:hover .kp-icon {
  transform:scale(1.08);
  filter:drop-shadow(0 16px 24px rgba(0,0,0,0.16));
}

/* ── Card body ── */
.kp-cardBody {
  padding:12px 10px 14px;
  display:flex; flex-direction:column;
  align-items:center; text-align:center; gap:4px;
  background:linear-gradient(180deg,#fff,#f9fcf7);
}
.kp-titleHindi { font-size:1rem; font-weight:900; color:#1d5a10; line-height:1.3; }
.kp-titleEnglish { font-size:0.72rem; font-weight:800; color:#5f7d59; line-height:1.4; }

/* ── Keyframes ── */
@keyframes floatIcon {
  0%,100% { transform:translateY(0px); }
  50%      { transform:translateY(-4px); }
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(18px); }
  to   { opacity:1; transform:translateY(0); }
}

/* ── Responsive ── */
@media (max-width:768px) {
  .kp-header { padding:10px 14px 0; }
  .kp-brand { font-size:1.7rem; }
  .kp-content { padding:0 14px 34px; }
  .kp-heading { font-size:1.5rem; }
  .kp-grid { grid-template-columns:repeat(auto-fill,minmax(160px,1fr)); gap:12px; }
  .kp-cardTop { height:132px; }
  .kp-icon { width:86px; height:86px; }
}
@media (max-width:520px) {
  .kp-brand { font-size:1.45rem; }
  .kp-back { width:42px; height:42px; }
  .kp-heading { font-size:1.3rem; }
  .kp-desc { font-size:0.82rem; }
  .kp-grid { grid-template-columns:repeat(2,1fr); gap:10px; }
  .kp-card { border-radius:20px; }
  .kp-cardTop { height:118px; }
  .kp-icon { width:74px; height:74px; }
  .kp-cardBody { padding:10px 8px 12px; }
  .kp-titleHindi { font-size:0.82rem; }
  .kp-titleEnglish { font-size:0.64rem; }
}
`;function p({progress:e}){return(0,t.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",gap:"7px",padding:"0 2px"},children:(0,t.jsx)("div",{style:{flex:1,height:"3px",borderRadius:"99px",background:"#2b7d1022",overflow:"hidden"},children:(0,t.jsx)("div",{style:{height:"100%",width:`${e}%`,borderRadius:"99px",background:"#2b7d10",transition:"width 0.6s cubic-bezier(0.34,1.56,0.64,1)"}})})})}e.s(["default",0,function(){let e=(0,a.useRouter)(),[u,f]=(0,r.useState)(!0),[h,g]=(0,r.useState)([]),[x,m]=(0,r.useState)(""),[b,k]=(0,r.useState)("");return((0,r.useEffect)(()=>{if("true"!==localStorage.getItem("isLoggedIn")){window.location.href="/lms-system";return}!async function(){try{let e=(localStorage.getItem("language")||"").split(",")[0].trim(),t={grade:localStorage.getItem("grade"),language:e,curriculum:localStorage.getItem("curriculum")};m(t.grade||""),k(e);let r=(await o.apiService.getHomeConfig(t)).data;if(r.items?.length>0){let e=r.items[0].list;g("string"==typeof e?JSON.parse(e):e||[])}}catch(e){console.error("Fetch error:",e)}finally{f(!1)}}()},[]),u)?(0,t.jsx)("div",{style:{minHeight:"100vh",background:"#f2f5ef"}}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.default,{children:(0,t.jsx)("title",{children:"Konzeptes | Home"})}),(0,t.jsx)("style",{children:d}),(0,t.jsxs)("div",{className:"kp",children:[(0,t.jsxs)("header",{className:"kp-header",children:[(0,t.jsx)("div",{className:"kp-header-left",children:(0,t.jsxs)("button",{className:"kp-back",onClick:()=>e.push("/"),children:[(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#2b7d10",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("polyline",{points:"15 18 9 12 15 6"})}),(0,t.jsx)("span",{className:"kp-back-label",children:"Back"})]})}),(0,t.jsx)("h1",{className:"kp-brand",children:"Konzeptes"}),(0,t.jsx)("div",{className:"kp-header-right",children:(0,t.jsx)(i.default,{})})]}),(0,t.jsxs)("div",{className:"kp-content",children:[(0,t.jsxs)("div",{className:"kp-context-pill",children:[(0,t.jsxs)("span",{children:["🎓 ",x||"—"]}),(0,t.jsx)("span",{className:"kp-dot",children:"·"}),(0,t.jsxs)("span",{children:[c[b]??"🌐"," ",b||"—"]})]}),(0,t.jsx)("h2",{className:"kp-heading",children:"What would you like to practice?"}),(0,t.jsx)("p",{className:"kp-desc",children:"Tap any card to start — each exercise is made for your grade and language."}),(0,t.jsx)("main",{className:"kp-grid",children:h.map((e,r)=>{let a=l[r%l.length],i=(e.label||"").split(" - ")[0],s=o.apiService.getIconUrl(e.id);return(0,t.jsxs)(n.default,{href:"/p/"+e.id,className:"kp-card",style:{animationDelay:`${.05*r}s`,"--card-accent":a.accent+"66","--card-accent-faint":a.accent+"22"},children:[(0,t.jsxs)("div",{className:"kp-cardTop",style:{background:a.light},children:[(0,t.jsx)("div",{className:"kp-circleA",style:{background:a.accent}}),(0,t.jsx)("div",{className:"kp-circleB",style:{background:a.accent}}),(0,t.jsx)("img",{src:s,alt:i,className:"kp-icon"})]}),(0,t.jsx)(p,{progress:e.progress??0,accent:a.accent}),(0,t.jsxs)("div",{className:"kp-cardBody",children:[(0,t.jsx)("div",{className:"kp-titleHindi",children:i}),e.smLabel&&(0,t.jsx)("div",{className:"kp-titleEnglish",children:e.smLabel})]})]},e.id||r)})})]})]})]})}])},21741,(e,t,r)=>{let a="/home";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(51724)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},48761,e=>{e.v(t=>Promise.all(["static/chunks/0ey~yy8oeyp~5.js"].map(t=>e.l(t))).then(()=>t(93594)))},28805,e=>{e.v(t=>Promise.all(["static/chunks/0599p99vu8fk5.js"].map(t=>e.l(t))).then(()=>t(79466)))}]);