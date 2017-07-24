var quoteArray = ["Wait!! My nose and my butt itches.",
                  "In your own time.",
                  "I don't give 2 shits or a fuck!",
                  "Basil Spice!",
                  "Well... You're a goose neck!",
                  "You're gonna need to have a better plan than that.",
                  "He got me!!",
                  "*Whimper*",
                  "She purrs like a chain smoking kitten.",
                  "What smell? I don't smell any smells!",
                  "Two Babies!!",
                  "Who's that guy?!",
                  "I don't even have a husband yet!!!",
                  "If it was up your butt you'd know!",
                  "Feckles, heckles, hackles, schmeckles. Whatever the hell they are, they're up right now and pointed at you, buddy!",
                  "I hardly said anything apart from 'Geronimo'.",
                  "Well's a deep subject.",
                  "Nevermore",
                  "Hey, you guuuys!"];
var authArray = ["Frances",
                 "Rimmer",
                 "Emily",
                 "Emily",
                 "Mary",
                 "Greg",
                 "Phinehas",
                 "Bubba",
                 "Josh",
                 "Lister",
                 "Harper",
                 "Cat",
                 "Harper",
                 "Debbie",
                 "Cat",
                 "Rimmer",
                 "Debbie",
                 "The Raven",
                 "Sloth"];
var randomNumber = "";
var randomQuote = "";
var matchingAuth = "";

function randomRange() {
  var tmp = Math.floor(Math.random() * quoteArray.length);
  if (tmp == randomNumber) {
    tmp = Math.floor(Math.random() * quoteArray.length);
    if (tmp == randomNumber) {
      tmp = Math.floor(Math.random() * quoteArray.length);
    }
  }
  randomNumber = tmp;
  randomQuote = quoteArray[randomNumber];
  matchingAuth = authArray[randomNumber];
  return randomNumber;
}

function newQuote() {
    document.getElementById("quote").innerHTML = quoteArray[randomRange()];
    document.getElementById("auth").innerHTML = matchingAuth;
}

function tweetQuote() {
  window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " -" + matchingAuth, "", "width=600,height=300");
}
