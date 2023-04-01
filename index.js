const newQuoteButton = document.querySelector("#js-new-quote");
newQuoteButton.addEventListener("click", getQuote);

async function getQuote(){
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=funny');
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
            console.log(json.message);
      } catch (err) {
            console.log(err)
        alert('Failed to fetch new quote');
      }
    }