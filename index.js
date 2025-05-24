import{a as w,S,i as c}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const q="https://pixabay.com/api/",M="50362686-a19d598e286bdc8c634e59341";async function u(s,r=1,i=40){try{const o=await w.get(q,{params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:i}}),{hits:e,totalHits:t}=o.data;return{hits:e,totalHits:t}}catch(o){throw console.error("Помилка під час завантаження зображень:",o),o}}const f=document.querySelector(".gallery"),p=document.querySelector(".load-more"),m=document.querySelector(".loader"),$=new S(".gallery a");function h(s){const r=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:a,comments:L,downloads:b})=>`
      <a href="${o}" class="gallery-item">
        <img src="${i}" alt="${e}" loading="lazy"/>
        <div class="image-info">
          <div class="info-block">
            <p class="info-label">Likes</p>
            <p class="info-value">${t}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Views</p>
            <p class="info-value">${a}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Comments</p>
            <p class="info-value">${L}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Downloads</p>
            <p class="info-value">${b}</p>
          </div>
        </div>
      </a>`).join("");f.insertAdjacentHTML("beforeend",r),$.refresh()}function B(){f.innerHTML=""}function g(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}function y(){p.classList.remove("hidden")}function v(){p.classList.add("hidden")}let n=1,d="";const P=document.querySelector("#search-form"),E=document.querySelector(".load-more");P.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.searchQuery.value.trim();if(!r){c.info({title:"Увага",message:"Будь ласка, введіть пошуковий запит.",position:"topRight"});return}d=r,n=1,B(),v(),g();try{const{hits:i,totalHits:o}=await u(d,n);if(l(),i.length===0){c.warning({title:"Увага",message:"За вашим запитом не знайдено жодного зображення.",position:"topRight"});return}h(i),o>n*40&&y()}catch(i){l(),c.error({title:"Помилка",message:"Щось пішло не так. Спробуйте ще раз.",position:"topRight"}),console.error(i)}});E.addEventListener("click",async()=>{n+=1,g(),v();try{const{hits:s,totalHits:r}=await u(d,n);l(),h(s);const i=Math.ceil(r/40);n<i?y():c.info({title:"Інформація",message:"Це всі результати пошуку.",position:"topRight"});const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}catch(s){l(),console.error(s)}});
//# sourceMappingURL=index.js.map
