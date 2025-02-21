document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  
    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
  
    // Button click handlers
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const action = e.target.textContent.trim();
        
        switch(action) {
          case 'Schedule Now':
            window.location.href = 'a1.html';
            break;
          case 'Book Now':
            alert('Car booking feature will be available soon!');
            break;
          case 'Calculate':
            alert('EMI calculator will be available soon!');
            break;
          case 'Download':
            alert('Brochure download will be available soon!');
            break;
        }
      });
    });
  });


  