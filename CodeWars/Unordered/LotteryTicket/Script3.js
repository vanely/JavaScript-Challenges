/*INSTRUCTIONS: To do this, you must first count the 'mini-wins' on your ticket. Each sub array has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided(win).If your total is more than or equal to(win),

return 'Winner!'.Else
return 'Loser!'.

All inputs will be in the correct format.Strings on tickets are not always the same length.*/

const ticket1 = [ //2 Loser!
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74]
];

const ticket2 = [ //1 Winner!
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74]
];

const ticket3 = [ //3 Loser!
    ['HGTYRE', 74],
    ['BE', 66],
    ['JKTY', 74]
];

//METHOD 1
function bingo(ticket, win) {
    if (ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win) {
        return "Winner!";
    }
    return "Loser!";
}

//METHOD 2
function bingo(ticket, win) {
    return win <= ticket.filter(v => v[0].split('').some(vi => vi.charCodeAt(0) === v[1])).length ? 'Winner!' : 'Loser!';
}

//METHOD 3
function bingo(ticket, win) {
    var count = 0;

    ticket.forEach(game => {
        if (game[0].includes(String.fromCharCode(game[1]))) {
            count++;
        }
    });

    return (count >= win) ? "Winner!" : "Loser!";
}

//METHOD 4
function bingo(a, k) {
    let z = 0;
    a.forEach(a => z += [...a[0]].some(x => x.charCodeAt(0) == a[1]));
    return z < k ? 'Loser!' : 'Winner!';
}

console.log(bingo(ticket2, 1));