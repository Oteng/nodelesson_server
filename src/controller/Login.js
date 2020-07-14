import Database from 'better-sqlite3';
const db = new Database('database.db', {verbose: console.log});
export default class Login {
    actions = [this.doLogin, this.logOut]

    constructor() {
    }

    doLogin(req, res) {
        if (req.method.toLowerCase() === 'post') {
            //proper login
            if (req.body.username == undefined || req.body.password == undefined) {

                req.flash("error", "All fields are required");
                return res.render("login", {error_message: req.flash("error")})

            }
            const row = db.prepare('SELECT * FROM user WHERE username = ?').get(req.body.username);
            //const row_password = db.prepare('SELECT * FROM user WHERE password = ?').get(req.body.password);
            if(row== null || row ==undefined){
                req.flash("user_error", "username is not correct");
                return res.render("username", {error_message: req.flash("user_error")})

            }
            if(row.password == null || row.password == undefined){
                req.flash("password_error", "user password is not correct");
                return res.render("userpassword", {error_message: req.flash("password_error")})
            }

            if(row.username == req.body.username && row.password == req.body.password){

            }


        } else {
            res.render('login', {});
        }
    }

    logOut(req, res) {
        res.send('Not Implemented')
    }
}