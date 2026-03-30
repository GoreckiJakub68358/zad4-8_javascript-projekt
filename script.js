// NR_INDEKSU: 68358

// === ZMIANA MOTYWU ===
const themeStylesheet = document.getElementById('theme-stylesheet');
const themeToggleBtn = document.getElementById('theme-toggle');

let currentTheme = 'red';

function toggleTheme() {
    if (currentTheme === 'red') {
        themeStylesheet.setAttribute('href', 'green.css');
        themeToggleBtn.textContent = '🔴 Przełącz na motyw czerwony';
        currentTheme = 'green';
    } else {
        themeStylesheet.setAttribute('href', 'red.css');
        themeToggleBtn.textContent = '🌿 Przełącz na motyw zielony';
        currentTheme = 'red';
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);