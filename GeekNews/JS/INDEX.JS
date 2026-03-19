document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".descricaop.slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicators = document.querySelectorAll(".indicator");

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        // Remover a classe 'active' de todos os slides
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        
        // Adicionar a classe 'active' apenas ao slide atual
        slides[currentSlide].classList.add("active");

        // Atualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentSlide);
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener("click", function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }

    if(nextBtn) {
        nextBtn.addEventListener("click", function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function() {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Inicializar o carrossel
    updateCarousel();
});