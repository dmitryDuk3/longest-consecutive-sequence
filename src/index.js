module.exports = function longestConsecutiveLength(array) {
 if (array.length == 0) {// your solution here
  return 0;
}

array.sort((a, b) => a - b);

let result = 1;
let count = 1;
let diference = 0;

for (let i = 0; i < array.length - 1; i++) {
  diference = array[i + 1] - array[i];
    if (diference == 0) {
      continue;
    } else if (diference == 1) {
        count++;
        if (result < count) {
          result = count;
        }
    } else {
        count = 1;
    }
}
return result;
}