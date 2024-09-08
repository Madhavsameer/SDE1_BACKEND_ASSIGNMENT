const mysql = require('mysql');

function connectToDatabase() {
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    });

    db.connect(err => {
        if (err) {
            console.error('Database connection failed:', err.stack);
            return;
        }
        console.log('Connected to MySQL database');
    });
    return db;
}
module.exports = connectToDatabase;