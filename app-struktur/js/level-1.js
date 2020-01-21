//question 1
var string = "hello";

//question 2
var person = {
  age: 19,
  haircolor: "brown"
}

//question 3
var outOfStock = false;

if (outOfStock) {
  console.log("Out Of Stock")
} else {
  console.log("In Stock")
};

//question 4
var numbers = [
  "1", "2", "3", "4", "5"
];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//question 5
for (var i = 15; i < 26; i++) {
  console.log(i);
}

//question 6
for (var i = 15; i < 26; i++) {
  if (i === 20) {
    console.log(i);
  }
}

//question 7
var friends = [
  {
    name: "Frida",
    age: 19,
    olderThanMe: false,
  },
  {
    name: "Julie",
    age: 19,
    olderThanMe: true,
  },
  {
    name: "Marit",
    age: 19,
    olderThanMe: true,
  }
]

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].age)
  console.log(friends[i].olderThanMe)
}

//question 8
function whatIDontLike(theWorst) {
  console.log("I don't like " + theWorst)
}

whatIDontLike("getting up early in the morning :-(")

//question 9
function math(nrOne, nrTwo) {
  console.log(nrOne - nrTwo)
}

math(2, 4)

//question 10
var array = [];

function addToArray(variable) {
  array.push(variable)
  console.log(array)
}
addToArray("hei");
