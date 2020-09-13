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


// return new Promise( (resolve, reject) => {
//     this._db.all("SELECT * FROM tasks", (err, rows) => {
//         if (rows.length > 0) {
//             res.send(createPageToDo(rows));
//           } else {
//             res.send(createPageToDo());
//           }
//     })

// this._db.all('SELECT * FROM tasks', (err, rows) => {
//     if(err) return reject('Unable to list tasks')

//     if(rows.length > 0) {
//         resolve(createPageToDo(rows));
//     } else {
//         resolve(createPageToDo());
//     }
// })