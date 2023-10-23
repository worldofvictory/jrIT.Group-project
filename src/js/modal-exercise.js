import { Notify } from 'notiflix';
import { fetchExerciseModalById } from './api-services/modal-exercise-api';
import {
  createModalExerciseMarkup,
  createAddToFavoritesMarkup,
  createRemoveFromFavoritesMarkup,
} from './templates/modal-exercise-markup';
import { ModalBox } from './modal-class-box';

const openModalSelector = '[data-modal-exercise="open"]';
const closeModalSelector = '[data-modal-exercise="close"]';
const openModalExerciseBtnRef = document.querySelector(openModalSelector);
const LS_FAVORITES_ID = 'favorite-id-list';
const favoriteIdList = JSON.parse(localStorage.getItem(LS_FAVORITES_ID)) || [];

openModalExerciseBtnRef.addEventListener('click', handleOpenModalClick);

export async function handleOpenModalClick(
  _,
  favoriteId = '64f389465ae26083f39b17a2'
) {
  let modalBox = {};
  let ratingValue = 0;

  try {
    const exericiseData = await fetchExerciseModalById();
    modalBox = new ModalBox(
      createModalExerciseMarkup,
      closeModalSelector,
      exericiseData
    );

    modalBox.open();

    ratingValue = Math.round(exericiseData.rating);
  } catch (error) {
    Notify.failure(
      'Sorry, there are no data matching your category. Please try again.'
    );
  }

  processActiveRatingStars(ratingValue);

  const giveRatingBtnRef = document.querySelector('.js-give-rating-btn');
  const addToFavoriteBtnRef = document.querySelector(
    '.js-add-to-favorites-btn'
  );

  giveRatingBtnRef.addEventListener('click', event =>
    handleGiveRatingBtnClick(event, modalBox)
  );

  addToFavoriteBtnRef.addEventListener('click', event =>
    handleAddToFavoriteBtnClick(event, favoriteId, addToFavoriteBtnRef)
  );

  createRemoveMarkupIfIncludesId(favoriteId, addToFavoriteBtnRef);
}

function handleGiveRatingBtnClick(_, modalBox) {
  modalBox.instance.close();
}

function handleAddToFavoriteBtnClick(_, favoriteId, addToFavoriteBtnRef) {
  if (favoriteIdList.includes(favoriteId)) {
    processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef);
    removeLocalStorageIfEmpty();
    return;
  }

  processAddingToFavorites(favoriteId, addToFavoriteBtnRef);
}

function processAddingToFavorites(favoriteId, addToFavoriteBtnRef) {
  addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();

  favoriteIdList.push(favoriteId);
  const favoriteIdData = JSON.stringify(favoriteIdList);

  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);
}

function processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef) {
  const currentFavoriteIndex = favoriteIdList.indexOf(favoriteId);
  favoriteIdList.splice(currentFavoriteIndex, 1);

  const favoriteIdData = JSON.stringify(favoriteIdList);
  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);

  addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();
}

function createRemoveMarkupIfIncludesId(favoriteId, addToFavoriteBtnRef) {
  if (favoriteIdList.includes(favoriteId)) {
    addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();
  }
}

function removeLocalStorageIfEmpty() {
  if (favoriteIdList.length === 0) {
    localStorage.removeItem(LS_FAVORITES_ID);
  }
}

function processActiveRatingStars(ratingValue) {
  const ratingStarsContainer = document.querySelector(
    '#modal-exercise-rating-stars'
  );

  [...ratingStarsContainer.children].forEach((ratingStar, index) => {
    index < ratingValue &&
      ratingStar.classList.add('modal-exercise-active-rating-stars');
  });
}