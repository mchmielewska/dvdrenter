const express = require("express");
const bodyParser = require("body-parser");

const port = require('./config').port;

const db = require('./database/mongo');
const userRouter = require('./routes/users');
const dvdsRouter = require('./routes/dvds');
const authMiddleware = require('./middlewares/auth').authMiddleware;

const app = express();

console.log(process.env);

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use(authMiddleware);
app.use('/dvds', dvdsRouter);

app.use((req, res, next) => res.status(404).send("not found!"));

db.initDbConnection(() => app.listen(port, () => console.log(`Hello, ${port}`)));