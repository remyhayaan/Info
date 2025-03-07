
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
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    function handleScroll() {
      const paragraph = document.querySelector('.black-section p');
      if (isInViewport(paragraph)) {
        paragraph.classList.add('active');
      } else {
        paragraph.classList.remove('active');
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view
   
   
    function isInViewports(element) {
        const rects = element.getBoundingClientRect();
        return (
          rects.top >= 0 &&
          rects.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      }
  
      function handleScrolls() {
        const textBlock = document.querySelector('.para-2');
        if (isInViewports(textBlock)) {
          textBlock.classList.add('active');
        } else {
          textBlock.classList.remove('active');
        }
      }
      window.addEventListener('scroll', handleScrolls);
      handleScrolls();