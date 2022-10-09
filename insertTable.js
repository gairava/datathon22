// const fs = require('fs');
// const { Pool } = require('pg');


// // need to connect to the database
// const pool = new Pool ({
//     user: 'gabriel',
//     password: 'b93GWtiaVThRTr9hnCxT7g',
//     host: 'tamudata22-7fr.aws-us-east-2.cockroachlabs.cloud',
//     database: 'defaultdb', 
//     port: 26257,
//     ssl: {
//         ca: fs.readFileSync('tamudata22-ca.crt').toString()
//     }
// });

// const storeLogins = (user, pw, pn) => {
//     pool.query('INSERT INTO logins (username, password, phonenumber), values (user, pw, pn);', [user, pw, pn], (err, rows) => {
//         if(err) {
//             throw err
//         }
//         response.status(200).json(results.rows)
//     })
// }