const form = document.querySelector('.form')
const result = document.querySelector('.lowOrHi')
const prevGuesses = []
let remainGuesses = 10


function getRandomNumber(){
   return (Math.floor(Math.random() * 100) + 1)
}
let randNo = getRandomNumber()

function gameEnd(){
    form.removeEventListener('submit', submitBtnHandler);
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
    })
}
function submitBtnHandler(e){
    e.preventDefault()
    let guessField = document.querySelector('#guessField')
    let guessedVal = Number(guessField.value)
    
    //default checking before starting
    if(guessedVal === 0 || isNaN(guessedVal) || guessedVal < 1 || guessedVal > 100){
    
        result.innerHTML = "Plz enter a valid Guess"
        result.style.color = "red"
        guessField.value = ""
    }
    else{
      result.style.color = "green"
      // storing previous guesses
      prevGuesses.push(guessedVal)
      // displaying previous guesses
      document.querySelector(".guesses").innerHTML = prevGuesses.join(" , ")
      guessField.value = ""
    
      // upadating the value of remaning guesses
      remainGuesses -= 1
      document.querySelector('.lastResult').innerHTML = `${remainGuesses}`
    
      // game logic
      if(remainGuesses === 0){
          result.innerHTML = "You LOSE👎"
          result.classList.add("lose")
          gameEnd()
      }
      else{
        
          if(randNo > guessedVal){
              result.innerHTML = "Guess higher value"
          }
          else if(randNo < guessedVal){
              result.innerHTML = "Guess lower value"
          }
          else{
              result.innerHTML = "You WIN!🎉"
              result.classList.add("win")
              gameEnd()
          }
      }
    
    }
  
}

form.addEventListener(('submit'),submitBtnHandler)

