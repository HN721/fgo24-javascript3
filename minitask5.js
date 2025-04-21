function queue(nama, time) {
  return new Promise((resolve, reject) => {
    if (nama === "Jhon" || nama === "Ed" || nama === "Jane") {
      setTimeout(() => resolve(nama), time);
    } else {
      reject("Harap Masukan Nama Yang Benar");
    }
  });
}

queue("Jhon", 1500)
  .then(function (result) {
    console.log(result);
    queue("Ed", 2000).then(function (result) {
      console.log(result);
      queue("Jane", 500).then(function (result) {
        console.log(result);
      });
    });
  })
  .catch((err) => console.log(err));
