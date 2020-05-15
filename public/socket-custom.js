var socket = io();
socket.on('connect', function () {
	console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
	console.log('PERDIMOS CONEXION');
});

// Enviar información
socket.emit(
	'EnviarMensaje',
	{
		usuario: 'Edwin',
		mensaje: 'Hola mundo',
	},
	function (resp) {
		console.log(resp);
	}
);

//Escuchar información
socket.on('EnviarMensaje', function (resp) {
	console.log(resp);
});
