!function(){function e(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]'),c=parseInt(t.value),i=parseInt(o.value),u=parseInt(a.value),r=1;r<=u;r++){e(r,c+(r-1)*i).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.23aad1b8.js.map