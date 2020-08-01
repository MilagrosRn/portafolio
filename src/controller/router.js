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
        default:
            break;
    }
}
export {changeView}