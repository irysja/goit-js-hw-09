!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;function a(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));document.body.style.backgroundColor=t}t.addEventListener("click",(function(){t.disabled=!0,e=setInterval(a,1e3)})),n.addEventListener("click",(function(){t.disabled=!1,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.018c0dd9.js.map
