const url = "https://jsonplaceholder.typicode.com/users";

const fetchData = async () => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    let email = [];
    result.forEach((item) => {
      const lower = item.email.toLowerCase();
      email.push(lower);
      console.log(email);
    });
    console.log(email);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
