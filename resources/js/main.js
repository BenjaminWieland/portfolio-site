document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-flyer');

    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('grow');
        });
    });
});