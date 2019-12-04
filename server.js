const express = require('express');
const {
    createServer
} = require('http');
const mongoose = require('mongoose');

const app = express();
const server = createServer(app);

app.use('', require('./routes'));

async function init() {
    try {
        const con = await mongoose.connect('mongodb://localhost:27017/blog_post_api', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        if (con) console.log('connecting to mongodb!')
    } catch (error) {
        throw error.message
    }
}

init()

server.listen(process.env.PORT || 5000, () => console.log(`server running on port ${process.env.PORT || 5000}!`));