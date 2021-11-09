function photoToggle() {
    const photo = document.querySelector('.photo');
    photo.addEventListener('click', () => {
        photo.classList.toggle('ocean');
        photo.classList.toggle('mountain');
    })
}

window.onload = photoToggle;