let seconds = 2;
let correctAnswer = 0
let incorrectAnswer = 0

function getElement(id) {
  return document.getElementById(id);
}

function timer() {
setTimeout(finish, seconds * 1000)
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {
    main();
    seconds--;
    getElement("time").textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countdown);
    }
    if(seconds > 10){
        getElement("time").style.color = "green"
    }
    if (seconds === 10){
      getElement("time").style.color = "orange";
    } 
    if (seconds === 5){
      getElement("time").style.color = "#ff0000";
    } 
  }, 1000);
}

function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value
    } catch{
        return;
    }if (input === "Lion"){
        correctAnswer++
        getElement("score").innerHTML = correctAnswer;
    } else {
        incorrectAnswer++
    }
    clearInterval(checkInterval)
}

function finish(){
    clearInterval(checkInterval);
    let percentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
    getElement("alertaccuracy").innerHTML = `Ձեր արդյունքն է ${percentage}%`
}

let checkInterval = setInterval(check, 50);

timer();

function getRandomAnimal(){
  return animals[Math.floor(Math.random(animals.length-1) * 10)];
}

function main(){
  animal = getRandomAnimal();
  getElement("animal").src = animal.pic
}
