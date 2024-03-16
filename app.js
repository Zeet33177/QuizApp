var answers = ["A", "C", "A"];
const radioButtons = document.querySelectorAll('input[type="radio"]');
function disableRadioButtons() {
    radioButtons.forEach(function(radioButton) {
      radioButton.disabled = true;
    });
  }
console.log(radioButtons)
    tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}
function returnScore() {
    disableRadioButtons();
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
}
