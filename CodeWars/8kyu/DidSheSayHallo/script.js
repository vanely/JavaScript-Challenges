// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
//
// Write a simple function to check if the string contains the word hallo in different languages.
//
// These are the languages of the possible people you met the night before:
//
// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes
//
// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

const langs = [
  { greeting: "hello", language: "english" },
  { greeting: "ciao", language: "italian" },
  { greeting: "salut", language: "french" },
  { greeting: "hallo", language: "german" },
  { greeting: "hola", language: "spanish" },
  { greeting: "ahoj", language: "czech republic" },
  { greeting: "czesc", language: "polish" },
]

const tests = [
  { str: "well, hellomygoodsir", output: true }, 
  { str: "meh", output: false },
  { str: "das ein race, hallo", output: true}
]

function validateHello(greetings) {
  for ( let i = 0; i < langs.length; i++) {
    const re = new RegExp(langs[i].greeting, "ig");
    if (re.test(greetings)) {
      return true; 
    }
  }
  return false;
}

tests.forEach((test) => {
  console.log(`is: ${validateHello(test.str)}, should be: ${test.output}`);
});

