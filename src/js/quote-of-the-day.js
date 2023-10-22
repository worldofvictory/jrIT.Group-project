const quoteEl = document.querySelector(".quote-markup");

const currentDate = new Date();
const currentDay = currentDate.getDate();

const storedQuoteState = JSON.parse(localStorage.getItem("quoteData")) ?? {};

const storedQuoteDay = storedQuoteState.day ?? 0;

if (currentDay !== storedQuoteDay) {
  serviceQuote();
} else {
  createMarkup(storedQuoteState);
}

serviceQuote()
  .then((data) => {
    const quoteDate = new Date();
    const quoteDay = quoteDate.getDate();

    const quoteData = {
      quote: data.quote,
      author: data.author,
      day: quoteDay,
    };

    localStorage.setItem("quoteData", JSON.stringify(quoteData));

    quoteEl.innerHTML = createMarkup(data);
  })
  .catch((err) => console.log(err));

function serviceQuote() {
  const BASE_URL = "https://your-energy.b.goit.study/api";
  const END_POINT = "quote";

  return fetch(`${BASE_URL}/${END_POINT}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(`Fetch error with ${resp.status}: ${resp.statusText}`);
    }
    return resp.json();
  });
}

function createMarkup({ author, quote }) {
  return `
      <p class="quote-text">${quote}</p>
      <p class="quote-text-author">${author}</p>`;
}
