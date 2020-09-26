const exit = require("../configs/database/createTables");

class TasksDao {
    constructor(db) {
        this._db = db;
    };

    list() {
        return new Promise( (resolve, reject) => {
            const SELECT = `
                SELECT * 
                FROM tasks
            `
            
            this._db.all(SELECT, (err, rows) => {
                if(err) return reject('Unable to list tasks');

                return resolve(rows);
            });
        });
    };

    delete(id) {
        return new Promise ( (resolve, reject) => {
            const DELETE = `
                DELETE FROM tasks
                WHERE id = ?;
            `;

            const params = [id];

            this._db.run(DELETE, params, err => { 
                if(err) return reject('Unable to delete');

                return resolve('Deleted');
            });
        }); 
    };

    insert(title, description, status) {
        return new Promise( (resolve, reject) => {
           
            const INSERT = `
                INSERT INTO tasks (title, description, status)
                VALUES (?, ?, ?)
                `;

                const params = [title, description, status];

                this._db.run(INSERT, params, err => { 
                    if(err) { 
                        return reject('Unable to insert') 
                    }
                    
                    return resolve('Inserted');
                    
                });
           
        });
    };

    update(title, description, status, id) {
        return new Promise ( (resolve, reject) => {
            const UPDATE = `
                UPDATE tasks
                SET title = ?, description = ?, status = ?
                WHERE id = ?;
            `

            const params = [title, description, status, id];

            this._db.run(UPDATE, params, err => {
                if(err) return reject('Unable to update') 

                resolve('Updated');
            });
        });
    };

};

module.exports = TasksDao;
