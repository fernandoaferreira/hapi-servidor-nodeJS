const Hapi = require('hapi');

const server = Hapi.Server({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (req, res) {
        return 'Bem vindo - NodeJS com Hapi';
    }
});

server.route({
    method: 'POST',
    path: '/hello/{id}',
    handler: function (req, res) {
        return `Bem vindo - NodeJS com Hapi - ROTA POST com Params ${req.params.id}`;
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (req, res) {
        return 'Main path';
    }
});


async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
