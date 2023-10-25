import{n as l,h as D,c as L,b as $}from"./menu-73da8f5f.js";const v=document.querySelector(".mailing_input"),r=document.querySelector(".mailing_form"),_=async e=>{try{const t=r.querySelector(".mailing_button");t.disabled=!0;const s=r.querySelector(".submit-spinner");s.classList.remove("submit-spinner_hide");const n=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.disabled=!1,s.classList.add("submit-spinner_hide"),n.ok){const o=await n.json();console.log(`The user has just subscribed with the email: ${e}`),r.reset(),l.Notify.success("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.")}else l.Notify.failure("Error occurred while making subscription")}catch(t){const s=r.querySelector(".mailing_button");s.disabled=!1,r.querySelector(".submit-spinner").classList.add("submit-spinner_hide"),console.error(t),l.Notify.failure("Error occurred while making subscription")}};r.addEventListener("submit",e=>{e.preventDefault(),v.checkValidity()?_(v.value):l.Notify.warning("Invalid e-mail address entered.")});const M=100,f=document.querySelector(".scroll-up"),h=document.querySelector(".scroll-up_svg_path"),u=h.getTotalLength(),E=()=>window.pageYoffset||document.documentElement.scrollTop;h.style.strokeDasharray=`${u} ${u}`;h.style.transition="stroke-dashoffset 20 ms";const B=()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=u-E()*u/e;h.style.strokeDashoffset=t};window.addEventListener("scroll",()=>{B(),E()>M?f.classList.add("scroll-up--active"):f.classList.remove("scroll-up--active")});f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const C=document.querySelector(".search-form"),i=document.querySelector(".search-input"),d=document.querySelector(".exercises-back"),S=document.getElementById("icon-search"),q=document.getElementById("icon-x"),H="https://your-energy.b.goit.study/api";g("");C.addEventListener("submit",I);i.addEventListener("input",O);function g(e){const s=["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"].map(n=>fetch(`${H}/exercises?keyword=${e}&bodypart=${n}&limit=12`).then(o=>{if(!o.ok)throw new Error("Sorry, is not found");return o.json()}));Promise.all(s).then(n=>{d.innerHTML="",n.forEach(o=>{N(o.results)})}).catch(n=>{console.error(n)})}function I(e){e.preventDefault();const t=i.value.toLowerCase();g(t)}function N(e){d.innerHTML="",e.length===0?d.innerHTML="Sorry, is not found":e.forEach(t=>{const s=P(t);s.addEventListener("click",j),d.appendChild(s)})}async function j(e){if(e.target.id!=="ok"&&e.target.id!=="icon-arrow")return;const t=e.currentTarget.dataset.id;D(e,t)}function O(){const e=i.value.toLowerCase();g(e)}function P(e){const t=document.createElement("li");return t.classList.add("exCard"),t.dataset.id=e._id,t.innerHTML=` 
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
    
    `,t}i.addEventListener("focus",function(){S.style.display="none",q.style.display="block"});i.addEventListener("blur",function(){S.style.display="block",q.style.display="none",i.value=""});const p=document.querySelector(".filter-category-list");async function m(e,t=1){try{return(await $.get(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=12`)).data}catch(s){return console.error("Помилка отримання даних: ",s),null}}function y(e){return p.innerHTML="",e.map(({filter:t,name:s,imgURL:n})=>`<li class="filter-category-item"
          style = "background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${n});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ">
            <div class="category-text">
              <h3 class="filter-category-title">${s}</h3>
              <p class="filter-category-descr">${t}</p>
            </div>
            </li>`).join("")}m("Body parts").then(e=>{e||(alert("We're sorry, but you've reached the end of search results."),retutn),p.insertAdjacentHTML("beforeend",y(e.results)),L(12,e.totalPages).on("afterMove",({page:t})=>{T(filter,t)})});const b=document.querySelectorAll(".filter1-btn");b.forEach(e=>{e.addEventListener("click",async()=>{b.forEach(n=>n.classList.remove("current")),e.classList.add("current");const t=e.textContent.trim(),s=await m(t);L(12,s.totalPages).on("afterMove",({page:n})=>{T(t,n)}),s&&p.insertAdjacentHTML("beforeend",y(s.results))})});async function T(e,t){const s=await m(e,t);s&&p.insertAdjacentHTML("beforeend",y(s.results))}window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)};const a=document.getElementById("link1"),c=document.getElementById("link2");a.addEventListener("click",e=>{e.preventDefault(),a.classList.add("h-link-active"),a.classList.remove("h-link-inactive"),c.classList.remove("h-link-active"),c.classList.add("h-link-inactive")});c.addEventListener("click",e=>{e.preventDefault(),c.classList.add("h-link-active"),c.classList.remove("h-link-inactive"),a.classList.remove("h-link-active"),a.classList.add("h-link-inactive")});const k=document.querySelector(".quote-markup"),A=new Date,U=A.getDate(),x=JSON.parse(localStorage.getItem("quoteData"))??{},Q=x.day??0;U!==Q?function(){return fetch("https://your-energy.b.goit.study/api/quote").then(n=>{if(!n.ok)throw new Error(`Fetch error with ${n.status}: ${n.statusText}`);return n.json()})}().then(t=>{const n=new Date().getDate(),o={quote:t.quote,author:t.author,day:n};localStorage.setItem("quoteData",JSON.stringify(o)),k.innerHTML=w(t)}).catch(t=>console.log(t)):k.innerHTML=w(x);function w({author:e,quote:t}){return`
      <p class="quote-text">${t}</p>
      <p class="quote-text-author">${e}</p>`}
