const express = require('express');
const app = require('../app');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const loginCOntroler = require('../controllers/login'); //recupération du controlleur pour l'appel


router.post('/', function(req,res, next) {
/*Passport fournit une fonction, qui est utilisée comme itinéraire
 middleware pour authentifier les demandes.authenticate()*/
    passport.authenticate('login', async function(err,user)
    {
        //verifier si l'utilisateur n'existe pas
        if(err || !user)
        {
            console.log(err);
            res.status(401).send("coordonnées incorrect, veuillez réessayer a nouveau!");
        }
        //Enfin si l'utilisateur existe
        if(user)
        {
            let token = jwt.sign(
                {'username' : user.pseudo},
                'AMELLEkahil@WEB2022',
                { expiresIn: '24h'}
            );
            //retourner le token de l'utilisateur qui s'est authentifié
            res.status(200).send({ 
                token : token
            });
        }
    })(req, res, next);
    
});



module.exports = router;
