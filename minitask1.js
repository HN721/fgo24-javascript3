// Build Method Reduce
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Reduce Manual
const array2 = [1, 2, 3, 4];
let initialValue2 = 0;
for (let i = 0; i < array2.length; i++) {
  initialValue2 += array2[i];
}
console.log(initialValue2);
