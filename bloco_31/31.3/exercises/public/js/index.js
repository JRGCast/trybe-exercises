const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const PORT = process.env.PORT || 3000;


const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});


app.use(express.static(__dirname + '/public'));

require('./sockets/feed')(io);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
