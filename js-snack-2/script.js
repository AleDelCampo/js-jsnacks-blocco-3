//Scrivi una funzione che fonda due array presi come parametri 
//(date per scontato che abbiano lo stesso numero di elementi) 
//prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function combinedArrays(firstArray, secondArray) {
    let toCombineArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        toCombineArray.push(firstArray[i]);
        toCombineArray.push(secondArray[i]);
    }
    return toCombineArray;
}

const firstArray = ['c', 'i', 'a', 'o'];
const secondArray = [1, 2, 3, 4];
const union = combinedArrays(firstArray, secondArray);
document.getElementById("result").innerText = union;