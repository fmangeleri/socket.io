const socket = io();

socket.on('connect', () => {
  console.log('Conexion establecida');
});

socket.on('disconnect', () => {
  console.log('Se perdio la conexion');
});

socket.io.on('reconnect_attempt', () => {
  console.log('Intentando reestablecer la conexion');
});

socket.io.on('reconnect', () => {
  console.log('Conexion reestablecida');
});
