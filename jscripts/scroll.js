document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    const toggleNavbarBackground = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Initial check
    toggleNavbarBackground();
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleNavbarBackground);
});
