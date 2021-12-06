function menu() {
    input = document.querySelector('input');
    startGameElement = document.querySelector('.start-game');
    startGameElement.addEventListener('click', startGame);
    updateRanking();
    goToMenu();
}


class GameInfo {
    constructor(name) {
        this.score = 6;
        this.lives = 3;
        this.name = name
        this.gameOn = true;
    }
}


function goToMenu() {
    goToMenuElement = document.querySelector('.go-to-menu');
    rankingMenuElement = document.querySelector('.ranking')
    displayRankingElement = document.querySelector('.display-ranking')
    goToMenuElement.addEventListener('click', () => displayToggle(rankingMenuElement));
    displayRankingElement.addEventListener('click', () => displayToggle(rankingMenuElement));

}

function displayToggle(object) {
    if (!object.classList.contains('d-none')) {
        object.classList.add('d-none');
    }
    else {
        object.classList.remove('d-none');
    }
}

function displayNone(argsArray) {
    argsArray.forEach(e => {
        if (!e.classList.contains('d-none')) {
            e.classList.add('d-none');
        }
    });
}



function startGame() {
    const input = document.querySelector('input');
    const warningElement = document.querySelector('.warning');
    const nameElement = document.querySelector('.user-name');
    const menuElement = document.querySelector('.menu');
    const rankingElement = document.querySelector('.ranking');
    const board = document.querySelector('.board');
    const livesElement = document.querySelector('.lives');
    const scoreElement = document.querySelector('.score');
    const nameValue = input.value;
    // added nickname
    if (input.value.length) {
        if (!warningElement.classList.contains('d-none')) {
            warningElement.classList.add('d-none');
        }
        nameElement.classList.remove('d-none');
        nameElement.innerText = nameValue;
        scoreElement.classList.remove('d-none');
        livesElement.classList.remove('d-none');
        // game info object to store actual score user name, lives remaining
        const gameInfo = new GameInfo(nameValue);
        board.addEventListener('click', () => shot(gameInfo));
        // creating new zombie every second
        setInterval(newZombie, 1000, gameInfo, board);
        // removing escaped zombies
        setInterval(removeEscapedZombies, 200, gameInfo);

        // cursor to crosshair
        board.classList.add('cursor-crosshair');

        // displaying none ranking and main menu
        displayNone([menuElement, rankingElement]);
    }
    else {
        nameElement.innerText = '';
        warningElement.classList.remove('d-none');
        setTimeout(() => warningElement.classList.add('d-none'), 3000);
    }
}


function newZombie(gameInfo, board) {
    zombie = document.createElement('div');
    zombie.classList.add('zombie');
    zombie.style.bottom = `${Math.floor(Math.random() * 200 - 50)}px`;
    zombie.style.transform = `scale(${Math.random() * 1.2 + 0.5})`;
    zombie.style.animationDuration = `${Math.random() * 4000 + 4000}ms`
    board.appendChild(zombie);
    zombie.addEventListener('click', (e) => shotTheZombie(zombie, gameInfo));
}


function shotTheZombie(zombie, gameInfo) {
    // adding 18 to score -> becouse on every board click -6 points
    zombie.remove();
    gameInfo.score += 18;
    updateInfo(gameInfo);
}


function shot(gameInfo) {
    gameInfo.score -= 6;
    updateInfo(gameInfo);
}


function updateInfo(gameInfo) {
    document.querySelector('.score').innerText = gameInfo.score;
    document.querySelector('.live').innerText = gameInfo.lives;
    if (gameInfo.lives <= 0) {
        // saving score to local storage
        localStorageSave(gameInfo);
        window.location.reload(displayToggle);
    }
}


function removeEscapedZombies(gameInfo) {
    const zombies = document.querySelectorAll('.zombie')
    for (let escapedZombie of zombies) {
        if (escapedZombie.offsetLeft <= -200) {
            gameInfo.lives -= 1;
            escapedZombie.remove();
            live = document.querySelector('.live');
            live.classList.add('live-warning');
            setTimeout(() => live.classList.remove('live-warning'), 3000);
            updateInfo(gameInfo);
        }
    }
}


function localStorageSave(gameInfo) {
    localStorage.setItem(gameInfo.name, gameInfo.score);
}


function updateRanking() {
    userScoresElement = document.querySelector('.user-scores');
    // ranking only top 7 scores
    counter = 7;
    scoresArray = sortedlocalStorage()
    for (let i = 0; i < scoresArray.length - 6; i++) {
        counter -= 1;
        if (counter >= 0) {
            key = scoresArray[i][0]
            val = scoresArray[i][1];
            divScore = document.createElement('div');
            spanUser = document.createElement('span');
            spanScore = document.createElement('span');
            spanUser.innerText = key + ' : ';
            spanScore.innerText = val;
            divScore.appendChild(spanUser);
            divScore.appendChild(spanScore);
            userScoresElement.appendChild(divScore);
        }
    }
}


function sortedlocalStorage() {
    scoresArray = []
    for (let user in localStorage) {
        scoresArray.push([user, localStorage[user]])
    }
    scoresArray.sort((a, b) => b[1] - a[1]);
    return scoresArray;
}


window.onload = menu;