import { data } from '../contentful.js'

const menuToggle = document.querySelector('.hamburger-menu'),
    hamburger = document.querySelector('.menu-toggle'),
    navigation = document.querySelector('.navigation'),
    minContent = document.querySelector('.min-content'),
    maxContent = document.querySelector('.max-content'),
    btn_next = document.querySelector('.next'),
    btn_prev = document.querySelector('.previous'),
    projects = document.querySelector('main'),
    loader = document.querySelector('.loader-container');
let newData;
newData = await data();
if (newData?.length) loader.style.display = 'none';

newData?.forEach((item) => {

    let section1 = document.createElement('section'),
        pictureWrapper = document.createElement('section'),
        picture = document.createElement('section'),
        img = document.createElement('img'),
        text = document.createElement('p'),
        summary = document.createElement('p'),
        aside = document.createElement('aside'),
        link1 = document.createElement('a'),
        link2 = document.createElement('a'),
        btn1 = document.createElement('button'),
        btn2 = document.createElement('button');

    section1.appendChild(pictureWrapper).classList.add('pictures-wrapper')
    pictureWrapper.appendChild(picture).classList.add('pictures')
    section1.appendChild(text)
    section1.appendChild(summary).classList.add('summary')
    section1.appendChild(aside)
    aside.appendChild(link1)
    aside.appendChild(link2)
    link1.appendChild(btn1).classList.add('hvr-bounce-to-left')
    link2.appendChild(btn2).classList.add('hvr-bounce-to-right')
    projects.appendChild(section1).classList.add('projects')

    text.textContent = item.fields.title
    picture.style.background = `url("${item.fields.image.fields.file.url}") grey no-repeat`
    picture.style.backgroundSize = `100% 100%`
    link1.setAttribute('href', item.fields.liveLink)
    link2.setAttribute('href', item.fields.githubLink)
    summary.textContent = item.fields.description
    btn1.textContent = 'Live'
    btn2.textContent = 'Repository'

})

const addClass = (el, name) => el.classList.add(name)
const removeClass = (el, name) => el.classList.remove(name)

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