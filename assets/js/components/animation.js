export function initAnimation() {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(function(img) {
        const secondImage = document.createElement('img');
        const altSrc = img.getAttribute('data-alt-img');

        secondImage.src = altSrc;
        secondImage.classList.add('fade-out'); // On commence par cacher la deuxieme image
        img.parentNode.appendChild(secondImage);

        function switchImage() {
            // Alterne les opaciter entre les deux images
            img.classList.toggle('fade-out');
            img.classList.toggle('fade-in');
            secondImage.classList.toggle('fade-out');
            secondImage.classList.toggle('fade-in');
        }

        // Change d'image toutes les 10 secondes
        setInterval(switchImage, 10000);
    });
}