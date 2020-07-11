import express from 'express'
import fs from 'fs'
import Database from 'better-sqlite3';
const db = new Database('database.db', {verbose: console.log});

//create tables
let stm = db.prepare('CREATE TABLE IF NOT EXISTS student ( ' +
    'id INTEGER PRIMARY KEY, ' +
    'lname varchar(255),' +
    'fname varchar(255),' +
    'oname varchar(255),' +
    'dob varchar(255),' +
    'stud_id varchar(255),' +
    'class varchar(255),' +
    'contact varchar(255),' +
    'parent_name varchar(255),' +
    'parent_contact varchar(255),' +
    'email varchar(255)' +
    ' );');
stm.run()

const app = express()
const port = 3000
app.use(express.json())

let controllers = fs.readdirSync('./src/controller');

console.log('Routes: ')
for (let controller of controllers) {
    import('./controller/' + controller).then(res => {
        let obj = new res.default()
        for (let action of obj.actions) {
            console.log(`/${controller.split('.')[0]}/${action.name}`
                .toLowerCase())
            app.all(`/${controller.split('.')[0]}/${action.name}`
                .toLowerCase(), action);
        }
    }).catch(err => {
        console.log(err);
    })
}

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))