var cors = require('cors');
const express = require('express');
const getDbConnection = require('./DBconnection');
const { v4: uuidv4 } = require('uuid');


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

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.get("/take", async (req, res) => {
    try {
        const db = await getDbConnection()    
        const [rows] = await db.execute(`SELECT * FROM users`)
        res.send({rows})
        await db.end()
    } catch (err) {
        console.log(err)
    }

})

app.post("/authenticate", async (req, res) => {
    const user = req.query.username
    const pass = req.query.password
    try {
        const db = await getDbConnection()
        const [rows] = await db.execute(`select uuid, password
                                        from users
                                        where username = '${user}'`)
        await db.end()
        if (rows[0].password === pass) {
            return res.send({
                uuid : rows[0].uuid,
                status : true
            })
        } else {
            return res.send(false)
        }
    } catch (err) {
        console.log(err)
    }
    return res.send(false)
})

app.post("/register", async (req, res) => {
    const user = req.query.username
    const pass = req.query.password
    
    try {
        const db = await getDbConnection()
        console.log(user, pass)
        db.execute(`INSERT INTO users 
                    VALUES (CURRENT_TIMESTAMP, '${uuidv4()}', '${user}', '${pass}');`);
        await db.end()
        res.send({
            status : 200, 
            msg : 'User is added into the database'})
    } catch (err) {
        console.log(err)
    }
})

app.get("/checkLogIn", async (req, res) => {
    const userid = req.query.id
    try {
        const db = await getDbConnection()
        const [rows] = await db.execute(`select *
                                        from users
                                        where uuid = '${userid}'`)
        await db.end()
        if (rows[0].uuid === userid) {
            return res.send(true)
        } else {
            return res.send(false)
        }
    } catch (err) {
        console.log(err)
    }
    return res.send(false)
})

app.get("/getTemperatureAndHumidity", async (req, res) => {
    try {
        const db = await getDbConnection()
        const [rows] = await db.execute(`select *
                                        from result
                                        order by recordAt asc
                                        limit 10`)
        await db.end()
        res.send({rows})
    } catch (err) {
        console.log(err)
    }
})

app.listen(8080, "0.0.0.0", () => {
    console.log('Started at port 8080');
})