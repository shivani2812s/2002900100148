const express = require('express');
const app = express();
const router = require('../router/route');
const Port = 8000;
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);


app.listen(Port, () => {
    console.log(`Example app http://127.0.0.1:${Port}`)
})