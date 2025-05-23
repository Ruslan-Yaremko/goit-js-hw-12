import{S as v}from"./assets/vendor-g6-w1428.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const L="50362686-a19d598e286bdc8c634e59341",b="https://pixabay.com/api/";async function w(t,r=1,s=15){const n=await fetch(`${b}?key=${L}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${s}`);if(!n.ok)throw new Error("Failed to fetch images");return await n.json()}const c=document.querySelector(".gallery"),d=document.querySelector(".load-more"),u=document.querySelector(".loader"),$=new v(".gallery a");function S(t){const r=t.map(({webformatURL:s,largeImageURL:n,tags:e,likes:o,views:i,comments:h,downloads:g})=>`
      <a href="${n}" class="gallery-item">
        <img src="${s}" alt="${e}" loading="lazy"/>
        <div class="image-info">
          <div class="info-block">
            <p class="info-label">Likes</p>
            <p class="info-value">${o}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Views</p>
            <p class="info-value">${i}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Comments</p>
            <p class="info-value">${h}</p>
          </div>
          <div class="info-block">
            <p class="info-label">Downloads</p>
            <p class="info-value">${g}</p>
          </div>
        </div>
      </a>`).join("");c.insertAdjacentHTML("beforeend",r),$.refresh()}function q(){c.innerHTML=""}function B(){u.classList.remove("hidden")}function M(){u.classList.add("hidden")}function E(){d.classList.remove("hidden")}function f(){d.classList.add("hidden")}const O=document.querySelector("#search-form"),P=document.querySelector(".load-more"),m=document.querySelector(".end-message");let a=1,p="",l=0;O.addEventListener("submit",async t=>{t.preventDefault();const r=t.target.elements.searchQuery.value.trim();r&&(p=r,a=1,q(),f(),m.classList.add("hidden"),await y())});P.addEventListener("click",async()=>{a+=1,await y()});async function y(){try{B();const{hits:t,totalHits:r}=await w(p,a);l=r,S(t),M(),document.querySelectorAll(".gallery-item").length<l?E():(f(),m.classList.remove("hidden")),a>1&&A()}catch(t){console.error(t)}}function A(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
