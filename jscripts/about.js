document.addEventListener('DOMContentLoaded', function() {
    // First, remove any existing arrows
    const existingArrows = document.querySelectorAll('.splide__arrows');
    existingArrows.forEach(arrow => arrow.remove());
    
    var splide = new Splide('.splide', {
        type: 'loop',
        arrows: false,
        pagination: false,
        width: '100vw',
        height: '700px',
        speed: 800,
        gap: '0px',
        padding: '0px'
    });
    
    // Create and add custom arrows with enhanced styling
    const arrowsContainer = document.createElement('div');
    arrowsContainer.className = 'custom-arrows';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'custom-arrow custom-prev';
    prevButton.style.cssText = `
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    `;
    
    const nextButton = document.createElement('button');
    nextButton.className = 'custom-arrow custom-next';
    nextButton.style.cssText = `
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    `;
    
    // Add enhanced hover effects
    const addHoverEffect = (button) => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 60px rgba(255, 255, 255, 0.2)';
            button.style.transform = 'translateY(-50%) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.1)';
            button.style.transform = 'translateY(-50%) scale(1)';
        });
    };
    
    addHoverEffect(prevButton);
    addHoverEffect(nextButton);
    
    // Add click handlers
    prevButton.addEventListener('click', () => splide.go('<'));
    nextButton.addEventListener('click', () => splide.go('>'));
    
    // Add arrows to container
    arrowsContainer.appendChild(prevButton);
    arrowsContainer.appendChild(nextButton);
    
    // Add container to splide
    document.querySelector('.splide').appendChild(arrowsContainer);
    
    splide.mount();
}); 