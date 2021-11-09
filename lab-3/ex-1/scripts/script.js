function buttonEvent() {
    const button = document.querySelector('button');
    const section = document.querySelector('section');
    button.addEventListener('click', () => {
        const dataToSet = prompt('Add data');
        section.innerText = dataToSet;
    });
}

window.onload = buttonEvent;