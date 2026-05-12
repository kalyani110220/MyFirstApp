function add() {
    let a = getValues()[0];
    let b = getValues()[1];

    document.getElementById("result").innerHTML =
        "Result: " + (a + b);
}

function subtract() {
    let a = getValues()[0];
    let b = getValues()[1];

    document.getElementById("result").innerHTML =
        "Result: " + (a - b);
}

function multiply() {
    let a = getValues()[0];
    let b = getValues()[1];

    document.getElementById("result").innerHTML =
        "Result: " + (a * b);
}

function divide() {
    let a = getValues()[0];
    let b = getValues()[1];

    document.getElementById("result").innerHTML =
        "Result: " + (a / b);
}

// common function (VERY IMPORTANT)
function getValues() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    return [a, b];
}