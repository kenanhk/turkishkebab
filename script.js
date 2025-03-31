// Language switching functionality
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    updateContent();
    updateLanguageButton();
    localStorage.setItem('preferredLanguage', lang);
}

function updateLanguageButton() {
    const langButton = document.querySelector('.lang-switch');
    langButton.textContent = currentLang === 'en' ? '中文' : 'English';
}

function updateContent() {
    const lang = languages[currentLang];
    
    // Update navigation
    document.querySelector('a[href="#culinary-journey"]').textContent = lang.nav.journey;
    document.querySelector('a[href="#menu"]').textContent = lang.nav.menu;
    document.querySelector('a[href="#recipes"]').textContent = lang.nav.recipes;
    document.querySelector('a[href="#reservation"]').textContent = lang.nav.reservation;

    // Update hero section
    document.querySelector('.hero-content h2').textContent = lang.hero.title;
    document.querySelector('.hero-content p').textContent = lang.hero.subtitle;
    document.querySelector('.cta-button').textContent = lang.hero.cta;

    // Update journey section
    document.querySelector('.journey-title').textContent = lang.journey.title;
    document.querySelector('.section-title').textContent = lang.journey.title;
    document.querySelector('.journey-text .lead').textContent = lang.journey.lead;
    document.querySelector('.fade-in-delay-1').textContent = lang.journey.paragraph1;
    document.querySelector('.fade-in-delay-2').textContent = lang.journey.paragraph2;
    document.querySelector('.fade-in-delay-3').textContent = lang.journey.paragraph3;
    document.querySelector('.journey-closing').textContent = lang.journey.closing;

    // Update menu section
    document.querySelector('.menu h2').textContent = lang.menu.title;
    document.querySelector('.menu-category:nth-child(1) .category-title').textContent = lang.menu.categories.kebabs;
    document.querySelector('.menu-category:nth-child(2) .category-title').textContent = lang.menu.categories.rolls;
    document.querySelector('.menu-note').textContent = lang.menu.note;

    // Update recipes section
    document.querySelector('.recipes h2').textContent = lang.recipes.title;
    document.querySelector('.recipe h3').textContent = lang.recipes.flatbread.title;
    document.querySelector('.recipe p').textContent = lang.recipes.flatbread.description;

    // Update reservation section
    document.querySelector('.reservation h2').textContent = lang.reservation.title;
    document.querySelector('label[for="name"]').textContent = lang.reservation.form.name;
    document.querySelector('label[for="phone"]').textContent = lang.reservation.form.phone;
    document.querySelector('label[for="date"]').textContent = lang.reservation.form.date;
    document.querySelector('label[for="time"]').textContent = lang.reservation.form.time;
    document.querySelector('label[for="guests"]').textContent = lang.reservation.form.guests;
    document.querySelector('.submit-button').textContent = lang.reservation.form.submit;
    document.querySelector('.reservation-note').textContent = lang.reservation.note;

    // Update footer
    document.querySelector('.footer-info p:nth-child(2)').textContent = lang.footer.address;
    document.querySelector('.footer-info p:nth-child(3)').textContent = lang.footer.phone;
    document.querySelector('.copyright').textContent = lang.footer.copyright;
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (!hamburger || !navLinks) {
        console.error('Mobile menu elements not found');
        return;
    }

    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle body scroll
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = '';
        });
    });
}

// Reservation form handling
function initReservationForm() {
    const form = document.getElementById('reservation-form');
    if (!form) {
        console.error('Reservation form not found');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Basic validation
        if (!name || !phone || !date || !time || !guests) {
            alert('Please fill in all fields.');
            return;
        }

        // Phone number validation (Hong Kong format)
        const phoneRegex = /^\+852\s?\d{4}\s?\d{4}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid Hong Kong phone number (e.g., +852 1234 5678).');
            return;
        }

        // Date validation (not in the past)
        const selectedDate = new Date(`${date}T${time}`);
        const today = new Date('2025-03-30'); // Reference date from backend.md
        if (selectedDate < today) {
            alert('Please select a future date.');
            return;
        }

        // Guest number validation
        const guestNum = parseInt(guests);
        if (guestNum < 1 || guestNum > 10) {
            alert('Please select between 1 and 10 guests.');
            return;
        }

        // Create reservation object
        const reservation = {
            id: Date.now(), // Unique ID for the reservation
            name,
            phone,
            date,
            time,
            guests: guestNum,
            status: 'pending', // pending, confirmed, cancelled
            createdAt: new Date().toISOString()
        };

        // Get existing reservations from localStorage
        const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
        
        // Add new reservation
        existingReservations.push(reservation);
        
        // Save back to localStorage
        localStorage.setItem('reservations', JSON.stringify(existingReservations));

        // Show success message
        alert("Thank you! We'll confirm your reservation soon.");
        
        // Reset form
        form.reset();
    });
}

// Language switcher functionality
function initLanguageSwitcher() {
    // Get initial language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    const initialLang = savedLang || browserLang;
    
    // Set initial language
    switchLanguage(initialLang);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initReservationForm();
    initLanguageSwitcher();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.backgroundColor = '#fff';
        }
    });
}); 