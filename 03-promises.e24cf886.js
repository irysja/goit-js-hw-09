function e(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),u=parseInt(n.value),l=parseInt(o.value),r=parseInt(i.value);for(let t=1;t<=r;t++){e(t,u+(t-1)*l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.e24cf886.js.map
