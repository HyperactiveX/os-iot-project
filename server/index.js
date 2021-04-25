var cors = require('cors');

const express = require('express')

const app = express()
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.get("/authenticate", (req, res) => {
    const username = req.query.username
    const password = req.query.password
    
    if (username == 'test' && password == 'test') {
        return res.send(true)
    }
    return res.send(false)
})

app.listen(8080, () => {
    console.log('Started at port 8080');
})