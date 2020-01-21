//////// level 2
//question 1
for (var i = 15; i < 26; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

//question 2
function innermostFunction() {
  console.log("I am a function")
}

var innerFunction = innermostFunction

function outerFunction(argument) {
  console.log(argument)
}
outerFunction(innerFunction);
