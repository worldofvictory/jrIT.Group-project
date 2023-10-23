import Pagination  from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';

function makePagination(perPage, totalPages) {

  const paginationEl = document.getElementById('tui-pagination-container');  
  const visiblePages = totalPages < 5 ? totalPages : 5;
  const options = {
    totalItems:perPage*totalPages,
    itemsPerPage: perPage,
    visiblePages,
    centerAlign: true,
  };
 
  const pagination = new Pagination(paginationEl, options);

  if (visiblePages <= 1) {
    paginationEl.style.display = 'none';
  } else {
    paginationEl.style.display = 'block';
  }

  return pagination;
}

export { makePagination };
    
//  <div id="tui-pagination-container" class="tui-pagination"></div> 
    
// makePagination(12, data.totalPages).on(
//     'afterMove',
//     ({ page }) => {
//        renderCards(filter, page)
//     });

//     async function renderCards(filter, page) {
//     const data = await fetchData(filter, page);
//     if (data) {
//       gallery.insertAdjacentHTML("beforeend", createMarcup(data.results));
//     }
// }
