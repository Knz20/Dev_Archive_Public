const express = require('express');
const router = express.Router();
const profilControler = require('../controllers/profil');
const token_auth = require('../middlewares/token');


router.get('/',token_auth,profilControler.findUser);


module.exports = router;