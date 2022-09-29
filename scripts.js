function shutUpKanye() {
  const quoteArea = document.querySelector(".quote-area");
  quoteArea.innerHTML = "";
}

function getQuote() {
  fetch("https://api.kanye.rest", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const quoteFiled = populateQuoteField(data);
      console.log(quoteFiled);
    })
    .catch((err) => {
      console.log(err);
    });
}

function populateQuoteField(data) {
  console.log(data.quote);
  const quoteArea = document.querySelector(".quote-area");
  quoteArea.innerHTML = "";
  quoteArea.appendChild(createQuote(data));
}

function createQuote(quote) {
  const quoteText = document.createElement("p");
  quoteText.textContent = quote.quote;
  quoteText.className = "quote";
  return quoteText;
}
