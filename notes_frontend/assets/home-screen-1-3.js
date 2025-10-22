(function(){
  // Reserved for potential interactive behaviors on this screen
  const buttons = document.querySelectorAll('#home-screen-1-3 .button');
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
