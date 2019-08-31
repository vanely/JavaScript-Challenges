/*
* Given two arrays
* [7, 4, 1, 10]
* [4, 5, 8, 7]
* and a target
* 13
* find the shortest algorithm for finding if the target number is in the given arrays
*
*/
/**@NOTE: aiming to not have to split the array into different halves*/
const arrOne = [7, 4, 1, 10];
const arrTwo = [4, 5, 8, 7];

function search() {
    const perms13 = [];
    let permGreater = arrOne[arrOne.length - 1] + arrTwo[arrTwo.length - 1], permLower = arrOne[0] + arrTwo[0];

    // sort the arrays and start iterating over them from the ends.
    const arr1 = arrOne.sort((a, b) => a - b);
    const arr2 = arrTwo.sort((a, b) => a - b);

    for (let i = arr1.length - 1; i > 0; i--) {
        for (let j = arr2.length - 1; j > 0; j--) {
            if (arr1[i] + arr2[j] === 13) {
                perms13.push([arr1[i], arr2[j]]);
            }
            if (arr1[i] + arr2[j] > 13) {
                if ((permGreater - 13) > (arr1[i] + arr2[j]) - 13) {
                    permGreater = arr1[i] + arr2[j];
                }
            } else if (arr1[i] + arr2[j] < 13) {
                permLower = arr1[i] + arr2[j];
                break;
            }
        }
    }

    if (perms13.length > 0) {
        return perms13;
    }

    return `Closest low: ${permLower}. Closest high ${permGreater}.`;
}

console.log(search());

