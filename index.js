const fs = require('fs');
const { Pool } = require('pg');


// need to connect to the database
const pool = new Pool ({
    user: 'gabriel',
    password: 'b93GWtiaVThRTr9hnCxT7g',
    host: 'tamudata22-7fr.aws-us-east-2.cockroachlabs.cloud',
    database: 'defaultdb', 
    port: 26257,
    ssl: {
        ca: fs.readFileSync('tamudata22-ca.crt').toString()
    }
});


const storeLogins = (user, pw, pn) => {
    pool.query('INSERT INTO logins (username, password, phonenumber), values (user, pw, pn);', [user, pw, pn], (err, rows) => {
        if(err) {
            throw err
        }
        response.status(200).json(results.rows)
    })
}

// MADE FOR TESTING
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
    storeLogins
}


const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const knex = require('knex')
// const db = require('./server')
const port = 3000
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true,}))
let intialPath = path.join(__dirname, 'public')
app.use(bodyParser.json())
app.use(express.static(intialPath))


app.get('/', (req, res) => {
    // __dirname is the directory name of the current module. So it goes current and then index
    res.sendFile(path.join(__dirname, 'website.html'))
    res.json({info: 'HELLO WORLD'})
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'))
})

// TESTING
app.get('/users', getUsers)

app.get('/', (request, response) => {
    response.json({info: 'HELLO WORLD'})
})

app.post('/register-user', (req, res) => {
    const { name, password, tel } = req.body;
    if (!name.length || !email.length || !tel.length) {
        res.json('please fill the fields');
    } else {
        pool.query('INSERT INTO logins (username, password, phonenumber), values (user, pw, pn);', [name, password, tel], (err, rows) => {
            if(err) {
                throw err
            }
            response.status(200).json(results.rows)
        })
        pool("logins").insert({
            name: name,
            tel: tel,
            password: password
        })
        .returning(["name", "tel"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('number already registered');
            }
        })
    }
})

app.listen(port, () => {
    console.log('App running on port: ', port)
})