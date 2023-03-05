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

  socket.emit('on', 'on');
  socket.emit('on', 'on');

  io.emit('io', 'Clientes conectados: ' + io.engine.clientsCount);
});

httpServer.listen(3000);
