document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          event.preventDefault();
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  });