$(() => {
    LoadProjects();
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
                .typeString('./pretty_print projects')
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
                        targets: '#Projects',
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

function LoadProjects()
{
    console.log('Loading projects..');
    for(const project of projects)
    {
        const iconLink = project.icon === undefined ? 'assets/projects/unknown.png': project.icon;
        const str = `<div class="centered-x" id="Project_${project.name}" style="margin: 1%; width: 50%; height: 25%; border: 5px solid #3c3836; background-color: #32302f;">
            <p class="mono-text" style="font-size: x-large; position: relative; font-weight: bold"><img src="${iconLink}" alt="Project logo" width="75" height="75" style="border-radius: 50%; position: relative; left: 2%; top: 2%; margin-right: 5%; vertical-align: middle"/>${project.name}</p>
            <p class="mono-text" style="position: relative; left: 2%; font-size: x-large;">${project.description}</p>
            <button onclick="FadeOutAndRedirect('${project.link}')" class="clickable-text" style="font-size: x-large; position: fixed; bottom: 5%; left: 1%; margin-bottom: 1%"> >>> Read more </button>
        </div>`;
        $('#Projects').append(str);
    }
    $('#Projects').append(`<button class="clickable-text centered-x" style="font-size: xx-large" onclick="Back()">Back</button>`);
    console.log(`Loaded ${projects.length} project(s)`);
}

const projects = [
    {
        name: 'Nedordle',
        description: 'A Discord bot for playing Wordle!',
        icon: 'assets/projects/nedordle.png',
        link: 'https://github.com/NedoProgrammer/Nedordle'
    },
    {
        name: 'NedoProgrammer.github.io',
        description: 'The website you are currently on.',
        link: 'https://github.com/NedoProgrammer/NedoProgrammer.github.io'
    },
    {
        name: 'More stuff!',
        description: '???',
        link: '404.html'
    }
];

function Back()
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