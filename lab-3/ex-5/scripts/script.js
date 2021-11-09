// global variable
let totalSum = 0, propagationFlag = true;


function buttonsEvent() {
    // removing actual content after stop
    document.querySelector('p').innerText = '';

    const blueElement = document.querySelector('.blue');
    const redElement = document.querySelector('.red');
    const yellowElement = document.querySelector('.yellow');

    blueElement.addEventListener('click', blueEvent);
    redElement.addEventListener('click', redEvent);
    yellowElement.addEventListener('click', yellowEvent);


    if (propagationFlag == false) {
        blueElement.removeEventListener('click', blueEvent);
        redElement.removeEventListener('click', redEvent);
        yellowElement.removeEventListener('click', yellowEvent);
    }
    propagationFlag = !propagationFlag
}


function checkTotalSum() {
    if (totalSum > 30) {
        document.querySelector('.red').removeEventListener('click', redEvent);
        if (totalSum > 50) {
            document.querySelector('.yellow').removeEventListener('click', yellowEvent);
        }
    }
}


function blueEvent(e) {
    e.stopPropagation();
    document.querySelector('p').innerText = 'You pressed blue button with value 1';
    totalSum += 1;
    checkTotalSum();
}


function redEvent(e) {
    e.stopPropagation();
    document.querySelector('p').innerText = 'You pressed red button with value 2';
    totalSum += 2;
    checkTotalSum();
}


function yellowEvent(e) {
    e.stopPropagation();
    document.querySelector('p').innerText = 'You pressed yellow button with value 5'
    totalSum += 5;
    checkTotalSum();
}


function reload() {
    location.reload();
}


function events() {
    const stopStart = document.querySelector('.stop-start');
    const resetElement = document.querySelector('.reset');

    // window reload
    resetElement.addEventListener('click', reload);

    // on start turning on once
    buttonsEvent()
    stopStart.addEventListener('click', buttonsEvent);
}


window.onload = events
