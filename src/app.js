import express from 'express'
import fs from 'fs'

const app = express()
const port = 3000
app.use(express.json())

let controllers = fs.readdirSync('./src/controller');

console.log('Routes: ')
for (let controller of controllers) {
    import('./controller/' + controller).then(res => {
        let obj = new res.default()
        for (let action of obj.actions) {
            console.log(`/${controller.split('.')[0]}/${action.name}`
                .toLowerCase())
            app.all(`/${controller.split('.')[0]}/${action.name}`
                .toLowerCase(), action);
        }
    }).catch(err => {
        console.log(err);
    })
}

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))