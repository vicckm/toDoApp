const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./toDoDB');

db.serialize( () => {
    // db.run('CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, description TEXT)');
    db.run('INSERT INTO tasks (id, title, description) VALUES (1, "Programming", "Do logic exercises")', (err) => {
        if(err) { console.log(err.message) }
    });

    db.all('SELECT * FROM tasks', (err, row) => {
        if(err) { console.log(err.message) }
        
        console.log(row)
    })
})

module.exports = db;