// Отримати елементи по їх id
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');

// Додати обробник події для першого посилання
link1.addEventListener('click', e => {
  //   e.preventDefault(); // Забороняємо перехід за посиланням

  link1.classList.add('h-link-active');
  link1.classList.remove('h-link-inactive');
  link2.classList.remove('h-link-active');
  link2.classList.add('h-link-inactive');
});

// Додати обробник події для другого посилання
link2.addEventListener('click', e => {
  //   e.preventDefault(); // Забороняємо перехід за посиланням

  link2.classList.add('h-link-active');
  link2.classList.remove('h-link-inactive');
  link1.classList.remove('h-link-active');
  link1.classList.add('h-link-inactive');
});
