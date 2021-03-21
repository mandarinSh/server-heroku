const express = require('express')
const app = express()
const port = process.env.PORT || 5000

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