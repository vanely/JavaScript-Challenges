/*Departments
 * - Fire (1 - 7)
 * - Police (1 - 7)
 * - Sanitation (1 - 7)
 *
 *   Each assigned a number in range 1 - 7
 *   Fire #, Police #, Sanitation #. All different! 
 *   Fire # + Police # + Sanitation # = 12
 *   Police # must be even.
 */

const depNums = () => {
    const perms = [];

    for (let i = 1; i <=7; i++) {
        for (let j = 1; j <= 7; j++) {
            for (let k = 1; k <= 7; k++) {
                if ((i + j + k) === 12) {
                    if ((i % 2 === 0) || (j % 2 === 0) || (k % 2 === 0)) {
                        if (new Set([i, j, k]).size === 3) {
                            perms.push([i, j, k]);
                        }
                    }
                }
            }
        }
    }

    return perms;
};

console.log(depNums());