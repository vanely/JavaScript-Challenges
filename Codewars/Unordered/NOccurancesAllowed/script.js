function deleteNth(arr,n){
    // ...
  }


//method 1
function dn(arr,n){
    //object for storing unique values as keys, and their frequncy of occurance as their values
    results = {};

    for(let i=0; i<arr.length; i++){
      //iterate over given array and if item found is not in results then append it as a key and assign it the value of 1
      if(!results[arr[i]]){
        results[arr[i]] = 1;
      //else if item is already in reuslts object, then add one to its value
      }else if(results[arr[i]] + 1 <= n){
        //increment those items that have been found by one/f/f/f
        results[arr[i]]++
      }
    }
    data = []
    //output the keys an n numer times into a new data array, and return that nre array
    Object.keys(results).forEach(function(key){
      for(i=0; i<results[key]; i++){
        data.push(key);
      }
    });
    return data;
  }


//method 2
const filterReps = (arr, maxReps) => {
    return arr.length ? arr.reduce((acc, num, i) => {
        // Add this number to our dictionary,
        // if already present add +1 to it's count
        acc.found[num] = acc.found[num] ? ++acc.found[num] : 1
          
        // If the dictionary says the number has been found less or equal
        // times to our max repetitions, push it into the accumulating array
        if (acc.found[num] <= maxReps)
        acc.arr.push(num)
       
        // If this is the final iteration, just return only the result array
        // and not the dictionary
        return i === nums.length - 1 ? acc.arr : acc
    }, { found: {}, arr: [] }) : arr
}
const nums = ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b'];
// console.log(filterReps(nums, 3));

//method 3
function deleteNth(arr,x) {
    //object for logging each unique item in array as a key and the value being how many times it is come across
    let cache = {};
    //filter through the array
    return arr.filter(function(n) {
      //append item into cache object. If item is already in cache object add a 1 to its value
      cache[n] = (cache[n]||0) + 1;
      console.log(cache);
      //return the keys within cache x number of times
      return cache[n] <= x;
    });
}

console.log(deleteNth(nums, 3));
