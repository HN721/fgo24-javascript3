// 1. Built-in method : filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = num.filter((num) => num > 6);
const result2 = words.filter((word) => word.length > 6);
console.log(result);
console.log(result2);
/*
filter() adalah metode array di JavaScript yang digunakan untuk memfilter elemen dalam array berdasarkan kondisi tertentu. Method ini mengembalikan array baru yang hanya 
berisi elemen yang memenuhi kondisi tersebut.
*/
//2. Build-in method : find
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
/*
Built-in method JavaScript untuk mencari elemen pertama dalam array yang memenuhi kondisi tertentu.
Berbeda dengan Filter method index yang digunakan untuk mencari elemen pertama dalam array yang memenuhi kondisi tertentu. Di sini karena 12 lebih besar dari 10 maka  element pertama yang memenuhi kondisi tersebut adalah 12 dan program akan mengembalikan nilai 12 dan program berhenti
*/
//3. Buit-in method : findIndex
const array2 = [5, 12, 8, 130, 44];

const foundIndex = array2.findIndex((element) => element > 10);

console.log(foundIndex);

/*
findIndex() adalah metode array di JavaScript yang digunakan untuk mencari index dari elemen pertama dalam array yang memenuhi kondisi tertentu.
*/
// 4. Built-in method : includes
const array = [1, 2, 3];

console.log(array.includes(2));

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));

console.log(pets.includes("at"));
/*
includes() adalah metode array di JavaScript yang digunakan untuk memeriksa apakah array memiliki elemen tertentu. Method ini mengembalikan nilai true jika array memiliki elemen tersebut, dan false jika tidak.
*/

//5. Built-in method : map
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map((num) => num * 2);
console.log(doubles);

/*
map() adalah metode array di JavaScript yang digunakan untuk membuat array baru yang dihasilkan dari array asli dengan melakukan operasi tertentu pada setiap elemen.
*/
//6. Built-in method : sort
const array3 = [2, 1, 5, 3, 4];
array3.sort();
console.log(array3);

/*
sort() adalah metode array di JavaScript yang digunakan untuk mengurutkan elemen dalam array secara ascending atau descending.
*/

//7. Built-in method : splice
const array4 = [1, 2, 3, 4, 5];
array4.splice(1, 3);
console.log(array4);

/*
splice() adalah metode array di JavaScript yang digunakan untuk menghapus atau mengganti elemen dalam array. Method ini mengembalikan array baru yang berisi elemen yang telah dihapus atau diganti.
*/

//8. Built-in method : slice
const array5 = [1, 2, 3, 4, 5];
const sliced = array5.slice(1, 4);
console.log(sliced);

/*
slice() adalah metode array di JavaScript yang digunakan untuk mengambil sebagian elemen dalam array. Method ini mengembalikan array baru yang berisi elemen yang dipilih.
*/

//9 . Built-in method : reverse
const array6 = [1, 2, 3, 4, 5];
array6.reverse();
console.log(array6);

/*
reverse() adalah metode array di JavaScript yang digunakan untuk mengubah urutan elemen dalam array. Method ini mengembalikan array baru yang berisi elemen dalam urutan terbalik.
*/

//10.Built-in method : join
const array7 = [1, 2, 3, 4, 5];
const joined = array7.join("-");
console.log(joined);

/*
join() adalah metode array di JavaScript yang digunakan untuk menggabungkan elemen dalam array menjadi string. Method ini mengembalikan string yang berisi elemen dalam array yang telah digabung.
*/
//11. built-in method : toLocaleString
const arrays = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = arrays.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
/*
toLocaleString() adalah metode array di JavaScript yang digunakan untuk mengubah array menjadi string. Method ini mengembalikan string yang berisi elemen dalam array yang telah diubah menjadi string.
*/

//12 .Built-in method : reduce
const array8 = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumWithInitial = array8.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);

/*
  reduce() adalah metode array di JavaScript yang digunakan untuk menghitung nilai akumulasi dari elemen dalam array. Method ini mengembalikan nilai akumulasi yang telah dihitung.
  */

//13 .Built-in method : reduceRight
const arra = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const results = arra.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(results);
// Expected output: Array [4, 5, 2, 3, 0, 1]

/*
reduceRight()mirip seperti .reduce(), tapi bedanya: dia memproses array dari kanan ke kiri (dari elemen terakhir ke yang pertama).
*/

//14 .Built-in method : pop
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());

console.log(plants);

plants.pop();

console.log(plants);

/*
pop() adalah metode array di JavaScript yang digunakan untuk menghapus elemen terakhir dalam array. Method ini mengembalikan elemen yang telah dihapus.
*/

//15 .Built-in method : toSorted
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

/*
toSorted() adalah metode array di JavaScript yang digunakan untuk mengurutkan elemen dalam array. Method ini mengembalikan array baru yang berisi elemen dalam urutan terurut.
*/

//16 .Built-in method : toString
const array9 = [1, 2, 3, 4, 5];
const str = array9.toString();
console.log(str);

/*
toString() adalah metode array di JavaScript yang digunakan untuk mengubah array menjadi string. Method ini mengembalikan string yang berisi elemen dalam array yang telah diubah menjadi string.
*/

//17 . Built-in method : unshift
const array10 = [1, 2, 3, 4, 5];
array10.unshift(0);
console.log(array10);

// 18. Built-in method : with
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

/*
with() immutable method yang memungkinkan kamu mengganti elemen di index tertentu tanpa mengubah array asli.
*/
// 19 . built-in method : values
const arrayr = ["a", "b", "c"];
const iterator = arrayr.values();

for (const value of iterator) {
  console.log(value);
}
/*
values() method di JavaScript yang mengembalikan iterator untuk menelusuri nilai-nilai dari array satu per satu.
*/
// 20. Built-in method : keys
const arrs = ["a", "b", "c", "d", "e"];
const values = arrs.values();
for (const letter of values) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// undefined

/*
keys()  method yang mengembalikan iterator untuk indeks (index/key) dari elemen-elemen array.
*/

// 5. Built-in Function : Function
// 1. Buiilt- in Function : parseInt()
//fungsi bawaan JavaScript yang digunakan untuk mengubah (mengurai) string menjadi bilangan bulat (integer)
parseInt("123"); // 123
parseInt("123abc"); // 123  → stop setelah angka
parseInt("abc123"); // NaN  → gagal karena diawali huruf

// 2. Built-in Function : fetch()
/* Fungsi built-in untuk mengambil data dari server (API).
 */
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data));

// 3. Built-in function : apply()
//Digunakan untuk memanggil fungsi dengan nilai this tertentu, dan argumen dalam bentuk array.

function greet(name, age) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}

greet.apply(null, ["Hosea", 24]);

//4. Buit-in function : bind()
//Mengembalikan fungsi baru dengan nilai this yang ditetapkan.
const person = {
  name: "Hosea",
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const greetFn = person.greet.bind(person);
greetFn(); // Output: Hi, I'm Hosea

//5. Built-in function : call()
// metode dari function di JavaScript yang digunakan untuk memanggil fungsi dengan this tertentu, dan argumennya dikirim satu per satu
function greet(name, age) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}

greet.call(null, "Hosea", 24);
