function table() {
    var lettersArray = ['A', 'B', 'C'];
    var numbersArray = [0, 1, 2, 3];
    var bodyElement = document.querySelector('body');
    for (var i = 0; i < lettersArray.length; i++) {
        for (var j = 0; j < numbersArray.length; j++) {
            var pElement = document.createElement('p');
            pElement.innerText = lettersArray[i] + String(numbersArray[j]);
            bodyElement.appendChild(pElement);
        }
    }
    for (var i in lettersArray) {
        for (var j in numbersArray) {
            var pElement = document.createElement('p');
            pElement.innerText = lettersArray[i] + String(numbersArray[j]);
            bodyElement.appendChild(pElement);
        }
    }
    for (var _i = 0, lettersArray_1 = lettersArray; _i < lettersArray_1.length; _i++) {
        var i = lettersArray_1[_i];
        for (var _a = 0, numbersArray_1 = numbersArray; _a < numbersArray_1.length; _a++) {
            var j = numbersArray_1[_a];
            var pElement = document.createElement('p');
            pElement.innerText = i + String(j);
            bodyElement.appendChild(pElement);
        }
    }
}
window.onload = table;
