function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var n,o;o={},i.m=n={5:function(e,t){!function(){var e,t=document.querySelectorAll(".picture img, .picture-pros img"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),s=[],u=0;if(e=document.createDocumentFragment(),n.classList.add("light-box"),e.appendChild(n),r.classList.add("light-box__left-arrow"),i.appendChild(r),l.classList.add("light-box__right-arrow"),d.appendChild(l),o.classList.add("light-box__container"),n.appendChild(o),i.classList.add("light-box__left"),n.appendChild(i),d.classList.add("light-box__right"),n.appendChild(d),a.classList.add("light-box__close"),n.appendChild(a),c.classList.add("light-box__img-number"),n.appendChild(c),document.body.appendChild(e),t.forEach(function(e){e.addEventListener("click",f,!1)}),i.addEventListener("click",g,!1),d.addEventListener("click",m,!1),a.addEventListener("click",y,!1),n.addEventListener("click",y,!1),window.innerWidth<1024){var p=new Hammer(n);p.on("swipeleft",function(e){i.click()}),p.on("swiperight",function(e){d.click()})}function f(e){window.history.pushState({open:!0},"Agnieszka Korber Portfolio",""),s=[].concat(e.target.parentNode.parentNode.querySelectorAll("img")),o.style.backgroundImage="url("+e.target.getAttribute("src")+")",u=s.indexOf(e.target),1<s.length&&(i.style.display="flex",d.style.display="flex"),n.style.display="block",n.focus(),document.body.classList.add("block-body"),b()}function g(e){if(0===u)return o.style.backgroundImage="url("+s[s.length-1].dataset.src+")",u=s.length-1,void b();o.style.backgroundImage="url("+s[u-1].dataset.src+")",u-=1,b()}function m(e){if(u===s.length-1)return o.style.backgroundImage="url("+s[0].dataset.src+")",u=0,void b();o.style.backgroundImage="url("+s[u+1].dataset.src+")",u+=1,b()}function y(e){e.target!==n&&e.target!==a&&27!==e.keyCode&&"function PopStateEvent() { [native code] }"!==e.constructor.toString()||(i.style.display="none",d.style.display="none",n.style.display="none",document.body.classList.remove("block-body"))}function b(){c.innerHTML=u+1+"/"+s.length}window.addEventListener("keyup",function(e){27===e.keyCode&&y(e),37===e.keyCode&&g(),39===e.keyCode&&m()},!1),window.addEventListener("popstate",function(e){y(e)},!1)}()}},i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist/",i(i.s=5);