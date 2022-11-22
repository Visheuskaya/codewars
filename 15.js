function findAverage(array) {
    // your code here
   return array.reduce((a, b) => (a + b)) / array.length;
  }