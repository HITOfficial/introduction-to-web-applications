function navbarAnimation(navbar, navbarHeight, navItems) {
    if (scrollY > navbarHeight) {
        navbar.classList.add('scroll-evect-change')
        for (i in navItems) {
            navItems[i].classList.add('scroll-evect-item')
        }
    }
    else {
        document.querySelector('navbar').classList.remove('scroll-evect-change')
        for (i in navItems) {
            navItems[i].classList.remove('scroll-evect-item')
        }
    }
}

window.onload = stickyNavbar

document.querySelector('navbar').classList.add('scroll-evect-change')

function stickyNavbar() {
    const navbar = document.querySelector('navbar');
    const navItems = document.getElementsByClassName('nav-item');
    const navbarHeight = navbar.offsetHeight;
    window.addEventListener('scroll', () => navbarAnimation(navbar, navbarHeight, navItems));
}
