import axios from "axios";
import { addFavoriteCards, deleteCard, getAllFavoriteCards } from "./local-storage";
import { makePaginationByItems } from './pagination.js';
import { handleOpenModalClick } from './modal-exercise';

async function renderQuote() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    let storedQuoteState = JSON.parse(localStorage.getItem("quoteData")) ?? {};

    const storedQuoteDay = storedQuoteState.day ?? 0;

    if (currentDay !== storedQuoteDay) {
        const quoteData = await serviceQuote();

        quoteData.day = currentDay;
        localStorage.setItem("quoteData", JSON.stringify(quoteData));
        storedQuoteState = quoteData;
    }

    const quoteText = document.querySelector(".quote-text"); 
    const quoteAuthor = document.querySelector(".quote-author");
    quoteText.textContent = storedQuoteState.quote; 
    quoteAuthor.textContent = storedQuoteState.author;

}

async function serviceQuote() {
  try {
    const response = await axios.get(
      `https://your-energy.b.goit.study/api/quote`
    );
    return response.data; 
  } catch (error) {
    console.error('Помилка отримання даних: ', error);
    return null;
  }
}

renderQuote();

let exData = [
  {
    "_id": "64f389465ae26083f39b17a7",
    "bodyPart": "chest",
    "equipment": "leverage machine",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0009.gif",
    "name": "assisted chest dip (kneeling)",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 329,
    "time": 3,
    "popularity": 100
  },
  {
    "_id": "64f389465ae26083f39b17c1",
    "bodyPart": "chest",
    "equipment": "barbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0036.gif",
    "name": "barbell decline wide-grip press",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 209,
    "time": 3,
    "popularity": 5
  },
  {
    "_id": "64f389465ae26083f39b1833",
    "bodyPart": "chest",
    "equipment": "cable",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0169.gif",
    "name": "cable incline bench press",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 58,
    "time": 3,
    "popularity": 0
  },
  {
    "_id": "64f389465ae26083f39b183d",
    "bodyPart": "chest",
    "equipment": "cable",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0179.gif",
    "name": "cable low fly",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 76,
    "time": 3,
    "popularity": 0
  },
  {
    "_id": "64f389465ae26083f39b189e",
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0302.gif",
    "name": "dumbbell decline fly",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 4.33,
    "burnedCalories": 67,
    "time": 3,
    "popularity": 600
  },
  {
    "_id": "64f389465ae26083f39b189f",
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0303.gif",
    "name": "dumbbell decline hammer press",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 253,
    "time": 3,
    "popularity": 1
  },
  {
    "_id": "64f389465ae26083f39b1946",
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0494.gif",
    "name": "incline reverse grip push-up",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 216,
    "time": 3,
    "popularity": 0
  },
  {
    "_id": "64f389465ae26083f39b1960",
    "bodyPart": "chest",
    "equipment": "kettlebell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0531.gif",
    "name": "kettlebell extended range one arm press on floor",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 284,
    "time": 3,
    "popularity": 0
  },
  {
    "_id": "64f389465ae26083f39b17be",
    "bodyPart": "chest",
    "equipment": "barbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0033.gif",
    "name": "barbell decline bench press",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 129,
    "time": 3,
    "popularity": 0
  },
  {
    "_id": "64f389465ae26083f39b17cc",
    "bodyPart": "chest",
    "equipment": "barbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0047.gif",
    "name": "barbell incline bench press",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 165,
    "time": 3,
    "popularity": 0
  },
  {
    "_id": "64f389465ae26083f39b1841",
    "bodyPart": "chest",
    "equipment": "cable",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0185.gif",
    "name": "cable lying fly",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 61,
    "time": 3,
    "popularity": 1
  },
  {
    "_id": "64f389465ae26083f39b187f",
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0258.gif",
    "name": "clock push-up",
    "target": "pectorals",
    "description": "These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.",
    "rating": 3,
    "burnedCalories": 48,
    "time": 3,
    "popularity": 0
  }
]

const Refs = {
  galleryList: document.querySelector(".gallery-list"),
  defaultText: document.querySelector(".js-hidden-text"),
}

function createExerciseCards(exercises) {
  
    return exercises.map(({_id, bodyPart, burnedCalories, target, name, time}) => 
      `<li data-id="${_id}" class="exercise-card ">
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
              <svg class="arrow-svg" width="16" height="16">
                <use href="./img/sprite.svg#icon-arrow"></use>
              </svg>
            </button>
        </div>  
          <div class = "exercise-tittle"> 
            <svg class="man-svg-quote" width="24" height="24">
              <use href="./img/sprite.svg#icon-icon-2"></use>
            </svg>
            <p class="favorite-exercise-name">${capitalize(name)}</p>
          </div> 
          <div class="exercice-information">
            <p class="exercise-category">Burned calories: <span>${burnedCalories}/${time}min</span></p>
            <p class="exercise-category">Body part: <span>${bodyPart}</span></p>
            <p class="exercise-category">Target: <span>${target}</span></p>
          </div>            
      </li>`
    ).join("");
}


for (const data of exData) {
  addFavoriteCards(data);
}



function renderExercises(exercises) {
  let cards = createExerciseCards(exercises);

  Refs.galleryList.innerHTML=""
  Refs.galleryList.insertAdjacentHTML('beforeend', cards);

  Refs.defaultText.style.display = 'none';
  Refs.galleryList.style.display = 'flex';
    
  const cardsEl = document.querySelectorAll(".exercise-card"); 
  for (let card of cardsEl) {
    card.addEventListener('click', handleCardClick);  
  }

  if (exercises.length === 0) {
    Refs.defaultText.style.display = 'flex';
    Refs.galleryList.style.display = 'none';    
 } 
}

let perPage = 7
window.addEventListener("resize", renderCards)
function renderCards() {
  let exercises = getAllFavoriteCards();
  console.log(exercises.length)

  if (window.innerWidth >= 768) {
    console.log(window.innerWidth)
    perPage = 10; 
  
  }
   if (window.innerWidth >= 1440) {
    console.log(window.innerWidth)
    perPage = 6; 
  
  }

  renderExercises(exercises.slice(0, perPage))

  makePaginationByItems(perPage, exercises.length).on(
    'afterMove',
    ({ page }) => {
        let start = (page-1)*perPage
      let end = page * perPage;
      
  renderExercises(exercises.slice(start, end))
    });
}

renderCards(); 

const cards = document.querySelectorAll(".exercise-card"); 

for (let card of cards) {
  card.addEventListener('click', handleCardClick);
}

async function handleCardClick(event) {
  switch (event.target.id) {
    case "dell":
      return removeCard(event);
    case "open":
      return openCard(event);
  }
}

function removeCard(event) {
    const id = event.currentTarget.dataset.id; 
  deleteCard(id);
  renderCards();  
}


async function openCard(event) {
 console.log(event.target);
      console.log(event.curentTarget);

      const id = event.currentTarget.dataset.id; 
  console.log(id) 
  
  handleOpenModalClick(event, id);

}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

// console.log(window.innerWidth)
