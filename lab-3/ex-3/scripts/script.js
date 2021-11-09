class Index {
    constructor() {
        this.index = 3;
    }
    incrementIndex() {
        this.index += 1;
    }
}


function remove() {
    const ulElement = document.querySelector('ul');
    if (ulElement.children.length) {
        ulElement.removeChild(ulElement.firstElementChild);
    }
}


function add(index) {
    const ulElement = document.querySelector('ul');
    const liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode(index.index));
    ulElement.appendChild(liElement);
    index.incrementIndex();
}


function arrayManipulate() {
    const index = new Index();
    const buttonAdd = document.querySelector('.add');
    const buttonRemove = document.querySelector('.remove');
    buttonAdd.addEventListener('click', () => add(index))
    buttonRemove.addEventListener('click', remove)
}

window.onload = arrayManipulate;
