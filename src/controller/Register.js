import Student from '../models/Student.js'

export default class Register {
    actions = [this.register];

    constructor() {
    }

    register(req, res) {
        if (Student.validateAndCreated(req.body)) {
            Student.saveInDB();
            return res.send('Student Created')
        } else {
            return res.send('All fields are required')
        }
    }
}