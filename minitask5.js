const list = [
  {
    name: "Jhon",
    time: 1500,
  },
  {
    name: "Ed",
    time: 1500,
  },
  {
    name: "Jane",
    time: 1500,
  },
];
function queue(nama, time) {
  return new Promise((resolve, reject) => {
    if (!time) {
      reject("Harap Masukan Timer");
    } else {
      setTimeout(() => resolve(nama), time);
    }
  });
}
const runTask = async () => {
  try {
    for (let i = 0; i < list.length; i++) {
      const res = await queue(list[i].name, list[i].time);
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};
runTask();
// queue("Jhon", 1500)
//   .then((res) => {
//     console.log(res);
//     queue("Ed", 2000).then((res) => {
//       console.log(res);
//       queue("Jane", 500).then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => console.log(err));
