function analyzeNumber() {

    let n = parseInt(document.getElementById("numberInput").value);

    let original = n;

    // Reverse Logic
    let reverse = 0;
    let temp = n;

    while (temp > 0) {
        let digit = temp % 10;
        reverse = reverse * 10 + digit;
        temp = Math.floor(temp / 10);
    }

    // Palindrome Check
    let palindrome = (original === reverse);

    // Armstrong Check
    temp = n;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    let armstrong = (sum === original);

    // Display Result
    document.getElementById("result").innerHTML =
        `
        Reverse: ${reverse} <br>
        Palindrome: ${palindrome} <br>
        Armstrong: ${armstrong}
        `;
}