const baseUrl = "https://pokeapi.co/api/v2/type/{id or name}/";

let url;

const searchTerm = document.querySelector('search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const card = document.querySelector('.card');
const cardBody = document.querySelector('card-body');

searchTerm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = baseUrl + searchTerm.value;

    fetch(url)
        .then(function(result) {
            console.log(result)
            return result.json();
        }).then(function(json) {
            displayResults(json);
        });
}

function displayResults(json) {
    while (Selection.firstChild) {
        Selection.removeChild(section.firstChild);
    }
}