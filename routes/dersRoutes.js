const express = require('express')
const Ders = require('../models/ders')
const router = express.Router()
const dersController = require('../controllers/dersController')

//tüm dersleri getirmek
router.get('/',dersController.dersleriGetir)

//id'ye göre ders getirmek
router.get('/:id',dersController.dersGetir)

//ders silmek
router.delete('/:id',dersController.dersSil)

//ders eklemek
router.post('/',dersController.dersEkle)

module.exports = router