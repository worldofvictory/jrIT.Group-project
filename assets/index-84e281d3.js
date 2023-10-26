import{n as d,h as D,c as E,b as _}from"./menu-05026de8.js";const k=document.querySelector(".mailing_input"),r=document.querySelector(".mailing_form"),B=async e=>{try{const t=r.querySelector(".mailing_button");t.disabled=!0;const s=r.querySelector(".submit-spinner");s.classList.remove("submit-spinner_hide");const n=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.disabled=!1,s.classList.add("submit-spinner_hide"),n.ok){const o=await n.json();console.log(`The user has just subscribed with the email: ${e}`),r.reset(),d.Notify.success("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.")}else d.Notify.failure("Error occurred while making subscription")}catch(t){const s=r.querySelector(".mailing_button");s.disabled=!1,r.querySelector(".submit-spinner").classList.add("submit-spinner_hide"),console.error(t),d.Notify.failure("Error occurred while making subscription")}};r.addEventListener("submit",e=>{e.preventDefault(),k.checkValidity()?B(k.value):d.Notify.warning("Invalid e-mail address entered.")});const M=100,p=document.querySelector(".scroll-up"),f=document.querySelector(".scroll-up_svg_path"),h=f.getTotalLength(),S=()=>window.pageYoffset||document.documentElement.scrollTop;f.style.strokeDasharray=`${h} ${h}`;f.style.transition="stroke-dashoffset 20 ms";const I=()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=h-S()*h/e;f.style.strokeDashoffset=t};window.addEventListener("scroll",()=>{I(),S()>M?p.classList.add("scroll-up--active"):p.classList.remove("scroll-up--active")});p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const i={homeLink:document.getElementById("link1"),favoriteLink:document.getElementById("link2")},C=window.location.href;C.includes("/favorites.html")?(i.homeLink.classList.remove("h-link-active"),i.homeLink.classList.add("h-link-inactive"),i.favoriteLink.classList.remove("h-link-inactive"),i.favoriteLink.classList.add("h-link-active")):(i.homeLink.classList.remove("h-link-inactive"),i.homeLink.classList.add("h-link-active"),i.favoriteLink.classList.remove("h-link-active"),i.favoriteLink.classList.add("h-link-inactive"));const H=document.querySelector(".search-form"),a=document.querySelector(".search-input"),u=document.querySelector(".exercises-back"),q=document.getElementById("icon-search"),T=document.getElementById("icon-x"),N="https://your-energy.b.goit.study/api";g("");H.addEventListener("submit",j);a.addEventListener("input",A);function g(e){const s=["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"].map(n=>fetch(`${N}/exercises?keyword=${e}&bodypart=${n}&limit=12`).then(o=>{if(!o.ok)throw new Error("Sorry, is not found");return o.json()}));Promise.all(s).then(n=>{u.innerHTML="",n.forEach(o=>{O(o.results)})}).catch(n=>{console.error(n)})}function j(e){e.preventDefault();const t=a.value.toLowerCase();g(t)}function O(e){u.innerHTML="",e.length===0?u.innerHTML="Sorry, is not found":e.forEach(t=>{const s=U(t);s.addEventListener("click",P),u.appendChild(s)})}async function P(e){if(e.target.id!=="ok"&&e.target.id!=="icon-arrow")return;const t=e.currentTarget.dataset.id;D(e,t)}function A(){const e=a.value.toLowerCase();g(e)}function U(e){const t=document.createElement("li");return t.classList.add("exCard"),t.dataset.id=e._id,t.innerHTML=` 
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
    
    `,t}a.addEventListener("focus",function(){q.style.display="none",T.style.display="block"});a.addEventListener("blur",function(){q.style.display="block",T.style.display="none",a.value=""});const m=document.querySelector(".filter-category-list");async function y(e,t=1){try{return(await _.get(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=12`)).data}catch(s){return console.error("Помилка отримання даних: ",s),null}}function v(e){return m.innerHTML="",e.map(({filter:t,name:s,imgURL:n})=>`<li class="filter-category-item"
          style = "background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ">
            <div class="category-text">
              <h3 class="filter-category-title">${s}</h3>
              <p class="filter-category-descr">${t}</p>
            </div>
            </li>`).join("")}y("Body parts").then(e=>{e||(alert("We're sorry, but you've reached the end of search results."),retutn),m.insertAdjacentHTML("beforeend",v(e.results)),E(12,e.totalPages).on("afterMove",({page:t})=>{x(filter,t)})});const L=document.querySelectorAll(".filter1-btn");L.forEach(e=>{e.addEventListener("click",async()=>{L.forEach(n=>n.classList.remove("current")),e.classList.add("current");const t=e.textContent.trim(),s=await y(t);E(12,s.totalPages).on("afterMove",({page:n})=>{x(t,n)}),s&&m.insertAdjacentHTML("beforeend",v(s.results))})});async function x(e,t){const s=await y(e,t);s&&m.insertAdjacentHTML("beforeend",v(s.results))}window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)};const c=document.getElementById("link1"),l=document.getElementById("link2");c.addEventListener("click",e=>{c.classList.add("h-link-active"),c.classList.remove("h-link-inactive"),l.classList.remove("h-link-active"),l.classList.add("h-link-inactive")});l.addEventListener("click",e=>{l.classList.add("h-link-active"),l.classList.remove("h-link-inactive"),c.classList.remove("h-link-active"),c.classList.add("h-link-inactive")});const b=document.querySelector(".quote-markup"),Q=new Date,F=Q.getDate(),$=JSON.parse(localStorage.getItem("quoteData"))??{},J=$.day??0;F!==J?function(){return fetch("https://your-energy.b.goit.study/api/quote").then(n=>{if(!n.ok)throw new Error(`Fetch error with ${n.status}: ${n.statusText}`);return n.json()})}().then(t=>{const n=new Date().getDate(),o={quote:t.quote,author:t.author,day:n};localStorage.setItem("quoteData",JSON.stringify(o)),b.innerHTML=w(t)}).catch(t=>console.log(t)):b.innerHTML=w($);function w({author:e,quote:t}){return`
      <p class="quote-text">${t}</p>
      <p class="quote-text-author">${e}</p>`}
