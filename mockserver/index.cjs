//COMMON JS = Maneira original de empacotar código JS para Node
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {


    res.end('Aplicação web servida pelo módulo http nativo do NodeJS');
});

server.listen(port, hostname, () => {
    console.log(`Servidor em execução: http://${hostname}:${port}/`);
});