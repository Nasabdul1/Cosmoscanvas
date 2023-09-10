// script.js
const mintSection = document.getElementById('mint-section');
const toggleBackground = document.getElementById('toggle-background');

let isDarkMode = false;

toggleBackground.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        mintSection.style.backgroundImage = 'url(img/image.jpg)'; // Set your dark mode background image
        toggleBackground.innerHTML = '<i class="fas fa-sun"></i>'; // FontAwesome Sun Icon
    } else {
        mintSection.style.backgroundImage = 'url(img/image2.jpg)'; // Set your light mode background image
        toggleBackground.innerHTML = '<i class="fas fa-moon"></i>'; // FontAwesome Moon Icon
    }
});
