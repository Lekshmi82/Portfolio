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
});

// Firefly background only inside Hero
const hero = document.querySelector('.hero');
const fireflyContainer = document.createElement('div');
fireflyContainer.className = 'firefly-container';
hero.appendChild(fireflyContainer); // append inside hero

const numberOfFireflies = 30;
const fireflies = [];

for (let i = 0; i < numberOfFireflies; i++) {
  const firefly = document.createElement('div');
  firefly.className = 'firefly';
  firefly.style.top = Math.random() * 100 + 'vh';
  firefly.style.left = Math.random() * 100 + 'vw';
  fireflyContainer.appendChild(firefly);

  fireflies.push({
    el: firefly,
    x: parseFloat(firefly.style.left),
    y: parseFloat(firefly.style.top),
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animateFireflies() {
  fireflies.forEach(f => {
    f.x += f.dx;
    f.y += f.dy;

    if (f.x < 0) f.x = 0;
    if (f.x > 100) f.x = 100;
    if (f.y < 0) f.y = 0;
    if (f.y > 100) f.y = 100;

    f.el.style.left = f.x + 'vw';
    f.el.style.top = f.y + 'vh';
  });
  requestAnimationFrame(animateFireflies);
}

animateFireflies();
