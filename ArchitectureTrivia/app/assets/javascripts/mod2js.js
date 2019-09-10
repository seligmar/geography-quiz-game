


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
    if (index.length === 0) {
        endGame()}
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
    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    let btn3 = document.createElement('button')
    let btn4 = document.createElement('button')
    qBoxDiv.className = "question-box"
    imageBox.innerHTML = `<img class = "question-box" src="${question.img}"/>`
    qBoxDiv.append(imageBox)
    btn1.innerText = `${question.answer1}`
    btn2.innerText = `${question.correct_answer}`
    btn3.innerText = `${question.answer3}`
    btn4.innerText = `${question.answer2}`

    qBox.append(qBoxDiv)
}



