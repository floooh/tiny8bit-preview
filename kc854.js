
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var aa=[],ba="./this.program";function q(a,b){throw b;}var ca="object"===typeof window,u="function"===typeof importScripts,v="",da,w,x,y,z;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)v=u?require("path").dirname(v)+"/":__dirname+"/",da=function(a,b){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);return y.readFileSync(a,b?null:"utf8")},x=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},w=function(a,b,c){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);y.readFile(a,function(d,f){d?c(d):b(f.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof B))throw a;}),process.on("unhandledRejection",function(a){throw a;}),q=function(a,b){if(noExitRuntime||0<ea)throw process.exitCode=a,b;b instanceof B||C("exiting due to exception: "+b);process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca||u)u?v=self.location.href:"undefined"!==
typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),w=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var C=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(ba=e.thisProgram);e.quit&&(q=e.quit);var D;e.wasmBinary&&(D=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var fa,ha=!1;
function ia(a){var b=e["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function ja(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var t=(n.length<<2)+1;p=E(t);F(n,G,p,t)}return p},array:function(n){var p=E(n.length);ka.set(n,p);return p}};a=ia(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=la()),f[g]=m(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(n){0!==h&&ma(h);return n}(b)}
var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function H(a,b){if(a){var c=G,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&na)a=na.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function F(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function pa(a){var b=oa(a)+1,c=E(b);F(a,ka,c,b);return c}var qa,ka,G,ra,sa,I,ta,ua,J;
function va(){var a=fa.buffer;qa=a;e.HEAP8=ka=new Int8Array(a);e.HEAP16=ra=new Int16Array(a);e.HEAP32=I=new Int32Array(a);e.HEAPU8=G=new Uint8Array(a);e.HEAPU16=sa=new Uint16Array(a);e.HEAPU32=ta=new Uint32Array(a);e.HEAPF32=ua=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var wa,xa=[],ya=[],za=[],Aa=[],Ba=[],ea=0;function Ca(){var a=e.preRun.shift();xa.unshift(a)}var K=0,Da=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";C(a);ha=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ea(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="kc854.wasm";if(!Ea()){var Fa=M;M=e.locateFile?e.locateFile(Fa,v):v+Fa}function Ga(){var a=M;try{if(a==M&&D)return new Uint8Array(D);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ha(){if(!D&&(ca||u)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ga()});if(w)return new Promise(function(a,b){w(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ga()})}
function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.xc;"number"===typeof c?void 0===b.Wb?O(c)():O(c)(b.Wb):c(void 0===b.Wb?null:b.Wb)}}}var Ia=[];function O(a){var b=Ia[a];b||(a>=Ia.length&&(Ia.length=a+1),Ia[a]=b=wa.get(a));return b}var Ja=0;function Ka(){for(var a=P.length-1;0<=a;--a)La(a);P=[];Ma=[]}var Ma=[];function Na(){if(Ja&&Oa.Rb)for(var a=0;a<Ma.length;++a){var b=Ma[a];Ma.splice(a,1);--a;b.Ec.apply(null,b.uc)}}var P=[];
function La(a){var b=P[a];b.target.removeEventListener(b.Kb,b.pc,b.Lb);P.splice(a,1)}function Q(a){function b(d){++Ja;Oa=a;Na();a.Nb(d);Na();--Ja}if(a.Mb)a.pc=b,a.target.addEventListener(a.Kb,b,a.Lb),P.push(a),Pa||(Aa.push(Ka),Pa=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Kb==a.Kb&&La(c--)}function Qa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Pa,Oa,Ra,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function R(a){a=2<a?H(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function $a(a,b,c,d,f,h){Ra||(Ra=S(256));a={target:R(a),Kb:h,Mb:d,Nb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ra;F(Qa(g.target),G,n+0,128);F(m,G,n+128,128);O(d)(f,n,b)&&g.preventDefault()},Lb:c};Q(a)}
function ab(a,b,c,d,f,h){Sa||(Sa=S(176));a={target:R(a),Rb:!0,Kb:h,Mb:d,Nb:function(g){var m=Sa;J[m>>3]=g.timeStamp;var n=m>>2;I[n+2]=g.location;I[n+3]=g.ctrlKey;I[n+4]=g.shiftKey;I[n+5]=g.altKey;I[n+6]=g.metaKey;I[n+7]=g.repeat;I[n+8]=g.charCode;I[n+9]=g.keyCode;I[n+10]=g.which;F(g.key||"",G,m+44,32);F(g.code||"",G,m+76,32);F(g.char||"",G,m+108,32);F(g.locale||"",G,m+140,32);O(d)(f,m,b)&&g.preventDefault()},Lb:c};Q(a)}
function bb(a,b,c){J[a>>3]=b.timeStamp;a>>=2;I[a+2]=b.screenX;I[a+3]=b.screenY;I[a+4]=b.clientX;I[a+5]=b.clientY;I[a+6]=b.ctrlKey;I[a+7]=b.shiftKey;I[a+8]=b.altKey;I[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;I[a+11]=b.movementX;I[a+12]=b.movementY;c=Za(c);I[a+13]=b.clientX-c.left;I[a+14]=b.clientY-c.top}
function T(a,b,c,d,f,h){Ta||(Ta=S(72));a=R(a);Q({target:a,Rb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Kb:h,Mb:d,Nb:function(g){g=g||event;bb(Ta,g,a);O(d)(f,Ta,b)&&g.preventDefault()},Lb:c})}function cb(a,b,c,d,f){Ua||(Ua=S(260));Q({target:a,Kb:f,Mb:d,Nb:function(h){h=h||event;var g=Ua,m=document.pointerLockElement||document.Zb||document.ac||document.$b;I[g>>2]=!!m;var n=m&&m.id?m.id:"";F(Qa(m),G,g+4,128);F(n,G,g+132,128);O(d)(20,g,b)&&h.preventDefault()},Lb:c})}
function db(a,b,c,d,f){Q({target:a,Kb:f,Mb:d,Nb:function(h){h=h||event;O(d)(38,0,b)&&h.preventDefault()},Lb:c})}
function eb(a,b,c,d){Va||(Va=S(36));a=R(a);Q({target:a,Kb:"resize",Mb:d,Nb:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Va;I[g>>2]=f.detail;I[g+4>>2]=h.clientWidth;I[g+8>>2]=h.clientHeight;I[g+12>>2]=innerWidth;I[g+16>>2]=innerHeight;I[g+20>>2]=outerWidth;I[g+24>>2]=outerHeight;I[g+28>>2]=pageXOffset;I[g+32>>2]=pageYOffset;O(d)(10,g,b)&&f.preventDefault()}}},Lb:c})}
function fb(a,b,c,d,f,h){Wa||(Wa=S(1696));a=R(a);Q({target:a,Rb:"touchstart"==h||"touchend"==h,Kb:h,Mb:d,Nb:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.dc=m.ec=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.dc=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].ec=1;p=Wa;J[p>>3]=g.timeStamp;var r=p>>2;I[r+3]=g.ctrlKey;I[r+4]=g.shiftKey;I[r+5]=g.altKey;I[r+6]=g.metaKey;r+=7;var kb=Za(a),lb=0;for(t in n)if(m=
n[t],I[r]=m.identifier,I[r+1]=m.screenX,I[r+2]=m.screenY,I[r+3]=m.clientX,I[r+4]=m.clientY,I[r+5]=m.pageX,I[r+6]=m.pageY,I[r+7]=m.dc,I[r+8]=m.ec,I[r+9]=m.clientX-kb.left,I[r+10]=m.clientY-kb.top,r+=13,31<++lb)break;I[p+8>>2]=lb;O(d)(f,p,b)&&g.preventDefault()},Lb:c})}function gb(a,b,c,d,f,h){a={target:R(a),Kb:h,Mb:d,Nb:function(g){g=g||event;O(d)(f,0,b)&&g.preventDefault()},Lb:c};Q(a)}
function hb(a,b,c,d){Xa||(Xa=S(104));Q({target:a,Rb:!0,Kb:"wheel",Mb:d,Nb:function(f){f=f||event;var h=Xa;bb(h,f,a);J[h+72>>3]=f.deltaX;J[h+80>>3]=f.deltaY;J[h+88>>3]=f.deltaZ;I[h+96>>2]=f.deltaMode;O(d)(9,h,b)&&f.preventDefault()},Lb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function nb(a){a.Ac=a.getExtension("WEBGL_multi_draw")}
var ob=1,pb=[],U=[],qb=[],V=[],W=[],X=[],rb=[],sb={};function Y(a){tb||(tb=a)}function ub(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}function vb(a,b){a.cc||(a.cc=a.getContext,a.getContext=function(d,f){f=a.cc(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=a.getContext("webgl",b);return c?wb(c,b):0}function wb(a,b){var c=ub(rb),d={yc:c,attributes:b,version:b.sc,Vb:a};a.canvas&&(a.canvas.tc=d);rb[c]=d;("undefined"===typeof b.bc||b.bc)&&xb(d);return c}
function xb(a){a||(a=yb);if(!a.rc){a.rc=!0;var b=a.Vb;ib(b);jb(b);mb(b);b.wc=b.getExtension("EXT_disjoint_timer_query");nb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var tb,yb,zb=["default","low-power","high-performance"];function Ab(a,b,c,d){for(var f=0;f<a;f++){var h=Z[c](),g=h&&ub(d);h?(h.name=g,d[g]=h):Y(1282);I[b+4*f>>2]=g}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);C("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);C("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else Y(1281)}function Cb(a){var b=oa(a)+1,c=S(b);F(a,G,c,b);return c}
function Db(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Eb(a,b,c,d,f){a-=5120;a=1==a?G:4==a?I:6==a?ua:5==a||28922==a?ta:sa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
var Z,Pb={K:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},R:function(a,b,c){a=R(a);if(!a)return-4;a=Za(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Za:function(a,b,c){G.copyWithin(a,b,b+c)},lb:function(a,b){function c(d){O(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=G.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{fa.grow(Math.min(2147483648,
d)-qa.byteLength+65535>>>16);va();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},W:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},G:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},X:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},ea:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},ha:function(a,
b,c,d){T(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Zb||document.body.ac||document.body.$b))return-1;a=R(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");
return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Zb||document.body.ac||document.body.$b))return-1;a=R(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Ha:function(a,b,c,d){eb(a,b,c,d);return 0},_:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){fb(a,b,c,d,24,
"touchmove");return 0},ba:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},V:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d),0):-1},la:function(a,b){b>>=2;b={alpha:!!I[b],depth:!!I[b+1],stencil:!!I[b+2],antialias:!!I[b+3],premultipliedAlpha:!!I[b+4],preserveDrawingBuffer:!!I[b+5],powerPreference:zb[I[b+6]],failIfMajorPerformanceCaveat:!!I[b+
7],sc:I[b+8],zc:I[b+9],bc:I[b+10],qc:I[b+11],Bc:I[b+12],Cc:I[b+13]};a=R(a);return!a||b.qc?0:vb(a,b)},Xa:function(a,b){a=rb[a];b=H(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(Z);"OES_vertex_array_object"==b&&jb(Z);"WEBGL_draw_buffers"==b&&mb(Z);"WEBGL_multi_draw"==b&&nb(Z);return!!a.Vb.getExtension(b)},fb:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},Ya:function(a){yb=rb[a];e.vc=Z=yb&&yb.Vb;return!a||Z?0:-5},b:function(a){Z.activeTexture(a)},
J:function(a,b){Z.attachShader(U[a],X[b])},c:function(a,b){Z.bindBuffer(a,pb[b])},h:function(a,b){Z.bindFramebuffer(a,qb[b])},Da:function(a,b){Z.bindRenderbuffer(a,V[b])},a:function(a,b){Z.bindTexture(a,W[b])},O:function(a,b,c,d){Z.blendColor(a,b,c,d)},P:function(a,b){Z.blendEquationSeparate(a,b)},Q:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},Fa:function(a,b,c,d){Z.bufferData(a,c?G.subarray(c,c+b):b,d)},r:function(a,b,c,d){Z.bufferSubData(a,b,G.subarray(d,d+c))},p:function(a){return Z.checkFramebufferStatus(a)},
hb:function(a){Z.clear(a)},jb:function(a,b,c,d){Z.clearColor(a,b,c,d)},qa:function(a){Z.clearDepth(a)},ib:function(a){Z.clearStencil(a)},m:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){Z.compileShader(X[a])},Aa:function(a,b,c,d,f,h,g,m){Z.compressedTexImage2D(a,b,c,d,f,h,m?G.subarray(m,m+g):null)},ya:function(){var a=ub(U),b=Z.createProgram();b.name=a;b.Ub=b.Sb=b.Tb=0;b.Yb=1;U[a]=b;return a},va:function(a){var b=ub(X);X[b]=Z.createShader(a);return b},L:function(a){Z.cullFace(a)},
Ma:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=pb[d];f&&(Z.deleteBuffer(f),f.name=0,pb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],f=qb[d];f&&(Z.deleteFramebuffer(f),f.name=0,qb[d]=null)}},z:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=0,U[a]=null):Y(1281)}},T:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=V[d];f&&(Z.deleteRenderbuffer(f),f.name=0,V[d]=null)}},v:function(a){if(a){var b=X[a];b?(Z.deleteShader(b),X[a]=null):Y(1281)}},Ka:function(a,
b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=W[d];f&&(Z.deleteTexture(f),f.name=0,W[d]=null)}},y:function(a){Z.depthFunc(a)},x:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},S:function(a){Z.disableVertexAttribArray(a)},C:function(a,b,c){Z.drawArrays(a,b,c)},D:function(a,b,c,d){Z.drawElements(a,b,c,d)},i:function(a){Z.enable(a)},db:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,V[d])},g:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,W[d],f)},
M:function(a){Z.frontFace(a)},Ga:function(a,b){Ab(a,b,"createBuffer",pb)},l:function(a,b){Ab(a,b,"createFramebuffer",qb)},Ea:function(a,b){Ab(a,b,"createRenderbuffer",V)},Ba:function(a,b){Ab(a,b,"createTexture",W)},ra:function(a,b){return Z.getAttribLocation(U[a],H(b))},f:function(a,b){Bb(a,b)},wa:function(a,b,c,d){a=Z.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,G,d,b):0;c&&(I[c>>2]=b)},I:function(a,b,c){if(c)if(a>=ob)Y(1281);else if(a=U[a],35716==b)a=Z.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b){if(!a.Ub)for(b=0;b<Z.getProgramParameter(a,35718);++b)a.Ub=Math.max(a.Ub,Z.getActiveUniform(a,b).name.length+1);I[c>>2]=a.Ub}else if(35722==b){if(!a.Sb)for(b=0;b<Z.getProgramParameter(a,35721);++b)a.Sb=Math.max(a.Sb,Z.getActiveAttrib(a,b).name.length+1);I[c>>2]=a.Sb}else if(35381==b){if(!a.Tb)for(b=0;b<Z.getProgramParameter(a,35382);++b)a.Tb=Math.max(a.Tb,Z.getActiveUniformBlockName(a,b).length+1);I[c>>2]=a.Tb}else I[c>>2]=Z.getProgramParameter(a,
b);else Y(1281)},sa:function(a,b,c,d){a=Z.getShaderInfoLog(X[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,G,d,b):0;c&&(I[c>>2]=b)},F:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(X[a]),null===a&&(a="(unknown error)"),I[c>>2]=a?a.length+1:0):35720==b?(a=Z.getShaderSource(X[a]),I[c>>2]=a?a.length+1:0):I[c>>2]=Z.getShaderParameter(X[a],b):Y(1281)},Na:function(a){var b=sb[a];if(!b){switch(a){case 7939:b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Cb(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=b&&Cb(b);break;case 7938:b=Cb("OpenGL ES 2.0 ("+Z.getParameter(7938)+")");break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Cb(b);break;default:Y(1280)}sb[a]=b}return b},q:function(a,b){b=H(b);if(a=U[a]){var c=a,d=c.Qb,f=c.nc,h;if(!d)for(c.Qb=d={},c.mc={},h=0;h<Z.getProgramParameter(c,
35718);++h){var g=Z.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Db(m);n=0<n?m.slice(0,n):m;var p=c.Yb;c.Yb+=g;f[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.mc[p++]=n}c=a.Qb;d=0;f=b;h=Db(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,f=b.slice(0,h));if((f=a.nc[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Z.getUniformLocation(a,b)))return d}else Y(1281);return-1},xa:function(a){a=U[a];Z.linkProgram(a);a.Qb=0;a.nc={}},N:function(a,b){Z.polygonOffset(a,b)},Ca:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},kb:function(a,b,
c,d){Z.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?I[d+4*h>>2]:-1;f+=H(I[c+4*h>>2],0>g?void 0:g)}Z.shaderSource(X[a],f)},Ja:function(a,b,c){Z.stencilFunc(a,b,c)},pa:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},w:function(a){Z.stencilMask(a)},Ia:function(a,b,c){Z.stencilOp(a,b,c)},oa:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},za:function(a,b,c,d,f,h,g,m,n){Z.texImage2D(a,b,c,d,f,h,g,m,n?Eb(m,g,d,f,n):null)},j:function(a,b,c){Z.texParameteri(a,b,c)},cb:function(a,
b,c,d,f,h,g,m,n){var p=null;n&&(p=Eb(m,g,f,h,n));Z.texSubImage2D(a,b,c,d,f,h,g,m,p)},H:function(a,b){var c=Z,d=c.uniform1i;var f=Z.oc;if(f){var h=f.Qb[a];"number"===typeof h&&(f.Qb[a]=h=Z.getUniformLocation(f,f.mc[a]+(0<h?"["+h+"]":"")));a=h}else Y(1282),a=void 0;d.call(c,a,b)},n:function(a){a=U[a];Z.useProgram(a);Z.oc=a},eb:function(a,b){Z.vertexAttribDivisor(a,b)},gb:function(a,b,c,d,f,h){Z.vertexAttribPointer(a,b,c,!!d,f,h)},E:function(a,b,c,d){Z.viewport(a,b,c,d)},Va:function(){e.fc=function(a){0!=
Fb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.fc)},Ua:function(){e.lc=function(a){a=a.clipboardData.getData("text");ja("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.lc)},Ta:function(a){e.Dc=[];a=H(a);a=document.getElementById(a);e.hc=function(b){b.stopPropagation();b.preventDefault()};e.ic=function(b){b.stopPropagation();b.preventDefault()};e.jc=function(b){b.stopPropagation();b.preventDefault()};e.kc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;e.Xb=c;Gb(c.length);var d;for(d=0;d<c.length;d++)ja("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Hb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.hc,!1);a.addEventListener("dragleave",e.ic,!1);a.addEventListener("dragover",e.jc,!1);a.addEventListener("drop",e.kc,!1)},Pa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Ib()});document.body.append(a)},nb:function(a){return 0>a||a>=e.Xb.length?0:e.Xb[a].size},mb:function(a,b,c,d,f){var h=new FileReader;h.onload=function(g){g=g.target.result;g.byteLength>d?Jb(a,0,1,b,0,c,d,f):(G.set(new Uint8Array(g),c),Jb(a,1,0,b,g.byteLength,c,d,f))};h.onerror=function(){Jb(a,0,2,b,0,c,d,f)};h.readAsArrayBuffer(e.Xb[a])},t:function(){document.getElementById("_sokol_app_input_element").focus()},La:function(a){a=H(a);
e.Pb=document.getElementById(a);e.Pb||console.log("sokol_app.h: invalid target:"+a);e.Pb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Sa:function(){window.removeEventListener("beforeunload",e.fc)},Ra:function(){window.removeEventListener("paste",e.lc)},Qa:function(a){a=H(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.hc);a.removeEventListener("dragleave",e.ic);a.removeEventListener("dragover",e.jc);a.removeEventListener("drop",
e.kc)},B:function(){e.Pb&&e.Pb.requestPointerLock&&e.Pb.requestPointerLock()},Oa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),h=f.createImageData(a,b);h.data.set(G.subarray(c,c+a*b*4));f.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),
b=a.next();!b.done;b=a.next())ja("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},$a:function(){return e.Ob?e.Ob.bufferSize:0},bb:function(a,b,c){e.Jb=null;e.Ob=null;"undefined"!==typeof AudioContext?e.Jb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.Jb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.Jb=null,console.log("sokol_audio.h: no WebAudio support"));return e.Jb?(console.log("sokol_audio.h: sample rate ",
e.Jb.sampleRate),e.Ob=e.Jb.createScriptProcessor(c,0,b),e.Ob.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Kb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=ua[(h>>2)+(g*p+m)]},e.Ob.connect(e.Jb.destination),a=function(){e.Jb&&"suspended"===e.Jb.state&&e.Jb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),
1):0},ab:function(){return e.Jb?e.Jb.sampleRate:0},na:function(){null!==e.Jb&&(e.Ob&&e.Ob.disconnect(),e.Jb.close(),e.Jb=null,e.Ob=null)},A:function(a,b,c,d,f,h){b=H(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(G.set(n,f),Lb(a,d,p)):Mb(a)}else Nb(a,this.status)};
g.send()},ma:function(a,b){b=H(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Ob(a,d)}else Nb(a,this.status)};c.send()},o:function(){return performance.now()}};
(function(){function a(f){e.asm=f.exports;fa=e.asm.ob;va();wa=e.asm.Ib;ya.unshift(e.asm.pb);K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Da&&(clearInterval(Da),Da=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ha().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(f,function(h){C("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Pb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return C("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return D||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){C("wasm streaming compile failed: "+h);C("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.pb).apply(null,arguments)};var Ib=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ib=e.__sapp_emsc_notify_keyboard_hidden=e.asm.qb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.rb).apply(null,arguments)};
var Fb=e.__sapp_html5_get_ask_leave_site=function(){return(Fb=e.__sapp_html5_get_ask_leave_site=e.asm.sb).apply(null,arguments)},Gb=e.__sapp_emsc_begin_drop=function(){return(Gb=e.__sapp_emsc_begin_drop=e.asm.tb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.ub).apply(null,arguments)};
var Hb=e.__sapp_emsc_end_drop=function(){return(Hb=e.__sapp_emsc_end_drop=e.asm.vb).apply(null,arguments)},Jb=e.__sapp_emsc_invoke_fetch_cb=function(){return(Jb=e.__sapp_emsc_invoke_fetch_cb=e.asm.wb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.xb).apply(null,arguments)};var Kb=e.__saudio_emsc_pull=function(){return(Kb=e.__saudio_emsc_pull=e.asm.yb).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.zb).apply(null,arguments)};
var Ob=e.__sfetch_emsc_head_response=function(){return(Ob=e.__sfetch_emsc_head_response=e.asm.Ab).apply(null,arguments)},Lb=e.__sfetch_emsc_get_response=function(){return(Lb=e.__sfetch_emsc_get_response=e.asm.Bb).apply(null,arguments)},Nb=e.__sfetch_emsc_failed_http_status=function(){return(Nb=e.__sfetch_emsc_failed_http_status=e.asm.Cb).apply(null,arguments)},Mb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Mb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Db).apply(null,arguments)},S=
e._malloc=function(){return(S=e._malloc=e.asm.Eb).apply(null,arguments)},la=e.stackSave=function(){return(la=e.stackSave=e.asm.Fb).apply(null,arguments)},ma=e.stackRestore=function(){return(ma=e.stackRestore=e.asm.Gb).apply(null,arguments)},E=e.stackAlloc=function(){return(E=e.stackAlloc=e.asm.Hb).apply(null,arguments)},Qb;function B(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Rb(){Qb||Sb();Qb||(L=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,e.calledRun=!0,!ha)){N(ya);N(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Tb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=E(4*(f+1));I[h>>2]=pa(ba);for(var g=1;g<f;g++)I[(h>>2)+g]=pa(c[g-1]);I[(h>>2)+f]=0;try{var m=d(f,h);if(!(noExitRuntime||0<ea)){if(e.onExit)e.onExit(m);ha=!0}q(m,new B(m))}catch(n){n instanceof B||"unwind"==n||q(1,n)}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),
Ba.unshift(c);N(Ba)}}a=a||aa;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ca();N(xa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Sb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Tb=!0;e.noInitialRun&&(Tb=!1);Sb();
