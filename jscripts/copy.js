document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', async function() {
        const content = this.querySelector('.contact-content').textContent.trim();
        
        try {
            await navigator.clipboard.writeText(content);
            this.classList.add('copied');
            
            setTimeout(() => {
                this.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});
