import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");function a(s){s.preventDefault();const o=s.target.state.value,e=Number(s.target.delay.value);if(isNaN(e)||e===1/0||e===-1/0){i.warning({position:"topRight",message:`Value ${e} is not a valide number, please do no change value, input type and attribute "required" in the code inspector`});return}if(e<0){i.warning({position:"topRight",message:"Please enter a positive number"});return}new Promise((t,n)=>{setTimeout(()=>{o==="fulfilled"?t(e):n(e)},e)}).then(t=>i.success({position:"topRight",message:`✅ Fulfilled promise in ${t}ms`})).catch(t=>i.error({position:"topRight",message:`❌ Rejected promise in ${t}ms`}))}r.addEventListener("submit",a);
//# sourceMappingURL=2-snackbar.js.map
