// Toggle mobile menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active'); // Close mobile menu
    });
});

// Contact form submission (basic example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    this.reset();
});