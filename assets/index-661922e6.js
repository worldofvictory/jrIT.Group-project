import{n as i,c as k,b as _}from"./header-e60ea0d9.js";const m=document.querySelector(".mailing_input"),n=document.querySelector(".mailing_form"),B=async e=>{try{const t=n.querySelector(".mailing_button");t.disabled=!0;const s=n.querySelector(".submit-spinner");s.classList.remove("submit-spinner_hide");const r=await fetch("https://your-energy.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(t.disabled=!1,s.classList.add("submit-spinner_hide"),r.ok){const o=await r.json();console.log(`The user has just subscribed with the email: ${e}`),n.reset(),i.Notify.success("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.")}else i.Notify.failure("Error occurred while making subscription")}catch(t){const s=n.querySelector(".mailing_button");s.disabled=!1,n.querySelector(".submit-spinner").classList.add("submit-spinner_hide"),console.error(t),i.Notify.failure("Error occurred while making subscription")}};n.addEventListener("submit",e=>{e.preventDefault(),m.checkValidity()?B(m.value):i.Notify.warning("Invalid e-mail address entered.")});const M=100,p=document.querySelector(".scroll-up"),u=document.querySelector(".scroll-up_svg_path"),a=u.getTotalLength(),q=()=>window.pageYoffset||document.documentElement.scrollTop;u.style.strokeDasharray=`${a} ${a}`;u.style.transition="stroke-dashoffset 20 ms";const P=()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=a-q()*a/e;u.style.strokeDashoffset=t};window.addEventListener("scroll",()=>{P(),q()>M?p.classList.add("scroll-up--active"):p.classList.remove("scroll-up--active")});p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const C=document.querySelector(".search-form"),c=document.querySelector(".search-input"),g=document.querySelector(".exercises-back"),E=document.getElementById("icon-search"),S=document.getElementById("icon-x"),v=document.querySelectorAll(".filter-btn"),j=document.querySelector(".filter-category-item"),$="https://your-energy.b.goit.study/api";let H="Body parts",I="Body parts",d=1;const N=12,l={filter:H,category:I,keyword:""};function A(){const{filter:e,category:t,keyword:s}=l;fetch(`${$}/exercises?filter=${e}&category=${t}&keyword=${s}&page=${d}&limit=${N}`).then(r=>r.json()).then(r=>{x()}).catch(r=>(console.error("Sorry, is not found",r),{success:!1}))}v.forEach(e=>{e.addEventListener("click",t=>{v.forEach(s=>s.classList.remove("current")),e.classList.add("current"),l.filter=t.target.dataset.filter,l.category=t.target.dataset.filter,d=1,U(e)})});C.addEventListener("submit",e=>{e.preventDefault();const t=c.value.toLowerCase();l.keyword=t,d=1,A()});function x(e){g.innerHTML="",e.length===0?g.innerHTML="Sorry, is not found":results.forEach(t=>{const s=O(t);j.addEventListener("click"),g.appendChild(s)})}function O(e){const t=document.createElement("li");return t.classList.add("exCard"),t.dataset.id=e._id,t.innerHTML=` 
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
    
    `,t}function U({filter:e,name:t}){const r={"Body parts":"bodypart",muscles:"muscles",equipment:"equipment"}[e];fetch(`${$}/exercises?${r}=${t}&page=${d}&limit=12`).then(o=>o.json()).then(o=>{x(o)}).catch(o=>{console.error("Error while fetching exercises:",o)})}c.addEventListener("focus",function(){E.style.display="none",S.style.display="block"});c.addEventListener("blur",function(){E.style.display="block",S.style.display="none",c.value=""});document.querySelector(".filter-category-item");document.querySelector(".filter-section-next");document.querySelector(".filter-section");const f=document.querySelector(".filter-category-list");async function y(e,t=1){try{return(await _.get(`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=12`)).data}catch(s){return console.error("Помилка отримання даних: ",s),null}}function h(e){return f.innerHTML="",e.map(({filter:t,name:s,imgURL:r})=>`<li class="filter-category-item "

          style = "background-image: linear-gradient(

    to right,

    rgba(47, 48, 50, 0.5),

    rgba(47, 48, 50, 0.5)

  ), url(${r});

     background-repeat: no-repeat;

    background-size: cover;

    background-position: center;

     width='335' height='225'

    >

            <div class="category-text">

              <h3 class="filter-category-title">${s}</h3>

              <p class="filter-category-descr">${t}</p>

            </div>

            </li>`).join("")}y("Body parts").then(e=>{e||(alert("We're sorry, but you've reached the end of search results."),retutn),f.insertAdjacentHTML("beforeend",h(e.results)),k(12,e.totalPages).on("afterMove",({page:t})=>{T(filter,t)})});const b=document.querySelectorAll(".filter-btn");b.forEach(e=>{e.addEventListener("click",async()=>{b.forEach(r=>r.classList.remove("current")),e.classList.add("current");const t=e.textContent.trim(),s=await y(t);k(12,s.totalPages).on("afterMove",({page:r})=>{T(t,r)}),s&&f.insertAdjacentHTML("beforeend",h(s.results))})});async function T(e,t){const s=await y(e,t);s&&f.insertAdjacentHTML("beforeend",h(s.results))}window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)};const w=document.querySelector(".quote-markup"),F=new Date,Q=F.getDate(),D=JSON.parse(localStorage.getItem("quoteData"))??{},J=D.day??0;Q!==J?function(){return fetch("https://your-energy.b.goit.study/api/quote").then(r=>{if(!r.ok)throw new Error(`Fetch error with ${r.status}: ${r.statusText}`);return r.json()})}().then(t=>{const r=new Date().getDate(),o={quote:t.quote,author:t.author,day:r};localStorage.setItem("quoteData",JSON.stringify(o)),w.innerHTML=L(t)}).catch(t=>console.log(t)):w.innerHTML=L(D);function L({author:e,quote:t}){return`
      <p class="quote-text">${t}</p>
      <p class="quote-text-author">${e}</p>`}
