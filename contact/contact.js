let menuToggle = document.querySelector('.hamburger-menu'),
    hamburger = document.querySelector('.menu-toggle'),
    navigation = document.querySelector('.navigation'),
    footer_text = document.querySelector('footer p'),
    year = new Date().getFullYear();
document.body.addEventListener('click', closeMenu)

footer_text.textContent += ` ${year}`
menuToggle.addEventListener('click', function (e) {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});
function closeMenu(e) {
    if (e.target !== hamburger && e.target !== menuToggle) {
        navigation.classList.remove('active');
        hamburger.classList.remove('active');
    }
}


