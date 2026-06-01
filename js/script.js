// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Validate form
        if (!name || !email || !service || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        this.reset();
    });
}

// Counter animation for stats
function animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseFloat(stat.parentElement.parentElement.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = Math.round(target);
                        clearInterval(counter);
                    } else {
                        stat.textContent = current.toFixed(0);
                    }
                }, 30);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe solution cards
document.querySelectorAll('.solution-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe why cards
document.querySelectorAll('.why-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe info cards
document.querySelectorAll('.info-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe terminal windows
document.querySelectorAll('.terminal-window').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navigation active state
window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Get Started button
const getStartedBtn = document.querySelector('.contact-btn');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Explore Services button
const exploreBtn = document.querySelector('.hero-buttons .btn-primary');
if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Request Demo button (secondary)
const demoBtn = document.querySelector('.hero-buttons .btn-secondary');
if (demoBtn) {
    demoBtn.addEventListener('click', function() {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Add active state styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroOverlay) {
        const scrolled = window.pageYOffset;
        heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate terminal lines with typing effect
function animateTerminal() {
    const terminals = document.querySelectorAll('.terminal-line');
    terminals.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.animation = `slideInLeft 0.5s ease ${index * 0.1}s forwards`;
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize terminal animation when section is visible
const terminalSection = document.querySelector('.terminal-showcase');
if (terminalSection) {
    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTerminal();
                terminalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    terminalObserver.observe(terminalSection);
}

// Initialize counter animation when hero is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    heroObserver.observe(heroSection);
}

// Smooth scroll on page load
if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// Add hover effect to solution cards
document.querySelectorAll('.solution-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(0, 102, 204, 0.05), rgba(0, 212, 255, 0.05))';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'white';
    });
});

// Performance monitoring log
console.log('%cMagisNetwork', 'font-size: 24px; color: #00d4ff; font-weight: bold; text-shadow: 0 0 10px #0066cc;');
console.log('%c✓ 3D Animations Loaded\n✓ Advanced Interactivity Enabled\n✓ Terminal Dashboard Active\n✓ Network Visualization Ready', 'font-size: 12px; color: #3fb950;');
