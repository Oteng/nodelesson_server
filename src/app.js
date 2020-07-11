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
stm = db.prepare('CREATE TABLE IF NOT EXISTS class ( ' +
    'id INTEGER PRIMARY KEY, ' +
    'name varchar(255),' +
    'classmaster varchar(255),' +
    'class_id varchar(255)' +
    ' );');
stm.run()
stm = db.prepare('CREATE TABLE IF NOT EXISTS course ( ' +
    'id INTEGER PRIMARY KEY, ' +
    'name varchar(255),' +
    'course_teacher varchar(255),' +
    'course_id varchar(255)' +
    ' );');
stm.run()
stm = db.prepare('CREATE TABLE IF NOT EXISTS class_course ( ' +
    'id INTEGER PRIMARY KEY, ' +
    'tbl_class_id varchar(255),' +
    'tbl_course_id varchar(255),' +
    'active boolean default true' +
    ' );');
stm.run()
stm = db.prepare('CREATE TABLE IF NOT EXISTS student_class ( ' +
    'id INTEGER PRIMARY KEY, ' +
    'tbl_student_id varchar(255),' +
    'tbl_class_id varchar(255),' +
    'active boolean default true' +
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