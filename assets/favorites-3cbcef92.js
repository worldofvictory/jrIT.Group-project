import{g,m as f,d as h,p as x,h as m,a as v,i as l}from"./header-8cc453f6.js";async function w(){const t=new Date().getDate();let s=JSON.parse(localStorage.getItem("quoteData"))??{};const r=s.day??0;if(t!==r){const i=await q();i.day=t,localStorage.setItem("quoteData",JSON.stringify(i)),s=i}const o=document.querySelector(".quote-text"),c=document.querySelector(".quote-author");o.textContent=s.quote,c.textContent=s.author}async function q(){try{return(await v.get("https://your-energy.b.goit.study/api/quote")).data}catch{return null}}w();const a={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};function C(e){return e.map(({_id:t,bodyPart:s,burnedCalories:r,target:o,name:c,time:i})=>`<li data-id="${t}" class="exercise-card ">
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
            <p class="favorite-exercise-name">${L(c)}</p>
          </div> 
          <div class="exercice-information">
            <p class="exercise-category">Burned calories: <span>${r}/${i}min</span></p>
            <p class="exercise-category">Body part: <span>${s}</span></p>
            <p class="exercise-category">Target: <span>${o}</span></p>
          </div>            
      </li>`).join("")}function u(e){let t=C(e);a.galleryList.innerHTML="",a.galleryList.insertAdjacentHTML("beforeend",t),a.defaultText.style.display="none",a.galleryList.style.display="flex";const s=document.querySelectorAll(".exercise-card");for(let r of s)r.addEventListener("click",p);e.length===0&&(a.defaultText.style.display="flex",a.galleryList.style.display="none")}let n=7;window.addEventListener("resize",d);function d(){let e=g();window.innerWidth>=768&&(n=10),window.innerWidth>=1440&&(n=6),u(e.slice(0,n)),f(n,e.length).on("afterMove",({page:t})=>{let s=(t-1)*n,r=t*n;u(e.slice(s,r))})}d();const S=document.querySelectorAll(".exercise-card");for(let e of S)e.addEventListener("click",p);async function p(e){switch(e.target.id){case"dell":return b(e);case"open":return y(e);case"arrow":return y(e)}}function b(e){const t=e.currentTarget.dataset.id;h(t),x(t,e),d()}async function y(e){const t=e.currentTarget.dataset.id;m(e,t)}function L(e){return e[0].toUpperCase()+e.slice(1)}
