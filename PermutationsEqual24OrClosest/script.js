/*
* From the following arrays
* [-1, 3, 8, 2, 9, 5]
* [4, 1, 2, 10, 5, 20]
* return the permutations that equal 24 or the closest to 24.
*/
const arr1 = [-1, 3, 8, 2, 9, 5];
const arr2 = [4, 1, 2, 10, 5, 20];

function permutation24() {
    const perms = [];
    const permsCheck = [];

    let closestIndex = [0, 0];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] + arr2[j] === 24) {
                perms.push([arr1[i], arr2[j]]);
            } else if ((arr1[i] + arr2[j] > 20) && (arr1[i] + arr2[j] < 24)) {
                permsCheck.push(([arr1[i], arr2[j]]));
            }
        }
    }

    if (perms.length > 0) {
        return perms;
    }

    permsCheck.forEach((perm, index) => {
        if ((perm[0] + perm[1]) > closestIndex[0]) {
            closestIndex[0] = perm[0] + perm[1];
            closestIndex[1] = index;
            console.log('Current closest sum and index: ', closestIndex)
        }
    });
    return permsCheck[closestIndex[1]];
}

console.log(permutation24());