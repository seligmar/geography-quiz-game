//alert("I am an alert box")

let indecies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pickRandom() {
    let rand = indecies[Math.floor(Math.random() * indecies.length)];
    indecies.splice(indecies[rand], 1)
    fetchRandom(rand)
}

function fetchRandom(n) {
    return fetch(`http://localhost:3000/questions/${n}`) 
    .then(resp => resp.json())
    .then(showQuestion)
}

function showQuestion() {

}
