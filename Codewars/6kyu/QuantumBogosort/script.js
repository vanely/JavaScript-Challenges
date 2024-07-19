// The new Quantum Suicide Computer(QSC) is almost complete, and we're currently developing its standard library.
// The QSC works very similarly to an ordinary computer, but it has one very special difference: 
//    it contains a flux capacitor with a dialectric made of plastic explosives.When QSC.destroyUniverse is called, 
//    the flux capacitor charges to 1.21 GW and the plastic explosive detonates, creating a quantum flux pulse that wipes out the universe.

// Why do that ? Well, if the Many Worlds Interpretation of Quantum Mechanics is correct(our shareholders are crossing their fingers), 
//    then we can use this to solve difficult problems simply by trying randomly and destroying the universe if we're wrong. 
// Only the universes in which we got the right answer will survive, so the net effect is that we can solve any problem efficiently!

// Quantum Bogosort Algorithm
// The sort algorithm we're going to use is simple:
//    Shuffle the array
//    Check if it's sorted.
//    If it's sorted, return it.
//    If it's not sorted, destroy the universe.

// Unfortunately the QSC is not quite ready for action(the Brownian ratchet keeps getting stuck), 
//    so we're going to use mock functions to test our code in the meantime.
// You'll need to implement the Array.prototype.qbsort() method. This should implement the quantum bogosort algorithm, 
//    sorting values in ascending numerical order.
// We've mocked Array.prototype.qshuffle which will quantum shuffle the array, and QSC.destroyUniverse, which will destroy the universe. 
//    qshuffle sorts its argument in place and does not return a value; it is called as array.qshuffle().
// Our test cases will check that the universe is destroyed when it should be, and not destroyed when it shouldn't be.

const arr1 = [1, 2, 3, 4]
const arr2 = [3, 75, 2, 1, 7, 86, 2]
const arr3 = [2, 3, 4, 2]
const arr4 = [
  68, 66, 61, 65, 92, 96, 65, 16, 9, 27, 90, 26,
  10, 16, 29, 54, 34, 46, 56, 71, 8, 80, 96, 15,
  89, 40, 11, 10, 50, 46, 75, 37, 24, 94, 82, 54,
  96, 88, 12, 14, 74, 77, 97, 95, 74, 96, 87, 2,
  13, 31, 86, 91, 80, 32, 47, 73, 12, 77, 29, 18,
  59, 86, 44, 77, 16, 8, 83, 43, 61, 27, 61, 78,
  73, 23, 33, 61, 22, 24, 17, 40, 9, 18, 10, 86,
  65, 23, 27, 92, 41, 30, 70, 19, 47, 18, 33, 71,
  23, 5, 72, 50
]
class QuantumSuicideComputer {
  constructor() {}

  destroyUniverse() {
    return 'destroy the universe';
  }
}

const QSC = new QuantumSuicideComputer();

Array.prototype.qbsort = function () {
  this.qshuffle();
  const arrLen = this.length;
  for (let i = 0; i < arrLen; i++) {
    if (this[i] > this[i + 1]) {
      return this;
    }
  }
  return QSC.destroyUniverse();
  
}

console.log(`using qbsort(): ${arr1.qbsort()}`)
console.log(`using qbsort(): ${arr2.qbsort()}`)
console.log(`using qbsort(): ${arr3.qbsort()}`)
console.log(`using qbsort(): ${arr4.qbsort()}`)
