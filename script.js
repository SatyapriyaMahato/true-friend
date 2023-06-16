let randomNumber = Math.floor(Math.random() * 20);
let charDiv = document.getElementById("div-characters");

console.log(randomNumber);
function checkNum() {
    let number = Number(document.getElementById("inputNum").value);
    if (number === randomNumber) {
        document.getElementById("correct-dist").textContent = "you won";
        charDiv.style.width = "10%";
        charDiv.style.display = "flex";
    } else if (number < randomNumber) {
        document.getElementById("correct-dist").textContent = "stil apart";
        charDiv.style.width = "50%";
        charDiv.style.display = "flex";
    } else {
        document.getElementById("correct-dist").textContent = "too much";
        charDiv.style.display = "none";
    }
}