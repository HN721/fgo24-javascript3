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

const convertToLower = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }

  return result;
};

const fetchEmail = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const email = data[i].email;
        const lowerEmail = convertToLower(email);
        console.log(lowerEmail);
      }
    })
    .catch((err) => console.log(err));
};

fetchEmail();

