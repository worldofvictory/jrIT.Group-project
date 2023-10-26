// const mailingInput = document.querySelector('.mailing_input');
// const mailingForm = document.querySelector('.mailing_form');
// import { Notify } from 'notiflix';

// mailingForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   if (mailingInput.checkValidity()) {
//     const email = mailingInput.value;

//     fetch('https://your-energy.b.goit.study/api/subscription', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email: email }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         mailingForm.reset();
//         Notify.success(
//           "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being."
//         );
//         console.log(`The user has just subscribed with the email: ${email}`);
//       })
//       .catch(error => {
//         Notify.failure('Error occurred while making subscription');
//       });
//   } else {
//     Notify.warning('Invalid e-mail address entered.');
//   }
// });

//-----------------------------------------------------------------------------------------//

// loader-subscribe.js + footer.js
/*const mailingInput = document.querySelector('.mailing_input');
const mailingForm = document.querySelector('.mailing_form');
import { Notify } from 'notiflix';

const sendForm = async (email) => {
  try {
    const submitButton = mailingForm.querySelector('.mailing_button');
    submitButton.disabled = true;
    const spinner = mailingForm.querySelector('.submit-spinner');
    spinner.classList.remove('submit-spinner_hide');

    const response = await fetch('https://your-energy.b.goit.study/api/subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    submitButton.disabled = false;
    spinner.classList.add('submit-spinner_hide');

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      mailingForm.reset();
      Notify.success("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Your Energy. You've just taken a significant step towards improving your fitness and well-being.");
    } else {
      console.log(`The user has just subscribed with the email: ${email}`);
      Notify.failure('Error occurred while making subscription');
    }
  } catch (error) {
    const submitButton = mailingForm.querySelector('.mailing_button');
    submitButton.disabled = false;
    const spinner = mailingForm.querySelector('.submit-spinner');
    spinner.classList.add('submit-spinner_hide');
    console.error(error);
    Notify.failure('Error occurred while making subscription');
  }
};

mailingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (mailingInput.checkValidity()) {
    sendForm(mailingInput.value);
  } else {
    Notify.warning('Invalid e-mail address entered.');
  }
});*/

const mailingInput = document.querySelector('.mailing_input');
const mailingForm = document.querySelector('.mailing_form');
import { Notify } from 'notiflix';
import Swal from 'sweetalert2';

const sendForm = async email => {
  try {
    const submitButton = mailingForm.querySelector('.mailing_button');
    submitButton.disabled = true;
    const spinner = mailingForm.querySelector('.submit-spinner');
    spinner.classList.remove('submit-spinner_hide');

    const response = await fetch(
      'https://your-energy.b.goit.study/api/subscription',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }
    );

    submitButton.disabled = false;
    spinner.classList.add('submit-spinner_hide');

    if (response.ok) {
      const result = await response.json();
      console.log(`The user has just subscribed with the email: ${email}`);

      Swal.fire({
        title: 'Thank you for subscribing to new exercises on Your Energy!',
        icon: 'success',
        confirmButtonColor: '#242424',
        buttonsStyling: 'false',
      });

      mailingForm.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error occurred while making subscription',
      });
    }
  } catch (error) {
    const submitButton = mailingForm.querySelector('.mailing_button');
    submitButton.disabled = false;
    const spinner = mailingForm.querySelector('.submit-spinner');
    spinner.classList.add('submit-spinner_hide');
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error occurred while making subscription',
    });
  }
};

mailingForm.addEventListener('submit', e => {
  e.preventDefault();
  if (mailingInput.checkValidity()) {
    sendForm(mailingInput.value);
  } else {
    Notify.warning('Invalid e-mail address entered.');
  }
});
