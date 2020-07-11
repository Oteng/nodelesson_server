import Student from '../models/Student.js'

export default class Register {
    actions = [this.register];

    constructor() {
    }

    register(req, res) {
        if (Student.validateAndCreated(req.body)) {
            return res.send(Student.saveInDB());
        } else {
            return res.send('All fields are required')
        }
    }
}