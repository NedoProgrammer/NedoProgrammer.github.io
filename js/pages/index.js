//const timeline = anime.timeline();
$(() => {
   anime({
      targets: '#TitleText',
      opacity: 1,
      top: '0%',
      autoplay: true,
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: () => {
         const typewriter = new Typewriter('#TitleTextInner', {
            loop: false,
            delay: 75,
            cursor: '_'
         });
         typewriter
             .typeString('xinit')
             .pauseFor(1000)
             .callFunction(() => {
                typewriter.stop();
                anime({
                   targets: ['#TitleText', '#TitleTextInner'],
                   top: '-25%',
                   autoplay: true,
                   duration: 1000,
                   easing: 'easeInOutQuad'
                });
             })
             .start();

      }
   });
});