// Generate twinkling stars
(function() {
  const container = document.querySelector('.stars');
  if (!container) return;
  const count = Math.min(120, Math.floor(window.innerWidth * window.innerHeight / 8000));
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--dur', (3 + Math.random() * 5) + 's');
    star.style.setProperty('--delay', (Math.random() * 6) + 's');
    star.style.setProperty('--peak', (0.3 + Math.random() * 0.7).toFixed(2));
    const size = Math.random() < 0.15 ? 3 : Math.random() < 0.4 ? 2 : 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    container.appendChild(star);
  }
})();
