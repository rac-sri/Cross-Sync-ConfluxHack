import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../injectedIframe/App';
import mongoose from 'mongoose';
import appRoutes from './routes/appRoutes';
import blockchain from './routes/blockchain';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', appRoutes);

app.use('/blockchain', blockchain);

mongoose
	.connect('mongodb://localhost:27017/cross-sync')
	.then(() => console.log('MongoDB connected.'))
	.catch((err) => console.log('Error occured here \n', err));

app.use(express.static(path.resolve(__dirname, '..', 'buildIFrame')));

app.get('/iframe', (req, res) => {
	fs.readFile(
		path.resolve('./buildIFrame/index.html'),
		'utf-8',
		(err, data) => {
			if (err) {
				console.log(err);
				return res.status(500).send('⛔ Internal Server Error.');
			}

			return res.send(
				data.replace(
					'<div id="root"></div>',
					`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
				)
			);
		}
	);
});

module.exports = app;
