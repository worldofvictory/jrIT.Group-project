import Pagination from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';

const form = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const exercisesBack = document.querySelector(".exercises-back");
const exercisesInform = document.querySelector(".exercises-inform");

const apiUrl = "https://your-energy.b.goit.study/api";

fetchExercises("");

form.addEventListener('submit', searchExercises);

function fetchExercises(keyword) {
    const categories = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];
    
    const promises = categories.map(category => {
        return fetch(`${apiUrl}/exercises?keyword=${keyword}&bodypart=${category}&limit=12`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Sorry, is not found');
                }
                return response.json();
            });
    })
        Promise.all(promises)
        .then(data => {
            exercisesBack.innerHTML = "";
            data.forEach(categoryData => {
                handleExerciseData(categoryData.results);
            });
        })
        .catch(error => {
            console.error(error);
        });
}


function searchExercises(event) {
    event.preventDefault();
    const searchValue = searchInput.value.toLowerCase();

    fetchExercises(searchValue);
}

function handleExerciseData(results) {
    exercisesBack.innerHTML = "";
    if (results.length === 0) {
        exercisesBack.innerHTML = "Sorry, is not found";
    } else {
        results.forEach((exercise) => {
            const infoCard = createInfoCard(exercise);
            exercisesBack.appendChild(infoCard);
        });
    }
}

function createInfoCard(exercise) {
    const exerciseCard = document.createElement("li");
    exerciseCard.classList.add("exCard");

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
    <div class="open-modal-exercises" >
        <button class="filter-btn-ex" type="button"><p class="start-btn">Start</p><svg id="icon-arrow" width="16" height="16">
            <use href="./img/sprite.svg#icon-arrow"></use>
        </svg></button>
    </div>
        <div class="open-modal-exercises" >
        
    </div>
    </div>
    
    </div>
    <div class="exercise-name">
        <svg id="icon-run" width="24" height="24">
        <use href="./img/sprite.svg#icon-icon-run"></use>
        </svg>
        <h3 class="ex-name">${exercise.name}</h3>
    </div>
    <div class="exercise-info">
        <p class="ex-info-p">Burned calories: <span class="ex-info-back">${exercise.burnedCalories} / ${exercise.time}</p>
        <p class="ex-info-p">Body part: <span class="ex-info-back">${exercise.bodyPart}</p>
        <p class="ex-info-p last-p">Target: <span class="ex-info-back">${exercise.target}</p>
    </div>
    `;
    return exerciseCard;
}