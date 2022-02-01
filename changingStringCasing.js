var surName = prompt('What is your name ?');

var firstChar = surName.slice(0,1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = surName.slice(1,surName.length);

restOfName = restOfName.toLowerCase();

alert('Hello ' + upperCaseFirstChar + restOfName);