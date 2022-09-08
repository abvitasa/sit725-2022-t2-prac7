require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./dbConnect');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const { response } = require('express');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/projects', projectRoutes);
app.use('/api/user', userRoutes);

app.get('/addNumber/:n1/:n2', (req, res) => {
  let n1 = parseInt(req.params.n1);
  let n2 = parseInt(req.params.n2);
  let result = n1 + n2 || null;
  if (result == null) res.json({ result: result, statusCode: 400 }).status(400);
  else res.json({ result: result, statusCode: 200 }).status(200);
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(() => {
    socket.emit('number', new Date().toISOString());
  }, 1000);
  setInterval(() => {
    socket.emit('random_number', parseInt(Math.random() * 10));
  });
});

const port = process.env.port || 3000;

http.listen(port, () => {
  console.log('App running at http://localhost:' + port);
});
