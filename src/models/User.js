import Database from "better-sqlite3";
const db = new Database("database.db", { verbose: console.log });

export default {
  username: "",
  password: "",
  type: "",
  isLogin: false,
  token: null,
  id: null,
  created_at: Date.now,
  updated_at:Date.now,

  validateAndCreated(obj) {
    for (let key of [
      "username",
      "password",
      "type",
      "isLogin",
      "id",
      "created_at",
      "updated_at",
    ]) {
      if (obj[key] === null) return false;
      else this[key] = obj[key];
    }
    return true;
  },
  saveInDB() {
    let user = db.prepare(
      "INSERT INTO USER (username, password," +
        "type, isLogin, created_at, updated_at"
        ") values(?,?,?,?,?,?,?,?,?)",
    );
    let result = user.run(
      this.username,
      this.password,
      this.type,
      this.id,
      this.created_at,
      this.updated_at,
    );
    return result;
  },
};




