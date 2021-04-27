var cors = require('cors');
const connection = require('./DBconnection')
const express = require('express')


const app = express()
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
    })

    connection.end()
    res.send(
        {
            test : "success",
            db : rows[0].solution
        }
    )
})

app.get("/authenticate", (req, res) => {
    const username = req.query.username
    const password = req.query.password
    
    if (username == 'test' && password == 'test') {
        return res.send(true)
    }
    return res.send(false)
})

app.listen(8080, "0.0.0.0", () => {
    console.log('Started at port 8080');
})