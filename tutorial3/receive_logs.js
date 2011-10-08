var util = require('util');
var amqp = require('amqp');

var connection = amqp.createConnection({host: 'localhost'});

connection.on('ready', function () {
	var exchange = connection.exchange('logs', {type: 'fanout'}); 
	var queue = connection.queue('', {exclusive: true}, function() {
		util.p(queue.name);
		queue.bind(exchange, '');
	    });

	queue.subscribe(function (message) {
		util.p(message.data.toString());
	});
  });