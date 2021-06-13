const express = require('express')

const app = express()

//serverımız ayakta , port 3000
app.listen(3000)


//get isteklerine cevap vermek

// app.get('/',(req,res)=>{
//     res.send('<p>Merhaba</p>')
// })

app.get('/index',(req,res)=>{
    res.sendFile('./htmls/index.html',{root:__dirname})
})

// yönlendirme yapalım
app.get('/',(req,res)=>{
    //res.sendFile('./htmls/index.html',{root:__dirname})
    res.redirect('/index') //302 Found
})

//middleware
app.use((req,res)=>{
    res.status(404).sendFile('./htmls/404.html',{root:__dirname})
})
