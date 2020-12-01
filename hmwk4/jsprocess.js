// JavaScript file for text box process html file
// Coleman Ulry
// CS 336 - Web Dev hwmk4

// initial word and character counts
document.getElementById("numWords").innerHTML = "0 Words";
document.getElementById("numChars").innerHTML = "0 Characters";

// function to count number of words in text box
function wordCount(input) {
  // regular expression to find white space followed by character, indicating new word, match() searches string for a match, store in variable
  const num = input.match(/\S+/g);
  return {
    // if num is true, tervar set to num length, else, tervar set to 0
    tervar: num ? num.length : 0,
  };
}

// function to count number of characters in text box
function charCount(input) {
  // This line will replace white space with empty strings in newString variable
  let newString = input.replace(/ /g, "");
  let newx = newString.length;
  // update character count
  document.getElementById("numChars").innerHTML = "Characters: " + newx;
}

document.getElementById("txt").addEventListener("input", function () {
  let holder = wordCount(this.value);
  // update word count
  document.getElementById("numWords").innerHTML = "Words: " + holder.tervar;
});

document.getElementById("txt").addEventListener("input", function () {
  charCount(this.value);
});
