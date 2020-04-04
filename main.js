// modules
const express = require('express')
const app = express()

// CONSTANT
const LOCAL_PORT = 3000

// setting
app.set('port', process.env.PORT || LOCAL_PORT)
app.set('view engine', 'ejs')

// request analyze
app.use(express.urlencoded({
    extended : false
}))

app.get('/', (req, res) => {
//    res.send('ok　ARK')
    res.render('index')
})

app.get('/message', (req, res) => {
    const msg = req.query.msg
    console.log(`called message : ${msg}`)
    res.send(`OK : ${msg}`)
})

app.listen(app.get('port'), () => {
    console.log(`Start-up server listen: ${app.get('port')}.`)
})

