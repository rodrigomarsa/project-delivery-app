const express = require('express');
const loginRouter = require('../routes/login.route');

const app = express();
app.use(express.json());

app.use('/login', loginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
