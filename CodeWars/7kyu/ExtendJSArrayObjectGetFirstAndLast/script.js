// Your task is to extend the JavaScript Array object with methods .first() and .last(), so you can get the first respectively the last element of the array.
//
// var a = [2, 5, 7, 3 ,4];
//
// a.first();  // 2
// a.last();   // 4

Array.prototype.first = function() {
  if (!this.length) return undefined;
  return this[0];
}

Array.prototype.last = function() {
  if (!this.length) return undefined;
  return this[this.length - 1];
}
