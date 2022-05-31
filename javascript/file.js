const generateBtn = document.getElementById("generate-btn")
const firstPassword = document.getElementById("first-box")
const secondPassword = document.getElementById("second-box")
const thirdPassword = document.getElementById("third-box")
const fourthPassword = document.getElementById("fourth-box")
const displayLength = document.getElementById("length")
const possibleChars = ["1234567890qwertyuiophgfsxvbmIKJHGDSXBM"]
let realChars = JSON.stringify(possibleChars)
let password =""
let length=8
displayLength.textContent += length
function generate(){
  let result= ""
    for ( let i=0; i<length; i++){
      result += realChars.charAt(Math.floor(Math.random()*34))
    }
  password = result
  console.log(password)
  firstPassword.innerHTML = password
}
function generateSec (){
  let result= ""
    for ( let i=0; i<length; i++){
      result += realChars.charAt(Math.floor(Math.random()*34))
    }
  password = result
  console.log(password)
  secondPassword.innerHTML = password
}
function generateThird (){
  let result= ""
    for ( let i=0; i<length; i++){
      result += realChars.charAt(Math.floor(Math.random()*34))
    }
  password = result
  console.log(password)
  thirdPassword.innerHTML = password
}
function generateFourth (){
  let result= ""
    for ( let i=0; i<length; i++){
      result += realChars.charAt(Math.floor(Math.random()*34))
    }
  password = result
  console.log(password)
  fourthPassword.innerHTML = password
}
function increase(){
  length += 1
  console.log(length)
  displayLength.innerHTML ="curent length of password: " + length
}

