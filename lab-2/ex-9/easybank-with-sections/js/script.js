function navbarAnimation(navbar, navItems) {
    if (scrollY > navbar.offsetHeight) {
        navbar.classList.add('scroll-evect-change');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add('scroll-evect-item');
        }
    }
    else {
        navbar.classList.remove('scroll-evect-change')
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('scroll-evect-item')
        }
    }
}

function resizePadding(navbar, firstSection) {
    firstSection.style.paddingTop = String(navbar.offsetHeight) + "px";
}


window.onload = stickyNavbar

function stickyNavbar() {
    const navbar = document.querySelector('navbar');
    const navItems = document.getElementsByClassName('nav-item');
    const firstSection = document.querySelector('main');
    firstSection.style.paddingTop = String(navbar.offsetHeight) + "px";
    window.addEventListener('scroll', () => navbarAnimation(navbar, navItems));
    window.addEventListener('resize', () => resizePadding(navbar, firstSection));
}
