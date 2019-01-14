// Given two arrays of strings a1 and a2
// return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

const a1 = ["arp", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

const a3 = ["tarp", "mice", "bull"]; //[]
const a4 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(array1, array2) {
    let output = [];
    let compare = new RegExp(`[${array1[i]}]`, 'gi');
}