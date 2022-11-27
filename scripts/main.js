document.onload = function() {
    let answer = document.getElementById("answer");
}
function clearScreen() {
    answer.value = "";
}
function display(c) {
    answer.value += c;
}
function calculate() {
    answer.value = eval(answer.value);
}
function isOperator(c) {
    if (c == '/' || c == '*' || c == '+' || c == '-')
        return true;
    return false;
}