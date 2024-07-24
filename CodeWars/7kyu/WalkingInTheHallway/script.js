// https://www.codewars.com/kata/6368426ec94f16a1e7e137fc/train/javascript

// You are a security guard at a large company, your job is to look over the cameras.
// Finding yourself bored you decide to make a game from the people walking in a hallway on one of the cameras.
// As many people walk past the hallway you decide to figure out the minimum steps it will take 
//   before 2 people cross or come into contact with each other(assuming every person takes a step at the same time).

// People are represented as arrows, < for a person moving left and > for a person moving right and - for an empty space

  // A step represents a person moving forward one -, each person moves 1 step at the same time

  // in this example the first people to come in contact with each other do it after 1 step
      // ---><----
  // in this example the first people to come in contact with each other do it after 1 step
      // --->-<------->----<-
  // in the case that no people come in contact return -1
      // ----<----->----

const hallway1 = "---><----" // 1
const hallway2 =  "--->-<------->----<-" // 2
const hallway3 = "----<----->----" // -1
const hallway4 = "---->---<" // 2
const hallway5 = "----<-->---" // -1
const hallway6 = ">>>>--<<<<<<<<<<<<<<<<<<<<" // 2
const hallway7 = ">---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------> " // 5

function contact(hallway) {
  const walkers = [];
  const hallwayArr = hallway.split('');
  // if we find a ">" and reach the end of the array before finding a "<"(walkers array is empty) then return -1

  // since both people are taking the same amout of steps at the same time. we could divide the space in between by 2, and round up
  //  S = Math.ciel((space between)/2)

  // we want to create a substring/ subarray that represents the closest people to eachother.
  //  we want to split the string into an array, and find the first character from the left that points to ">",
  //  we want to add the ">" and everything in between, up to "<",
  //  if we come across another ">" before, then that marks the new beginning of our substring/ subarray
  //  and once we've found a ">" to "<" pair, we want to start another until we've found all matches of people walking toward eachother.
  //    NOTE: this should be a 2d array of ">" to "<" pairs.

  let imminentCollision = [];
  for (let i = 0; i < hallwayArr.length; i++) {
    if (hallwayArr[i] === ">") {
      console.log('resetting and adding right walker');
      // REVIEW: may need to replace array reset with imminentCollision = []
      imminentCollision = [];
      imminentCollision.push(hallwayArr[i]);
    } else if ((imminentCollision[0] === ">") && (hallwayArr[i] === "-" || hallwayArr[i] === "<")) {
      console.log('adding steps or left walker');
      imminentCollision.push(hallwayArr[i]);
      if (hallwayArr[i] === "<") {
        walkers.push(imminentCollision);
        console.log(`added left walker, adding immenentCollision to walkers: ${imminentCollision}`);
        // REVIEW: may need to replace array reset with imminentCollision = []
        imminentCollision = [];
      }
    }
  }
  if (!walkers.length) {
    return -1;
  }
  
  console.log(`found walkers: ${walkers}`);
  const closestSteps = walkers.map((walkerPair) => {
    if (walkerPair.length > 2) {
      const steps = walkerPair.slice(0, walkerPair.length - 1);
      return Math.ceil(steps.length / 2);
    } else {
      return 1;
    }
  })
  console.log(`closest steps array: ${closestSteps}, closest steps needed for encounter: ${Math.min(...closestSteps)}`);
  return Math.min(...closestSteps);
} 

function contact2(hallway) {
  const walkers = hallway.match(/>-*</g);
  const walkerSteps = walkers.map((walker) => {
    if (walker.length > 2) {
      const steps = walker.slice(1, walker.length - 1);
      return Math.ceil(steps.length / 2);
    } else {
      return 1;
    }
  });
  console.log(Math.min(...walkerSteps));
  return Math.min(...walkerSteps);
}

function logAndBenchmark(example) {
  console.log('\n=====================FUNCTION START=====================');
  console.time('contact');
  contact(example);
  console.timeEnd('contact');
  console.log('----------------------------------------------------------')
  console.time('contact2');
  contact2(example);
  console.timeEnd('contact2');
  console.log('======================FUNCTION END======================');
}

logAndBenchmark(hallway1);
// logAndBenchmark(hallway2);
// logAndBenchmark(hallway3);
// logAndBenchmark(hallway4);
// logAndBenchmark(hallway5);
// logAndBenchmark(hallway6);
// logAndBenchmark(hallway7);

//------------------------------------------------------------------------------------------------------
function generateArr(range) {
  const arr = []
  for (let i = 0; i < range.length; i++) {
    arr.push(i);
  }
  return arr;
}

function cleanArr(impl) {
  let arr1 = generateArr(30_000);
  if (impl === 1) {
    console.time('clean');
    arr1 = []
    console.timeEnd('clean');
  } else {
    console.time('clean2');
    arr1 = arr1.splice(0, arr1.length);
    console.timeEnd('clean2');
  }
  return arr1.length;
}

// TESTS
// console.log(`clean arr(impl 1): ${cleanArr(1)}`)
// console.log('\n')
// console.log(`clean arr(impl 2): ${cleanArr(2)}`)

// let arr = [">", "-", "-", "-", "-", "-", "<"]
// const newArr = arr.slice(1, arr.length - 1);
// console.log(`\n[[newArr mutation]]:\noriginal: ${arr}\nslice: ${newArr}\nsetps: ${Math.ceil(newArr.length / 2)}`)
