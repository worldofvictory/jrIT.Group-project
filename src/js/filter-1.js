import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { makePagination } from './pagination.js';
import { getExercises } from './filter-2.js';

const gallery = document.querySelector('.filter-category-list');
const exerciseContainer = document.querySelector('.exercises-back');
const currentExerciseContainer = document.querySelector('.current-exercises');

// Функція для отримання даних з API
async function fetchData(filter, page = 1) {
  try {
    const response = await axios.get(
      `https://your-energy.b.goit.study/api/filters?filter=${filter}&page=${page}&limit=12`
    );
    return response.data; // Повертаємо дані з API
  } catch (error) {
    console.error('Помилка отримання даних: ', error);
    return null;
  }
}

function createMarcup(arr) {
  gallery.innerHTML = '';
  return arr
    .map(
      ({ filter, name, imgURL }) => `<li class="filter-category-item"
          data-name="${name}"
          data-filter="${filter}"
          style = "background-image: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ">
            <div class="category-text">
              <h3 class="filter-category-title">${name}</h3>
              <p class="filter-category-descr">${filter}</p>
            </div>
            </li>`
    )
    .join('');
}

// <img
//   class="filter-category-img"
//   src="${imgURL}"
//   alt=""
//   loading="lazy"
//    width='335' height='225'
// />

// Початкова фільтрація "Body parts"

fetchData('Body parts').then(data => {
  if (!data) {
    alert("We're sorry, but you've reached the end of search results.");
    retutn;
  }
  gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));
  assignCardsClick()
  
  makePagination(12, data.totalPages).on('afterMove', ({ page }) => {
    renderCards(filter, page);
  });
});

// Обробники подій для кнопок фільтрації
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', async () => {
    // Видаляємо клас 'current' з усіх кнопок
    filterButtons.forEach(btn => btn.classList.remove('current'));

    // Встановлюємо клас 'current' на натиснуту кнопку
    button.classList.add('current');

    // Отримуємо значення фільтру з тексту кнопки
    const filter = button.textContent.trim();
    const data = await fetchData(filter);

    makePagination(12, data.totalPages).on('afterMove', ({ page }) => {
      renderCards(filter, page);
    });
    if (data) {
      gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));

      assignCardsClick()
    }
  });
});

async function renderCards(filter, page) {
  const data = await fetchData(filter, page);
  if (data) {
    await gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));

    assignCardsClick()
  }
}

function assignCardsClick() {
  setDisplayCards(true)

  const cards = document.querySelectorAll(".filter-category-item")

  for (const card of cards) {
    card.addEventListener("click", function(event) {
      const name = event.currentTarget.dataset.name
      const filter = event.currentTarget.dataset.filter

      setDisplayCards(false)
      getExercises({ filter, name })

      currentExerciseContainer.innerHTML = `<p class="current-exercises"><span>/</span>${name}</p>`
    })
  }
}

function setDisplayCards(isFilter) {
  if (isFilter) {
    gallery.style.display = 'flex';
    exerciseContainer.style.display = 'none';
    currentExerciseContainer.style.display = 'none';
  } else {
    gallery.style.display = 'none';
    exerciseContainer.style.display = 'flex';
    currentExerciseContainer.style.display = 'flex';
  }
}
