import { Notify } from 'notiflix';
import { fetchExerciseModalById } from './api-services/modal-exercise-api';
import {
  createModalExerciseMarkup,
  createAddToFavoritesMarkup,
  createRemoveFromFavoritesMarkup,
} from './templates/modal-exercise-markup';
import { ModalBox } from './modal-class-box';
import { addFavoriteCards, deleteCard, getAllFavoriteCards } from "./local-storage";


const closeModalSelector = '[data-close="close"]';
const LS_FAVORITES_ID = 'favorite-id-list';
const favoriteList = getAllFavoriteCards() || [];
const favoriteIdList = favoriteList.map((item) => item._id);

export async function handleOpenModalClick(
  _,
  favoriteId
) {
  let modalBox = {};
  let ratingValue = 0;

  let exericiseData;

  try {
    exericiseData = await fetchExerciseModalById(favoriteId);
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

  const addToFavoriteBtnRef = document.querySelector('.exersice-modal-btn');

 
  const currentUrl = window.location.href;

  if (currentUrl.includes("/favorites.html")) {

    addToFavoriteBtnRef.style.display = "none";
  } 
     
   addToFavoriteBtnRef.addEventListener('click', event =>
      handleAddToFavoriteBtnClick(event, favoriteId, addToFavoriteBtnRef, exericiseData)
    );

    createRemoveMarkupIfIncludesId(favoriteId, addToFavoriteBtnRef);

}



function handleAddToFavoriteBtnClick(_, favoriteId, addToFavoriteBtnRef, exericiseData) {
  if (favoriteIdList.includes(favoriteId)) {
    processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef);
    removeLocalStorageIfEmpty();
    return;
  }

  processAddingToFavorites(favoriteId, addToFavoriteBtnRef, exericiseData);
}

function processAddingToFavorites(favoriteId, addToFavoriteBtnRef, exericiseData) {
  addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();

  favoriteIdList.push(favoriteId);
  const favoriteIdData = JSON.stringify(favoriteIdList);
  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);

  addFavoriteCards(exericiseData);
}

export function processRemovalsFromFavorites(favoriteId, addToFavoriteBtnRef) {
  const currentFavoriteIndex = favoriteIdList.indexOf(favoriteId);
  favoriteIdList.splice(currentFavoriteIndex, 1);

  const favoriteIdData = JSON.stringify(favoriteIdList);
  localStorage.setItem(LS_FAVORITES_ID, favoriteIdData);

  addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();

  deleteCard(favoriteId);

}

function createRemoveMarkupIfIncludesId(favoriteId, addToFavoriteBtnRef) {
  if (favoriteIdList.includes(favoriteId)) {
    addToFavoriteBtnRef.innerHTML = createRemoveFromFavoritesMarkup();
  } else {
    addToFavoriteBtnRef.innerHTML = createAddToFavoritesMarkup();
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