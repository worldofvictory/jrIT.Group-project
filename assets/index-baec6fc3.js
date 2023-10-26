import{n as a,h as T,c as w,b as x}from"./header-57de9a26.js";const y=document.querySelector(".mailing_input"),r=document.querySelector(".mailing_form"),$=async e=>{try{const t=r.querySelector(".mailing_button");t.disabled=!0;const s=r.querySelector(".submit-spinner");s.classList.remove("submit-spinner_hide");const o=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.disabled=!1,s.classList.add("submit-spinner_hide"),o.ok){const n=await o.json();console.log(`The user has just subscribed with the email: ${e}`),r.reset(),a.Notify.success("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.")}else a.Notify.failure("Error occurred while making subscription")}catch(t){const s=r.querySelector(".mailing_button");s.disabled=!1,r.querySelector(".submit-spinner").classList.add("submit-spinner_hide"),console.error(t),a.Notify.failure("Error occurred while making subscription")}};r.addEventListener("submit",e=>{e.preventDefault(),y.checkValidity()?$(y.value):a.Notify.warning("Invalid e-mail address entered.")});const D=100,p=document.querySelector(".scroll-up"),u=document.querySelector(".scroll-up_svg_path"),l=u.getTotalLength(),k=()=>window.pageYoffset||document.documentElement.scrollTop;u.style.strokeDasharray=`${l} ${l}`;u.style.transition="stroke-dashoffset 20 ms";const _=()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=l-k()*l/e;u.style.strokeDashoffset=t};window.addEventListener("scroll",()=>{_(),k()>D?p.classList.add("scroll-up--active"):p.classList.remove("scroll-up--active")});p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const M=document.querySelector(".search-form"),i=document.querySelector(".search-input"),c=document.querySelector(".exercises-back"),L=document.getElementById("icon-search"),E=document.getElementById("icon-x"),C="https://your-energy.b.goit.study/api";h("");M.addEventListener("submit",H);i.addEventListener("input",j);function h(e){const s=["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"].map(o=>fetch(`${C}/exercises?keyword=${e}&bodypart=${o}&limit=12`).then(n=>{if(!n.ok)throw new Error("Sorry, is not found");return n.json()}));Promise.all(s).then(o=>{c.innerHTML="",o.forEach(n=>{B(n.results)})}).catch(o=>{console.error(o)})}function H(e){e.preventDefault();const t=i.value.toLowerCase();h(t)}function B(e){c.innerHTML="",e.length===0?c.innerHTML="Sorry, is not found":e.forEach(t=>{const s=I(t);s.addEventListener("click",N),c.appendChild(s)})}async function N(e){if(e.target.id!=="ok"&&e.target.id!=="icon-arrow")return;const t=e.currentTarget.dataset.id;T(e,t)}function j(){const e=i.value.toLowerCase();h(e)}function I(e){const t=document.createElement("li");return t.classList.add("exCard"),t.dataset.id=e._id,t.innerHTML=` 
    <div class="high-card"> 
    <div class="left-high-card"> 
    <div class="workout-symbol"> 
        <p class="workout-p">WORKOUT</p> 
        </div> 
    <div class="ex-rating"> 
        <p class="rating">${e.rating}</p> 
        <svg id="icon-star" width="18" height="18"> 
        <use href="./img/sprite.svg#icon-star-yellow"></use> 
        </svg> 
         </div> 
    </div> 
        <button id ="ok" class="open-modal-exercises" > 
        Start 
        <svg id="icon-arrow" width="16" height="16"> 
            <use href="./img/sprite.svg#icon-arrow"></use> 
        </svg> 
    </button> 
    </div> 
 
    <div class="exercise-name"> 
        <svg id="icon-run" width="24" height="24"> 
        <use href="./img/sprite.svg#icon-icon-run"></use> 
        </svg> 
        <h3 class="ex-name">${e.name}</h3> 
    </div> 
    <div class="exercise-info"> 
        <p class="ex-info-p">Burned calories: <span class="ex-info-back">${e.burnedCalories} / ${e.time}</span></p> 
        <p class="ex-info-p">Body part: <span class="ex-info-back">${e.bodyPart}</span></p> 
        <p class="ex-info-p last-p">Target: <span class="ex-info-back">${e.target}</span></p> 
    </div> 
    
    `,t}i.addEventListener("focus",function(){L.style.display="none",E.style.display="block"});i.addEventListener("blur",function(){L.style.display="block",E.style.display="none",i.value=""});const d=document.querySelector(".filter-category-list");async function f(e,t=1){try{return(await x.get(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=12`)).data}catch(s){return console.error("Помилка отримання даних: ",s),null}}function g(e){return d.innerHTML="",e.map(({filter:t,name:s,imgURL:o})=>`<li class="filter-category-item"
          style = "background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${o});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ">
            <div class="category-text">
              <h3 class="filter-category-title">${s}</h3>
              <p class="filter-category-descr">${t}</p>
            </div>
            </li>`).join("")}f("Body parts").then(e=>{e||(alert("We're sorry, but you've reached the end of search results."),retutn),d.insertAdjacentHTML("beforeend",g(e.results)),w(12,e.totalPages).on("afterMove",({page:t})=>{S(filter,t)})});const m=document.querySelectorAll(".filter1-btn");m.forEach(e=>{e.addEventListener("click",async()=>{m.forEach(o=>o.classList.remove("current")),e.classList.add("current");const t=e.textContent.trim(),s=await f(t);w(12,s.totalPages).on("afterMove",({page:o})=>{S(t,o)}),s&&d.insertAdjacentHTML("beforeend",g(s.results))})});async function S(e,t){const s=await f(e,t);s&&d.insertAdjacentHTML("beforeend",g(s.results))}window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)};const b=document.querySelector(".quote-markup"),O=new Date,P=O.getDate(),q=JSON.parse(localStorage.getItem("quoteData"))??{},A=q.day??0;P!==A?function(){return fetch("https://your-energy.b.goit.study/api/quote").then(o=>{if(!o.ok)throw new Error(`Fetch error with ${o.status}: ${o.statusText}`);return o.json()})}().then(t=>{const o=new Date().getDate(),n={quote:t.quote,author:t.author,day:o};localStorage.setItem("quoteData",JSON.stringify(n)),b.innerHTML=v(t)}).catch(t=>console.log(t)):b.innerHTML=v(q);function v({author:e,quote:t}){return`
      <p class="quote-text">${t}</p>
      <p class="quote-text-author">${e}</p>`}
