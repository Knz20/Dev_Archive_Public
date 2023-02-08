const bcrypt = require("bcrypt")
const sequelize = require("../models/objets");
const Astuce= sequelize.models.Objets;

exports.createAstuce = (req, res) => {
    
    if(req.query.username == req.decodedToken.username){  
                addAstuce(req, res);}
    else{
        res.status(401).send("Error");
    }
    
}

// Pour l'ajout d'une nouvelle astuce
function addAstuce(req,res,next)
{
    // Synchronisation du sequelize
    sequelize.sync()
    .then(() => {

        Astuce.create({
            ...req.query,
            imgUrlObjet : req.protocol + '://' + req.get('host') +
             '/files/' + req.file.filename,//ajouter l'url a la base de donnée
            username: req.query.username
            })
        .then(() =>{
            console.log("l'astuce a été ajouté avec succes") ;
            res.status(201).end("astuce ajoutée");
    
        } )
        .catch(error =>{
            console.log(error) ;
            //Renvoi d'un code erreur
            res.status(400).end("KO");
    
        } );
    })
    .catch(error =>{
        console.log(error) ;
        res.status(400).end("erreur lors de l'ajout d'astuce ");
    });
}

