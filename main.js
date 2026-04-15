

// Initialize Typed.js for the typewriter effect
var typed = new Typed('#typewriter', {
            strings: ['Standard.', 'Experience.', 'Frontier.'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
});


// Configure the observer
 //fade-in animation for process steps
    // const observerOptions = {
    //     threshold: 0.2 // Trigger when 20% of the element is visible
    // };

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // Add the class to trigger the CSS transition
    //             entry.target.classList.add('is-visible');
    //             // Optional: Stop observing once the animation has played
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, observerOptions);

    // // Target all process-step elements
    // document.querySelectorAll('.process-step').forEach(step => {
    //     observer.observe(step);
    // });


    
// back2top button functionality
const backToTopBtn = document.getElementById('backToTop');

// Show/Hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

