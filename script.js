document.addEventListener('DOMContentLoaded', () => {
    const progressFills = document.querySelectorAll('.progress-fill');
    const words = document.querySelectorAll('.word');

    let scrolled = false; // Variable para controlar si el usuario ha desplazado la página

    window.addEventListener('scroll', () => {
        if (!scrolled) {
            const windowHeight = window.innerHeight;
            words.forEach(word => {
                const wordPosition = word.getBoundingClientRect().top;
                if (wordPosition < windowHeight) {
                    scrolled = true; // Marcar como desplazado solo una vez
                    animateProgress();
                }
            });
        }
    });

    function animateProgress() {
        progressFills.forEach(fill => {
            const percent = parseInt(fill.getAttribute('data-percent'));
            fill.style.width = percent + '%'; // Llena hasta el valor especificado
        });
    }
});