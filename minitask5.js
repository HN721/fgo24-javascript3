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
  .then((res) => {
    console.log(res);
    queue("Ed", 2000).then((res) => {
      console.log(res);
      queue("Jane", 500).then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => console.log(err));
