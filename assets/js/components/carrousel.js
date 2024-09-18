//VARIABLES
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const nextButton = document.querySelector(".carousel-next");
const prevButton = document.querySelector(".carousel-prev");

let activeSlide = 0;
let slideInterval;


//FONCTIONS
function initCarousel() {
    showSlide(activeSlide); // Affiche la premiere image
    startCarousel(); // Demarre le defilement automatique du carrousel

    // Ajout d'un gestionnaire d'evenements sur le bouton suivant
    // Lorsqu'on clique sur le bouton, le carrousel s'arrete
    // passe a la prochaine image et redemarre le defilement automatique
    nextButton.addEventListener("click", function () {
        stopCarousel();
        nextSlide();
        startCarousel();
    });

    // Ajout d'un gestionnaire d'evenements sur le bouton precedent
    // Meme chose qu'au bouton suivant plus haut, mais revient a l'image precedente
    prevButton.addEventListener("click", function () {
        stopCarousel();
        prevSlide();
        startCarousel();
    });
}

/**
 * Affiche une image du carrousel
 * @param {*} index 
 * Parcourt toutes les images du carrousel
 * Rends visible que celle qui correspond a l'index passer en parametre
 */
function showSlide(index) {
    slides.forEach(function (slide, i) {
        // Si l'index actuel est le meme que celui donner, l'image est visible en block
        // sinon, elle est masquer en none
        slide.style.display = (i === index) ? "block" : "none";
    });
}

/**
 * Passe a la prochaine image du carrousel
 */
function nextSlide() {
    activeSlide = (activeSlide + 1) % slides.length;
    showSlide(activeSlide);
}

/**
 * Revient a l'image precedante du carrousel
 */
function prevSlide() {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    showSlide(activeSlide);
}

/**
 * Fait defiler automatiquement le carrousel
 */
function startCarousel() {
    // setInterval pour declencher automatiquement (toutes les 3 secondes) la fonction nextSlide
    slideInterval = setInterval(nextSlide, 3000);
}

/**
 * Arrete le defilement automatique du carrousel
 */
function stopCarousel() {
    // clearInterval pour arreter le defilement automatique
    clearInterval(slideInterval);
}


// Exporte les elements dans le fichier a-propos.js
export { initCarousel, nextSlide, prevSlide };