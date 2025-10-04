// 1. Create a function that takes a string and replaces all occurrences of a specified value with another value.
function replaceValue(str, valueToReplace, valueToReplaceWith) {
  let result = "";
  let i = 0;
  while (i < str.length) {
    if (str.slice(i, i + valueToReplace.length) === valueToReplace) {
      result += valueToReplaceWith;
      i += valueToReplace.length;
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
}


// 2. Create a function that takes a sentence and capitalizes the first letter of each word.
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


// 3. Create a function that takes an array of user objects and sorts them by age in ascending order.
function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}
