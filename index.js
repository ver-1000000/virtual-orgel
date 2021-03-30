(()=>{var qe=Object.create,O=Object.defineProperty,Ee=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty,Pe=Object.getOwnPropertyNames,Ne=Object.getOwnPropertyDescriptor;var je=e=>O(e,"__esModule",{value:!0});var y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Oe=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Pe(t))!Ve.call(e,r)&&r!=="default"&&O(e,r,{get:()=>t[r],enumerable:!(n=Ne(t,r))||n.enumerable});return e},Be=e=>Oe(je(O(e!=null?qe(Ee(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var L=y((Jt,G)=>{"use strict";function Fe(e){return e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:e===43?62:e===47?63:0}function De(e,t){for(var n=e.replace(/[^A-Za-z0-9\+\/]/g,""),r=n.length,i=t?Math.ceil((r*3+1>>2)/t)*t:r*3+1>>2,o=new Uint8Array(i),c,s,a=0,d=0,v=0;v<r;v++)if(s=v&3,a|=Fe(n.charCodeAt(v))<<18-6*s,s===3||r-v==1){for(c=0;c<3&&d<i;c++,d++)o[d]=a>>>(16>>>c&24)&255;a=0}return o}G.exports={decode:De}});var $=y(($t,J)=>{"use strict";J.exports=function(e,t){return new Promise(function(n,r){var i=new XMLHttpRequest;t&&(i.responseType=t),i.open("GET",e),i.onload=function(){i.status===200?n(i.response):r(Error(i.statusText))},i.onerror=function(){r(Error("Network Error"))},i.send()})}});var C=y((Ct,k)=>{"use strict";var Re=L(),Ue=$();function q(e){return function(t){return typeof t=="string"&&e.test(t)}}function B(e,t){return typeof e=="string"?e+t:typeof e=="function"?e(t):t}function A(e,t,n,r){var i=Ge(t)?Le:Je(t)?$e:Ce(t)?Ie:He(t)?Xe:Ke(t)?Ye:Ze(t)?ze:Qe(t)?We:et(t)?tt:null,o=n||{};return i?i(e,t,o):r?Promise.resolve(r):Promise.reject("Source not valid ("+t+")")}A.fetch=Ue;function Ge(e){return e instanceof ArrayBuffer}function Le(e,t,n){return new Promise(function(r,i){e.decodeAudioData(t,function(o){r(o)},function(){i("Can't decode audio data ("+t.slice(0,30)+"...)")})})}var Je=q(/\.(mp3|wav|ogg)(\?.*)?$/i);function $e(e,t,n){var r=B(n.from,t);return A(e,A.fetch(r,"arraybuffer"),n)}function Ce(e){return e&&typeof e.then=="function"}function Ie(e,t,n){return t.then(function(r){return A(e,r,n)})}var He=Array.isArray;function Xe(e,t,n){return Promise.all(t.map(function(r){return A(e,r,n,r)}))}function Ke(e){return e&&typeof e=="object"}function Ye(e,t,n){var r={},i=Object.keys(t).map(function(o){if(n.only&&n.only.indexOf(o)===-1)return null;var c=t[o];return A(e,c,n,c).then(function(s){r[o]=s})});return Promise.all(i).then(function(){return r})}var Ze=q(/\.json(\?.*)?$/i);function ze(e,t,n){var r=B(n.from,t);return A(e,A.fetch(r,"text").then(JSON.parse),n)}var Qe=q(/^data:audio/);function We(e,t,n){var r=t.indexOf(",");return A(e,Re.decode(t.slice(r+1)).buffer,n)}var et=q(/\.js(\?.*)?$/i);function tt(e,t,n){var r=B(n.from,t);return A(e,A.fetch(r,"text").then(rt),n)}function rt(e){var t=e.indexOf("MIDI.Soundfont.");if(t<0)throw Error("Invalid MIDI.js Soundfont format");t=e.indexOf("=",t)+2;var n=e.lastIndexOf(",");return JSON.parse(e.slice(t,n)+"}")}typeof k=="object"&&k.exports&&(k.exports=A);typeof window!="undefined"&&(window.loadAudio=A)});var X=y((It,I)=>{I.exports=nt;function nt(e){var t=e.createGain(),n=t._voltage=ot(e),r=M(n),i=M(n),o=M(n);return t._startAmount=M(i),t._endAmount=M(o),t._multiplier=M(r),t._multiplier.connect(t),t._startAmount.connect(t),t._endAmount.connect(t),t.value=r.gain,t.startValue=i.gain,t.endValue=o.gain,t.startValue.value=0,t.endValue.value=0,Object.defineProperties(t,it),t}var it={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(e){var t=this._multiplier.gain,n=this._startAmount.gain,r=this._endAmount.gain;this._voltage.start(e),this._decayFrom=this._decayFrom=e+this.attack,this._startedAt=e;var i=this.sustain;t.cancelScheduledValues(e),n.cancelScheduledValues(e),r.cancelScheduledValues(e),r.setValueAtTime(0,e),this.attack?(t.setValueAtTime(0,e),t.linearRampToValueAtTime(1,e+this.attack),n.setValueAtTime(1,e),n.linearRampToValueAtTime(0,e+this.attack)):(t.setValueAtTime(1,e),n.setValueAtTime(0,e)),this.decay&&t.setTargetAtTime(i,this._decayFrom,H(this.decay))}},stop:{value:function(e,t){t&&(e=e-this.release);var n=e+this.release;if(this.release){var r=this._multiplier.gain,i=this._startAmount.gain,o=this._endAmount.gain;r.cancelScheduledValues(e),i.cancelScheduledValues(e),o.cancelScheduledValues(e);var c=H(this.release);if(this.attack&&e<this._decayFrom){var s=at(0,1,this._startedAt,this._decayFrom,e);r.linearRampToValueAtTime(s,e),i.linearRampToValueAtTime(1-s,e),i.setTargetAtTime(0,e,c)}o.setTargetAtTime(1,e,c),r.setTargetAtTime(0,e,c)}return this._voltage.stop(n),n}},onended:{get:function(){return this._voltage.onended},set:function(e){this._voltage.onended=e}}},st=new Float32Array([1,1]);function ot(e){var t=e.createBufferSource(),n=e.createBuffer(1,2,e.sampleRate);return n.getChannelData(0).set(st),t.buffer=n,t.loop=!0,t}function M(e){var t=e.context.createGain();return e.connect(t),t}function H(e){return Math.log(e+1)/Math.log(100)}function at(e,t,n,r,i){var o=t-e,c=r-n,s=i-n,a=s/c,d=e+a*o;return d<=e&&(d=e),d>=t&&(d=t),d}});var Z=y((Ht,K)=>{"use strict";var ut=X(),ct={},lt={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function pt(e,t,n){var r=!1,i=0,o={},c=e.createGain();c.gain.value=1;var s=Object.assign({},lt,n),a={context:e,out:c,opts:s};return t instanceof AudioBuffer?a.buffer=t:a.buffers=t,a.start=function(f,l,h){if(a.buffer&&f!==null)return a.start(null,f,l);var p=f?a.buffers[f]:a.buffer;if(p){if(!r){console.warn("SamplePlayer not connected to any node.");return}}else{console.warn("Buffer "+f+" not found.");return}var b=h||ct;l=Math.max(e.currentTime,l||0),a.emit("start",l,f,b);var g=v(f,p,b);return g.id=d(f,g),g.env.start(l),g.source.start(l),a.emit("started",l,g.id,g),b.duration&&g.stop(l+b.duration),g},a.play=function(f,l,h){return a.start(f,l,h)},a.stop=function(f,l){var h;return l=l||Object.keys(o),l.map(function(p){return h=o[p],h?(h.stop(f),h.id):null})},a.connect=function(f){return r=!0,c.connect(f),a},a.emit=function(f,l,h,p){a.onevent&&a.onevent(f,l,h,p);var b=a["on"+f];b&&b(l,h,p)},a;function d(f,l){return l.id=i++,o[l.id]=l,l.source.onended=function(){var h=e.currentTime;l.source.disconnect(),l.env.disconnect(),l.disconnect(),a.emit("ended",h,l.id,l)},l.id}function v(f,l,h){var p=e.createGain();return p.gain.value=0,p.connect(c),p.env=ft(e,h,s),p.env.connect(p.gain),p.source=e.createBufferSource(),p.source.buffer=l,p.source.connect(p),p.source.loop=h.loop||s.loop,p.source.playbackRate.value=dt(h.cents||s.cents),p.source.loopStart=h.loopStart||s.loopStart,p.source.loopEnd=h.loopEnd||s.loopEnd,p.stop=function(b){var g=b||e.currentTime;a.emit("stop",g,f);var j=p.env.stop(g);p.source.stop(j)},p}}function Y(e){return typeof e=="number"}var vt=["attack","decay","sustain","release"];function ft(e,t,n){var r=ut(e),i=t.adsr||n.adsr;return vt.forEach(function(o,c){i?r[o]=i[c]:r[o]=t[o]||n[o]}),r.value.value=Y(t.gain)?t.gain:Y(n.gain)?n.gain:1,r}function dt(e){return e?Math.pow(2,e/1200):1}K.exports=pt});var Q=y((Xt,z)=>{z.exports=function(e){return e.on=function(t,n){if(arguments.length===1&&typeof t=="function")return e.on("event",t);var r="on"+t,i=e[r];return e[r]=i?ht(i,n):n,e},e};function ht(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}});var ie=y((Kt,W)=>{"use strict";var ee=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function mt(){return ee}var gt=[0,2,4,5,7,9,11];function re(e,t,n){if(typeof e!="string")return null;var r=ee.exec(e);if(!r||!t&&r[4])return null;var i={letter:r[1].toUpperCase(),acc:r[2].replace(/x/g,"##")};return i.pc=i.letter+i.acc,i.step=(i.letter.charCodeAt(0)+3)%7,i.alt=i.acc[0]==="b"?-i.acc.length:i.acc.length,i.chroma=gt[i.step]+i.alt,r[3]&&(i.oct=+r[3],i.midi=i.chroma+12*(i.oct+1),i.freq=te(i.midi,n)),t&&(i.tonicOf=r[4]),i}function te(e,t){return Math.pow(2,(e-69)/12)*(t||440)}var ne={parse:re,regex:mt,midiToFreq:te},yt=["letter","acc","pc","step","alt","chroma","oct","midi","freq"];yt.forEach(function(e){ne[e]=function(t){var n=re(t);return n&&typeof n[e]!="undefined"?n[e]:null}});W.exports=ne});var ae=y((Yt,oe)=>{"use strict";var bt=ie(),Tt=function(e){return e!==null&&e!==[]&&e>=0&&e<129},At=function(e){return Tt(e)?+e:bt.midi(e)};oe.exports=function(e){if(e.buffers){var t=e.opts.map,n=typeof t=="function"?t:At,r=function(o){return o?n(o)||o:null};e.buffers=wt(e.buffers,r);var i=e.start;e.start=function(o,c,s){var a=r(o),d=a%1;return d&&(a=Math.floor(a),s=Object.assign(s||{},{cents:Math.floor(d*100)})),i(a,c,s)}}return e};function wt(e,t){return Object.keys(e).reduce(function(n,r){return n[t(r)]=e[r],n},{})}});var ue=y((Zt,se)=>{"use strict";var xt=Array.isArray,St=function(e){return e&&typeof e=="object"},Mt={};se.exports=function(e){return e.schedule=function(t,n){var r=e.context.currentTime,i=t<r?r:t;e.emit("schedule",i,n);var o,c,s,a;return n.map(function(d){if(d)xt(d)?(o=d[0],c=d[1]):(o=d.time,c=d);else return null;return St(c)?(s=c.name||c.key||c.note||c.midi||null,a=c):(s=c,a=Mt),e.start(s,i+(o||0),a)})},e}});var le=y((ce,F)=>{(function(e){if(typeof ce=="object"&&typeof F!="undefined")F.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t=this,t.midimessage=e()}})(function(){var e,t,n;return function r(i,o,c){function s(v,f){if(!o[v]){if(!i[v]){var l=!1;if(!f&&l)return l(v,!0);if(a)return a(v,!0);var h=new Error("Cannot find module '"+v+"'");throw h.code="MODULE_NOT_FOUND",h}var p=o[v]={exports:{}};i[v][0].call(p.exports,function(b){var g=i[v][1][b];return s(g||b)},p,p.exports,r,i,o,c)}return o[v].exports}for(var a=!1,d=0;d<c.length;d++)s(c[d]);return s}({1:[function(r,i,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(c){function s(a){if(this._event=a,this._data=a.data,this.receivedTime=a.receivedTime,this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return}switch(this._messageCode=a.data[0]&240,this.channel=a.data[0]&15,this._messageCode){case 128:this.messageType="noteoff",this.key=a.data[1]&127,this.velocity=a.data[2]&127;break;case 144:this.messageType="noteon",this.key=a.data[1]&127,this.velocity=a.data[2]&127;break;case 160:this.messageType="keypressure",this.key=a.data[1]&127,this.pressure=a.data[2]&127;break;case 176:this.messageType="controlchange",this.controllerNumber=a.data[1]&127,this.controllerValue=a.data[2]&127,this.controllerNumber===120&&this.controllerValue===0?this.channelModeMessage="allsoundoff":this.controllerNumber===121?this.channelModeMessage="resetallcontrollers":this.controllerNumber===122?this.controllerValue===0?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":this.controllerNumber===123&&this.controllerValue===0?this.channelModeMessage="allnotesoff":this.controllerNumber===124&&this.controllerValue===0?this.channelModeMessage="omnimodeoff":this.controllerNumber===125&&this.controllerValue===0?this.channelModeMessage="omnimodeon":this.controllerNumber===126?this.channelModeMessage="monomodeon":this.controllerNumber===127&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=a.data[1];break;case 208:this.messageType="channelpressure",this.pressure=a.data[1]&127;break;case 224:this.messageType="pitchbendchange";var d=a.data[2]&127,v=a.data[1]&127;this.pitchBend=(d<<8)+v;break}}return new s(c)},i.exports=o.default},{}]},{},[1])(1)})});var de=y((zt,fe)=>{var _t=le();fe.exports=function(e){return e.listenToMidi=function(t,n){var r={},i=n||{},o=i.gain||function(c){return c/127};return t.onmidimessage=function(c){var s=c.messageType?c:_t(c);if(s.messageType==="noteon"&&s.velocity===0&&(s.messageType="noteoff"),!(i.channel&&s.channel!==i.channel))switch(s.messageType){case"noteon":r[s.key]=e.play(s.key,0,{gain:o(s.velocity)});break;case"noteoff":r[s.key]&&(r[s.key].stop(),delete r[s.key]);break}},e},e}});var ve=y((Qt,E)=>{"use strict";var kt=Z(),qt=Q(),Et=ae(),Vt=ue(),Pt=de();function pe(e,t,n){return Pt(Vt(Et(qt(kt(e,t,n)))))}typeof E=="object"&&E.exports&&(E.exports=pe);typeof window!="undefined"&&(window.SamplePlayer=pe)});var me=y((V,he)=>{(function(e,t){typeof V=="object"&&typeof he!="undefined"?t(V):typeof define=="function"&&define.amd?define(["exports"],t):t(e.NoteParser=e.NoteParser||{})})(V,function(e){"use strict";function t(u,T){return Array(T+1).join(u)}function n(u){return typeof u=="number"}function r(u){return typeof u=="string"}function i(u){return u!==void 0}function o(u,T){return Math.pow(2,(u-69)/12)*(T||440)}function c(){return R}function s(u,T,S){if(typeof u!="string")return null;var x=R.exec(u);if(!x||!T&&x[4])return null;var m={letter:x[1].toUpperCase(),acc:x[2].replace(/x/g,"##")};m.pc=m.letter+m.acc,m.step=(m.letter.charCodeAt(0)+3)%7,m.alt=m.acc[0]==="b"?-m.acc.length:m.acc.length;var _=_e[m.step]+m.alt;return m.chroma=_<0?12+_:_%12,x[3]&&(m.oct=+x[3],m.midi=_+12*(m.oct+1),m.freq=o(m.midi,S)),T&&(m.tonicOf=x[4]),m}function a(u){return n(u)?u<0?t("b",-u):t("#",u):""}function d(u){return n(u)?""+u:""}function v(u,T,S){return u==null?null:u.step?v(u.step,u.alt,u.oct):u<0||u>6?null:ke.charAt(u)+a(T)+d(S)}function f(u){if((n(u)||r(u))&&u>=0&&u<128)return+u;var T=s(u);return T&&i(T.midi)?T.midi:null}function l(u,T){var S=f(u);return S===null?null:o(S,T)}function h(u){return(s(u)||{}).letter}function p(u){return(s(u)||{}).acc}function b(u){return(s(u)||{}).pc}function g(u){return(s(u)||{}).step}function j(u){return(s(u)||{}).alt}function Se(u){return(s(u)||{}).chroma}function Me(u){return(s(u)||{}).oct}var R=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/,_e=[0,2,4,5,7,9,11],ke="CDEFGAB";e.regex=c,e.parse=s,e.build=v,e.midi=f,e.freq=l,e.letter=h,e.acc=p,e.pc=b,e.step=g,e.alt=j,e.chroma=Se,e.oct=Me})});var ye=y((Wt,ge)=>{"use strict";var D=me();function w(e,t){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof w))return new w(e);this.nameToUrl=t||w.nameToUrl,this.ctx=e,this.instruments={},this.promises=[]}w.prototype.onready=function(e){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(e)};w.prototype.instrument=function(e,t){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var n=this.ctx;if(e=e||"default",e in this.instruments)return this.instruments[e];var r={name:e,play:Nt(n,t)};if(this.instruments[e]=r,e!=="default"){var i=w.instrument(n,e,t).then(function(o){return r.play=o.play,r});this.promises.push(i),r.onready=function(o){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),i.then(o)}}else r.onready=function(o){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),o()};return r};function jt(e,t,n){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),w.instrument(e,t,n).then(function(r){return r.buffers})}w.loadBuffers=jt;function Nt(e,t){return t=t||{},function(n,r,i,o){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var c=n>0&&n<129?+n:D.midi(n),s=c?D.midiToFreq(c,440):null;if(!!s){i=i||.2,o=o||{};var a=o.destination||t.destination||e.destination,d=o.vcoType||t.vcoType||"sine",v=o.gain||t.gain||.4,f=e.createOscillator();f.type=d,f.frequency.value=s;var l=e.createGain();return l.gain.value=v,f.connect(l),l.connect(a),f.start(r),i>0&&f.stop(r+i),f}}}w.noteToMidi=D.midi;ge.exports=w});var Ae=y((er,P)=>{"use strict";var Ot=C(),Bt=ve();function be(e,t,n){if(arguments.length===1)return function(s,a){return be(e,s,a)};var r=n||{},i=r.isSoundfontURL||Ft,o=r.nameToUrl||Te,c=i(t)?t:o(t,r.soundfont,r.format);return Ot(e,c,{only:r.only||r.notes}).then(function(s){var a=Bt(e,s,r).connect(r.destination?r.destination:e.destination);return a.url=c,a.name=t,a})}function Ft(e){return/\.js(\?.*)?$/i.test(e)}function Te(e,t,n){return n=n==="ogg"?n:"mp3",t=t==="FluidR3_GM"?t:"MusyngKite","https://gleitz.github.io/midi-js-soundfonts/"+t+"/"+e+"-"+n+".js"}var N=ye();N.instrument=be;N.nameToUrl=Te;typeof P=="object"&&P.exports&&(P.exports=N);typeof window!="undefined"&&(window.Soundfont=N)});var U="0.0.0";var we=Be(Ae());function Dt(e){if(e==null)throw new Error(`Expected 'val' to be defined, but received ${e}`)}var xe=(e,t=document)=>{let n=t.querySelector(e);return Dt(n),n},Rt=async e=>{let t=await(0,we.instrument)(new AudioContext,"music_box");t.play("C3",0),t.play("Db3",1),t.play("D3",2),t.play("Eb3",3),t.play("E3",4),t.play("F3",5),t.play("Gb3",6),t.play("G3",7),t.play("Ab3",8),t.play("A3",9),t.play("Bb3",10),t.play("B3",11)};addEventListener("load",()=>{xe("#version").textContent=U,xe("#form [name=action]").onclick=Rt});})();