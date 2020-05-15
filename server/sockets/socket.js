const { io } = require('../server');
io.on('connection', (client) => {
	console.log('USUARIO CONECTADO');
	client.emit('EnviarMensaje', {
		usuario: 'Administrador',
		mensaje: 'Bienvenido a esta aplicacion',
	});
	client.on('disconnect', () => {
		console.log('USUARIO DESCONECTADO');
	});
	// Escuchar evento del cliente
	client.on('EnviarMensaje', (data, callback) => {
		// client.emit('EnviarMensaje', data); //Envía a quien emite la acción
		client.broadcast.emit('EnviarMensaje', data); //Envía a todo el mino
	});
});
