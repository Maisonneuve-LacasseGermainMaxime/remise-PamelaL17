// Ajout de mes produits 
const products = [
    {
        id: 1,
        nom: "Chateau de france 2001",
        ml: '898ml',
        prix: 36.99,
        description: "Vin rouge leger au gout mûr avec une finale légèrement poivrée.",
        image: 'produit-1.png'
    },
    {
        id: 2,
        nom: "Vin rouge d'Espagne",
        ml: '898ml',
        prix: 23.79,
        description: "Son gout se distingue par son fruité vert, aux riches arômes d’herbe, son goût vous amènera progressivement vers une finale piquante et très légèrement amère",
        image: 'produit-2.png'
    },
    {
        id: 3,
        nom: "Vale do Navalho Delicado Biologique",
        ml: '898ml',
        prix: 36.49,
        description: "Arômes frais, moyennement fruités, équilibrés et légèrement piquants",
        image: 'produit-3.png'
    },
    {
        id: 4,
        nom: "Vin blanc Biologique Arbequina",
        ml: '898ml',
        prix: 20.29,
        description: "Vin blanc. Fruité vert aux arômes de gazon fraîchement coupé avec des notes de pelure de banane et d'amandes - douce et légèrement poivrée. Savoureux!",
        image: 'produit-4.png'
    },
    {
        id: 5,
        nom: "Ol-eve Biologique Vin rouge",
        ml: '898ml',
        prix: 23.69,
        description: "Ce vin biologique est produite avec la variété d'olives Koroneiki. Son nez est frais, fruité et intense.",
        image: 'produit-5.png'
    },
    {
        id: 6,
        nom: "Vin rouge",
        ml: '898ml',
        prix: 28.35,
        description: "Vin rouge, issue de l'assemblage des deux variétés : Arbequina 85% et Arróniz 15%. Il montre des touches légèrement épicées avec de douces notes d'amertume.",
        image: 'produit-6.png'
    },
    {
        id: 7,
        nom: "Olio di Puglia IGP Biologique",
        ml: '898ml',
        prix: 53.65,
        description: "Moyen-intense avec une amertume et un poivré en final marqué pour en faire un vin blanc bien balancé. Un vin blanc très fraîs qui a du caractère",
        image: 'produit-7.png'
    },
    {
        id: 8,
        nom: "Estepa Virgen, DO Estepa",
        ml: '898ml',
        prix: 42.15,
        description: "Ce vin est d’un vert fruité intense et aux notes d'amandes vertes que tout amateur appréciera. Son goût épicé et l’amertume en final en font un vin très équilibrée.",
        image: 'produit-8.png'
    },
];

// Selection de ou afficher les produits
const produitsSection = document.querySelector('.products');
const produitDetail = document.querySelector('.product-detail');

// Initialisation de la page
function init() {

    // Cacher l'aside au démarrage
    produitDetail.style.display = 'none';

    // Affichage des produits 
    afficherProduits(products);
}

function afficherProduits(produits) {
    produitsSection.innerHTML = `
        <div class="products-header">
            <h1 class="titre-produits">Nos produits</h1>
            <div class="bouton">
                <button id="sort-az">Alphabetique A-Z</button>
                <button id="sort-za">Alphabetique Z-A</button>
                <button id="sort-prix">Prix croissant</button>
            </div>
        </div>
    `;

    // Au clic cela affiche mes fonctions 
    document.getElementById('sort-az').addEventListener('click', () => trierProduits('az'));
    document.getElementById('sort-za').addEventListener('click', () => trierProduits('za'));
    document.getElementById('sort-prix').addEventListener('click', () => trierProduits('prix'));

    // Generer le contenu pour chaque produit 
    produits.forEach(produit => {
        
        // Chemin vers le dossier des images
        const imagePath = `assets/img/${produit.image}`;

        // Creation d'un element div
        const produitElement = document.createElement('div');

        // Ajout de la class div a product
        produitElement.classList.add('product');
        produitElement.id = `product-${produit.id}`;
        produitElement.innerHTML = `
            <img src="${imagePath}" alt="${produit.nom}">
            <h2>${produit.nom}</h2>
        `;

        // Au clic cela affiche ma fonction afficheProduitDetail pour que l'aside soit visible
        produitElement.addEventListener('click', () => afficheProduitDetail(produit.id));

        // Ajout du div cree plus haut a la section produit pour le rendre visible dans ma page
        produitsSection.appendChild(produitElement);
    });
}

function afficheProduitDetail(produitId) {
    // Trouver le produit cliquer ** Ne pas utiliser ce type de fonction
    const produit = products.find(p => p.id == produitId);

    if (produit) {
        // Affiche les details du produit dans l'aside
        const imagePath = `assets/img/${produit.image}`;
        produitDetail.innerHTML = `
            <h2>${produit.nom}</h2>
            <img src="${imagePath}" alt="${produit.nom}">
            <p>${produit.ml}</p>
            <p>${produit.description}</p>
            <p>Prix: ${produit.prix} $</p>
        `;

        // Afficher l'aside
        produitDetail.style.display = 'block';

        // Mettre en evidence le produit cliquer
        document.querySelectorAll('.product').forEach(Element => {
            Element.classList.remove('active');
        });

        // https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
        document.getElementById(`product-${produit.id}`).classList.add('active');
    }
}

function trierProduits(critere) {
    let produitsTries = [];
    switch (critere) {
        case 'az':
            // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
            produitsTries = products.slice().sort((a, b) => a.nom.localeCompare(b.nom));
            break;
        case 'za':
            produitsTries = products.slice().sort((a, b) => b.nom.localeCompare(a.nom));
            break;
        case 'prix':
            produitsTries = products.slice().sort((a, b) => a.prix - b.prix);
            break;
    }
    afficherProduits(produitsTries);
}

// Appel de la fonction init au chargement de la page
window.onload = init;




