const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dersSchema = new Schema({
    baslik:{type:String,required:true},
    icerik:{type:String,required:true}
},{timestamps:true})

const Ders = mongoose.model('Ders',dersSchema)

module.exports = Ders