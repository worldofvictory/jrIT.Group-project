async function sendForm() {
    try {
      document.forms.user.querySelector('[type="submit"]').disabled = true;
      document.forms.user.querySelector('.submit-spinner').classList.remove('submit-spinner_hide');
      const email = document.forms.user.email.value; // Отримати значення поля email
  
      const response = await fetch('https://your-energy.b.goit.study/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Вказується, що відправляється JSON
        },
        body: JSON.stringify({ email }), // Відправляє email у JSON-форматі
      });
  
      document.forms.user.querySelector('[type="submit"]').disabled = false;
      document.forms.user.querySelector('.submit-spinner').classList.add('submit-spinner_hide');
  
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.log('Ошибка при отправке запроса');
      }
    } catch (error) {
      document.forms.user.querySelector('[type="submit"]').disabled = false;
      document.forms.user.querySelector('.submit-spinner').classList.add('submit-spinner_hide');
      console.log(error);
    }
  }
  
  // при відправленні форми
  document.forms.user.addEventListener('submit', (e) => {
    e.preventDefault();
    sendForm();
  });
  

  