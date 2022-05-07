const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

$(() => {
    anime({
        targets: ["#GenerateButton"],
        opacity: 1,
        duration: 1000,
        autoplay: true,
        easing: 'easeInOutQuad',
        marginTop: 0
    });
});

GenerateClicked = () => {
    $("#GenerateButton")[0].disabled = true;
    anime({
        targets: ['#GenerateButton'],
        opacity: 0,
        duration: 1000,
        autoplay: true,
        easing: 'easeInOutQuad'
    });
    delay(1000).then(() => {
        ShowSpinner();
    });
};

ShowSpinner = () => {
    anime({
        targets: ["#SpinnerContainer"],
        opacity: 1,
        duration: 1000,
        autoplay: true,
        easing: 'easeInOutQuad'
    });
    delay(1250).then(() => {
        ChangeText("Getting a cat image..").then(() => {
            GetCatImage();          
        });
    });
};

let catUrl = "";
GetCatImage = () => {
    console.log("Sending request..");
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            catUrl = data[0].url;
            console.log(`Received ${catUrl}`);
            delay(250).then(() => {
                ShowCatImage();
            });
            
        });
};

ShowCatImage = () => {
    $("#ImageContainer")[0].onload = () => {
        AnimateCatImage();
    };
    $("#ImageContainer")[0].src = catUrl;
    $("#ImageContainer").wrap("<p></p>");
};
AnimateCatImage = () => {
    anime({
        targets: ["#ImageContainer"],
        width: '50%',
        height: '50%',
        duration: 1000,
        autoplay: true,
        easing: 'easeInOutQuad',
    });
    delay(1000).then(() => {
        ChangeText("Sending cat image to professionals..").then(() => {
            anime({
                targets: ["#ImageContainer"],
                width: '0%',
                height: '0%',
                duration: 1000,
                autoplay: true,
                easing: 'easeInOutQuad',
            });
            delay(1000).then(() => {
                $("#ImageContainer").parent().remove();
                WaitingForResults();
            })
        });
    });
}

WaitingForResults = () => {
    GenerateRandomString();
    delay(2000).then(() => {
       ChangeText("Done!").then(() => {
         delay(1000).then(() => {
            anime({
                targets: ["#SpinnerContainer"],
                opacity: 0,
                duration: 1000,
                autoplay: true,
                easing: 'easeInOutQuad',
                marginTop: '10%'
            });
            delay(1000).then(() => ShowResult());
         });
       });
    });
};

ShowResult = () => {
    $("#Result").text(password);
    twemoji.parse(document.body);
    anime({
        targets: ["#ResultContainer"],
        opacity: 1,
        duration: 1000,
        autoplay: true,
        easing: 'easeInOutQuad',
        marginTop: '0%'
    });
};

const gstart = ["", "omg ", "yayy ", "wow "];
const gmiddle = ["the scrunkly", "the scrunky", "the scrunkle"];
const gemojis = ["\u{1f970}", "\u{1f633}", "\u{1f97a}", "\u263a", "\u{1f917}", "\u{1f60d}"];
const gletters = "adfjsh";
const gpunctunation = "!,";

let password = "";

GenerateRandomString = () => {
    AppendGibberish(GetRandomInclusive(3, 7), 90);
    password += ' ';
    
    AppendRandomFromWithAmount(gstart, 1);
    
    AppendRandomFromWithAmount(gemojis, GetRandomInclusive(1, 3));
    password += ' ';
    
    AppendRandomFromWithAmount(gmiddle, 1);
    AppendRandomFromWithAmount(gpunctunation, GetRandomInclusive(2, 3));
};

AppendRandomFromWithAmount = (from, amount) => {
  const value = from[GetRandomInclusive(0, from.length - 1)];
  for(let i = 0; i < amount; i++)
      password += value;
};

AppendGibberish = (amount, chance) => {
  if(GetRandomInclusive(0, 100) >= 100 - chance)
  {
      for(let i = 0; i < amount; i++)
          password += gletters[GetRandomInclusive(0, gletters.length - 1)];
  }
};

GetRandomInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

ChangeText = (str) => {
    return new Promise((resolve) => {
        anime({
            targets: ["#StatusText"],
            opacity: 0,
            duration: 500,
            autoplay: true,
            easing: 'easeInOutQuad'
        });
        delay(500).then(() => {
            $("#StatusText").text(str);
            anime({
                targets: ["#StatusText"],
                opacity: 1,
                duration: 500,
                autoplay: true,
                easing: 'easeInOutQuad'
            });
            delay(500).then(() => resolve());
        }); 
    });
};