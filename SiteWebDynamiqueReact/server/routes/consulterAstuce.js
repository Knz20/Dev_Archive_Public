const express = require('express');
const router = express.Router();
const astuceControler = require('../controllers/consulterAstuce');


router.get('/',astuceControler.ConsultAstuce);


module.exports = router;