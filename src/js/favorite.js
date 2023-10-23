import axios from "axios";

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
    return response.data; // Повертаємо дані з API
  } catch (error) {
    console.error('Помилка отримання даних: ', error);
    return null;
  }
}

renderQuote();

const exData = [
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

const galleryList = document.querySelector(".gallery-list");
const galleryContainer = document.querySelector(".favorites-gallery"); 
const defaultText = document.querySelector(".js-hidden-text")
function createExerciseCards(exercises) {
    return exercises.map(({_id, bodyPart, burnedCalories, target, name }) => 
      `<li data-id="${_id}" class="test-card">
      <div class="exersise-header">
      <div>
      <p class="workout">WORKOUT</p>
        <svg width="16" height="16">
                  <use href="./img/sprite.svg#icon-dumbbell-black"></use>
                  </svg>
     
      </div>
       
       
                  <button class="exercise-btn" type="button">Start<svg width="16" height="16">
                  <use href="./img/sprite.svg#icon-dumbbell-black"></use>
                  </svg>
                  </button>
           </div>        
            <p class="exercise-name">${capitalize(name)}</p>
            <p>Burned calories:<spsn>${burnedCalories}</spsn></p>
            <p>Body part:<spsn>${bodyPart}</spsn></p>
            <p>Target:<spsn>${target}</spsn></p>
        </li>`
    ).join("");
}

function renderCards() {
  let exercises = exData

  let cards = createExerciseCards(exercises);
  galleryList.insertAdjacentHTML('beforeend', cards);
  hide(defaultText);
  show(galleryContainer);
}

renderCards()


function hide(element) {
    element.classList.add('hidden');
}

function show(element) {
    element.classList.remove('hidden');
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}