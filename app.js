function addQuote() {
  const input = document.getElementById("quoteInput");
  const quote = input.value.trim();
  if (!quote) return;

  // Add quote to list
  const list = document.getElementById("quoteList");
  const li = document.createElement("li");
  li.textContent = quote;
  list.appendChild(li);
  input.value = "";

  // Save to localStorage
  saveToLocalStorage(quote);
}

function saveToLocalStorage(quote) {
  let quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
  quotes.push(quote);
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function loadQuotes() {
  const quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
  const list = document.getElementById("quoteList");

  quotes.forEach(quote => {
    const li = document.createElement("li");
    li.textContent = quote;
    list.appendChild(li);
  });
}

function clearQuotes() {
  // Clear UI
  document.getElementById("quoteList").innerHTML = "";
  // Clear from localStorage
  localStorage.removeItem("quotes");
}

window.onload = loadQuotes;
//feature branch commited