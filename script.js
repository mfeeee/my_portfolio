function changeTheme() {
    // Toggle the dark-mode class on the document element
    document.documentElement.classList.toggle('dark-mode');
    
    // Get the dark mode icon element
    const darkModeIcon = document.getElementById('dark-mode-icon');
    
    // Check if dark mode is currently active
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    
    // Update the icon based on the current theme
    if (isDarkMode) {
        // Switch to sun icon for dark mode (indicating click will go to light mode)
        darkModeIcon.className = 'bx bx-sun';
    } else {
        // Switch to moon icon for light mode (indicating click will go to dark mode)
        darkModeIcon.className = 'bx bx-moon';
    }
    
    // Change images based on theme
    changeThemeImages(isDarkMode);
    
    // Optional: Save the user's preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Function to change images based on theme
function changeThemeImages(isDarkMode) {
    // Define image mappings for theme switching
    const imageMap = {
        // Profile and about images
        'profile-pic.png': isDarkMode ? 'assets/dark-theme/profile-pic.png' : 'assets/profile-pic.png',
        
        // Social media icons
        'github.png': isDarkMode ? 'assets/dark-theme/github.png' : 'assets/github.png',
        'instagram.png': isDarkMode ? 'assets/dark-theme/instagram.png' : 'assets/instagram.png',
        'linkedin.png': isDarkMode ? 'assets/dark-theme/linkedin.png' : 'assets/linkedin.png',
        
        // Experience/Skills icons
        'html.png': isDarkMode ? 'assets/dark-theme/html.png' : 'assets/html.png',
        'css.png': isDarkMode ? 'assets/dark-theme/css.svg' : 'assets/css.png',
        'javascript.png': isDarkMode ? 'assets/dark-theme/javascript.png' : 'assets/javascript.png',
        'typescript.png': isDarkMode ? 'assets/blue/typescript.png' : 'assets/blue/typescript.png',
        'bootstrap.png': isDarkMode ? 'assets/dark-theme/bootstrap.png' : 'assets/bootstrap.png',
        'tailwind.png': isDarkMode ? 'assets/blue/tailwind.png' : 'assets/blue/tailwind.png',
        'git.png': isDarkMode ? 'assets/dark-theme/git.png' : 'assets/git.png',
        'python.png': isDarkMode ? 'assets/blue/python.png' : 'assets/blue/python.png',
        'deno.png': isDarkMode ? 'assets/dark-theme/deno.png' : 'assets/deno.png',
        'mongodb.png': isDarkMode ? 'assets/blue/mongodb.png' : 'assets/blue/mongodb.png',
        'nodejs.png': isDarkMode ? 'assets/blue/nodejs.png' : 'assets/blue/nodejs.png',
        'expressjs.png': isDarkMode ? 'assets/dark-theme/expressjs.svg' : 'assets/expressjs.png',
        'postman.png': isDarkMode ? 'assets/blue/postman.png' : 'assets/blue/postman.png',
        
        // Other icons
        'education.png': isDarkMode ? 'assets/dark-theme/education.png' : 'assets/icones-azuis/education.svg',
        'email.png': isDarkMode ? 'assets/dark-theme/email.png' : 'assets/email.png',
        'whatsapp.png': isDarkMode ? 'assets/blue/whatsapp.png' : 'assets/blue/whatsapp.png',
        'checkmark.png': isDarkMode ? 'assets/dark-theme/checkmark.png' : 'assets/checkmark.png',
        
        // Arrow images
        'arrow1.png': isDarkMode ? 'assets/dark-theme/arrow1.png' : 'assets/arrow1.png',
        'arrow-up1.png': isDarkMode ? 'assets/dark-theme/arrow-up1.png' : 'assets/arrow-up1.png'
    };
    
    // Define hover mappings for theme switching
    /*const hoverMap = {
        // Social media hover effects
        'github-hover2.png': isDarkMode ? 'assets/dark-theme/github.png' : 'assets/github-hover2.png',
        'instagram-hover2.png': isDarkMode ? 'assets/dark-theme/instagram.png' : 'assets/instagram-hover2.png',
        'linkedin-hover2.png': isDarkMode ? 'assets/dark-theme/linkedin.png' : 'assets/linkedin-hover2.png',
        
        // Arrow hover effects
        'arrow1.svg': isDarkMode ? 'assets/icones brancos/arrow1.svg' : 'assets/icones azuis/arrow1.svg',
        'arrow-up-hover1.png': isDarkMode ? 'assets/dark-theme/arrow-up1.png' : 'assets/arrow-up-hover1.png'
    };*/
    
    // Get all images on the page
    const images = document.querySelectorAll('img');
    
    // Loop through all images and update their src and hover effects
    images.forEach(img => {
        const currentSrc = img.src;
        const filename = currentSrc.split('/').pop(); // Get just the filename
        
        // Check if this image has a theme variant
        if (imageMap.hasOwnProperty(filename)) {
            img.src = imageMap[filename];
        }
        
        // Update hover effects based on theme
        updateHoverEffects(img, isDarkMode);
    });
}

// Function to update hover effects based on theme
function updateHoverEffects(img, isDarkMode) {
    // Social media icons with hover effects
    if (img.alt && img.alt.includes('GitHub')) {
        const normalSrc = isDarkMode ? 'assets/dark-theme/github.png' : 'assets/github.png';
        const hoverSrc = isDarkMode ? 'assets/dark-theme/github.png' : 'assets/github-hover2.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    if (img.alt && img.alt.includes('Instagram')) {
        const normalSrc = isDarkMode ? 'assets/dark-theme/instagram.png' : 'assets/instagram.png';
        const hoverSrc = isDarkMode ? 'assets/dark-theme/instagram.png' : 'assets/instagram-hover2.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    if (img.alt && img.alt.includes('LinkedIn')) {
        const normalSrc = isDarkMode ? 'assets/dark-theme/linkedin.png' : 'assets/linkedin.png';
        const hoverSrc = isDarkMode ? 'assets/dark-theme/linkedin.png' : 'assets/linkedin-hover2.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    // Arrow icons with hover effects
    if (img.alt && img.alt.includes('Flecha') && !img.alt.includes('Cima')) {
        const normalSrc = isDarkMode ? 'assets/dark-theme/arrow1.png' : 'assets/arrow1.png';
        const hoverSrc = isDarkMode ? 'assets/icones brancos/arrow1.svg' : 'assets/icones azuis/arrow1.svg';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    if (img.alt && img.alt.includes('Flecha Para Cima')) {
        const normalSrc = isDarkMode ? 'assets/dark-theme/arrow-up1.png' : 'assets/arrow-up1.png';
        const hoverSrc = isDarkMode ? 'assets/dark-theme/arrow-up1.png' : 'assets/arrow-up-hover1.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
}

// Function to load the saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        darkModeIcon.className = 'bx bx-sun';
        // Load dark theme images
        changeThemeImages(true);
    } else {
        document.documentElement.classList.remove('dark-mode');
        darkModeIcon.className = 'bx bx-moon';
        // Load light theme images
        changeThemeImages(false);
    }
}

// Load the theme when the page loads
document.addEventListener('DOMContentLoaded', loadTheme);