const axios = require('axios');

async function fetchData() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log(res.data);
}

fetchData();
