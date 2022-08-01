const express = require ('express')

const app = express()

const port = 5300

const isLogin = true

app.set('view engine', 'hbs')

app.use('/public', express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false}))

// console.log(__dirname);

app.get('/',(req,res) => {

    res.render('index', { isLogin: isLogin})
})

app.get('/contact-me',(req,res) => {

    res.render('Contact-me')
})

app.get('/my-project',(req,res) => {

    res.render('My-Project')
})

app.post('/my-project', (req,res) => {

    const data = req.body
    console.log(data);
})

app.get('/detail-project',(req,res) => {  //:title

    // const title = req.params.title
    // console.log(title);

    res.render('detail-project')
})

app.listen(port, () => {
    console.log(`Personal Web App listening on port ${port}`)
})