document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider
    const heroImages = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg'];
    let currentImageIndex = 0;
    const heroSection = document.querySelector('.hero');

    function changeHeroImage() {
        currentImageIndex = (currentImageIndex + 
