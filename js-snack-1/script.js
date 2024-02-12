function reverseString (str) {
    let splitString = str.split("");  
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

function reverseWord() {
    let inputWord = prompt("Inserisci la parola da capovolgere:");
    if (inputWord) {
        let reversedWord = reverseString(inputWord);
        document.getElementById("result").innerText = reversedWord;
    } else {
        alert("Non hai inserito nulla.");
    }
}
reverseWord();