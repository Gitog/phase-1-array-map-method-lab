const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


let capitalizedTutorials = [];

const titleCased = () => {
  tutorials.map(function titleCased(stringVariable) {

    let theCasedArr = [];

    function stringToArray(string) {
      theCasedArr = string.split(" ");
    };
    stringToArray(stringVariable);


    const capitalized = theCasedArr.map(function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })

    const changedString = capitalized.join(" ");
    capitalizedTutorials.push(changedString);
    console.log(changedString);

  });
  return capitalizedTutorials;
}


