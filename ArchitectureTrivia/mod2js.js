var indecies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function pickRandom(indecies) {
   let rand = indecies[Math.floor(Math.random() * indecies.length)];
   indecies = indecies.splice(indecies[rand], 1)
   fetchRandom(rand)
}
function fetchRandom(n) {
   return fetch(`http://localhost:3000/questions/${n}`)
   .then(resp => resp.json())
   .then(showQuestion)
}
function showQuestion() {
}
