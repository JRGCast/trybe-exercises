module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');
    console.log(`Usuário conectado. ID: ${socket.id} `);
    socket.on('ping', () => {
      console.log(`${socket.id} enviou um ping!`);
      io.emit('pong', `Ei, o usuário ${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
    socket.on('testin', () => {
      io.emit('test', `o usuário ${socket.id} clicou em test`);
    });
  });
};
