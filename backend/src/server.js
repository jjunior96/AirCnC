const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

// const Database = require('./database/index');
const mongoose = require ('mongoose');


const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('Usuario conectado', socket.id);

  socket.emit('hello', 'World');
});

mongoConnection = mongoose.connect(
  'mongodb://localhost:27017/semanaOmnistack',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
);

// const bancoDeDados = Database;

app.use(cors());

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
// app.use(bancoDeDados);
app.use(routes);

server.listen(3000);
