// You are taking a music class and you need to know what notes are on every fret of the guitar.There are six strings on the guitar and 18 frets.Given the name of the string, in STRING format("E" "A" "D" "G" "B" and "e"), as well the fret in integer format(open note is 0), return the note.

// We are going to use a music scale with only sharps and regular notes, so the 12 notes to know are: A, A#, B, C, C#, D, D#, E, F, F#, G, and G# (notice that B# and E# do not exist).

// Moving up one fret goes one note up on the fretboard moves one note up the scale, so the open(0) note on E is E, the 1st fret note(1) is F, and the second fret note(2) is F#.You can find a picture of this here: http://takelessons.com/blog/wp-content/uploads/2014/01/guitar-fretboard.jpg

// We're not concerned with octaves, so just return the note as a capital letter (C#, B, D, etc.)

// method 1

let whatNote = (string, fret) => {
    
    let currentString = stringNotes(string);
    let fretNum = fret < currentString.length ? fret : (currentString.length - 1) + 2;
    
    return currentString[fretNum];
};


//creates array of notes per string
function stringNotes(note) {
    
    const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    let string = [];
    let count = notes.indexOf(note.toUpperCase());

    //iterating and populating notes for range of frets
    for(let i = 0; i < 19; i++) {
        
        string.push(notes[count]);
        if(count === 11) {

            count = 0;
            continue;
        }
        count++;
    }

    return string;
}

//method 2

const whatNote2 = (string, fret) => {
    let array = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    return array[(fret + array.indexOf(string.toUpperCase())) % 12];
    //             5   +    9   %    12    =    2
};

console.log(whatNote2("A", 5));
