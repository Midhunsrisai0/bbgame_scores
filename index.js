let homeText = document.getElementById("Htext")
let outerText = document.getElementById("Otext")
let homeScore = 0
let outerScore = 0

//
function h1()
{
    homeScore +=1
    homeText.textContent = homeScore
}
function h2() {
  homeScore += 2;
  homeText.textContent = homeScore;
}
function h3() {
  homeScore += 3;
  homeText.textContent = homeScore;
}

//
function o1() {
  outerScore += 1;
  outerText.textContent = outerScore;
}
function o2() {
  outerScore += 2;
  outerText.textContent = outerScore;
}
function o3() {
  outerScore += 3;
  outerText.textContent = outerScore;
}
