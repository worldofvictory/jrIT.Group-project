import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { makePagination } from './pagination.js';

const gallery = document.querySelector('.filter-category-list');

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
      ({ filter, name, imgURL }) => `<li class="filter-category-item">
              <img
                class="filter-category-img"
                src="${imgURL}"
                alt=""
                loading="lazy"
                 width='335' height='225'
              />
            <div class="category-text">
              <h3 class="filter-category-title">${name}</h3>
              <p class="filter-category-descr">${filter}</p>
            </div>
            </li>`
    )
    .join('');
}

// Початкова фільтрація "Body parts"

fetchData('Body parts').then(data => {
  if (!data) {
    alert("We're sorry, but you've reached the end of search results.");
    retutn;
  }
  gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));

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
    }
  });
});

async function renderCards(filter, page) {
  const data = await fetchData(filter, page);
  if (data) {
    gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));
  }
}
