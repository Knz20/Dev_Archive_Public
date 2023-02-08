const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        //Récupération du token envoyé par l'utilisateur, soit dans les headers ou le body ou le query
        const token = req.headers.authorization.split(' ')[1] || req.body.token || req.query.token;
        let tkn = jwt.verify(token, 'AMELLEkahil@WEB2022');
        req.decodedToken = { username : tkn.username};
        //On passe le rélai à la fonction suivante
        next();
    }
    catch (err) {
        //Affichage des erreurs en console et renvoi à l'utilisateur
        console.error(err)
        res.status(401).send("Bad Crédential/Incorrect User");
    }
}