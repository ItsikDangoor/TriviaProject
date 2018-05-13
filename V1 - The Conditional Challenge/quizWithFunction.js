var QandA = [["Who is the president of U.S.A today?(2018)", 'trump', 'donald', 'donald trump', 'trump donald'],
              ["What week day is called after the Moon?", 'monday'],
              ["How many life cat have?", '9', 'nine'],
              ["What year India got independence from United Kingdom?", '1947'],
              ["Is Java ia an island?", 'yes', 'yep', 'y', 'true'] ];

var crowns = {
    gold: 5,
    silver: 3,
    bronze: 1,
    paper: 0,
};

var playerCrown = '';
var playerNumOfCorrectAns = 0;


function runTrivia() {
    var correctAnswers = 0;
    var input = '';

    for(let i = 0; i < QandA.length; i += 1) {
        input = prompt(QandA[i][0]);
        for(let j = 1; j < QandA[i].length; j += 1) {
            if(input.toLowerCase() === QandA[i][j]) {
                correctAnswers += 1;
                break;
            }
        }
    }

    return correctAnswers;
}

function titleCrownUser(numOfCorrectAns) {
    let crown = '';
    if(numOfCorrectAns === crowns.gold) {//could also access crowns['gold']
                                        // this is good when the property is complex
        crown = 'Gold';
    } else if(numOfCorrectAns >= crowns.silver) {
        crown = 'Silver';
    } else if (numOfCorrectAns >= crowns.bronze) {
        crown = 'Bronze';
    } else {
        crown = 'Paper';
    }

    return crown;
}

playerNumOfCorrectAns = runTrivia();
console.log(`${playerNumOfCorrectAns} correctAnswers`);
document.write(`<p>You answered ${playerNumOfCorrectAns} correct answers out of ${QandA.length}</p>`);
playerCrown = titleCrownUser(playerNumOfCorrectAns);
document.write(`<h3><strong>You got ${playerCrown} crown!</strong></h3>`);