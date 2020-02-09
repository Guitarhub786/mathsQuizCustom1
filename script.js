window.addEventListener('load', init);

var quiz = [
    { sum1: 3, sum2: 6 },
    { sum1: 3, sum2: 7 },
    { sum1: 3, sum2: 8 },
    { sum1: 3, sum2: 9 },
    { sum1: 3, sum2: 12 },
    { sum1: 4, sum2: 5 },
    { sum1: 4, sum2: 6 },
    { sum1: 4, sum2: 7 },
    { sum1: 4, sum2: 8 },
    { sum1: 4, sum2: 9 },
    { sum1: 4, sum2: 8 },

    { sum1: 5, sum2: 4 },
    { sum1: 6, sum2: 4 },
    { sum1: 6, sum2: 7 },
    { sum1: 6, sum2: 8 },
    { sum1: 6, sum2: 9 },
    { sum1: 6, sum2: 11 },
    { sum1: 6, sum2: 12 },
    
    { sum1: 7, sum2: 2 },
    { sum1: 7, sum2: 3 },
    { sum1: 7, sum2: 4 },
    { sum1: 7, sum2: 5 },
    { sum1: 7, sum2: 6 },
    { sum1: 7, sum2: 7 },
    { sum1: 7, sum2: 8 },
    { sum1: 7, sum2: 9 },
    { sum1: 7, sum2: 10 },
    { sum1: 7, sum2: 11 },
    { sum1: 7, sum2: 12 },
    
];


let time = 60;
let score = 0;
let isPlaying;

var q1;     //question 1
var q2;     //question 2
var answer;    //answer
var display;    // display screen

//DOM abbriviation variables
const domInput = document.querySelector("#myInput");
const domOutput = document.querySelector("#myOutput");
const domQuestion = document.querySelector("#myQuestion");
const domTime = document.querySelector("#myTime");
const domScore = document.querySelector("#myScore");

// Initialize Quiz
function init() {
    //load sum from array
    showSum(quiz);
    //start matching on sum input
    // domInput.addEventListener('input', startMatch);

    //call countdown ever n seconds
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);


    console.log("next..");
}


//start match
function startMatch() {
    if (matchSums()) {
        isPlaying = true;
        time = 66;
        showSum(quiz);
        domInput.value = '';
        score++;
    }
    domScore.innerHTML = "Score: " + score;
}

//match current sum to sum input
function matchSums() {
    // use == as adding text + number
    // === you use 'parseInt' on value and array
    if (parseInt(domInput.value) === answer) {
        domOutput.value = "Correct!";
        return true;
    } else {
        domInput.value = '';
        domOutput.value = "Wrong!";
        return false;
    }
}



//pick and show random sum
function showSum(quiz) {
    //generate random array index
    const randIndex = Math.floor(Math.random() * quiz.length);

    display = quiz[randIndex].sum1 + " x " + quiz[randIndex].sum2;
    answer = parseInt(quiz[randIndex].sum1 * quiz[randIndex].sum2);

    //output random sum
    // document.getElementById("myQuestion").value = display;
    // document.getElementById("myOutput").value = answer;

    // Practice Mode Show answer
    // domOutput.value = answer;

    domQuestion.value = display;

}

//countdown timer
function countdown() {
    //make sure time is not run out
    if (time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        //game over
        isPlaying = false;
    }
    //show time
    domTime.innerHTML = "Time Left: " + time;
}

//check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        domQuestion.value = "Game Over!";
    }
}






// interact display section
function checkBtn(evt) {
    switch (evt) {
        case 'enter':
            checkAnswer();
            break;
        case 'C':
            clearAnswer();
            break;
        case 'delete':
            deleteAnswer();
            break;
        case 'ok':
            okAnswer();
            break;
        default:
            domInput.value += evt;
    }


}

function clearAnswer() {
    document.getElementById("myInput").value = "";
}

function deleteAnswer() {
    tmpString = document.getElementById("myInput").value
    tmpString = tmpString.slice(0, -1);
    document.getElementById("myInput").value = tmpString;
}

function okAnswer() {
    // reload browser
    location.reload();
    // document.getElementById("myInput").value = "OK";
}

function checkAnswer() {
    startMatch();
    // document.getElementById("myInput").value = "CHECK";
}
