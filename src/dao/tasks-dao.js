class TasksDao {
    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise( (resolve, reject) => {
            this._db.all('SELECT * FROM tasks', (err, rows) => {
                if(err) return reject('Unable to list tasks');

                return resolve(rows);
            })
        })
    }

}

module.exports = TasksDao;
