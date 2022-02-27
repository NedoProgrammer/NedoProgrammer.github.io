$(() => {
    const typewriter = new Typewriter('#ErrorTyper', {
        loop: false,
        delay: 1000,
        cursor: '_'
    });
    typewriter.pauseFor(500).typeString('404').pauseFor(250).callFunction(() => {
        anime({
            targets: ['#ErrorDescription', '#GoBackButton'],
            top: '0%',
            opacity: 1,
            duration: 1000,
            autoplay: true,
            easing: 'easeInOutQuad'
        });
    }).start();
});

function GoBack()
{
    FadeOutAndRedirect('index.html');
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
            window.location.replace(link);
        }
    });
}