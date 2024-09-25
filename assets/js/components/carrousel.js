//VARIABLES
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const nextButton = document.querySelector(".carousel-next");
const prevButton = document.querySelector(".carousel-prev");
const categoryLinks = document.querySelectorAll('.category-link');

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
 * Affiche l'image 
 * @param {*} index 
 */
function showSlide(index) {
    slides.forEach(function (slide, i) {
        slide.classList.toggle('hidden', i !== index); // Masque en utilisant la classe hidden
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

// Fonction pour initialiser le carrousel en fonction de la categorie selectionner
function initCategoryCarousel(selectedSlides) {
    activeSlide = 0;
    // Masque toutes les images en ajoutant la classe hidden
    slides.forEach(function(slide) {
        slide.classList.add('hidden'); 
    });
    // Affiche les images de la categorie selectionner en retirant la classe hidden
    selectedSlides.forEach(function(slide) {
        slide.classList.remove('hidden'); 
    });
    // Affiche le carrousel en retirant la classe hidden
    carousel.classList.remove('hidden'); 
    initCarousel(); // Initialise le carrousel
}

// Fonction pour gerer les clics sur les liens de categorie
function initCategoryLinks() {
    // Ajoute un ecouteur d'evenements pour chaque lien de categorie
    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(evenement) {

            evenement.preventDefault();

            // Verifie si le lien cliquer est le vin blanc
            const isWhiteWine = link.classList.contains('white-wine'); 

            // Selectionne les images de la categorie selectionner
            const selectedSlides = isWhiteWine 
                ? document.querySelectorAll('.white-wine-carousel .carousel-slide') 
                : document.querySelectorAll('.red-wine-carousel .carousel-slide');

            // Initialise le carrousel de la slide selectionner
            initCategoryCarousel(selectedSlides); 
        });
    });
}

// Initialisation du carrousel et des categories
initCategoryLinks();

// Exporte les elements dans le fichier a-propos.js
export { initCategoryCarousel, initCategoryLinks, initCarousel, nextSlide, prevSlide };