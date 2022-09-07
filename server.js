require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
let dbConnect = require('./dbConnect');
let projectRoutes = require('./routes/projectRoutes');
let userRoutes = require('./routes/userRoutes');
const { response } = require('express');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/projects', projectRoutes);
app.use('/api/user', userRoutes);

app.get('/addNumber/:n1/:n2', (req, res) => {
  // res.sendStatus(200);
  res.json({ statusCode: 200 });
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('App running at http://localhost:' + port);
});
