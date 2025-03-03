
    let currentIndex = 0;
    const sections = document.querySelectorAll(".content-section");
    const totalSections = sections.length;
    const wrapper = document.querySelector(".content-wrapper");

    function updateSlider() {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSections; // Loops back to 0 after reaching last slide
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSections) % totalSections; // Loops to last slide when at 0
        updateSlider();
    }
