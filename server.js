const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const port = process.env.PORT || 5000;

const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    
    server.get('/about', (req, res) => {
        const actualPage = '/about';
        app.render(req, res, actualPage);
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Server ready! ')
    })
}).catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })