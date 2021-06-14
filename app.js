const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const Ders = require('./models/ders')

const dbURI = 'mongodb+srv://yenilikci:test1234@cluster1.sdpjj.mongodb.net/lessonDB?retryWrites=true&w=majority'

const app = express()

//veritabanına bağlanma
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((result) => app.listen(3000)) //bağlantı başarılı ise serverımız ayakta , port 3000
        .catch((err) => console.log(err))

//ejs view engine set edilmesi
app.set('view engine','ejs') //views olsaydı klasör oto görür
app.set('views','htmls')

/*middleware , next
app.use((req,res,next) => {
    console.log(req.hostname,req.path,req.method)
    next()
})*/

app.use(morgan('dev')) //method,path,statusCode,ms,message

app.use(express.static('public'))

/*get istekleri, model ile işlemler
app.get('/ders-ekle',(req,res) => {
    //Modelimizi kullanarak yeni bir ders oluşturalım
    const ders = new Ders({
        baslik:'NodeJS',
        icerik:'NodeJs ile uygulama geliştirmek'
    })
    //dersi eklemek, promise yapısı
    ders.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })

})

app.get('/butun-dersler',(req,res) => {
    //tüm dersleri getirmek
    Ders.find().then((result) => {
        res.send(result)
    })
})

app.get('/tek-ders',(req,res) => {
    //tek bir kayıt
    Ders.findById('60c7701d2646bc3b4cca69e8').then((result) => {
        res.send(result)
    })
})
*/

//get istekleri, sayfaları yüklemek
app.get('/',(req,res) => {
    //yönlendirme
    res.redirect('/dersler')
})

app.get('/dersler',(req,res) => {
    Ders.find().sort({createdAt:-1})
        .then((result) => {
            res.render('index',{dersler:result})
        })
        .catch((err) => console.log(err))
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