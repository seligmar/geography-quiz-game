// Start Screen

   const usernameForm = document.querySelector("#usernameForm")
   const startBtn = document.querySelector("#button")
   const ol = document.createElement('ol')

   usernameForm.addEventListener("submit", e => {
       e.preventDefault()
       document.querySelector(".start-screen").style.display = "none";
   })



