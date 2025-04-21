function isPalindrom(str) {
  const array = str === str.split("").reverse().join("");
  if (array) {
    return `${str} palindrom`;
  } else {
    return `${str} bukan palindrom`;
  }
}
console.log(isPalindrom("malam"));

console.log(isPalindrom("civic"));
console.log(isPalindrom("Hosea"));
function isPalindrom(str) {
  const array = str === str.split("").reverse().join("");
  if (array) {
    return `${str} palindrom`;
  } else {
    return `${str} bukan palindrom`;
  }
}
console.log(isPalindrom("malam"));

console.log(isPalindrom("civic"));
console.log(isPalindrom("Hosea"));
function isPalindrom2(str) {
  let result = "";
  for (let i = 0; i < str.length / 2; i++) {
    result = str[i] + result;
  }
  if (result === str) {
    return `${str} palindrom`;
  } else {
    return `${str} bukan palindrom`;
  }
}

console.log(isPalindrom2("civic"));

function reverseWord(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWord("Saya belajar Javascript"));

function reverseWord2(str) {
  let newStr = "";
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      newStr += word + " ";
      word = "";
    } else {
      word = str[i] + word;
    }
  }
  newStr += word;

  console.log(newStr);
}

reverseWord2("Saya belajar Javascript");


console.log(isPalindrom2("civic"));

function reverseWord(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWord("Saya belajar Javascript"));

function reverseWord2(str) {
  let newStr = "";
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      newStr += word + " ";
      word = "";
    } else {
      word = str[i] + word;
    }
  }
  newStr += word;

  console.log(newStr);
}

reverseWord2("Saya belajar Javascript");
