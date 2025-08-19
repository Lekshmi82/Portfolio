// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Fireflies
const fireflyContainer = document.querySelector('.firefly-container');
const firefliesCount = 25;

for (let i = 0; i < firefliesCount; i++) {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');
  firefly.style.top = Math.random() * 100 + 'vh';
  firefly.style.left = Math.random() * 100 + 'vw';
  firefly.style.setProperty('--x', (Math.random()*100 - 50) + 'px');
  firefly.style.setProperty('--y', (Math.random()*100 - 50) + 'px');
  firefly.style.animationDuration = (2 + Math.random() * 3) + 's';
  fireflyContainer.appendChild(firefly);
}
