// VARIABLES
const modal = document.getElementById('newsletterModal');
const closeModal = document.getElementById('closeModal');

// FONCTIONS

// Affiche la modale apres 5 secondes
setTimeout(() => {
  modal.classList.add('show');
}, 5000);

// Ferme la modale au clic 
closeModal.onclick = function() 
{
  modal.classList.remove('show');
};

// Ferme la modale en cliquant en dehors du contenu
window.onclick = function(evenement) 
{
  if (evenement.target === modal) 
  {
    modal.classList.remove('show');
  }
};

// Exporte les elements dans le fichier a-propos.js
export { modal, closeModal };