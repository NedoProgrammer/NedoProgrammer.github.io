$(() => {
   anime({
      targets: '#TitleText',
      opacity: 1,
      top: '50%',
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
                   targets: '#TitleText',
                   top: '25%',
                   autoplay: true,
                   duration: 1000,
                   easing: 'easeInOutQuad',
                   complete: () => {
                      document.getElementById("ButtonList").style.pointerEvents = 'all';
                      anime({
                         targets: '#ButtonList',
                         opacity: 1,
                         top: '50%',
                         autoplay: true,
                         duration: 1000,
                         easing: 'easeInOutQuad'
                      });
                   }
                });
             })
             .start();

      }
   });
});

function AboutMe()
{
   FadeOutAndRedirect('about.html');
}

function MyProjects()
{
   FadeOutAndRedirect('projects.html');
}

function Blog()
{
   FadeOutAndRedirect('blog.html');
}

function Contact()
{
   FadeOutAndRedirect('contact.html');
}

function FadeOutAndRedirect(link)
{
   anime({
      targets: '#Content',
      opacity: 0,
      autoplay: true,
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: () => {
         window.location.href = link;
      }
   });
}