const mysql = require('mysql')
const myConnection = require('express-myconnection')

// Connect Database
const connect = myConnection(mysql, {
   host: 'localhost',
   user: 'root',
   password: '',
   port: 3306,
   database: 'node-mysql'
}, 'single') 

// Validate Connection
if (connect) {
    console.log('Database is Connect')
} else {
    console.log('Error Database Connect');
}

// Export variable connect
module.exports = { connect }