const sequelize = require("../models/users");
const User= sequelize.models.Users;
const { Op } = require("sequelize");

exports.findUser = (req, res) =>{
   const username = req.query.username;
   if(username == req.decodedToken.username){
    User.findOne({ 
        where: {
            [Op.or]: [ //Vérification soit par pseudo, soit pas email
                { pseudo: username },
                { email: username }
              ]
          }
        })
        .then(user => {
                res.status(200).send({
                    //Données du profil à renvoyer
                 email : user.email,
                 pseudo : user.pseudo,
                 name : user.name,
                 lastName : user.lastName,
                 imgUrl : user.imgUrl
                })
                       
        }
        
        ) 
        .catch(err => {
            console.log(err);
            res.status(401).send("utilisateur "+username + " introuvable");
        })     
        
   }
   else{
    res.status(401).send("Error");
   }
}

