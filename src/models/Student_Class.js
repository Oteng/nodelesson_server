import Database from 'better-sqlite3';
const db = new Database('database.db', {verbose: console.log});

export default {
 tbl_student_id:"",
 tbl_class_id:"",
 active:"",

 validateAndCreated(obj) {
    for (let key of ['tbl_student_id', 'tbl_class_id', 'active']) {
        if (obj[key] == null)
            return false
        else this[key] = obj[key]
    }
    return true

    
},
saveInDB() {
    let stm = db.prepare('INSERT INTO student_class (tbl_student_id, tbl_class_id, active) values(?,?,?)');
    let result = stm.run(this.tbl_student_id, this.tbl_class_id, this.active);
    return result;
}

}