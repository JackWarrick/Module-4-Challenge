const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

//Need to 1 - start game

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}



// bring on next question

function setNextQuestion(){
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
nextButton.classList.add('hide')
while (answerButtonsElement.firstChild)
 answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}



//select answer function that does something when right or wrong is selected

function selectAnswer (e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1){
nextButton.classList.remove('hide')
} else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
}
}

function setStatusClass(element, correct){
clearStatusClass(element)
if (correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
{
    question: 'What year was JavaScript created?',
    answers: [
        {text: '1995', correct: true},
        {text: '2000', correct: false},
        {text: '2005', correct: false},
        {text: '2010', correct: false},

    ]
},
{
    question: 'Is JavaScript the most common coding language in the world?',
    answers: [
        {text: 'Yes', correct: true},
        {text: 'No', correct: false},
    ]
},
{
    question: 'The original name of JavaScript was Espresso',
    answers: [
        {text: 'false', correct: true},
        {text: 'true', correct: false},
    ]
},


]

//timer stuff

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  window.alert("The Test is over.")
}

setTime();
