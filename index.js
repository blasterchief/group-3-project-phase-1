let counter = 0
const jokeJod = document.getElementById('jod')
const setupJod = document.getElementById('setup')
const deliveryJod = document.getElementById('delivery')
const jokebyCategory = document.getElementById('joke-by-category')
const setupCat = document.getElementById('setup-cat')
const deliveryCat = document.getElementById('delivery-cat')
const singleCat = document.getElementById('cat-joke')
const btn = document.getElementById('random-joke')
const anyButton = document.getElementById('any')
const miscButton = document.getElementById('misc')
const progButton = document.getElementById('programming')
const darkButton = document.getElementById('dark')
const punButton = document.getElementById('pun')
const spookyButton = document.getElementById('spooky')
const xmasButton = document.getElementById('christmas')
const catButtonArray = []
catButtonArray.push(anyButton, miscButton, punButton, spookyButton, xmasButton, darkButton, progButton)
catButtonArray.forEach( (button) => {
  buttonAddListener(button)
})
function buttonAddListener(button) {
  button.addEventListener('click', (buttonEvent) => {
    catButtonHandler(buttonEvent)})
}
function catButtonHandler(buttonEvent) {
  // console.log(event.target.textContent)
 const btncontent = buttonEvent.target.textContent
 fetch(`https://v2.jokeapi.dev/joke/${btncontent}?amount=10?format=json&safe-mode`)
 .then(resp => resp.json())
 .then(jokeData =>{
  // console.log(jokeData.jokes[0])
  // function still works when console logging
  // console.log(determineJokeTypeCat(jokeData.jokes[0]))
  scrollThruJoke(jokeData, buttonEvent) 
  determineJokeTypeCat(jokeData.jokes[counter]) 
 })
}

function scrollThruJoke(jokeData, buttonEvent){
 document.addEventListener('keydown', (keyEvent)=> {
    scrollHandler(jokeData, keyEvent, buttonEvent)
  })
}

function scrollHandler(jokeData, keyEvent, buttonEvent){

  if (keyEvent.key =="ArrowRight"){
    console.log(keyEvent)
    if(counter < 9){
      counter++;
      console.log(`${counter} IM GOING FORWARDS`)
      console.log(jokeData.jokes[counter])
      determineJokeTypeCat(jokeData.jokes[counter]);
    } else  {
      // console.log(counter)
      counter = 0
      // console.log(counter)
      jokeMaxHandler(keyEvent, buttonEvent)
    }
  } else if (keyEvent.key =="ArrowLeft"){
    if(counter > 0){
      console.log(`${counter} Im going backwards`)
      determineJokeTypeCat(jokeData.jokes[counter])
      counter--;
    } else if(counter < 0) {
      console.log("left key was pressed below 0")
    }
}}

function determineJokeTypeCat(joke) {
  if (joke.type === "twopart") {
    renderTwoPartCat(joke)
    // console.log(`SETUP ${joke.setup}, DELIVERY ${joke.delivery}`)
  } else {
    renderOnePartCat(joke)
    // console.log(`JOKE ${joke.joke}`)

    
}}


function renderTwoPartCat(joke) {
  setupCat.innerHTML = ''
  deliveryCat.innerHTML = ''
  singleCat.textContent = ''
  setupCat.textContent = `${joke.setup}`
  deliveryCat.textContent = `${joke.delivery}`

}

function renderOnePartCat(joke){
singleCat.textContent = ''
setupCat.innerHTML = ''
deliveryCat.innerHTML = ''
singleCat.textContent = `${joke.joke}`
}



function randomOneJoke() {
const jokeCategory = "any"
fetch(`https://v2.jokeapi.dev/joke/${jokeCategory}?amount=1?format=json&safe-mode`)
  .then(resp => resp.json())
  .then(jokeData => {
    //console.log(jokeData);
    // console.log(jokeData.jokes)
     //renderJokeButtons(jokeData)
    // renderJod(jokeData.jokes)
    determineJokeType(jokeData)
  })
}

btn.addEventListener('click', (e) => {
  // console.log(e)
  // if (counter < 10) {
  //   counter++
  //   // console.log(counter) 
  // } else {
  //   counter = 0
    randomOneJoke()

  //   console.log(counter)
  //   return counter
  })

//If joke is two part return set/delivery. if joke is onepart return joke body

// function jokesLoop(jokeArray) {
//     for(joke of jokeArray) {
//       determineJokeType(joke)}}
      //console.log(joke);

function renderTwoPart(joke) {
    
    setupJod.innerHTML = ''
    deliveryJod.innerHTML = ''
    jokeJod.textContent = ''
    setupJod.textContent = `${joke.setup}`
    deliveryJod.textContent = `${joke.delivery}`
}

function renderOnePart(joke){
  
  jokeJod.textContent = ''
  setupJod.innerHTML = ''
  deliveryJod.innerHTML = ''
  jokeJod.textContent = `${joke.joke}`
}

function determineJokeType(joke) {
  if (joke.type === "twopart") {
    renderTwoPart(joke)
    // console.log(`SETUP ${joke.setup}, DELIVERY ${joke.delivery}`)
  } else {
    renderOnePart(joke)
    // console.log(`JOKE ${joke.joke}`)
}}

  //render joke buttons.

