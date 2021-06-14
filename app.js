const express = require('express')

const app = express()

//serverımız ayakta , port 3000
app.listen(3000)

//ejs view engine set edilmesi
app.set('view engine','ejs') //views olsaydı klasör oto görür
app.set('views','htmls')

//middleware , next
app.use((req,res,next) => {
    console.log(req.hostname,req.path,req.method)
    next()
})

//get istekleri
app.get('/',(req,res) => {
    const dersler = [
        {baslik:'React Kursu',icerik:'React Hooks ve React Native'},
        {baslik:'Flutter Kursu',icerik:'Flutter ve firebase ile uygulama'}
    ]
    res.render('index',{dersler}) //200 ok
})

app.get('/hakkimda',(req,res) => {
    // render(hangiSayfa,opsiyonluVeri)
    res.render('hakkimda',{hakkimda:'LessonApp Hakkında'})
})

app.get('/ders/ekle',(req,res) => {
    res.render('ekle')
})

//use middleware
app.use((req,res) => {
    res.status(404).render('404')
})