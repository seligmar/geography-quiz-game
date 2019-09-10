
const usernameForm = document.querySelector("#usernameForm")
const startBtn = document.querySelector("#button")
const ol = document.createElement('ol')
const userInput = document.querySelector("#username")

const qBox = document.querySelector("#qs-go-here")


const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



userInput.addEventListener("click", e => { userInput.value = ""})


usernameForm.addEventListener("submit", e => {removeStartBox(e), pickRandom()})

function removeStartBox(e) {
    e.preventDefault()
    document.querySelector(".start-screen").style.display = "none";
    let header = document.createElement('div')   
    header.id = 'game-header'
    header.innerHTML = `<h1>Welcome, ${username}! You have 0 points</h1>`
}

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

   qBox.innerHTML = ""
   let qBoxDiv = document.createElement('div')
   let imageBox = document.createElement('div')
   let btn1 = document.createElement('button')
   let btn2 = document.createElement('button')
   let btn3 = document.createElement('button')
   let btn4 = document.createElement('button')
   
   // Creating class name for the buttons
   btn1.className = "quiz-button"
   btn2.className = "quiz-button"
   btn3.className = "quiz-button"
   btn4.className = "quiz-button"

   qBoxDiv.className = "question-box"
   imageBox.innerHTML = `<img class = "image-box" src="${question.img}"/>`
   qBoxDiv.append(imageBox)
   btn1.innerText = `${question.answer1}`
   btn2.innerText = `${question.correct_answer}`
   btn3.innerText = `${question.answer3}`
   btn4.innerText = `${question.answer2}`
   imageBox.append(btn1)
   imageBox.append(btn2)
   imageBox.append(btn3)
   imageBox.append(btn4)
   qBox.append(qBoxDiv)

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
    imageBox.append(btn1)
    imageBox.append(btn2)
    imageBox.append(btn3)
    imageBox.append(btn4)
    qBox.append(qBoxDiv) 

 
}







function endGame(username, score) {
   let endDiv = document.createElement('div')
   endDiv.className = "question-box"
   endDiv.innerHTML = `<p>Congratulations, ${username}, you earned ${score}</p>`
   qBox.append(endDiv)

}