function renderJokeButtons(jokeData) {
    const catButtonList = document.createElement("ul")  //creating html list
    const buttonDiv = document.getElementById("joke-categories-menu")
    buttonDiv.append(catButtonList)
    jokeData.jokes.forEach((joke) => {
      const jokeButton = document.createElement("button")
      jokeButton.textContent = joke.category
      catButtonList.append(jokeButton)
    })
    
   renderOnePartBtn()
   renderTwoPartBtn()
}

randomOneJoke()

// random joke button 

// const randomJoke = () => {
//     fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
//     .then(resp => resp.json())
//     .then(joke =>
//       displayJoke())
// }

// display Joke
const submitForm = document.getElementById("submit-a-joke-card")

/*const jokeType = document.getElementById("part-quantity-input")
console.log(jokeType)
console.log(submitForm)
const onePartButton = document.createElement("button")
const twoPartButton = document.createElement("button")
//onePartButton.textContent = "One Part Joke"
twoPartButton.textContent = "Two Part Joke"
submitForm.appendChild(onePartButton, twoPartButton)*/

function renderSelectButtons() {
  /*const onePartBtn = document.createElement("button")
  const twoPartBtn = document.createElement("button")
 // console.log(submitForm)
 // console.log(onePartBtn)
 // console.log(twoPartBtn)
 onePartBtn.textContent = "One Part Joke"
 twoPartBtn.textContent = "Two Part Joke"
 onePartBtn.type = "button"
 twoPartBtn.type = "button"
 onePartBtn.addEventListener("click", (event) => {onePartBtnClick(event)})
 twoPartBtn.addEventListener("click", (event) => {twoPartBtnClick(event)})
 submitForm.append(onePartBtn, twoPartBtn)
 */
renderOnePartBtn()
renderTwoPartBtn()
}
renderSelectButtons()
function onePartBtnClick(event) 
{
console.log("clicked one-part")
event.target.parentNode.innerHTML =""
const jokeInput = document.createElement("Input")
jokeInput.type = "text"
jokeInput.placeholder = "Enter Joke Content Here"
submitForm.append(jokeInput)
renderSubmitButton()
renderTwoPartBtn()
createCategoryList()
}
function twoPartBtnClick(event) {

console.log("clicked two part")
event.target.parentNode.innerHTML =""
const setupInput = document.createElement("input")
const deliveryInput = document.createElement("input")
setupInput.type = "text"
deliveryInput.type = "text"
setupInput.placeholder = "Input Setup Here"
deliveryInput.placeholder = " Input Delivery here"
submitForm.append(setupInput, deliveryInput)
renderSubmitButton()
renderOnePartBtn()
createCategoryList()
}
function renderSubmitButton() {
  const submitButton = document.createElement("button")
  submitButton.id = "submit-button"
  submitButton.type = "submit"
  submitButton.textContent = "Submit a Joke"
  submitForm.append(submitButton)
 // renderOnePartBtn()
  }

function renderOnePartBtn() {
  const onePartBtn = document.createElement("button")
  onePartBtn.textContent = "One Part Joke Form"
  onePartBtn.type = "button"
  onePartBtn.id = "one-part-button"
  submitForm.appendChild(onePartBtn)
  onePartBtn.addEventListener("click", (event) => {onePartBtnClick(event)})
}

function renderTwoPartBtn() {
  const twoPartBtn = document.createElement("button")
  twoPartBtn.type = "button"
  twoPartBtn.textContent = "Two Part Joke Form"
  twoPartBtn.id = "two-part-button"
  twoPartBtn.addEventListener("click", (event) => {twoPartBtnClick(event)})
  submitForm.appendChild(twoPartBtn)
}


function jokeMaxHandler(keyEvent, buttonEvent){
  const btncontent = buttonEvent.target.textContent
  fetch(`https://v2.jokeapi.dev/joke/${btncontent}?amount=10?format=json&safe-mode`)
  .then(resp => resp.json())
  .then(jokeData =>{
   // console.log(jokeData.jokes[0])
   // function still works when console logging
   // console.log(determineJokeTypeCat(jokeData.jokes[0]))
  //  determineJokeTypeCat(jokeData.jokes[counter]) 
  //  scrollThruJoke(jokeData) 
  scrollHandler(jokeData, keyEvent, buttonEvent)
  })
}

function createCategoryList() {
  createCheckBox("Any")
  createCheckBox("Christmas")
  createCheckBox("Spooky")
  createCheckBox("Pun")
  createCheckBox("Programming")
  createCheckBox("Misc")
  createCheckBox("Dark")
}

function createCheckBox(checkBoxContent) {

const checkBox = document.createElement("input")
checkBox.class = "form-control"
checkBox.type = "checkbox"
checkBox.name = `category-checkbox`
//checkBox.label = `${checkBoxContent}`
checkBox.value = `${checkBoxContent}`
const checkBoxLabel = document.createElement("label")
checkBoxLabel.textContent = `${checkBoxContent}`
submitForm.prepend(checkBoxLabel)
checkBoxLabel.append(checkBox)
//console.log(submitForm)
console.log(checkBoxLabel)
}

/*
<label class="form-control">
  <input type="checkbox" name="checkbox" />
  Checkbox
</label>

<label class="form-control">
  <input type="checkbox" name="checkbox-checked" checked />
  Checkbox - checked
</label>
*/

