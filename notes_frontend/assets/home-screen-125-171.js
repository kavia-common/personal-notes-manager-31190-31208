(function(){
  // Basic interactions: focus ring toggling and keyboard activation demo
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.classList.add('active');
        setTimeout(()=>btn.classList.remove('active'), 150);
      }
    });
  });
})();
