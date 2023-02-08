const express = require('express');
const router = express.Router();
const astuceControler = require('../controllers/listeAstuce');


router.get('/',astuceControler.listAstuce);


module.exports = router;