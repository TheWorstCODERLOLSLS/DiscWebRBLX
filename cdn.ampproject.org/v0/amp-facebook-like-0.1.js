(self.AMP=self.AMP||[]).push({n:"amp-facebook-like",v:"2002192257490",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var t;a:{var ba={a:!0},x={};try{x.__proto__=ba;t=x.a;break a}catch(a){}t=!1}p=t?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var z=p;function A(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ca=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function B(a){var b=Object.create(null);if(!a)return b;for(var c;c=ca.exec(a);){var d=A(c[1],c[1]),e=c[2]?A(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var C="";
function D(){var a=void 0,b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=B(c.location.originalHash||c.location.hash),g=d.spt;d=d.esm;var h=B(c.location.search);C||(C=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"012002192257490");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||c.AMP_DEV_MODE),examiner:"2"==f.development,esm:d,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:e,log:f.log,
version:"2002192257490",rtvVersion:C,singlePassType:g};c=b.__AMP_MODE=c}return c};var da=Object.prototype.toString;var E=self.AMP_CONFIG||{},F={thirdParty:E.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:E.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof E.thirdPartyFrameRegex?new RegExp(E.thirdPartyFrameRegex):E.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:E.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof E.cdnProxyRegex?new RegExp(E.cdnProxyRegex):E.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:E.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:E.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG;function H(){if(!G.user)throw Error("failed to call initLogConstructor");return G.user}function I(){if(G.dev)return G.dev;throw Error("failed to call initLogConstructor");}function J(a,b,c,d,e){H().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function K(a){return a||{}};function L(){var a=100;this.w=a;this.l=this.m=0;this.j=Object.create(null)}L.prototype.has=function(a){return!!this.j[a]};L.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};L.prototype.put=function(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.w)){I().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};function M(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};K({c:!0,v:!0,a:!0,ad:!0,action:!0});var N,O;
function P(a){var b;N||(N=self.document.createElement("a"),O=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new L));var c=b?null:O,d=N;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};function ea(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){I().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function Q(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return R(a,b)}function fa(a,b){var c=S(a);c=S(c);c=c.isSingleDoc()?c.win:c;return R(c,b)}function S(a){return a.nodeType?Q((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function R(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var T;function ha(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(r){throw self.__AMP_REPORT_ERROR(r),r;}};var g=ia(),h=!1;c&&(h=c.capture);d.addEventListener("message",f,g?c:h);return function(){d&&d.removeEventListener("message",f,g?c:h);f=d=e=null}}function ia(){if(void 0!==T)return T;T=!1;try{var a={get capture(){T=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return T};function ja(a,b){return ha(a,b)};function ka(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};var U,la="Webkit webkit Moz moz ms O o".split(" ");function ma(a){var b;var c=a.style;if(M("border","--"))c="border";else{U||(U=Object.create(null));var d=U.border;if(!d){d="border";if(void 0===c.border){var e;b:{for(e=0;e<la.length;e++){var f=la[e]+"Border";if(void 0!==c[f]){e=f;break b}}e=""}void 0!==c[e]&&(d=e)}U.border=d}c=d}c&&(a.style[c]=b?"none"+b:"none")};function na(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};function V(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var W={};
function oa(a,b){J("facebook","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+pa(a);var e=d={},f=b.dataset,g;for(g in f)M(g,"vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=V(g);if(void 0===g)throw H().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)e[h]=g[h]}h=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=na(e);h.height=na(g);b.getAttribute("title")&&(h.title=
b.getAttribute("title"));var l=a.location.href;"about:srcdoc"==l&&(l=a.parent.location.href);var r=S(b),m=fa(b,"documentInfo").get();e=fa(b,"viewer").getUnconfirmedReferrerUrl();var v=b.getPageLayoutBox();g=h;f=F.thirdParty+"/2002192257490/ampcontext-v0.js";var y=m.sourceUrl,ua=m.canonicalUrl;m=m.pageViewId;l={href:l};var va=b.tagName,wa={localDev:!1,development:D().development,esm:D().esm,filter:D().filter,minified:!0,lite:D().lite,test:!1,log:D().log,version:D().version,rtvVersion:D().rtvVersion,
singlePassType:D().singlePassType},xa=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary);r=!r.isVisible();v=v?{left:v.left,top:v.top,width:v.width,height:v.height}:null;var ya=b.getIntersectionChangeEntry();var q=b;for(var u=[],k=0;q&&1==q.nodeType&&25>k;){var n="";q.id&&(n="/"+q.id);var za=q.nodeName.toLowerCase();u.push(""+za+n+ka(q));k++;q=q.parentElement}q=u.join();u=q.length;k=5381;for(n=0;n<u;n++)k=33*k^q.charCodeAt(n);q=String(k>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=
Object.create(null);u=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var w in a.AMP_CONFIG)k=a.AMP_CONFIG[w],"number"===typeof k&&0<=k&&1>=k&&(u[w]=Math.random()<k);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(w=a.AMP_CONFIG["allow-doc-opt-in"],k=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(k=k.getAttribute("content").split(","),n=0;n<k.length;n++)-1!=w.indexOf(k[n])&&(u[k[n]]=!0);Object.assign(u,ea(a));
if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(w=a.AMP_CONFIG["allow-url-opt-in"],a=B(a.location.originalHash||a.location.hash),k=0;k<w.length;k++)n=a["e-"+w[k]],"1"==n&&(u[w[k]]=!0),"0"==n&&(u[w[k]]=!1);a=u}g._context=K({ampcontextVersion:"2002192257490",ampcontextFilepath:f,sourceUrl:y,referrer:e,canonicalUrl:ua,pageViewId:m,location:l,startTime:d,tagName:va,mode:wa,canary:xa,hidden:r,initialLayoutRect:v,initialIntersection:ya,domFingerprint:q,
experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&(h.src=b);d=h;d.type="facebook";Object.assign(d._context,void 0);return d}
function qa(a,b){var c={},d=c.disallowCustom,e=c.allowFullscreen;c=oa(a,b);var f=a.document.createElement("iframe");W[c.type]||(W[c.type]=0);W[c.type]+=1;a=ra(a,d);var g=P(a).hostname,h=JSON.stringify(K({host:g,type:c.type,count:W[c.type],attributes:c}));f.src=a;f.ampLocation=P(a);f.name=h;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);e&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");ma(f);f.onload=function(){this.readyState="complete"};
f.setAttribute("allow","sync-xhr 'none';");var l=["facebook"];l.includes("facebook")||sa(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function ra(a,b){var c=void 0;if(b)b=null;else{b=c;var d=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(d){var e=d.getAttribute("content");var f=void 0===f?"source":f;J(null!=e,"%s %s must be available",d,f);var g=e;"string"==typeof g&&(g=P(g));var h;(h="https:"==g.protocol||"localhost"==g.hostname||"127.0.0.1"==g.hostname)||(g=g.hostname,h=g.length-10,h=0<=h&&g.indexOf(".localhost",h)==h);J(h||/^(\/\/)/.test(e),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
d,f,e);J(-1==e.indexOf("?"),"3p iframe url must not include query string %s in element %s.",e,d);f=P(e);J("localhost"==f.hostname&&!b||f.origin!=P(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",e,f.origin,d);b=e+"?2002192257490"}else b=null}var l=b;(b=l)||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||
"d-"+pa(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+("."+F.thirdPartyFrameHost+"/2002192257490/frame.html"));return b}function pa(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}
function sa(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts".split(" "),d=0;d<b.length;d++){var e=b[d];if(!a.sandbox.supports(e)){I().info("3p-frame","Iframe doesn't support %s",e);return}}a.sandbox=b.join(" ")+" "+c.join(" ")}};function ta(a){if(!Aa(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return I().error("MESSAGING","Failed to parse message: "+a,c),null}}function Aa(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function Ba(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Ca(a,b){var c=!0,d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=Ba(a,d,!0);for(d=0;d<a.length;d++){var e=a[d];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function Da(a){for(var b=K({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Ea(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=Fa(b.data);if(c&&c.sentinel){var e=b.source;var f=Ba(a,c.sentinel);if(f){for(var g,h=0;h<f.length;h++){var l=f[h],r=l.frame.contentWindow;if(r){var m;if(!(m=e==r))b:{for(m=e;m&&m!=m.parent;m=m.parent)if(m==r){m=!0;break b}m=!1}if(m){g=l;break}}else setTimeout(Da,0,f)}e=g?g.events:null}else e=f;var v=e;if(v){var y=v[c.type];if(y)for(y=y.slice(),e=0;e<y.length;e++)(0,y[e])(c,b.source,b.origin,b)}}}};a.addEventListener("message",
b)}}function Ga(a,b){function c(c,d,g,l){if("amp"==c.sentinel){if(d!=a.contentWindow)return;var m="null"==g&&f;if(h!=g&&!m)return}if(e||d==a.contentWindow)"unlisten"==c.sentinel?r():b(c,d,g,l)}var d="embed-size",e,f,g=a.ownerDocument.defaultView;Ea(g);g=Ca(g,a);var h=P(a.src).origin,l=g[d]||(g[d]=[]);l.push(c);var r=function(){if(c){var a=l.indexOf(c);-1<a&&l.splice(a,1);b=l=c=null}}}
function Fa(a){"string"==typeof a&&(a="{"==a.charAt(0)?V(a,function(a){I().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:Aa(a)?ta(a):null);return a};function X(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;a=a.hasAttribute("data-locale")?a.getAttribute("data-locale"):window.navigator.language.replace("-","_");b.A=a;b.o=null;return b}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(z)z(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Ha=Object.getOwnPropertyDescriptor(Y,Z);Ha&&Object.defineProperty(X,Z,Ha)}else X[Z]=Y[Z];X.C=Y.prototype;X.prototype.renderOutsideViewport=function(){return.75};
X.prototype.preconnectCallback=function(a){var b=Q(this.win,"preconnect");b.url(this.getAmpDoc(),"https://facebook.com",a);b.preload(this.getAmpDoc(),"https://connect.facebook.net/"+this.A+"/sdk.js","script");var c=this.getAmpDoc(),d=ra(this.win,void 0);b.preload(c,d,"document");b.preload(c,F.thirdParty+"/2002192257490/f.js","script")};X.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
X.prototype.layoutCallback=function(){var a=this,b=qa(this.win,this.element);this.applyFillContent(b);Ga(b,function(b){a.attemptChangeHeight(b.height).catch(function(){})});this.o=ja(this.win,this.B.bind(this));this.toggleLoading(!0);this.element.appendChild(b);this.h=b;return this.loadPromise(b)};X.prototype.B=function(a){if(!this.h||a.source==this.h.contentWindow){var b=a.data;if(b){var c="[object Object]"===da.call(b)?b:V(b);c&&"ready"==b.action&&this.toggleLoading(!1)}}};
X.prototype.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.o&&this.o();return!0};(function(a){a.registerElement("amp-facebook-like",X)})(self.AMP);
})});

//# sourceMappingURL=amp-facebook-like-0.1.js.map
