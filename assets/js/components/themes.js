
function initTheme() {
    // Recupere le theme enregistrer dans le stockage local ou utilise le theme light par defaut
    const theme = localStorage.getItem('theme') || 'light';

    // Applique le theme recuperer en utilisant la fonction setTheme
    setTheme(theme);

    // Selectionne le bouton pour changer de theme par son ID
    const themeToggleButton = document.getElementById('themeToggle');

    // Verifie si le bouton existe avant d'ajouter un ecouteur d'evenements
    if (themeToggleButton) {
        // Ajoute un ecouteur d'evenements pour gerer le clic sur le bouton
        themeToggleButton.addEventListener('click', function() {
            // Determiner le nouveau theme de sombre a clair ou l'inverse
            const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';

            // Applique le nouveau theme
            setTheme(newTheme);
        });
    }
}

// Fonction pour definir le theme du site web
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        
        // Change le texte du bouton pour indiquer le theme clair
        document.getElementById('themeToggle').textContent = 'Passer au mode clair';
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        
        // Change le texte du bouton pour indiquer le theme sombre
        document.getElementById('themeToggle').textContent = 'Passer au mode sombre';
    }

    // Enregistre le theme choisi dans le stockage local
    localStorage.setItem('theme', theme);
}
// Exporte la fonction initTheme dans le fichier a-propos.js
export { initTheme };