//check how many letters of the right side, and how many of the left will be in a string
/*
 *LEFT       RIGHT
 *w          m
 *p          q
 *b          d
 *s          z
 */

const ex1 = "zdqmwpbs"; // Let's fight again!
const ex2 = "zzzzs"; //Right side wins!
const ex3 = "wwwwww"; //Left side wins!

//attempt 1 (works but isn;t checking for duplicates)
function alphabetWar1(fight) {
    //arrays containing values of each side
    const Left = ['w', 'p', 'b', 's'];
    const Right = ['m', 'q', 'd', 'z'];

    const inputText = fight.toLowerCase();

    //counter for each array
    let leftCount = 0;
    let rightCount = 0;

    for(let i = 0; i < inputText.length; i++) {
        inputText[i] === Left[i] ? leftCount += 1
        :inputText[i] === Right[i] ? rightCount += 1
        : null;
    }

    console.log(leftCount);
    console.log(rightCount);

    return leftCount > rightCount ? "Left side wins!"
    : leftCount < rightCount ? "Right side wins!"
    : "Let's fight again!";
}


// attempt 2
function alphabetWar(fight) {
    const fightLower = fight.toLowerCase();
    
    let leftCount = 0;
    let rightCount = 0;
    let occurances = {
        left: {
            w: 0,
            p: 0,
            b: 0,
            s: 0
        },

        right: {
            m: 0,
            q: 0,
            d: 0,
            z: 0
        }
    };

    for(let i = 0; i < fightLower.length; i++) {
        if(occurances.left[fightLower[i]] === 0) {
            occurances.left[fightLower[i]] = 1;
        }
        else {
            occurances.left[fightLower[i]]++;
        }

        if(occurances.right[fightLower[i]] === 0) {
            occurances.right[fightLower[i]] = 1
        }
        else {
            occurances.right[fightLower[i]]++;
        }
    }

    for(let j = 0; j < occurances.left.length; j++) {
        leftCount += occurances[0];
        rightCount += occurances[1];
    }

    console.log(occurances.left);
    // console.log(`total: ${leftCount}`);
    console.log('-------------------------------------------------');
    console.log(occurances.right);
    // console.log(`total: ${rightCount4}`);

}

console.log(alphabetWar(ex1));