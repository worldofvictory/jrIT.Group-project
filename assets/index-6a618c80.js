import{n as i,c as S,b as D}from"./header-57de9a26.js";const v=document.querySelector(".mailing_input"),r=document.querySelector(".mailing_form"),_=async e=>{try{const t=r.querySelector(".mailing_button");t.disabled=!0;const s=r.querySelector(".submit-spinner");s.classList.remove("submit-spinner_hide");const o=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.disabled=!1,s.classList.add("submit-spinner_hide"),o.ok){const m=await o.json();console.log(`The user has just subscribed with the email: ${e}`),r.reset(),i.Notify.success("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.")}else i.Notify.failure("Error occurred while making subscription")}catch(t){const s=r.querySelector(".mailing_button");s.disabled=!1,r.querySelector(".submit-spinner").classList.add("submit-spinner_hide"),console.error(t),i.Notify.failure("Error occurred while making subscription")}};r.addEventListener("submit",e=>{e.preventDefault(),v.checkValidity()?_(v.value):i.Notify.warning("Invalid e-mail address entered.")});const B=100,f=document.querySelector(".scroll-up"),d=document.querySelector(".scroll-up_svg_path"),a=d.getTotalLength(),q=()=>window.pageYoffset||document.documentElement.scrollTop;d.style.strokeDasharray=`${a} ${a}`;d.style.transition="stroke-dashoffset 20 ms";const C=()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=a-q()*a/e;d.style.strokeDashoffset=t};window.addEventListener("scroll",()=>{C(),q()>B?f.classList.add("scroll-up--active"):f.classList.remove("scroll-up--active")});f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const M=document.querySelector(".search-form"),c=document.querySelector(".search-input"),u=document.querySelector(".exercises-back"),E=document.getElementById("icon-search"),$=document.getElementById("icon-x"),b=document.querySelectorAll(".filter-btn"),H=document.querySelector(".filter-category-item"),P="https://your-energy.b.goit.study/api";let I="Body parts",N="Body parts",g=1;const j=12,l={filter:I,category:N,keyword:""};function y(){const{filter:e,category:t,keyword:s}=l;fetch(`${P}/exercises?filter=${e}&category=${t}&keyword=${s}&page=${g}&limit=${j}`).then(o=>o.json()).then(o=>{A()}).catch(o=>(console.error("Sorry, is not found",o),{success:!1}))}b.forEach(e=>{e.addEventListener("click",t=>{b.forEach(s=>s.classList.remove("current")),e.classList.add("current"),l.filter=t.target.dataset.filter,l.category=t.target.dataset.filter,g=1,y()})});M.addEventListener("submit",e=>{e.preventDefault();const t=c.value.toLowerCase();l.keyword=t,g=1,y()});function A(e){u.innerHTML="",e.length===0?u.innerHTML="Sorry, is not found":e.forEach(t=>{const s=O(t);H.addEventListener("click"),u.appendChild(s)})}function O(e){const t=document.createElement("li");return t.classList.add("exCard"),t.dataset.id=e._id,t.innerHTML=` 
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
    
    `,t}c.addEventListener("focus",function(){E.style.display="none",$.style.display="block"});c.addEventListener("blur",function(){E.style.display="block",$.style.display="none",c.value=""});document.querySelector(".filter-category-item");document.querySelector(".filter-section-next");document.querySelector(".filter-section");const n=document.querySelector(".filter-category-list");async function h(e,t=1){try{return(await D.get(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=12`)).data}catch(s){return console.error("Помилка отримання даних: ",s),null}}function p(e){return n.innerHTML="",e.map(({filter:t,name:s,imgURL:o})=>`<li class="filter-category-item "

          style = "background-image: linear-gradient(

    to right,

    rgba(47, 48, 50, 0.5),

    rgba(47, 48, 50, 0.5)

  ), url(${o});

     background-repeat: no-repeat;

    background-size: cover;

    background-position: center;

     width='335' height='225'

    >

            <div class="category-text">

              <h3 class="filter-category-title">${s}</h3>

              <p class="filter-category-descr">${t}</p>

            </div>

            </li>`).join("")}h("Body parts").then(e=>{e||(alert("We're sorry, but you've reached the end of search results."),retutn),n.insertAdjacentHTML("beforeend",p(e.results)),S(12,e.totalPages).on("afterMove",({page:t})=>{x(filter,t)})});const w=document.querySelectorAll(".filter-btn");w.forEach(e=>{e.addEventListener("click",async()=>{w.forEach(o=>o.classList.remove("current")),e.classList.add("current");const t=e.textContent.trim(),s=await h(t);S(12,s.totalPages).on("afterMove",({page:o})=>{x(t,o)}),s&&n.insertAdjacentHTML("beforeend",p(s.results))})});async function x(e,t){const s=await h(e,t);s&&n.insertAdjacentHTML("beforeend",p(s.results))}const U=document.querySelector(".filter-container-header"),F=document.querySelector(".tui-pagination");n.addEventListener("click",Q);function Q(e){n.innerHTML="",U.classList.add("is-hidden"),F.classList.add("is-hidden"),y()}window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)};const L=document.querySelector(".quote-markup"),J=new Date,R=J.getDate(),T=JSON.parse(localStorage.getItem("quoteData"))??{},W=T.day??0;R!==W?function(){return fetch("https://your-energy.b.goit.study/api/quote").then(o=>{if(!o.ok)throw new Error(`Fetch error with ${o.status}: ${o.statusText}`);return o.json()})}().then(t=>{const o=new Date().getDate(),m={quote:t.quote,author:t.author,day:o};localStorage.setItem("quoteData",JSON.stringify(m)),L.innerHTML=k(t)}).catch(t=>console.log(t)):L.innerHTML=k(T);function k({author:e,quote:t}){return`
      <p class="quote-text">${t}</p>
      <p class="quote-text-author">${e}</p>`}
