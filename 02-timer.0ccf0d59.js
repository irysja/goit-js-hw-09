const e=document.querySelector("button[data-start]"),t=document.querySelector("[data-days]"),n=document.querySelector("[data-hours]"),a=document.querySelector("[data-minutes]"),o=document.querySelector("[data-seconds]");let r=null;function d(e){return String(e).padStart(2,"0")}e.addEventListener("click",(function(){const l=document.getElementById("datetime-picker").value,c=new Date(l).getTime();e.disabled=!0,document.getElementById("datetime-picker").disabled=!0,r=setInterval((()=>{const e=(new Date).getTime(),l=c-e;if(l>0){const e=Math.floor(l/864e5),c=Math.floor(l%864e5/36e5),i=Math.floor(l%36e5/6e4),u=Math.floor(l%6e4/1e3);t.textContent=d(e),n.textContent=d(c),a.textContent=d(i),o.textContent=d(u),l<=0&&clearInterval(r)}else clearInterval(r)}),1e3)}));const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=new Date?(window.alert("Please choose a date in the future"),e.disabled=!0):e.disabled=!1}};flatpickr("#datetime-picker",l);
//# sourceMappingURL=02-timer.0ccf0d59.js.map