function table(): void {
    const lettersArray: String[] = ['A', 'B', 'C'];
    const numbersArray: Number[] = [0, 1, 2, 3];
    const bodyElement = document.querySelector('body');

    // 1
    for (let i = 0; i < lettersArray.length; i++) {
        for (let j = 0; j < numbersArray.length; j++) {
            let pElement = document.createElement('p');
            pElement.innerText = lettersArray[i] + String(numbersArray[j]);
            bodyElement.appendChild(pElement);
        }
    }

    // 2
    for (let i in lettersArray) {
        for (let j in numbersArray) {
            let pElement = document.createElement('p');
            pElement.innerText = lettersArray[i] + String(numbersArray[j]);
            bodyElement.appendChild(pElement);
        }
    }


    // 
    for (let i of lettersArray) {
        for (let j of numbersArray) {
            let pElement = document.createElement('p');
            pElement.innerText = i + String(j);
            bodyElement.appendChild(pElement);
        }
    }

}

window.onload = table;