async function fetchData(path) {
    objData = await fetch(path)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.log(error))
    return objData;
}


// if flag is true than all items need to be visible;
flags = {}
function nodeElements(data) {
    mainSection = document.querySelector('.main-section');
    menuSection = document.querySelector('.menu-section');
    for (let category in data) {
        if (!data[category].length) {
            continue;
        }

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let input = document.createElement('input');
        let span = document.createElement('span');
        let ulOptions = document.createElement('ul');
        input.type = 'checkbox';
        input.id = category;
        ul.appendChild(li);
        li.appendChild(input);
        li.appendChild(span);
        span.innerText = category;
        flags[category] = true;
        menuSection.appendChild(ul);
        ul.appendChild(ulOptions);
        // main section display none all elements
        let mainCategory = document.createElement('div');
        mainSection.appendChild(mainCategory);
        mainCategory.classList.add(category);
        // li.addEventListener('click', toggleDisplayCategory);
        input.addEventListener('click', () => toggleDisplayCategory(flags, category, input, data));

        for (let item in data[category]) {
            let liItem = document.createElement('li');
            let inputItem = document.createElement('input');
            let spanItem = document.createElement('label');
            inputItem.innerText = data[category][item].nazwa;
            inputItem.id = data[category][item].nazwa;
            inputItem.type = 'checkbox';
            spanItem.innerText = data[category][item].nazwa;
            liItem.appendChild(inputItem);
            liItem.appendChild(spanItem);
            ulOptions.appendChild(liItem);
            // main display none elements
            let mainItem = document.createElement('div');
            mainItem.innerText = data[category][item].nazwa;
            mainItem.classList.add(data[category][item].nazwa, 'd-none');
            mainCategory.appendChild(mainItem);
            // category parent checked -> category input element checked / unchecked
            inputItem.addEventListener('click', () => itemToggleFromList(mainItem, category, data, input, flags));
        }
    }
}


// single item check
function itemToggleFromList(mainItem, category, data, input, flags) {
    itemName = mainItem.innerText;
    if (document.querySelector(`#${itemName}`).checked) {
        if (mainItem.classList.contains('d-none')) {
            mainItem.classList.remove('d-none');
        }
    }
    else {
        if (!mainItem.classList.contains('d-none')) {
            mainItem.classList.add('d-none');
        }
    }
    AllChecked(category, data, input, flags);
}


// display none/ display block all items from category
function toggleDisplayCategory(flags, category, input, data) {
    categoryElement = document.querySelector(`.${category}`);
    if (!flags[category]) {
        [...categoryElement.children].forEach(e => {
            if (!e.classList.contains('d-none')) {
                e.classList.add('d-none');
            }
            document.querySelector(`#${e.innerText}`).checked = false;
        })
    }
    else {
        [...categoryElement.children].forEach(e => {
            if (e.classList.contains('d-none')) {
                e.classList.remove('d-none');
            }
            document.querySelector(`#${e.innerText}`).checked = true;
        })
    }
    AllChecked(category, data, input, flags);
    flags[category] = !flags[category];
}


function AllChecked(category, data, input, flags) {
    counter = 0;
    for (let item in data[category]) {
        if (document.querySelector(`#${data[category][item].nazwa}`).checked) {
            counter += 1
        }
    }
    // all items are checked
    if (counter === data[category].length) {
        if (!flags[category]) {
            flags[category] = !flags[category];
        }
        input.checked = true;
        if (!input.classList.contains('checked')) {
            input.classList.add('checked');
        }
        for (let item in data[category]) {
            if (!document.querySelector(`#${data[category][item].nazwa}`).classList.contains('checked')) {
                document.querySelector(`#${data[category][item].nazwa}`).classList.add('checked');
            }
        }
    }
    else if (counter > 0) {
        // if at least 1 item checked from category parent has checked color
        if (!input.classList.contains('parent-checkbox')) {
            input.classList.add('parent-checkbox');
        }
        if (input.classList.contains('checked')) {
            input.classList.remove('checked');
        }
        for (let item in data[category]) {
            if (document.querySelector(`#${data[category][item].nazwa}`).classList.contains('checked')) {
                document.querySelector(`#${data[category][item].nazwa}`).classList.remove('checked');
            }
        }
    }
    else {
        for (let item in data[category]) {
            if (document.querySelector(`#${data[category][item].nazwa}`).classList.contains('checked')) {
                document.querySelector(`#${data[category][item].nazwa}`).classList.remove('checked');
            }
        }
        if (input.classList.contains('parent-checkbox')) {
            input.classList.remove('parent-checkbox');
        }
        if (input.classList.contains('checked')) {
            input.classList.remove('checked');
        }
        input.checked = false;
    }
}


async function database() {
    dataA = await fetchData("./data/productsA.json");
    dataB = await fetchData("./data/productsB.json");
    dataC = await fetchData("./data/productsC.json");
    const data = Object.assign({}, dataA, dataB, dataC);
    nodeElements(data);
}

database();