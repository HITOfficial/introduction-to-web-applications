class ActualEmployee {
    constructor() {
        this.index = 0;
    }
}


function cardChanger() {
    const employees = [
        { fullName: 'Peter Piotrowski', funct: 'intern', src: 'images/p1.jpg' },
        { fullName: 'Ann Nowak', funct: 'web designer', src: 'images/p2.jpg' },
        { fullName: 'Johanna Brown', funct: 'boss', src: 'images/p3.jpg' },
        { fullName: 'Katy Edson', funct: 'consultant', src: 'images/p4.jpg' },
        { fullName: 'Johanna Edward', funct: 'accountant', src: 'images/p5.jpg' },
        { fullName: 'Bubmba Ki', funct: 'designer', src: 'images/p6.jpg' },
        { fullName: 'John Bravo', funct: 'programer', src: 'images/p7.jpg' }
    ]

    const actualEmployee = new ActualEmployee();

    const imageElement = document.querySelector('.image');
    const fullNameElement = document.querySelector('.full-name');
    const functionElement = document.querySelector('.function');

    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const random = document.querySelector('.random');

    left.addEventListener('click', () => changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, -1))
    right.addEventListener('click', () => changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, 1))
    random.addEventListener('click', () => changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, null))

}


function changeEmployeeCard(employees, actualEmployee, imageElement, fullNameElement, functionElement, changer) {
    if (changer === null) {
        changer = Math.floor(Math.random() * employees.length)
        // if random was equal 0 -> changing changer to 1;
        if (changer === 0) {
            changer = 1;
        }
    }

    // changing index, without negative indexes
    if (actualEmployee.index + changer >= employees.length) {
        actualEmployee.index = (actualEmployee.index + changer) % employees.length;
    } else if (actualEmployee.index + changer < 0) {
        actualEmployee.index = employees.length + actualEmployee.index + changer;
    }
    else {
        actualEmployee.index = actualEmployee.index + changer;
    }

    // Nodes changing
    index = actualEmployee.index;
    imageElement.style.backgroundImage = `url(${employees[index].src})`;
    fullNameElement.innerText = employees[index].fullName;
    functionElement.innerText = employees[index].funct;
}


window.onload = cardChanger