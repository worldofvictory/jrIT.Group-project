const mailingInput = document.querySelector('.mailing_input');
const mailingForm = document.querySelector('.mailing_form');
import { Notify } from 'notiflix';

mailingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (mailingInput.checkValidity()) {
    const email = mailingInput.value;

    fetch('https://your-energy.b.goit.study/api/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then(response => response.json())
      .then(data => {
        mailingForm.reset();
        Notify.success(
          "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being."
        );
      })
      .catch(error => {
        Notify.failure('Error occurred while making subscription');
      });
  } else {
    Notify.warning('Invalid e-mail address entered.');
  }
});
