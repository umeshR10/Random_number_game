let randNumbersEl = document.getElementById("randNumbers");
let myAnswersEl = document.getElementById("myAnswers");
let outputEl = document.getElementById("output");
let a, b;

function restart() {
  a = Math.ceil(Math.random() * 100);
  b = Math.ceil(Math.random() * 100);
  randNumbersEl.textContent =` ${a} + ${b} = `;
  myAnswersEl.value = '';
  outputEl.textContent = '';
}
restart()
function check(){
    if (myAnswersEl.value == a+b){
        outputEl.textContent = "Hurrey, you are correct."
    }
    else{
        outputEl.textContent = "Your answer is wrong, please try again."
    }
}