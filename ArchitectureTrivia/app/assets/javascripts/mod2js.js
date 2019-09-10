


const usernameForm = document.querySelector("#usernameForm")
const startBtn = document.querySelector("#button")
const ol = document.createElement('ol')

const qBox = document.querySelector("#qs-go-here")

const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
usernameForm.addEventListener("submit", e => {removeStartBox(e), pickRandom()})

function removeStartBox(e) {
    e.preventDefault()
    document.querySelector(".start-screen").style.display = "none";
}

function pickRandom() {
    let rand = index[Math.floor(Math.random() * index.length)];
    index.splice(index[rand], 1)
    fetchRandom(rand)
}

function fetchRandom(n) {
    return fetch(`http://localhost:3000/questions/${n}`) 
    .then(resp => resp.json())
    .then(showQuestion)
}

function showQuestion(question) {
    let qBoxDiv = document.createElement('div')
    let imageBox = document.createElement('div')
    qBoxDiv.className = "question-box"
    imageBox.innerHTML = `<img class = "question-box" src="${question.img}"/>`
    debugger
    qBoxDiv.append(imageBox)
     qBoxDiv.innerHTML = `
        <p>${question.answer1}</p>
     `
    qBox.append(qBoxDiv)
}

