$(() => {
   anime({
       targets: '#TitleText',
       duration: 1000,
       easing: 'easeInOutQuad',
       opacity: 1,
       autoplay: true,
       complete: () => {
           const typewriter = new Typewriter('#TitleTextInner', {
               loop: false,
               delay: 75,
               cursor: '_'
           });
           typewriter
               .typeString('cat about.md')
               .pauseFor(1000)
               .callFunction(() => {
                   anime({
                       targets: '#TitleText',
                       duration: 1000,
                       easing: 'easeInOutQuad',
                       top: '-25%',
                       opacity: 0,
                       autoplay: true
                   });
                   anime({
                      targets: '#About',
                      duration: 1000,
                      easing: 'easeInOutQuad',
                      opacity: 1,
                      top: '0%',
                      autoplay: true
                   });
               })
               .start();
       }
   });
});

function Back()
{
    FadeOutAndRedirect('index.html');
}

function FadeOutAndRedirect(link)
{
    anime({
        targets: '#About',
        opacity: 0,
        autoplay: true,
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: () => {
            window.location.replace(link);
        }
    });
}