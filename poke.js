const baseURL = "https://pokeapi.co/api/v2/type/5/";

// const searchTerm = document.querySelector('search');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

const battleCard = document.querySelector('section');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const listGroupOne = document.querySelector('.list-group-item-one');
const listGroupTwo = document.querySelector('.list-group-item-two');
const listGroupThree = document.querySelector('.list-group-item-three');
const listGroupFour = document.querySelector('.list-group-item-four');
const listGroupFive = document.querySelector('.list-group-item-five');

let pokeTypes = {
    normal :"https://pokeapi.co/api/v2/type/1/",
    fighting :"https://pokeapi.co/api/v2/type/2/",
    flying :"https://pokeapi.co/api/v2/type/3/",
    poison :"https://pokeapi.co/api/v2/type/4/",
    ground :"https://pokeapi.co/api/v2/type/5/",
    rock :"https://pokeapi.co/api/v2/type/6/",
    bug :"https://pokeapi.co/api/v2/type/7/",
    ghost :"https://pokeapi.co/api/v2/type/8/",
    steel :"https://pokeapi.co/api/v2/type/9/",
    fire :"https://pokeapi.co/api/v2/type/10/",
    water :"https://pokeapi.co/api/v2/type/11/",
    grass :"https://pokeapi.co/api/v2/type/12/",
    electric :"https://pokeapi.co/api/v2/type/13/",
    psychic :"https://pokeapi.co/api/v2/type/14/",
    ice :"https://pokeapi.co/api/v2/type/15/",
    dragon :"https://pokeapi.co/api/v2/type/16/",
    dark :"https://pokeapi.co/api/v2/type/17/",
    fairy :"https://pokeapi.co/api/v2/type/18/",
    unknown :"https://pokeapi.co/api/v2/type/10001/",
    shadow :"https://pokeapi.co/api/v2/type/10002/",
}

//searchForm.addEventListener('submit', fetchResults);

fetch(baseURL)
    .then(response => response.json())
    .then(json => displayStats(json));
    
    
    function displayStats(battleStats) {
        console.log(battleStats);

        let typeName = document.createElement('p');
        typeName.className = 'list-group-item-one';
        typeName.innerText = battleStats.name;

        let doubleTo = document.createElement('p');
        doubleTo.className = 'list-group-item-two';
        doubleTo.innerText = battleStats.damage_relations.double_damage_to[0].name;

        let halfTo = document.createElement('p');
        halfTo.className = 'list-group-item-three';
        halfTo.innerText = battleStats.damage_relations.half_damage_to[0].name;

        let noDamageTo = document.createElement('p');
        noDamageTo.className = 'list-group-item-four';
        noDamageTo.innerText = battleStats.damage_relations.no_damage_to[0].name;

        let noDamageFrom = document.createElement('p');
        noDamageFrom.className = 'list-group-item-five';
        noDamageFrom.innerText = battleStats.damage_relations.no_damage_from[0].name;
        
    
      

       listGroupOne.appendChild(typeName);
       listGroupTwo.appendChild(doubleTo);
       listGroupThree.appendChild(halfTo);
       listGroupFour.appendChild(noDamageTo);
       listGroupFive.appendChild(noDamageFrom);
    }