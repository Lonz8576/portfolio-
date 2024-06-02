let toggleButton = document.querySelector('#toggle-button');
let body = document.querySelector('body');
toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
});

new Typewriter('#badge-name', {
  strings: ('you can call me Nic'),
  autoStart: true,
  loop: false,
  cursorClassName: 'Typewriter_cursor',
  
});
