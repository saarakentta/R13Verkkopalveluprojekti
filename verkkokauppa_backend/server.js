require('dotenv').config()
const mysql = require('mysql2/promise');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const conf = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dateStrings: false,
    timezone: '+00:00'
}

const port = process.env.DB_PORT

app.get('/products', async (req, res) => {
    try {
        const connection = await mysql.createConnection(conf);

        let merkki = req.query.merkki;

        let result;

        if(merkki){
            result = await connection.execute("SELECT * FROM product WHERE merkki=?", [merkki]);
        }else{
            result = await connection.execute("SELECT * FROM product");
        }

        //First index in the result contains the rows in an array
        res.json(result[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port)