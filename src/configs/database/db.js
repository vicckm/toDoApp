const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db');

process.on('SIGINT', () => { 
    db.close( () => {
        console.log('Closed database');
        process.exit(0);
    });
});

module.exports = db;