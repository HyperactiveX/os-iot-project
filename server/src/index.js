var cors = require('cors');
const express = require('express');
const db = require('./DBconnection');
// const database = require('./DBconnection');

const app = express()

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));









app.get("/", (req, res) => {
    res.send({
        success : true
    })
})

app.get("/take", async (req, res) => {
    try {
        const result = await db.execute(`SELECT * FROM USERS`)
        console.log(result)
        // res.send(result)
        db.end()
        
    } catch (err) {
        console.log(err)
    }

})

// app.post("/authenticate", (req, res) => {
//     const username = req.query.username
//     const password = req.query.password
    
//     if (username && password) {
//         try {
//             db.promise().query(`SELECT uuid FROM Users where username = '${username}'`);
//             res.status(201).send({msg: "User is in the database"})
//         } catch (err) {
//             console.log(err)
//         }
//     }
//     return res.send(false)
// })

app.listen(8080, "0.0.0.0", () => {
    console.log('Started at port 8080');
})