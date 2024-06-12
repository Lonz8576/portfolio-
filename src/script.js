new Typewriter('#badge-name', {
  strings: ('you can call me <strong>Nic</strong>'),
  autoStart: true,
  loop: false,
  cursorClassName: 'Typewriter_cursor',

});


        let text = document.getElementById('about-me');
        let newDom = '';
        let animationDelay = 1*100;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        let length = text.children.length;

        for(let i = 0; i < length; i++)
        {

            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';


        }
 