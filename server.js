const express = require('express');
const app = express();
const fs = require('fs');


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATH, PUT, DELETE, OPTIONS');
  next();
});


app.get('/api/jokes', (req, res) => {
  fs.readFile('jsonData/jokes-json.json', '', (err, data) => {
    if(data) {
      let jokes = JSON.parse(data);
      res.status(200).json(jokes)
    } else {
      res.status(404).json()
    }

  });
})

app.get('/api/jokes/:type', (req, res) => {
  fs.readFile('jsonData/jokes-json.json', '', (err, data) => {
    const jokes = JSON.parse(data);
    const jokeType = req.params.type;
    const jokesArray = jokes.filter(j => j.type === jokeType);
    const shuffled = [...new Set([...jokesArray].sort(() => 0.5 - Math.random()).slice(0,5))];
    res.status(200).json(shuffled)
  });
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
