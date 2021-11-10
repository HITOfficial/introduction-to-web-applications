function bookEvent() {
    const submitElement = document.querySelector('input[type="submit"');
    submitElement.addEventListener('click', addEvent);

    // adding remove event to actual created events
    const entries = document.querySelectorAll('.remove')
    for (let element of entries) {
        element.addEventListener('click', removeEvent)
    }
}


function addEvent() {
    const parent = document.querySelector('.entries');
    const entryElement = document.createElement('div');
    const dataElement = document.createElement('div');
    const h4Element = document.createElement('h4');
    const pElement = document.createElement('p');
    const removeElement = document.createElement('div');
    const name = document.querySelector('input[type="text"]');
    const phone = document.querySelector('input[type="number"]');
    const nameElement = document.querySelector('.text');
    const phoneElement = document.querySelector('.phone');

    dataElement.classList.add('data');
    entryElement.classList.add('entry');
    removeElement.classList.add('remove');

    if (!phoneValidation() || !textValidation()) {
        return
    }

    // removing warnings
    if (nameElement.classList.contains('invalid-text')) {
        nameElement.classList.remove('invalid-text')
    }
    if (phoneElement.classList.contains('invalid-phone')) {
        phoneElement.classList.remove('invalid-phone')
    }

    // adding a space every three digits of number
    pElement.innerText = phone.value.match(/.{3}/g).join(' ');;
    h4Element.innerText = name.value
    dataElement.appendChild(h4Element);
    dataElement.appendChild(pElement);
    entryElement.appendChild(dataElement);
    entryElement.appendChild(removeElement);
    parent.prepend(entryElement);

    // new element is added as a first
    const removeButtonElement = document.querySelector('.remove');
    removeButtonElement.addEventListener('click', removeEvent);
}


function phoneValidation() {
    const phone = document.querySelector('input[type="number"').value;
    const phoneElement = document.querySelector('.phone');
    if (Math.floor(Math.log10(phone)) + 1 != 9) {
        phoneElement.classList.add('invalid-phone');
        return false;
    }
    return true;
}


function textValidation() {
    const name = document.querySelector('input[type="text"').value;
    const nameElement = document.querySelector('.text');
    regex = /^[A-Z][a-z]*$/;
    if (!regex.test(name)) {
        nameElement.classList.add('invalid-text');
        return false
    }
    return true;
}


function removeEvent() {
    this.parentNode.remove();
}


window.onload = bookEvent