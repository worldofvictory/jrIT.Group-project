import axios from "axios";

async function renderQuote() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    let storedQuoteState = JSON.parse(localStorage.getItem("quoteData")) ?? {};

    const storedQuoteDay = storedQuoteState.day ?? 0;

    if (currentDay !== storedQuoteDay) {
        const quoteData = await serviceQuote();

        quoteData.day = currentDay;
        localStorage.setItem("quoteData", JSON.stringify(quoteData));
        storedQuoteState = quoteData;
    }

    const quoteText = document.querySelector(".quote-text"); 
    const quoteAuthor = document.querySelector(".quote-author");
    quoteText.textContent = storedQuoteState.quote; 
    quoteAuthor.textContent = storedQuoteState.author;

}

async function serviceQuote() {
  try {
    const response = await axios.get(
      `https://your-energy.b.goit.study/api/quote`
    );
    return response.data; // Повертаємо дані з API
  } catch (error) {
    console.error('Помилка отримання даних: ', error);
    return null;
  }
}

function hide(element) {
    element.classList.add('is-hidden');
}

function show(element) {
    element.classList.remove('is-hidden');
}

renderQuote();
