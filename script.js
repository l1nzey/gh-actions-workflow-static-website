// Mobile Menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Add to Cart
document.querySelectorAll('.card button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Added to cart! We will call you.');
    });
});

// Contact Form
document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Asante! We received your message.');
    e.target.reset();
});
