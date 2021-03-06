import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app/app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
    const appString = renderToString(<App />);

    res.send(template({
        body: appString,
        title: 'Hello World from the server'
    }));
});

server.listen(8080);
