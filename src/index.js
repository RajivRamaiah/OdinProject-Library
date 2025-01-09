import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => loadPage(createHome));
    
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => loadPage(createMenu));
    
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => loadPage(createContact));
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    header.appendChild(nav);
    
    return header;
}

function loadPage(pageFunction) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(pageFunction());
}

// Initial page load
document.body.appendChild(createHeader());
const main = document.createElement('main');
document.body.appendChild(main);
loadPage(createHome);