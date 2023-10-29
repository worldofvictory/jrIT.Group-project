import Pagination from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';
import axios from "axios";
import { handleOpenModalClick } from './modal-exercise';

const form = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const exercisesBack = document.querySelector(".exercises-back");
const iconSearch = document.getElementById('icon-search');
const iconX = document.getElementById('icon-x');
const filterBtn = document.querySelectorAll(".filter-btn");

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

// export function fetchExercises() {
//     const { filter, category, keyword } = filterParams;
//     fetch(`${apiUrl}/exercises?filter=${filter}&category=${category}&keyword=${keyword}&page=${activePage}&limit=${itemsPerPage}`)
//         .then(response => response.json())
//         .then(data => {
//             handleExerciseData(data);
//         })
//         .catch(error => {
//             console.error('Sorry, is not found', error);
//             return {
//                 success: false
//             }
//         });
// }

filterBtn.forEach(element => {
    element.addEventListener('click', event => {
        filterBtn.forEach(btn => btn.classList.remove('current'));
        element.classList.add('current');

        filterParams.filter = event.target.dataset.filter;
        filterParams.category = event.target.dataset.filter;
        activePage = 1;

        getExercises(element);
    });
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const searchValue = searchInput.value.toLowerCase();
    filterParams.keyword = searchValue;
    activePage = 1;
    // fetchExercises(filterParams);
});

function handleExerciseData(data) {
    console.log(data)
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
        <p class="rating">${exercise.rating}</p>
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
        <h3 class="ex-name">${exercise.name}</h3>
    </div>
    <div class="exercise-info">
        <p class="ex-info-p">Burned calories: <span class="ex-info-back">${exercise.burnedCalories} / ${exercise.time}</span></p>
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

  fetch(`${apiUrl}/exercises?${filterParam}=${name}&page=${activePage}&limit=12`)
    .then(response => response.json())
    .then(data => {
      handleExerciseData(data);
    })
    .catch(error => {
      console.error('Error while fetching exercises:', error);
    });
}

searchInput.addEventListener('focus', function() {
        iconSearch.style.display = 'none';
        iconX.style.display = 'block';
    });
searchInput.addEventListener('blur', function() {
        iconSearch.style.display = 'block';
        iconX.style.display = 'none';
        searchInput.value = '';
    });

