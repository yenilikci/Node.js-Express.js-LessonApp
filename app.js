const express = require('express')

const app = express()

//serverımız ayakta , port 3000
app.listen(3000)

//ejs view engine set edilmesi
app.set('view engine','ejs') //views olsaydı klasör oto görür
app.set('views','htmls')

//get istekleri
app.get('/',(req,res) => {
    res.render('index') //200 ok
})

app.get('/hakkimda',(req,res) => {
    res.render('hakkimda')
})

app.get('/ders/ekle',(req,res) => {
    res.render('ekle')
})

//use middleware
app.use((req,res) => {
    res.status(404).render('404')
})