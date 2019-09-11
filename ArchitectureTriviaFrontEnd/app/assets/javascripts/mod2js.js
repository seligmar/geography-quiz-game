
const usernameForm = document.querySelector("#usernameForm")
const startBtn = document.querySelector("#button")
const ol = document.createElement('ol')
const userInput = document.querySelector("#username")
const bottomOfPage = document.querySelector("#botton-of-page")

const qBox = document.querySelector("#qs-go-here")
const headerBox = document.querySelector("#header-box")


const index2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

userInput.addEventListener("click", e => { userInput.value = ""})

usernameForm.addEventListener("submit", e => {removeStartBox(e), pickRandom(e)})

function removeStartBox(e) {
    e.preventDefault()
    document.querySelector(".start-screen").style.display = "none"; 
    createUserBar(e)
    highScore(e)
}

function createUserBar(e) {
    newUser = {}
    newUser.name = e.target.children[0].value, 
    newUser.score = 0 
    let headerCont = document.createElement('div')   
    headerCont.classList.add('game-header-box')
    let welcomeH1 = document.createElement('H2')
    welcomeH1.id = "username_id"
    let scoreH2 = document.createElement('H2')
    scoreH2.id = "score_id"
    let questionH3 = document.createElement('H3')
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

function pickRandom(e) {
    e.preventDefault();
  if (index2.length === 0) {
      endQuiz(e)}  
  else {
  let rand = index2[Math.floor(Math.random() * index2.length)];
  var index = index2.indexOf(rand);
  if (index > -1) {
     index2.splice(index, 1);
  }
  fetchRandom(rand) }
}

function fetchRandom(n) {
  return fetch(`http://localhost:3000/questions/${n}`)
  .catch()
  .then(resp => resp.json())
  .then(showQuestion)
}

function showQuestion(question) {
    let qBoxDiv = document.createElement('div')
    let imageBox = document.createElement('div')
    qBoxDiv.className = "question-box"
    imageBox.innerHTML = `<img class = "img-box" src="${question.img}"/>`
    qBoxDiv.append(imageBox)
    qBox.append(qBoxDiv)  
    createButtons(question)
}

//assign button ids and randomize them 

function createButtons(question) {
    let quizBtns = document.createElement('div')
    quizBtns.className = "quiz-button"
    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    let btn3 = document.createElement('button')
    let btn4 = document.createElement('button')

    let buttons = [btn1, btn2, btn3, btn4] 

    btn1.addEventListener('click', e => incorrectAnswer(e, question))
    btn2.addEventListener('click', e => correctAnswer(e, question))
    btn3.addEventListener('click', e => incorrectAnswer(e, question))
    btn4.addEventListener('click', e => incorrectAnswer(e, question))

    btn1.classList.add('not-correct')
    btn2.classList.add('correct')
    btn3.classList.add('not-correct')
    btn4.classList.add('not-correct')

    btn1.innerText = `${question.answer1}`
    btn2.innerText = `${question.correct_answer}`
    btn3.innerText = `${question.answer3}`
    btn4.innerText = `${question.answer2}`

    while (buttons.length > 0) {
    let randBtn = buttons[Math.floor(Math.random() * buttons.length)];
    var index = buttons.indexOf(randBtn);
        if (index > -1) {
        quizBtns.append(randBtn)    
        buttons.splice(index, 1)};
    } 
    qBox.append(quizBtns)
    
}

function incorrectAnswer(e, question) {
    e.preventDefault()
    let responseDiv = document.createElement('div')
    responseDiv.classList.add('response-box')
    responseDiv.innerText = `Sorry, that is not correct. The ${question.name}
    is located in ${question.correct_answer}.`
    // add link to wikipedia page for a "learn more here"?
    qBox.append(responseDiv)
    pickRandom(e)
}

function correctAnswer(e, question) {
    // let score_value = document.querySelector("#name_id")
    // score_value.innerText = (parseInt(score_value.innerText) + 1) + " point(s)";
     let responseDivCorrect = document.createElement('div')
     responseDivCorrect.classList.add('response-box')
     responseDivCorrect.innerText = `Thats correct! The ${question.name}
     is located in ${question.correct_answer}.`
     // add link to wikipedia page for a "learn more here"?
     qBox.append(responseDivCorrect)
     updateScore()
     pickRandom(e)
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
    .then(resp => updateScore(resp))
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
}

function updateScore(newUserInAPI) {
    debugger
    return fetch(`http://localhost:3000/users/${newUserInAPI.id}`, {
        method: "PATCH", 
        headers: {
            "content-type": "application/json", 
            accept: "application/json"
        }, 
        body: JSON.stringify({
            score: newUserInAPI.score + 1
        })
    }).then(resp => resp.json())
}

function endQuiz(e) {
    e.preventDefault()
    let endGameDiv = document.createElement('div')
    endGameDiv.classList.add("quiz-button")
    endGameDiv.innerText = `Congratulations, ${newUser.name}, you earned ${newUser.score}!`
    let newGameBtn = document.createElement('button')
    newGameBtn.innerText = "Start a new quiz"
    newGameBtn.addEventListener('click', startNew)
    endGameDiv.append(newGameBtn)
    qBox.append(endGameDiv)
    //    createGameInApi(e)
}

function startNew() {
    document.location.reload()
}



