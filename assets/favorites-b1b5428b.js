import{a as h,g,m as f,d as m,h as b,b as y}from"./header-e60ea0d9.js";async function w(){const t=new Date().getDate();let s=JSON.parse(localStorage.getItem("quoteData"))??{};const r=s.day??0;if(t!==r){const o=await q();o.day=t,localStorage.setItem("quoteData",JSON.stringify(o)),s=o}const n=document.querySelector(".quote-text"),l=document.querySelector(".quote-author");n.textContent=s.quote,l.textContent=s.author}async function q(){try{return(await y.get("https://your-energy.b.goit.study/api/quote")).data}catch{return null}}w();let v=[{_id:"64f389465ae26083f39b17a7",bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:329,time:3,popularity:100},{_id:"64f389465ae26083f39b17c1",bodyPart:"chest",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0036.gif",name:"barbell decline wide-grip press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:209,time:3,popularity:5},{_id:"64f389465ae26083f39b1833",bodyPart:"chest",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0169.gif",name:"cable incline bench press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:58,time:3,popularity:0},{_id:"64f389465ae26083f39b183d",bodyPart:"chest",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0179.gif",name:"cable low fly",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:76,time:3,popularity:0},{_id:"64f389465ae26083f39b189e",bodyPart:"chest",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0302.gif",name:"dumbbell decline fly",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:4.33,burnedCalories:67,time:3,popularity:600},{_id:"64f389465ae26083f39b189f",bodyPart:"chest",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0303.gif",name:"dumbbell decline hammer press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:253,time:3,popularity:1},{_id:"64f389465ae26083f39b1946",bodyPart:"chest",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0494.gif",name:"incline reverse grip push-up",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:216,time:3,popularity:0},{_id:"64f389465ae26083f39b1960",bodyPart:"chest",equipment:"kettlebell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0531.gif",name:"kettlebell extended range one arm press on floor",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:284,time:3,popularity:0},{_id:"64f389465ae26083f39b17be",bodyPart:"chest",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0033.gif",name:"barbell decline bench press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:129,time:3,popularity:0},{_id:"64f389465ae26083f39b17cc",bodyPart:"chest",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0047.gif",name:"barbell incline bench press",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:165,time:3,popularity:0},{_id:"64f389465ae26083f39b1841",bodyPart:"chest",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0185.gif",name:"cable lying fly",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:61,time:3,popularity:1},{_id:"64f389465ae26083f39b187f",bodyPart:"chest",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0258.gif",name:"clock push-up",target:"pectorals",description:"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",rating:3,burnedCalories:48,time:3,popularity:0}];const a={galleryList:document.querySelector(".gallery-list"),defaultText:document.querySelector(".js-hidden-text")};function x(e){return e.map(({_id:t,bodyPart:s,burnedCalories:r,target:n,name:l,time:o})=>`<li data-id="${t}" class="exercise-card ">
        <div class="exersise-header">
          <div class="exercise-trash">
            <p class="workout">WORKOUT</p>
          <button class="trash-btn" type="submit">
          <svg class="trash-svg"  width="16" height="16">
                <use id = "dell" href="./img/sprite.svg#icon-trash-modal"></use>
                </svg> 
          </button>
                  
          </div>    
            <button id = "open" class="exercise-btn" type="button">Start
              <svg id = "arrow" class="arrow-svg" width="16" height="16">
                <use href="./img/sprite.svg#icon-arrow"></use>
              </svg>
            </button>
        </div>  
          <div class = "exercise-tittle"> 
            <svg class="man-svg-quote" width="24" height="24">
              <use href="./img/sprite.svg#icon-icon-2"></use>
            </svg>
            <p class="favorite-exercise-name">${B(l)}</p>
          </div> 
          <div class="exercice-information">
            <p class="exercise-category">Burned calories: <span>${r}/${o}min</span></p>
            <p class="exercise-category">Body part: <span>${s}</span></p>
            <p class="exercise-category">Target: <span>${n}</span></p>
          </div>            
      </li>`).join("")}for(const e of v)h(e);function d(e){let t=x(e);a.galleryList.innerHTML="",a.galleryList.insertAdjacentHTML("beforeend",t),a.defaultText.style.display="none",a.galleryList.style.display="flex";const s=document.querySelectorAll(".exercise-card");for(let r of s)r.addEventListener("click",p);e.length===0&&(a.defaultText.style.display="flex",a.galleryList.style.display="none")}let i=7;window.addEventListener("resize",c);function c(){let e=g();window.innerWidth>=768&&(i=10),window.innerWidth>=1440&&(i=6),d(e.slice(0,i)),f(i,e.length).on("afterMove",({page:t})=>{let s=(t-1)*i,r=t*i;d(e.slice(s,r))})}c();const C=document.querySelectorAll(".exercise-card");for(let e of C)e.addEventListener("click",p);async function p(e){switch(e.target.id){case"dell":return T(e);case"open":return u(e);case"arrow":return u(e)}}function T(e){const t=e.currentTarget.dataset.id;m(t),c()}async function u(e){const t=e.currentTarget.dataset.id;b(e,t)}function B(e){return e[0].toUpperCase()+e.slice(1)}
