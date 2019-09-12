const usernameForm = document.querySelector("#usernameForm")
const startBtn = document.querySelector("#button")
const ol = document.createElement('ol')
const userInput = document.querySelector("#username")
const bottomOfPage = document.querySelector("#botton-of-page")

const qBox = document.querySelector("#botton-of-page")
const headerBox = document.querySelector("#header-box")


const index2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const currentUser = {}  

userInput.addEventListener("click", e => { userInput.value = ""})

usernameForm.addEventListener("submit", e => removeStartBox(e))

function removeStartBox(e) {
    e.preventDefault()
    document.querySelector("#start-image").style.display = "none";
    document.querySelector(".start-screen").style.display = "none"; 
    document.querySelector("#image-credit-bar").style.display = "none";
    createUserBar(e)
    highScore(e)
}

function createUserBar(e) {
    newUser = {}
    newUser.name = e.target.children[0].value, 
    newUser.score = 0 
    let headerCont = document.createElement('div')   
    headerCont.classList.add('game-header-box')
    let welcomeH1 = document.createElement('div')
    welcomeH1.id = "username_id"
    let scoreH2 = document.createElement('div')
    scoreH2.id = "score_id"
    let questionH3 = document.createElement('div')
    questionH3.innerHTML = "Where is this structure located?"
    welcomeH1.innerHTML = `Welcome, ${newUser.name}! You have: `
    scoreH2.innerHTML = `${newUser.score} points`
    headerCont.append(welcomeH1)
    headerCont.append(scoreH2)
    headerCont.append(questionH3)
    headerBox.append(headerCont)
    createUser(newUser)
}

function highScore(e) {
    // let highScoreBox = document.createAttribute('div')
    // highScoreBox.innerHTML =  "<p class= "score-block" id="leaderboard" HIGHSCORES:>"
    // ///this needs to call the high scores
    // headerBox.append(highScoreBox)
}

function pickRandom(game) {
   // e.preventDefault();
  if (index2.length === 0) {
      endQuiz(game)}  
  else {
  let rand = index2[Math.floor(Math.random() * index2.length)];
  var index = index2.indexOf(rand);
  if (index > -1) {
     index2.splice(index, 1);
  }
  fetchRandom(game, rand) }
}

function fetchRandom(game, n) {
  return fetch(`http://localhost:3000/questions/${n}`)
  .catch()
  .then(resp => resp.json())
  .then(resp => showQuestion(game, resp))
}

function showQuestion(game, question) {
    let qBoxDiv = document.createElement('div')
    let imageBox = document.createElement('div')
    qBoxDiv.className = "question-box"
    imageBox.innerHTML = `<img class = "img-box" src="${question.img}"/>`
    qBoxDiv.append(imageBox)
    qBox.prepend(qBoxDiv)  
    createButtons(game, question)
}

//assign button ids and randomize them 

function createButtons(game, question) {
    let quizBtns = document.createElement('div')
    quizBtns.className = "quiz-button"
    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    let btn3 = document.createElement('button')
    let btn4 = document.createElement('button')

    let buttons = [btn1, btn2, btn3, btn4] 

    btn1.addEventListener('click', e => incorrectAnswer(e, game, question))
    btn2.addEventListener('click', e => {correctAnswer(e, game, question), updateScore(e, game)})
    btn3.addEventListener('click', e => incorrectAnswer(e, game, question))
    btn4.addEventListener('click', e => incorrectAnswer(e, game, question))

    btn1.classList.add('question-buttons')
    btn2.classList.add('question-buttons')
    btn3.classList.add('question-buttons')
    btn4.classList.add('question-buttons')

    btn1.innerText = `${question.answer1}`
    btn2.innerText = `${question.correct_answer}`
    btn3.innerText = `${question.answer2}`
    btn4.innerText = `${question.answer3}`

    while (buttons.length > 0) {
    let randBtn = buttons[Math.floor(Math.random() * buttons.length)];
    var index = buttons.indexOf(randBtn);
        if (index > -1) {
        quizBtns.append(randBtn)    
        buttons.splice(index, 1)};
    } 
    qBox.prepend(quizBtns)
    
}

function incorrectAnswer(e, game, question) {
    e.preventDefault()
    let responseDiv = document.createElement('div')
    responseDiv.classList.add('response-box')
    responseDiv.innerText = `Sorry, that is not correct. The ${question.name}
    is located in ${question.correct_answer}.`
    // add link to wikipedia page for a "learn more here"?
    qBox.prepend(responseDiv)
    pickRandom(game)
}

function correctAnswer(e, game, question) {
    e.target.parentElement.parentElement.parentElement.children[2].children[0].children[1].innerText = 
    (parseInt(e.target.parentElement.parentElement.parentElement.children[2].children[0].children[1].innerText) +1) + " points";
     let responseDivCorrect = document.createElement('div')
     responseDivCorrect.classList.add('response-box')
     responseDivCorrect.innerText = `Thats correct! The ${question.name}
     is located in ${question.correct_answer}.`
     // add link to wikipedia page for a "learn more here"?
     qBox.prepend(responseDivCorrect)
    }

function createUser(newUser) {
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "content-type": "application/json", 
            accept: "application/json"
        }, 
        body: JSON.stringify(newUser)
    })
    .then(resp => resp.json())
    .then(resp => createGameinApi(resp))
   // .then(resp => updateScore(resp))
} 



function createGameinApi(newUserInAPI) {
    return fetch("http://localhost:3000/games", {
        method: "POST", 
        headers: {
            "content-type": "application/json", 
            accept: "application/json"
        }, 
        body: JSON.stringify({
            user_id: newUserInAPI.id, 
            score: newUserInAPI.score
        })
    }).then(resp => resp.json())
    .then(resp => pickRandom(resp))
}

function updateScore(e, game) {
    return fetch(`http://localhost:3000/games/${game.id}`, {
        method: "PATCH", 
        headers: {
            "content-type": "application/json", 
            accept: "application/json"
        }, 
        body: JSON.stringify({
            score: game.score += 1
        })
    }).then(resp => resp.json())
    .then(pickRandom(game))
}

function endQuiz(game) {
   // e.preventDefault()
    let endGameDiv = document.createElement('div')
    endGameDiv.innerHTML = `<div class = "game-header-box">Thanks for playing, ${newUser.name}! Click <a href ="file:///Users/maryselig/Documents/fewpjs-project-mode-guidelines/ArchitectureTriviaFrontEnd/home.html">here </a>to play again!</div>`
    // let newGameBtn = document.createElement('button')
    // newGameBtn.innerText = "Start a new quiz"
    // newGameBtn.addEventListener('click', startNew)
    // endGameDiv.append(newGameBtn)
    qBox.prepend(endGameDiv)
    //    createGameInApi(e)
}

function startNew() {
    document.location.reload()
}



