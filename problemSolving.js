function reverseWords(s) {
  let output = "";
  console.log(s.trim().split(/\s+/));

  s.trim()
    .split(/\s+/)
    .map(
      (item, index, array) =>
        (output = output + array[array.length - index - 1] + " ")
    );
  return output.trim();
}
// console.log(reverseWords("  Bob    Loves  Alice   "));

const lengthOfLongestSubstring = function (s) {
  let str = "";
  let startIndex = 0;
  let largestSubString = "";
  for (let i = startIndex; i < s.length; i++) {
    if (str.includes(s[i]).length) {
      if (largestSubString.length < str.length) {
        largestSubString = str;
      }
      startIndex += startIndex + 1;
      i = startIndex;
    } else {
      str = str + s[i];
    }
  }
  largestSubString = str;
  return largestSubString.length;
};

// console.log(lengthOfLongestSubstring(" "));
