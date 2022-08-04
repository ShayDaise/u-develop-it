//Dependencies
const mysql = require('mysql2');

// Connect to database express server to teh database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Shayshay1722',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;