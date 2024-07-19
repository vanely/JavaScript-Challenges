// Kata: https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
// Two red beads are placed between every two blue beads.There are N blue beads.After looking at the arrangement below work out the number of red beads.

// 6B, 10R
// B  RR  B  RR  B  RR  B  RR  B  RR  B
// @  ##  @  ##  @  ##  @  ##  @  ##  @ 

// 10B, 18R
// B RR B RR B RR B RR B RR B RR B RR B RR B RR B
// @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @

// 14B, 26R
// B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B
// @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @

// 40B, 78R
// B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B RR B
// @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @ ## @

// Implement count_red_beads(n) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
    if (n < 2) return 0;
    // R = B2 - 2
    // R = (B - 1) * 2
    return (n * 2) - 2;
}

function generateBeads(count) {
    let redBeaCount;
    let blueBeadCount;
    let beadLabel = "B"
    let beads = "@";

    for (let i = 0; i < count; i++) {
        beadLabel += " RR B";
        beads += " ## @";
    }
    redBeaCount = beadLabel.replace(/[ ]/g, '').split('B').join('').length
    blueBeadCount = beadLabel.replace(/[ ]/g, '').split('RR').join('').length
    console.log(`red: ${redBeaCount}`);
    console.log(`blue: ${blueBeadCount}`);
    console.log(`total: ${redBeaCount + blueBeadCount}`);
    console.log(beadLabel);
    console.log(beads);
    
}

generateBeads(39);