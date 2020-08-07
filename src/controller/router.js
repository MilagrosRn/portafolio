import { components } from "../view/components.js";

const changeView = (path) => {
    const section = document.getElementById('container');
    section.innerHTML = '';

    switch (path) {
        case '':
        case '#':
        case '#/':
        case '#/inicio':
            { return section.appendChild(components.inicio()) }
        case '#/sobremi':
            { return section.appendChild(components.sobreMi()) }
        case '#/blog':
            { return section.appendChild(components.blog()) }
        case '#/proyectos':
            { return section.appendChild(components.proyectos()) }
        case '#/contactame':
            { return section.appendChild(components.contactame()) }
        default:
            break;
    }
}
export { changeView }