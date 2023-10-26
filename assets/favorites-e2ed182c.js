import{g as p,m as y,d as f,h,a as v}from"./header-fcaf2150.js";async function m(){const t=new Date().getDate();let s=JSON.parse(localStorage.getItem("quoteData"))??{};const r=s.day??0;if(t!==r){const i=await x();i.day=t,localStorage.setItem("quoteData",JSON.stringify(i)),s=i}const o=document.querySelector(".quote-text"),c=document.querySelector(".quote-author");o.textContent=s.quote,c.textContent=s.author}async function x(){try{return(await v.get("https://your-energy.b.goit.study/api/quote")).data}catch{return null}}m();const a={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};function w(e){return e.map(({_id:t,bodyPart:s,burnedCalories:r,target:o,name:c,time:i})=>`<li data-id="${t}" class="exercise-card ">
        <div class="exersise-header">
          <div class="exercise-trash">
            <p class="workout">WORKOUT</p>
          <button class="trash-btn" type="submit">
          <svg class="trash-svg"  width="16" height="16">
                <use id = "dell" href="../img/sprite.svg#icon-trash-modal"></use>
                </svg> 
          </button>              
          </div>    
            <button id = "open" class="exercise-btn" type="button">Start
              <svg id = "arrow" class="arrow-svg" width="16" height="16">
                <use href="../img/sprite.svg#icon-arrow"></use>
              </svg>
            </button>
        </div>  
          <div class = "exercise-tittle"> 
          <div class= "man-svg-thumb">
            <svg width="24" height="24">
              <use href="../img/sprite.svg#icon-icon-2"></use>
            </svg>
            </div>
            <p class="favorite-exercise-name">${S(c)}</p>
          </div> 
          <div class="exercice-information">
            <p class="exercise-category">Burned calories: <span>${r}/${i}min</span></p>
            <p class="exercise-category">Body part: <span>${s}</span></p>
            <p class="exercise-category">Target: <span>${o}</span></p>
          </div>            
      </li>`).join("")}function d(e){let t=w(e);a.galleryList.innerHTML="",a.galleryList.insertAdjacentHTML("beforeend",t),a.defaultText.style.display="none",a.galleryList.style.display="flex";const s=document.querySelectorAll(".exercise-card");for(let r of s)r.addEventListener("click",g);e.length===0&&(a.defaultText.style.display="flex",a.galleryList.style.display="none")}let n=7;window.addEventListener("resize",l);function l(){let e=p();window.innerWidth>=768&&(n=10),window.innerWidth>=1440&&(n=6),d(e.slice(0,n)),y(n,e.length).on("afterMove",({page:t})=>{let s=(t-1)*n,r=t*n;d(e.slice(s,r))})}l();const q=document.querySelectorAll(".exercise-card");for(let e of q)e.addEventListener("click",g);async function g(e){switch(e.target.id){case"dell":return C(e);case"open":return u(e);case"arrow":return u(e)}}function C(e){const t=e.currentTarget.dataset.id;f(t),l()}async function u(e){const t=e.currentTarget.dataset.id;h(e,t)}function S(e){return e[0].toUpperCase()+e.slice(1)}
