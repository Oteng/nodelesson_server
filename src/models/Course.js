// JavaScript source code
import Database from 'better-sqlite3';
const db = new Database('database.db', { verbose: console.log });

export default {
    courseid: '',
    coursename: '',
    course_teacher: '',
   
    validateAndCreated(obj) {
        for (let key of ['courseid', 'coursename','course_teacher']) {
            if (obj[key] == null)
                return false
            else this[key] = obj[key]
        }
        return true
    },
    saveInDB() {
        let stm = db.prepare('INSERT INTO course (courseid, coursename,' +
            'course_teacher) values(?,?,?)');
        let result = stm.run(this.courseid, this.coursename,);
        return result;
    }
