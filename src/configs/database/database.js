const exit = require('../database/createTables');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/configs/database/database.sqlite', err => {
    if(err) { return exit(err) } });

process.on('SIGINT', () => { 
    db.close( () => {
        console.log('\nClosed database!');
        process.exit(0);
    });
});

module.exports = db;
