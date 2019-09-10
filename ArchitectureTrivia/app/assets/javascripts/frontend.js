// Start Screen

   const usernameForm = document.querySelector("#usernameForm")
   const startBtn = document.querySelector("#button")
   const inputField = document.querySelector('#username')
   const ol = document.createElement('ol')

   inputField.addEventListener("click", e =>{
       inputField.value = ""
   })

   usernameForm.addEventListener("submit", e => {
       e.preventDefault()
       document.querySelector(".start-screen").style.display = "none"; //Hide this after clicking the submit button
   })



