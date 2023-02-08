const express = require('express');
const app = require('../app');
const router = express.Router();
//chercher le fichier register.js qui se trouve dans controllers
const registerController = require('../controllers/ajoutAstuce');
const fileLoader = require('../middlewares/upload');
const token_auth = require('../middlewares/token');


router.post('/', fileLoader,token_auth,registerController.createAstuce);/*appel de la fonction du controlleur 
qui va se charger d'afficher si l'astuce a été ajouté*/



module.exports = router;