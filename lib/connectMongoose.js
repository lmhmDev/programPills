'use strict';

const mongoose = require('mongoose');
var cowsay = require("cowsay");

mongoose.connection.on('error', err => {
    console.log('Error de conexión', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log();
    console.log(cowsay.say({
        text: 'Conectado a MongoDB en ' + mongoose.connection.name,
        e: 'oO',
    }));
});

mongoose.connect('mongodb://localhost/programPills', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;