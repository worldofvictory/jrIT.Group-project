import{g as p,m as f,d as h,h as x,a as v,i as l}from"./header-00f9db10.js";async function m(){const t=new Date().getDate();let r=JSON.parse(localStorage.getItem("quoteData"))??{};const s=r.day??0;if(t!==s){const i=await w();i.day=t,localStorage.setItem("quoteData",JSON.stringify(i)),r=i}const o=document.querySelector(".quote-text"),c=document.querySelector(".quote-author");o.textContent=r.quote,c.textContent=r.author}async function w(){try{return(await v.get("https://your-energy.b.goit.study/api/quote")).data}catch{return null}}m();const a={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};function q(e){return e.map(({_id:t,bodyPart:r,burnedCalories:s,target:o,name:c,time:i})=>`<li data-id="${t}" class="exercise-card ">
        <div class="exersise-header">
          <div class="exercise-trash">
            <p class="workout">WORKOUT</p>
          <button class="trash-btn" type="submit">
          <svg class="trash-svg"  width="16" height="16">
                <use id = "dell" href="${l}#icon-trash-modal"></use>
                </svg> 
          </button>              
          </div>    
            <button id = "open" class="exercise-btn" type="button">Start
              <svg id = "arrow" class="arrow-svg" width="16" height="16">
                <use href="${l}#icon-arrow"></use>
              </svg>
            </button>
        </div>  
          <div class = "exercise-tittle"> 
          <div class= "man-svg-thumb">
            <svg width="24" height="24">
              <use href="${l}#icon-icon-2"></use>
            </svg>
            </div>
            <p class="favorite-exercise-name">${b(c)}</p>
          </div> 
          <div class="exercice-information">
            <p class="exercise-category">Burned calories: <span>${s}/${i}min</span></p>
            <p class="exercise-category">Body part: <span>${r}</span></p>
            <p class="exercise-category">Target: <span>${o}</span></p>
          </div>            
      </li>`).join("")}function u(e){let t=q(e);a.galleryList.innerHTML="",a.galleryList.insertAdjacentHTML("beforeend",t),a.defaultText.style.display="none",a.galleryList.style.display="flex";const r=document.querySelectorAll(".exercise-card");for(let s of r)s.addEventListener("click",g);e.length===0&&(a.defaultText.style.display="flex",a.galleryList.style.display="none")}let n=7;window.addEventListener("resize",d);function d(){let e=p();window.innerWidth>=768&&(n=10),window.innerWidth>=1440&&(n=6),u(e.slice(0,n)),f(n,e.length).on("afterMove",({page:t})=>{let r=(t-1)*n,s=t*n;u(e.slice(r,s))})}d();const C=document.querySelectorAll(".exercise-card");for(let e of C)e.addEventListener("click",g);async function g(e){switch(e.target.id){case"dell":return S(e);case"open":return y(e);case"arrow":return y(e)}}function S(e){const t=e.currentTarget.dataset.id;h(t),d()}async function y(e){const t=e.currentTarget.dataset.id;x(e,t)}function b(e){return e[0].toUpperCase()+e.slice(1)}
