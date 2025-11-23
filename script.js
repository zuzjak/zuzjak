// Smooth scroll dla linków w menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Sprawdź zapisany tryb w localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.classList.add('light');
    toggleButton.textContent = '🌙'; // symbol ciemnego trybu
} else {
    body.classList.remove('light');
    toggleButton.textContent = '☀️'; // symbol jasnego trybu
}

// Funkcja przełączania trybu
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light');

    if(body.classList.contains('light')){
        toggleButton.textContent = '🌙'; // symbol ciemnego trybu
        localStorage.setItem('theme', 'light');
    } else {
        toggleButton.textContent = '☀️'; // symbol jasnego trybu
        localStorage.setItem('theme', 'dark');
    }
});
document.getElementById('discord-tag').addEventListener('click', function() {
    navigator.clipboard.writeText('zuzjak05').then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000); // 2 sekund
    });
});
// Obsługa modali
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(`modal-${modalId}`);
        if (modal) {
            modal.style.display = 'flex'; // wyświetla na środku
        }
    });
});

document.querySelectorAll('.project-modal .close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.project-modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    document.querySelectorAll('.project-modal').forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

