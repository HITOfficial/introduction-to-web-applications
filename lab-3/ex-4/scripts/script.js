function buttonEvents() {
    const incrementButton = document.querySelector('.increment');
    const removeEventButton = document.querySelector('.remove-event');
    incrementButton.addEventListener('click', increment);
    removeEventButton.addEventListener('click', () => {
        incrementButton.removeEventListener('click', increment);
        document.querySelector('span').innerText = '0'
    });

}


function increment() {
    const spanElement = document.querySelector('span');
    spanElement.innerText = Number(spanElement.innerText) + 1
}


window.onload = buttonEvents;