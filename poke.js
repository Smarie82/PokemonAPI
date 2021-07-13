const groundURL = "https://pokeapi.co/api/v2/type/5/";
const ghostURL = "https://pokeapi.co/api/v2/type/8/";
const normalURL = "https://pokeapi.co/api/v2/type/1/";
const fightingURL = "https://pokeapi.co/api/v2/type/2/";
const flyingURL = "https://pokeapi.co/api/v2/type/3/";
const poisonURL = "https://pokeapi.co/api/v2/type/4/";
const rockURL = "https://pokeapi.co/api/v2/type/6/";
const bugURL = "https://pokeapi.co/api/v2/type/7/";
const steelURL = "https://pokeapi.co/api/v2/type/9/";
const fireURL = "https://pokeapi.co/api/v2/type/10/";
const waterURL = "https://pokeapi.co/api/v2/type/11/";
const grassURL = "https://pokeapi.co/api/v2/type/12/";
const electricURL = "https://pokeapi.co/api/v2/type/13/";
const psychicURL = "https://pokeapi.co/api/v2/type/14/";
const iceURL = "https://pokeapi.co/api/v2/type/15/";
const dragonURL = "https://pokeapi.co/api/v2/type/16/";
const darkURL = "https://pokeapi.co/api/v2/type/17/";
const fairyURL = "https://pokeapi.co/api/v2/type/18/";
const unknownURL = "https://pokeapi.co/api/v2/type/10001/";
const shadowURL = "https://pokeapi.co/api/v2/type/10002/";


//main information for battle stat card
const battleCard = document.querySelector('section');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const listGroupOne = document.querySelector('.list-group-item-one');
const listGroupTwo = document.querySelector('.list-group-item-two');
const listGroupThree = document.querySelector('.list-group-item-three');
const listGroupFour = document.querySelector('.list-group-item-four');
const listGroupFive = document.querySelector('.list-group-item-five');


fetch(groundURL)
    .then(response => response.json())
    .then(json => displayStats(json));
    
// fetch(ghostURL)
//     .then(response => response.json())
//     .then(json => displayStats(json));   
 
    function displayStats(battleStats) {
        console.log(battleStats);

        let typeName = document.createElement('p');
        typeName.className = 'list-group-item-one';
        typeName.innerText = battleStats.name.toUpperCase().replaceAll(' ', ' ');

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


    