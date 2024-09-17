// VARIABLES
let currentSectionIndex = 1;
const sections = document.querySelectorAll(".formulaire-container > div");
const recapNom = document.getElementById('recapNom');
const recapEmail = document.getElementById('recapEmail');
const recapProduit = document.getElementById('recapProduit');
const recapQuantite = document.getElementById('recapQuantite');

// FONCTION 
function init() {
    // Ajouter des ecouteurs d'evenements pour chaque etapes
    sections.forEach((section, index) => {
        const boutonSuivant = section.querySelector(".formulaire-bouton:not(.bouton-precedent)");
        const boutonPrecedent = section.querySelector(".formulaire-bouton.bouton-precedent");

        if (boutonSuivant) {
            boutonSuivant.addEventListener('click', () => suivant(index + 1));
        }
        if (boutonPrecedent) {
            boutonPrecedent.addEventListener('click', () => precedent(index + 1));
        }
    });

    // Ajouter des ecouteurs d'evenements pour la validation des champs
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', validateField);
    });

    // Mise a jour des details du recapitulatif quand l'etape 2 est activer
    document.getElementById('etape2').querySelectorAll('input, select').forEach(element => {
        element.addEventListener('input', updateResume);
    });
}

// Fonction pour passer a l'etape suivante
function suivant(etape) {
    // Pour eviter de depasser le nombre d'etapes
    if (etape >= sections.length) return;

    // Désactiver l'étape actuelle
    sections[etape - 1].classList.remove('section-active');
    sections[etape - 1].classList.add('section-cachee');

    // Activer l'étape suivante
    sections[etape].classList.remove('section-cachee');
    sections[etape].classList.add('section-active');

    currentSectionIndex = etape;
}

// Fonction pour revenir a l'etape precedente
function precedent(etape) {
    // Pour eviter d'aller avant la premiere etape
    if (etape <= 1) return;

    // Désactiver l'etape actuelle
    sections[etape - 1].classList.remove('section-active');
    sections[etape - 1].classList.add('section-cachee');

    // Activer l'etape precedente
    sections[etape - 2].classList.remove('section-cachee');
    sections[etape - 2].classList.add('section-active');

    currentSectionIndex = etape - 1;
}

// Validation des champs
function validateField(event) {
    const field = event.target;
    // Trouver la section actuelle
    const section = field.closest('div');
    const boutonSuivant = section.querySelector('.formulaire-bouton:not(.bouton-precedent)');
    // Activer/desactiver bouton suivant baser sur validation
    boutonSuivant.disabled = !section.checkValidity();
}

// Mise a jour du recapitulatif
function updateResume() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const adresse = document.getElementById('adresse').value;
    const codePostal = document.getElementById('code-postal').value;
    const email = document.getElementById('email').value;
    const livraison = document.getElementById('livraison').value;

    recapNom.innerText = `${nom} ${prenom}`;
    recapEmail.innerText = email;
    recapAdresse.innerText = `${adresse} ${codePostal}`;
    recapLivraison.innerText = livraison;
}

// Initialisation de la case a cocher et du bouton soumettre
function initCheckbox() {
    const checkbox = document.getElementById('checkboxVerification');
    const boutonSoumettre = document.getElementById('boutonSoumettre');

    // Activer/desactiver le bouton "Soumettre" en fonction de la case a cocher
    checkbox.addEventListener('change', function() {
        boutonSoumettre.disabled = !checkbox.checked;
    });
}

// EXECUTION
// Appel de la fonction init
init();

initCheckbox();