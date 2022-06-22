console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate"

let form = document.querySelector("#searchForm");
let searchInput = document.querySelector("#gifSearch");
let img = document.querySelector("#img");
let btn = document.querySelector("#btn"); 

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchInput = input.value;
    fetch(`${GIPHY_URL}?api_key=${searchInput}`, {mode: "cors"}
    )
    .then((response) => {
        return response.json();
    }
    ) 
    .then((result) => {
        console.log(result);
        gifimg.src = result.data.images.original.url;
        gifimg.alt = result.data.title;
    })
    .catch((err) => {
        console.error(err);
    });

    console.log(gifSearch);

})
