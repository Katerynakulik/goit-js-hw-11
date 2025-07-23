import{a as y,S as p,i as n}from"./assets/vendor-CRsTpldL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="51454190-e114164169ef9dafb1528e77f";function b(i){const o={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(g,{params:o}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),new Error("Sorry, there are no images matching your search query. Please try again!")})}const l=document.querySelector(".gallery");function v(i){function o({webformatURL:e,largeImageURL:t,tags:s,likes:u,views:d,comments:m,downloads:f}){return`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${e}" alt="${s}" />
        </a>
        <div class="image-describe">
        <div class="img-info">
          <b>Likes</b>
          <p>${u}</p>
        </div>
        <div class="img-info">
          <b>Views</b>
          <p>${d}</p>
        </div>
        <div class="img-info">
          <b>Comments</b>
          <p>${m}</p>
        </div>
        <div class="img-info">
          <b>Downloads</b>
          <p>${f}</p>
        </div>
        </div>
      </li>
    `}const r=i.map(o).join("");l.insertAdjacentHTML("beforeend",r),new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function L(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("visuallyhidden")}function q(){document.querySelector(".loader").classList.add("visuallyhidden")}console.log("mygallery",l);const c=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');c.addEventListener("submit",P);async function P(i){i.preventDefault();const o=w.value.trim();if(o===""){c.reset(),n.warning({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}L(),S();try{const r=await b(o);r.hits.length===0?n.info({timeout:7e3,overlay:!0,displayMode:"once",title:"Try another one",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topright"}):v(r.hits)}catch{n.error({title:"Error",message:"There is some error, please try another time",position:"topRight"})}finally{q(),c.reset()}}
//# sourceMappingURL=index.js.map
