function getValues() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerHTML =
            "Please enter both numbers.";
        return null;
    }

    return [a, b];
}

function add() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;
    let result = a + b;

    showResult(`${a} + ${b}`, result);
}

function subtract() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;
    let result = a - b;

    showResult(`${a} - ${b}`, result);
}

function multiply() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;
    let result = a * b;

    showResult(`${a} × ${b}`, result);
}

function divide() {
    let values = getValues();
    if (!values) return;

    let [a, b] = values;

    if (b === 0) {
        document.getElementById("result").innerHTML =
            "Cannot divide by zero.";
        return;
    }

    let result = a / b;

    showResult(`${a} ÷ ${b}`, result);
}

function showResult(expression, result) {
    document.getElementById("result").innerHTML =
        "Result: " + result;

    addToHistory(`${expression} = ${result}`);
}

function addToHistory(text) {
    let li = document.createElement("li");
    li.innerText = text;

    document.getElementById("history").appendChild(li);
}

function clearAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML =
        "Result: 0";
}

function clearHistory() {
    document.getElementById("history").innerHTML = "";
}