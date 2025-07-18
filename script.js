function changeTheme() {
    document.documentElement.classList.toggle('dark-mode');
    
    const darkModeIcon = document.getElementById('dark-mode-icon');
    
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    
    if (isDarkMode) {
        darkModeIcon.className = 'bx bx-sun';
    } else {
        darkModeIcon.className = 'bx bx-moon';
    }
    
    changeThemeImages(isDarkMode);
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function changeThemeImages(isDarkMode) {
    const imageMap = {
        'profile-pic.png': isDarkMode ? 'assets/dark/profile-pic.png' : 'assets/profile-pic.png',
        
        'github.png': isDarkMode ? 'assets/dark/github.png' : 'assets/light/github.png',
        'instagram.png': isDarkMode ? 'assets/dark/instagram.png' : 'assets/light/instagram.png',
        'linkedin.png': isDarkMode ? 'assets/dark/linkedin.png' : 'assets/light/linkedin.png',
        
        'arrow.png': isDarkMode ? 'assets/dark/arrow.png' : 'assets/light/arrow.png',
        'arrow-up.png': isDarkMode ? 'assets/dark/arrow-up.png' : 'assets/light/arrow-up.png'
    };
    

    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.classList.contains('no-theme-switch')) return;
        const currentSrc = img.src;
        const filename = currentSrc.split('/').pop();
        if (imageMap.hasOwnProperty(filename)) {
            img.src = imageMap[filename];
        }
        updateHoverEffects(img, isDarkMode);
    });
}

function updateHoverEffects(img, isDarkMode) {
    if (img.alt && img.alt.includes('GitHub')) {
        const normalSrc = isDarkMode ? 'assets/dark/github.png' : 'assets/light/github.png';
        const hoverSrc = 'assets/blue/github.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    if (img.alt && img.alt.includes('Instagram')) {
        const normalSrc = isDarkMode ? 'assets/dark/instagram.png' : 'assets/light/instagram.png';
        const hoverSrc = 'assets/blue/instagram.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    if (img.alt && img.alt.includes('LinkedIn')) {
        const normalSrc = isDarkMode ? 'assets/dark/linkedin.png' : 'assets/light/linkedin.png';
        const hoverSrc = 'assets/blue/linkedin.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    if (img.alt && img.alt.includes('Flecha') && !img.alt.includes('Cima')) {
        const normalSrc = isDarkMode ? 'assets/dark/arrow.png' : 'assets/light/arrow.png';
        const hoverSrc = 'assets/blue/arrow.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
    
    if (img.alt && img.alt.includes('Flecha Para Cima')) {
        const normalSrc = isDarkMode ? 'assets/dark/arrow-up.png' : 'assets/light/arrow-up.png';
        const hoverSrc = 'assets/blue/arrow-up.png';
        
        img.onmouseover = function() { this.src = hoverSrc; };
        img.onmouseout = function() { this.src = normalSrc; };
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        darkModeIcon.className = 'bx bx-sun';
        changeThemeImages(true);
    } else {
        document.documentElement.classList.remove('dark-mode');
        darkModeIcon.className = 'bx bx-moon';
        changeThemeImages(false);
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);