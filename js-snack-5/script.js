function capitalizeFirstLetters(string) {
    
    let word = string.split(" ");
    
    for (let i = 0; i < word.length; i++) {
       
       let firstLetter = word[i].charAt(0).toUpperCase();
       
       let restOfWord = word[i].slice(1);
       
        word[i] = firstLetter + restOfWord;
    }

    return word.join(" ");
}

function forShow() {

    let inputString = document.getElementById("inputString").value;

    let capitalizedString = capitalizeFirstLetters(inputString);
    
    document.getElementById("result").textContent = capitalizedString;
}
