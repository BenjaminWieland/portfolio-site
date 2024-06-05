document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-flyer');

    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('grow');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
    });
});
