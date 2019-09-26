const str1 = "when things are going to the left";
const str2 = "hello there";
const str3 = "WELCOME BACK";

const remover = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const removed = str.split('');
    for(let i = 0; i < vowels.length; i++) {
        removed.forEach((word) => {
            removed[removed.indexOf(word)] = word.toLowerCase().replace(vowels[i], '');
        });
    }

    return removed.join(''); 
}

console.log(remover(str3));
// console.log('a: ',String.fromCharCode('a'.charCodeAt(0) - 32)); case sensitivity with char code