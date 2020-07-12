import Database from "better-sqlite3";
const db = new Database("database.db", { verbose: console.log });

function student(lname, fname, oname, dob, stud_id,class, contact, parent_name, parent_contact, email) {
    this.lname = lname;
    this.fname = fname;
    this.oname = oname;
    this.dob = dob;
    this.stud_id = stud_id;
    this.class = class;
    this.contact = contact;
    this.parent_name = parent_name;
    this.parent_contact = parent_contact;
    this.email = email;
}

export default {
  lname: "",
  fname: "",
  oname: "",
  dob: "",
  stud_id: "",
  class: "",
  contact: "",
  parent_name: "",
  parent_contact: "",
  email: "",
  validateAndCreated(obj) {
    for (let key of [
      "lname",
      "fname",
      "dob",
      "stud_id",
      "contact",
      "parent_name",
      "parent_contact",
      "email",
    ]) {
      if (obj[key] == null) return false;
      else this[key] = obj[key];
    }
<<<<<<< HEAD

}
=======
    return true;
  },
  saveInDB() {
    let stm = db.prepare(
      "INSERT INTO student (lname, fname," +
        "oname, dob, stud_id, contact, parent_name," +
        "parent_contact, email) values(?,?,?,?,?,?,?,?,?)",
    );
    let result = stm.run(
      this.lname,
      this.fname,
      this.oname,
      this.dob,
      this.stud_id,
      this.contact,
      this.parent_name,
      this.parent_contact,
      this.email,
    );
    return result;
  },
};
>>>>>>> 6fa081fb07571162e81fe9a89c2b76aded766f12
