import Database from 'better-sqlite3';
const db = new Database('database.db', {verbose: console.log});

export default {
 tbl_class_id:"",
 tbl_course_id:"",
 active:"",

 validateAndCreated(obj) {
    for (let key of ['tbl_class_id', 'tbl_course_id', 'active']) {
        if (obj[key] == null)
            return false
        else this[key] = obj[key]
    }
    return true

    
},
saveInDB() {
    let stm = db.prepare('INSERT INTO class_course (tbl_class_id, tbl_course_id, active) values(?,?,?)');
    let result = stm.run(this.tbl_class_id, this.tbl_course_id, this.active);
    return result;
}

}