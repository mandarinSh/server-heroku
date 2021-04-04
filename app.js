const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getDogs', (request, response) => {
  let dogs = [
    {
      id: 1,
      name: "Zeus"
    },
    {
      id: 2,
      name: "Kiara"
    }
  ];
  response.send(dogs);
});

app.get('/getCats', (request, response) => {
  let cats = {
    catNames: ['Snow', 'Barsik', 'Juice']
  };
  response.send(cats);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})