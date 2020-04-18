var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substr(4,10); 
var thirdWord = word.substr(15,2);
var fourthWord = word.substr(18,2);
var fifthWord = word.substr(21,4);

var firstWordLength = exampleFirstWord.length;
var secondWordLength = secondWord.length
var thirdWordLength = thirdWord.length
var fourthWordLength = fourthWord.length
var fifthWordLength = fifthWord.length

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);