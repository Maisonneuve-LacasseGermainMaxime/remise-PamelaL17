// Tableau des liens de navigation
const links = [
    { text: 'Accueil', page: 'index.html' },
    { text: 'À propos', page: 'apropos.html' },
    { text: 'Contact', page: 'contact.html' },
];

// Fonction pour générer la navigation
function generateNavigation() {
    // Selectionne nav dans mon fichier html
    const nav = document.querySelector('nav');
    // Crée un nouvel element ul dans mon fichier html
    const ul = document.createElement('ul');

    links.forEach(link => {
        // Cree un nouvel element li pour chaque lien de navigation
        const li = document.createElement('li');
        // Cree un nouvel element a pour chaque lien
        const a = document.createElement('a');
        
        a.textContent = link.text;
        a.href = link.page;
        
        // Mettre en évidence le lien de la page courante
        if (document.location.pathname.includes(link.page)) {
            a.classList.add('active');
        }
        // Ajout des elements
        li.appendChild(a);
        ul.appendChild(li);
    });
    // Ajout du ul aux nav
    nav.appendChild(ul);
}

// Appel de la fonction pour générer la navigation
generateNavigation();

