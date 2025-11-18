const Apiurl = "https://api.api-ninjas.com/v1/quotes";
const Apikey = "sNr4MgpTKrNnzxu5oosjxQ==Zxj9IZfOS0O4YcPF";


// getting refrence from html
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const btn = document.getElementById("btn");
const errorbox = document.getElementById("error");

//function to fetch and show quote
function loadQuote() {
    errorbox.classList.add("hidden");
    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    fetch(Apiurl, {
        headers: {
            "X-Api-Key": Apikey , // *** required header ***
        }
    })
    .then(response => response.json())
    .then(data => {
        const quote = data[0].quote;
        const author = data[0].author;

        quoteText.textContent = `“${quote}”`;
        authorText.textContent =  `-${author}`;
    })
    .catch(error => {
        console.error(error);
        errorbox.textContent = "Couldn't fetch quote. Please try again.";
        errorbox.classList.remove("hidden");
    });
}

// load on start
loadQuote();

// when button clicked
btn.addEventListener("click", loadQuote);


