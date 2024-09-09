function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const button = event.currentTarget.querySelector('.toggle-btn');
    
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        button.textContent = '-'; // Change button text to minus
    } else {
        section.style.display = 'none';
        button.textContent = '+'; // Change button text to plus
    }
}

function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        container.classList.remove('dark-mode');
        container.classList.add('light-mode');
        document.getElementById('theme-toggle').textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        container.classList.remove('light-mode');
        container.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = 'Switch to Dark Mode';
    }
}

// Initialize sections to be hidden initially
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Set default theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = 'Switch to Dark Mode';
    } else {
        document.body.classList.add('light-mode');
    }

    // Add event listeners for buttons
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
