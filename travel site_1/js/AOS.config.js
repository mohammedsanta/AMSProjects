// Initialize AOS for smooth scroll animations
AOS.init({
    duration: 1200,  // Animation duration
});

// Handle the loading screen fade-out and content appearance
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');

    // Fade out the loading screen
    loadingScreen.style.opacity = 0;
    loadingScreen.style.transition = "opacity 1s ease-out";

    // After the fade-out, hide the loading screen and show the content
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 1000);  // Match the fade-out duration
});