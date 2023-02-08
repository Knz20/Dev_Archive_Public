const express = require('express');
const app = require('../app');
const router = express.Router();
//chercher le fichier register.js qui se trouve dans controllers
const registerController = require('../controllers/register');
const fileLoader = require('../middlewares/upload');


router.post('/', fileLoader,registerController.createUser);/*appel de la fonction du controlleur 
qui va se charger d'afficher si l'utilisateur s'est bien enregistré*/



module.exports = router;