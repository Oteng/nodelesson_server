export default class Login {
    actions = [this.doLogin, this.logOut]

    constructor() {
    }

    doLogin(req, res) {
        if (req.method.toLowerCase() === 'post') {
           //proper login
        } else {
            res.render('login', {});
        }
    }

    logOut(req, res) {
        res.send('Not Implemented')
    }
}