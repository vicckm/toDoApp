const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/configs/database/database.sqlite', err => {
    if(err) { return exit(err) }
});

const TABLE_USERS = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name VARCHAR(60),
    email VARCHAR(60),
    password VARCHAR(20)
);`;

const TABLE_TASKS = `
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title VARCHAR(60),
    description TEXT,
    status VARCHAR(30)
);`;

let insertUsers = `
INSERT INTO users (
    name,
    email,
    password
) VALUES (
    'Victoria',
    'vic@gmail.com',
    123456
);`;


let insertTasks = `
INSERT INTO tasks (
    title,
    description,
    status
) VALUES (
    'Spend time with friends',
    'Just have fun!',
    'Done'
);`;

function exit(err) {
    console.log(`This is the error: ${err}`);
    process.exit(1);
}

db.serialize( () => {
    db.run(TABLE_USERS, err => { if(err) { return exit(err) } });

    db.run(TABLE_TASKS, err => { if(err) { return exit(err) } });

    // db.run(insertTasks, err => { if(err) { return exit(err) } });
});

module.exports = exit;