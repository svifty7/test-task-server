const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const randomWords = require('random-words');
const config = require('../config/.config.js');

class Server {
    constructor() {
        this.app = express();

        this.init()
            .then(() => {
                this.registerQueries();
            });
    }

    async init() {
        this.app.use(bodyParser.json());
        this.app.use(express.static(`${__dirname }/img`))

        this.app.listen(Number(config.port), String(config.host))
    }

    registerQueries() {
        this.app.get('/', cors(), (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

        this.app.get('/radial-menu', cors(), (req, res) => {
            const { query } = req;
            const lengthInQuery = !!query
                && 'length' in query
                && Number(query.length) >= 4
                && Number(query.length) <= 10;
            const length = lengthInQuery
                ? Number(query.length)
                : Math.floor(Server.randomInteger);

            res.json(randomWords(length));
        })
    }

    static get randomInteger() {
        return Math.floor(4 + Math.random() * (10 + 1 - 4));
    }
}

new Server();
