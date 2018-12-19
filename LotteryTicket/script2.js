
const ticket1 = [['ABC', 65], ['HGR', 74], ['BYHT', 74]]; //2
const ticket2 = [['HGTYRE', 74], ['BE', 66], ['JKTY', 74]]; //3
const possibleWin1 = 2;
const possibleWin2 = 3;


function lottery(ticket, win)
{
    let matches = [];

    for(let i = 0; i < ticket.length; i++)
    {
        for(let j = 0; j < ticket[i][0].length; j++)
        {
            if(ticket[i][0][j].charCodeAt() === ticket[i][1])
            {
                matches.push([ticket[i][1]]);
            }
        }
    }
    console.log(matches);
    return matches.length === win ? 'Winner!' : 'Loser!';
}

console.log(lottery(ticket2, possibleWin2));