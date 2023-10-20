import Pagination  from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';



// const bodypartsBtn = document.querySelector(".bodyparts");
// const musclesBtn = document.querySelector(".muscles");
// const equipmentBtn = document.querySelector(".equipment");
// const gallery = document.querySelector(".filter-category-list");

// let page = 1;
// const perPage = 12;




export const paginationEl = document.getElementById('tui-pagination-container');

export function makePagination(perPage, totalPages) {
  const visiblePages = totalPages < 5 ? totalPages : 5;
  const options = {
    totalItems:perPage*totalPages,
    itemsPerPage: perPage,
    visiblePages,
    centerAlign: true,
  };
 console.log(perPage, totalPages)
  const pagination = new Pagination(paginationEl, options);

  if (visiblePages <= 1) {
    paginationEl.style.display = 'none';
  } else {
    paginationEl.style.display = 'block';
  }

  return pagination;
}



const gallery = document.querySelector(".filter-category-list");
// Функція для отримання даних з API
async function fetchData(filter, page=1) {
  try {
    const response = await axios.get(
      `https://your-energy.b.goit.study/api/filters?filter=${filter}&page=${page}&limit=12`
    );
    return response.data; // Повертаємо дані з API
  } catch (error) {
    console.error("Помилка отримання даних: ", error);
    return null;
  }
}

function createMarcup(arr) {
  gallery.innerHTML = "";
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
    .join("");
}

// Початкова фільтрація "Body parts"
fetchData("Body parts").then((data) => {
    if (!data) {
        return
    }

    gallery.insertAdjacentHTML("beforeend", createMarcup(data.results));

    makePagination(12, data.totalPages).on(
        'afterMove',
        ({ page }) => {
            console.log('page', page)
            renderCards(filter, page)
        });
});

// Обробники подій для кнопок фільтрації
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    // Видаляємо клас 'current' з усіх кнопок
    filterButtons.forEach((btn) => btn.classList.remove("current"));

    // Встановлюємо клас 'current' на натиснуту кнопку
    button.classList.add("current");

    // Отримуємо значення фільтру з тексту кнопки
    const filter = button.textContent.trim();
    const data = await fetchData(filter);
      
      makePagination(12, data.totalPages).on(
        'afterMove',
        ({ page }) => {
            console.log('page', page)

            renderCards(filter, page)
        });

    if (data) {
      gallery.insertAdjacentHTML("beforeend", createMarcup(data.results));
    }
  });
});


async function renderCards(filter, page) {
    const data = await fetchData(filter, page);
    
    if (data) {
      gallery.insertAdjacentHTML("beforeend", createMarcup(data.results));
    }
}




// onLoad();

// function onLoad() {
//   bodypartsBtn.classList.add("active");
//   getFiltersOfBodyparts()
//     .then(({ data }) => {
//       console.log(data);
//       gallery.insertAdjacentHTML("beforeend", createMarcup(data.results));
//     })
//     .catch(console.log);
// }

// function getFiltersOfBodyparts() {
//   return axios.get(
//     `https://your-energy.b.goit.study/api/filters?filter=Body parts&limit=${perPage}`
//   );
// }

// function getFiltersOfMuscles() {
//   return axios.get(
//     `https://your-energy.b.goit.study/api/filters?filter=Muscles&limit=${perPage}`
//   );
// }

// function getFiltersOfEquipment() {
//   return axios.get(
//     `https://your-energy.b.goit.study/api/filters?filter=Equipment&limit=${perPage}`
//   );
// }

// bodypartsBtn.addEventListener("click", onClickBodyparts);
// function onClickBodyparts() {
//   page += 1;
//   //   galary.innerHTML = "";
//   getFiltersOfBodyparts()
//     .then(({ data }) => {
//       console.log(data);
//         gallery.insertAdjacentHTML("beforeend", createMarcup(data.results));
//         makePagination(perPage, data.totalPages);
//     })
//     .catch(console.log);
// }

// musclesBtn.addEventListener("click", onClickMuscles);
// function onClickMuscles() {
//   page += 1;
//   //   galary.innerHTML = "";
//   getFiltersOfMuscles()
//     .then(({ data }) => {
//       console.log(data);
//     //   galary.innerHTML = "";
//         gallery.insertAdjacentHTML("beforeend", createMarcup(data.results))
//         makePagination(perPage, data.totalPages)
//     })
//     .catch(console.log);
// }

// equipmentBtn.addEventListener("click", onClickEquipment);
// function onClickEquipment() {
//   page += 1;
//   getFiltersOfEquipment()
//     .then(({ data }) => {
//       console.log(data);
//         gallery.insertAdjacentHTML("beforeend", createMarcup(data.results));
//         makePagination(perPage, data.totalPages)
//     })
//     .catch(console.log);
// }

// function createMarcup(arr) {
//   return arr
//     .map(
//       ({ filter, name, imgURL }) => `<li class="filter-category-item">
//               <img
//                 class="filter-category-img"
//                 src="${imgURL}"
//                 alt=""
//                 loading="lazy"
//                  width='335' height='225'
//               />
//             <div class="category-text"
//               <h3 class="filter-category-title">${name}</h3>
//               <p class="filter-category-descr">${filter}</p>
//             </div>
//             </li>`
//     )
//     .join("");
// }