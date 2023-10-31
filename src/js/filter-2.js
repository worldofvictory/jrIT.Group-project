import icon from '../img/sprite.svg';
import { makePagination } from './pagination.js';
import { handleOpenModalClick } from './modal-exercise';
import {  throttle } from 'lodash';

const form = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const exercisesBack = document.querySelector(".exercises-back");
const iconSearch = document.getElementById('icon-search');
const iconX = document.getElementById('icon-x');

form.style.display = 'none';

const apiUrl = "https://your-energy.b.goit.study/api";

let activeFilter = 'Body parts';
let activeCategory = 'Body parts';
let activePage = 1;
const itemsPerPage = 12;

const filterParams = {
    filter: activeFilter,
    category: activeCategory,
    keyword: '',
};

// searchInput.addEventListener('input', function (event) {
//   const searchValue = event.target.value.toLowerCase();
//   filterParams.keyword = searchValue;
//   startExercises(searchValue);
//   });

searchInput.addEventListener('input', throttle(onInputChange, 700));


function onInputChange(event)  {
  const searchValue = event.target.value.toLowerCase();

  filterParams.keyword = searchValue;
  startExercises(searchValue);
}

function handleExerciseData(data) {

    exercisesBack.innerHTML = "";
    if (data.results.length === 0) {
        exercisesBack.innerHTML = "Sorry, is not found";
    } else {
        data.results.forEach((exercise) => {
            const infoCard = createInfoCard(exercise);

          infoCard.addEventListener('click', onStartClick)
          exercisesBack.appendChild(infoCard);
         
        });
    }
}

async function onStartClick(event) {
    if (event.target.id !== "ok" && event.target.id !== "icon-arrow") {
        return; 
    }

    const id = event.currentTarget.dataset.id; 
       handleOpenModalClick(event, id);
}

function createInfoCard(exercise) {
    const exerciseCard = document.createElement("li");
    exerciseCard.classList.add("exCard");
    exerciseCard.dataset.id = exercise._id; 

    exerciseCard.innerHTML = `
    <div class="high-card">
    <div class="left-high-card">
    <div class="workout-symbol">
        <p class="workout-p">WORKOUT</p>
        </div>
    <div class="ex-rating">
        <p class="rating">${exercise.rating.toFixed(1)}</p>
        <svg id="icon-star" width="18" height="18">
        <use href="${icon}#icon-star-yellow"></use>
        </svg>
         </div>
    </div>
        <button id ="ok" class="open-modal-exercises" >
        Start
        <svg id="icon-arrow" width="16" height="16">
            <use href="${icon}#icon-arrow"></use>
        </svg>
    </button>
    </div>

    <div class="exercise-name">
      <div>
        <svg id="icon-run" width="24" height="24">
        <use href="${icon}#icon-icon-run"></use>
        </svg>
      </div>
        <h3 class="ex-name">${capitalize(exercise.name)}</h3>
    </div>
    <div class="exercise-info">
        <p class="ex-info-p">Burned calories: <span class="ex-info-back">${exercise.burnedCalories}/${exercise.time}min</span></p>
        <p class="ex-info-p">Body part: <span class="ex-info-back">${exercise.bodyPart}</span></p>
        <p class="ex-info-p last-p">Target: <span class="ex-info-back">${exercise.target}</span></p>
    </div>

    `;


    return exerciseCard;
}



export function getExercises({ filter, name }) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    'muscles': 'muscles',
    'equipment': 'equipment'
  };
  const filterParam = filterParamMap[filter];

  filterParams.filter = filter
  filterParams.category = name

  fetch(`${apiUrl}/exercises?${filterParam}=${name}&page=${activePage}&limit=12`)
    .then(response => response.json())
    .then(data => {
      
      makePagination(12, data.totalPages).on(
        'afterMove',
        ({ page }) => {
          getExercisesPage({filter, name, page})
        });
      
      handleExerciseData(data);
    })
    .catch(error => {
      console.error('Error while fetching exercises:', error);
    });
}


function getExercisesPage({ filter, name, page }) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    'muscles': 'muscles',
    'equipment': 'equipment'
  };
  const filterParam = filterParamMap[filter];

  fetch(`${apiUrl}/exercises?${filterParam}=${name}&page=${page}&limit=12`)
    .then(response => response.json())
    .then(data => {
      handleExerciseData(data);
    })
    .catch(error => {
      console.error('Error while fetching exercises:', error);
    });
} 



function startExercises(keyword) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    'muscles': 'muscles',
    'equipment': 'equipment'
  };

  const filter = filterParams.filter
  const name = filterParams.category

  console.log(filter, name)

  const filterParam = filterParamMap[filter];

  fetch(`${apiUrl}/exercises?${filterParam}=${name}&keyword=${keyword}&page=1&limit=${itemsPerPage}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      }
      return response.json();
    })
    .then(data => {
      handleExerciseData(data);
    })
    .catch(error => {
      console.error('Sorry, is not found', error);
    });
}

// searchInput.addEventListener('focus', function() {
//         iconSearch.style.display = 'none';
//         iconX.style.display = 'block';
//     });
// searchInput.addEventListener('blur', function() {
//         iconSearch.style.display = 'block';
//         iconX.style.display = 'none';
//         searchInput.value = '';
//     });

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}