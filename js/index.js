var quoteArray = [["Wait!! My nose and my butt itches.", "Frances"],
                   ["In your own time.", "Rimmer"],
                   ["I don't give 2 shits or a fuck!", "Emily"],
                   ["Basil Spice!", "Emily"],
                   ["Well... You're a goose neck!", "Mary"],
                   ["You're gonna need to have a better plan than that.", "Greg"],
                   ["He got me!!", "Phinehas"],
                   ["*Whimper*", "Bubba"],
                   ["She purrs like a chain smoking kitten.", "Josh"],
                   ["What smell? I don't smell any smells!", "Lister"],
                   ["Two Babies!!", "Harper"],
                   ["Who's that guy?!", "Cat"],
                   ["I don't even have a husband yet!!!", "Harper"],
                   ["If it was up your butt you'd know!", "Debbie"],
                   ["Feckles, heckles, hackles, schmeckles. Whatever the hell they are, they're up right now and pointed at you, buddy!", "Cat"],
                   ["I hardly said anything apart from 'Geronimo'.", "Rimmer"],
                   ["Well's a deep subject.", "Debbie"],
                   ["Nevermore", "The Raven"],
                   ["Hey, you guuuys!", "Sloth"]];
var randomNumber = "";
var randomQuote = "";
var matchingAuth = "";

$(document).ready(function() {
  newQuote();
});

//randomly picks a quote
function randomize() {
  var tmp = Math.floor(Math.random() * quoteArray.length);
  if (tmp == randomNumber) {
    tmp = Math.floor(Math.random() * quoteArray.length);
    if (tmp == randomNumber) {
      tmp = Math.floor(Math.random() * quoteArray.length);
    }
  }
  randomNumber = tmp;
  randomQuote = quoteArray[randomNumber][0];
  matchingAuth = quoteArray[randomNumber][1];
}

//populates the quote and the author ino the page
function newQuote() {
  randomize();
  document.getElementById("quote").innerHTML = randomQuote;
  document.getElementById("auth").innerHTML = matchingAuth;
}

//opens a new window to tweet the current quote
function tweetQuote() {
  window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " -" + matchingAuth, "", "width=600,height=300");
}
