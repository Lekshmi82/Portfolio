// =======================
// Custom Cursor
// =======================
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// =======================
// Particle Background
// =======================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#aee1e1';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createFireflies(); // recreate fireflies on resize
});

// =======================
// Fireflies
// =======================
const fireflyContainer = document.getElementById('firefly-container');
let fireflyCount = 30;

// Adjust for smaller screens
if(window.innerWidth < 768) fireflyCount = 15;

function createFireflies() {
  fireflyContainer.innerHTML = ''; // remove old fireflies
  for (let i = 0; i < fireflyCount; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firefly.style.left = x + 'px';
    firefly.style.top = y + 'px';

    // movement range
    const moveX = (Math.random() - 0.5) * 150; // +-75px
    const moveY = (Math.random() - 0.5) * 150;
    firefly.style.setProperty('--x', moveX + 'px');
    firefly.style.setProperty('--y', moveY + 'px');

    // animation duration & delay
    const duration = 4 + Math.random() * 2; // 4-6s
    firefly.style.animationDuration = `${duration}s, ${duration}s`;
    firefly.style.animationDelay = `${Math.random()*2}s, ${Math.random()*2}s`;

    fireflyContainer.appendChild(firefly);
  }
}

// initial creation
createFireflies();

// Smooth scroll & active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function activateNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for header height
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNav);

