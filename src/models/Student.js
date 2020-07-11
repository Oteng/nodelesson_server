export default {
    lname: '',
    fname: '',
    oname: '',
    dob: '',
    stud_id: '',
    class: '',
    contact: '',
    parent_name: '',
    parent_contact: '',
    email: '',
    validateAndCreated(obj) {
        for (let key of ['lname', 'fname', 'dob', 'stud_id', 'contact', 'parent_name', 'parent_contact', 'email']) {
            if (obj[key] == null)
                return false
            else this[key] = obj[key]
        }
        return true
    },
    saveInDB() {
        console.log(this)
    }
}