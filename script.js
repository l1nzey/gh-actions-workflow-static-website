// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Add to cart alert
document.querySelectorAll('.product-card button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Item added to cart! 🛒');
    });
});

// Contact form
document.querySelector('.contact form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon. 📧');
    e.target.reset();
});
