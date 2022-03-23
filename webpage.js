//displays card when form is submitted and hides form
const form = document.querySelector("form");
const card = document.getElementById("card");
const cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", processReservation);
cardContainer.style.display = "none";

function processReservation(event) {
    event.preventDefault();
    form.style.display = 'none';
    cardContainer.style.display = 'block';
    card.style.padding = "20px 10px";
    card.style.borderRadius = "5px";
    card.style.textAlign = "center";
}

//button refreshes window 
const button = document.querySelector("button");
button.addEventListener("click", refreshPage);
function refreshPage(){ 
    location.reload()
}

//unsplash
let clientID = "IZ6WkcQ5Ygefq4jWnmtc7THx2RcKzQaTnzbEpTp_dOw";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

let imageElement = document.querySelector('#unsplashImage');
let imageLink = document.querySelector('#imageLink');
let creator = document.querySelector('#creator')

fetch(endpoint)
    .then(function(response) {return response.json()})
    .then(function(jsonData){console.log(jsonData)
        imageElement.src = jsonData.urls.regular;
        imageLink.setAttribute("href", jsonData.links.html);
        creator.innerText = jsonData.user.name;
        creator.setAttribute("href", jsonData.user.portfolio_url);
    }) 

