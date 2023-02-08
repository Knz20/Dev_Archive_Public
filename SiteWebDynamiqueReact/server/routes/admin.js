const express = require('express');
const app = require('../app');
const router = express.Router();
const usersControler = require('../controllers/admin'); // recuperation du controleur de la rute Users
const token_auth = require('../middlewares/token'); // recupération du token d'auth



router.delete('/', token_auth,usersControler.deleteUser); // route /users/rm pour supprimer l'user
router.post('/', token_auth,usersControler.userToAdmin);
module.exports = router;