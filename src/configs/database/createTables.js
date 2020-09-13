const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db');

const schemaTableUsers = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name VARCHAR(60),
    email VARCHAR(60),
    password VARCHAR(20)
);`;

const schemaTableTasks = `
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title VARCHAR(60),
    description TEXT,
    status VARCHAR(30)
);`;

const addValuesUsers = `
INSERT INTO users (
    name,
    email,
    password
) VALUES (
    'Victoria',
    'vicck.rj@gmail.com',
    123456
);`;

const addValuesTasks = `
INSERT INTO tasks (
    title,
    description,
    status
) VALUES (
    'Books',
    'Read a book for 1 hour',
    'Havent started yet'
);`;

function exitError(err) {
    console.log(err.message);
    process.exit(1);
}

db.serialize( () => {
    // db.run(schemaTableUsers, (err) => {
    //     if (err) {
    //          exitError(err);
    //     }
    // });

    // db.run(schemaTableTasks, (err) => {
    //     if(err) {
    //          exitError(err);
    //     }
    // });

    // db.run(addValuesUsers, (err) => {
    //     if(err) {
    //         exitError(err);
    //     }
    // });

    db.run(addValuesTasks, (err) => {
        if(err) {
            exitError(err);
        }
    })
});