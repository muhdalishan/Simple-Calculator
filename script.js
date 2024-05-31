function add() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = Number(num1) + Number(num2);
}

function subtract() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = Number(num1) - Number(num2);
}

function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = Number(num1) * Number(num2);
}

function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById('result').value = Number(num1) / Number(num2);
}