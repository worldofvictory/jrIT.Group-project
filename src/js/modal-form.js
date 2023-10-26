const teamModalOpenBtn = document.querySelector('.form-modal-btn');
const teamModalCloseBtn = document.querySelector('.form-btn-close');
const formModal = document.querySelector('.form-modal-backdrop');

function onOpenClick() {
    formModal.classList.remove('is-hidden');
  }
  function onCloseClick() {
    formModal.classList.add('is-hidden');
    returnHidden();
  }