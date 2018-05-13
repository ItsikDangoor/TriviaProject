/*
Challenge Instructions
1. Ask at least five questions

2. Keep track of the number of questions the user answered correctly

3. Provide a final message after the quiz letting the user know the
number of questions he or she got right.

4. Rank the player. If the player answered all five correctly,
give that player the gold crown: 3-4 is a silver crown;
1-2 correct answers is a bronze crown and 0 correct is no crown at all. */

var correctAnswers = 0;
var numberOfQuestions = 5;
var answer = '';
var crown = '';
var silverCrownRange = 3;
var bronzeCrownRange = 1;

answer = prompt("Who is the president of U.S.A today?(2018)");
if(answer.toLowerCase() === 'trump' ||
    answer.toLowerCase() === 'donald' ||
    answer.toLowerCase() === 'donald trump' ||
    answer.toLowerCase() === 'trump donald') {
    correctAnswers += 1;
}
console.log(correctAnswers);
answer = prompt("What week day is called after the Moon?");
if(answer.toLowerCase() === 'monday') {
    correctAnswers += 1;
}
console.log(correctAnswers);
answer = prompt("How many life cat have?");
if(parseInt(answer) === 9 || answer.toLowerCase() === 'nine') {
    correctAnswers += 1;
}
console.log(correctAnswers);
answer = prompt("What year India got independence from United Kingdom?");
if(parseInt(answer) === 1947) {
    correctAnswers += 1;
}
console.log(correctAnswers);
answer = prompt("Is Java ia an island?");
if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y'
    || answer.toLowerCase() === 'yep' || answer.toLowerCase() === 'true') {
    correctAnswers += 1;
}

//document.write(`<li>${question}'\n'${answer}`);
document.write(`<p>You answered ${correctAnswers} correct answers out of ${numberOfQuestions}</p>`);

console.log(correctAnswers);

if(correctAnswers === numberOfQuestions) {
    crown = 'Gold';
} else if(correctAnswers >= silverCrownRange) {
    crown = 'Silver';
} else if (correctAnswers >= bronzeCrownRange) {
    crown = 'Bronze';
} else {
    crown = 'Paper';
}

document.write(`<h3><strong>You got ${crown} crown!</strong></h3>`);