// VARIABLES
const modal = document.querySelector("#newsletterModal");
const closeModal = document.querySelector("#closeModal");

// FONCTIONS
function init() {
  // Affiche la modale apres 5 secondes
  setTimeout(() => {
    modal.classList.add("show");
  }, 5000);

  // Ajout d'un evenement pour fermer la modale en cliquant sur le X
  closeModal.addEventListener("click", fermer);

  // Ferme la modale en cliquant en dehors du contenu
  window.addEventListener("click", function (evenement) {
    if (evenement.target === modal) {
      fermer();
    }
  });
}

/**
 * fonction pour fermer la modale
 */
function fermer() {
  modal.classList.remove("show");
}


// Exporte les elements dans le fichier a-propos.js
export { modal, closeModal, init, fermer };