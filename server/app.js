import express from 'express';
import path from 'path';
// import mongoose from 'mongoose';
import blockchain from './routes/blockchain';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', '/index.html'));
});
app.use('/blockchain', blockchain);

// mongoose
// 	.connect('mongodb://localhost:27017/cross-sync')
// 	.then(() => console.log('MongoDB connected.'))
// 	.catch((err) => console.log('Error occured here \n', err));

app.use(express.static(path.resolve(__dirname, '..', 'buildIFrame')));

module.exports = app;
