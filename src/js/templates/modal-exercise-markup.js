export function createModalExerciseMarkup({
  _id,
  gifUrl,
  name,
  rating,
  target,
  bodyPart,
  equipment,
  popularity,
  burnedCalories,
  description,
}) {
  return `<section class="modal modal-exercise">
  <div class="modal-exercise-container">
    <img
      src="${gifUrl}"
      alt="${name}"
      class="modal-exercise-img"
      width="360"
      height="360"
    />
    <div class="modal-exercise-info-container">
      <button
        type="button"
        class="modal-exercise-close-btn"
        data-close="close"
      >
        <svg class="modal-exercise-close-icon">
          <use href="./img/sprite.svg#icon-close-modal"></use>
        </svg>
      </button>
      <h3 class="modal-exercise-title">${makeUpperCaseFirstLetter(name)}</h3>
      <div class="modal-exercise-rating-container">
        <p class="modal-exercise-rating-number">${rating}</p>
        <div class="modal-exercise-rating-stars" id="modal-exercise-rating-stars">
            <svg class="modal-exercise-rating-icon">
              <use href="./img/sprite.svg#icon-star-yellow"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="./img/sprite.svg#icon-star-yellow"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="./img/sprite.svg#icon-star-yellow"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="./img/sprite.svg#icon-star-yellow"></use></svg>
            <svg class="modal-exercise-rating-icon">
              <use href="./img/sprite.svg#icon-star-yellow"></use></svg>
        </div> 
      </div>
      <div class="modal-exercise-tag-container">
        <ul class="modal-exercise-tag-list">
          <li>
            <p class="modal-exercise-tag-key">Target</p>
            <p class="modal-exercise-tag-value">${makeUpperCaseFirstLetter(
              target
            )}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Body Part</p>
            <p class="modal-exercise-tag-value">${makeUpperCaseFirstLetter(
              bodyPart
            )}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Equipment</p>
            <p class="modal-exercise-tag-value">${makeUpperCaseFirstLetter(
              equipment
            )}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Popular</p>
            <p class="modal-exercise-tag-value">${popularity}</p>
          </li>
          <li>
            <p class="modal-exercise-tag-key">Burned Calories</p>
            <p class="modal-exercise-tag-value">${burnedCalories}</p>
          </li>
        </ul>
      </div>
      <p class="modal-exercise-description">${description}</p>
    </div>
  </div>
   <button type="button" id="1" class="exersice-modal-btn ">
     
      </button>  
     

</section>
  `;
}

export function createAddToFavoritesMarkup() {
  return `
  Add to favorites
   
          <svg class="modal-exercise-icon">
            <use href="./img/sprite.svg#icon-heart-white"></use></svg
        >`;
}

export function createRemoveFromFavoritesMarkup() {
  return `
  Remove from favorites
        
          <svg class="modal-exercise-icon">
            <use href="./img/sprite.svg#icon-trash-modal"></use></svg
        >`;
}

function makeUpperCaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}