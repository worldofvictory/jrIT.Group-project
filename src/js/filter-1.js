import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { makePagination } from './pagination.js';
import { fetchExercises } from './filter-2.js';
import { getExercises } from './filter-2.js';
const filterCategoryItem = document.querySelector(".filter-category-item");
const filterSectionNext = document.querySelector(".filter-section-next");
const filterSection = document.querySelector(".filter-section");

const gallery = document.querySelector('.filter-category-list');

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

      ({ filter, name, imgURL }) => `<li class="filter-category-item "

          style = "background-image: linear-gradient(

    to right,

    rgba(47, 48, 50, 0.5),

    rgba(47, 48, 50, 0.5)

  ), url(${imgURL});

     background-repeat: no-repeat;

    background-size: cover;

    background-position: center;

     width='335' height='225'

    >

            <div class="category-text">

              <h3 class="filter-category-title">${name}</h3>

              <p class="filter-category-descr">${filter}</p>

            </div>

            </li>`

    )

    .join('');

}
             /* <img
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
*/
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

function openExerciseCard() { 
  document.querySelector('.filterCategoryItem').addEventListener('click', function (event) {  
    filterSectionNext.classList.remove('hiden'); 
    filterSection.style.display = 'none'; 
    if (filterCategoryItem) {  
      let filterObjString = galleryItem.dataset.filterObj; 
      let filterObj = null; 
      if (filterObjString.length) { 
        try { 
        filterObj = JSON.parse(filterObjString); 
           
        } catch(error) { 
          console.error('An error occurred while parsing JSON:', error); 
        } 
      } 
      if (filterObj) { 
        fetchExercises(filterObj); 
      } 
    }  
  }); 
} 

