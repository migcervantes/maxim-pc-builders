document.addEventListener('DOMContentLoaded', function() { // Ensure the DOM is loaded
    var hamburger = document.getElementById('hamburger-menu');
    var navLinks = document.getElementById('nav-links');

    // Debugging: Check if elements are found
    if (hamburger && navLinks) {
        console.log('Hamburger menu and navigation links found.');
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            console.log('Hamburger menu clicked. Toggled active class.');
        });
    } else {
        console.error('Hamburger menu or navigation links not found.');
    }
});

