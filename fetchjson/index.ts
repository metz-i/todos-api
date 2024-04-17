import axios from 'axios';

// URL of API
const url = 'https://jsonplaceholder.typicode.com/todos';

// Fetching JSON data from API
axios.get(url).then(response => {
  console.log(response.data);
})
