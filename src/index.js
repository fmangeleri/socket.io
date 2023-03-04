import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import * as url from 'url';
import { log } from 'console';

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
  console.log('Id de la conexion: ' + socket.id);
  console.log('Clientes conectados: ' + io.engine.clientsCount);

  socket.on('disconnect', () => {
    console.log('El socket ' + socket.id + ' se ha desconectado.');
  });

  socket.conn.once('upgrade', () => {
    console.log(
      'Hemos pasado de HTTP Long-Polling a ',
      socket.conn.transport.name
    );
  });
});

httpServer.listen(3000);
