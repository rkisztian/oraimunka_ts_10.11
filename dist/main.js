(()=>{"use strict";var e={85:function(e,t){var o,r,i=this&&this.__classPrivateFieldSet||function(e,t,o,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,o):i?i.value=o:t.set(e,o),o},a=this&&this.__classPrivateFieldGet||function(e,t,o,r){if("a"===o&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?r:"a"===o?r.call(e):r?r.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Book=void 0,t.Book=class{constructor(e,t){o.set(this,void 0),r.set(this,void 0),i(this,o,e,"f"),i(this,r,t,"f")}getrating(){return a(this,r,"f")}setrating(e){a(this,r,"f")<=1||a(this,r,"f")>=10?i(this,r,e,"f"):console.log("Nem megfelelő értékkel értékelte a könyvet.")}kiir(){console.log("Könyv neve: "+a(this,o,"f")+" Értékelése: "+a(this,r,"f"))}},o=new WeakMap,r=new WeakMap}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}(()=>{const e=o(85);let t=[],r=new e.Book("Kőszívű ember fiai",2),i=new e.Book("Paranox",3),a=new e.Book("Egy Ropi Naplója",10),s=new e.Book("Egy Ropi Naplója 2",8),n=new e.Book("Egy Ropi Naplója 3",9);t.push(r),t.push(i),t.push(a),t.push(s),t.push(n);for(let e of t)e.getrating()>7&&e.kiir();console.log(""),function(e){let t=e[0];for(let o of e)o.getrating()>t.getrating()&&(t=o);return t}(t).kiir()})()})();