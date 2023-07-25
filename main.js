let correct;
let seconds = 25;
let correctAnswer = 0
let incorrectAnswer = 0

function getElement(id) {
  return document.getElementById(id);
}

function timer() {
setTimeout(finish, seconds * 1000)
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {
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
    }if (input === correct.name){
        correctAnswer++
        getElement("score").innerHTML = correctAnswer;
    } else {
        incorrectAnswer++;
    }
    main()
}

function finish(){
    clearInterval(checkInterval);
    getElement("alert").style.display = "block";
    getElement("card").style.display = "none";
    getElement("alertscore").innerHTML = correctAnswer;
    let percentage = Math.round(correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
    if(isNaN(percentage)){
      resultForAnswers = "Դուք արդյունք չեք ցուցաբերել"
      getElement("alertaccuracy").innerHTML = ` ${resultForAnswers}`
    }else{
      if(percentage >= 75 && percentage < 95){
        resultForAnswers = "Լավ է"
      }else if (percentage >= 95){
        resultForAnswers = "Գերազանց է"
      }else if (percentage < 75){
        resultForAnswers = "Նորմալ է"
      }

      getElement("alertaccuracy").innerHTML = `Ձեր արդյունքը ${resultForAnswers}`
    }
   
}

let checkInterval = setInterval(check, 50);
main();
timer();

function getRandomAnimal(){
  return animals[Math.round(Math.random() * (animals.length - 1))];
}
function main() {
  let options = [];
  const maxOptions = 3;
  while (options.length < maxOptions) {
    let animal = getRandomAnimal();
    if (options.indexOf(animal) === -1) {
      options.push(animal);
    }
  }
  for (let i = 0; i < options.length; i++) {
    getElement(`option${i + 1}label`).innerHTML = options[i].name;
    getElement(`option${i + 1}input`).value = options[i].name;
    getElement(`option${i + 1}input`).checked = false;
  }
  correct = options[Math.round(Math.random() * (options.length - 1))];
  getElement("animal").src = correct.pic;
}

function refresh() {
  location = location;
}