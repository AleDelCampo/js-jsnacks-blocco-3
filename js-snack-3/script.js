//utilizzo apposta i nomi nella function dati dal prof.

function tagliaArray(myArray, posizioneMin, posizioneMax) {
    if (posizioneMin < 0 || posizioneMin >= myArray.length || posizioneMax < 0 || posizioneMax >= myArray.length || posizioneMin >= posizioneMax) {
        return [];
    }
    
    return myArray.slice(posizioneMin, posizioneMax + 1);
}

const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = tagliaArray(numbersArray, 4, 8);
document.getElementById("result").innerText = result;
