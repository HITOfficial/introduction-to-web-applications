function changeBackgorund(element, color, lastColor) {
    if (color != lastColor[0]) {
        element.classList.remove(lastColor[0])
        element.classList.add(color)
        lastColor[0] = color;
    }
}


function changeSize(sizeElements, size, lastSize) {
    if (size != lastSize[0]) {
        sizeElements[lastSize[0]].classList.remove('blue')
        sizeElements[size].classList.add('blue')
        lastSize[0] = size;
    }
}

function DOMStart() {
    colorClasses = ['blue-gradient', 'red-gradient', 'green-gradient', 'orange-gradient', 'black-gradient'];
    colorButtons = document.getElementsByClassName('color-item');
    sizeButtons = document.getElementsByClassName('size-item');
    // without returning on events - operating on references to remove only to: in O(1) remove last element
    lastColor = ['blue-gradient'];
    lastSize = [2];
    console.log(colorButtons)
    shoeContent = document.querySelector('.shoe-content');
    // shoe  bacground event
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener('mouseenter', () => changeBackgorund(shoeContent, colorClasses[i], lastColor))
    }
    //size event
    for (let i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].addEventListener('click', () => changeSize(sizeButtons, i, lastSize))
    }

}


window.onload = DOMStart