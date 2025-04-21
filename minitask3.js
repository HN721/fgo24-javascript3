/// Cara 1
const animal = "ayam,bebek,sapi,unta";
const arr = animal.split(",").with(2, "domba").join(",");
console.log(arr);
/// Cara 2
const animal1 = "ayam,bebek,sapi,unta";
const arr1 = animal1
  .split(",")
  .map((item) => (item === "sapi" ? "domba" : item))
  .join(",");
console.log(arr1);
