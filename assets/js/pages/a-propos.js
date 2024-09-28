import { modal, closeModal, init as initModal, fermer } from '../components/modal.js';
import { initCarousel } from '../components/carrousel.js';
import { initTheme } from '../components/themes.js';
import { initAnimation } from '../components/animation.js';


function init() {
    initModal();
    initCarousel();
    initTheme();
    initAnimation();
}

init();
