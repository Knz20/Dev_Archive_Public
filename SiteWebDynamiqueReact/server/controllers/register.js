const bcrypt = require("bcrypt")
const sequelize = require("../models/users");
const User= sequelize.models.Users;

exports.createUser = (req, res, next) => {

    //Vérification si les données ont bien été envoyées
    if(req.query.password != null && req.query.email != null && req.query.pseudo != null){
       
       bcrypt.hash(req.query.password, 10) //hashage du mot de passe
       .then(hash => {
            //appel de la fonction addUser
            addUser(req, res,hash);
       })
       .catch(error =>{
        console.log(error) ;
        res.status(400).end("KO");
    });

    } 
    
    else{
        
     res.status(400).end("KO");

    }

}

// Pour l'ajout d'un nouvel utilisateur
function addUser(req,res,hash)
{
    // Synchronisation du sequelize
    sequelize.sync()
    .then(() => {

        User.create({
            ...req.query,
            password: hash ,//remplace  le password par le hash generé
            imgUrl : req.protocol + '://' + req.get('host') +
             '/files/' + req.file.filename//ajouter l'url a la base de donnée
            
            })
        .then(() =>{
            console.log('votre compte a été crée avec succès') ;
            res.status(201).end("compte crée avec succès");
    
        } )
        .catch(error =>{
            console.log(error) ;
            //Renvoi d'un code erreur
            res.status(400).end("KO");
    
        } );
    })
    .catch(error =>{
        console.log(error) ;
        res.status(400).end("erreur lors de la création du compte");
    });
}

