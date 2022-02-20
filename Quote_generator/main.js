const qouteContainer = document.getElementById("quote-container");
const qouteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// show and hidde loadind spin
function loading(status) {
  loader.hidden = !status;
  qouteContainer.hidden = status;
}

// Get Quotes From API
async function getQuote() {
  // show loading spin
  loading(true);
  // Fetch a random quote from the Quotable API
  const apiUrl = "https://api.quotable.io/random";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Update DOM elements
    // if Author is blank add 'Unknown'
    authorText.innerText =
      data.author === "" ? "- Unknown" : `- ${data.author}`;

    qouteText.innerText = data.content;
    //Reduce font-size for long quotes
    if (data.content.length > 120) {
      qouteText.classList.add("long-quote");
    } else {
      qouteText.classList.remove("long-quote");
    }
    // hidde loading spin
    loading(false);
  } catch (e) {
    qouteText.textContent = "An error occured";
    console.log(e);
    loading(false);
  }
}

function tweetQuote() {
  const quote = qouteText.innerText;
  const author = authorText.innerText;
  const url = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(url, "_blank");
}

twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", getQuote);

//On Load
getQuote();
