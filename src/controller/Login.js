export default class Login {
    actions = [this.doLogin, this.logOut]

    constructor() {
    }

    doLogin(req, res) {
        if (req.method.toLowerCase() === 'post') {
            console.log(req.body)
            res.json(req.body)
        } else {
            res.send("Login Page")
        }
    }

    logOut(req, res){
        res.send('Not Implemented')
    }
}