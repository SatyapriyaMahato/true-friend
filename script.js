let randomNumber = Math.floor(Math.random() * 20) + 1;
let charDiv = document.getElementById("div-characters");
let divBoy = document.getElementById("boy");
let divGirl = document.getElementById("girl");
let text = document.getElementById("correct-dist");
let divscore = document.getElementById("score");
let score = 20;
let highScore = 0;
let highScoreText = document.getElementById("highScore");


function checkNum() {
    let number = Number(document.getElementById("inputNum").value);
    const percent = Math.floor(90 - (90 * (number / randomNumber)));
    if (score > 1) {

        console.log(randomNumber);
        if (number <= 0) {
            text.textContent = "enter a valid number";
            score--;
            divscore.textContent = score;

        } else if (number === randomNumber) {
            text.textContent = "you won";
            charDiv.style.gap = percent + "%";
            removeTranform()
            document.body.style.backgroundColor = "#BEF533";
            score--;
            if (score > highScore) {
                highScore = score;
                highScoreText.textContent = highScore;
            }
        } else if (number < randomNumber) {
            text.textContent = "stil apart";
            charDiv.style.gap = percent + "%";
            removeTranform()
            score--;
            divscore.textContent = score;
        } else if (number > randomNumber) {
            text.textContent = "too much";
            charDiv.style.width = "10%";
            divBoy.style.transform = "translateX(100%)";
            divGirl.style.transform = "translateX(-100%)";
            score--;
            divscore.textContent = score;
        }
    }
    else {
        text.textContent = "you lost";
        divscore.textContent = 0;
        document.body.style.backgroundColor = "#FA554F";

    }
}
function reset() {
    score = 20;
    divscore.textContent = score;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    text.textContent = "Start"
    removeTranform()
    document.body.style.backgroundColor = "#ECF2FF";
    charDiv.style.width = "90%";
    document.getElementById("inputNum").value = "";
    charDiv.style.gap = "90%";
}

function removeTranform(){
    divBoy.style.transform = "translateX(0%)";
    divGirl.style.transform = "translateX(0%)";
}