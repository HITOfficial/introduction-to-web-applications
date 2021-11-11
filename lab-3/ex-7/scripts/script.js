function queryA(db) {
    data = db.filter((row) => row.province === 'małopolskie');
    data = data.map((row) => row.name);
    return data;
}


function queryB(db) {
    data = db.filter(row => {
        counter = 0;
        for (letter of row.name) {
            if (letter === 'a' || letter === 'A') {
                counter += 1;
            }
        }
        if (counter == 2) {
            return true;
        }
        else {
            return false;
        }
    });
    return data.map((row) => row.name);
}


function queryC(db) {
    data = [...db].sort((a, b) => {
        if (a.dentensity < b.dentensity)
            return 1
        else {
            return -1
        }
    });
    return [data[4].name];
}

function queryD(db) {
    data = db.map((row) => {
        if (row.people > 100000) {
            row.name += ' CITY';
        }
        return row.name;
    });
    return data;
}


function queryE(db) {
    let over = 0, less = 0;
    for (row of db) {
        if (row.people > 80000) {
            over += 1;
        }
        else {
            less += 1;
        }
    }
    if (over > less) {
        return [String("More is over 80 000, over: " + over + " less: " + less + " difference " + Math.abs(over - less))];
    }
    else {
        return [String("More is less 80 000, over: " + over + " less: " + less + " difference " + Math.abs(over - less))];
    }
}


function queryF(db) {
    const data = db.filter((row) => row.township[0] === 'P');
    const avg = data.map((row) => Number(row.area)).reduce((a, b) => a + b) / data.length;
    return [avg];
}


function showData(flag, index, where, data) {
    if (!flag[index]) {
        let p;
        for (let row of data) {
            p = document.createElement('p');
            p.textContent = JSON.stringify(row);
            where.appendChild(p);
        }
    }
    else {
        where.innerHTML = '';
    }
    flag[index] = !flag[index];
}


function addEvents(a, b, c, d, e, f) {
    const answersA = document.querySelector('.answers-a');
    const answersB = document.querySelector('.answers-b');
    const answersC = document.querySelector('.answers-c');
    const answersD = document.querySelector('.answers-d');
    const answersE = document.querySelector('.answers-e');
    const answersF = document.querySelector('.answers-f');

    const flag = [false, false, false, false, false, false];

    document.querySelector('.query-a').addEventListener('click', () => showData(flag, 0, answersA, a))
    document.querySelector('.query-b').addEventListener('click', () => showData(flag, 1, answersB, b))
    document.querySelector('.query-c').addEventListener('click', () => showData(flag, 2, answersC, c))
    document.querySelector('.query-d').addEventListener('click', () => showData(flag, 3, answersD, d))
    document.querySelector('.query-e').addEventListener('click', () => showData(flag, 4, answersE, e))
    document.querySelector('.query-f').addEventListener('click', () => showData(flag, 5, answersF, f))
}


async function database() {
    let url = 'http://localhost:3000/cities';
    const response = await fetch(url);
    const db = await response.json();

    addEvents(queryA(db), queryB(db), queryC(db), queryD(db), queryE(db), queryF(db));
}


database();