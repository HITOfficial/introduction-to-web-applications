class BloonProperies {
    constructor() {
        this.popped = false;
        this.currentSize = 100;
    }
}


function updateSize(element, size) {
    element.style.fontSize = size + "px";
}


function actualSizeInfo(e, bloonProperties, sizeInfoElement) {
    // removing inner after bloon poop
    if (bloonProperties.popped === true) {
        sizeInfoElement.innerHTML = '';
    } else if (e.ctrlKey) {
        // control key was down
        sizeInfoElement.innerHTML = `size: ${bloonProperties.currentSize}`;
    }
}


function changeSize(e, bloonProperties, bloon, sizeInfoElement) {
    if (e.key === 'ArrowUp' && !bloonProperties.popped) {
        bloonProperties.currentSize = Math.min(500, bloonProperties.currentSize + 10);
        updateSize(bloon, bloonProperties.currentSize);

    } else if (e.key === 'ArrowDown' && !bloonProperties.popped) {
        bloonProperties.currentSize = Math.max(20, bloonProperties.currentSize - 10);
        if (bloonProperties.currentSize == 20) {
            bloonProperties.popped = true;
            bloon.classList.remove('bloon')
            bloon.classList.add('popped')
            updateSize(bloon, 200);
            actualSizeInfo(null, bloonProperties, sizeInfoElement);
            return;
        }
        updateSize(bloon, bloonProperties.currentSize);
    }
}


function bloonManipulation() {
    const bloonElement = document.querySelector('.emoji');
    const bloonClassElement = document.querySelector('.bloon');
    const sizeInfoElement = document.querySelector('.size-info');
    bloonProperties = new BloonProperies();
    addEventListener('keydown', (e) => changeSize(e, bloonProperties, bloonElement, sizeInfoElement));
    bloonClassElement.addEventListener('contextmenu', (e) => actualSizeInfo(e, bloonProperties, sizeInfoElement));
}


window.onload = bloonManipulation