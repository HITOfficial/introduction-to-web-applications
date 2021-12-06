// global variable
let totalSum = 0, propagationFlag = true;


function buttonsEvent() {
    // removing actual content after stop
    document.querySelector('p').innerText = '';

    const blueElement = document.querySelector('.blue');
    const redElement = document.querySelector('.red');
    const yellowElement = document.querySelector('.yellow');
    console.log('propagation');
    blueElement.addEventListener('click', blueEvent);
    if (totalSum < 30) {
        redElement.addEventListener('click', redEvent);
    }
    if (totalSum < 50) {
        yellowElement.addEventListener('click', yellowEvent);
    }
    propagationFlag = !propagationFlag
}


function checkTotalSum() {
    if (totalSum > 30) {
        document.querySelector('.yellow').removeEventListener('click', yellowEvent);
        if (totalSum > 50) {
            document.querySelector('.red').removeEventListener('click', redEvent);
        }
    }
    document.querySelector('.counter').innerHTML = totalSum;
}


function blueEvent(e) {
    document.querySelector('p').innerText = 'You pressed blue button with value 1';
    totalSum += 1;
    checkTotalSum();
}


function redEvent(e) {
    if (!propagationFlag) {
        e.stopPropagation();
    }
    document.querySelector('p').innerText = 'You pressed red button with value 2';
    totalSum += 2;
    checkTotalSum();
}


function yellowEvent(e) {
    if (!propagationFlag) {
        e.stopPropagation();
    }
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
