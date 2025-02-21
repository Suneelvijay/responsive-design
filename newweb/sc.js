document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link and its corresponding link in the other menu
        const linkText = e.target.textContent;
        document.querySelectorAll(`.nav-links a, .mobile-menu a`).forEach(l => {
          if (l.textContent === linkText) {
            l.classList.add('active');
          }
        });
        // Close mobile menu when a link is clicked
        mobileMenu.classList.remove('active');
      });
    });
  
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  
    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
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
    const buttons = document.querySelectorAll('.service-card button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const action = e.target.textContent.trim();
        
        switch(action) {
          case 'Schedule Now':
            alert('Test drive scheduling will be available soon!');
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