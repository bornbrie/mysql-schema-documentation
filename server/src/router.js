const express = require('express');
const router = express();
const mysql = require('mysql')
const env = require('dotenv').config();

router.get('/', (req, res) => res.send('Hello MYSQL Schema API!'))

router.get('/schema', (req, res) => {
    console.log(
        'host', env.MYSQL_HOST,
        'port', env.MYSQL_PORT,
        'user', env.MYSQL_USER,
        'password', env.MYSQL_PASSWORD
    )
    const schema = mysql.createConnection({
        host: env.MYSQL_HOST,
        port: env.MYSQL_PORT,
        user: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD
    })
    schema.connect(error => {
        if (error) {
            console.log('error', error)
            res.status(502).send({error: error})
            if (error.fatal) {
                return
            }
        }
        database.query('show databases', (error, results, fields) => {
            if (error) {
                res.status(502).send({error: error})
            }
            console.log('Fields', fields)
            console.log('Results', results)
        })
    })
})

module.exports = router;