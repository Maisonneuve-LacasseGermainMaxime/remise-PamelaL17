import { modal, closeModal, init as initModal, fermer } from '../components/modal.js';
import { initCarousel, nextSlide, prevSlide } from '../components/carrousel.js';


function init(){
    initModal();
    initCarousel();
}

init();