
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./queries');
const path = require('path');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  // response.json({ info: 'test project with Node.js, Express.js and Postgress API'})
  response.send("Test project based on Node.js, Express.js and Postgress. Please see more info here: localhost: 3000/about.html")
});

app.get('/about.html', function (request, response) {
  response.sendFile(path.join(__dirname + '/about.html'))
});

// endpoints
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
