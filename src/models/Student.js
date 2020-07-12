import Database from "better-sqlite3";
const db = new Database("database.db", { verbose: console.log });

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
