function analyzeString() {
    // 1. Get input text and remove extra spaces at start/end
    let text = document.getElementById("textInput").value.trim();

    // 2. Validate input
    if (text === "") {
        document.getElementById("result").innerHTML =
            "Please enter some text.";
        return;
    }

    // 3. Reverse the string
    let reversed = text.split("").reverse().join("");

    // 4. Palindrome check (ignore case and spaces)
    let normalized = text.toLowerCase().replace(/\s+/g, "");
    let normalizedReversed =
        normalized.split("").reverse().join("");

    let isPalindrome =
        normalized === normalizedReversed;

    // 5. Count vowels
    let vowels = 0;
    for (let char of text.toLowerCase()) {
        if ("aeiou".includes(char)) {
            vowels++;
        }
    }

    // 6. Count characters
    let characters = text.length;

    // 7. Count words
    let words = text.split(/\s+/).length;

    // 8. Show results
    document.getElementById("result").innerHTML = `
        <strong>Original:</strong> ${text}<br>
        <strong>Reversed:</strong> ${reversed}<br>
        <strong>Palindrome:</strong> ${isPalindrome ? "Yes" : "No"}<br>
        <strong>Vowels:</strong> ${vowels}<br>
        <strong>Characters:</strong> ${characters}<br>
        <strong>Words:</strong> ${words}
    `;
}