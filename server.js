const express = require('express');
const {
    createServer
} = require('http');

const app = express();
const server = createServer(app);

app.use('', (req, res, next) => res.status(200).send('It works!'));

server.listen(process.env.PORT || 5000, () => console.log(`server running on port ${process.env.PORT || 5000}!`));