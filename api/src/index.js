import dotenv from 'dotenv';
import express from 'express';
// import compression from 'compression';

import db from './services/db'
import routeUsers  from './routes/users';
import bodyParser from 'body-parser';
import expressJWT from 'express-jwt';
import cors from 'cors';

dotenv.config();

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../../src/index.html"));

// allow user to create an user and login.
app.use(expressJWT({ secret: process.env.SECRET }).unless(function(req) {
	return (
    req.originalUrl === '/users/login' && req.method === 'POST' ||
    req.originalUrl === '/users' && req.method === 'POST'
   )
}));

app.use('/users', routeUsers);

// send json responde for unauthorized request
app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json(err.message);
	} else {
		res.status(500);
	}
});

var server = app.listen(3001, function () {
    console.log('Listening on port 3001!');
});

module.exports = server;
