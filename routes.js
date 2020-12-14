//モジュール読み込み
const express = require('express')
const router = express.Router()

//Controller
const homeController = require('./controllers/HomeController')

//ルーティング
router.get('/', homeController.index)
router.get('/item', homeController.list_items)
router.get('/about', homeController.about)

module.exports = router