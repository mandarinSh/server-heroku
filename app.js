// const express = require('express');
// const app = express();

// app.get('/', (request, response) => {
//   response.send('Hello from server!');
// });

// // app.get('/getDogs', (request, response) => {
// //   let dogs = {
// //     dogNames: ['Zeus', 'Kolt', 'Kiara']
// //   };
// //   response.send(dogs);
// // });

// app.use((err, request, response, next) => {
//   // логирование ошибки, пока просто console.log
//   console.log(err);
//   response.status(500).send('Something broke!');
// });

// app.listen(3000);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getDogs', (request, response) => {
  let dogs = {
    dogNames: ['Zeus', 'Kolt', 'Kiara']
  };
  response.send(dogs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})