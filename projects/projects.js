let menuToggle = document.querySelector('.hamburger-menu');
let hamburger = document.querySelector('.menu-toggle');
let navigation = document.querySelector('.navigation');
let minContent = document.querySelector('.min-content')
let maxContent = document.querySelector('.max-content');
let btn_next = document.querySelector('.next')
let btn_prev = document.querySelector('.previous')

const addClass = (el, name) => el.classList.add(name)
const removeClass = (el, name) => el.classList.remove(name)
let projects = document.querySelector('main')

let projectsWrapper = [...projects.children]

let exactPage = 1;

function changePage(records_per_page, current_page, content, wrapper) {
    wrapper.innerHTML = '';
    current_page--;

    let start = current_page * records_per_page,
        end = start + records_per_page,
        paginatedItems = content.slice(start, end);

    paginatedItems.forEach((items) => wrapper.append(items));   // Appending items to DOM
    ((current_page + 1) != 1) ?
        btn_prev.classList.remove("previous-button") :
        addClass(btn_prev, "previous-button");

    ((current_page + 1) === numPages(content, records_per_page)) ?
        addClass(btn_next, 'next-button') :
        removeClass(btn_next, 'next-button')

    minContent.textContent = end;
    maxContent.textContent = content.length;
    (end > content.length) ? minContent.textContent = content.length : false

}
btn_next.addEventListener('click', callsNext)
btn_prev.addEventListener('click', callsPrevious)



function callsNext() {
    if (exactPage < numPages(projectsWrapper, 2)) exactPage++;
    next(exactPage, projectsWrapper, projects)
}

function callsPrevious() {
    if (exactPage > 1) exactPage--;
    previous(exactPage, projectsWrapper, projects)
}

function numPages(content, records_per_page) {
    return Math.ceil(content.length / records_per_page)
}

changePage(2, exactPage, projectsWrapper, projects)

function next(page, data, wrapper) {
    (page <= numPages(data, 2)) ?
        (changePage(2, page, data, wrapper)) : false
}

function previous(page, data, wrapper) {
    (page >= 1) ?
        (changePage(2, page, data, wrapper)) : false
}

menuToggle.addEventListener('click', function (e) {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});

document.body.addEventListener('click', closeMenu)

function closeMenu(e) {
    if (e.target !== hamburger && e.target !== menuToggle) {
        navigation.classList.remove('active');
        hamburger.classList.remove('active');
    }
}
let year = new Date().getFullYear()

let footer_text = document.querySelector('footer p')
footer_text.textContent += ` ${year}`