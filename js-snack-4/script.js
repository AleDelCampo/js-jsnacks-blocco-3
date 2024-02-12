function generateAlphabeticalOrder(string) {
    return string.split("").sort().join("");
}

function visualizeAlphabeticalOrder() {
    let inputString = document.getElementById("inputString").value;
    let result = generateAlphabeticalOrder(inputString);
    document.getElementById("result").innerText = "Ecco il tuo ordine: " + result;
}

