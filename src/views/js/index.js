const socket = io();

socket.on('connect', () => {
  console.log('Conexion establecida');
});

socket.on('disconnect', () => {
  console.log('Se perdio la conexion');
});

socket.on('reconnect_attempt', () => {
  console.log('Intentando reestablecer la conexion');
});

socket.on('reconnect', () => {
  console.log('Conexion reestablecida');
});
