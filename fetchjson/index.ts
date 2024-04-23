import axios from 'axios';

// URL of API
const url = 'https://jsonplaceholder.typicode.com/todos';

// Fetching JSON data from API
axios.get(url).then(response => {
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.Title;
  const completed = todo.completed;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Finished? ${completed}
  `)
})
