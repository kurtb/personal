var util = require('util');
var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function () {
	var queue = connection.queue('hello');
	queue.subscribe(function (message) {
		util.p(message.data.toString());
	});
  });